"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";

// ── Mock data (thay bằng Prisma khi DB sẵn sàng) ─────────────────────────────

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

const mockBookings: Booking[] = [
  { id: "bk001", name: "Nguyễn Thị Lan", email: "lan.nguyen@gmail.com", phone: "+84 912 345 678", service: "Hanoi Unique Treatment", date: "2026-04-26", time: "10:00", guests: 1, status: "pending", createdAt: "2026-04-25 21:30" },
  { id: "bk002", name: "Trần Văn Minh", email: "minh.tran@gmail.com", phone: "+84 987 654 321", service: "Special Four Hands Massage", date: "2026-04-26", time: "14:00", guests: 2, status: "confirmed", createdAt: "2026-04-25 18:15" },
  { id: "bk003", name: "Lê Thị Hoa", email: "hoa.le@gmail.com", phone: "+84 903 111 222", service: "Romantic Honeymoon Luxury", date: "2026-04-26", time: "16:30", guests: 2, status: "pending", createdAt: "2026-04-25 15:00", note: "Cặp đôi — cần phòng riêng" },
  { id: "bk004", name: "Phạm Quốc Bảo", email: "bao.pham@gmail.com", phone: "+84 918 777 888", service: "Volcanic Rock Treatment", date: "2026-04-25", time: "09:30", guests: 1, status: "completed", createdAt: "2026-04-24 20:00" },
  { id: "bk005", name: "Vũ Thị Mai", email: "mai.vu@gmail.com", phone: "+84 945 222 333", service: "Classic Facial", date: "2026-04-25", time: "11:00", guests: 1, status: "completed", createdAt: "2026-04-24 17:30" },
  { id: "bk006", name: "Đỗ Anh Tuấn", email: "tuan.do@gmail.com", phone: "+84 966 444 555", service: "Swedish Massage", date: "2026-04-25", time: "15:00", guests: 1, status: "cancelled", createdAt: "2026-04-24 10:00", note: "Khách huỷ vì bận đột xuất" },
  { id: "bk007", name: "Hoàng Thị Thu", email: "thu.hoang@gmail.com", phone: "+84 978 666 777", service: "Foot Reflexology", date: "2026-04-27", time: "10:30", guests: 1, status: "confirmed", createdAt: "2026-04-25 22:00" },
  { id: "bk008", name: "Bùi Văn Long", email: "long.bui@gmail.com", phone: "+84 932 888 999", service: "Hanoi Signature Package", date: "2026-04-27", time: "13:00", guests: 1, status: "pending", createdAt: "2026-04-26 08:00" },
  { id: "bk009", name: "Ngô Thị Hằng", email: "hang.ngo@gmail.com", phone: "+84 901 234 567", service: "Vietnamese Massage", date: "2026-04-28", time: "09:00", guests: 1, status: "pending", createdAt: "2026-04-26 10:30" },
  { id: "bk010", name: "Đinh Thế Anh", email: "anh.dinh@gmail.com", phone: "+84 938 765 432", service: "Luxury Four Hands Massage", date: "2026-04-28", time: "15:30", guests: 2, status: "confirmed", createdAt: "2026-04-26 14:00" },
  { id: "bk011", name: "Cao Minh Châu", email: "chau.cao@gmail.com", phone: "+84 905 876 543", service: "Hanoi Signature Treatment", date: "2026-04-29", time: "11:00", guests: 1, status: "pending", createdAt: "2026-04-26 19:00" },
  { id: "bk012", name: "Lý Thị Kim Anh", email: "kimanh.ly@gmail.com", phone: "+84 977 111 222", service: "Body Scrub — Dead Sea Salt", date: "2026-04-29", time: "14:00", guests: 1, status: "confirmed", createdAt: "2026-04-27 08:30" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const statusConfig: Record<BookingStatus, { label: string; bg: string; color: string }> = {
  pending:   { label: "Chờ xác nhận", bg: "#fef3c7", color: "#92400e" },
  confirmed: { label: "Đã xác nhận",  bg: "#d1fae5", color: "#065f46" },
  completed: { label: "Hoàn thành",   bg: "#e0e7ff", color: "#3730a3" },
  cancelled: { label: "Đã huỷ",       bg: "#fee2e2", color: "#991b1b" },
};

const allStatuses: (BookingStatus | "all")[] = ["all", "pending", "confirmed", "completed", "cancelled"];
const statusLabel: Record<BookingStatus | "all", string> = {
  all: "Tất cả",
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  completed: "Hoàn thành",
  cancelled: "Đã huỷ",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function exportCSV(bookings: Booking[]) {
  const header = ["ID", "Họ tên", "Email", "Điện thoại", "Dịch vụ", "Ngày", "Giờ", "Số khách", "Trạng thái", "Ngày tạo"];
  const rows = bookings.map((b) => [
    b.id, b.name, b.email, b.phone, b.service, b.date, b.time, b.guests, statusLabel[b.status], b.createdAt,
  ]);
  const csv = [header, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bookings-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const PAGE_SIZE = 8;

// ── Component ─────────────────────────────────────────────────────────────────

export default function BookingsPage() {
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = mockBookings;
    if (statusFilter !== "all") list = list.filter((b) => b.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.phone.includes(q) ||
          b.email.toLowerCase().includes(q) ||
          b.service.toLowerCase().includes(q)
      );
    }
    return list;
  }, [statusFilter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const allPageSelected = paginated.length > 0 && paginated.every((b) => selected.has(b.id));

  function toggleAll() {
    if (allPageSelected) {
      setSelected((prev) => {
        const next = new Set(prev);
        paginated.forEach((b) => next.delete(b.id));
        return next;
      });
    } else {
      setSelected((prev) => {
        const next = new Set(prev);
        paginated.forEach((b) => next.add(b.id));
        return next;
      });
    }
  }

  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleStatusChange(newStatus: BookingStatus | "all") {
    setStatusFilter(newStatus);
    setPage(1);
    setSelected(new Set());
  }

  function handleSearch(val: string) {
    setSearch(val);
    setPage(1);
    setSelected(new Set());
  }

  const counts = useMemo(() => {
    const c: Record<BookingStatus | "all", number> = { all: mockBookings.length, pending: 0, confirmed: 0, completed: 0, cancelled: 0 };
    mockBookings.forEach((b) => c[b.status]++);
    return c;
  }, []);

  return (
    <div className="p-8 max-w-[1300px] mx-auto">

      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
          >
            Quản lý
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "2.2rem",
              fontWeight: 300,
              color: "var(--color-charcoal)",
            }}
          >
            Danh sách Booking
          </h1>
        </div>
        <button
          onClick={() => exportCSV(filtered)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:opacity-80"
          style={{
            backgroundColor: "var(--color-sage-dark)",
            color: "#fff",
            fontFamily: "var(--font-inter)",
          }}
        >
          <Download size={14} strokeWidth={1.5} />
          Xuất CSV ({filtered.length})
        </button>
      </div>

      {/* ── Filter tabs + Search ── */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Status tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl flex-wrap"
          style={{ backgroundColor: "var(--color-sand)" }}
        >
          {allStatuses.map((s) => (
            <button
              key={s}
              onClick={() => handleStatusChange(s)}
              className="px-3 py-1.5 rounded-lg text-xs transition-all"
              style={{
                fontFamily: "var(--font-inter)",
                backgroundColor: statusFilter === s ? "#fff" : "transparent",
                color: statusFilter === s ? "var(--color-charcoal)" : "var(--color-muted)",
                boxShadow: statusFilter === s ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                fontWeight: statusFilter === s ? 500 : 400,
              }}
            >
              {statusLabel[s]}
              <span
                className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px]"
                style={{
                  backgroundColor: statusFilter === s ? "var(--color-cream)" : "rgba(0,0,0,0.06)",
                  color: statusFilter === s ? "var(--color-sage-dark)" : "var(--color-muted)",
                }}
              >
                {counts[s]}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-sm ml-auto">
          <Search
            size={14}
            strokeWidth={1.5}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-muted)" }}
          />
          <input
            type="text"
            placeholder="Tên, điện thoại, dịch vụ..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
            style={{
              border: "1px solid var(--color-sand)",
              backgroundColor: "#fff",
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-inter)",
            }}
          />
        </div>
      </div>

      {/* ── Bulk action bar ── */}
      {selected.size > 0 && (
        <div
          className="flex items-center justify-between px-5 py-3 rounded-xl mb-4 transition-all"
          style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff" }}
        >
          <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>
            Đã chọn <strong>{selected.size}</strong> booking
          </span>
          <div className="flex gap-2">
            <button
              className="text-xs px-3 py-1.5 rounded-lg transition-all hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", fontFamily: "var(--font-inter)" }}
            >
              Xác nhận
            </button>
            <button
              className="text-xs px-3 py-1.5 rounded-lg transition-all hover:bg-red-400/30"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", fontFamily: "var(--font-inter)" }}
            >
              Huỷ
            </button>
            <button
              onClick={() => setSelected(new Set())}
              className="text-xs px-3 py-1.5 rounded-lg transition-all hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}
            >
              Bỏ chọn
            </button>
          </div>
        </div>
      )}

      {/* ── Table ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff" }}
      >
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              Không tìm thấy booking nào.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-sand)", backgroundColor: "var(--color-cream)" }}>
                  <th className="px-5 py-3 w-10">
                    <input
                      type="checkbox"
                      checked={allPageSelected}
                      onChange={toggleAll}
                      className="w-3.5 h-3.5 rounded accent-[var(--color-sage-dark)] cursor-pointer"
                    />
                  </th>
                  {["Khách hàng", "Dịch vụ", "Ngày / Giờ", "Khách", "Trạng thái", ""].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-xs tracking-[0.15em] uppercase whitespace-nowrap"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginated.map((b, i) => {
                  const cfg = statusConfig[b.status];
                  const isSelected = selected.has(b.id);
                  return (
                    <tr
                      key={b.id}
                      className="transition-colors"
                      style={{
                        borderBottom: i < paginated.length - 1 ? "1px solid var(--color-sand)" : "none",
                        backgroundColor: isSelected ? "rgba(92,122,92,0.04)" : "transparent",
                      }}
                    >
                      <td className="px-5 py-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleOne(b.id)}
                          className="w-3.5 h-3.5 rounded accent-[var(--color-sage-dark)] cursor-pointer"
                        />
                      </td>

                      {/* Customer */}
                      <td className="px-5 py-4">
                        <p
                          className="font-medium"
                          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                        >
                          {b.name}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                        >
                          {b.phone}
                        </p>
                      </td>

                      {/* Service */}
                      <td className="px-5 py-4 max-w-[220px]">
                        <p
                          className="truncate"
                          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                        >
                          {b.service}
                        </p>
                        {b.note && (
                          <p
                            className="text-xs mt-0.5 truncate italic"
                            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                          >
                            {b.note}
                          </p>
                        )}
                      </td>

                      {/* Date/Time */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <p style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                          {formatDate(b.date)}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                        >
                          {b.time}
                        </p>
                      </td>

                      {/* Guests */}
                      <td className="px-5 py-4 text-center">
                        <span
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "var(--color-cream)",
                            color: "var(--color-sage-dark)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {b.guests}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: cfg.bg, color: cfg.color, fontFamily: "var(--font-inter)" }}
                        >
                          {cfg.label}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4">
                        <Link
                          href={`/admin/bookings/${b.id}`}
                          className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
                        >
                          Chi tiết →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p
            className="text-xs"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
          >
            Hiển thị {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} / {filtered.length} kết quả
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff" }}
            >
              <ChevronLeft size={14} strokeWidth={1.5} style={{ color: "var(--color-charcoal)" }} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="w-8 h-8 rounded-lg text-xs transition-all"
                style={{
                  fontFamily: "var(--font-inter)",
                  border: "1px solid var(--color-sand)",
                  backgroundColor: page === p ? "var(--color-sage-dark)" : "#fff",
                  color: page === p ? "#fff" : "var(--color-charcoal)",
                  fontWeight: page === p ? 500 : 400,
                }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff" }}
            >
              <ChevronRight size={14} strokeWidth={1.5} style={{ color: "var(--color-charcoal)" }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
