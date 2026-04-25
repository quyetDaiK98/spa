"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const featured = [
  {
    name: "Hanoi Unique Treatment",
    badge: "Most Popular",
    category: "Signature Full Body",
    desc: "A fusion of bamboo and herbal techniques that melt away stress and infuse the body with revitalising minerals.",
    price: "từ 1.290.000",
    duration: "60 – 165 phút",
    href: "/menus/hanoi-spa-signature-full-body-treatment",
    accent: "var(--color-sage-dark)",
    bg: "var(--color-cream)",
  },
  {
    name: "Volcanic Rock Treatment",
    badge: "Most Favourite",
    category: "Signature Full Body",
    desc: "Heated volcanic stones deliver deep therapeutic warmth, reducing muscle tension and improving circulation without discomfort.",
    price: "từ 1.190.000",
    duration: "60 – 120 phút",
    href: "/menus/hanoi-spa-signature-full-body-treatment",
    accent: "var(--color-white)",
    bg: "var(--color-sage)",
  },
  {
    name: "Luxury Four Hands Massage",
    badge: "Luxury Experience",
    category: "Signature Full Body",
    desc: "Two therapists move in perfect synchrony with fragrant oils, delivering total body renewal and transformative therapeutic care.",
    price: "từ 2.090.000",
    duration: "60 – 165 phút",
    href: "/menus/hanoi-spa-signature-full-body-treatment",
    accent: "var(--color-sage-dark)",
    bg: "var(--color-sand)",
  },
];

export default function FeaturedServicesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
            >
              Featured
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
              Signature
              <br />
              <em>Experiences</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/menus"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase group"
              style={{ color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
            >
              All Services
              <span className="block h-px w-8 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: "var(--color-sage-dark)" }} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {featured.map((svc) => (
            <motion.div key={svc.name} variants={fadeUp}>
              <Link
                href={svc.href}
                className="group relative flex flex-col rounded-[2rem] overflow-hidden h-full min-h-[420px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ backgroundColor: svc.bg }}
              >
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: svc.bg === "var(--color-sage)" ? "rgba(255,255,255,0.2)" : "var(--color-sage-pale)",
                      color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-sage-dark)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {svc.badge}
                  </span>
                </div>

                {/* Large decorative number */}
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <span style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-sage-dark)",
                  }}>
                    {featured.indexOf(svc) + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-end flex-1 p-8 pt-20">
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase mb-3 opacity-60"
                    style={{
                      color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-muted)",
                      fontFamily: "var(--font-inter)"
                    }}
                  >
                    {svc.category}
                  </p>
                  <h3
                    className="mb-4 leading-tight"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-charcoal)",
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      color: svc.bg === "var(--color-sage)" ? "rgba(255,255,255,0.75)" : "var(--color-muted)",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 300,
                    }}
                  >
                    {svc.desc}
                  </p>

                  {/* Price + duration */}
                  <div className="flex items-center justify-between pt-5 border-t"
                    style={{ borderColor: svc.bg === "var(--color-sage)" ? "rgba(255,255,255,0.2)" : "var(--color-sand-dark)" }}>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase opacity-50 mb-0.5"
                        style={{
                          color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-muted)",
                          fontFamily: "var(--font-inter)"
                        }}
                      >
                        {svc.duration}
                      </p>
                      <p
                        className="font-medium"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.15rem",
                          color: svc.bg === "var(--color-sage)" ? "#fff" : "var(--color-sage-dark)",
                        }}
                      >
                        {svc.price}đ
                      </p>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: svc.bg === "var(--color-sage)" ? "rgba(255,255,255,0.2)" : "var(--color-sage)",
                        color: "#fff",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
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
