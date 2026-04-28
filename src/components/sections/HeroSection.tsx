import { Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const leftTrust = [
  "10% Menthol — Maximum OTC strength",
  "No parabens, no synthetic fillers",
  "Non-greasy, fast-absorbing",
];

const rightTrust = [
  "FDA Registered facility",
  "180-Day Money-Back Guarantee",
  "Ships from the USA",
];

const HeroSection = () => {
  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
            Why TERRAFREEZE Works When Other Creams Don't
          </h1>

          {/* Subheading */}
          <p className="font-display text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Most pain creams rely on a single active ingredient. TERRAFREEZE combines 18 clinically-backed actives that target pain, inflammation, and mobility loss simultaneously — so relief goes deeper and lasts longer.
          </p>

          {/* Trust bar */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10 text-left">
            <ul className="space-y-3">
              {leftTrust.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span className="font-display text-sm sm:text-base text-foreground font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {rightTrust.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span className="font-display text-sm sm:text-base text-foreground font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <CTAButton>Try It Risk-Free → 180-Day Guarantee</CTAButton>
            <p className="font-display text-sm text-foreground/70">
              Free US shipping on 3+ jars · No questions asked returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
