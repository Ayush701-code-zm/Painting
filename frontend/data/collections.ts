export type Collection = {
  id: string;
  title: string;
  tagline: string;
  bg: string;
  shine: string;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "anime",
    title: "Anime",
    tagline: "Icons, rendered by hand",
    bg: "linear-gradient(145deg, #2a2a2a 0%, #6a6a6a 40%, #0a0a0a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
  },
  {
    id: "sketch",
    title: "Sketch",
    tagline: "Line, shade, and character",
    bg: "linear-gradient(145deg, #1a1a1a 0%, #8b1a1a 50%, #0a0a0a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 55%)",
  },
  {
    id: "abstract",
    title: "Abstract",
    tagline: "Emotion without boundary",
    bg: "linear-gradient(145deg, #c4512a 0%, #d4943a 40%, #1a0a00 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
  },
  {
    id: "minimal",
    title: "Minimal",
    tagline: "Simplicity as intention",
    bg: "linear-gradient(160deg, #b8cad4 0%, #7a9aaa 50%, #2a4a5a 100%)",
    shine:
      "linear-gradient(225deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
  },
  {
    id: "landscape",
    title: "Landscape",
    tagline: "Places held in paint",
    bg: "linear-gradient(135deg, #6b8a6d 0%, #3a6a4a 40%, #0d2010 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
  },
  {
    id: "contemporary",
    title: "Contemporary",
    tagline: "The present, on canvas",
    bg: "linear-gradient(150deg, #d4a0a0 0%, #b87a7a 50%, #6a2a2a 100%)",
    shine:
      "linear-gradient(300deg, rgba(255,255,255,0.09) 0%, transparent 50%)",
  },
];
