import { Snowflake, Sparkles, Layers } from "lucide-react";

const pillars = [
  {
    icon: Snowflake,
    title: "Cool & Block",
    description:
      "Menthol and Methyl Salicylate activate cold and warm receptors simultaneously, cutting the pain signal before your brain registers it as pain. Most people feel the difference within 60 seconds of applying, not because it's masking anything, but because the signal is interrupted at the source.",
  },
  {
    icon: Sparkles,
    title: "Reduce & Restore",
    description:
      "Arnica, Boswellia, MSM, and Turmeric go to work on the inflammation driving the pain in the first place. Swelling drops. Stiff joints start to move again. The relief you feel in the first minute builds into something that's still working hours later.",
  },
  {
    icon: Layers,
    title: "Penetrate & Protect",
    description:
      "Emu Oil ensures none of this stays on the surface. It carries the full formula through every skin layer to the tissue that needs it. Aloe Vera and Vitamins C & E keep skin healthy so each application works as well as the one before it.",
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
              How It Works
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-4">
            One Application. Three Things Happen at Once.
          </h2>
          <p className="font-display text-center text-foreground/70 max-w-3xl mx-auto mb-14 text-lg">
            Pain isn't one problem. It's nerve signals, inflammation, and poor circulation firing at the same time. TERRAFREEZE is built to hit all three, not pick one and leave the others running.
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
