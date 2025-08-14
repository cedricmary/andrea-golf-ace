import { Button } from "@/components/ui/button";
import { Trophy, Award, Target, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import heroImage from "@/assets/golf-course-hero.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToStats = () => {
    const statsSection = document.querySelector('[data-section="about"]');
    if (statsSection) {
      statsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('Stats section not found');
    }
  };

  const scrollToCoach = () => {
    const coachSection = document.querySelector('[data-section="coaching"]');
    if (coachSection) {
      coachSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('Coaching section not found');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-golf-green/80 via-golf-green/60 to-transparent" />
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-championship-gold/20 rounded-full backdrop-blur-sm">
            <Trophy className="w-16 h-16 text-championship-gold" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-champion">
          {t('hero.title')}
          <span className="block text-championship-gold text-4xl md:text-5xl mt-2">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="champion" size="lg" className="text-lg px-8">
            <Award className="w-5 h-5" />
            {t('hero.achievements')}
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" onClick={scrollToStats}>
            <Target className="w-5 h-5" />
            See Stats
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" onClick={scrollToCoach}>
            <User className="w-5 h-5" />
            Meet Coach Isabelle
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" asChild>
            <Link to="/sponsor">
              <Heart className="w-5 h-5" />
              {t('hero.sponsor')}
            </Link>
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-12 h-12 bg-championship-gold/30 rounded-full backdrop-blur-sm flex items-center justify-center">
            <Trophy className="w-6 h-6 text-championship-gold" />
          </div>
        </div>
        <div className="absolute bottom-32 right-10 animate-bounce delay-1000">
          <div className="w-10 h-10 bg-golf-green/30 rounded-full backdrop-blur-sm flex items-center justify-center">
            <Award className="w-5 h-5 text-golf-green-light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;