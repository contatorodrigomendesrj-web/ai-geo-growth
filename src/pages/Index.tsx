import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiberationSection from "@/components/LiberationSection";
import ForWhomSection from "@/components/ForWhomSection";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <HeroSection />
      <LiberationSection />
      <ForWhomSection />
    </div>
  );
};

export default Index;
