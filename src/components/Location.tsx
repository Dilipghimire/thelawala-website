import { siteConfig } from "@/data/site";

export default function Location() {
  return (
    <section id="visit" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Visit Us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal sm:text-5xl">
              Find Thelewala
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-saffron" />

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                  Address
                </h3>
                <p className="mt-2 text-lg text-charcoal">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                  Phone
                </h3>
                <div className="mt-2 space-y-1">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="block text-lg text-charcoal transition-colors hover:text-terracotta"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneAlt.replace(/\D/g, "")}`}
                    className="block text-lg text-charcoal transition-colors hover:text-terracotta"
                  >
                    {siteConfig.phoneAlt}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                  Hours
                </h3>
                <ul className="mt-2 space-y-2">
                  {siteConfig.hours.map((schedule) => (
                    <li key={schedule.days} className="flex justify-between gap-4 text-charcoal">
                      <span className="font-medium">{schedule.days}</span>
                      <span className="text-charcoal/70">{schedule.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-all hover:bg-charcoal-light hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Take Me There — Open in Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-charcoal/10 shadow-lg">
            <iframe
              title="Thelewala location on Google Maps"
              src="https://maps.google.com/maps?q=Thelewala+112+MacDougal+St+New+York+NY+10012&output=embed"
              className="h-80 w-full sm:h-96 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
