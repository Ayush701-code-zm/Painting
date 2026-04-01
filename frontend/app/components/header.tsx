"use client";

import Link from "next/link";
import { useId, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useScrollPosition } from "@/hooks";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Commission", href: "/commission" },
] as const;

export default function Header() {
  const drawerId = useId();
  const pathname = usePathname();
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isScrolled = scrollPosition > 60;

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    },
    [searchQuery, router]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fefcf8] transition-shadow duration-300 ${
        isScrolled
          ? "shadow-[0px_1px_24px_0px_rgba(28,27,24,0.08)] border-b border-[rgba(28,27,24,0.06)]"
          : "border-b border-[rgba(28,27,24,0.08)]"
      }`}
    >
      <div className="flex items-center justify-between px-[1.5rem] md:px-[4rem] h-[4.25rem]">
        {/* Logo */}
        <Link
          href="/"
          className="font-['Instrument_Serif'] italic text-[1.625rem] text-[#1c1b18] tracking-[-0.02em] shrink-0"
        >
          Glamsfyt
        </Link>

        {/* Search bar — desktop only */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-[30rem] mx-[2.5rem]"
          role="search"
        >
          <div className="relative w-full">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for paintings, artists, styles…"
              className="w-full h-[2.75rem] pl-[3rem] pr-[1.25rem] rounded-[3rem] bg-white border border-[rgba(28,27,24,0.12)] shadow-[0px_2px_12px_0px_rgba(28,27,24,0.07)] font-['Inter'] text-sm text-[#1c1b18] placeholder:text-[rgba(28,27,24,0.38)] outline-none focus:border-[rgba(28,27,24,0.3)] focus:shadow-[0px_2px_16px_0px_rgba(28,27,24,0.12)] transition duration-200"
            />
            <FiSearch
              size={17}
              className="absolute left-[1rem] top-1/2 -translate-y-1/2 text-[rgba(28,27,24,0.4)] pointer-events-none"
            />
          </div>
        </form>

        {/* Desktop right — nav links + CTA + icons */}
        <nav
          className="hidden md:flex items-center gap-[1.75rem] shrink-0"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-['Inter'] text-sm font-medium tracking-[-0.01em] transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-[#1c1b18] after:transition-all after:duration-300 ${
                pathname === item.href
                  ? "text-[#1c1b18] after:w-full"
                  : "text-[rgba(28,27,24,0.55)] hover:text-[#1c1b18] after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/shop"
            className="font-['Inter'] text-sm font-semibold text-[#1c1b18] bg-[#fcc010] px-[1.25rem] py-[0.5rem] rounded-2xl hover:bg-[#e8ae00] transition-colors duration-200 whitespace-nowrap"
          >
            Shop Now
          </Link>

          <Link
            href="/profile"
            aria-label="Profile"
            className="text-[rgba(28,27,24,0.55)] hover:text-[#1c1b18] transition-colors duration-200"
          >
            <FiUser size={21} />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="text-[rgba(28,27,24,0.55)] hover:text-[#1c1b18] transition-colors duration-200"
          >
            <FiShoppingBag size={21} />
          </Link>
        </nav>

        {/* Mobile right — search icon + hamburger */}
        <div className="flex md:hidden items-center gap-[1rem]">
          <Link
            href="/search"
            aria-label="Search"
            className="text-[rgba(28,27,24,0.6)]"
          >
            <FiSearch size={20} />
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls={drawerId}
            onClick={toggleDrawer}
            className="text-[rgba(28,27,24,0.7)]"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <nav
          id={drawerId}
          role="navigation"
          aria-label="Mobile navigation"
          className="flex flex-col md:hidden bg-[#fefcf8] border-t border-[rgba(28,27,24,0.08)] px-[1.5rem] py-[1.5rem] gap-[1.25rem]"
        >
          <form onSubmit={handleSearch} className="relative" role="search">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for paintings, artists, styles…"
              className="w-full h-[2.75rem] pl-[2.75rem] pr-[1rem] rounded-[3rem] bg-white border border-[rgba(28,27,24,0.12)] font-['Inter'] text-sm text-[#1c1b18] placeholder:text-[rgba(28,27,24,0.38)] outline-none focus:border-[rgba(28,27,24,0.25)] transition duration-200"
            />
            <FiSearch
              size={15}
              className="absolute left-[0.875rem] top-1/2 -translate-y-1/2 text-[rgba(28,27,24,0.4)] pointer-events-none"
            />
          </form>

          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-['Inter'] text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                pathname === item.href
                  ? "text-[#1c1b18]"
                  : "text-[rgba(28,27,24,0.55)]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="font-['Inter'] text-sm font-semibold text-[#1c1b18] bg-[#fcc010] px-[1.25rem] py-[0.625rem] rounded-2xl text-center hover:bg-[#e8ae00] transition-colors duration-200"
          >
            Shop Now
          </Link>
        </nav>
      )}
    </header>
  );
}
