import Image from "next/image";
import Link from "next/link";
import { FOUNDER } from "@/data/founder";
import FadeInSection from "./fade-in-section";

export default function AboutSection() {
  return (
    <section className="bg-[#f2ede5] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
      <div className="max-w-[72rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-[4rem] md:gap-[5rem]">
          {/* Founder imagery */}
          <FadeInSection className="shrink-0 w-full md:w-auto">
            <div className="relative mx-auto md:mx-0 w-full max-w-[20rem] md:max-w-none md:w-[22rem]">
              <div className="relative rounded-[0.5rem] border-[0.625rem] border-[#ede5d0] shadow-[0px_24px_56px_0px_rgba(28,27,24,0.2)] overflow-hidden aspect-[3/4] bg-[#ede5d0]">
                <Image
                  src={FOUNDER.portraitImage}
                  alt={FOUNDER.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 22rem"
                  className="object-cover object-center"
                />
              </div>

              <div
                className="absolute -bottom-[1.25rem] -right-[0.5rem] md:-right-[2rem] w-[42%] rounded-[0.375rem] border-[0.5rem] border-[#ede5d0] shadow-[0px_16px_40px_0px_rgba(28,27,24,0.22)] overflow-hidden aspect-[3/4] bg-[#ede5d0]"
              >
                <Image
                  src={FOUNDER.paintingImage}
                  alt={FOUNDER.paintingAlt}
                  fill
                  sizes="(max-width: 768px) 35vw, 9rem"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </FadeInSection>

          {/* Bio */}
          <div className="flex-1 flex flex-col min-w-0">
            <FadeInSection>
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[1.25rem]">
                Founder
              </span>

              <blockquote className="mb-[1.75rem]">
                <p className="font-['Instrument_Serif'] italic text-[1.5rem] md:text-[1.875rem] leading-[1.4] tracking-[-0.02em] text-[#1c1b18] border-l-[3px] border-[#c4512a] pl-[1.5rem]">
                  &ldquo;{FOUNDER.quote}&rdquo;
                </p>
                <cite className="font-['Inter'] text-sm not-italic text-[rgba(28,27,24,0.45)] mt-[0.75rem] pl-[1.5rem] block">
                  — {FOUNDER.quoteAttribution}
                </cite>
              </blockquote>

              <h2 className="font-['Inter'] font-bold text-[1.75rem] md:text-[2.125rem] leading-[1.15] tracking-[-0.04em] text-[#1c1b18]">
                Hi, I am {FOUNDER.name}
              </h2>
              <p className="font-['Inter'] text-sm font-medium tracking-[0.04em] text-[rgba(28,27,24,0.5)] mt-[0.5rem]">
                {FOUNDER.role}
              </p>

              <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] tracking-[-0.02em] text-[rgba(28,27,24,0.65)] mt-[1.5rem] max-w-[36rem]">
                {FOUNDER.intro}
              </p>
              <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] tracking-[-0.02em] text-[rgba(28,27,24,0.65)] mt-[1rem] max-w-[36rem]">
                {FOUNDER.bio[2]}
              </p>

              <Link
                href="/about"
                className="inline-block mt-[1.75rem] font-['Inter'] text-sm font-medium text-[rgba(28,27,24,0.6)] hover:text-[#1c1b18] transition-colors duration-200 underline underline-offset-4"
              >
                Read the full story →
              </Link>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
