const AvailabilityBanner = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Office Hours</h3>
          <div className="font-sans text-lg text-muted-foreground space-y-1">
            <div>
              <span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM
            </div>
            <div>
              <span className="font-semibold">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityBanner;