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
          <blockquote
            className="mb-8"
            style={{
              fontFamily: 'freight-display-pro, serif',
              fontSize: '35.2px',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: 'normal',
              textShadow: 'none',
              padding: '0 0.5em'
            }}
          >
            "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
          </blockquote>
          <cite
            style={{
              fontFamily: 'freight-display-pro, serif',
              fontSize: '22px',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0)',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: 'normal',
              textShadow: 'none',
              display: 'block',
              marginTop: '0.5em'
            }}
          >
            — Audre Lorde
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;