import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import MeritPointsHistory from "@/components/MeritPointsHistory";
import MedalCollection from "@/components/MedalCollection";
import CoachingTeam from "@/components/CoachingTeam";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import MyClubSection from "@/components/MyClubSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <MeritPointsHistory />
      <MedalCollection />
      <CoachingTeam />
      <MyClubSection />
      <GallerySection />
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
