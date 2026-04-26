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
  visible: { transition: { staggerChildren: 0.12 } },
};

const BASE = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=600&q=80";

const categories = [
  {
    slug: "hanoi-spa-signature-full-body-treatment",
    name: "Hanoi Spa Signature\nFull Body Treatment",
    short: "Signature Full Body",
    desc: "Kết hợp Stone massage, Bamboo và Herbal — liệu pháp độc quyền cân bằng thần kinh và thúc đẩy tuần hoàn.",
    from: "1.190.000",
    badge: "Exclusive",
    image: `${BASE}1544161515-4ab6ce6db874${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 36 Q28 26 20 16 Q12 26 20 36Z" fill="currentColor" opacity="0.7" />
        <path d="M20 4 Q28 14 20 24 Q12 14 20 4Z" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "basic-full-body-massage",
    name: "Basic Full Body\nMassage",
    short: "Full Body Massage",
    desc: "Vietnamese, Thai, Swedish, Asian và nhiều kỹ thuật massage truyền thống giúp phục hồi toàn diện.",
    from: "740.000",
    badge: null,
    image: `${BASE}1571019613454-1cb2f99b2d8b${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 20 Q14 12 20 20 Q26 28 32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M8 26 Q14 18 20 26 Q26 34 32 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    slug: "body-skin-care",
    name: "Body Skin Care",
    short: "Skin Care",
    desc: "Scrubs và Wraps cao cấp với nguyên liệu thiên nhiên: dừa, yến mạch, muối Biển Chết, trà xanh.",
    from: "880.000",
    badge: null,
    image: `${BASE}1515377905703-c4788e51af15${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="5" fill="currentColor" opacity="0.4" />
        <path d="M20 6 L20 10 M20 30 L20 34 M6 20 L10 20 M30 20 L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "back-shoulder-head-relaxation",
    name: "Back · Shoulder\nHead Relaxation",
    short: "BSH Relaxation",
    desc: "Liệu pháp chuyên sâu cho lưng, vai và đầu — giải phóng cơ căng mỏi, cải thiện tuần hoàn não.",
    from: "490.000",
    badge: null,
    image: `${BASE}1519824145371-296894a0daa9${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 8 Q26 12 26 20 Q26 30 20 34 Q14 30 14 20 Q14 12 20 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 18 Q20 15 26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    slug: "facial-treatment",
    name: "Facial\nTreatment",
    short: "Facial Care",
    desc: "Chăm sóc da mặt chuyên sâu với dòng Artistry skincare — làm sạch, cấp ẩm, săn chắc và chống lão hóa.",
    from: "990.000",
    badge: null,
    image: `${BASE}1570172619644-dfd03ed5d881${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <ellipse cx="20" cy="22" rx="10" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 18 Q17 16 20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M25 18 Q23 16 20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M16 26 Q18 28 20 28 Q22 28 24 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    slug: "foot-therapy",
    name: "Foot\nTherapy",
    short: "Foot Care",
    desc: "Foot Reflexology và Luxury Foot Massage kích thích đầu thần kinh, giải phóng tắc nghẽn nội tạng.",
    from: "660.000",
    badge: null,
    image: `${BASE}1607779097040-26e80aa78e66${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M14 30 Q10 24 12 18 Q14 12 20 12 Q24 12 26 16 L28 22 Q29 26 26 28 Q22 32 14 30Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="17" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="22" cy="16" r="1" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    slug: "hanoi-relaxing",
    name: "Hanoi\nRelaxing",
    short: "Relaxing",
    desc: "Jacuzzi gỗ Pơ Mu và Herbal Steam với 10+ loại thảo mộc quý — thải độc, phục hồi, thư giãn sâu.",
    from: "380.000",
    badge: null,
    image: `${BASE}1540555700478-4be289fbecef${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M10 28 Q10 20 20 20 Q30 20 30 28 L30 32 Q30 34 28 34 L12 34 Q10 34 10 32Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 18 Q15 12 18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M20 16 Q19 10 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M24 18 Q23 12 26 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    slug: "hanoi-special-packages",
    name: "Special\nPackages",
    short: "Packages",
    desc: "Gói trải nghiệm toàn diện kết hợp nhiều dịch vụ — từ gói đôi lãng mạn đến gói thư giãn cá nhân.",
    from: "3.270.000",
    badge: "Best Value",
    image: `${BASE}1506126613408-eca07ce68773${Q}`,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="10" y="16" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 16 Q15 10 20 10 Q25 10 25 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 22 L30 22" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M20 22 L20 32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
];

export default function MenusPage() {
  return (
    <div style={{ backgroundColor: "var(--color-white)" }}>
      {/* Page Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-40 pb-20 px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.35em] uppercase mb-5"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
          >
            Our Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
          >
            Menu &amp; <em>Treatments</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
            }}
          >
            Khám phá bộ sưu tập liệu pháp của chúng tôi — kết hợp kỹ thuật đẳng cấp thế giới
            và liệu pháp truyền thống Việt Nam để phục hồi cơ thể và tâm trí.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={fadeUp}>
                <Link
                  href={`/menus/${cat.slug}`}
                  className="group relative flex flex-col h-full rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  {/* Image block */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name.replace("\n", " ")}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {cat.badge && (
                      <span
                        className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full z-10"
                        style={{
                          backgroundColor: "var(--color-sage)",
                          color: "#fff",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icon */}
                    <div
                      className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-sand)", color: "var(--color-sage-dark)" }}
                    >
                      {cat.icon}
                    </div>

                    {/* Name */}
                    <h2
                      className="mb-3 leading-tight whitespace-pre-line"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.35rem",
                        fontWeight: 400,
                        color: "var(--color-charcoal)",
                      }}
                    >
                      {cat.name}
                    </h2>

                    {/* Desc */}
                    <p
                      className="text-sm leading-relaxed flex-1 mb-5"
                      style={{
                        color: "var(--color-muted)",
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                      }}
                    >
                      {cat.desc}
                    </p>

                    {/* Footer */}
                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: "var(--color-sand)" }}
                    >
                      <div>
                        <p
                          className="text-[10px] tracking-widest uppercase mb-0.5"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                        >
                          từ
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.1rem",
                            fontWeight: 500,
                            color: "var(--color-sage-dark)",
                          }}
                        >
                          {cat.from}đ
                        </p>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                        style={{ backgroundColor: "var(--color-sage)", color: "#fff" }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
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

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="py-20 px-6 lg:px-12 text-center"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-charcoal)",
            }}
            className="mb-4"
          >
            Không biết chọn dịch vụ nào?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn liệu trình phù hợp nhất với bạn.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-sage-dark)",
                color: "#fff",
                fontFamily: "var(--font-inter)",
              }}
            >
              Đặt lịch tư vấn
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
