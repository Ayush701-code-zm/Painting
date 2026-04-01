import Link from "next/link";

const CATEGORY_CHIPS = [
  "Abstract",
  "Portrait",
  "Minimal",
  "Nature",
  "Landscape",
  "Contemporary",
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0806] pt-[4.25rem]">
      {/* Abstract art atmosphere — CSS-animated colour blobs */}
      <div
        aria-hidden="true"
        className="absolute top-[-8rem] right-[-6rem] w-[36rem] h-[36rem] rounded-full bg-[#c4512a] blur-[9rem] pointer-events-none opacity-[0.42] [animation:blob-pulse_9s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-6rem] left-[-8rem] w-[40rem] h-[40rem] rounded-full bg-[#2d5a8e] blur-[10rem] pointer-events-none opacity-[0.35] [animation:blob-pulse_11s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[30%] left-[20%] w-[24rem] h-[24rem] rounded-full bg-[#6b8a6d] blur-[8rem] pointer-events-none opacity-[0.28] [animation:blob-pulse_13s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[20%] right-[15%] w-[20rem] h-[20rem] rounded-full bg-[#d4a043] blur-[7rem] pointer-events-none opacity-[0.32] [animation:blob-pulse_10s_ease-in-out_infinite]"
      />

      {/* Gradient overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.15)_0%,rgba(10,8,6,0.55)_60%,rgba(10,8,6,0.8)_100%)] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-[1.5rem] md:px-[4rem] max-w-[56rem] w-full">
        {/* Eyebrow */}
        <p className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.45)] mb-[1.5rem] [animation:fade-up_0.7s_ease-out_both]">
          Original · Hand-painted · One of a Kind
        </p>

        {/* Main headline */}
        <h1 className="font-['Inter'] font-bold text-[2.75rem] md:text-[4.5rem] leading-[1.07] tracking-[-0.06em] text-white [animation:fade-up_0.85s_ease-out_0.1s_both]">
          Discover Art That{" "}
          <span className="font-['Instrument_Serif'] italic font-normal tracking-[-0.03em] text-[#fcc010]">
            Speaks to You
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-[1.5rem] font-['Inter'] text-[1.0625rem] md:text-[1.1875rem] font-light leading-[1.75] tracking-[-0.02em] text-[rgba(255,255,255,0.55)] max-w-[36rem] [animation:fade-up_0.7s_ease-out_0.22s_both]">
          Hand-painted originals crafted with intention.
          Every piece is unique — made to live with you, not on a screen.
        </p>

        {/* Category chips */}
        <div
          className="flex flex-wrap items-center justify-center gap-[0.625rem] mt-[2.25rem]"
          role="list"
          aria-label="Browse by category"
        >
          {CATEGORY_CHIPS.map((chip, index) => (
            <div key={chip} role="listitem">
              <Link
                href={`/categories/${chip.toLowerCase()}`}
                style={{ animationDelay: `${0.38 + index * 0.07}s` }}
                className="inline-block font-['Inter'] text-sm font-medium text-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] px-[1.125rem] py-[0.5rem] rounded-[3rem] hover:bg-[rgba(255,255,255,0.13)] hover:text-white hover:border-[rgba(255,255,255,0.22)] transition duration-200 backdrop-blur-sm [animation:fade-up_0.4s_ease-out_both]"
              >
                {chip}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[0.875rem] mt-[2.5rem] [animation:fade-up_0.6s_ease-out_0.55s_both]">
          <Link
            href="/shop"
            className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[#e8ae00] hover:shadow-[0px_8px_24px_0px_rgba(252,192,16,0.35)] transition duration-200 whitespace-nowrap"
          >
            Explore Collection
          </Link>
          <Link
            href="/commission"
            className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.14)] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[rgba(255,255,255,0.12)] hover:text-white hover:border-[rgba(255,255,255,0.24)] transition duration-200 whitespace-nowrap backdrop-blur-sm"
          >
            Commission a Piece
          </Link>
        </div>

        
      </div>
    </section>
  );
}
