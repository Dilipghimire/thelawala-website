"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#order", label: "Order" },
  { href: "#visit", label: "Visit Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-tight text-cream transition-colors group-hover:text-saffron sm:text-3xl">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-cream/50 sm:text-xs">
            NYC Street Food
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-saffron"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:bg-saffron-light hover:shadow-lg hover:shadow-saffron/20"
          >
            Take Me There
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-cream md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-charcoal px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-cream/90 hover:bg-white/5 hover:text-saffron"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-saffron px-5 py-3 text-center text-sm font-semibold text-charcoal"
              onClick={() => setMenuOpen(false)}
            >
              Take Me There
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
