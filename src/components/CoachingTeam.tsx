import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, Trophy, Instagram, ExternalLink, Calendar, Award, Target, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoachingTeam = () => {
  const { t } = useLanguage();

  const coaches = [
    {
      id: "isabelle-boineau",
      name: "Isabelle Boineau",
      title: "Professional Golfer & PGA Coach",
      specialization: "Professional Tournament Experience & Youth Development",
      experience: "15+ years",
      location: "Golf de Luberon, PACA Region",
      instagram: "@isabelle.boineau.golf",
      email: "isabelle.boineau@golfluberon.com",
      website: "https://www.golfduluberon.com/",
      role: "Primary Coach",
      image: "/src/assets/isabelle-boineau.jpg",
      briefDescription: "Professionnelle golfeuse française célèbre, championne du Ladies European Tour et coach certifiée PGA.",
      qualifications: [
        "Ladies European Tour Professional Player",
        "PGA France Certified Professional",
        "Youth Golf Development Specialist", 
        "Tournament Winner - Scottish Open 2016"
      ],
      achievements: [
        {
          title: "Ladies European Tour Winner",
          year: "2016",
          organization: "Scottish Open",
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
        "Professional golfer on the Ladies European Tour",
        "Winner of the 2016 Ladies Scottish Open",
        "Multiple tournament appearances and professional experience",
        "Transitioned to coaching to share professional tournament knowledge",
        "Specialized in developing young talent with real-world professional insight"
      ],
      coachingPhilosophy: "Having competed at the highest level of professional golf, I understand what it takes to succeed. My goal is to share this professional experience with young golfers, teaching them not just technique, but the mental fortitude and strategic thinking needed to excel in competitive golf.",
      partnershipDetails: "Isabelle brings her professional tournament experience to Andrea's development, focusing on competitive mindset, tournament preparation, and the transition from junior to professional-level golf."
     },
     {
       id: "stephanie-paloumet",
       name: "Stephanie Paloumet",
       title: "Golf Instructor & Technique Specialist",
       specialization: "Swing Technique & Mental Game",
       experience: "12+ years",
       location: "Golf de Luberon, PACA Region",
       instagram: "https://www.instagram.com/stephanie_paloumet/",
       email: "stephanie.paloumet@golfluberon.com",
       website: "https://www.golfduluberon.com/",
       role: "Technique Coach",
       image: "/lovable-uploads/a59ecb74-88ec-4ca7-a42f-f3a19a061122.png",
       briefDescription: "Instructrice de golf expérimentée spécialisée dans la technique du swing et le mental du jeu.",
       qualifications: [
         "PGA France Certified Professional",
         "Swing Analysis Specialist",
         "Sports Psychology in Golf",
         "Youth Development Coach"
       ],
       achievements: [
         {
           title: "PGA Teaching Professional Certification",
           year: "2012",
           organization: "PGA France",
           icon: Award
         },
         {
           title: "Youth Coach of the Year",
           year: "2022",
           organization: "Ligue PACA Golf",
           icon: Trophy
         },
         {
           title: "Developed 25+ Junior Players",
           year: "2012-2024",
           organization: "Golf de Luberon",
           icon: Target
         }
       ],
       careerHighlights: [
         "Specialized in swing technique analysis and improvement",
         "Expert in sports psychology applications for golf",
         "Developed comprehensive youth training programs",
         "Mentor for junior golfers in competitive environments",
         "Focus on building confidence and mental resilience"
       ],
       coachingPhilosophy: "I believe that technical excellence must be balanced with mental strength. My approach focuses on building solid fundamentals while developing the psychological tools needed for competitive success.",
       partnershipDetails: "Stephanie works closely with Andrea on refining swing mechanics and developing mental strategies for tournament play, complementing the professional experience provided by Isabelle."
     },
     {
      id: "andrea-father",
      name: "Andrea's Father",
      title: "Personal Support & Motivation Coach",
      specialization: "Family Support & Travel Companion",
      experience: "4+ years",
      location: "PACA Region",
      role: "Family Support",
      image: "/lovable-uploads/cd9b2f1d-ef39-4be1-91aa-b3c4370e0995.png",
      briefDescription: "Le soutien inconditionnel et la motivation d'Andrea dans chaque tournoi et entraînement.",
      qualifications: [
        "Dedicated Golf Parent",
        "Tournament Travel Coordinator", 
        "Emotional Support Specialist",
        "Golf Equipment Manager"
      ],
      achievements: [
        {
          title: "Most Supportive Golf Parent",
          year: "2021-2024",
          organization: "Golf de Luberon",
          icon: Heart
        },
        {
          title: "Perfect Tournament Attendance",
          year: "2022-2024",
          organization: "Regional Tournaments",
          icon: Target
        },
        {
          title: "Family Golf Development Award",
          year: "2023",
          organization: "Ligue PACA",
          icon: Trophy
        }
      ],
      careerHighlights: [
        "Accompanies Andrea to every tournament and practice session",
        "Provides unwavering emotional support and motivation",
        "Manages all travel logistics and tournament preparations",
        "Creates a positive and encouraging environment for Andrea's development",
        "Coordinates with coaches to ensure consistent training approach"
      ],
      coachingPhilosophy: "Being a golf parent means being Andrea's biggest supporter, his safe harbor during tough rounds, and his celebration partner during victories. My role is to provide unconditional love and support while letting the professionals handle the technical training.",
      partnershipDetails: "As Andrea's father, I'm there for every practice, every tournament, and every milestone. My focus is on emotional support, logistics coordination, and ensuring Andrea maintains his love for the game while pursuing excellence."
     }
  ];

  return (
    <section className="py-20 bg-gradient-card" data-section="coaching">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-golf-green/10 text-golf-green border-golf-green/20">
            Professional Coaching Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-champion">
            Andrea's Coaching Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the professional team who guide Andrea's development and shape his golf journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <Dialog key={coach.id}>
              <DialogTrigger asChild>
                <Card className="shadow-championship hover:shadow-golf transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    {/* Coach Image */}
                    <div className="mb-4">
                      {coach.image ? (
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-golf-green/20">
                          <img 
                            src={coach.image} 
                            alt={coach.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 mx-auto bg-golf-green/10 rounded-full flex items-center justify-center">
                          <User className="w-12 h-12 text-golf-green" />
                        </div>
                      )}
                    </div>
                    
                    {/* Coach Info */}
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-championship-gold/10 text-championship-gold mb-2">
                        {coach.role}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">
                        {coach.name}
                      </h3>
                      <p className="text-lg font-semibold text-golf-green">
                        {coach.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {coach.briefDescription}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-3">
                        <Calendar className="w-3 h-3" />
                        {coach.experience} Experience
                      </div>
                    </div>
                    
                    <Button variant="outline" className="mt-4 w-full">
                      Voir les détails
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center mb-4">
                    {coach.name} - {coach.role}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Coach Profile */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start gap-4">
                      {coach.image ? (
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-golf-green/20 flex-shrink-0">
                          <img 
                            src={coach.image} 
                            alt={coach.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="p-4 bg-golf-green/10 rounded-full flex-shrink-0">
                          <User className="w-8 h-8 text-golf-green" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="space-y-1 text-muted-foreground">
                          <p className="text-lg font-semibold text-golf-green">
                            {coach.title}
                          </p>
                          <p>{coach.specialization}</p>
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {coach.experience} Experience
                          </p>
                          <p>📍 {coach.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Coaching Philosophy */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Coaching Philosophy</h3>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{coach.coachingPhilosophy}"
                      </p>
                    </div>

                    {/* Career Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Career Highlights</h3>
                      <ul className="space-y-2">
                        {coach.careerHighlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Training Partnership */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Partnership with Andrea</h3>
                      <p className="text-muted-foreground">
                        {coach.partnershipDetails}
                      </p>
                    </div>

                    {/* Contact */}
                    {(coach.instagram || coach.website) && (
                      <div className="flex items-center gap-4 pt-4 border-t">
                        {coach.instagram && (
                          <Button variant="outline" className="flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            {coach.instagram}
                          </Button>
                        )}
                        {coach.website && (
                          <Button 
                            variant="outline" 
                            className="flex items-center gap-2"
                            onClick={() => window.open(coach.website, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Website
                          </Button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Achievements & Qualifications Sidebar */}
                  <div className="space-y-6">
                    {/* Qualifications */}
                    <Card className="shadow-golf">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Award className="w-5 h-5 text-championship-gold" />
                          Qualifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {coach.qualifications.map((qualification, index) => (
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
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Trophy className="w-5 h-5 text-golf-green" />
                          Achievements
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {coach.achievements.map((achievement, index) => {
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
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingTeam;