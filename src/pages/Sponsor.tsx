import SponsorshipSection from "@/components/SponsorshipSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Star, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Sponsor = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Button variant="outline" size="sm" asChild className="bg-golf-green border-golf-green text-white hover:bg-golf-green/90 hover:text-white shadow-lg">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            {t('success.home')}
          </Link>
        </Button>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-golf-green/10 to-championship-gold/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            {t('sponsorship.badge')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-champion">
            {t('sponsor.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('sponsor.description')}
          </p>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('sponsor.why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-golf-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('sponsor.champion.title')}</h3>
                <p className="text-muted-foreground">
                  {t('sponsor.champion.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-championship-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-championship-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('sponsor.goals.title')}</h3>
                <p className="text-muted-foreground">
                  {t('sponsor.goals.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-golf-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('sponsor.partnership.title')}</h3>
                <p className="text-muted-foreground">
                  {t('sponsor.partnership.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Sponsorship Section */}
      <SponsorshipSection />
    </div>
  );
};

export default Sponsor;