import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const MyClubSection = () => {
  const { t } = useLanguage();

  return (
    <section id="my-club" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t('club.badge')}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t('club.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('club.description')}
          </p>
        </div>

        {/* Club Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('club.overview.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('club.overview.description')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Domaine de la Grande-Gardette, 04860 Pierrevert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+33 4 92 72 17 19</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">info@golf-du-luberon.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm">andreamary.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://www.golfduluberon.com/wp-content/uploads/2021/10/DJI_0003-scaled.jpg" 
                alt="Golf du Luberon aerial view"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://www.golfduluberon.com/wp-content/uploads/2021/09/DJI_0013-scaled.jpg" 
                alt="Golf du Luberon course"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Club Management - Beru Family Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('club.management.title')}</h3>
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-32 h-24 mx-auto rounded-lg overflow-hidden border-2 border-primary/20">
                    <img 
                      src="/lovable-uploads/9bf951bb-e101-4eb5-8092-291b4c95d38e.png" 
                      alt="Beru Family"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{t('club.management.member.name')}</h4>
                    <p className="text-muted-foreground">{t('club.management.member.role')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('club.management.member.description')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">{t('club.course.holes')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Par 72</div>
              <div className="text-sm text-muted-foreground">{t('club.course.par')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5621m</div>
              <div className="text-sm text-muted-foreground">{t('club.course.length')}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyClubSection;