import { historyPlaceholder } from "@/data/site";

export default function Story() {
  const paragraphs = historyPlaceholder.split("\n\n");

  return (
    <section id="story" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal sm:text-5xl">
              How It All Started
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-saffron" />
            <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
              Thelewala is serving fresh, healthy and delicious Nizami rolls, chaats and other
              popular street foods. In Hindi, &ldquo;Thelewala&rdquo; translates to a simple,
              delicious, home-style meal that is hearty and satisfying.
            </p>
            <blockquote className="mt-8 border-l-4 border-saffron pl-6 italic text-charcoal/80">
              &ldquo;SERVE, LOVE, GIVE, PURIFY, MEDITATE, REALISE.&rdquo;
              <footer className="mt-2 text-sm not-italic text-charcoal/50">— Swami Sivananda</footer>
            </blockquote>
          </div>

          <div className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="font-display text-xl font-semibold text-charcoal">
              Our History
            </h3>
            <p className="mt-2 text-sm text-charcoal/50">
              Full story coming soon — placeholder text below
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
