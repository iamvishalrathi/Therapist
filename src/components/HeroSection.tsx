import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-ocean.mp4";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-[800px] w-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#F3F0E8' }}>
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-20 flex items-center">
        <img src={logo} alt="Dr. Serena Blake Logo" className="h-16 w-16" />
        <div className="flex flex-col">
          <span className="font-serif text-xl px-4 text-[#193B29]">Dr. Serena Blake, PsyD</span>
          <span className="font-serif text-xl px-4 text-[#193B29]">Clinical Psychologist</span>
        </div>
      </div>
      
      {/* Hero video section */}
      <section
        className="absolute overflow-hidden"
        style={{
          zIndex: 1,
          width: '90%',
          height: '70%',
          top: '20%',
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center space-y-20">
            <div className="flex flex-col space-y-10 mb-6 font-serif text-4xl font-medium leading-tight text-text-light md:text-5xl lg:text-6xl">
              <span>Psychological Care for</span>
              <span>Change, Insight, and Well-Being</span>
            </div>

            <p className="mb-8 font-sans text-lg text-text-light/90 md:text-xl">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-16 py-5 text-lg tracking-wide rounded-full"
              style={{ borderRadius: '999px', paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '1.25rem', paddingBottom: '1.25rem', minWidth: '320px', minHeight: '64px' }}
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