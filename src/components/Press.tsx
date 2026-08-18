import { pressQuotes } from "@/data/site";

export default function Press() {
  return (
    <section id="press" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            As Featured In
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Our Press
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pressQuotes.map((item, index) => (
            <figure
              key={index}
              className="group rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm transition-all hover:border-saffron/30 hover:shadow-md"
            >
              <svg
                className="h-8 w-8 text-saffron/40 transition-colors group-hover:text-saffron/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="mt-4 font-display text-lg leading-snug text-charcoal">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wider text-terracotta">
                — {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
