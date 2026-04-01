import FadeInSection from "./fade-in-section";

const STATS = [
  { value: "200+", label: "Originals sold" },
  { value: "15+", label: "Countries reached" },
  { value: "8 yrs", label: "Of practice" },
] as const;

export default function AboutSection() {
  return (
    <section className="bg-[#f2ede5] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
      <div className="max-w-[72rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-[4rem] md:gap-[6rem]">
          {/* Left — portrait painting */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-[16rem] md:w-[20rem]">
              {/* Outer frame shadow */}
              <div className="relative rounded-[0.5rem] border-[0.625rem] border-[#ede5d0] shadow-[0px_24px_56px_0px_rgba(28,27,24,0.2)] overflow-hidden aspect-[3/4]">
                {/* Portrait painting gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #d4a878 0%, #c4825a 30%, #8b5232 65%, #3d2010 100%)",
                  }}
                />
                {/* Light highlight */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(225deg, rgba(255,255,255,0.14) 0%, transparent 45%)",
                  }}
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 30%, transparent 40%, rgba(10,5,0,0.35) 100%)",
                  }}
                />
              </div>

              {/* Signature tag */}
              <div className="mt-[1rem] text-center">
                <span className="font-['Instrument_Serif'] italic text-[1.125rem] text-[rgba(28,27,24,0.6)]">
                  The Artist
                </span>
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex-1 flex flex-col">
            <FadeInSection>
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[1.25rem]">
                About
              </span>

              {/* Large pull quote */}
              <blockquote className="font-['Instrument_Serif'] italic text-[1.5rem] md:text-[1.875rem] leading-[1.45] tracking-[-0.02em] text-[#1c1b18] border-l-[3px] border-[#c4512a] pl-[1.5rem] mb-[2rem]">
                "Every brushstroke is a decision. I paint to make sense of the
                world around me — one canvas at a time."
              </blockquote>

              <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] tracking-[-0.02em] text-[rgba(28,27,24,0.65)] max-w-[32rem]">
                I&apos;m an independent painter working in oils and acrylics. My
                work draws from the tension between stillness and chaos, using
                colour as language. Each piece is hand-painted on canvas — no
                prints, no reproductions, no compromises.
              </p>
            </FadeInSection>

            {/* Stats */}
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
  );
}
