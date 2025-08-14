import SponsorshipSection from "@/components/SponsorshipSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Star } from "lucide-react";

const Sponsor = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-golf-green/10 to-championship-gold/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            Investment Opportunity
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-champion">
            Sponsor Andrea
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join us in supporting the next generation of golf champions. Your investment helps 
            Andrea access world-class training, equipment, and tournament opportunities.
          </p>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Andrea?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-golf-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proven Champion</h3>
                <p className="text-muted-foreground">
                  At just 10 years old, Andrea has already won 5+ tournaments and shows 
                  exceptional skill and dedication to the sport.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-championship-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-championship-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Clear Goals</h3>
                <p className="text-muted-foreground">
                  Your investment directly supports training costs, equipment upgrades, 
                  and tournament entry fees to accelerate Andrea's development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="mx-auto w-16 h-16 bg-golf-green/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-golf-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Brand Partnership</h3>
                <p className="text-muted-foreground">
                  Partner with a rising star and gain valuable brand exposure in the 
                  competitive youth golf community.
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