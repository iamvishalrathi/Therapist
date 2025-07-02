import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl font-medium text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
            <AccordionContent>
              No, but a superbill is provided for self-submission.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are online sessions available?</AccordionTrigger>
            <AccordionContent>
              Yes—all virtual sessions via Zoom.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
            <AccordionContent>
              24-hour notice required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
