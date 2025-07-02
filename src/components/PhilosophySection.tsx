const PhilosophySection = () => {
  return (
    <section className="py-section bg-[#F3F0E8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <blockquote
            className="text-2xl text-[#4c4c4a] leading-relaxed md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'freight-display-pro', serif" }}
            >
            Therapy can be a space where you invest in yourself—
            <br />
            one of the highest forms of self-care.
            </blockquote>
          
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
              With eight years of experience and over 500 sessions, I blend evidence-based approaches with compassion to help you overcome anxiety, strengthen relationships, and heal from trauma. My goal is to support you in building resilience and living a more fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;