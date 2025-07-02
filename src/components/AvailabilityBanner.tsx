const AvailabilityBanner = () => {
  return (
    <section className="py-8 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-serif text-lg italic text-muted-foreground">
            Unable to accept new clients at this time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityBanner;