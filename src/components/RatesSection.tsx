const RatesSection = () => {
  return (
    <section className="py-section bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl font-medium text-primary-foreground lg:text-4xl">
            Rates and Insurance
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-primary-foreground">
                Session Fees
              </h3>
              <div className="space-y-2 font-sans text-primary-foreground/90">
                <div className="flex justify-between items-center">
                  <span>Individual Session:</span>
                  <span className="font-medium">$200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Couples Session:</span>
                  <span className="font-medium">$240</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-primary-foreground">
                Insurance
              </h3>
              <div className="font-sans text-primary-foreground/90 space-y-2">
                <p>No, but a superbill is provided for self-submission.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="font-sans text-sm text-primary-foreground/80">
              24-hour cancellation notice required. Superbills available for insurance self-submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;