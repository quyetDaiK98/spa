"use client";

import Image from "next/image";
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

const BASE = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=600&q=80";

const categories = [
  {
    slug: "hanoi-spa-signature-full-body-treatment",
    name: "Signature\nFull Body",
    sub: "Premium treatments",
    image: `${BASE}1544161515-4ab6ce6db874${Q}`,
  },
  {
    slug: "basic-full-body-massage",
    name: "Full Body\nMassage",
    sub: "7 massage styles",
    image: `${BASE}1571019613454-1cb2f99b2d8b${Q}`,
  },
  {
    slug: "body-skin-care",
    name: "Body\nSkin Care",
    sub: "Scrubs & wraps",
    image: `${BASE}1515377905703-c4788e51af15${Q}`,
  },
  {
    slug: "back-shoulder-head-relaxation",
    name: "Back · Shoulder\n& Head",
    sub: "Targeted relief",
    image: `${BASE}1519824145371-296894a0daa9${Q}`,
  },
  {
    slug: "facial-treatment",
    name: "Facial\nTreatment",
    sub: "Classic & Luxury",
    image: `${BASE}1570172619644-dfd03ed5d881${Q}`,
  },
  {
    slug: "foot-therapy",
    name: "Foot\nTherapy",
    sub: "Reflexology",
    image: `${BASE}1607779097040-26e80aa78e66${Q}`,
  },
  {
    slug: "hanoi-relaxing",
    name: "Hanoi\nRelaxing",
    sub: "Jacuzzi · Steam",
    image: `${BASE}1540555700478-4be289fbecef${Q}`,
  },
  {
    slug: "hanoi-special-packages",
    name: "Special\nPackages",
    sub: "Full experience",
    image: `${BASE}1506126613408-eca07ce68773${Q}`,
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
              >
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt={cat.name.replace("\n", " ")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.12) 100%)" }}
                />
                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
                  <p
                    className="text-[0.65rem] tracking-[0.2em] uppercase mb-1.5 opacity-70"
                    style={{ color: "#fff", fontFamily: "var(--font-inter)" }}
                  >
                    {cat.sub}
                  </p>
                  <h3
                    className="leading-tight whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                      fontWeight: 400,
                      color: "#fff",
                    }}
                  >
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
