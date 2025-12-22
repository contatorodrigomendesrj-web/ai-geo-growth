import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiberationSection from "@/components/LiberationSection";
import ModulesSection from "@/components/ModulesSection";
import SuperOfertaSection from "@/components/SuperOfertaSection"
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <HeroSection />
      <LiberationSection />
      <ModulesSection /> {/* <--- 2. ADICIONE AQUI */}
      <SuperOfertaSection />
      <Footer />
    </div>
  );
};

export default Index;
