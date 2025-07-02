import quoteImage from "@/assets/quote-ocean.jpg";

const QuoteSection = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${quoteImage})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-8 text-center">
          <blockquote className="mb-4 font-serif text-2xl font-medium italic text-text-light leading-relaxed md:text-3xl lg:text-4xl">
            "I have come to believe that caring for myself is not self-indulgent. 
            Caring for myself is an act of survival."
          </blockquote>
          
          <cite className="font-sans text-lg text-text-light/90 not-italic">
            — Audre Lorde
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;