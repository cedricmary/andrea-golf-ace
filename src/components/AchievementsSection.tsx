import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Target, Calendar } from "lucide-react";
import trophyImage from "@/assets/championship-trophy.jpg";
import medalsImage from "@/assets/golf-medals.jpg";

const achievements = [
  {
    title: "Junior Club Champion",
    year: "2024",
    description: "First place in the under-12 club championship tournament",
    icon: Trophy,
    color: "championship-gold"
  },
  {
    title: "Regional Youth Cup",
    year: "2024",
    description: "Top 3 finish in the regional youth golf competition",
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

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-champion">
            Championship Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of Andrea's outstanding accomplishments in competitive golf
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
                return (
                  <Card key={index} className="shadow-card hover:shadow-golf transition-shadow hover:scale-105 transition-transform">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${achievement.color}/10`}>
                          <IconComponent className={`w-6 h-6 text-${achievement.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            {achievement.year}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achievement.description}</p>
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