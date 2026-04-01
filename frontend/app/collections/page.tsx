import type { Metadata } from "next";
import Link from "next/link";
import { COLLECTIONS } from "@/data/collections";
import { ARTWORKS } from "@/data/artworks";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse original paintings organised by style — Abstract, Minimal, Landscape, and Contemporary.",
};

export default function CollectionsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fefcf8] pt-[6rem]">
        <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem]">
          {/* Page header */}
          <FadeInSection>
            <div className="pt-[2rem] pb-[3rem]">
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
                Browse
              </span>
              <h1 className="font-['Inter'] font-bold text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.05em] text-[#1c1b18]">
                Collections
              </h1>
              <p className="font-['Inter'] text-[1.0625rem] font-light text-[rgba(28,27,24,0.55)] mt-[0.75rem] max-w-[30rem] leading-[1.7]">
                Each body of work explores a distinct mood. Find what resonates.
              </p>
            </div>
          </FadeInSection>

          {/* Collections grid */}
          <FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.25rem] pb-[5rem]">
              {COLLECTIONS.map((col) => {
                const count = ARTWORKS.filter(
                  (a) => a.style.toLowerCase() === col.id
                ).length;
                return (
                  <Link
                    key={col.id}
                    href={`/shop?category=${col.id}`}
                    className="group relative rounded-[1.25rem] overflow-hidden shadow-[0px_4px_24px_0px_rgba(28,27,24,0.08)] hover:shadow-[0px_16px_40px_0px_rgba(28,27,24,0.16)] hover:-translate-y-1 transition duration-300"
                  >
                    {/* Painting background */}
                    <div className="aspect-[16/9] w-full relative">
                      <div
                        className="absolute inset-0"
                        style={{ background: col.bg }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: col.shine }}
                      />
                      {/* Gradient overlay for text */}
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,8,6,0.65)_0%,rgba(10,8,6,0.1)_60%)]" />

                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-[1.75rem]">
                        <p className="font-['Inter'] text-xs font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.55)] mb-[0.25rem]">
                          {count} work{count !== 1 ? "s" : ""}
                        </p>
                        <h2 className="font-['Instrument_Serif'] italic text-[1.75rem] text-white leading-tight">
                          {col.title}
                        </h2>
                        <p className="font-['Inter'] text-sm text-[rgba(255,255,255,0.6)] mt-[0.25rem]">
                          {col.tagline}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </FadeInSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
