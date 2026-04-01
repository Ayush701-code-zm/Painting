import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind the paintings — who I am, how I work, and why I paint.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Observation",
    description:
      "Every painting begins with looking. I spend time with a scene, a feeling, a colour — until something demands to be made.",
  },
  {
    step: "02",
    title: "Composition",
    description:
      "Small sketches, quick studies. I work out the structure on paper before a single drop of paint touches canvas.",
  },
  {
    step: "03",
    title: "Painting",
    description:
      "Oils or acrylics, depending on what the work calls for. Layers are built slowly. I never rush a painting.",
  },
  {
    step: "04",
    title: "Finishing",
    description:
      "The painting dries fully before I sign it, varnish it, and prepare it for whoever it will live with next.",
  },
] as const;

const STATS = [
  { value: "200+", label: "Originals sold" },
  { value: "15+", label: "Countries" },
  { value: "8 yrs", label: "Of practice" },
] as const;

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#fefcf8] pt-[4.25rem]">
        {/* Hero */}
        <section className="bg-[#f2ede5] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
          <div className="max-w-[72rem] mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-[4rem] md:gap-[6rem]">
              {/* Portrait */}
              <div className="shrink-0">
                <div className="relative w-[16rem] md:w-[20rem] rounded-[0.5rem] border-[0.625rem] border-[#ede5d0] shadow-[0px_24px_56px_0px_rgba(28,27,24,0.2)] overflow-hidden aspect-[3/4]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, #d4a878 0%, #c4825a 30%, #8b5232 65%, #3d2010 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(225deg, rgba(255,255,255,0.14) 0%, transparent 45%)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 60% 30%, transparent 40%, rgba(10,5,0,0.35) 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1">
                <FadeInSection>
                  <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[1.25rem]">
                    About the Artist
                  </span>
                  <h1 className="font-['Inter'] font-bold text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18]">
                    The person{" "}
                    <span className="font-['Instrument_Serif'] italic font-normal">
                      behind the work
                    </span>
                  </h1>
                  <blockquote className="font-['Instrument_Serif'] italic text-[1.25rem] md:text-[1.5rem] leading-[1.5] text-[#1c1b18] border-l-[3px] border-[#c4512a] pl-[1.5rem] mt-[1.75rem]">
                    "Every brushstroke is a decision. I paint to make sense of
                    the world around me — one canvas at a time."
                  </blockquote>
                  <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] text-[rgba(28,27,24,0.65)] mt-[1.5rem] max-w-[32rem]">
                    I&apos;m an independent painter working in oils and
                    acrylics. My work draws from the tension between stillness
                    and chaos — using colour as language. Each piece is
                    hand-painted on canvas. No prints, no reproductions.
                  </p>
                </FadeInSection>

                <FadeInSection>
                  <div className="flex items-center gap-[2.5rem] mt-[2.5rem] pt-[2rem] border-t border-[rgba(28,27,24,0.1)]">
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="flex flex-col gap-[0.25rem]">
                        <span className="font-['Inter'] font-bold text-[1.75rem] tracking-[-0.04em] text-[#1c1b18]">
                          {value}
                        </span>
                        <span className="font-['Inter'] text-xs font-medium tracking-[0.06em] uppercase text-[rgba(28,27,24,0.45)]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
          <div className="max-w-[72rem] mx-auto">
            <FadeInSection>
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
                How I Work
              </span>
              <h2 className="font-['Inter'] font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18] mb-[3rem]">
                The{" "}
                <span className="font-['Instrument_Serif'] italic font-normal">
                  process
                </span>
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
              {PROCESS_STEPS.map((step) => (
                <FadeInSection key={step.step}>
                  <div className="flex flex-col">
                    <span className="font-['Instrument_Serif'] italic text-[3rem] leading-none text-[rgba(28,27,24,0.12)] mb-[1rem]">
                      {step.step}
                    </span>
                    <h3 className="font-['Inter'] font-semibold text-[1rem] tracking-[-0.02em] text-[#1c1b18] mb-[0.5rem]">
                      {step.title}
                    </h3>
                    <p className="font-['Inter'] text-sm font-light leading-[1.75] text-[rgba(28,27,24,0.6)]">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-[#f2ede5] py-[4rem] px-[1.5rem] md:px-[4rem]">
          <FadeInSection>
            <div className="max-w-[72rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-[1.5rem]">
              <p className="font-['Instrument_Serif'] italic text-[1.5rem] text-[#1c1b18]">
                Want to own a piece of the work?
              </p>
              <div className="flex items-center gap-[0.875rem]">
                <Link
                  href="/shop"
                  className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[1.75rem] py-[0.8125rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200 whitespace-nowrap"
                >
                  Browse the Shop
                </Link>
                <Link
                  href="/commission"
                  className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(28,27,24,0.65)] px-[1.75rem] py-[0.8125rem] rounded-[3rem] border border-[rgba(28,27,24,0.18)] hover:text-[#1c1b18] hover:border-[rgba(28,27,24,0.35)] transition duration-200 whitespace-nowrap"
                >
                  Commission a Piece
                </Link>
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
