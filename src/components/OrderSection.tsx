import { siteConfig } from "@/data/site";

const orderOptions = [
  {
    name: "DoorDash",
    description: "Fast delivery to your door",
    href: siteConfig.links.doordash,
    color: "bg-[#FF3008]",
    hoverColor: "hover:bg-[#e02a07]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "GrubHub",
    description: "Good food. Delivered.",
    href: siteConfig.links.grubHub,
    color: "bg-[#F63440]",
    hoverColor: "hover:bg-[#d92c37]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "Uber Eats",
    description: "Order from the Uber Eats app",
    href: siteConfig.links.uberEats,
    color: "bg-[#06C167]",
    hoverColor: "hover:bg-[#05a858]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export default function OrderSection() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-charcoal py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-terracotta-dark/30 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Craving Thelewala?
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl">
            Order Delivery
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/60">
            Get our famous Nizami rolls, chaats, and street food favorites
            delivered straight to you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {orderOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-6 rounded-2xl ${option.color} ${option.hoverColor} p-8 text-white transition-all hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/20">
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Order on {option.name}</h3>
                <p className="mt-1 text-white/80">{option.description}</p>
              </div>
              <svg
                className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
