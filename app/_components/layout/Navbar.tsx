"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/menus" },
  { label: "Spa Etiquette", href: "/spa-etiquette" },
  { label: "Contacts", href: "/contacts" },
];

function LogoMark({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(0 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(120 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(180 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(240 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="9" fill={color} opacity="0.85" transform="rotate(300 20 20)" />
      <circle cx="20" cy="20" r="3" fill={color} />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const logoColor = scrolled ? "var(--color-sage-dark)" : "#ffffff";
  const linkColor = scrolled ? "var(--color-charcoal)" : "rgba(255,255,255,0.9)";
  const iconColor = scrolled ? "var(--color-charcoal)" : "#ffffff";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark color={scrolled ? "#3D5440" : "#ffffff"} />
          <div className="flex flex-col leading-none">
            <span
              className="text-xl font-light italic tracking-wider transition-colors duration-500"
              style={{ fontFamily: "var(--font-cormorant)", color: logoColor }}
            >
              zen
            </span>
            <span
              className="text-xl font-light italic tracking-wider -mt-0.5 transition-colors duration-500"
              style={{ fontFamily: "var(--font-cormorant)", color: logoColor }}
            >
              spa
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm tracking-widest uppercase transition-colors duration-300"
                style={{ color: linkColor, fontFamily: "var(--font-inter)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/booking"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80"
          style={{
            backgroundColor: scrolled ? "var(--color-sage)" : "rgba(255,255,255,0.15)",
            border: scrolled ? "none" : "1px solid rgba(255,255,255,0.5)",
            color: "var(--color-white)",
            fontFamily: "var(--font-inter)",
          }}
        >
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors duration-300"
          style={{ color: iconColor }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: "var(--color-sand)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block text-sm tracking-widest uppercase py-1"
                    style={{ color: "var(--color-charcoal)" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="inline-flex items-center px-6 py-2.5 text-sm tracking-widest uppercase mt-2"
                  style={{ backgroundColor: "var(--color-sage)", color: "var(--color-white)" }}
                  onClick={() => setOpen(false)}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
