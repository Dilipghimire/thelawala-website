import { siteConfig, googleRating } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "text-saffron"
              : i < rating
              ? "text-saffron/50"
              : "text-cream/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-terracotta-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8A838' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1.5">
            <StarRating rating={googleRating.score} />
            <span className="text-sm font-medium text-cream/90">
              {googleRating.score} on Google · {googleRating.totalReviews}+
              reviews
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70 sm:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-8 py-4 text-base font-semibold text-charcoal transition-all hover:bg-saffron-light hover:shadow-xl hover:shadow-saffron/25"
            >
              View Menu
            </a>
            <a
              href={siteConfig.links.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-8 py-4 text-base font-semibold text-charcoal transition-all hover:bg-saffron-light hover:shadow-xl hover:shadow-saffron/25"
            >
              Order on DoorDash
            </a>
            <a
              href={siteConfig.links.grubHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 bg-transparent px-8 py-4 text-base font-semibold text-cream transition-all hover:border-saffron hover:bg-saffron/10"
            >
              Order on GrubHub
            </a>
            <a
              href={siteConfig.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 bg-transparent px-8 py-4 text-base font-semibold text-cream transition-all hover:border-saffron hover:bg-saffron/10"
            >
              Order on Uber Eats
            </a>
            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/20 px-8 py-4 text-base font-semibold text-cream/90 transition-all hover:border-cream/40 hover:bg-white/5"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Take Me There
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
