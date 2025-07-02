import portraitImage from "@/assets/dr-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-medium text-foreground lg:text-4xl">
              About Dr. Jennifer Hahm
            </h2>
            
            <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                I am a licensed psychologist with extensive experience in individual therapy and psychological evaluation. 
                My practice focuses on providing compassionate, evidence-based care to adults seeking support for a variety of mental health concerns.
              </p>
              
              <p>
                With specialized training in trauma-informed care, I work with individuals from diverse backgrounds, 
                including healthcare professionals, students, and second-generation immigrants. My approach integrates 
                cognitive-behavioral techniques with mindfulness-based interventions.
              </p>
              
              <p>
                I believe in creating a safe, non-judgmental space where clients can explore their thoughts and feelings, 
                develop coping strategies, and work toward meaningful change. Every person's journey is unique, and I tailor 
                my therapeutic approach to meet each individual's specific needs and goals.
              </p>
              
              <p>
                Through telehealth services, I am able to provide accessible mental health care while maintaining the highest 
                standards of professional practice. I am committed to ongoing professional development and staying current 
                with the latest research in psychology and mental health treatment.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={portraitImage} 
                alt="Dr. Jennifer Hahm"
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