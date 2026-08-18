"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { menuCategories, formatPrice, type MenuItem } from "@/data/menu";
import { siteConfig } from "@/data/site";

const TAG_LABELS: Record<NonNullable<MenuItem["tags"]>[number], string> = {
  vegetarian: "Veg",
  spicy: "Spicy",
  popular: "Popular",
  egg: "Egg",
};

const TAG_STYLES: Record<NonNullable<MenuItem["tags"]>[number], string> = {
  vegetarian: "bg-green-100 text-green-800",
  spicy: "bg-red-100 text-red-800",
  popular: "bg-saffron/20 text-terracotta-dark",
  egg: "bg-amber-100 text-amber-800",
};

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="rounded-xl border border-charcoal/8 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
      <div className="flex items-start gap-4">
        {item.image && (
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl  sm:h-28 sm:w-28">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-semibold text-charcoal">{item.name}</h4>

            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${TAG_STYLES[tag]}`}
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </div>

          {item.note && (
            <p className="mt-0.5 text-xs font-medium text-terracotta">
              {item.note}
            </p>
          )}

          <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">
            {item.description}
          </p>

          <p className="mt-2 font-display text-lg font-bold text-terracotta">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<Map<string, HTMLElement>>(new Map());
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isScrollingRef = useRef(false);

  const scrollTabIntoView = useCallback((categoryId: string) => {
    const tab = tabRefs.current.get(categoryId);
    tab?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  const scrollToCategory = useCallback(
    (categoryId: string) => {
      const el = categoryRefs.current.get(categoryId);
      if (!el) return;

      isScrollingRef.current = true;
      setActiveCategory(categoryId);
      scrollTabIntoView(categoryId);

      const headerOffset = 140;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    },
    [scrollTabIntoView]
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    menuCategories.forEach(({ id }) => {
      const el = categoryRefs.current.get(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (isScrollingRef.current) return;
          if (entry.isIntersecting) {
            setActiveCategory(id);
            scrollTabIntoView(id);
          }
        },
        {
          rootMargin: "-140px 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [scrollTabIntoView]);

  return (
    <section id="menu" ref={sectionRef} className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            What We Serve
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-charcoal/60">
            Calcutta-style Nizami rolls, chaats, and basti khana — made fresh
            with olive oil and farm-raised chicken.
          </p>
        </div>

        {/* Sticky category navigation — horizontal scroll on mobile */}
        <div className="sticky top-[68px] z-40 -mx-4 mt-10 border-b border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 md:top-[72px]">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  ref={(node) => {
                    if (node) tabRefs.current.set(category.id, node);
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`menu-${category.id}`}
                  onClick={() => scrollToCategory(category.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-charcoal text-cream shadow-md"
                      : "bg-white text-charcoal/70 ring-1 ring-charcoal/10 hover:bg-charcoal/5 hover:text-charcoal"
                  }`}
                >
                  {category.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category sections */}
        <div className="mt-8 space-y-12 sm:space-y-16">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              id={`menu-${category.id}`}
              ref={(node) => {
                if (node) categoryRefs.current.set(category.id, node);
              }}
              className="scroll-mt-36"
            >
              <div className="mb-5 border-b border-charcoal/10 pb-4">
                <h3 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/55 sm:text-base">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-friendly order CTA */}
        <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="font-display text-xl font-semibold text-charcoal">
            Ready to order?
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            Prices may vary on delivery apps. Have a food allergy? Please inform
            your server.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.links.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FF3008] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Order on DoorDash
            </a>

            <a
              href={siteConfig.links.grubHub}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F63440] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Order on GrubHub
            </a>

            <a
              href={siteConfig.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#000000] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
