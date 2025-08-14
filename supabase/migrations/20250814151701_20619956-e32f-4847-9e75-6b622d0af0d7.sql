-- Create sponsors table to track sponsor information
CREATE TABLE public.sponsors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  company_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create investments table to track sponsorship investments
CREATE TABLE public.investments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sponsor_id UUID REFERENCES public.sponsors(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE,
  amount INTEGER NOT NULL, -- Amount in cents
  currency TEXT DEFAULT 'usd',
  investment_tier TEXT NOT NULL, -- Bronze, Silver, Gold, Platinum
  status TEXT DEFAULT 'pending', -- pending, completed, failed
  message TEXT, -- Optional message from sponsor
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investments ENABLE ROW LEVEL SECURITY;

-- Create policies for sponsors table
CREATE POLICY "sponsors_select_own" ON public.sponsors
  FOR SELECT
  USING (user_id = auth.uid() OR email = auth.email());

CREATE POLICY "sponsors_insert_own" ON public.sponsors
  FOR INSERT
  WITH CHECK (user_id = auth.uid() OR email = auth.email());

CREATE POLICY "sponsors_update_own" ON public.sponsors
  FOR UPDATE
  USING (user_id = auth.uid() OR email = auth.email());

-- Create policies for investments table
CREATE POLICY "investments_select_own" ON public.investments
  FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "investments_insert" ON public.investments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "investments_update" ON public.investments
  FOR UPDATE
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_sponsors_updated_at
  BEFORE UPDATE ON public.sponsors
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_investments_updated_at
  BEFORE UPDATE ON public.investments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();