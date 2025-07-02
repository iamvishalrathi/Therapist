import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ocean.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-[800px] w-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#F3F0E8' }}>
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-20 flex items-center space-x-4">
        <img src={logo} alt="Dr. Serena Blake Logo" className="h-16 w-16" />
        <span className="font-serif text-xl text-foreground bg-white/80 px-4 py-2 rounded shadow">Dr. Serena Blake, PsyD</span>
      </div>
      
      {/* Hero image section */}
      <section className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, zIndex: 1 }}>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl px-8 text-center">
            <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-text-light md:text-5xl lg:text-6xl">
              Psychological Care for
              <br />
              Change, Insight, and Well-Being
            </h1>

            <p className="mb-8 font-sans text-lg text-text-light/90 md:text-xl">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-4 text-lg tracking-wide"
            >
              SCHEDULE A CONSULTATION
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;