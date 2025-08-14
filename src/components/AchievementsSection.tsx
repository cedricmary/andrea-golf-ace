import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Target, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import trophyImage from "@/assets/championship-trophy.jpg";
import medalsImage from "@/assets/golf-medals.jpg";


const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      title: t('achievements.trophee2024'),
      year: "2024",
      description: t('achievements.trophee2024.desc'),
      icon: Trophy,
      color: "trophy-silver",
      link: "https://liguegolfpaca.org/finale-trophee-jeunes-golfeurs-u10-2024/"
    },
    {
      title: t('achievements.championship'),
      year: "2024", 
      description: t('achievements.championship.desc'),
      icon: Trophy,
      color: "championship-gold"
    },
    {
      title: t('achievements.medal'),
      year: "2024",
      description: t('achievements.medal.desc'),
      icon: Medal,
      color: "trophy-bronze"
    },
    {
      title: "Longest Drive Award",
      year: "2023",
      description: "Record holder for longest drive in junior category",
      icon: Target,
      color: "golf-green"
    },
    {
      title: "Most Improved Player",
      year: "2023",
      description: "Outstanding progress and dedication to the sport",
      icon: Award,
      color: "championship-gold"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-champion">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('achievements.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Trophy Image */}
          <div className="lg:col-span-1">
            <Card className="shadow-trophy border-championship-gold/20">
              <CardContent className="p-6">
                <img 
                  src={trophyImage} 
                  alt="Championship Trophy" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-center text-championship-gold mb-2">
                  Latest Championship Trophy
                </h3>
                <p className="text-center text-muted-foreground">
                  Andrea's most recent victory in the junior club championship
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements List */}
          <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const CardComponent = achievement.link ? 'a' : 'div';
              
              return (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-golf transition-shadow hover:scale-105 transition-transform"
                  {...(achievement.link && {
                    onClick: () => window.open(achievement.link, '_blank'),
                    style: { cursor: 'pointer' }
                  })}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${achievement.color}/10`}>
                        <IconComponent className={`w-6 h-6 text-${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          {achievement.link && (
                            <ExternalLink className="w-4 h-4 text-golf-green opacity-60" />
                          )}
                        </div>
                        <Badge variant="secondary" className="mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                    {achievement.link && (
                      <p className="text-xs text-golf-green mt-2 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Voir les résultats officiels
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          </div>
        </div>
        
        {/* Medals Gallery */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Medal Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={medalsImage} 
              alt="Golf Medals Collection" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-center text-muted-foreground mt-4">
              A growing collection of medals and ribbons from various tournaments and competitions
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AchievementsSection;