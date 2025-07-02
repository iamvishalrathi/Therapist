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
    <section className="py-section" style={{ background: '#F3F0E8', borderTop: '1px solid #000' }}>
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground lg:text-4xl">
            Areas of Focus
          </h2>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {areas.map((area, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="mx-auto">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-full shadow-lg border-2 border-black/20 bg-white">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {area.title}
                </h3>
                
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
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