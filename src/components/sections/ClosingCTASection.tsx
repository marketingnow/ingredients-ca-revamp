import CTAButton from "@/components/CTAButton";

const ClosingCTASection = () => {
  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Every Ingredient Has a Job. Together, They Work.
          </h2>
          <p className="font-display text-lg sm:text-xl text-foreground/75 leading-relaxed mb-10">
            Non-greasy. Fast-absorbing. 18 clinically-backed ingredients. Completely risk-free.
          </p>

          <div className="flex flex-col items-center gap-3">
            <CTAButton>Try It Risk-Free → 180-Day Guarantee</CTAButton>
            <p className="font-display text-sm text-foreground/65">
              Free US shipping on 3+ jars · 180-day money-back guarantee · FDA Registered · Ships from the USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTASection;
