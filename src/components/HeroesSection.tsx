import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import roryMcIlroyImage from "@/assets/rory-mcilroy-accurate.jpg";
import rickyFowlerImage from "@/assets/ricky-fowler-accurate.jpg";

const HeroesSection = () => {
  const { t } = useLanguage();

  const heroes = [
    {
      id: "rory-mcilroy",
      name: "Rory McIlroy",
      nationality: "Northern Ireland",
      achievements: "4 Major Championships",
      inspiration: "Power, precision, and mental strength combined",
      quote: "I've always said the harder you work, the luckier you get.",
      image: "/lovable-uploads/8117ca90-cd3c-4c08-932a-927a9e471b78.png",
      majorWins: 4,
      icon: Star,
      website: "http://www.rorymcilroy.com/"
    },
    {
      id: "ricky-fowler",
      name: "Ricky Fowler",
      nationality: "USA",
      achievements: "PGA Tour Champion",
      inspiration: "Style, charisma, and clutch performances",
      quote: "I want to be known as a guy who shows up when it matters most.",
      image: "/lovable-uploads/8c4afb98-1be5-42b5-9f75-c7d6e412e173.png",
      majorWins: 0,
      icon: Target,
      website: "https://rickiefowler.com/"
    },
    {
      id: "romain-langasque",
      name: "Romain Langasque",
      nationality: "France",
      achievements: "European Tour Winner",
      inspiration: "French excellence and European pride",
      quote: "Representing France on the world stage is an honor.",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop&crop=face",
      majorWins: 0,
      icon: Award,
      website: "https://romainlangasque.com/"
    }
  ];

  return (
    <section className="py-20 bg-gradient-contrast" data-section="heroes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-championship-gold/10 text-championship-gold border-championship-gold/20">
            Golf Inspirations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Mes Héros du Golf
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les champions qui m'inspirent et me motivent à donner le meilleur de moi-même sur le parcours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero) => {
            const IconComponent = hero.icon;
            return (
              <Card key={hero.id} className="shadow-golf hover:shadow-trophy transition-all hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  {/* Hero Image */}
                  <div className="mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-championship-gold/20 group-hover:border-championship-gold/40 transition-all">
                      <img 
                        src={hero.image} 
                        alt={hero.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Hero Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <IconComponent className="w-5 h-5 text-championship-gold" />
                      <Badge variant="secondary" className="bg-golf-green/10 text-golf-green">
                        {hero.nationality}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {hero.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 text-championship-gold">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {hero.achievements}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{hero.quote}"
                    </p>
                    
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-golf-green font-medium">
                        {hero.inspiration}
                      </p>
                      {hero.website && (
                        <a
                          href={hero.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs text-championship-gold hover:text-championship-gold/80 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Site officiel
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Inspiration Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-hero rounded-2xl border border-championship-gold/20">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                "Ces champions me montrent qu'avec du travail, de la détermination et de la passion, 
                tout est possible dans le golf. Chacun d'eux m'inspire à repousser mes limites."
              </blockquote>
              <cite className="text-championship-gold font-semibold">— Andrea</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroesSection;