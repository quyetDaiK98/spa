"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    author: "Sarah M.",
    source: "TripAdvisor",
    rating: 5,
    text: "Absolutely wonderful experience. The Volcanic Rock Treatment was unlike anything I've tried before — deeply relaxing without being uncomfortable. The therapists were incredibly skilled and attentive. I'll definitely be back.",
    service: "Volcanic Rock Treatment",
  },
  {
    author: "Minh T.",
    source: "Google",
    rating: 5,
    text: "The Hanoi Unique Treatment completely melted away weeks of stress. The ambiance is serene, the staff professional, and the herbal steam at the end was the perfect finishing touch. Highly recommended!",
    service: "Hanoi Unique Treatment",
  },
  {
    author: "Emma L.",
    source: "TripAdvisor",
    rating: 5,
    text: "We booked the Romantic Honeymoon package and it was simply perfect. Having two therapists work simultaneously is a truly luxurious experience. The Po Mu wood jacuzzi was an unexpected highlight.",
    service: "Romantic Honeymoon Package",
  },
  {
    author: "James K.",
    source: "Google",
    rating: 5,
    text: "Best spa in Hanoi, hands down. The Japanese Judo Therapy sorted out my back issues that I'd had for months. Clean, calming environment and staff who genuinely care about your wellbeing.",
    service: "Japanese Judo Therapy",
  },
  {
    author: "Linh N.",
    source: "Facebook",
    rating: 5,
    text: "Đã thử nhiều spa ở Hà Nội nhưng đây là nơi tôi ưng nhất. Liệu pháp Four Hands thực sự tuyệt vời — hai người trị liệu phối hợp nhịp nhàng hoàn hảo. Nhân viên thân thiện và chuyên nghiệp.",
    service: "Luxury Four Hands Massage",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — label + nav */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
            >
              Testimonials
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
              }}
              className="mb-8"
            >
              What Our Guests
              <br />
              <em>Are Saying</em>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-transparent"
                style={{
                  borderColor: "var(--color-sand-dark)",
                  color: "var(--color-charcoal)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-sage)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--color-charcoal)";
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-transparent"
                style={{
                  borderColor: "var(--color-sand-dark)",
                  color: "var(--color-charcoal)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-sage)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--color-charcoal)";
                }}
              >
                <ChevronRight size={18} />
              </button>
              <span
                className="text-sm"
                style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
              >
                {idx + 1} / {testimonials.length}
              </span>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === idx ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    backgroundColor: i === idx ? "var(--color-sage)" : "var(--color-sand-dark)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — quote card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-[2rem] p-8 lg:p-10"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                {/* Quote mark */}
                <div
                  className="text-6xl leading-none mb-6 font-light"
                  style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-sage-light)" }}
                >
                  &ldquo;
                </div>

                <p
                  className="text-base lg:text-lg leading-relaxed mb-8"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "var(--color-charcoal)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#5C7A5C" style={{ color: "#5C7A5C" }} />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                    >
                      {t.service}
                    </p>
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-sage-pale)",
                      color: "var(--color-sage-dark)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t.source}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
