import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Home, Mail } from "lucide-react";

const SponsorSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    // Simulate processing delay
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-golf-green/5 to-championship-gold/5">
        <Card className="max-w-md text-center shadow-golf">
          <CardContent className="pt-8">
            <div className="animate-spin mx-auto w-12 h-12 border-4 border-golf-green border-t-transparent rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Processing Your Sponsorship</h2>
            <p className="text-muted-foreground">Please wait while we confirm your payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 to-championship-gold/5 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            Payment Successful
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Thank You for Your Support!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your sponsorship means the world to Andrea and will help her continue 
            her journey toward becoming a professional golf champion.
          </p>

          {/* What's Next Card */}
          <Card className="text-left shadow-golf mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-championship-gold" />
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">1</span>
                </div>
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a receipt and sponsorship confirmation within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">2</span>
                </div>
                <div>
                  <p className="font-medium">Personal Thank You</p>
                  <p className="text-sm text-muted-foreground">
                    Andrea will personally reach out with a thank you message and updates on her progress.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">3</span>
                </div>
                <div>
                  <p className="font-medium">Sponsor Benefits</p>
                  <p className="text-sm text-muted-foreground">
                    Your sponsorship benefits will be activated, including any recognition and updates mentioned in your tier.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="champion" size="lg" asChild>
              <Link to="/">
                <Home className="w-5 h-5" />
                Return Home
              </Link>
            </Button>
            
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:support@andreagolf.com">
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Session ID for Reference */}
          {sessionId && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Reference ID: <span className="font-mono text-xs">{sessionId}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorSuccess;