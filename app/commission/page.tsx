import type { Metadata } from "next";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";
import CommissionForm from "./components/commission-form";

export const metadata: Metadata = {
  title: "Commission",
  description:
    "Request a hand-painted original made to your brief — your colours, your vision, painted by hand just for you.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit your request",
    description:
      "Fill in the form below. Describe the mood, palette, subject, or feeling you have in mind.",
  },
  {
    step: "02",
    title: "I'll send a quote",
    description:
      "Within 2–3 days I'll review your brief and send a detailed quote with timeline and price.",
  },
  {
    step: "03",
    title: "Painting begins",
    description:
      "Once confirmed, I begin work. Progress photos are shared along the way.",
  },
  {
    step: "04",
    title: "Delivered to you",
    description:
      "The finished piece is varnished, signed, and shipped securely to your door.",
  },
] as const;

export default function CommissionPage() {
  return (
    <>
      <main className="bg-[#fefcf8] pt-[4.25rem]">
        {/* Header */}
        <section className="bg-[#f2ede5] py-[4rem] md:py-[6rem] px-[1.5rem] md:px-[4rem]">
          <div className="max-w-[72rem] mx-auto">
            <FadeInSection>
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
                Custom Work
              </span>
              <h1 className="font-['Inter'] font-bold text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.05em] text-[#1c1b18] max-w-[28rem]">
                A painting{" "}
                <span className="font-['Instrument_Serif'] italic font-normal">
                  made for you
                </span>
              </h1>
              <p className="font-['Inter'] text-[1.0625rem] font-light text-[rgba(28,27,24,0.6)] mt-[1rem] max-w-[32rem] leading-[1.75]">
                I take on a limited number of commissions each month. Share your
                vision and I&apos;ll paint it by hand — original, unique, yours.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* How it works */}
        <section className="py-[4rem] md:py-[5rem] px-[1.5rem] md:px-[4rem] border-b border-[rgba(28,27,24,0.08)]">
          <div className="max-w-[72rem] mx-auto">
            <FadeInSection>
              <h2 className="font-['Inter'] font-bold text-[1.375rem] tracking-[-0.03em] text-[#1c1b18] mb-[2.5rem]">
                How it works
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step} className="flex flex-col">
                    <span className="font-['Instrument_Serif'] italic text-[2.5rem] leading-none text-[rgba(28,27,24,0.1)] mb-[0.75rem]">
                      {item.step}
                    </span>
                    <h3 className="font-['Inter'] font-semibold text-sm text-[#1c1b18] mb-[0.375rem]">
                      {item.title}
                    </h3>
                    <p className="font-['Inter'] text-sm font-light leading-[1.7] text-[rgba(28,27,24,0.55)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Form */}
        <section className="py-[4rem] md:py-[6rem] px-[1.5rem] md:px-[4rem]">
          <div className="max-w-[72rem] mx-auto">
            <div className="flex flex-col md:flex-row gap-[4rem] md:gap-[6rem]">
              <FadeInSection className="md:w-[44%] shrink-0">
                <h2 className="font-['Inter'] font-bold text-[1.75rem] tracking-[-0.04em] text-[#1c1b18] mb-[0.75rem]">
                  Tell me what you have in mind
                </h2>
                <p className="font-['Inter'] text-sm font-light leading-[1.75] text-[rgba(28,27,24,0.55)]">
                  The more you share — the palette you love, the feeling you
                  want to wake up to, a room it might hang in — the better the
                  painting will be.
                </p>
                <div className="mt-[2rem] pt-[2rem] border-t border-[rgba(28,27,24,0.1)] flex flex-col gap-[0.75rem]">
                  <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.55)]">
                    <span className="font-medium text-[#1c1b18]">Response time:</span> 2–3 business days
                  </p>
                  <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.55)]">
                    <span className="font-medium text-[#1c1b18]">Timeline:</span> 3–6 weeks from confirmation
                  </p>
                  <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.55)]">
                    <span className="font-medium text-[#1c1b18]">Slots:</span> Limited — 2–3 per month
                  </p>
                </div>
              </FadeInSection>

              <div className="flex-1">
                <FadeInSection>
                  <CommissionForm />
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
