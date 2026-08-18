export type Artwork = {
  id: string;
  title: string;
  style: string;
  size: string;
  price: string;
  medium: string;
  year: number;
  description: string;
  metaDescription: string;
  fullDescription: string;
  image: string;
  imageAlt?: string;
  bg: string;
  shine: string;
  available: boolean;
  character?: string;
  series?: string;
  colorPalette?: string;
  finish?: string;
  signed?: boolean;
  perfectFor?: string[];
  keywords?: string[];
};

export const ARTWORKS: Artwork[] = [
  {
    id: "goku-power-within",
    title: "Goku – Power Within",
    style: "Anime",
    size: "16 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original monochrome acrylic painting inspired by Goku from Dragon Ball — capturing intense focus, determination, and Saiyan strength through bold expressive brushstrokes.",
    metaDescription:
      "Goku – Power Within — an original handmade acrylic painting on canvas inspired by Goku from Dragon Ball. Rendered in a striking monochrome palette, this contemporary anime artwork captures Goku’s unwavering determination and Saiyan spirit, making it a bold statement piece for anime enthusiasts.",
    fullDescription: `Goku – Power Within

Original acrylic painting on canvas.

Inspired by Goku, the legendary Saiyan warrior from the Dragon Ball series, this original monochrome artwork captures a moment of intense focus, determination, and limitless strength. Depicted in a dynamic pose with bold expressive brushstrokes, the painting reflects the resilience and fighting spirit that have made Goku one of anime’s most iconic heroes.

Rendered entirely in shades of black, white, and grey, the dramatic composition emphasizes movement, emotion, and power while showcasing the rich texture of hand-painted acrylics. Every visible brushstroke highlights the authenticity of the artwork, making each canvas a unique collectible for anime lovers.

The monochrome palette gives this piece a modern, gallery-style aesthetic while staying true to Goku’s unmistakable silhouette and powerful presence. Whether displayed in a gaming setup, bedroom, office, studio, or entertainment space, this artwork becomes an instant focal point that celebrates courage, perseverance, and the drive to surpass every limit.

Created for fans of Dragon Ball, this handmade painting blends contemporary art with one of anime’s most beloved characters, making it a standout addition to any anime collection.`,
    image: "/images/goku-power-within.png",
    bg: "linear-gradient(145deg, #2a2a2a 0%, #6a6a6a 40%, #0a0a0a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    character: "Goku (Dragon Ball fan art)",
    series: "Dragon Ball",
    colorPalette: "Black, white, grey, and subtle blue-grey accents",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Dragon Ball fans",
      "Anime collectors",
      "Gaming setups",
      "Living room wall décor",
      "Home office",
      "Creative studios",
      "Gifts for anime enthusiasts",
    ],
    keywords: [
      "Goku painting",
      "Dragon Ball wall art",
      "Goku fan art",
      "Dragon Ball fan art",
      "handmade anime painting",
      "Goku canvas art",
      "anime wall décor",
      "monochrome anime artwork",
      "original acrylic painting",
      "Dragon Ball artwork",
      "Saiyan wall art",
      "gaming room décor",
      "16 × 24 canvas painting",
      "handmade anime canvas",
    ],
  },
  {
    id: "goku-unyielding-spirit",
    title: "Goku – Unyielding Spirit",
    style: "Anime",
    size: "16 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original acrylic painting of Goku against a bold crimson background — celebrating courage, resilience, and Saiyan pride through vibrant anime aesthetics.",
    metaDescription:
      "Goku – Unyielding Spirit — an original handmade acrylic painting on canvas inspired by Goku from Dragon Ball. Featuring a bold crimson background and striking anime aesthetics, this contemporary artwork celebrates courage, resilience, and Saiyan pride.",
    fullDescription: `Goku – Unyielding Spirit

Original acrylic painting on canvas.

Inspired by Goku, the legendary Saiyan warrior from the Dragon Ball series, this original artwork captures his unwavering confidence and indomitable spirit. Depicted with his iconic crossed-arm stance against a vivid crimson backdrop, the composition reflects Goku’s fearless determination, strength, and readiness to overcome any challenge.

Painted using vibrant acrylics with bold black linework and expressive brushstrokes, the artwork brings Goku’s signature features to life—from his spiky hair and determined gaze to his instantly recognizable orange and blue gi. The rich red background amplifies the energy of the composition, making it an eye-catching centerpiece.

Every visible brushstroke celebrates the authenticity of handmade art, ensuring that each canvas is a unique creation. Blending contemporary pop-art influences with classic anime aesthetics, this painting is designed to bring energy, nostalgia, and character to any interior.

Whether displayed in a gaming room, bedroom, home office, entertainment space, or anime collection, Goku – Unyielding Spirit is a statement piece that embodies perseverance, courage, and the relentless pursuit of becoming stronger.`,
    image: "/images/goku-unyielding-spirit.png",
    bg: "linear-gradient(145deg, #c41e1e 0%, #8b1010 50%, #2a0505 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    character: "Goku (Dragon Ball fan art)",
    series: "Dragon Ball",
    colorPalette: "Crimson red, orange, blue, black, and warm skin tones",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Dragon Ball fans",
      "Anime collectors",
      "Gaming setups",
      "Living room wall décor",
      "Home office",
      "Entertainment rooms",
      "Gifts for anime enthusiasts",
    ],
    keywords: [
      "Goku painting",
      "Dragon Ball wall art",
      "Goku fan art",
      "Dragon Ball fan art",
      "anime canvas painting",
      "handmade acrylic artwork",
      "Goku portrait",
      "anime wall décor",
      "gaming room art",
      "Saiyan artwork",
      "contemporary anime painting",
      "original canvas artwork",
      "16 × 24 canvas painting",
      "handmade anime wall art",
    ],
  },
  {
    id: "stranger-things-character-sketch",
    title: "Stranger Things Character Sketch",
    style: "Sketch",
    size: "A3 (29.7 × 42 cm)",
    price: "Price on request",
    medium: "Graphite pencil with red marker accents on premium drawing paper",
    year: 2026,
    description:
      "An original handmade pencil sketch of iconic Stranger Things characters, enhanced with bold red accents and professionally framed — a striking collectible for fans and modern interiors.",
    metaDescription:
      "Stranger Things Character Sketch — an original handmade pencil sketch featuring iconic characters from the hit Netflix series, enhanced with bold red accents and professionally framed. A striking collectible artwork for fans and modern interiors.",
    fullDescription: `Stranger Things Character Sketch

Original handmade graphite pencil sketch on premium drawing paper.

This original artwork celebrates the unforgettable world of Stranger Things, bringing together its most iconic characters in a dynamic hand-drawn composition. Created entirely in graphite pencil with carefully placed red highlights, the sketch captures the emotion, mystery, and nostalgic atmosphere that define the series.

Every portrait is individually hand-rendered, preserving natural pencil textures, expressive linework, and authentic shading. The selective red accents add dramatic contrast while complementing the show’s signature visual identity, making the artwork both contemporary and instantly recognizable.

Professionally mounted with a clean white mat and finished in a sleek black frame, this piece is ready to display and serves as a standout statement for entertainment rooms, studios, offices, or any fan’s collection.

Each artwork is handmade, making every piece unique while showcasing the craftsmanship and originality of traditional sketching.`,
    image: "/images/stranger-things-character-sketch.png",
    bg: "linear-gradient(145deg, #1a1a1a 0%, #8b1a1a 50%, #0a0a0a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 55%)",
    available: true,
    character: "Stranger Things Characters",
    series: "Stranger Things",
    colorPalette: "Graphite greys with bold red accents",
    finish: "Premium black frame with white mat, ready to hang",
    signed: true,
    perfectFor: [
      "Stranger Things fans",
      "Netflix memorabilia collectors",
      "Home theatre décor",
      "Gaming & entertainment rooms",
      "Bedroom wall décor",
      "Modern office spaces",
      "Pop culture art collections",
      "Unique gifts for TV series enthusiasts",
    ],
    keywords: [
      "Stranger Things sketch",
      "Stranger Things artwork",
      "handmade Stranger Things drawing",
      "framed pencil sketch",
      "Netflix wall art",
      "Stranger Things fan art",
      "graphite portrait drawing",
      "original character sketch",
      "pop culture artwork",
      "framed sketch art",
      "A3 framed artwork",
      "handmade pencil portrait",
      "TV series wall décor",
      "collectible Stranger Things art",
    ],
  },
  {
    id: "sanji-portrait",
    title: "Sanji Portrait",
    style: "Anime",
    size: "A3 (Framed)",
    price: "Price on request",
    medium: "Watercolor and ink on paper",
    year: 2026,
    description:
      "An original handmade watercolor and ink portrait of Sanji from One Piece — capturing his iconic smile in a beautifully framed anime illustration.",
    metaDescription:
      "Sanji Portrait — an original handmade watercolor and ink artwork featuring Sanji from One Piece in his iconic smiling expression. A beautifully framed anime illustration perfect for collectors, anime-inspired interiors, and modern wall décor.",
    fullDescription: `Sanji Portrait

Original watercolor and ink artwork on paper, professionally framed.

Inspired by Sanji, the beloved chef of the Straw Hat Pirates from One Piece, this handmade illustration captures his charismatic personality with a relaxed smile, signature cigarette, and unmistakable blond hair. The soft watercolor background complements expressive ink linework, creating a perfect balance between elegance and anime-inspired storytelling.

Every brushstroke and ink line is created entirely by hand, preserving the authenticity and individuality of the original artwork. The clean white mat board and premium black frame elevate the illustration, making it ready for display in both modern and minimalist interiors.

Whether you’re a lifelong One Piece fan or an anime art collector, this framed portrait brings personality, nostalgia, and craftsmanship into any space.`,
    image: "/images/sanji-portrait.png",
    bg: "linear-gradient(145deg, #6ba3c7 0%, #e8c84a 45%, #1a1a1a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.12) 0%, transparent 55%)",
    available: true,
    character: "Sanji (One Piece)",
    series: "One Piece",
    colorPalette: "Soft blue, golden yellow, black, white, and warm skin tones",
    finish: "Professionally framed with white mat board and black frame, ready to hang",
    signed: true,
    perfectFor: [
      "Anime room décor",
      "Gaming setups",
      "Living room wall art",
      "Bedroom décor",
      "Anime collectors",
      "One Piece fans",
      "Birthday and special occasion gifts",
      "Modern framed art collections",
    ],
    keywords: [
      "Sanji artwork",
      "One Piece wall art",
      "Sanji portrait",
      "handmade anime painting",
      "watercolor anime art",
      "framed anime artwork",
      "One Piece fan art",
      "original anime illustration",
      "anime wall décor",
      "Sanji framed art",
      "manga artwork",
      "handcrafted anime painting",
      "A3 framed artwork",
      "collectible anime art",
    ],
  },
  {
    id: "tanjiro-kamado-manga-canvas",
    title: "Tanjiro Kamado Manga Canvas",
    style: "Anime",
    size: "16 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original handmade acrylic painting of Tanjiro from Demon Slayer — combining iconic manga panels with a bold 3D portrait for a striking statement piece.",
    metaDescription:
      "Tanjiro Kamado Manga Canvas — an original handmade acrylic painting on canvas featuring Tanjiro from Demon Slayer, combining iconic manga panels with a bold 3D portrait. A striking statement piece for anime fans and contemporary interiors.",
    fullDescription: `Tanjiro Kamado Manga Canvas

Original handmade acrylic painting on canvas.

This original artwork features Tanjiro Kamado, the determined protagonist of Demon Slayer, brought to life through a unique blend of monochrome manga panels and a vibrant hand-painted central portrait. The layered composition creates a dynamic 3D effect, with Tanjiro emerging from his own story, symbolizing courage, resilience, and unwavering determination.

The detailed manga collage serves as a dramatic backdrop while the bold acrylic portrait highlights Tanjiro’s signature maroon hair, Hanafuda earrings, and Water Breathing technique with expressive brushwork and vibrant colors. Every visible brushstroke reflects the authenticity of handmade art, making each painting completely one of a kind.

Perfect as a statement artwork for anime lovers, collectors, gaming rooms, studios, or modern living spaces, this piece captures the spirit of one of anime’s most inspiring heroes.`,
    image: "/images/tanjiro-kamado-manga-canvas.png",
    bg: "linear-gradient(145deg, #1a1a1a 0%, #2a5a8e 40%, #8b1a2a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    character: "Tanjiro Kamado (Demon Slayer)",
    series: "Demon Slayer",
    colorPalette: "Black, white, blue, crimson, emerald green, and warm skin tones",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Anime room décor",
      "Gaming setup",
      "Living room statement wall",
      "Bedroom décor",
      "Manga & anime collectors",
      "Demon Slayer fans",
      "Gift for anime lovers",
      "Contemporary pop culture art collections",
    ],
    keywords: [
      "Tanjiro painting",
      "Demon Slayer wall art",
      "Tanjiro Kamado canvas",
      "anime acrylic painting",
      "manga collage artwork",
      "handmade anime painting",
      "original canvas artwork",
      "Demon Slayer décor",
      "anime wall décor",
      "manga art",
      "anime collector art",
      "Tanjiro wall painting",
      "Japanese anime artwork",
      "original handmade anime canvas",
    ],
  },
  {
    id: "anya-forger-portrait",
    title: "Anya Forger Portrait",
    style: "Anime",
    size: "16 × 16 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original handmade acrylic portrait of Anya Forger from Spy × Family — vibrant colors and expressive charm on a bold mustard-yellow canvas.",
    metaDescription:
      "Anya Forger Portrait — an original handmade acrylic painting on canvas featuring Anya Forger from Spy × Family. A vibrant anime-inspired artwork with bold colors and expressive charm, perfect for anime fans, collectors, and modern interiors.",
    fullDescription: `Anya Forger Portrait

Original handmade acrylic painting on canvas.

This original artwork captures Anya Forger, the beloved telepath from Spy × Family, in her instantly recognizable adorable expression. Set against a bold mustard-yellow background, the portrait emphasizes her vibrant pink hair, striking emerald-green eyes, and signature black hair accessories, creating a cheerful and eye-catching composition.

Painted with clean lines, rich acrylic colors, and expressive detailing, this artwork celebrates Anya’s playful innocence and unmistakable personality. The minimalist background allows the character to remain the focal point while giving the painting a contemporary aesthetic suitable for modern interiors.

Every visible brushstroke reflects the authenticity of handmade art, ensuring each canvas is unique. Whether you’re an anime collector or simply looking for a colorful statement piece, this artwork brings warmth, nostalgia, and personality to any space.

Perfect for bedrooms, gaming setups, anime collections, studios, cafés, or gifting to any Spy × Family fan.`,
    image: "/images/anya-forger-portrait.png",
    bg: "linear-gradient(145deg, #e8b84a 0%, #e87a9a 45%, #1a1a1a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.12) 0%, transparent 55%)",
    available: true,
    character: "Anya Forger (Spy × Family)",
    series: "Spy × Family",
    colorPalette: "Mustard yellow, pink, black, green, beige, and soft neutral tones",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Anime room décor",
      "Gaming setup decoration",
      "Bedroom wall art",
      "Anime collectors",
      "Spy × Family fans",
      "Birthday & special occasion gifts",
      "Modern pop-culture interiors",
    ],
    keywords: [
      "Anya Forger painting",
      "Spy × Family wall art",
      "anime canvas painting",
      "handmade anime artwork",
      "original acrylic painting",
      "Anya wall décor",
      "anime room decoration",
      "manga-inspired art",
      "anime collector artwork",
      "kawaii wall art",
      "handmade canvas painting",
      "pop culture artwork",
      "contemporary anime art",
    ],
  },
  {
    id: "naruto-uzumaki-portrait",
    title: "Naruto Uzumaki Portrait",
    style: "Anime",
    size: "10 × 10 in (framed 12 × 12 in)",
    price: "Price on request",
    medium: "Acrylic on paper",
    year: 2026,
    description:
      "An original handmade acrylic portrait of Naruto Uzumaki from Naruto Shippuden — capturing the determination and spirit of the Hidden Leaf ninja.",
    metaDescription:
      "Naruto Uzumaki Portrait — an original handmade acrylic painting on paper featuring Naruto Uzumaki from Naruto Shippuden. A bold anime-inspired artwork capturing the determination and spirit of the Hidden Leaf ninja, perfect for anime fans, collectors, and modern interiors.",
    fullDescription: `Naruto Uzumaki Portrait

Original handmade acrylic painting on paper, professionally framed.

This original artwork features Naruto Uzumaki, the iconic protagonist of Naruto Shippuden, portrayed with an intense, determined expression that embodies his unwavering resolve and ninja spirit. Vibrant shades of orange, blue, black, and warm highlights create a dynamic composition that instantly draws attention.

Carefully hand-painted with expressive brushwork and crisp detailing, the artwork captures Naruto’s signature Leaf Village headband, piercing blue eyes, and energetic presence. The bold color palette and dramatic contrasts give the portrait a contemporary anime aesthetic while staying true to the character’s legendary design.

Every visible brushstroke reflects the authenticity of handmade art, making each piece truly one of a kind. Professionally mounted in a sleek black frame with a clean white mat, this artwork is ready to display and serves as a striking centerpiece for any anime-inspired space.

Whether showcased in a bedroom, gaming setup, office, studio, or anime collection, this portrait celebrates perseverance, courage, and the never-give-up attitude that defines Naruto.`,
    image: "/images/naruto-uzumaki-portrait.png",
    bg: "linear-gradient(145deg, #e87820 0%, #2a6ab8 45%, #1a1a1a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.12) 0%, transparent 55%)",
    available: true,
    character: "Naruto Uzumaki (Naruto Shippuden)",
    series: "Naruto Shippuden",
    colorPalette: "Orange, blue, black, white, grey, and warm neutral tones",
    finish: "Professionally framed with white mat, ready to hang",
    signed: true,
    perfectFor: [
      "Anime room décor",
      "Gaming setup decoration",
      "Bedroom wall art",
      "Naruto fans",
      "Anime collectors",
      "Birthday & special occasion gifts",
      "Modern pop-culture interiors",
    ],
    keywords: [
      "Naruto painting",
      "Naruto Uzumaki wall art",
      "Naruto Shippuden artwork",
      "handmade anime painting",
      "original acrylic painting",
      "anime wall décor",
      "framed anime artwork",
      "Naruto portrait",
      "anime collector art",
      "gaming room wall art",
      "manga-inspired artwork",
      "contemporary anime art",
      "handmade Naruto painting",
    ],
  },
  {
    id: "shiva-portrait",
    title: "Shri Shiva Portrait",
    style: "Contemporary",
    size: "24 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original devotional acrylic painting of Lord Shiva in serene side profile against a luminous blue moon — contemporary spiritual art for sacred and modern interiors.",
    metaDescription:
      "Shiva Portrait — an original devotional acrylic painting on canvas featuring Lord Shiva in a serene side profile against a luminous blue moon. A contemporary spiritual artwork for homes, meditation spaces, and sacred interiors.",
    fullDescription: `Shri Shiva Portrait

Original handmade acrylic painting on canvas.

This contemporary portrait captures Lord Shiva in a calm side profile, embodying inner stillness, strength, and transcendence. The bold composition features expressive black brushwork contrasted with warm skin tones, vibrant saffron highlights, and a glowing blue moon that symbolizes divine consciousness and cosmic energy.

Every brushstroke is intentionally left visible, celebrating the texture and authenticity of handmade art. The striking contrast between the deep midnight background and the luminous moon creates a powerful visual presence, while Shiva’s peaceful expression evokes meditation, balance, and spiritual awakening.

Designed in a modern devotional style, this artwork blends traditional symbolism with contemporary aesthetics, making it an elegant statement piece for a living room, meditation corner, office, yoga studio, or puja space.

Whether displayed as sacred décor or collected as original contemporary art, this painting brings a sense of peace, strength, and timeless spirituality to any interior.`,
    image: "/images/shiva-portrait.png",
    bg: "linear-gradient(145deg, #0a1a3a 0%, #2a6ab8 40%, #e87820 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    character: "Lord Shiva",
    series: "Devotional",
    colorPalette: "Deep blue, black, ivory, saffron, and warm neutral tones",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Living room statement wall",
      "Meditation room",
      "Puja space",
      "Yoga studio",
      "Spiritual interiors",
      "Housewarming gifts",
      "Art collectors and Shiva devotees",
    ],
    keywords: [
      "Shiva painting",
      "Lord Shiva wall art",
      "handmade acrylic painting",
      "original canvas artwork",
      "devotional art",
      "Mahadev painting",
      "Shiva portrait",
      "spiritual wall décor",
      "Indian contemporary art",
      "sacred home décor",
      "meditation room art",
      "blue moon artwork",
      "handmade religious painting",
      "original Indian artwork",
      "gallery-wrapped canvas",
    ],
  },
  {
    id: "shiva-portrait-2",
    title: "Shri Shiva Portrait II",
    style: "Contemporary",
    size: "24 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "An original handmade acrylic painting of Lord Shiva in tranquil side profile with a radiant saffron sun — bold contemporary devotion for spiritual and modern interiors.",
    metaDescription:
      "Shiva Portrait — an original handmade acrylic painting on canvas featuring Lord Shiva in a tranquil side profile with a radiant saffron sun. A bold contemporary devotional artwork for spiritual and modern interiors.",
    fullDescription: `Shri Shiva Portrait

Original acrylic painting on canvas.

This original artwork portrays Lord Shiva in a serene side profile, radiating silence, strength, and spiritual depth. Set against a vibrant saffron sun and contrasting teal-blue accents, the composition symbolizes the balance between cosmic energy and inner peace.

Painted with bold, expressive brushstrokes, the portrait highlights Shiva’s iconic tripundra (sacred forehead markings), flowing locks, rudraksha beads, and calm meditative expression. The striking contrast of black, ivory, saffron, and blue creates a contemporary visual language while preserving the timeless symbolism of Mahadev.

Every visible brushstroke celebrates the authenticity of handmade art, making each canvas truly one of a kind. The minimalist composition allows the portrait to become a powerful focal point, bringing warmth, tranquility, and spiritual presence into any space.

Whether displayed in a living room, meditation corner, yoga studio, office, or puja room, this artwork serves as a reminder of resilience, mindfulness, and inner transformation.`,
    image: "/images/shiva-portrait-2.png",
    bg: "linear-gradient(145deg, #0a0a0a 0%, #e87820 45%, #2a8a8a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    character: "Lord Shiva (Mahadev)",
    series: "Devotional",
    colorPalette: "Black, ivory, saffron, teal blue, and warm neutral tones",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Living room wall décor",
      "Meditation & yoga spaces",
      "Puja room",
      "Spiritual home décor",
      "Housewarming gifts",
      "Shiva devotees",
      "Contemporary Indian art collections",
    ],
    keywords: [
      "Shiva painting",
      "Lord Shiva wall art",
      "Mahadev portrait",
      "handmade acrylic painting",
      "original canvas artwork",
      "devotional wall art",
      "spiritual home décor",
      "Indian contemporary art",
      "Shiva canvas painting",
      "meditation room artwork",
      "saffron sun painting",
      "modern Hindu art",
      "original Indian artwork",
      "gallery-wrapped canvas",
    ],
  },
  {
    id: "tropical-leaf-wall-painting",
    title: "Tropical Sunset",
    style: "Abstract",
    size: "24 × 24 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "Original abstract botanical painting with bold tropical leaves in rust, terracotta, and deep green against a warm sunset backdrop — statement wall art for modern and boho interiors.",
    metaDescription:
      "Original abstract botanical painting featuring bold tropical leaves in rust, terracotta, and deep green tones with a warm sunset backdrop. Statement wall art for modern and boho interiors.",
    fullDescription: `Tropical Sunset

Original abstract botanical acrylic painting on canvas.

Bold tropical leaves unfurl across a warm terracotta and rust background, their surfaces etched with fine linework in contrasting cream, deep forest green, and burnt sienna. A soft golden sun glows behind the foliage, grounding the composition in warmth and quiet energy. Together, the earthy palette and graphic leaf forms create a striking piece of modern botanical art — equally at home in a boho living room, a warm minimalist space, or as a bold accent in a neutral interior.

Hand-painted with acrylic on gallery-wrapped canvas, ready to hang with no framing required. The rich rust, forest green, and mustard tones make this piece a versatile anchor for earth-toned, terracotta, or autumn-inspired color schemes.`,
    image: "/images/tropical-leaf-wall-painting.png",
    imageAlt:
      "Abstract tropical leaf painting in terracotta, rust, and deep green with a warm sun motif, on canvas",
    bg: "linear-gradient(145deg, #c4512a 0%, #8b4513 40%, #1a3a2a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 55%)",
    available: true,
    colorPalette: "Terracotta, rust, deep forest green, mustard yellow, and cream",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Boho living rooms",
      "Warm minimalist interiors",
      "Neutral accent walls",
      "Earth-toned décor",
      "Terracotta color schemes",
      "Autumn-inspired spaces",
      "Modern botanical collections",
    ],
    keywords: [
      "tropical leaf painting",
      "abstract botanical art",
      "terracotta wall art",
      "tropical sunset painting",
      "boho wall décor",
      "abstract tropical leaves",
      "rust and green canvas",
      "botanical wall art",
      "handmade acrylic painting",
      "gallery-wrapped canvas",
      "modern botanical art",
      "earth-toned wall art",
      "tropical leaf wall painting",
    ],
  },
  {
    id: "blue-floral-wall-art",
    title: "Blue Floral Wall Art",
    style: "Contemporary",
    size: "24 × 36 in",
    price: "Price on request",
    medium: "Acrylic on canvas",
    year: 2026,
    description:
      "Original blue poppy floral painting in cobalt, sky blue, and indigo on a warm sand background — bold statement wall art for living rooms and bedrooms.",
    metaDescription:
      "Original blue poppy floral painting, acrylic on canvas, 24x36in. Bold blue and beige wall art piece for living rooms and bedrooms.",
    fullDescription: `Blue Floral Wall Art

Original botanical floral acrylic painting on canvas.

This original blue poppy painting captures two large blooms unfolding in rich shades of cobalt, sky blue, and deep indigo, set against a warm sand-toned background. A single closed bud rests beside them on a slender black stem, adding quiet balance to the composition. Bold, expressive brushstrokes and dramatic dark centers bring depth and movement to the piece, making it a striking statement for any living room, bedroom, or entryway.

Hand-painted with acrylic on gallery-wrapped canvas, ready to hang straight out of the box — no framing needed. The blue and beige palette pairs beautifully with neutral, coastal, or modern interiors, making this large floral wall art a versatile centerpiece for your space.`,
    image: "/images/blue-floral-wall-art.png",
    imageAlt:
      "Large blue poppy flower acrylic painting on canvas, 24x36 inches, wall art for living room",
    bg: "linear-gradient(160deg, #b8cad4 0%, #2d5a8e 50%, #1a3a6e 100%)",
    shine: "linear-gradient(225deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
    available: true,
    colorPalette: "Cobalt, sky blue, indigo, sand beige, and black",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Living rooms",
      "Bedrooms",
      "Entryways",
      "Coastal interiors",
      "Neutral modern spaces",
      "Floral art collections",
    ],
    keywords: [
      "blue floral wall art",
      "blue poppy painting",
      "floral acrylic painting",
      "24x36 canvas art",
      "botanical wall art",
      "large floral painting",
      "blue and beige wall art",
      "living room wall art",
      "handmade acrylic painting",
      "gallery-wrapped canvas",
      "coastal home décor",
      "original floral artwork",
      "blue poppy canvas",
    ],
  },
  {
    id: "shri-krishna-portrait",
    title: "Shri Krishna Portrait",
    style: "Contemporary",
    size: "18 × 24 in",
    price: "Price on request",
    medium: "Ink and acrylic on canvas",
    year: 2026,
    description:
      "An original devotional painting of Krishna mid-laughter — peacock feather, flowing curls, and bold black-and-white line art on a warm tan canvas.",
    metaDescription:
      "Krishna Portrait — an original devotional painting featuring Krishna’s iconic peacock feather and joyful expression, in bold black and white line art on canvas. Contemporary wall art for home or puja space.",
    fullDescription: `Krishna Portrait

Original devotional painting, ink and acrylic on canvas.

Krishna is captured mid-laughter, his expression full of divine joy, framed by flowing dark curls and his iconic mor pankh (peacock feather). Layered necklaces and ornate earrings add richness and detail, rendered in bold, high-contrast black-and-white brushwork against a warm tan background.

This piece brings a modern, graphic sensibility to a timeless devotional subject — a striking addition to a puja space, meditation room, or as a spiritual centerpiece in any home.`,
    image: "/images/shri-krishna-portrait.png",
    imageAlt:
      "Shri Krishna portrait painting with peacock feather, black and white line art on tan canvas",
    bg: "linear-gradient(145deg, #d4b896 0%, #1a1a1a 50%, #0a0a0a 100%)",
    shine: "linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 55%)",
    available: true,
    character: "Lord Krishna",
    series: "Devotional",
    colorPalette: "Black, warm tan, ivory, and off-white",
    finish: "Gallery-wrapped canvas, ready to hang",
    signed: true,
    perfectFor: [
      "Puja space",
      "Meditation room",
      "Living room statement wall",
      "Spiritual home décor",
      "Housewarming gifts",
      "Krishna devotees",
      "Contemporary Indian art collections",
    ],
    keywords: [
      "Krishna painting",
      "Lord Krishna wall art",
      "Krishna portrait",
      "devotional wall art",
      "peacock feather painting",
      "mor pankh artwork",
      "handmade Krishna painting",
      "spiritual home décor",
      "puja room art",
      "Indian contemporary art",
      "black and white devotional art",
      "gallery-wrapped canvas",
      "original Krishna artwork",
    ],
  },
];

export const STYLES = [
  "All",
  "Anime",
  "Sketch",
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
