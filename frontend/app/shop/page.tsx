import type { Metadata } from "next";
import Link from "next/link";
import { ARTWORKS, STYLES, getArtworksByStyle } from "@/data/artworks";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the full collection of original hand-painted works — available to own.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await searchParams;
  const artworks = getArtworksByStyle(category);
  const activeStyle = STYLES.find(
    (s) => s.toLowerCase() === category.toLowerCase()
  ) ?? "All";

  return (
    <>
      <main className="min-h-screen bg-[#fefcf8] pt-[6rem]">
        <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem]">
          {/* Page header */}
          <FadeInSection>
            <div className="pt-[2rem] pb-[2.5rem]">
              <span className="font-['Inter'] text-xs font-medium tracking-[0.12em] uppercase text-[rgba(28,27,24,0.45)] block mb-[0.75rem]">
                Shop
              </span>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[1rem]">
                <h1 className="font-['Inter'] font-bold text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.05em] text-[#1c1b18]">
                  The{" "}
                  <span className="font-['Instrument_Serif'] italic font-normal">
                    Collection
                  </span>
                </h1>
                <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.45)]">
                  {artworks.length} original{artworks.length !== 1 ? "s" : ""}
                  {activeStyle !== "All" ? ` · ${activeStyle}` : ""}
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Category filter */}
          <FadeInSection>
            <div
              className="flex items-center gap-[0.5rem] flex-wrap pb-[2.5rem] border-b border-[rgba(28,27,24,0.08)]"
              role="list"
              aria-label="Filter by style"
            >
              {STYLES.map((style) => {
                const isActive = style.toLowerCase() === category.toLowerCase() ||
                  (style === "All" && (!category || category === "all"));
                return (
                  <Link
                    key={style}
                    href={style === "All" ? "/shop" : `/shop?category=${style.toLowerCase()}`}
                    role="listitem"
                    className={`font-['Inter'] text-sm font-medium px-[1rem] py-[0.4375rem] rounded-[3rem] transition-colors duration-200 ${
                      isActive
                        ? "bg-[#1c1b18] text-white"
                        : "bg-[rgba(28,27,24,0.06)] text-[rgba(28,27,24,0.65)] hover:bg-[rgba(28,27,24,0.1)] hover:text-[#1c1b18]"
                    }`}
                  >
                    {style}
                  </Link>
                );
              })}
            </div>
          </FadeInSection>

          {/* Grid */}
          {artworks.length > 0 ? (
            <FadeInSection>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[1.5rem] py-[2.5rem]">
                {artworks.map((artwork) => (
                  <Link
                    key={artwork.id}
                    href={`/shop/${artwork.id}`}
                    className="group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_2px_16px_0px_rgba(28,27,24,0.06)] hover:shadow-[0px_12px_32px_0px_rgba(28,27,24,0.13)] hover:-translate-y-1 transition duration-300"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{ background: artwork.bg }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: artwork.shine }}
                      />
                      {!artwork.available && (
                        <div className="absolute inset-0 bg-[rgba(254,252,248,0.55)] flex items-center justify-center">
                          <span className="font-['Inter'] text-xs font-semibold tracking-[0.1em] uppercase text-[rgba(28,27,24,0.6)] bg-white px-[0.875rem] py-[0.375rem] rounded-[3rem]">
                            Sold
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-[1rem] md:p-[1.25rem]">
                      <span className="font-['Inter'] text-[0.6875rem] font-medium tracking-[0.08em] uppercase text-[rgba(28,27,24,0.45)]">
                        {artwork.style}
                      </span>
                      <h2 className="font-['Instrument_Serif'] italic text-[1.125rem] md:text-[1.25rem] text-[#1c1b18] mt-[0.2rem] leading-tight">
                        {artwork.title}
                      </h2>
                      <div className="flex items-center justify-between mt-[0.75rem]">
                        <span className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)]">
                          {artwork.size}
                        </span>
                        <span className="font-['Inter'] text-sm font-semibold text-[#1c1b18]">
                          {artwork.available ? artwork.price : "Sold"}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeInSection>
          ) : (
            <div className="flex flex-col items-center justify-center py-[6rem] text-center">
              <p className="font-['Instrument_Serif'] italic text-[1.5rem] text-[rgba(28,27,24,0.4)] mb-[1rem]">
                No works in this category yet.
              </p>
              <Link
                href="/shop"
                className="font-['Inter'] text-sm font-medium text-[rgba(28,27,24,0.6)] underline underline-offset-4 hover:text-[#1c1b18] transition-colors duration-200"
              >
                View all works
              </Link>
            </div>
          )}

          {/* Available count note */}
          {artworks.length > 0 && (
            <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.35)] text-center pb-[3rem]">
              All works are original paintings. Each one is unique — once sold, it is gone.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
