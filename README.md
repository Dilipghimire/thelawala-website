# Thelewala Website

Modern, responsive redesign of [thelewalany.com](https://thelewalany.com/) built with **Next.js**, **React**, and **TypeScript** (webpack-based — no Vite).

## Features

- Professional, mobile-first responsive design
- Hero with Google rating badge (4.3★, 850+ reviews)
- Customer review cards sourced from Google
- "Our History" section with placeholder text (ready for real content)
- Press quotes from NY Times, Grub Street, Eater, and Yelp
- Order links to **DoorDash** and **Uber Eats**
- **Take Me There** buttons linking to Google Maps
- Embedded map, hours, phone, and address

## Getting Started

Requires **Node.js 20+**.

```bash
cd ~/Projects/thelewala-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Customization

Edit `src/data/site.ts` to update:

- Restaurant info, hours, and contact details
- DoorDash / Uber Eats / Google Maps URLs
- Google reviews and press quotes
- History placeholder text

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
