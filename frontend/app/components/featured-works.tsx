import Link from "next/link";
import { ARTWORKS } from "@/data/artworks";
import FadeInSection from "./fade-in-section";

export default function FeaturedWorks() {
  return (
    <section className="bg-[#fefcf8] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
      <div className="max-w-[72rem] mx-auto">
        {/* Heading */}
        <FadeInSection className="flex flex-col md:flex-row md:items-end justify-between gap-[1.5rem] mb-[3rem]">
          <div>
            <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
              Latest Works
            </span>
            <h2 className="font-['Inter'] font-bold text-[2.25rem] md:text-[3rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18]">
              Fresh from the{" "}
              <span className="font-['Instrument_Serif'] italic font-normal tracking-[-0.02em]">
                Studio
              </span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-['Inter'] text-sm font-medium text-[rgba(28,27,24,0.6)] hover:text-[#1c1b18] transition-colors duration-200 underline underline-offset-4 shrink-0"
          >
            View all works →
          </Link>
        </FadeInSection>

        {/* Grid */}
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[1.5rem]">
            {ARTWORKS.map((artwork) => (
              <Link
                key={artwork.id}
                href={`/shop/${artwork.id}`}
                className="group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_2px_16px_0px_rgba(28,27,24,0.06)] hover:shadow-[0px_12px_32px_0px_rgba(28,27,24,0.13)] hover:-translate-y-1 transition duration-300"
              >
                {/* Painting */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{ background: artwork.bg }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: artwork.shine }}
                  />
                  {!artwork.available && (
                    <div className="absolute inset-0 bg-[rgba(254,252,248,0.55)] flex items-center justify-center">
                      <span className="font-['Inter'] text-xs font-semibold tracking-[0.1em] uppercase text-[rgba(28,27,24,0.6)] bg-white px-[0.875rem] py-[0.375rem] rounded-[3rem]">
                        Sold
                      </span>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div className="p-[1rem] md:p-[1.25rem]">
                  <span className="font-['Inter'] text-[0.6875rem] font-medium tracking-[0.08em] uppercase text-[rgba(28,27,24,0.45)]">
                    {artwork.style}
                  </span>
                  <h3 className="font-['Instrument_Serif'] italic text-[1.125rem] md:text-[1.25rem] text-[#1c1b18] mt-[0.2rem] leading-tight">
                    {artwork.title}
                  </h3>
                  <div className="flex items-center justify-between mt-[0.75rem]">
                    <span className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)]">
                      {artwork.size}
                    </span>
                    <span className="font-['Inter'] text-sm font-semibold text-[#1c1b18]">
                      {artwork.available ? artwork.price : "Sold"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
