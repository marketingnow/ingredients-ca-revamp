import { Snowflake, Sparkles, Layers } from "lucide-react";

const pillars = [
  {
    icon: Snowflake,
    title: "Cool & Block",
    description:
      "Menthol and Methyl Salicylate activate cold receptors and disrupt pain signals before they reach the brain. Relief you feel within 60 seconds of application.",
  },
  {
    icon: Sparkles,
    title: "Reduce & Restore",
    description:
      "Arnica, Boswellia, MSM, and Turmeric work at the cellular level to reduce inflammation and rebuild joint mobility, so the relief doesn't stop when the cooling does.",
  },
  {
    icon: Layers,
    title: "Penetrate & Protect",
    description:
      "Emu Oil carries every active ingredient through all 7 layers of skin. Aloe Vera and Vitamins C & E protect skin and sustain absorption, every application.",
  },
];

const FormulaPhilosophySection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs sm:text-sm font-display font-semibold rounded-full uppercase tracking-wider">
              The Science Behind the Relief
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-4">
            Three Pain Pathways. One Formula.
          </h2>
          <p className="font-display text-center text-foreground/70 max-w-3xl mx-auto mb-14 text-lg">
            TERRAFREEZE is built to interrupt pain at the source, not just mask it while it waits for you to move again.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:border-accent/40"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-5">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="font-display text-foreground/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormulaPhilosophySection;
