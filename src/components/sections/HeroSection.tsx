import { Check, FlaskConical } from "lucide-react";

const leftTrust = [
  "10% Menthol: Maximum OTC strength",
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
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand-light via-brand-light/60 to-background pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14">
      {/* Subtle radial accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(202 72% 35% / 0.35), transparent 70%)",
        }}
      />
      {/* Faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(207 76% 24%) 1px, transparent 1px), linear-gradient(90deg, hsl(207 76% 24%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="content-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm shadow-sm">
            <FlaskConical className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            <span className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              The Science Behind The Formula
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            The TERRAFREEZE Formula:{" "}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute left-[-0.15em] right-[-0.15em] bottom-[0.08em] h-[0.32em] bg-gold/55 rounded-[2px] -z-0"
              />
              <span className="relative z-10">18 Clinically-Backed Ingredients Explained</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-display text-base sm:text-lg text-foreground/75 max-w-3xl mx-auto leading-relaxed mb-7">
            Most pain creams rely on a single active ingredient. TERRAFREEZE combines 18 clinically-backed actives that target pain, inflammation, and mobility loss at the same time, so relief goes deeper and lasts longer.
          </p>

          {/* Trust bar inside a card */}
          <div className="relative max-w-3xl mx-auto mb-7 rounded-lg border border-border bg-background/70 backdrop-blur-sm shadow-sm">
            <div className="grid sm:grid-cols-2 sm:divide-x divide-border">
              <ul className="space-y-2 p-4 text-left">
                {leftTrust.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span className="font-display text-sm text-foreground font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 p-4 text-left">
                {rightTrust.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span className="font-display text-sm text-foreground font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#ingredients"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-display font-bold uppercase tracking-wide text-primary bg-transparent border-2 border-primary rounded-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <span>Jump To Ingredients</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="https://terrafreeze.com/product/terrafreeze-2oz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-display font-bold uppercase tracking-wide text-gold-foreground bg-gold rounded-md transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 shadow-sm hover:shadow-elevated"
              >
                <span>Try It Risk-Free</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="font-display text-xs sm:text-sm text-foreground/70">
              Free US shipping on 3+ jars · No questions asked returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
