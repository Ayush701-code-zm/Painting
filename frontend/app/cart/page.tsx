import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your shopping cart.",
};

export default function CartPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fefcf8] pt-[4.25rem] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-[1.5rem] py-[6rem]">
          {/* Illustration — empty canvas */}
          <div className="relative w-[9rem] h-[11rem] mb-[2.5rem]">
            <div className="w-full h-full rounded-[0.375rem] border-[0.5rem] border-[#e8e0d0] shadow-[0px_8px_24px_0px_rgba(28,27,24,0.08)]">
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Instrument_Serif'] italic text-[2.5rem] text-[rgba(28,27,24,0.1)]">
                  ∅
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-['Inter'] font-bold text-[1.75rem] tracking-[-0.04em] text-[#1c1b18] mb-[0.625rem]">
            Your cart is empty
          </h1>
          <p className="font-['Inter'] text-[1rem] font-light text-[rgba(28,27,24,0.55)] text-center max-w-[22rem] leading-[1.7] mb-[2rem]">
            Looks like you haven&apos;t added any paintings yet. Browse the
            collection to find something that speaks to you.
          </p>
          <Link
            href="/shop"
            className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200"
          >
            Explore the Collection
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
