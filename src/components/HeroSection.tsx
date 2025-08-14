import { Button } from "@/components/ui/button";
import { Trophy, Award, Target } from "lucide-react";
import heroImage from "@/assets/golf-course-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-golf-green/80 via-golf-green/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-championship-gold/20 rounded-full backdrop-blur-sm">
            <Trophy className="w-16 h-16 text-championship-gold" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-champion">
          Andrea
          <span className="block text-championship-gold text-4xl md:text-5xl mt-2">
            Golf Champion
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          At just 10 years old, Andrea is making waves in the golf world with incredible skill, 
          dedication, and a champion's spirit that inspires everyone on the course.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="champion" size="lg" className="text-lg px-8">
            <Award className="w-5 h-5" />
            View Achievements
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8">
            <Target className="w-5 h-5" />
            See Stats
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