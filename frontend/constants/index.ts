// ─── Shared Types ─────────────────────────────────────────────
// Fonts are declared in app/fonts.ts using next/font/local.
// Add your .woff2 files to public/fonts/ and import from there.
export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

export interface CertificateProps {
  id: number;
  title: string;
  image: string;
  issuer: string;
}

// ─── Navigation ───────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: TestimonialProps[] = [];

// ─── Certificates ─────────────────────────────────────────────
export const CERTIFICATES: CertificateProps[] = [];

// ─── File Upload Limits ───────────────────────────────────────
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

// ─── Animation Variants (Framer Motion) ──────────────────────
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
