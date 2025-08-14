import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { label: "Years Playing", value: "3", icon: Clock },
  { label: "Tournaments Won", value: "5+", icon: Zap },
  { label: "Golf Lessons", value: "150+", icon: Users },
  { label: "Passion Level", value: "100%", icon: Heart }
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Andrea's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-golf bg-gradient-to-br from-golf-green/20 to-championship-gold/20 p-1">
                <img 
                  src="/lovable-uploads/fa7996ac-cf72-48ad-a56e-df0b95c350b2.png" 
                  alt="Andrea - Golf Champion on the golf course" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-championship-gold text-golf-green p-4 rounded-full shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge className="mb-4 bg-golf-green/10 text-golf-green border-golf-green/20">
              Meet the Champion
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t('about.passion.desc')}
              </p>
              <p>
                {t('about.training.desc')}
              </p>
              <p>
                {t('about.goals.desc')}
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg">
                <Heart className="w-5 h-5" />
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 order-3 lg:col-span-2">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-golf transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 bg-golf-green/10 rounded-full w-fit">
                      <IconComponent className="w-8 h-8 text-golf-green" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-golf-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;