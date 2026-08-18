import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type Props = {
  artwork: Artwork;
  priority?: boolean;
  sizes?: string;
};

export default function ArtworkImage({
  artwork,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 33vw",
}: Props) {
  if (artwork.image) {
    return (
      <Image
        src={artwork.image}
        alt={artwork.imageAlt ?? artwork.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <>
      <div className="absolute inset-0" style={{ background: artwork.bg }} />
      <div className="absolute inset-0" style={{ background: artwork.shine }} />
    </>
  );
}
