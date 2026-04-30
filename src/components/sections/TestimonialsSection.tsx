import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R., Calgary AB",
    condition: "Arthritis",
    quote:
      "The cooling kicks in fast and actually lasts. I work outdoors through Alberta winters and my knees are brutal by February. I've tried Biofreeze, nothing touched my joint pain the way this does.",
  },
  {
    name: "Sarah J., Mississauga ON",
    condition: "Chronic Back Pain",
    quote:
      "I'm on my feet 12 hours a day as a nurse. I was skeptical about a cream with this many ingredients, but the formula genuinely works. Three months in and I've stopped reaching for ibuprofen.",
  },
  {
    name: "David L., Ottawa ON",
    condition: "Nerve Pain",
    quote:
      "What sold me was the guarantee, zero risk to try it. My hands go stiff every winter and this is the only thing that gives me real relief. Now I order the 6-jar bundle every time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-background border border-border rounded-2xl p-7 flex flex-col"
              >
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gold fill-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="font-display text-base sm:text-lg text-foreground leading-relaxed flex-grow mb-5">
                  "{t.quote}"
                </blockquote>
                <figcaption className="font-display border-t border-border pt-4">
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-foreground/60">{t.condition}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
