"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const values = [
  { label: "Mindful Rituals", desc: "Every treatment is a carefully crafted ritual designed to restore inner balance." },
  { label: "Natural Beauty", desc: "We source only the finest natural ingredients and traditional Vietnamese botanicals." },
  { label: "Healing Touch", desc: "Our therapists are trained in both modern techniques and ancient healing arts." },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            variants={slideLeft}
            className="relative"
          >
            {/* Main arched card */}
            <div
              className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden"
              style={{ backgroundColor: "var(--color-sage)" }}
            >
              {/* Botanical pattern overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg width="280" height="280" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.8"/>
                  <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.6"/>
                  <path d="M100 10 Q130 55 100 100 Q70 55 100 10Z" fill="white"/>
                  <path d="M100 190 Q130 145 100 100 Q70 145 100 190Z" fill="white"/>
                  <path d="M10 100 Q55 130 100 100 Q55 70 10 100Z" fill="white"/>
                  <path d="M190 100 Q145 130 100 100 Q145 70 190 100Z" fill="white"/>
                  <path d="M28 28 Q64 72 100 100 Q64 56 28 28Z" fill="white" opacity="0.7"/>
                  <path d="M172 172 Q136 128 100 100 Q136 144 172 172Z" fill="white" opacity="0.7"/>
                  <path d="M172 28 Q136 72 100 100 Q136 56 172 28Z" fill="white" opacity="0.7"/>
                  <path d="M28 172 Q64 128 100 100 Q64 144 28 172Z" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <span
                  className="text-7xl font-light italic text-white/90 block mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  zen<br/>spa
                </span>
                <div className="w-12 h-px bg-white/40 mb-4" />
                <p className="text-xs tracking-[0.25em] uppercase text-white/60"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  Hà Nội · Est. 2020
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl shadow-xl px-6 py-5"
              style={{ backgroundColor: "var(--color-white)" }}
            >
              <p
                className="text-4xl font-light"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-sage-dark)" }}
              >
                5000+
              </p>
              <p className="text-xs tracking-widest uppercase mt-1"
                style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                Happy clients
              </p>
            </motion.div>

            {/* Second floating stat */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-4 -right-4 lg:-right-6 rounded-2xl shadow-lg px-5 py-4"
              style={{ backgroundColor: "var(--color-sage-dark)" }}
            >
              <p
                className="text-3xl font-light text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                17h
              </p>
              <p className="text-[10px] tracking-widest uppercase text-white/60 mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}>
                Open daily
              </p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            variants={slideRight}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
            >
              About Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
              }}
              className="mb-6"
            >
              Where Inner Peace
              <br />
              <em>Meets Holistic Wellness</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              A space created with intention — a place where your body, mind, and spirit are gently guided back into balance. We accompany every client on their journey toward physical and mental well-being.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Our holistic approach combines world-class massage techniques with Vietnam&apos;s rich tradition of natural healing, creating an experience that nourishes from the inside out.
            </motion.p>

            {/* Values */}
            <div className="space-y-5 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div
                    className="w-1 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: "var(--color-sage)", height: "auto", minHeight: "40px" }}
                  />
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                    >
                      {v.label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase transition-colors group"
                style={{ color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
              >
                Our Story
                <span className="block h-px w-8 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: "var(--color-sage-dark)" }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
