import portraitImage from "@/assets/dr-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-medium text-foreground lg:text-4xl">
              About Dr. Serena Blake
            </h2>
            
            <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={portraitImage} 
                alt="Dr. Serena Blake"
                className="h-[500px] w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;