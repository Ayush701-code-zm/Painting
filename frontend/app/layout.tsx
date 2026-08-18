import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/app/components/header";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glamsfyt.com";
const SITE_DESCRIPTION =
  "Original hand-painted artworks by Shivi Upadhyay. Browse anime, devotional, and contemporary pieces — or commission something made just for you.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Glamsfyt",
    default: "Glamsfyt — Original Hand-Painted Art",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Glamsfyt — Original Hand-Painted Art",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Glamsfyt",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero-background.png", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamsfyt — Original Hand-Painted Art",
    description: SITE_DESCRIPTION,
    images: ["/images/hero-background.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
