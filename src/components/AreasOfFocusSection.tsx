import healthcareIcon from "@/assets/healthcare-icon.jpg";
import traumaIcon from "@/assets/trauma-icon.jpg";
import familyIcon from "@/assets/family-icon.jpg";

const AreasOfFocusSection = () => {
  const areas = [
    {
      title: "Anxiety & Stress Management",
      description: "Personalized strategies to help you manage anxiety, reduce stress, and build resilience using evidence-based approaches like CBT and mindfulness.",
      image: healthcareIcon
    },
    {
      title: "Relationship Counseling",
      description: "Support for couples and individuals to strengthen communication, resolve conflicts, and foster healthier, more fulfilling relationships.",
      image: familyIcon
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate care to help you heal from trauma, regain a sense of safety, and move forward with confidence.",
      image: traumaIcon
    }
  ];

  return (
    <section className="py-24" style={{ background: '#F3F0E8', borderTop: '1.5px solid #000' }}>
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl font-bold text-foreground lg:text-6xl">
            Areas of Focus
          </h2>
        </div>

        <div className="grid gap-20 md:grid-cols-3 md:gap-16">
          {areas.map((area, index) => (
            <div key={index} className="text-center space-y-10">
              <div className="mx-auto">
                <div className="mx-auto h-72 w-72 overflow-hidden rounded-full shadow-2xl bg-white">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {area.title}
                </h3>

                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocusSection;