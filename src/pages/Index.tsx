import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import SponsorshipSection from "@/components/SponsorshipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <GallerySection />
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
