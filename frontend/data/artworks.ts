export type Artwork = {
  id: string;
  title: string;
  style: string;
  size: string;
  price: string;
  medium: string;
  year: number;
  description: string;
  bg: string;
  shine: string;
  available: boolean;
};

export const ARTWORKS: Artwork[] = [
  {
    id: "autumn-solstice",
    title: "Autumn Solstice",
    style: "Abstract",
    size: "24 × 30 in",
    price: "₹18,500",
    medium: "Oil on canvas",
    year: 2024,
    description:
      "An exploration of seasonal transition through layered warm tones. The push and pull of amber against deep shadow captures the last breath of summer before it surrenders to the cold.",
    bg: "linear-gradient(145deg, #c4512a 0%, #d4943a 40%, #1a0a00 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
  },
  {
    id: "still-waters",
    title: "Still Waters",
    style: "Minimal",
    size: "18 × 24 in",
    price: "₹12,000",
    medium: "Acrylic on canvas",
    year: 2024,
    description:
      "A study in stillness. Soft blue-greys fade into depth, evoking the surface of a lake at dawn before the world wakes and disturbs the quiet.",
    bg: "linear-gradient(160deg, #b8cad4 0%, #7a9aaa 50%, #2a4a5a 100%)",
    shine:
      "linear-gradient(225deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
    available: true,
  },
  {
    id: "forest-dusk",
    title: "Forest Dusk",
    style: "Landscape",
    size: "30 × 40 in",
    price: "₹26,000",
    medium: "Oil on canvas",
    year: 2023,
    description:
      "The moment light dies in a forest — deep greens dissolving into dark. A large-format piece designed to bring the quiet of the outside in.",
    bg: "linear-gradient(135deg, #6b8a6d 0%, #3a6a4a 40%, #0d2010 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
    available: true,
  },
  {
    id: "desert-rose",
    title: "Desert Rose",
    style: "Contemporary",
    size: "16 × 20 in",
    price: "₹9,500",
    medium: "Acrylic on canvas",
    year: 2024,
    description:
      "Inspired by the warmth of arid landscapes. Dusty pinks and muted roses suggest both fragility and resilience — two things that often live together.",
    bg: "linear-gradient(150deg, #d4a0a0 0%, #b87a7a 50%, #6a2a2a 100%)",
    shine:
      "linear-gradient(300deg, rgba(255,255,255,0.09) 0%, transparent 50%)",
    available: false,
  },
  {
    id: "midnight-blue",
    title: "Midnight Blue",
    style: "Abstract",
    size: "24 × 36 in",
    price: "₹22,000",
    medium: "Oil on canvas",
    year: 2023,
    description:
      "A nocturnal study in deep cobalt. Layers of blue create a sense of infinite depth, like looking up at a clear night sky far from any city.",
    bg: "linear-gradient(140deg, #2d5a8e 0%, #1a3a6e 50%, #060820 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
    available: true,
  },
  {
    id: "golden-fields",
    title: "Golden Fields",
    style: "Landscape",
    size: "20 × 30 in",
    price: "₹15,500",
    medium: "Oil on canvas",
    year: 2024,
    description:
      "Amber and gold dissolve into rich shadow. A meditation on abundance and the particular way light behaves during harvest — heavy and slow.",
    bg: "linear-gradient(135deg, #d4a043 0%, #a86e10 50%, #3a2008 100%)",
    shine:
      "linear-gradient(225deg, rgba(255,255,255,0.11) 0%, transparent 50%)",
    available: true,
  },
];

export const STYLES = [
  "All",
  "Abstract",
  "Minimal",
  "Landscape",
  "Contemporary",
] as const;

export type Style = (typeof STYLES)[number];

export function getArtworkById(id: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.id === id);
}

export function getArtworksByStyle(style: string): Artwork[] {
  if (!style || style.toLowerCase() === "all") return ARTWORKS;
  return ARTWORKS.filter(
    (a) => a.style.toLowerCase() === style.toLowerCase()
  );
}
