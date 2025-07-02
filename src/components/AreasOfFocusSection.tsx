import healthcareIcon from "@/assets/healthcare-icon.jpg";
import traumaIcon from "@/assets/trauma-icon.jpg";
import familyIcon from "@/assets/family-icon.jpg";

const AreasOfFocusSection = () => {
  const areas = [
    {
      title: "Therapy for Healthcare Providers and Students",
      description: "Specialized support for medical professionals, nurses, and healthcare students facing burnout, compassion fatigue, and the unique stressors of healthcare environments. Understanding the demands of your profession while providing tools for resilience and self-care.",
      image: healthcareIcon
    },
    {
      title: "Therapy for Trauma and Grief",
      description: "Compassionate care for individuals processing traumatic experiences, loss, and grief. Using evidence-based approaches to help you heal, integrate difficult experiences, and reclaim your sense of safety and meaning in life.",
      image: traumaIcon
    },
    {
      title: "Therapy for Second Generation Individuals in Immigrant Families",
      description: "Culturally sensitive therapy for those navigating the complexities of growing up between cultures. Addressing identity formation, family dynamics, generational differences, and the unique challenges of bicultural living.",
      image: familyIcon
    }
  ];

  return (
    <section className="py-section bg-background">
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
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full shadow-md">
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