const qa = [
  {
    q: "I have tried Voltaren and Biofreeze. Why would TERRAFREEZE be any different?",
    a: "Most topicals on the shelf rely on one active ingredient and stop at the skin. TERRAFREEZE has 18 actives and uses emu oil to carry them past the surface to the tissue underneath. That is not marketing language. That is how skin and oil chemistry work. If you have tried single-ingredient creams and felt only a brief cooling sensation, the issue was not your body. It was the formula.",
  },
  {
    q: "What does emu oil actually do in this product?",
    a: "Plain answer: emu oil has a fat structure very close to your own skin, so instead of sitting on the surface it absorbs through it, and it pulls the rest of the formula along for the ride. That means the menthol, the methyl salicylate, the arnica, all 18 ingredients reach the layer of tissue that is actually sore. Without a carrier like this, most of a topical never gets where it needs to go.",
  },
  {
    q: "Is it safe to use every day, more than once a day?",
    a: "Yes. The formula is designed for regular daily use. Most customers apply it two or three times a day, often after a shower and again before bed. Aloe and chamomile are in there specifically to keep the skin comfortable so daily use does not become its own problem. As with any topical, do not apply to broken skin and wash your hands after.",
  },
  {
    q: "How does the 180-day guarantee actually work?",
    a: "It works the way a guarantee should. You have 180 days from the day your order arrives. If TERRAFREEZE does not deliver what you were hoping for, send it back, even if the jar is empty, and you get a full refund. No restocking fee. No fine print. No questions about why. We can offer this because most people who try it order again, but the option is there for everyone, no matter how they feel about it.",
  },
  {
    q: "Will it work for the kind of pain I have?",
    a: "TERRAFREEZE is a topical, which means it works where you put it. People use it on knees, lower backs, shoulders, hands, hips, feet, necks, elbows. If your discomfort is in a place you can reach with your hand, this formula has a good chance of helping. If it does not, the guarantee is there. Try it where it hurts and let your body tell you.",
  },
];

const QASection = () => {
  // JSON-LD for AEO / featured snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="content-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-display font-semibold rounded-full uppercase tracking-wider">
              Straight Answers from Dr. Spreen
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight mb-12">
            What People Ask Before They Try It
          </h2>

          <div className="space-y-8">
            {qa.map((item, i) => (
              <article
                key={item.q}
                className="border-l-2 border-accent pl-6 py-1"
              >
                <p className="font-display text-xs font-bold text-accent uppercase tracking-widest mb-2">
                  Question {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {item.q}
                </h3>
                <p className="font-display text-base sm:text-lg text-foreground/75 leading-relaxed">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
};

export default QASection;
