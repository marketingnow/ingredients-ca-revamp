import CTAButton from "@/components/CTAButton";

const ClosingCTASection = () => {
  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image: appears first on mobile (above text), right column on desktop */}
          <div className="order-first lg:order-last flex justify-center">
            <img
              src="https://terrafreeze.com/wp-content/uploads/product.png"
              alt="TERRAFREEZE jar"
              className="w-full max-w-[280px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              loading="lazy"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Every Ingredient Has a Job. Together, They Work.
            </h2>
            <p className="font-display text-lg sm:text-xl text-foreground/75 leading-relaxed mb-10">
              Non-greasy. Fast-absorbing. 18 clinically-backed ingredients. Completely risk-free.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <CTAButton>TRY IT RISK-FREE → 180-DAY GUARANTEE</CTAButton>
              <p className="font-display text-sm text-foreground/65">
                Free shipping on orders over $60 CAD · 180-day money-back guarantee · Health Canada Licensed · Ships from Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTASection;
