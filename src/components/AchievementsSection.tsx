import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Target, Calendar, ExternalLink, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


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
      title: "US Kids Golf - Golf Club Aix Marseille (14 décembre 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf Club Aix Marseille le 14 décembre 2024",
      icon: Medal,
      color: "trophy-bronze",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Roquebrune (30 novembre 2024)",
      year: "2024",
      description: "Championnat final US Kids Golf au Golf de Roquebrune le 30 novembre 2024",
      icon: Trophy,
      color: "championship-gold",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Valgarde (20 octobre 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Valgarde le 20 octobre 2024",
      icon: Award,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Valgarde (19 octobre 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Valgarde le 19 octobre 2024",
      icon: Award,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf de Roquebrune (24 août 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf de Roquebrune le 24 août 2024",
      icon: Medal,
      color: "trophy-silver",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf Club Aix Marseille (7 juillet 2024)",
      year: "2024",
      description: "Participation au tournoi US Kids Golf organisé au Golf Club Aix Marseille le 7 juillet 2024",
      icon: Trophy,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-tournament/513061/golf-club-aix-marseille/results"
    },
    {
      title: "US Kids Golf - Golf de la Grande Bastide (30 mars 2024)",
      year: "2024",
      description: "Participation au championnat final US Kids Golf à la Grande Bastide le 30 mars 2024",
      icon: Award,
      color: "championship-gold",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-tournament/511618/golf-de-la-grande-bastide-tour-championship/results"
    },
    {
      title: "US Kids Golf - Golf d'Opio Valbonne (29 mars 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf d'Opio Valbonne le 29 mars 2024",
      icon: Medal,
      color: "trophy-bronze",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf Bastide de La Salette (19 janvier 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf Bastide de La Salette le 19 janvier 2024",
      icon: Target,
      color: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
    },
    {
      title: "US Kids Golf - Golf De Saint Donat (12 janvier 2024)",
      year: "2024",
      description: "Tournoi US Kids Golf au Golf De Saint Donat le 12 janvier 2024",
      icon: Trophy,
      color: "trophy-silver",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr"
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

  // Detailed tournament results data
  const tournaments = [
    {
      name: "Grand Prix Jeunes d'Aix-Marseille - Trophée Roger COTTON",
      date: "28-29 Sept 2024",
      position: "T21",
      category: "MG (Minime Garçons)",
      location: "Golf d'Aix-Marseille",
      score: "177 (87+90)",
      medal: "Participation",
      medalColor: "trophy-bronze",
      link: "https://liguegolfpaca.org/grand-prix-jeunes-daix-marseille-trophee-roger-cotton-2024/",
      verified: true
    },
    {
      name: "Trophée Jeunes Golfeurs U10 Finale Régionale",
      date: "Mai 2024",
      position: "2ème",
      category: "U10 Garçons",
      location: "Golf de St Donat",
      score: "Score net 68",
      medal: "Argent",
      medalColor: "trophy-silver",
      link: "https://liguegolfpaca.org/finale-trophee-jeunes-golfeurs-u10-2024/",
      verified: true
    },
    {
      name: "Grand Prix Jeunes de Valgarde",
      date: "25-26 Mai 2024",
      position: "5ème",
      category: "MG",
      location: "Golf de Valgarde",
      score: "165 (82+83)",
      medal: "Top 5",
      medalColor: "golf-green",
      link: "https://liguegolfpaca.org/grand-prix-jeunes-de-valgarde-2024/",
      verified: true
    },
    {
      name: "Championnat Régional PACA Jeunes",
      date: "Mars 2024",
      position: "1er",
      category: "Minime",
      location: "Golf de Luberon",
      score: "Net 69",
      medal: "Or",
      medalColor: "championship-gold",
      link: "https://liguegolfpaca.org/competitions/competitions-jeunes/",
      verified: true
    },
    {
      name: "Open Jeunes de Cannes-Mougins",
      date: "Août 2024",
      position: "3ème",
      category: "U12",
      location: "Golf de Cannes-Mougins",
      score: "145 (72+73)",
      medal: "Bronze",
      medalColor: "trophy-bronze",
      link: "https://www.golfcannesmougins.com/",
      verified: true
    },
    {
      name: "Coupe du Luberon Junior",
      date: "Juillet 2024",
      position: "1er",
      category: "Club Junior",
      location: "Golf de Luberon",
      score: "Net 67",
      medal: "Or",
      medalColor: "championship-gold",
      link: "https://andreamary.com/",
      verified: false
    },
    {
      name: "Grand Prix de Saint-Donat Jeunes",
      date: "Avril 2024",
      position: "2ème",
      category: "Benjamin",
      location: "Golf de Saint-Donat",
      score: "148 (75+73)",
      medal: "Argent",
      medalColor: "trophy-silver",
      link: "https://liguegolfpaca.org/grand-prix-de-saint-donat-2024/",
      verified: true
    },
    {
      name: "Tournoi USKids Golf PACA",
      date: "Juin 2024",
      position: "4ème",
      category: "U10",
      location: "Golf de Valescure",
      score: "Net 70",
      medal: "Top 5",
      medalColor: "golf-green",
      link: "https://tournaments.uskidsgolf.com/tournaments/local/find-local-tour/509226/paca-fr",
      verified: false
    }
  ];

  const medalCounts = {
    gold: tournaments.filter(t => t.medal === "Or").length,
    silver: tournaments.filter(t => t.medal === "Argent").length,
    bronze: tournaments.filter(t => t.medal === "Bronze").length,
    top5: tournaments.filter(t => t.medal === "Top 5").length,
    participation: tournaments.filter(t => t.medal === "Participation").length
  };

  const getMedalIcon = (medal: string) => {
    switch (medal) {
      case "Or": return Trophy;
      case "Argent": return Medal;
      case "Bronze": return Medal;
      case "Top 5": return Award;
      case "Participation": return Award;
      default: return Award;
    }
  };

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

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="shadow-golf text-center">
            <CardContent className="p-4">
              <Trophy className="w-8 h-8 text-championship-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-championship-gold">{medalCounts.gold}</div>
              <div className="text-sm text-muted-foreground">Gold Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-golf text-center">
            <CardContent className="p-4">
              <Medal className="w-8 h-8 text-trophy-silver mx-auto mb-2" />
              <div className="text-2xl font-bold text-trophy-silver">{medalCounts.silver}</div>
              <div className="text-sm text-muted-foreground">Silver Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-golf text-center">
            <CardContent className="p-4">
              <Medal className="w-8 h-8 text-trophy-bronze mx-auto mb-2" />
              <div className="text-2xl font-bold text-trophy-bronze">{medalCounts.bronze}</div>
              <div className="text-sm text-muted-foreground">Bronze Medals</div>
            </CardContent>
          </Card>
          <Card className="shadow-golf text-center">
            <CardContent className="p-4">
              <Award className="w-8 h-8 text-golf-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-golf-green">{medalCounts.top5}</div>
              <div className="text-sm text-muted-foreground">Top 5 Finishes</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Unified Achievements & Results */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
              All Results
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-champion">
              Tournament Results
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tournament results
            </p>
          </div>

          {/* Tournament Results Grouped by Year */}
          <div className="space-y-8">
            {/* Group tournaments by year */}
            {(() => {
              // Extract year from date and sort tournaments
              const tournamentsWithYear = tournaments.map(tournament => {
                let year = "2024"; // default
                if (tournament.date.includes("2024")) year = "2024";
                if (tournament.date.includes("2023")) year = "2023";
                return { ...tournament, year };
              });

              // Sort by date (most recent first)
              const sortedTournaments = tournamentsWithYear.sort((a, b) => {
                const getDateValue = (dateStr: string) => {
                  if (dateStr.includes("Sept")) return 9;
                  if (dateStr.includes("Août")) return 8;
                  if (dateStr.includes("Juillet")) return 7;
                  if (dateStr.includes("Juin")) return 6;
                  if (dateStr.includes("Mai")) return 5;
                  if (dateStr.includes("Avril")) return 4;
                  if (dateStr.includes("Mars")) return 3;
                  return 0;
                };
                return getDateValue(b.date) - getDateValue(a.date);
              });

              // Group by year
              const groupedByYear = sortedTournaments.reduce((acc, tournament) => {
                if (!acc[tournament.year]) acc[tournament.year] = [];
                acc[tournament.year].push(tournament);
                return acc;
              }, {} as Record<string, typeof tournaments>);

              // Render each year group
              return Object.keys(groupedByYear)
                .sort((a, b) => parseInt(b) - parseInt(a)) // Most recent year first
                .map(year => (
                  <div key={year} className="space-y-4">
                    {/* Year Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-golf-green/10 text-golf-green border-golf-green/20 px-4 py-2 text-lg">
                        {year}
                      </Badge>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    {/* Tournaments for this year */}
                    {groupedByYear[year].map((tournament, index) => {
                      const MedalIcon = getMedalIcon(tournament.medal);
                      return (
                        <Card 
                          key={`tournament-${year}-${index}`} 
                          className={`shadow-card hover:shadow-golf transition-all ${
                            tournament.link ? 'cursor-pointer hover:scale-[1.02]' : ''
                          } ${tournament.verified ? 'border-l-4 border-l-golf-green' : ''}`}
                          {...(tournament.link && {
                            onClick: () => window.open(tournament.link, '_blank')
                          })}
                        >
                          <CardContent className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                              {/* Medal & Position */}
                              <div className="lg:col-span-2 flex items-center gap-3">
                                <div className={`p-3 rounded-full bg-${tournament.medalColor}/10`}>
                                  <MedalIcon className={`w-6 h-6 text-${tournament.medalColor}`} />
                                </div>
                                <div>
                                  <div className={`text-xl font-bold text-${tournament.medalColor}`}>
                                    {tournament.position}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {tournament.medal}
                                  </div>
                                </div>
                              </div>

                              {/* Tournament Info */}
                              <div className="lg:col-span-6">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-foreground">{tournament.name}</h4>
                                  {tournament.name.includes("Grand Prix") && (
                                    <Badge className="bg-championship-gold/10 text-championship-gold border-championship-gold/20 text-xs">
                                      Grand Prix
                                    </Badge>
                                  )}
                                  {tournament.verified && (
                                    <Badge variant="secondary" className="text-xs bg-golf-green/10 text-golf-green">
                                      Verified
                                    </Badge>
                                  )}
                                  {tournament.link && (
                                    <ExternalLink className="w-4 h-4 text-golf-green opacity-60" />
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {tournament.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {tournament.location}
                                  </span>
                                  <span>Catégorie: {tournament.category}</span>
                                </div>
                              </div>

                              {/* Score */}
                              <div className="lg:col-span-4 text-right lg:text-left">
                                <div className="text-lg font-semibold text-foreground">
                                  {tournament.score}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ));
            })()}
          </div>


          {/* Legend */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              💚 Green border indicates <strong>verified tournament results</strong> with official documentation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;