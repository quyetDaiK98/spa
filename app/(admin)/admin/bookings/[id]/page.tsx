"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, Calendar, Clock, Users, MessageSquare, CheckCircle, XCircle, RotateCcw } from "lucide-react";

// ── Same mock data (shared qua module khi có DB) ──────────────────────────────

type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  guests: number;
  status: BookingStatus;
  createdAt: string;
  note?: string;
}

const mockBookings: Record<string, Booking> = {
  bk001: { id: "bk001", name: "Nguyễn Thị Lan", email: "lan.nguyen@gmail.com", phone: "+84 912 345 678", service: "Hanoi Unique Treatment", date: "2026-04-26", time: "10:00", guests: 1, status: "pending", createdAt: "2026-04-25 21:30" },
  bk002: { id: "bk002", name: "Trần Văn Minh", email: "minh.tran@gmail.com", phone: "+84 987 654 321", service: "Special Four Hands Massage", date: "2026-04-26", time: "14:00", guests: 2, status: "confirmed", createdAt: "2026-04-25 18:15" },
  bk003: { id: "bk003", name: "Lê Thị Hoa", email: "hoa.le@gmail.com", phone: "+84 903 111 222", service: "Romantic Honeymoon Luxury", date: "2026-04-26", time: "16:30", guests: 2, status: "pending", createdAt: "2026-04-25 15:00", note: "Cặp đôi — cần phòng riêng" },
  bk004: { id: "bk004", name: "Phạm Quốc Bảo", email: "bao.pham@gmail.com", phone: "+84 918 777 888", service: "Volcanic Rock Treatment", date: "2026-04-25", time: "09:30", guests: 1, status: "completed", createdAt: "2026-04-24 20:00" },
  bk005: { id: "bk005", name: "Vũ Thị Mai", email: "mai.vu@gmail.com", phone: "+84 945 222 333", service: "Classic Facial", date: "2026-04-25", time: "11:00", guests: 1, status: "completed", createdAt: "2026-04-24 17:30" },
  bk006: { id: "bk006", name: "Đỗ Anh Tuấn", email: "tuan.do@gmail.com", phone: "+84 966 444 555", service: "Swedish Massage", date: "2026-04-25", time: "15:00", guests: 1, status: "cancelled", createdAt: "2026-04-24 10:00", note: "Khách huỷ vì bận đột xuất" },
  bk007: { id: "bk007", name: "Hoàng Thị Thu", email: "thu.hoang@gmail.com", phone: "+84 978 666 777", service: "Foot Reflexology", date: "2026-04-27", time: "10:30", guests: 1, status: "confirmed", createdAt: "2026-04-25 22:00" },
  bk008: { id: "bk008", name: "Bùi Văn Long", email: "long.bui@gmail.com", phone: "+84 932 888 999", service: "Hanoi Signature Package", date: "2026-04-27", time: "13:00", guests: 1, status: "pending", createdAt: "2026-04-26 08:00" },
  bk009: { id: "bk009", name: "Ngô Thị Hằng", email: "hang.ngo@gmail.com", phone: "+84 901 234 567", service: "Vietnamese Massage", date: "2026-04-28", time: "09:00", guests: 1, status: "pending", createdAt: "2026-04-26 10:30" },
  bk010: { id: "bk010", name: "Đinh Thế Anh", email: "anh.dinh@gmail.com", phone: "+84 938 765 432", service: "Luxury Four Hands Massage", date: "2026-04-28", time: "15:30", guests: 2, status: "confirmed", createdAt: "2026-04-26 14:00" },
  bk011: { id: "bk011", name: "Cao Minh Châu", email: "chau.cao@gmail.com", phone: "+84 905 876 543", service: "Hanoi Signature Treatment", date: "2026-04-29", time: "11:00", guests: 1, status: "pending", createdAt: "2026-04-26 19:00" },
  bk012: { id: "bk012", name: "Lý Thị Kim Anh", email: "kimanh.ly@gmail.com", phone: "+84 977 111 222", service: "Body Scrub — Dead Sea Salt", date: "2026-04-29", time: "14:00", guests: 1, status: "confirmed", createdAt: "2026-04-27 08:30" },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const statusConfig: Record<BookingStatus, { label: string; bg: string; color: string }> = {
  pending:   { label: "Chờ xác nhận", bg: "#fef3c7", color: "#92400e" },
  confirmed: { label: "Đã xác nhận",  bg: "#d1fae5", color: "#065f46" },
  completed: { label: "Hoàn thành",   bg: "#e0e7ff", color: "#3730a3" },
  cancelled: { label: "Đã huỷ",       bg: "#fee2e2", color: "#991b1b" },
};

const historyByStatus: Record<BookingStatus, { time: string; action: string; by: string }[]> = {
  pending: [
    { time: "21:30", action: "Booking được tạo", by: "Khách hàng" },
  ],
  confirmed: [
    { time: "21:30", action: "Booking được tạo", by: "Khách hàng" },
    { time: "22:05", action: "Xác nhận booking", by: "Admin" },
  ],
  completed: [
    { time: "21:30", action: "Booking được tạo", by: "Khách hàng" },
    { time: "22:05", action: "Xác nhận booking", by: "Admin" },
    { time: "09:45", action: "Dịch vụ hoàn thành", by: "Nhân viên" },
  ],
  cancelled: [
    { time: "21:30", action: "Booking được tạo", by: "Khách hàng" },
    { time: "10:15", action: "Huỷ booking", by: "Admin" },
  ],
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BookingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const booking = mockBookings[id];

  const [status, setStatus] = useState<BookingStatus>(booking?.status ?? "pending");
  const [staffNote, setStaffNote] = useState("");
  const [saved, setSaved] = useState(false);

  if (!booking) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-lg mb-4" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-cormorant)" }}>
          Không tìm thấy booking #{id}
        </p>
        <Link
          href="/admin/bookings"
          className="text-sm hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
        >
          ← Quay lại danh sách
        </Link>
      </div>
    );
  }

  const cfg = statusConfig[status];
  const history = historyByStatus[status];

  function handleSave() {
    // Khi có DB: gọi Server Action update status + staffNote
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="p-8 max-w-[1100px] mx-auto">

      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 mb-6 text-xs" style={{ fontFamily: "var(--font-inter)", color: "var(--color-muted)" }}>
        <button onClick={() => router.back()} className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
          <ArrowLeft size={13} strokeWidth={1.5} />
          Booking
        </button>
        <span>/</span>
        <span style={{ color: "var(--color-charcoal)" }}>{booking.id.toUpperCase()}</span>
      </div>

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--color-charcoal)",
            }}
          >
            {booking.name}
          </h1>
          <p className="text-xs mt-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
            Đặt lúc {booking.createdAt} · Mã #{booking.id.toUpperCase()}
          </p>
        </div>
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium"
          style={{ backgroundColor: cfg.bg, color: cfg.color, fontFamily: "var(--font-inter)" }}
        >
          {cfg.label}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Left: Info + Actions ── */}
        <div className="lg:col-span-2 space-y-4">

          {/* Customer info */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}
          >
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
            >
              Thông tin khách hàng
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0 }} />
                <a
                  href={`tel:${booking.phone}`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                >
                  {booking.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", flexShrink: 0 }} />
                <a
                  href={`mailto:${booking.email}`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                >
                  {booking.email}
                </a>
              </div>
            </div>
          </div>

          {/* Booking details */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}
          >
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
            >
              Chi tiết booking
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                    Ngày hẹn
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                    {formatDate(booking.date)}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                    Giờ
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                    {booking.time}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 col-span-2">
                <Users size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                    Dịch vụ · {booking.guests} khách
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                    {booking.service}
                  </p>
                </div>
              </div>
              {booking.note && (
                <div className="flex items-start gap-3 col-span-2">
                  <MessageSquare size={14} strokeWidth={1.5} style={{ color: "var(--color-sage)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                      Ghi chú của khách
                    </p>
                    <p className="text-sm italic" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                      "{booking.note}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Staff note */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}
          >
            <h2
              className="mb-3"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
            >
              Ghi chú nội bộ
            </h2>
            <textarea
              value={staffNote}
              onChange={(e) => setStaffNote(e.target.value)}
              placeholder="Thêm ghi chú cho nhân viên..."
              rows={3}
              className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none"
              style={{
                border: "1px solid var(--color-sand)",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-charcoal)",
                fontFamily: "var(--font-inter)",
              }}
            />
          </div>
        </div>

        {/* ── Right: Status control + History ── */}
        <div className="space-y-4">

          {/* Status control */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}
          >
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
            >
              Cập nhật trạng thái
            </h2>
            <div className="space-y-2">
              {(["pending", "confirmed", "completed", "cancelled"] as BookingStatus[]).map((s) => {
                const c = statusConfig[s];
                const icons = {
                  pending: <RotateCcw size={12} strokeWidth={1.5} />,
                  confirmed: <CheckCircle size={12} strokeWidth={1.5} />,
                  completed: <CheckCircle size={12} strokeWidth={1.5} />,
                  cancelled: <XCircle size={12} strokeWidth={1.5} />,
                };
                return (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-left transition-all"
                    style={{
                      backgroundColor: status === s ? c.bg : "transparent",
                      color: status === s ? c.color : "var(--color-muted)",
                      fontFamily: "var(--font-inter)",
                      border: status === s ? `1.5px solid ${c.color}20` : "1.5px solid transparent",
                      fontWeight: status === s ? 500 : 400,
                    }}
                  >
                    {icons[s]}
                    {c.label}
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleSave}
              className="w-full mt-4 py-2.5 rounded-xl text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                backgroundColor: "var(--color-sage-dark)",
                color: "#fff",
                fontFamily: "var(--font-inter)",
              }}
            >
              {saved ? "Đã lưu ✓" : "Lưu thay đổi"}
            </button>
          </div>

          {/* Activity history */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}
          >
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
            >
              Lịch sử hoạt động
            </h2>
            <div className="relative">
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "var(--color-sand)" }}
              />
              <div className="space-y-4">
                {history.map((h, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div
                      className="w-2.5 h-2.5 rounded-full mt-1 shrink-0 z-10"
                      style={{
                        backgroundColor: i === history.length - 1 ? "var(--color-sage)" : "var(--color-sand)",
                        border: "2px solid",
                        borderColor: i === history.length - 1 ? "var(--color-sage)" : "var(--color-sage-light)",
                      }}
                    />
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                      >
                        {h.action}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                      >
                        {h.time} · {h.by}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
