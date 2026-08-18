import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Indian Street Food NYC`,
  description: siteConfig.description,
  keywords: [
    "Thelewala",
    "Indian restaurant NYC",
    "Nizami rolls",
    "street food",
    "Greenwich Village",
    "MacDougal Street",
  ],
  openGraph: {
    title: `${siteConfig.name} | Indian Street Food NYC`,
    description: siteConfig.description,
    type: "website",
    url: "https://thelewalany.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
