import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

        <div className="space-y-12">
          {coaches.map((coach, index) => (
            <div key={coach.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coach Profile Card */}
              <div className="lg:col-span-2">
                <Card className="shadow-championship">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {coach.image ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-golf-green/20">
                          <img 
                            src={coach.image} 
                            alt={`${coach.name} with Andrea`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="p-4 bg-golf-green/10 rounded-full">
                          <User className="w-8 h-8 text-golf-green" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-2xl text-foreground">
                            {coach.name}
                          </CardTitle>
                          <Badge variant="secondary" className="bg-championship-gold/10 text-championship-gold">
                            {coach.role}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-muted-foreground">
                          <p className="text-lg font-semibold text-golf-green">
                            {coach.title}
                          </p>
                          <p>{coach.specialization}</p>
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {coach.experience} Experience
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {coach.instagram && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => window.open(`https://instagram.com/${coach.instagram.replace('@', '')}`, '_blank')}
                          >
                            <Instagram className="w-4 h-4" />
                          </Button>
                        )}
                        {coach.website && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => window.open(coach.website, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
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

                    {/* Contact */}
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
                      <p className="text-sm text-muted-foreground">
                        📍 {coach.location}
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
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-golf-green" />
                      Professional Achievements
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

                {/* Training Partnership */}
                <Card className="shadow-golf">
                  <CardHeader>
                    <CardTitle className="text-lg">Partnership with Andrea</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {coach.partnershipDetails}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingTeam;