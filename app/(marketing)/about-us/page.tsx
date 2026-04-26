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
  visible: { transition: { staggerChildren: 0.12 } },
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
  {
    label: "Mindful Rituals",
    desc: "Every treatment is a carefully crafted ritual designed to restore inner balance. We believe wellness is a journey, not a destination.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 8 Q26 14 20 20 Q14 14 20 8Z" fill="currentColor" opacity="0.6" />
        <path d="M20 32 Q26 26 20 20 Q14 26 20 32Z" fill="currentColor" opacity="0.4" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Natural Beauty",
    desc: "We source only the finest natural ingredients — Vietnamese botanicals, volcanic stones, and traditional herbs passed down through generations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M20 34 Q28 24 20 14 Q12 24 20 34Z" fill="currentColor" opacity="0.7" />
        <path d="M20 6 Q28 16 20 26 Q12 16 20 6Z" fill="currentColor" opacity="0.4" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Healing Touch",
    desc: "Our therapists are trained in both modern techniques and ancient healing arts, bringing decades of combined expertise to every session.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M14 28 Q10 22 12 16 Q14 10 20 10 Q24 10 26 14 L28 20 Q29 24 26 26 Q22 30 14 28Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M17 18 Q20 16 23 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Holistic Wellness",
    desc: "True wellness encompasses body, mind, and spirit. We treat the whole person, not just the symptoms, guiding you toward lasting balance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 6 L20 10 M20 30 L20 34 M6 20 L10 20 M30 20 L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "5,000+", label: "Clients Served" },
  { value: "17h", label: "Open Daily" },
  { value: "8+", label: "Therapy Types" },
  { value: "2020", label: "Est. in Hà Nội" },
];

const milestones = [
  { year: "2020", text: "Zen Spa mở cửa tại 17 Hàng Hòm với đội ngũ 5 trị liệu sư đầu tiên." },
  { year: "2021", text: "Ra mắt dòng Signature Treatment độc quyền kết hợp đá núi lửa và tre." },
  { year: "2022", text: "Đạt 1,000 khách hàng thân thiết và mở rộng không gian trị liệu." },
  { year: "2024", text: "Ra mắt dịch vụ Jacuzzi gỗ Pơ Mu với thảo mộc truyền thống Đạo Đỏ." },
  { year: "2025", text: "Phục vụ hơn 5,000 lượt khách, trở thành điểm đến wellness hàng đầu Hà Nội." },
];

export default function AboutUsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-white)" }}>

      {/* ── Hero ── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-40 pb-24 px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p variants={fadeUp} className="text-xs tracking-[0.35em] uppercase mb-5"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
            Our Story
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-white mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}>
            Where Inner Peace<br />
            <em>Meets Holistic Wellness</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
            Chúng tôi là không gian được tạo ra với chủ đích — nơi cơ thể, tâm trí và
            tinh thần được dẫn dắt nhẹ nhàng trở lại trạng thái cân bằng.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Stats band ── */}
      <section style={{ backgroundColor: "var(--color-sage)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white leading-none mb-1"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300 }}>
                  {s.value}
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/60"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story (2-col) ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideLeft}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden"
              style={{ backgroundColor: "var(--color-sage)" }}>
              {/* Botanical SVG */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg width="320" height="320" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" />
                  <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.6" />
                  <path d="M100 10 Q130 55 100 100 Q70 55 100 10Z" fill="white" />
                  <path d="M100 190 Q130 145 100 100 Q70 145 100 190Z" fill="white" />
                  <path d="M10 100 Q55 130 100 100 Q55 70 10 100Z" fill="white" />
                  <path d="M190 100 Q145 130 100 100 Q145 70 190 100Z" fill="white" />
                  <path d="M28 28 Q64 72 100 100 Q64 56 28 28Z" fill="white" opacity="0.7" />
                  <path d="M172 172 Q136 128 100 100 Q136 144 172 172Z" fill="white" opacity="0.7" />
                  <path d="M172 28 Q136 72 100 100 Q136 56 172 28Z" fill="white" opacity="0.7" />
                  <path d="M28 172 Q64 128 100 100 Q64 144 28 172Z" fill="white" opacity="0.7" />
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <span className="text-7xl font-light italic text-white/90 block mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  zen<br />spa
                </span>
                <div className="w-12 h-px bg-white/40 mb-4" />
                <p className="text-xs tracking-[0.25em] uppercase text-white/60"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  Hà Nội · Est. 2020
                </p>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl shadow-xl p-6 max-w-[220px]"
              style={{ backgroundColor: "var(--color-white)" }}
            >
              <p className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic" }}>
                &ldquo;Fast, long-lasting relief is nearby.&rdquo;
              </p>
              <div className="w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}>
              About Zen Spa
            </motion.p>
            <motion.h2 variants={fadeUp} className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
              }}>
              A Sanctuary Born<br />
              <em>from Purpose</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base leading-relaxed mb-5"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Zen Spa ra đời với một sứ mệnh rõ ràng: đồng hành cùng mỗi khách hàng trên
              hành trình hướng đến sức khỏe thể chất và tinh thần. Chúng tôi tin rằng
              phục hồi thực sự không chỉ dừng lại ở cơ thể.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed mb-10"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Cách tiếp cận toàn diện của chúng tôi kết hợp các kỹ thuật massage đẳng cấp
              thế giới với truyền thống chữa lành tự nhiên phong phú của Việt Nam — tạo
              nên trải nghiệm nuôi dưỡng từ bên trong.
            </motion.p>

            {/* Mission quote */}
            <motion.blockquote variants={fadeUp}
              className="pl-5 border-l-2 mb-10"
              style={{ borderColor: "var(--color-sage)" }}>
              <p className="text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-charcoal)", fontStyle: "italic" }}>
                &ldquo;Accompany every client on their journey toward physical and mental
                well-being, combining world-class techniques and Vietnam&apos;s traditional therapies.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp}>
              <Link href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}>
                Book a Treatment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}>
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
              }}>
              Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.label} variants={fadeUp}
                className="rounded-[1.5rem] p-7 flex flex-col gap-5"
                style={{ backgroundColor: "var(--color-cream)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-sand)", color: "var(--color-sage-dark)" }}>
                  {v.icon}
                </div>
                <div>
                  <h3 className="mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 400, color: "var(--color-charcoal)" }}>
                    {v.label}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}>
              Our Journey
            </motion.p>
            <motion.h2 variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
              }}>
              Milestones
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[80px] md:left-1/2 top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--color-sand)" }} />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Year label */}
                  <div className={`w-[80px] md:w-[calc(50%-2rem)] shrink-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} text-right`}>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--color-sage-dark)",
                    }}>
                      {m.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[80px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full mt-2 ring-4 ring-[var(--color-cream)]"
                    style={{ backgroundColor: "var(--color-sage)" }} />

                  {/* Text */}
                  <div className="flex-1 pl-6 md:pl-0 md:max-w-[calc(50%-2rem)]">
                    <p className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="py-24 px-6 lg:px-12 text-center"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-white mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}>
            Begin Your<br />
            <em>Wellness Journey</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
            Your life is waiting. Fast, long-lasting relief is nearby.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking"
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--color-white)", color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}>
              Book Appointment
            </Link>
            <Link href="/menus"
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase border border-white/30 text-white transition-all duration-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-inter)" }}>
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
