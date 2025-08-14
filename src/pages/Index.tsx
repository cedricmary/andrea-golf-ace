import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import MeritPointsHistory from "@/components/MeritPointsHistory";
import MedalCollection from "@/components/MedalCollection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import SponsorshipSection from "@/components/SponsorshipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <MeritPointsHistory />
      <MedalCollection />
      <GallerySection />
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
