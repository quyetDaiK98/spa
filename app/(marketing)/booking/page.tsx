"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    group: "Hanoi Spa Signature Full Body",
    options: [
      "Hanoi Signature Treatment",
      "Hanoi Unique Treatment",
      "Luxury Four Hands Massage",
      "Special Four Hands Massage",
      "Volcanic Rock Treatment",
      "Vietnamese Bamboo Treatment",
      "Herbal Treatment",
      "Bioelectric Treatment",
    ],
  },
  {
    group: "Basic Full Body Massage",
    options: [
      "Vietnamese Massage",
      "Traditional Thai Massage",
      "Japanese Judo Therapy",
      "Swedish Massage",
      "Asian Massage",
      "Pregnant Treatment",
      "Children Care Therapy",
    ],
  },
  {
    group: "Body Skin Care",
    options: [
      "Vietnamese Coconut Scrub",
      "Oat Milk Moisturizing Body Scrub",
      "Dead Sea Salt Scrub",
      "Green Tea Scrub",
      "Coconut Wrap",
      "Oat Body Wrap",
      "Dead Sea Detox Body Wrap",
    ],
  },
  {
    group: "Back · Shoulder · Head",
    options: [
      "Back-Shoulder-Head Therapy",
      "Gorgeous Treatment",
      "Herbal BSH",
      "Volcanic Rock BSH",
      "Vietnamese Bamboo BSH",
      "Head Massage",
      "Hair Wash & Neck-Shoulder",
    ],
  },
  {
    group: "Facial Treatment",
    options: ["Classic Facial", "Luxury Facial"],
  },
  {
    group: "Foot Therapy",
    options: ["Foot Reflexology", "Luxury Foot Massage"],
  },
  {
    group: "Hanoi Relaxing",
    options: ["Jacuzzi / Herbal Bathtub", "Herbal Steam"],
  },
  {
    group: "Special Packages",
    options: [
      "Hanoi Signature Package",
      "Romantic Honeymoon Luxury",
      "Romantic Honeymoon",
      "Vietnamese Package",
      "Relaxation for Her",
      "Relaxation for Him",
    ],
  },
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
  "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
  "20:30", "21:00", "21:30", "22:00", "22:30",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const inputClass = "w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all duration-200";
