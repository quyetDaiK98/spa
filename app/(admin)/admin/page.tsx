import { CalendarCheck, Clock, TrendingUp, Users } from "lucide-react";

// ── Mock data (thay bang Prisma queries khi DB san sang) ──────────────────────

const stats = [
  {
    label: "Booking hôm nay",
    value: "8",
    sub: "+2 so với hôm qua",
    positive: true,
    icon: CalendarCheck,
    bg: "var(--color-sage-dark)",
    text: "#fff",
  },
  {
    label: "Chờ xác nhận",
    value: "3",
    sub: "Cần xử lý sớm",
    positive: null,
    icon: Clock,
    bg: "var(--color-cream)",
    text: "var(--color-charcoal)",
    accent: "#f59e0b",
  },
  {
    label: "Booking tuần này",
    value: "47",
    sub: "+12% so với tuần trước",
    positive: true,
    icon: TrendingUp,
    bg: "var(--color-cream)",
    text: "var(--color-charcoal)",
  },
  {
    label: "Tổng khách hàng",
    value: "1,284",
    sub: "Từ khi khai trương",
    positive: null,
    icon: Users,
    bg: "var(--color-cream)",
    text: "var(--color-charcoal)",
  },
];

type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

const recentBookings: {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  guests: number;
  status: BookingStatus;
  createdAt: string;
}[] = [
  {
    id: "bk001",
    name: "Nguyễn Thị Lan",
    phone: "+84 912 345 678",
    service: "Hanoi Unique Treatment",
    date: "2026-04-26",
    time: "10:00",
    guests: 1,
    status: "pending",
    createdAt: "2026-04-25 21:30",
  },
  {
    id: "bk002",
    name: "Trần Văn Minh",
    phone: "+84 987 654 321",
    service: "Special Four Hands Massage",
    date: "2026-04-26",
    time: "14:00",
    guests: 2,
    status: "confirmed",
    createdAt: "2026-04-25 18:15",
  },
  {
    id: "bk003",
    name: "Lê Thị Hoa",
    phone: "+84 903 111 222",
    service: "Romantic Honeymoon Luxury",
    date: "2026-04-26",
    time: "16:30",
    guests: 2,
    status: "pending",
    createdAt: "2026-04-25 15:00",
  },
  {
    id: "bk004",
    name: "Phạm Quốc Bảo",
    phone: "+84 918 777 888",
    service: "Volcanic Rock Treatment",
    date: "2026-04-25",
    time: "09:30",
    guests: 1,
    status: "completed",
    createdAt: "2026-04-24 20:00",
  },
  {
    id: "bk005",
    name: "Vũ Thị Mai",
    phone: "+84 945 222 333",
    service: "Classic Facial",
    date: "2026-04-25",
    time: "11:00",
    guests: 1,
    status: "completed",
    createdAt: "2026-04-24 17:30",
  },
  {
    id: "bk006",
    name: "Đỗ Anh Tuấn",
    phone: "+84 966 444 555",
    service: "Swedish Massage",
    date: "2026-04-25",
    time: "15:00",
    guests: 1,
    status: "cancelled",
    createdAt: "2026-04-24 10:00",
  },
  {
    id: "bk007",
    name: "Hoàng Thị Thu",
    phone: "+84 978 666 777",
    service: "Foot Reflexology",
    date: "2026-04-27",
    time: "10:30",
    guests: 1,
    status: "confirmed",
    createdAt: "2026-04-25 22:00",
  },
  {
    id: "bk008",
    name: "Bùi Văn Long",
    phone: "+84 932 888 999",
    service: "Hanoi Signature Package",
    date: "2026-04-27",
    time: "13:00",
    guests: 1,
    status: "pending",
    createdAt: "2026-04-26 08:00",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const statusConfig: Record<BookingStatus, { label: string; bg: string; color: string }> = {
  pending: { label: "Chờ xác nhận", bg: "#fef3c7", color: "#92400e" },
  confirmed: { label: "Đã xác nhận", bg: "#d1fae5", color: "#065f46" },
  completed: { label: "Hoàn thành", bg: "#e0e7ff", color: "#3730a3" },
  cancelled: { label: "Đã huỷ", bg: "#fee2e2", color: "#991b1b" },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const pendingCount = recentBookings.filter((b) => b.status === "pending").length;
  const todayBookings = recentBookings.filter((b) => b.date === "2026-04-26");

  return (
    <div className="p-8 max-w-[1200px] mx-auto">

      {/* ── Header ── */}
      <div className="mb-8">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-1"
          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
        >
          {today}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "2.2rem",
            fontWeight: 300,
            color: "var(--color-charcoal)",
          }}
        >
          Dashboard
        </h1>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-2xl p-5"
              style={{ backgroundColor: s.bg, border: "1px solid var(--color-sand)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{
                    color: s.bg === "var(--color-sage-dark)" ? "rgba(255,255,255,0.55)" : "var(--color-muted)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.label}
                </p>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: s.bg === "var(--color-sage-dark)" ? "rgba(255,255,255,0.12)" : "var(--color-sand)",
                    color: s.bg === "var(--color-sage-dark)" ? "#fff" : "var(--color-sage-dark)",
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} />
                </div>
              </div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: s.bg === "var(--color-sage-dark)" ? "#fff" : s.text,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                className="text-xs"
                style={{
                  color: s.positive === true
                    ? "#16a34a"
                    : s.accent
                    ? s.accent
                    : s.bg === "var(--color-sage-dark)"
                    ? "rgba(255,255,255,0.45)"
                    : "var(--color-muted)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {s.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Quick actions ── */}
      {pendingCount > 0 && (
        <div
          className="rounded-2xl px-5 py-4 mb-6 flex items-center justify-between"
          style={{ backgroundColor: "#fef3c7", border: "1px solid #fde68a" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <p className="text-sm" style={{ color: "#92400e", fontFamily: "var(--font-inter)" }}>
              Có <strong>{pendingCount} booking</strong> đang chờ xác nhận hôm nay
            </p>
          </div>
          <a
            href="/admin/bookings?status=pending"
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg transition-colors hover:bg-amber-200"
            style={{ color: "#92400e", fontFamily: "var(--font-inter)", backgroundColor: "#fde68a" }}
          >
            Xem ngay
          </a>
        </div>
      )}

      {/* ── Recent bookings table ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--color-sand)" }}
      >
        {/* Table header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "var(--color-sand)", backgroundColor: "var(--color-white)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "var(--color-charcoal)",
            }}
          >
            Booking gần đây
          </h2>
          <a
            href="/admin/bookings"
            className="text-xs tracking-widest uppercase transition-colors hover:opacity-70"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
          >
            Xem tất cả →
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto" style={{ backgroundColor: "var(--color-white)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-sand)" }}>
                {["Khách hàng", "Dịch vụ", "Ngày / Giờ", "Khách", "Trạng thái", ""].map((h) => (
                  <th
                    key={h}
                    className="text-left px-6 py-3 text-xs tracking-[0.15em] uppercase"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b, i) => {
                const cfg = statusConfig[b.status];
                return (
                  <tr
                    key={b.id}
                    className="transition-colors hover:bg-[var(--color-cream)]"
                    style={{ borderBottom: i < recentBookings.length - 1 ? "1px solid var(--color-sand)" : "none" }}
                  >
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <p style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                        {b.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        {b.phone}
                      </p>
                    </td>

                    {/* Service */}
                    <td className="px-6 py-4">
                      <p className="text-sm" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                        {b.service}
                      </p>
                    </td>

                    {/* Date/Time */}
                    <td className="px-6 py-4">
                      <p style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                        {formatDate(b.date)}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                        {b.time}
                      </p>
                    </td>

                    {/* Guests */}
                    <td className="px-6 py-4">
                      <p style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                        {b.guests}
                      </p>
                    </td>

                    {/* Status badge */}
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: cfg.bg,
                          color: cfg.color,
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                        }}
                      >
                        {cfg.label}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4">
                      <a
                        href={`/admin/bookings/${b.id}`}
                        className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                        style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                      >
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Today summary ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Booking hôm nay */}
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-sand)" }}
        >
          <h3
            className="mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
          >
            Lịch hôm nay ({todayBookings.length} booking)
          </h3>
          {todayBookings.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              Chưa có booking nào hôm nay.
            </p>
          ) : (
            <div className="space-y-3">
              {todayBookings.map((b) => {
                const cfg = statusConfig[b.status];
                return (
                  <div key={b.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="text-xs font-medium px-2 py-1 rounded-lg tabular-nums"
                        style={{ backgroundColor: "var(--color-cream)", color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
                      >
                        {b.time}
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                          {b.name}
                        </p>
                        <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                          {b.service}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full shrink-0"
                      style={{ backgroundColor: cfg.bg, color: cfg.color, fontFamily: "var(--font-inter)" }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Status breakdown */}
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-sand)" }}
        >
          <h3
            className="mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-charcoal)" }}
          >
            Phân bổ trạng thái
          </h3>
          <div className="space-y-3">
            {(["pending", "confirmed", "completed", "cancelled"] as BookingStatus[]).map((status) => {
              const count = recentBookings.filter((b) => b.status === status).length;
              const pct = Math.round((count / recentBookings.length) * 100);
              const cfg = statusConfig[status];
              return (
                <div key={status}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                      {cfg.label}
                    </span>
                    <span className="text-xs font-medium" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                      {count} ({pct}%)
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-sand)" }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: cfg.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
