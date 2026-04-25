"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function BookingCTASection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--color-sage-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase mb-5 text-white/50"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book Appointment
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-white mb-6 leading-[1.05]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 300,
              }}
            >
              Your Life Is
              <br />
              <em>Waiting.</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-8 text-white/65 max-w-sm"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Fast, long-lasting relief is nearby. Book your treatment today and begin your journey toward true wellness.
            </motion.p>

            {/* Contact info */}
            <motion.div variants={stagger} className="space-y-4 mb-10">
              {[
                { Icon: Phone, text: "+84 389 103 837" },
                { Icon: Mail, text: "hanoispavn@gmail.com" },
                { Icon: MapPin, text: "17 Hàng Hòm, Hoàn Kiếm, Hà Nội" },
              ].map(({ Icon, text }) => (
                <motion.div key={text} variants={fadeUp} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon size={14} className="text-white/70" />
                  </div>
                  <span className="text-sm text-white/70" style={{ fontFamily: "var(--font-inter)" }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-sage-dark)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:+84389103837"
                className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 text-white transition-all duration-300 hover:bg-white/10"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Call Us Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right — quick booking form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="rounded-[2rem] p-8 lg:p-10"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <h3
              className="text-white mb-6 text-2xl font-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Quick Enquiry
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Phone Number", type: "tel", placeholder: "+84 xxx xxx xxx" },
                { label: "Email Address", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 text-sm text-white placeholder-white/30 rounded-xl outline-none focus:ring-1 transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontFamily: "var(--font-inter)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Service Interested In
                </label>
                <select
                  className="w-full px-4 py-3 text-sm text-white/80 rounded-xl outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                >
                  <option value="" style={{ backgroundColor: "#3D5440" }}>Select a service...</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Hanoi Signature Treatment</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Volcanic Rock Treatment</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Four Hands Massage</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Vietnamese Massage</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Facial Treatment</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Special Package</option>
                  <option style={{ backgroundColor: "#3D5440" }}>Other / Not sure</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 mt-2 rounded-xl"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-sage-dark)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
