import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/app/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL ?? "https://glamsfyt.com"
  ),
  title: {
    template: "%s | Glamsfyt",
    default: "Glamsfyt",
  },
  description: "Glamsfyt — innovative solutions for a modern world.",
  openGraph: {
    title: "Glamsfyt",
    description: "Glamsfyt — innovative solutions for a modern world.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamsfyt",
    description: "Glamsfyt — innovative solutions for a modern world.",
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
