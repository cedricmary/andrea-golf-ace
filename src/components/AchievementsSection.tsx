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
      color: "championship-gold",
      link: "https://liguegolfpaca.org/competitions/competitions-jeunes/"
    },
    {
      title: t('achievements.medal'),
      year: "2024",
      description: t('achievements.medal.desc'),
      icon: Medal,
      color: "trophy-bronze",
      link: "https://liguegolfpaca.org/competitions/"
    },
    // US Kids Golf PACA Tournaments 2024 - Sorted by decreasing date
    {
      title: "US Kids Golf - Golf Club Aix Marseille (Décembre)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf Club Aix Marseille le 14 décembre 2024",
      icon: Medal,
      color: "trophy-bronze",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Roquebrune (Tour Championship)",
      year: "2024",
      description: "Championnat final US Kids Golf au Golf de Roquebrune le 30 novembre 2024",
      icon: Trophy,
      color: "championship-gold",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Valgarde (20 octobre)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Valgarde le 20 octobre 2024",
      icon: Award,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Valgarde (19 octobre)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Valgarde le 19 octobre 2024",
      icon: Award,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Roquebrune",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Roquebrune le 24 août 2024",
      icon: Medal,
      color: "trophy-silver",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf Club Aix Marseille",
      year: "2024",
      description: "Participation au tournoi US Kids Golf organisé au Golf Club Aix Marseille le 7 juillet 2024",
      icon: Trophy,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-tournament/513061/golf-club-aix-marseille/results"
    },
    {
      title: "US Kids Golf - Golf de la Grande Bastide (Tour Championship)",
      year: "2024",
      description: "Participation au championnat final US Kids Golf à la Grande Bastide le 30 mars 2024",
      icon: Award,
      color: "championship-gold",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-tournament/511618/golf-de-la-grande-bastide-tour-championship/results"
    },
    {
      title: "US Kids Golf - Golf d'Opio Valbonne",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf d'Opio Valbonne le 29 mars 2024",
      icon: Medal,
      color: "trophy-bronze",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf Bastide de La Salette",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf Bastide de La Salette le 19 janvier 2024",
      icon: Target,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf De Saint Donat",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf De Saint Donat le 12 janvier 2024",
      icon: Trophy,
      color: "trophy-silver",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "Longest Drive Award",
      year: "2023",
      description: "Record holder for longest drive in junior category",
      icon: Target,
      color: "golf-green",
      link: "https://www.golfduluberon.com/"
    },
    {
      title: "Most Improved Player",
      year: "2023",
      description: "Outstanding progress and dedication to the sport",
      icon: Award,
      color: "championship-gold",
      link: "https://www.golfduluberon.com/"
    }
  ];

  return (
    <section data-section="achievements" className="py-20 bg-gradient-to-br from-background to-muted">
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