import type { Metadata } from "next";
import Link from "next/link";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — for questions about the work, shipping, or anything else.",
};

export default function ContactPage() {
  return (
    <>
      <main className="bg-[#fefcf8] pt-[4.25rem]">
        <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem] py-[4rem] md:py-[6rem]">
          <div className="flex flex-col md:flex-row gap-[4rem] md:gap-[6rem]">
            {/* Left */}
            <FadeInSection className="md:w-[40%] shrink-0 flex flex-col">
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
                Get in Touch
              </span>
              <h1 className="font-['Inter'] font-bold text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18]">
                Let&apos;s{" "}
                <span className="font-['Instrument_Serif'] italic font-normal">
                  talk
                </span>
              </h1>
              <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.75] text-[rgba(28,27,24,0.6)] mt-[1rem] max-w-[24rem]">
                Questions about a painting, shipping, care, or anything else —
                I read every message and reply personally.
              </p>

              <div className="mt-[2.5rem] flex flex-col gap-[1rem]">
                <a
                  href="mailto:hello@glamsfyt.com"
                  className="flex items-center gap-[0.75rem] font-['Inter'] text-sm text-[rgba(28,27,24,0.65)] hover:text-[#1c1b18] transition-colors duration-200"
                >
                  <FiMail size={17} className="shrink-0" />
                  hello@glamsfyt.com
                </a>
                <div className="flex items-center gap-[1rem] mt-[0.5rem]">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[rgba(28,27,24,0.45)] hover:text-[#1c1b18] transition-colors duration-200"
                  >
                    <FiInstagram size={19} />
                  </Link>
                  <Link
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="text-[rgba(28,27,24,0.45)] hover:text-[#1c1b18] transition-colors duration-200"
                  >
                    <FaPinterestP size={19} />
                  </Link>
                </div>
              </div>

              <div className="mt-[2.5rem] pt-[2rem] border-t border-[rgba(28,27,24,0.1)]">
                <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.5)]">
                  For commissions, use the{" "}
                  <Link
                    href="/commission"
                    className="text-[#1c1b18] underline underline-offset-4 hover:text-[#c4512a] transition-colors duration-200"
                  >
                    commission page
                  </Link>
                  .
                </p>
              </div>
            </FadeInSection>

            {/* Right — form */}
            <div className="flex-1">
              <FadeInSection>
                <ContactForm />
              </FadeInSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
