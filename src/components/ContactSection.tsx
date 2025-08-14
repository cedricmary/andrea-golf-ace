import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-golf-green to-golf-green-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-champion">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-championship-gold/20 rounded-full w-fit">
                <Mail className="w-6 h-6 text-championship-gold" />
              </div>
              <CardTitle className="text-white">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">andrea.golf@example.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-championship-gold/20 rounded-full w-fit">
                <Phone className="w-6 h-6 text-championship-gold" />
              </div>
              <CardTitle className="text-white">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Available upon request</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-championship-gold/20 rounded-full w-fit">
                <MapPin className="w-6 h-6 text-championship-gold" />
              </div>
              <CardTitle className="text-white">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Golf de Luberon</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-championship-gold/20 rounded-full w-fit">
                <MessageCircle className="w-6 h-6 text-championship-gold" />
              </div>
              <CardTitle className="text-white">Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Let's talk golf!</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="champion" size="lg" className="text-lg px-8">
            <Mail className="w-5 h-5" />
            {t('contact.send')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;