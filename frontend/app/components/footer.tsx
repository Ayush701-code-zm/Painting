import Link from "next/link";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

const NAV_COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "New Arrivals", href: "/shop?sort=newest" },
      { label: "Under ₹10,000", href: "/shop?max=10000" },
    ],
  },
  {
    heading: "Artist",
    links: [
      { label: "About", href: "/about" },
      { label: "Commission", href: "/commission" },
      { label: "Process", href: "/process" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Care Guide", href: "/care" },
      { label: "FAQ", href: "/faq" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { Icon: FiInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: FaPinterestP, label: "Pinterest", href: "https://pinterest.com" },
  { Icon: FiMail, label: "Email", href: "mailto:hello@glamsfyt.com" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#1c1b18] pt-[4rem] md:pt-[5rem]">
      <div className="max-w-[72rem] mx-auto px-[1.5rem] md:px-[4rem]">
        {/* Top — logo + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3rem] pb-[3.5rem] border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-[1rem]">
            <Link
              href="/"
              className="font-['Instrument_Serif'] italic text-[1.625rem] text-white tracking-[-0.02em]"
            >
              Glamsfyt
            </Link>
            <p className="font-['Inter'] text-sm font-light leading-[1.7] text-[rgba(255,255,255,0.45)] max-w-[14rem]">
              Original hand-painted works. Made in India. Shipped worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-[1rem] mt-[0.5rem]">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-200"
                >
                  <Icon size={19} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-[1rem]">
              <span className="font-['Inter'] text-xs font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.35)]">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-[0.75rem]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['Inter'] text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[0.75rem] py-[1.5rem]">
          <p className="font-['Inter'] text-xs text-[rgba(255,255,255,0.28)]">
            © {new Date().getFullYear()} Glamsfyt. All artworks are original and one of a kind.
          </p>
          <p className="font-['Inter'] text-xs text-[rgba(255,255,255,0.28)]">
            Handcrafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
