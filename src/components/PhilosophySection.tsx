const PhilosophySection = () => {
  return (
    <section className="py-section bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="font-serif text-2xl font-medium italic text-foreground leading-relaxed md:text-3xl lg:text-4xl">
            "Therapy can be a space where you invest in yourself—one of the highest forms of self-care."
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