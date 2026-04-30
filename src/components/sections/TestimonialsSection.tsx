import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lorraine M., Moncton, NB",
    condition: "Hand and Wrist Stiffness",
    quote:
      "I have been a hairdresser for 34 years and my hands tell that story every morning. I used to dread the first hour of work. I have been using TERRAFREEZE on my thumbs and wrists for about three months now and I get through a full day of clients without thinking about my hands once. That has not been true in a long time.",
  },
  {
    name: "Devon T., Lethbridge, AB",
    condition: "Lower Back and Knees",
    quote:
      "I run conduit for a living. Some days I am on my knees on a concrete floor for five hours straight. I used to come home, take two ibuprofen, and lie on the couch until bed. Now I rub this on my knees and lower back when I get out of the shower and I am actually playing with my kids in the yard before dinner. The difference is real.",
  },
  {
    name: "Anita P., Sudbury, ON",
    condition: "Shoulder and Neck Tension",
    quote:
      "My shoulder has been a problem since a fall I took two winters ago. I tried everything at the pharmacy. Nothing did much past the first ten minutes. A friend told me to try this and I almost did not because I was tired of wasting money. The guarantee is what convinced me. I am on my second jar and I am sleeping on that side again, which I had given up on.",
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
