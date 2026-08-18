import { reviews, googleRating, siteConfig } from "@/data/site";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-saffron" : "text-charcoal/15"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
              What People Say
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-saffron">{googleRating.score}</p>
              <Stars count={Math.round(googleRating.score)} />
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="font-semibold text-cream">{googleRating.totalReviews}+ reviews</p>
              <p className="text-sm text-cream/50">on {googleRating.source}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-saffron/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/20 font-semibold text-saffron">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-cream">{review.author}</p>
                    <p className="text-xs text-cream/40">{review.date}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/70">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-cream/40">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Posted on Google
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-saffron transition-colors hover:text-saffron-light"
          >
            Read all reviews on Google Maps
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
