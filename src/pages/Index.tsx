import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      {splashDone && (
        <main>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioGallery />
          <Testimonials />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </main>
      )}
    </>
  );
};

export default Index;
