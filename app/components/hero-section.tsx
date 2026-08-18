import Image from "next/image";
import Link from "next/link";
import { ARTWORKS, STYLES } from "@/data/artworks";

const CATEGORY_CHIPS = STYLES.filter(
  (style) =>
    style !== "All" &&
    ARTWORKS.some((a) => a.style.toLowerCase() === style.toLowerCase())
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[4.25rem]">
      <Image
        src="/images/hero-background.png"
        alt="Watercolor painting of Charminar and a bustling Hyderabad street market at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.35)_0%,rgba(10,8,6,0.5)_45%,rgba(10,8,6,0.82)_100%)] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-[1.5rem] md:px-[4rem] max-w-[56rem] w-full">
        <p className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.55)] mb-[1.5rem] [animation:fade-up_0.7s_ease-out_both]">
          Original · Hand-painted · One of a Kind
        </p>

        <h1 className="font-['Inter'] font-bold text-[2.75rem] md:text-[4.5rem] leading-[1.07] tracking-[-0.06em] text-white [animation:fade-up_0.85s_ease-out_0.1s_both]">
          Discover Art That{" "}
          <span className="font-['Instrument_Serif'] italic font-normal tracking-[-0.03em] text-[#fcc010]">
            Speaks to You
          </span>
        </h1>

        <p className="mt-[1.5rem] font-['Inter'] text-[1.0625rem] md:text-[1.1875rem] font-light leading-[1.75] tracking-[-0.02em] text-[rgba(255,255,255,0.65)] max-w-[36rem] [animation:fade-up_0.7s_ease-out_0.22s_both]">
          Hand-painted originals crafted with intention.
          Every piece is unique — made to live with you, not on a screen.
        </p>

        {CATEGORY_CHIPS.length > 0 && (
          <div
            className="flex flex-wrap items-center justify-center gap-[0.625rem] mt-[2.25rem]"
            role="list"
            aria-label="Browse by category"
          >
            {CATEGORY_CHIPS.map((chip, index) => (
              <div key={chip} role="listitem">
                <Link
                  href={`/shop?category=${chip.toLowerCase()}`}
                  style={{ animationDelay: `${0.38 + index * 0.07}s` }}
                  className="inline-block font-['Inter'] text-sm font-medium text-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] px-[1.125rem] py-[0.5rem] rounded-[3rem] hover:bg-[rgba(255,255,255,0.14)] hover:text-white hover:border-[rgba(255,255,255,0.24)] transition duration-200 backdrop-blur-sm [animation:fade-up_0.4s_ease-out_both]"
                >
                  {chip}
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-[0.875rem] mt-[2.5rem] [animation:fade-up_0.6s_ease-out_0.55s_both]">
          <Link
            href="/shop"
            className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[#e8ae00] hover:shadow-[0px_8px_24px_0px_rgba(252,192,16,0.35)] transition duration-200 whitespace-nowrap"
          >
            Explore Collection
          </Link>
          <Link
            href="/commission"
            className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(255,255,255,0.8)] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[rgba(255,255,255,0.14)] hover:text-white hover:border-[rgba(255,255,255,0.26)] transition duration-200 whitespace-nowrap backdrop-blur-sm"
          >
            Commission a Piece
          </Link>
        </div>
      </div>
    </section>
  );
}
