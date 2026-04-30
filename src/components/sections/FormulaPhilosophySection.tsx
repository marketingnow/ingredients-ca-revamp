import { Snowflake, Sparkles, Layers } from "lucide-react";

const pillars = [
  {
    icon: Snowflake,
    title: "Cool First, Warm Second",
    description:
      "The fastest way to interrupt a pain signal is cold. Menthol at 10% gives that immediate relief in seconds, then methyl salicylate follows with a deeper warmth that helps the muscle let go. Two sensations, one clear sequence.",
  },
  {
    icon: Sparkles,
    title: "Eighteen Reasons, Not One",
    description:
      "A single active ingredient can only do so much. Joints, muscles, skin, and circulation all benefit from different things. By combining 18 actives that each address a different piece of the problem, the formula has more ways to help and fewer ways to fall short.",
  },
  {
    icon: Layers,
    title: "Get the Formula to the Pain",
    description:
      "An ingredient list means nothing if the ingredients stay on the surface. Emu oil is the carrier that pulls the active ingredients through every layer of skin to the tissue that actually hurts. This is what separates TERRAFREEZE from a cream that just feels cold for ten minutes.",
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
              How Dr. Spreen Built It
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-4">
            A Topical Built on Three Simple Principles
          </h2>
          <p className="font-display text-center text-foreground/70 max-w-3xl mx-auto mb-14 text-lg">
            When Dr. Allan Spreen sat down to design this formula, he was not trying to reinvent topical pain relief. He was trying to fix what most topicals get wrong. Three rules guided every decision.
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
