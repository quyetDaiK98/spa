"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const packages = [
  {
    name: "Hanoi Signature Package",
    duration: "270 phút",
    price: "7.200.000",
    target: "All",
    highlight: true,
    components: ["Special Four Hands 90'", "Luxury Facial 60'", "Body Scrub 45'", "Body Wrap 45'", "Herbal Steam 15'", "Jacuzzi 15'"],
  },
  {
    name: "Romantic Honeymoon Luxury",
    duration: "255 phút",
    price: "12.050.000",
    target: "Couple",
    highlight: false,
    components: ["Green Tea Scrub 45'", "Dead Sea Wrap 45'", "Four Hands 75'", "Luxury Facial 60'", "Herbal Steam 15'", "Jacuzzi 15'"],
  },
  {
    name: "Relaxation for Her",
    duration: "210 phút",
    price: "3.700.000",
    target: "Her",
    highlight: false,
    components: ["Coconut Scrub 45'", "Classic Facial 60'", "Herbal Treatment 75'", "Herbal Steam 15'", "Jacuzzi 15'"],
  },
  {
    name: "Relaxation for Him",
    duration: "210 phút",
    price: "3.700.000",
    target: "Him",
    highlight: false,
    components: ["Dead Sea Scrub 45'", "Volcanic Rock 75'", "Classic Facial 60'", "Herbal Steam 15'", "Jacuzzi 15'"],
  },
  {
    name: "Vietnamese Package",
    duration: "195 phút",
    price: "3.270.000",
    target: "All",
    highlight: false,
    components: ["Oat Milk Scrub 45'", "Bamboo Treatment 75'", "Classic Facial 60'", "Herbal Steam 15'"],
  },
  {
    name: "Romantic Honeymoon",
    duration: "210 phút",
    price: "6.300.000",
    target: "Couple",
    highlight: false,
    components: ["Green Tea Scrub 45'", "Vietnamese Massage 90'", "Classic Facial 60'", "Herbal Steam 15'"],
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
          >
            Packages
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--color-charcoal)",
              lineHeight: 1.1,
            }}
          >
            Complete Wellness
            <br />
            <em>Journeys</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Curated combinations of our finest treatments — all packages include Vietnamese cake.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.name} variants={fadeUp}>
              <div
                className={`relative flex flex-col rounded-[1.5rem] p-7 h-full transition-shadow duration-300 hover:shadow-lg ${
                  pkg.highlight ? "ring-2" : ""
                }`}
                style={{
                  backgroundColor: pkg.highlight ? "var(--color-sage-dark)" : "var(--color-white)",
                  outline: pkg.highlight ? "2px solid var(--color-sage)" : undefined,
                }}
              >
                {/* Target badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: pkg.highlight ? "rgba(255,255,255,0.15)" : "var(--color-sage-pale)",
                      color: pkg.highlight ? "#fff" : "var(--color-sage-dark)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {pkg.target}
                  </span>
                  {pkg.highlight && (
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "#fff",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      Best Value
                    </span>
                  )}
                </div>

                <h3
                  className="mb-2 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: pkg.highlight ? "#fff" : "var(--color-charcoal)",
                  }}
                >
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-1.5 mb-5">
                  <Clock size={12} style={{ color: pkg.highlight ? "rgba(255,255,255,0.5)" : "var(--color-muted)" }} />
                  <span
                    className="text-xs"
                    style={{
                      color: pkg.highlight ? "rgba(255,255,255,0.5)" : "var(--color-muted)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {pkg.duration}
                  </span>
                </div>

                {/* Components list */}
                <ul className="flex-1 space-y-2 mb-6">
                  {pkg.components.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: pkg.highlight ? "rgba(255,255,255,0.5)" : "var(--color-sage)" }}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{
                          color: pkg.highlight ? "rgba(255,255,255,0.7)" : "var(--color-muted)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-5 border-t"
                  style={{ borderColor: pkg.highlight ? "rgba(255,255,255,0.15)" : "var(--color-sand)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.35rem",
                      color: pkg.highlight ? "#fff" : "var(--color-sage-dark)",
                    }}
                  >
                    {pkg.price}đ
                  </p>
                  <Link
                    href="/booking"
                    className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: pkg.highlight ? "#fff" : "var(--color-sage)",
                      color: pkg.highlight ? "var(--color-sage-dark)" : "#fff",
                      fontFamily: "var(--font-inter)",
                      borderRadius: "999px",
                    }}
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
