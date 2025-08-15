import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Zap, Trophy, Target, Star, Calendar, Medal, Award, TrendingUp, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('about.stats.years'), 
      value: "4", 
      icon: Calendar,
      color: "text-golf-green"
    },
    { 
      label: t('about.stats.tournaments'), 
      value: "12+", 
      icon: Trophy,
      color: "text-championship-gold" 
    },
    { 
      label: t('about.stats.podiums'), 
      value: "8", 
      icon: Medal,
      color: "text-trophy-bronze"
    },
    { 
      label: t('about.stats.ranking'), 
      value: t('about.stats.ranking.value'), 
      icon: Target,
      color: "text-golf-green"
    },
    { 
      label: t('about.stats.best'), 
      value: t('about.stats.best.value'), 
      icon: Award,
      color: "text-championship-gold"
    },
    { 
      label: t('about.stats.training'), 
      value: "15h", 
      icon: TrendingUp,
      color: "text-golf-green"
    },
    { 
      label: t('about.stats.ffgolf'), 
      value: t('about.stats.ffgolf.value'), 
      icon: Star,
      color: "text-championship-gold",
      link: "https://pages.ffgolf.org/merite/jeunes/messieurs"
    },
    { 
      label: t('about.stats.grandprix'), 
      value: "5+", 
      icon: Trophy,
      color: "text-championship-gold"
    },
    { 
      label: t('about.stats.club'), 
      value: t('about.stats.club.value'), 
      icon: MapPin,
      color: "text-golf-green",
      link: "https://andreamary.com/"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card" data-section="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Andrea's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-golf bg-gradient-to-br from-golf-green/20 to-championship-gold/20 p-1">
                <img 
                  src="/lovable-uploads/1b679295-73b3-44d6-b62d-0f8fd1300ad1.png" 
                  alt="Andrea - Golf Champion overlooking beautiful countryside" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Gallery Showcase - Section 2 (2 images) */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/6ae61128-27aa-498c-8e45-3b5d039287f7.png" 
                    alt="Andrea's perfect swing technique" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/fa7996ac-cf72-48ad-a56e-df0b95c350b2.png" 
                    alt="Andrea during tournament focus" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
            <div className="space-y-6 text-lg text-muted-foreground">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('about.passion.title')}</h3>
                <p>{t('about.passion.desc')}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('about.training.title')}</h3>
                <p>{t('about.training.desc')}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('about.goals.title')}</h3>
                <p>{t('about.goals.desc')}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('about.personality.title')}</h3>
                <p>{t('about.personality.desc')}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('about.achievements.title')}</h3>
                <p>{t('about.achievements.desc')}</p>
              </div>
            </div>
            
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 order-3 lg:col-span-2">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className={`text-center shadow-card hover:shadow-golf transition-all hover:scale-105 ${
                    stat.link ? 'cursor-pointer' : ''
                  }`}
                  {...(stat.link && {
                    onClick: () => window.open(stat.link, '_blank'),
                  })}
                >
                  <CardHeader className="pb-3">
                    <div className="mx-auto p-3 bg-golf-green/10 rounded-full w-fit">
                      <IconComponent className={`w-6 h-6 ${stat.color || 'text-golf-green'}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color || 'text-golf-green'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    {stat.link && (
                      <div className="text-xs text-golf-green mt-1 opacity-60">
                        Click to visit website
                      </div>
                    )}
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