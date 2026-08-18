import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";
import { FOUNDER } from "@/data/founder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Shivi Upadhyay — visual artist and illustrator. The story behind the paintings, from Banaras to handmade originals on canvas.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Observation",
    description:
      "Every painting begins with looking — a feeling, a colour, or a subject that asks to be explored on canvas.",
  },
  {
    step: "02",
    title: "Composition",
    description:
      "Sketches and studies help shape the work before paint meets canvas.",
  },
  {
    step: "03",
    title: "Painting",
    description:
      "Acrylics, inks, and watercolours — layered by hand with expressive brushwork and careful detail.",
  },
  {
    step: "04",
    title: "Finishing",
    description:
      "Each piece is signed, finished, and prepared to live in your space.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#fefcf8] pt-[4.25rem]">
        <section className="bg-[#f2ede5] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
          <div className="max-w-[72rem] mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-[4rem] lg:gap-[5rem]">
              <div className="w-full lg:w-[28rem] shrink-0">
                <FadeInSection>
                  <div className="grid grid-cols-2 gap-[1rem]">
                    <div className="relative col-span-2 rounded-[0.5rem] border-[0.625rem] border-[#ede5d0] shadow-[0px_24px_56px_0px_rgba(28,27,24,0.2)] overflow-hidden aspect-[4/5] bg-[#ede5d0]">
                      <Image
                        src={FOUNDER.portraitImage}
                        alt={FOUNDER.portraitAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 28rem"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="relative rounded-[0.5rem] border-[0.5rem] border-[#ede5d0] shadow-[0px_12px_32px_0px_rgba(28,27,24,0.15)] overflow-hidden aspect-[3/4] bg-[#ede5d0]">
                      <Image
                        src={FOUNDER.paintingImage}
                        alt={FOUNDER.paintingAlt}
                        fill
                        sizes="(max-width: 1024px) 45vw, 13rem"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-[0.5rem] bg-[rgba(28,27,24,0.04)] border border-[rgba(28,27,24,0.08)] px-[1rem] py-[1.25rem] aspect-[3/4]">
                      <span className="font-['Instrument_Serif'] italic text-[1.125rem] text-[rgba(28,27,24,0.55)] text-center leading-snug">
                        Hand-painted originals, one canvas at a time.
                      </span>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              <div className="flex-1 min-w-0">
                <FadeInSection>
                  <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[1.25rem]">
                    About the Artist
                  </span>

                  <blockquote className="mb-[2rem]">
                    <p className="font-['Instrument_Serif'] italic text-[1.375rem] md:text-[1.75rem] leading-[1.45] tracking-[-0.02em] text-[#1c1b18] border-l-[3px] border-[#c4512a] pl-[1.5rem]">
                      &ldquo;{FOUNDER.quote}&rdquo;
                    </p>
                    <cite className="font-['Inter'] text-sm not-italic text-[rgba(28,27,24,0.45)] mt-[0.75rem] pl-[1.5rem] block">
                      — {FOUNDER.quoteAttribution}
                    </cite>
                  </blockquote>

                  <h1 className="font-['Inter'] font-bold text-[2.25rem] md:text-[3rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18]">
                    Hi, I am {FOUNDER.name}
                  </h1>
                  <p className="font-['Inter'] text-base font-medium text-[rgba(28,27,24,0.5)] mt-[0.5rem]">
                    {FOUNDER.role}
                  </p>

                  <div className="mt-[2rem] space-y-[1.25rem] max-w-[36rem]">
                    <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] text-[rgba(28,27,24,0.65)]">
                      {FOUNDER.intro}
                    </p>
                    {FOUNDER.bio.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] text-[rgba(28,27,24,0.65)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
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

        <section className="bg-[#f2ede5] py-[4rem] px-[1.5rem] md:px-[4rem]">
          <FadeInSection>
            <div className="max-w-[72rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-[1.5rem]">
              <p className="font-['Instrument_Serif'] italic text-[1.5rem] text-[#1c1b18]">
                Explore the collection
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
