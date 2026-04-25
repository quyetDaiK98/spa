"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const categories = [
  {
    slug: "hanoi-spa-signature-full-body-treatment",
    name: "Signature\nFull Body",
    sub: "Premium treatments",
    icon: "✦",
    bg: "var(--color-sage-dark)",
    text: "#fff",
  },
  {
    slug: "basic-full-body-massage",
    name: "Full Body\nMassage",
    sub: "7 massage styles",
    icon: "◈",
    bg: "var(--color-sand)",
    text: "var(--color-charcoal)",
  },
  {
    slug: "body-skin-care",
    name: "Body\nSkin Care",
    sub: "Scrubs & wraps",
    icon: "❋",
    bg: "var(--color-sage)",
    text: "#fff",
  },
  {
    slug: "back-shoulder-head-relaxation",
    name: "Back · Shoulder\n& Head",
    sub: "Targeted relief",
    icon: "◇",
    bg: "var(--color-cream)",
    text: "var(--color-charcoal)",
  },
  {
    slug: "facial-treatment",
    name: "Facial\nTreatment",
    sub: "Classic & Luxury",
    icon: "◎",
    bg: "var(--color-sand-dark)",
    text: "var(--color-charcoal)",
  },
  {
    slug: "foot-therapy",
    name: "Foot\nTherapy",
    sub: "Reflexology",
    icon: "⊕",
    bg: "var(--color-sage-light)",
    text: "#fff",
  },
  {
    slug: "hanoi-relaxing",
    name: "Hanoi\nRelaxing",
    sub: "Jacuzzi · Steam",
    icon: "〜",
    bg: "var(--color-charcoal)",
    text: "#fff",
  },
  {
    slug: "hanoi-special-packages",
    name: "Special\nPackages",
    sub: "Full experience",
    icon: "✿",
    bg: "var(--color-sage-pale)",
    text: "var(--color-sage-dark)",
  },
];

export default function ServiceCategoriesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-white)" }}>
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
            Our Services
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
            Curated Treatments
            <br />
            <em>for Body & Soul</em>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4"
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={fadeUp}>
              <Link
                href={`/menus/${cat.slug}`}
                className="group relative block rounded-[1.5rem] overflow-hidden aspect-square transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: cat.bg }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
                  {/* Icon */}
                  <span
                    className="text-2xl opacity-60 transition-opacity group-hover:opacity-90"
                    style={{ color: cat.text }}
                  >
                    {cat.icon}
                  </span>
                  {/* Text */}
                  <div>
                    <p
                      className="text-[0.65rem] tracking-[0.2em] uppercase mb-1.5 opacity-60"
                      style={{ color: cat.text, fontFamily: "var(--font-inter)" }}
                    >
                      {cat.sub}
                    </p>
                    <h3
                      className="leading-tight whitespace-pre-line"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                        fontWeight: 400,
                        color: cat.text,
                      }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
