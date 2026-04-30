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
    <section className="relative overflow-hidden border-b border-border/60 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14"
      style={{
        background:
          "linear-gradient(to bottom, hsl(0 60% 97%), hsl(40 50% 98% / 0.6), hsl(0 0% 100%))",
      }}
    >
      {/* Soft red wash at top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(355 75% 45% / 0.35), transparent 70%)",
        }}
      />
      {/* Large faded maple leaf watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[640px] h-[640px] max-w-[90%] text-[hsl(355_75%_42%)]"
          fill="currentColor"
        >
          <path d="M50 6 L54 28 L72 18 L66 38 L88 36 L72 50 L92 60 L70 62 L76 80 L58 70 L56 94 L50 84 L44 94 L42 70 L24 80 L30 62 L8 60 L28 50 L12 36 L34 38 L28 18 L46 28 Z" />
        </svg>
      </div>
      {/* Faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(355 75% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(355 75% 30%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="content-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[hsl(355_75%_45%)]/30 bg-background/85 backdrop-blur-sm shadow-sm">
            <svg viewBox="0 0 100 100" className="h-3.5 w-3.5 text-[hsl(355_75%_45%)]" fill="currentColor" aria-hidden="true">
              <path d="M50 6 L54 28 L72 18 L66 38 L88 36 L72 50 L92 60 L70 62 L76 80 L58 70 L56 94 L50 84 L44 94 L42 70 L24 80 L30 62 L8 60 L28 50 L12 36 L34 38 L28 18 L46 28 Z" />
            </svg>
            <span className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-[hsl(355_75%_35%)]">
              Proudly Canadian Formula
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-display text-[1.625rem] sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            <span className="block">The TERRAFREEZE Formula:</span>
            <span className="block sm:whitespace-nowrap">
              18 Clinically-Backed{" "}
              <span className="relative inline-block">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 40"
                  preserveAspectRatio="none"
                  className="absolute left-[-4%] right-[-4%] bottom-[-0.05em] w-[108%] h-[0.55em] -z-0 text-gold/70"
                >
                  <path
                    d="M2 22 Q 30 8, 70 18 T 150 16 T 230 20 T 298 14 L 296 36 Q 240 30, 180 34 T 90 32 T 10 36 Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10">Ingredients Explained</span>
              </span>
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
