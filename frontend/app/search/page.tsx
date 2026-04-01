import type { Metadata } from "next";
import Link from "next/link";
import { ARTWORKS } from "@/data/artworks";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Search",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const results = query
    ? ARTWORKS.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.style.toLowerCase().includes(query) ||
          a.medium.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <main className="min-h-screen bg-[#fefcf8] pt-[6rem]">
        <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem] py-[2.5rem]">
          <FadeInSection>
            <h1 className="font-['Inter'] font-bold text-[2rem] md:text-[2.5rem] tracking-[-0.05em] text-[#1c1b18] mb-[0.5rem]">
              {query ? (
                <>
                  Results for{" "}
                  <span className="font-['Instrument_Serif'] italic font-normal">
                    &ldquo;{q}&rdquo;
                  </span>
                </>
              ) : (
                "Search the collection"
              )}
            </h1>
            {query && (
              <p className="font-['Inter'] text-sm text-[rgba(28,27,24,0.45)]">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </p>
            )}
          </FadeInSection>

          {/* Results */}
          {!query && (
            <div className="flex flex-col items-center py-[4rem] text-center">
              <p className="font-['Instrument_Serif'] italic text-[1.375rem] text-[rgba(28,27,24,0.4)]">
                Use the search bar in the header to find a painting.
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="flex flex-col items-center py-[4rem] text-center">
              <p className="font-['Instrument_Serif'] italic text-[1.375rem] text-[rgba(28,27,24,0.4)] mb-[1rem]">
                No paintings match &ldquo;{q}&rdquo;.
              </p>
              <Link
                href="/shop"
                className="font-['Inter'] text-sm font-medium text-[rgba(28,27,24,0.6)] underline underline-offset-4 hover:text-[#1c1b18] transition-colors duration-200"
              >
                Browse all works
              </Link>
            </div>
          )}

          {results.length > 0 && (
            <FadeInSection>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[1.5rem] mt-[2.5rem]">
                {results.map((artwork) => (
                  <Link
                    key={artwork.id}
                    href={`/shop/${artwork.id}`}
                    className="group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_2px_16px_0px_rgba(28,27,24,0.06)] hover:shadow-[0px_12px_32px_0px_rgba(28,27,24,0.13)] hover:-translate-y-1 transition duration-300"
                  >
                    <div className="relative aspect-[3/4]">
                      <div className="absolute inset-0" style={{ background: artwork.bg }} />
                      <div className="absolute inset-0" style={{ background: artwork.shine }} />
                    </div>
                    <div className="p-[1rem] md:p-[1.25rem]">
                      <span className="font-['Inter'] text-[0.6875rem] font-medium tracking-[0.08em] uppercase text-[rgba(28,27,24,0.45)]">
                        {artwork.style}
                      </span>
                      <h2 className="font-['Instrument_Serif'] italic text-[1.25rem] text-[#1c1b18] mt-[0.2rem]">
                        {artwork.title}
                      </h2>
                      <div className="flex items-center justify-between mt-[0.75rem]">
                        <span className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)]">{artwork.size}</span>
                        <span className="font-['Inter'] text-sm font-semibold text-[#1c1b18]">
                          {artwork.available ? artwork.price : "Sold"}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeInSection>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
