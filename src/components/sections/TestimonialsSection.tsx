import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rick T., Edmonton AB",
    condition: "Arthritis",
    quote:
      "I'm an electrician. My hands have to work. I've spent more on creams that didn't deliver than I want to admit. TERRAFREEZE is the first one where I actually noticed a difference by the end of the week, not just for an hour.",
  },
  {
    name: "Linda M., Hamilton ON",
    condition: "Chronic Back Pain",
    quote:
      "I've been in retail management for 22 years. Concrete floors, long shifts, no sitting. Three weeks in and I'm moving better. I don't reach for ibuprofen every afternoon anymore and that alone was worth it.",
  },
  {
    name: "Paul D., Kelowna BC",
    condition: "Knee Pain",
    quote:
      "180 days to decide if it works, that's the only reason I tried it. I'm on my third order now. It's not a miracle, it just actually does what it says. For a pain cream, that's rare enough.",
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
