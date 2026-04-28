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
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand-light via-brand-light/60 to-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
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
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
            Why TERRAFREEZE Works When{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Other Creams Don't</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-gold/40 -z-0 rounded-sm"
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-display text-lg sm:text-xl text-foreground/75 max-w-3xl mx-auto leading-relaxed mb-10">
            Most pain creams rely on a single active ingredient. TERRAFREEZE combines 18 clinically-backed actives that target pain, inflammation, and mobility loss simultaneously, so relief goes deeper and lasts longer.
          </p>

          {/* Trust bar inside a card */}
          <div className="relative max-w-3xl mx-auto mb-10 rounded-lg border border-border bg-background/70 backdrop-blur-sm shadow-sm">
            <div className="grid sm:grid-cols-2 sm:divide-x divide-border">
              <ul className="space-y-3 p-6 text-left">
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
              <ul className="space-y-3 p-6 text-left">
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
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="#ingredients"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-display font-bold uppercase tracking-wide text-primary bg-transparent border-2 border-primary rounded-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              <span>Jump To Ingredients</span>
              <span aria-hidden="true">↓</span>
            </a>
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
