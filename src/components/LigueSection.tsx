import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Users, Trophy, Target } from "lucide-react";

const LigueSection = () => {
  const { t } = useLanguage();

  const bureauMembers = [
    { role: "Président", name: "Christian GENET" },
    { role: "Président d'Honneur", name: "Jean-Yves ORTEGA" },
    { role: "Vice-Président", name: "Charles HOUTART" },
    { role: "Secrétaire Général", name: "Jérôme LAUREDI" },
    { role: "Trésorier", name: "Fabrice CASTRUCCIO" },
    { role: "Président Commission Sportive", name: "Jean-Marie CASELLA" },
    { role: "Directrice Ligue", name: "Aurélie ULIVIERI" },
    { role: "Conseiller Technique National", name: "Grégory JIMENEZ" }
  ];

  const commissions = [
    {
      title: "Commission Sportive",
      icon: Trophy,
      members: [
        "Jean-Marie CASELLA (Président)",
        "Aurélie ULIVIERI (Gestion Sportive)",
        "Philippe BOROUKHOFF (Arbitrage)",
        "Françoise CHARDON (Commission Jeunes)"
      ]
    },
    {
      title: "Commission Développement",
      icon: Target,
      members: [
        "Charles HOUTART (Relations FFG)",
        "Christine PROUIN (Transition Écologique)",
        "Henri TESSORE (Gestion de l'Eau)",
        "Yann COELENBIER (Paragolf)"
      ]
    },
    {
      title: "Comités Départementaux",
      icon: Users,
      members: [
        "Gilles MINIAOU (04-05)",
        "Marie-Agnès SAUTIER (06)",
        "Jean-Paul TRAPY (13)",
        "Eric LACOUPELLE (83)",
        "David MINAZIO (84)"
      ]
    }
  ];

  return (
    <section id="ligue" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Notre Ligue
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Ligue Golf PACA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'organisation et la structure de la Ligue de Golf de Provence-Alpes-Côte d'Azur
          </p>
        </div>

        {/* Bureau Directeur */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Bureau Directeur 2025-2028</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bureauMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="font-semibold text-primary mb-1">{member.role}</div>
                  <div className="text-sm text-muted-foreground">{member.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commissions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Commissions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commissions.map((commission, index) => {
              const IconComponent = commission.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-semibold">{commission.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {commission.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-sm text-muted-foreground">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* External Link */}
        <div className="text-center">
          <a 
            href="https://liguegolfpaca.org/ligue/organisation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Voir plus sur le site officiel de la Ligue Golf PACA
          </a>
        </div>
      </div>
    </section>
  );
};

export default LigueSection;