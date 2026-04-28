import CTAButton from "@/components/CTAButton";

const MidCTASection = () => {
  return (
    <section className="bg-primary py-12 sm:py-14 lg:py-16">
      <div className="content-container">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground tracking-tight max-w-2xl">
            18 Ingredients. 180-Day Guarantee. Nothing to Lose.
          </h2>
          <CTAButton className="flex-shrink-0">
            TRY IT RISK-FREE → 180-DAY GUARANTEE
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default MidCTASection;
