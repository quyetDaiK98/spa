"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Share2, Globe, PlayCircle } from "lucide-react";

const services = [
  { label: "Signature Full Body", href: "/menus/hanoi-spa-signature-full-body-treatment" },
  { label: "Basic Full Body Massage", href: "/menus/basic-full-body-massage" },
  { label: "Body Skin Care", href: "/menus/body-skin-care" },
  { label: "Facial Treatment", href: "/menus/facial-treatment" },
  { label: "Foot Therapy", href: "/menus/foot-therapy" },
  { label: "Special Packages", href: "/menus/hanoi-special-packages" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-sage-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-2">
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(0 20 20)" />
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(60 20 20)" />
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(120 20 20)" />
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(180 20 20)" />
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(240 20 20)" />
                  <ellipse cx="20" cy="10" rx="5" ry="9" fill="white" opacity="0.7" transform="rotate(300 20 20)" />
                  <circle cx="20" cy="20" r="3" fill="white" opacity="0.7" />
                </svg>
                <span
                  className="text-2xl font-light italic tracking-wider text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  zen spa
                </span>
              </div>
              <div className="w-8 h-px bg-white/40 mt-2" />
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Where Inner Peace Meets Holistic Wellness. Combining world-class techniques with Vietnam&apos;s traditional therapies.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com/hanoispavn", Icon: Globe },
                { href: "https://instagram.com/hanoispavn", Icon: Share2 },
                { href: "https://youtube.com/@hanoispavn", Icon: PlayCircle },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-lg font-light tracking-widest uppercase text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-light tracking-widest uppercase text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, text: "17 Hàng Hòm, Hoàn Kiếm, Hà Nội" },
                { Icon: Phone, text: "+84 389 103 837" },
                { Icon: Mail, text: "hanoispavn@gmail.com" },
                { Icon: Clock, text: "Mon–Sun: 8:00 AM – 1:00 AM" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} className="text-white/50 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-lg font-light tracking-widest uppercase text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Services", href: "/menus" },
                { label: "Book Appointment", href: "/booking" },
                { label: "Contacts", href: "/contacts" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Zen Spa. All rights reserved.
          </p>
          <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
            Indulge in the Art of True Wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
