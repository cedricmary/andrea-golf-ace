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
      id: "isabelle-boileau",
      name: "Isabelle Boileau",
      title: "PGA Professional & Personal Coach",
      specialization: "Youth Development & Technical Training",
      experience: "15+ years",
      location: "Golf de Luberon, PACA Region",
      instagram: "@isabelle.boileau.golf",
      email: "isabelle.boileau@golfluberon.com",
      website: "https://www.golfduluberon.com/",
      role: "Primary Coach",
      briefDescription: "Professionnelle PGA certifiée spécialisée dans le développement des jeunes golfeurs avec 15+ ans d'expérience.",
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
      coachingPhilosophy: "Every young golfer has unique potential. My role is to nurture their natural abilities while building a strong technical foundation and mental resilience that will serve them throughout their golf journey.",
      partnershipDetails: "Andrea has been training under Isabelle's guidance since 2022, focusing on technical swing development, mental game & course management, tournament preparation, and physical conditioning."
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
    },
    {
      id: "stephanie-paloumet",
      name: "Stéphanie Paloumet",
      title: "Golf Performance Specialist",
      specialization: "Mental Game & Competition Psychology",
      experience: "12+ years",
      location: "PACA Region",
      instagram: "@stephanie.paloumet.golf",
      email: "stephanie.paloumet@golfcoach.fr",
      website: "https://www.stephanie-paloumet-golf.fr/",
      role: "Mental Performance Coach",
      briefDescription: "Spécialiste en psychologie de la compétition et préparation mentale pour jeunes athlètes.",
      qualifications: [
        "Certified Golf Psychology Coach",
        "Competition Mental Training Specialist",
        "Youth Sports Psychology Certification",
        "Performance Analysis Expert"
      ],
      achievements: [
        {
          title: "Mental Performance Coach Certification",
          year: "2012",
          organization: "European Golf Psychology Association",
          icon: Award
        },
        {
          title: "Youth Psychology Specialist",
          year: "2015",
          organization: "Sports Psychology Institute France",
          icon: Target
        },
        {
          title: "Competition Mindset Expert",
          year: "2018",
          organization: "French Golf Federation",
          icon: Trophy
        }
      ],
      careerHighlights: [
        "Specialized in young athlete mental preparation and performance optimization",
        "Developed mental training programs for junior golf champions",
        "Expert in competition stress management and focus techniques",
        "Regular speaker at golf psychology seminars across France",
        "Author of articles on mental game for golf publications"
      ],
      coachingPhilosophy: "The mental game is what separates good golfers from great champions. I help young athletes develop the psychological tools to perform under pressure and maintain confidence through every challenge.",
      partnershipDetails: "Stéphanie works with Andrea on mental preparation, competition psychology, stress management techniques, and confidence building for tournament play."
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