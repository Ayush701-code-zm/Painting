"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHeart, FiGlobe, FiCheck } from "react-icons/fi";
import FadeInSection from "./fade-in-section";

const TRUST_ITEMS = [
  { Icon: FiHeart, label: "Handmade to order" },
  { Icon: FiGlobe, label: "Ships worldwide" },
  { Icon: FiCheck, label: "Satisfaction guaranteed" },
] as const;

const paintingOneVariants = {
  hidden: { opacity: 0, rotate: -8, y: 30 },
  visible: {
    opacity: 1,
    rotate: -3,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay: 0.1 },
  },
};

const paintingTwoVariants = {
  hidden: { opacity: 0, rotate: 6, y: 24 },
  visible: {
    opacity: 1,
    rotate: 2,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.22 },
  },
};

const paintingThreeVariants = {
  hidden: { opacity: 0, rotate: -4, y: 20 },
  visible: {
    opacity: 1,
    rotate: 4,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: 0.34 },
  },
};

export default function CtaSection() {
  return (
    <section className="bg-[#f7f3ed] py-[5rem] md:py-[7rem] px-[1.5rem] md:px-[4rem]">
      <div className="max-w-[72rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-[4rem] md:gap-[6rem]">
          {/* Left — text content */}
          <div className="flex-1 flex flex-col items-start">
            <FadeInSection>
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] mb-[1rem] block">
                Custom Work
              </span>
              <h2 className="font-['Inter'] font-bold text-[2.25rem] md:text-[3.25rem] leading-[1.1] tracking-[-0.05em] text-[#1c1b18]">
                Want something{" "}
                <span className="font-['Instrument_Serif'] italic font-normal tracking-[-0.02em] text-[#c4512a]">
                  made for you?
                </span>
              </h2>
              <p className="mt-[1.25rem] font-['Inter'] text-[1.0625rem] font-light leading-[1.75] tracking-[-0.02em] text-[rgba(28,27,24,0.6)] max-w-[28rem]">
                I take on a limited number of commissions each month. Share your
                vision — the colours, the feeling, the story — and I&apos;ll
                paint it by hand, just for you.
              </p>
            </FadeInSection>

            {/* Trust badges */}
            <FadeInSection>
              <ul className="flex flex-col gap-[0.875rem] mt-[2rem] mb-[2.25rem]">
                {TRUST_ITEMS.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-[0.75rem]">
                    <span className="flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[rgba(196,81,42,0.1)] text-[#c4512a] shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(28,27,24,0.75)]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeInSection>

            {/* CTA buttons */}
            <FadeInSection>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[0.875rem]">
                <Link
                  href="/commission"
                  className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[#e8ae00] hover:shadow-[0px_6px_20px_0px_rgba(252,192,16,0.3)] transition duration-200 whitespace-nowrap"
                >
                  Request a Commission
                </Link>
                <Link
                  href="/about"
                  className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(28,27,24,0.65)] px-[2rem] py-[0.875rem] rounded-[3rem] border border-[rgba(28,27,24,0.18)] hover:border-[rgba(28,27,24,0.35)] hover:text-[#1c1b18] transition duration-200 whitespace-nowrap"
                >
                  See My Process
                </Link>
              </div>
            </FadeInSection>
          </div>

          {/* Right — gallery wall */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[24rem] h-[28rem]">
              <motion.div
                variants={paintingOneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13rem] h-[17rem] rounded-[0.375rem] border-[0.5rem] border-[#f0ead8] shadow-[0px_20px_48px_0px_rgba(28,27,24,0.22)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,#c4512a_0%,#d4943a_35%,#8b4513_65%,#2c1810_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.08)_0%,transparent_55%)]" />
                <div className="absolute bottom-[1rem] left-[1rem] right-[1rem] h-[1px] bg-[rgba(255,255,255,0.15)]" />
              </motion.div>

              <motion.div
                variants={paintingTwoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="absolute right-0 top-[1.5rem] w-[9.5rem] h-[12.5rem] rounded-[0.375rem] border-[0.5rem] border-[#f0ead8] shadow-[0px_14px_32px_0px_rgba(28,27,24,0.18)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(160deg,#6b8a6d_0%,#4a7a7a_45%,#2d5a3d_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(225deg,rgba(255,255,255,0.07)_0%,transparent_50%)]" />
              </motion.div>

              <motion.div
                variants={paintingThreeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="absolute left-0 bottom-[2rem] w-[8.5rem] h-[10.5rem] rounded-[0.375rem] border-[0.5rem] border-[#f0ead8] shadow-[0px_10px_24px_0px_rgba(28,27,24,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#b87a7a_0%,#d4a0a0_50%,#7a4040_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(300deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
              </motion.div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2.5rem] bg-[rgba(28,27,24,0.08)] blur-[1.25rem] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
