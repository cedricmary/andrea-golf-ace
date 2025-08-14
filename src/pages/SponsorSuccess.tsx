import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Home, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const SponsorSuccess = () => {
  const { t } = useLanguage();
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
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            {t('success.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            {t('success.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {t('success.description')}
          </p>

          {/* What's Next Card */}
          <Card className="text-left shadow-golf mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-championship-gold" />
                {t('success.next.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">1</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('success.next.1')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">2</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('success.next.2')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">3</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('success.next.3')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-golf-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-golf-green">4</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('success.next.4')}
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
                {t('success.home')}
              </Link>
            </Button>
            
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:support@andreagolf.com">
                <Mail className="w-5 h-5" />
                {t('success.contact')}
              </a>
            </Button>
          </div>

          {/* Session ID for Reference */}
          {sessionId && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                {t('success.session')}: <span className="font-mono text-xs">{sessionId}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorSuccess;