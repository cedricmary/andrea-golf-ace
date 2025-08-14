import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Trophy, Instagram, ExternalLink, Calendar, Award, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoachingTeam = () => {
  const { t } = useLanguage();

  const coachProfile = {
    name: "Isabelle Boileau",
    title: "PGA Professional & Personal Coach",
    specialization: "Youth Development & Technical Training",
    experience: "15+ years",
    location: "Golf de Luberon, PACA Region",
    instagram: "@isabelle.boileau.golf",
    email: "isabelle.boileau@golfluberon.com",
    qualifications: [
      "PGA France Certified Professional",
      "Youth Golf Development Specialist", 
      "Mental Performance Coach Level 2",
      "Biomechanics & Swing Analysis Certified"
    ],
    achievements: [
      {
        title: "Regional Youth Coach of the Year",
        year: "2023",
        organization: "Ligue PACA",
        icon: Trophy
      },
      {
        title: "PGA Teaching Professional Certification",
        year: "2009",
        organization: "PGA France",
        icon: Award
      },
      {
        title: "Developed 15+ Junior Champions",
        year: "2009-2024",
        organization: "Various Regional Tournaments",
        icon: Target
      }
    ],
    careerHighlights: [
      "Former competitive player on Ladies European Tour qualifying events",
      "Specialized training in youth golf development since 2010",
      "Mentored over 50 junior golfers to regional and national success",
      "Regular contributor to French golf coaching publications",
      "Guest instructor at PGA France training seminars"
    ],
    coachingPhilosophy: "Every young golfer has unique potential. My role is to nurture their natural abilities while building a strong technical foundation and mental resilience that will serve them throughout their golf journey."
  };

  return (
    <section className="py-20 bg-gradient-card" data-section="coaching">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-golf-green/10 text-golf-green border-golf-green/20">
            Professional Coaching
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Andrea's Coaching Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the professional who guides Andrea's development and shapes his golf journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coach Profile Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-championship">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-golf-green/10 rounded-full">
                    <User className="w-8 h-8 text-golf-green" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {coachProfile.name}
                    </CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="text-lg font-semibold text-golf-green">
                        {coachProfile.title}
                      </p>
                      <p>{coachProfile.specialization}</p>
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {coachProfile.experience} Experience
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(`https://instagram.com/${coachProfile.instagram.replace('@', '')}`, '_blank')}
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Coaching Philosophy */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coaching Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{coachProfile.coachingPhilosophy}"
                  </p>
                </div>

                {/* Career Highlights */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Career Highlights</h3>
                  <ul className="space-y-2">
                    {coachProfile.careerHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    {coachProfile.instagram}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    📍 {coachProfile.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Qualifications */}
          <div className="space-y-6">
            {/* Qualifications */}
            <Card className="shadow-golf">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-championship-gold" />
                  Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {coachProfile.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-championship-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Professional Achievements */}
            <Card className="shadow-golf">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-golf-green" />
                  Professional Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {coachProfile.achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="p-2 bg-golf-green/10 rounded-full">
                        <IconComponent className="w-4 h-4 text-golf-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {achievement.organization} • {achievement.year}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Training Partnership */}
            <Card className="shadow-golf">
              <CardHeader>
                <CardTitle className="text-lg">Training Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Andrea has been training under Isabelle's guidance since 2022, focusing on:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-golf-green rounded-full" />
                    Technical swing development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-golf-green rounded-full" />
                    Mental game & course management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-golf-green rounded-full" />
                    Tournament preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-golf-green rounded-full" />
                    Physical conditioning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingTeam;