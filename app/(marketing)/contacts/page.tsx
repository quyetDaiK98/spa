"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, Share2, PlayCircle, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const inputBase =
  "w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all duration-200";
const inputStyle = {
  backgroundColor: "var(--color-cream)",
  border: "1.5px solid var(--color-sand)",
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-inter)",
};
const inputFocus = {
  ...inputStyle,
  borderColor: "var(--color-sage)",
  backgroundColor: "#fff",
};

export default function ContactsPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const set = (f: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [f]: e.target.value }));

  const s = (f: string) => (focused === f ? inputFocus : inputStyle);

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
            Get in Touch
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-white mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}>
            Contact <em>Us</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-lg text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
            Chúng tôi luôn sẵn sàng lắng nghe. Hãy để lại tin nhắn hoặc liên hệ trực tiếp —
            đội ngũ sẽ phản hồi trong vòng 2 giờ làm việc.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Contact grid ── */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 xl:gap-16 items-start">

            {/* ── Form ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-20 px-8 rounded-[2rem]"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <CheckCircle2 size={52} style={{ color: "var(--color-sage)" }} className="mb-6" />
                  <h2 className="mb-3"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 300, color: "var(--color-charcoal)" }}>
                    Tin nhắn đã gửi!
                  </h2>
                  <p className="text-sm leading-relaxed max-w-sm"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
                    Cảm ơn <strong style={{ color: "var(--color-charcoal)" }}>{form.name}</strong>.
                    Chúng tôi sẽ liên hệ lại qua <strong style={{ color: "var(--color-charcoal)" }}>{form.email || form.phone}</strong> sớm nhất có thể.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase mb-5"
                    style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}>
                    Gửi tin nhắn
                  </motion.p>

                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        Họ và tên <span style={{ color: "var(--color-sage)" }}>*</span>
                      </label>
                      <input type="text" required placeholder="Nguyễn Văn A"
                        value={form.name} onChange={set("name")}
                        onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                        className={inputBase} style={s("name")} />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        Số điện thoại
                      </label>
                      <input type="tel" placeholder="+84 xxx xxx xxx"
                        value={form.phone} onChange={set("phone")}
                        onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                        className={inputBase} style={s("phone")} />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        Email <span style={{ color: "var(--color-sage)" }}>*</span>
                      </label>
                      <input type="email" required placeholder="email@example.com"
                        value={form.email} onChange={set("email")}
                        onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                        className={inputBase} style={s("email")} />
                    </div>
                    {/* Subject */}
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        Chủ đề
                      </label>
                      <select value={form.subject} onChange={set("subject")}
                        onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                        className={inputBase + " appearance-none"} style={s("subject")}>
                        <option value="">-- Chọn chủ đề --</option>
                        <option>Hỏi về dịch vụ</option>
                        <option>Đặt lịch hẹn</option>
                        <option>Góp ý / Phản hồi</option>
                        <option>Hợp tác / Đối tác</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                      Nội dung tin nhắn <span style={{ color: "var(--color-sage)" }}>*</span>
                    </label>
                    <textarea required rows={5} placeholder="Nội dung bạn muốn trao đổi..."
                      value={form.message} onChange={set("message")}
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      className={inputBase + " resize-none"}
                      style={{ ...s("message"), lineHeight: "1.7" }} />
                  </motion.div>

                  <motion.div variants={fadeUp} className="pt-1">
                    <button type="submit"
                      className="px-12 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                      style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}>
                      Gửi tin nhắn
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* ── Info sidebar ── */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-5 lg:sticky lg:top-28"
            >
              {/* Contact details */}
              <motion.div variants={fadeUp} className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-cream)" }}>
                <p className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}>
                  Thông tin liên hệ
                </p>
                <div className="space-y-5">
                  {[
                    { Icon: Phone, label: "Điện thoại", value: "+84 389 103 837", href: "tel:+84389103837" },
                    { Icon: Mail, label: "Email", value: "hanoispavn@gmail.com", href: "mailto:hanoispavn@gmail.com" },
                    { Icon: MapPin, label: "Địa chỉ", value: "17 Hàng Hòm, Hoàn Kiếm, Hà Nội", href: null },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--color-sand)", color: "var(--color-sage-dark)" }}>
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase mb-0.5"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="text-sm hover:underline"
                            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div variants={fadeUp} className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-sage-dark)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={14} className="text-white/55" />
                  <p className="text-xs tracking-[0.25em] uppercase text-white/55"
                    style={{ fontFamily: "var(--font-inter)" }}>
                    Giờ mở cửa
                  </p>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { day: "Thứ 2 – Thứ 6", time: "08:00 – 01:00" },
                    { day: "Thứ 7 – Chủ nhật", time: "08:00 – 01:00" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-sm text-white/65" style={{ fontFamily: "var(--font-inter)" }}>
                        {day}
                      </span>
                      <span className="text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    Mở cửa 7 ngày/tuần, kể cả ngày lễ. Last booking 22:30.
                  </p>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeUp} className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-sand)" }}>
                <p className="text-xs tracking-[0.25em] uppercase mb-5"
                  style={{ color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}>
                  Mạng xã hội
                </p>
                <div className="space-y-3">
                  {[
                    { Icon: Globe, label: "Facebook", handle: "hanoispavn", href: "https://facebook.com/hanoispavn" },
                    { Icon: Share2, label: "Instagram", handle: "@hanoispavn", href: "https://instagram.com/hanoispavn" },
                    { Icon: PlayCircle, label: "YouTube", handle: "@hanoispavn", href: "https://youtube.com/@hanoispavn" },
                  ].map(({ Icon, label, handle, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:bg-white"
                        style={{ backgroundColor: "var(--color-cream)", color: "var(--color-sage-dark)" }}>
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                          {label}
                        </p>
                        <p className="text-sm group-hover:underline"
                          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                          {handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="px-6 lg:px-12 pb-20 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden h-[420px] lg:h-[500px]"
            style={{ border: "1px solid var(--color-sand)" }}>
            <iframe
              title="Zen Spa location"
              src="https://maps.google.com/maps?q=17+Hang+Hom,+Hoan+Kiem,+Hanoi&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2">
            <p className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              <span style={{ color: "var(--color-sage-dark)" }}>📍</span>{" "}
              17 Hàng Hòm, Hoàn Kiếm, Hà Nội
            </p>
            <a
              href="https://maps.google.com/?q=17+Hang+Hom,+Hoan+Kiem,+Hanoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:underline"
              style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
            >
              Mở trong Google Maps →
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