const inputStyle = {
  backgroundColor: "var(--color-cream)",
  border: "1.5px solid var(--color-sand)",
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-inter)",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-xs tracking-[0.18em] uppercase mb-2"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
      >
        {label}
        {required && <span style={{ color: "var(--color-sage)" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function BookingPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    guests: "1",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const focusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, borderColor: "var(--color-sage)", backgroundColor: "#fff" }
      : inputStyle;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Get today's date string for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ backgroundColor: "var(--color-white)" }}>
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-40 pb-24 px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.35em] uppercase mb-5"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}
          >
            Zen Spa · Hà Nội
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
          >
            Book Your <em>Treatment</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Đặt lịch ngay để chúng tôi chuẩn bị trải nghiệm hoàn hảo nhất cho bạn.
            Chúng tôi sẽ xác nhận trong vòng 2 giờ làm việc.
          </motion.p>
        </div>
      </motion.section>

      {/* Main content */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 xl:gap-16 items-start">

            {/* ── Form ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-20 px-8 rounded-[2rem]"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <CheckCircle2 size={52} style={{ color: "var(--color-sage)" }} className="mb-6" />
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "var(--color-charcoal)",
                    }}
                  >
                    Đặt lịch thành công!
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-8 max-w-md"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    Cảm ơn <strong style={{ color: "var(--color-charcoal)" }}>{form.name}</strong>.
                    Chúng tôi sẽ liên hệ qua{" "}
                    <strong style={{ color: "var(--color-charcoal)" }}>{form.phone}</strong>{" "}
                    để xác nhận lịch hẹn trong vòng 2 giờ làm việc.
                  </p>
                  <Link
                    href="/menus"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                    style={{
                      backgroundColor: "var(--color-sage-dark)",
                      color: "#fff",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Xem thêm dịch vụ
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal info */}
                  <motion.div variants={fadeUp}>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-5"
                      style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                    >
                      Thông tin cá nhân
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Họ và tên" required>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={form.name}
                          onChange={handleChange("name")}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={focusStyle("name")}
                        />
                      </Field>
                      <Field label="Số điện thoại" required>
                        <input
                          type="tel"
                          required
                          placeholder="+84 xxx xxx xxx"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={focusStyle("phone")}
                        />
                      </Field>
                    </div>
                    <div className="mt-4">
                      <Field label="Email">
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={form.email}
                          onChange={handleChange("email")}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={focusStyle("email")}
                        />
                      </Field>
                    </div>
                  </motion.div>

                  {/* Service */}
                  <motion.div variants={fadeUp}>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-5"
                      style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                    >
                      Dịch vụ
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Chọn dịch vụ" required>
                        <div className="relative">
                          <select
                            required
                            value={form.service}
                            onChange={handleChange("service")}
                            onFocus={() => setFocused("service")}
                            onBlur={() => setFocused(null)}
                            className={inputClass + " appearance-none pr-10"}
                            style={focusStyle("service")}
                          >
                            <option value="">-- Chọn dịch vụ --</option>
                            {services.map((group) => (
                              <optgroup key={group.group} label={group.group}>
                                {group.options.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "var(--color-muted)" }}
                          />
                        </div>
                      </Field>
                      <Field label="Số người">
                        <div className="relative">
                          <select
                            value={form.guests}
                            onChange={handleChange("guests")}
                            onFocus={() => setFocused("guests")}
                            onBlur={() => setFocused(null)}
                            className={inputClass + " appearance-none pr-10"}
                            style={focusStyle("guests")}
                          >
                            {["1", "2", "3", "4"].map((n) => (
                              <option key={n} value={n}>{n} người</option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "var(--color-muted)" }}
                          />
                        </div>
                      </Field>
                    </div>
                  </motion.div>

                  {/* Date & time */}
                  <motion.div variants={fadeUp}>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-5"
                      style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                    >
                      Ngày & giờ
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Ngày hẹn" required>
                        <input
                          type="date"
                          required
                          min={today}
                          value={form.date}
                          onChange={handleChange("date")}
                          onFocus={() => setFocused("date")}
                          onBlur={() => setFocused(null)}
                          className={inputClass}
                          style={focusStyle("date")}
                        />
                      </Field>
                      <Field label="Giờ mong muốn">
                        <div className="relative">
                          <select
                            value={form.time}
                            onChange={handleChange("time")}
                            onFocus={() => setFocused("time")}
                            onBlur={() => setFocused(null)}
                            className={inputClass + " appearance-none pr-10"}
                            style={focusStyle("time")}
                          >
                            <option value="">-- Chọn giờ --</option>
                            {timeSlots.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "var(--color-muted)" }}
                          />
                        </div>
                      </Field>
                    </div>
                  </motion.div>

                  {/* Notes */}
                  <motion.div variants={fadeUp}>
                    <Field label="Ghi chú thêm">
                      <textarea
                        rows={4}
                        placeholder="Yêu cầu đặc biệt, tình trạng sức khỏe cần lưu ý, hoặc câu hỏi bất kỳ..."
                        value={form.notes}
                        onChange={handleChange("notes")}
                        onFocus={() => setFocused("notes")}
                        onBlur={() => setFocused(null)}
                        className={inputClass + " resize-none"}
                        style={{ ...focusStyle("notes"), lineHeight: "1.7" }}
                      />
                    </Field>
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp} className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-12 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        backgroundColor: "var(--color-sage-dark)",
                        color: "#fff",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      Xác nhận đặt lịch
                    </button>
                    <p
                      className="mt-3 text-xs"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      * Chúng tôi sẽ gọi xác nhận lịch trong vòng 2 giờ làm việc.
                    </p>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-6 lg:sticky lg:top-28"
            >
              {/* Contact card */}
              <motion.div
                variants={fadeUp}
                className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-5"
                  style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                >
                  Liên hệ trực tiếp
                </p>
                <div className="space-y-4">
                  {[
                    { Icon: Phone, label: "Điện thoại", value: "+84 389 103 837", href: "tel:+84389103837" },
                    { Icon: Mail, label: "Email", value: "hanoispavn@gmail.com", href: "mailto:hanoispavn@gmail.com" },
                    { Icon: MapPin, label: "Địa chỉ", value: "17 Hàng Hòm, Hoàn Kiếm, Hà Nội", href: null },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--color-sand)", color: "var(--color-sage-dark)" }}
                      >
                        <Icon size={15} />
                      </div>
                      <div>
                        <p
                          className="text-[10px] tracking-[0.15em] uppercase mb-0.5"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                        >
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm hover:underline"
                            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p
                            className="text-sm"
                            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                          >
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hours card */}
              <motion.div
                variants={fadeUp}
                className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-sage-dark)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={15} className="text-white/60" />
                  <p
                    className="text-xs tracking-[0.25em] uppercase text-white/60"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Giờ mở cửa
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Thứ 2 – Thứ 6", time: "08:00 – 01:00" },
                    { day: "Thứ 7 – Chủ nhật", time: "08:00 – 01:00" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span
                        className="text-sm text-white/65"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {day}
                      </span>
                      <span
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-5 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <p
                    className="text-xs leading-relaxed text-white/45"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Mở cửa mỗi ngày trong tuần. Đặt lịch trước ít nhất 2 giờ để đảm bảo có chỗ.
                  </p>
                </div>
              </motion.div>

              {/* Etiquette reminder */}
              <motion.div
                variants={fadeUp}
                className="rounded-[1.5rem] p-7"
                style={{ backgroundColor: "var(--color-sand)" }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
                >
                  Lưu ý
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Đến trước 10 phút để check-in",
                    "Thông báo nếu cần hủy trước 2 giờ",
                    "Tư vấn miễn phí trước khi trị liệu",
                  ].map((note) => (
                    <li key={note} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--color-sage)" }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
                      >
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
