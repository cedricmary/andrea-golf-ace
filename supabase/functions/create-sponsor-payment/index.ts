import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-SPONSOR-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const { amount, tier, email, fullName, companyName, phone, message } = await req.json();
    
    if (!amount || !tier || !email || !fullName) {
      throw new Error("Missing required fields");
    }

    logStep("Payment request received", { amount, tier, email, fullName });

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Initialize Supabase with service role for database operations
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Check if sponsor already exists
    const { data: existingSponsor } = await supabaseService
      .from("sponsors")
      .select("*")
      .eq("email", email)
      .single();

    let sponsorId = existingSponsor?.id;

    // Create or update sponsor record
    if (!existingSponsor) {
      const { data: newSponsor, error: sponsorError } = await supabaseService
        .from("sponsors")
        .insert({
          email,
          full_name: fullName,
          company_name: companyName,
          phone,
        })
        .select()
        .single();

      if (sponsorError) throw sponsorError;
      sponsorId = newSponsor.id;
      logStep("New sponsor created", { sponsorId });
    } else {
      logStep("Existing sponsor found", { sponsorId });
    }

    // Check if customer exists in Stripe
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${tier} Sponsorship - Andrea Golf Champion`,
              description: `${tier} tier sponsorship investment for Andrea's golf career`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/sponsor-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/sponsor`,
      metadata: {
        sponsor_id: sponsorId,
        investment_tier: tier,
      },
    });

    // Create investment record
    const { error: investmentError } = await supabaseService
      .from("investments")
      .insert({
        sponsor_id: sponsorId,
        stripe_session_id: session.id,
        amount,
        investment_tier: tier,
        message,
        status: "pending",
      });

    if (investmentError) throw investmentError;

    logStep("Investment record created", { sessionId: session.id });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});