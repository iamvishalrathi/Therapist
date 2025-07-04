import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import AreasOfFocusSection from "@/components/AreasOfFocusSection";
import RatesSection from "@/components/RatesSection";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import FaqSection from "@/components/FaqSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <AreasOfFocusSection />
      <RatesSection />
      <AvailabilityBanner />
      <FaqSection />
      <QuoteSection />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Index;
