import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SponsorshipSection from "@/components/SponsorshipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
