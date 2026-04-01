import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtworkById, ARTWORKS } from "@/data/artworks";
import FadeInSection from "@/app/components/fade-in-section";
import Footer from "@/app/components/footer";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artwork = getArtworkById(id);
  if (!artwork) return { title: "Not Found" };
  return {
    title: artwork.title,
    description: artwork.description,
  };
}

export async function generateStaticParams() {
  return ARTWORKS.map((a) => ({ id: a.id }));
}

export default async function ArtworkPage({ params }: Props) {
  const { id } = await params;
  const artwork = getArtworkById(id);
  if (!artwork) notFound();

  const related = ARTWORKS.filter(
    (a) => a.id !== artwork.id && a.style === artwork.style
  ).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-[#fefcf8] pt-[4.25rem]">
        <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem]">
          {/* Back link */}
          <div className="pt-[2rem] pb-[2.5rem]">
            <Link
              href="/shop"
              className="font-['Inter'] text-sm text-[rgba(28,27,24,0.5)] hover:text-[#1c1b18] transition-colors duration-200"
            >
              ← Back to Shop
            </Link>
          </div>

          {/* Detail layout */}
          <div className="flex flex-col md:flex-row gap-[3rem] md:gap-[5rem] pb-[5rem]">
            {/* Painting */}
            <div className="md:w-[55%] shrink-0">
              <div className="relative rounded-[0.75rem] overflow-hidden shadow-[0px_24px_56px_0px_rgba(28,27,24,0.15)] border-[0.625rem] border-[#f0ead8]">
                <div className="aspect-[3/4] w-full">
                  <div
                    className="absolute inset-0"
                    style={{ background: artwork.bg }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: artwork.shine }}
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <FadeInSection className="flex flex-col flex-1">
              <span className="font-['Inter'] text-xs font-medium tracking-[0.1em] uppercase text-[rgba(28,27,24,0.45)]">
                {artwork.style} · {artwork.medium}
              </span>

              <h1 className="font-['Instrument_Serif'] italic text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.02em] text-[#1c1b18] mt-[0.5rem]">
                {artwork.title}
              </h1>

              <div className="flex items-center gap-[1.5rem] mt-[1.5rem] pb-[1.5rem] border-b border-[rgba(28,27,24,0.1)]">
                <div>
                  <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)] mb-[0.2rem]">Size</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1c1b18]">{artwork.size}</p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)] mb-[0.2rem]">Year</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1c1b18]">{artwork.year}</p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)] mb-[0.2rem]">Medium</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1c1b18]">{artwork.medium}</p>
                </div>
              </div>

              <p className="font-['Inter'] text-[1.0625rem] font-light leading-[1.8] text-[rgba(28,27,24,0.65)] mt-[1.5rem]">
                {artwork.description}
              </p>

              <div className="mt-[2rem] pt-[2rem] border-t border-[rgba(28,27,24,0.1)]">
                <p className="font-['Inter'] font-bold text-[2rem] tracking-[-0.03em] text-[#1c1b18]">
                  {artwork.available ? artwork.price : "Sold"}
                </p>
                {artwork.available && (
                  <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.45)] mt-[0.25rem]">
                    + shipping · Certificate of authenticity included
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-[0.75rem] mt-[1.75rem]">
                {artwork.available ? (
                  <>
                    <button
                      type="button"
                      className="w-full font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] py-[0.9375rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                    <Link
                      href="/contact"
                      className="w-full font-['Inter'] text-[0.9375rem] font-medium text-[rgba(28,27,24,0.65)] border border-[rgba(28,27,24,0.18)] py-[0.9375rem] rounded-[3rem] hover:border-[rgba(28,27,24,0.35)] hover:text-[#1c1b18] transition duration-200 text-center"
                    >
                      Ask a question
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/commission"
                    className="w-full font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] py-[0.9375rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200 text-center"
                  >
                    Commission a similar piece
                  </Link>
                )}
              </div>

              <p className="font-['Inter'] text-xs text-[rgba(28,27,24,0.4)] mt-[1.25rem]">
                One of a kind original. Ships within 5–7 business days.
              </p>
            </FadeInSection>
          </div>

          {/* Related works */}
          {related.length > 0 && (
            <div className="pb-[5rem]">
              <FadeInSection>
                <h2 className="font-['Inter'] font-bold text-[1.5rem] tracking-[-0.04em] text-[#1c1b18] mb-[1.5rem]">
                  More {artwork.style} works
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[1.5rem]">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/shop/${rel.id}`}
                      className="group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_2px_16px_0px_rgba(28,27,24,0.06)] hover:shadow-[0px_12px_32px_0px_rgba(28,27,24,0.13)] hover:-translate-y-1 transition duration-300"
                    >
                      <div className="relative aspect-[3/4]">
                        <div className="absolute inset-0" style={{ background: rel.bg }} />
                        <div className="absolute inset-0" style={{ background: rel.shine }} />
                      </div>
                      <div className="p-[1rem]">
                        <h3 className="font-['Instrument_Serif'] italic text-[1.125rem] text-[#1c1b18]">
                          {rel.title}
                        </h3>
                        <p className="font-['Inter'] text-sm font-semibold text-[#1c1b18] mt-[0.5rem]">
                          {rel.available ? rel.price : "Sold"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </FadeInSection>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
