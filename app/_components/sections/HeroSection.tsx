"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};


export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex overflow-hidden">
      {/* LEFT: text panel */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 lg:px-16 xl:px-24 pt-32 pb-20"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="relative max-w-xl">
          <motion.div animate="visible" custom={0} variants={fadeUp} initial="hidden"
            className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
            <p className="text-xs tracking-[0.3em] uppercase text-white/55"
              style={{ fontFamily: "var(--font-inter)" }}>Holistic Wellness · Hà Nội</p>
          </motion.div>

          <motion.h1 whileInView="visible" custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-white mb-8"
            style={{
              fontFamily: "var(--font-cormorant)", fontSize: "clamp(3.2rem,7vw,6rem)",
              fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em"
            }}>
            Indulge in 11111<br />
            the <em style={{ fontStyle: "italic", color: "var(--color-sage-light)" }}>Art of True</em><br />
            Wellness
          </motion.h1>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="w-12 h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="text-white/65 text-base lg:text-lg leading-relaxed mb-10 max-w-sm"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
            Where expert hands and serene spaces restore your energy — combining world-class techniques
            with Vietnam&apos;s traditional therapies.
          </motion.p>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4">
            <Link href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--color-white)", color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}>
              Book Appointment
            </Link>
            <Link href="/menus"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border text-white transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
              Explore Services
            </Link>
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="flex gap-10 mt-14 pt-10 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {[
              { value: "5000+", label: "Clients Served" },
              { value: "17h", label: "Open Daily" },
              { value: "8+", label: "Services" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-white text-2xl font-light mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant)" }}>{s.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40"
                  style={{ fontFamily: "var(--font-inter)" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* RIGHT: botanical visual panel */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:flex lg:w-[45%] relative overflow-hidden"
        style={{ backgroundColor: "var(--color-sage)" }}>

        {/* Blend edge */}
        <div className="absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: "linear-gradient(to right,var(--color-sage-dark),transparent)" }} />

        {/* Botanical SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none"
            xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
            <path d="M200 480 Q265 375 200 250 Q135 375 200 480Z" fill="white" />
            <path d="M200 20 Q265 125 200 250 Q135 125 200 20Z" fill="white" />
            <path d="M20 250 Q125 315 200 250 Q125 185 20 250Z" fill="white" />
            <path d="M380 250 Q275 315 200 250 Q275 185 380 250Z" fill="white" />
            <path d="M55 55 Q128 152 200 250 Q130 162 55 55Z" fill="white" opacity="0.7" />
            <path d="M345 445 Q272 348 200 250 Q270 338 345 445Z" fill="white" opacity="0.7" />
            <path d="M345 55 Q272 152 200 250 Q270 162 345 55Z" fill="white" opacity="0.7" />
            <path d="M55 445 Q128 348 200 250 Q130 338 55 445Z" fill="white" opacity="0.7" />
            <circle cx="200" cy="250" r="75" stroke="white" strokeWidth="1" opacity="0.35" />
            <circle cx="200" cy="250" r="125" stroke="white" strokeWidth="0.6" opacity="0.25" />
            <circle cx="200" cy="250" r="175" stroke="white" strokeWidth="0.4" opacity="0.15" />
            <circle cx="200" cy="250" r="8" fill="white" opacity="0.45" />
          </svg>
        </div>

        {/* Brand mark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-center">
            <p className="text-white leading-none"
              style={{
                fontFamily: "var(--font-cormorant)", fontSize: "clamp(4.5rem,9vw,8rem)",
                fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.02em"
              }}>
              zen
            </p>
            <p className="text-white leading-none"
              style={{
                fontFamily: "var(--font-cormorant)", fontSize: "clamp(4.5rem,9vw,8rem)",
                fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.02em"
              }}>
              spa
            </p>
            <div className="flex items-center gap-3 justify-center mt-4">
              <span className="w-8 h-px" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/45"
                style={{ fontFamily: "var(--font-inter)" }}>Holistic Wellness</p>
              <span className="w-8 h-px" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
            </div>
          </motion.div>
        </div>

        {/* Floating category pills */}
        {([
          { label: "Signature Massage", top: "14%", left: "12%" },
          { label: "Facial Care", top: "20%", right: "10%" },
          { label: "Body Wraps", bottom: "26%", left: "10%" },
          { label: "Special Packages", bottom: "17%", right: "9%" },
        ] as Array<{ label: string; top?: string; bottom?: string; left?: string; right?: string }>).map((pill) => (
          <motion.div key={pill.label}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute text-[9px] tracking-[0.18em] uppercase px-3 py-1.5"
            style={{
              top: pill.top, bottom: pill.bottom, left: pill.left, right: pill.right,
              backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-inter)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px"
            }}>
            {pill.label}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-8 lg:left-16 z-20 flex items-center gap-3">
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={13} className="text-white/35" />
        </motion.div>
        <span className="text-[9px] tracking-[0.28em] uppercase text-white/35"
          style={{ fontFamily: "var(--font-inter)" }}>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
