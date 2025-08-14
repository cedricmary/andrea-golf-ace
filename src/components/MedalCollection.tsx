import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MedalCollection = () => {
  const { t } = useLanguage();

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
      link: "https://www.golfduluberon.com/",
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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            Detailed Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Medal Collection & Tournament Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete record of Andrea's tournament finishes and achievements
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

        {/* Tournament List */}
        <div className="space-y-4">
          {tournaments.map((tournament, index) => {
            const MedalIcon = getMedalIcon(tournament.medal);
            return (
              <Card 
                key={index} 
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
                        <h3 className="font-semibold text-foreground">{tournament.name}</h3>
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

        {/* Legend */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💚 Green border indicates <strong>verified tournament results</strong> with official documentation
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedalCollection;