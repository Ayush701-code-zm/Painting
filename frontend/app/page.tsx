import type { Metadata } from "next";
import HeroSection from "@/app/components/hero-section";
import FeaturedWorks from "@/app/components/featured-works";
import AboutSection from "@/app/components/about-section";
import CtaSection from "@/app/components/cta-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Original hand-painted artworks by Glamsfyt. Browse the collection or commission a piece made just for you.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedWorks />
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
