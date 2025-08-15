import { Button } from "@/components/ui/button";
import { Trophy, Award, Target, Heart, User, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  
  // All gallery images for background rotation (5 seconds each)
  const galleryImages = [
    "/lovable-uploads/1b679295-73b3-44d6-b62d-0f8fd1300ad1.png",
    "/lovable-uploads/6ae61128-27aa-498c-8e45-3b5d039287f7.png",
    "/lovable-uploads/69b1010b-4dcd-4b60-ad2d-dd87b4208200.png",
    "/lovable-uploads/fa7996ac-cf72-48ad-a56e-df0b95c350b2.png",
    "/lovable-uploads/0876263d-fffb-4d78-84b4-12cbdddd43fe.png",
    "/lovable-uploads/d8fbb45b-62c6-4e30-a2c3-3e0fe05b54b5.png",
    "/lovable-uploads/197c7c65-ca9a-4846-b0f6-ba5d578d87ff.png",
    "/lovable-uploads/0f16fe89-af3b-4f05-aa7b-de4afb44ca62.png",
    "/lovable-uploads/da42e502-dcd5-40ce-b2cb-11e118ce7112.png",
    "/lovable-uploads/dcd77dd3-0c7d-4c8e-87ec-51ddfe074217.png",
    "/lovable-uploads/63d3347b-2090-4ddf-a419-e28835b28a48.png",
    "/lovable-uploads/25d1d7b4-e136-4e26-8d0d-f16ff10824cb.png",
    "/lovable-uploads/83708a0f-0c89-4af8-9384-86194f038456.png",
    "/lovable-uploads/be4a1d52-4814-4133-ac19-0b7054bd50d3.png",
    "/lovable-uploads/bd009998-1992-4722-903b-35ce7feb3c78.png",
    "/lovable-uploads/6c7a32a5-5da0-41cd-9453-e2eee22ff06b.png",
    "/lovable-uploads/c9a04897-42d3-4bbe-95f7-b7ac55322068.png",
    "/lovable-uploads/5a4ee4f5-4237-4eca-bc51-85eff9ed7895.png",
    "/lovable-uploads/5dee2c43-40d6-4705-807c-2942230c56b7.png",
    "/lovable-uploads/6c6eca1b-40d6-482b-b243-abb2ce97af84.png",
    "/lovable-uploads/f1bd3fd0-3d95-4bb0-aad8-99b92d9a42a8.png",
    "/lovable-uploads/4cf0e98e-f83c-49a1-86b0-51241d9bd969.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

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

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('[data-section="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('About section not found');
    }
  };

  const scrollToAchievements = () => {
    const achievementsSection = document.querySelector('[data-section="achievements"]');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('Achievements section not found');
    }
  };

  const scrollToHeroes = () => {
    const heroesSection = document.querySelector('[data-section="heroes"]');
    if (heroesSection) {
      heroesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('Heroes section not found');
    }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-44">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${galleryImages[currentImageIndex]})` }}
      />

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-champion -mt-24 md:-mt-32">
          {t('hero.title')}
          <span className="block text-championship-gold text-4xl md:text-5xl mt-2">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Button variant="champion" size="lg" className="text-lg px-8" onClick={scrollToAbout}>
            <User className="w-5 h-5" />
            {t('hero.meetAndrea')}
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" onClick={scrollToAchievements}>
            <Award className="w-5 h-5" />
            {t('hero.achievements')}
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" onClick={scrollToCoach}>
            <User className="w-5 h-5" />
            {t('hero.meetTeam')}
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" onClick={scrollToHeroes}>
            <Star className="w-5 h-5" />
            My Heroes
          </Button>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => document.getElementById('my-club')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="w-5 h-5" />
            {t('hero.myClub')}
          </Button>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => document.getElementById('ligue')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Trophy className="w-5 h-5" />
            Ligue PACA
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8" asChild>
            <Link to="/sponsor">
              <Heart className="w-5 h-5" />
              {t('hero.sponsor')}
            </Link>
          </Button>
        </div>
        
        {/* Floating Elements */}
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