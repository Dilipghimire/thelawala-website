import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-2xl font-bold text-cream">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/50">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Order Online
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/50">
              Order & Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.links.doordash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  DoorDash
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.grubHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  GrubHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.uberEats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Uber Eats
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-saffron"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-cream/40">{siteConfig.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
