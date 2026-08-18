import Link from "next/link";
import Footer from "@/app/components/footer";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4.25rem)] bg-[#fefcf8] px-[1.5rem] text-center pt-[4.25rem]">
        <span className="font-['Instrument_Serif'] italic text-[6rem] md:text-[8rem] leading-none text-[rgba(28,27,24,0.08)] select-none">
          404
        </span>
        <h1 className="font-['Inter'] font-bold text-[1.75rem] tracking-[-0.04em] text-[#1c1b18] mt-[0.5rem]">
          Page not found
        </h1>
        <p className="font-['Inter'] text-[1rem] font-light text-[rgba(28,27,24,0.55)] mt-[0.625rem] max-w-[22rem] leading-[1.7]">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-[0.875rem] mt-[2rem]">
          <Link
            href="/"
            className="font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] px-[2rem] py-[0.875rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="font-['Inter'] text-[0.9375rem] font-medium text-[rgba(28,27,24,0.65)] px-[2rem] py-[0.875rem] rounded-[3rem] border border-[rgba(28,27,24,0.18)] hover:text-[#1c1b18] hover:border-[rgba(28,27,24,0.35)] transition duration-200"
          >
            Browse the Shop
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
