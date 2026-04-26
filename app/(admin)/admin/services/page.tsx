"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus, ChevronUp, ChevronDown, Pencil, Trash2, Check, X, GripVertical, Layers,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  slug: string;
  name: string;
  order: number;
  serviceCount: number;
}

// ── Mock data (thay bằng Prisma queries) ──────────────────────────────────────

const initialCategories: Category[] = [
  { id: "cat1", slug: "hanoi-spa-signature-full-body-treatment", name: "Hanoi Spa Signature Full Body Treatment", order: 1, serviceCount: 8 },
  { id: "cat2", slug: "basic-full-body-massage", name: "Basic Full Body Massage", order: 2, serviceCount: 7 },
  { id: "cat3", slug: "body-skin-care", name: "Body Skin Care", order: 3, serviceCount: 7 },
  { id: "cat4", slug: "back-shoulder-head-relaxation", name: "Back - Shoulder - Head Relaxation", order: 4, serviceCount: 7 },
  { id: "cat5", slug: "facial-treatment", name: "Facial Treatment", order: 5, serviceCount: 2 },
  { id: "cat6", slug: "foot-therapy", name: "Foot Therapy", order: 6, serviceCount: 2 },
  { id: "cat7", slug: "hanoi-relaxing", name: "Hanoi Relaxing", order: 7, serviceCount: 2 },
  { id: "cat8", slug: "hanoi-special-packages", name: "Special Packages", order: 8, serviceCount: 6 },
];

function toSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");

  function move(id: string, dir: -1 | 1) {
    setCategories((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const idx = sorted.findIndex((c) => c.id === id);
      const swapIdx = idx + dir;
      if (swapIdx < 0 || swapIdx >= sorted.length) return prev;
      const next = [...sorted];
      [next[idx].order, next[swapIdx].order] = [next[swapIdx].order, next[idx].order];
      return [...next];
    });
  }

  function startEdit(cat: Category) {
    setEditingId(cat.id);
    setEditName(cat.name);
    setDeletingId(null);
  }

  function commitEdit(id: string) {
    if (!editName.trim()) return;
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, name: editName.trim(), slug: toSlug(editName.trim()) }
          : c
      )
    );
    setEditingId(null);
  }

  function confirmDelete(id: string) {
    setCategories((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      return filtered.map((c, i) => ({ ...c, order: i + 1 }));
    });
    setDeletingId(null);
  }

  function addCategory() {
    if (!newName.trim()) return;
    const maxOrder = categories.length ? Math.max(...categories.map((c) => c.order)) : 0;
    setCategories((prev) => [
      ...prev,
      {
        id: `cat_${Date.now()}`,
        slug: toSlug(newName.trim()),
        name: newName.trim(),
        order: maxOrder + 1,
        serviceCount: 0,
      },
    ]);
    setNewName("");
    setShowAddForm(false);
  }

  const sorted = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div className="p-8 max-w-[900px] mx-auto">

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
            Danh mục Dịch vụ
          </h1>
        </div>
        <button
          onClick={() => { setShowAddForm(true); setEditingId(null); setDeletingId(null); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:opacity-80"
          style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
        >
          <Plus size={14} strokeWidth={2} />
          Thêm danh mục
        </button>
      </div>

      {/* ── Add form ── */}
      {showAddForm && (
        <div
          className="rounded-2xl p-5 mb-4"
          style={{ backgroundColor: "#fff", border: "1.5px solid var(--color-sage-light)" }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
          >
            Danh mục mới
          </p>
          <div className="flex gap-3">
            <input
              autoFocus
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") addCategory(); if (e.key === "Escape") setShowAddForm(false); }}
              placeholder="Tên danh mục..."
              className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                border: "1px solid var(--color-sand)",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-charcoal)",
                fontFamily: "var(--font-inter)",
              }}
            />
            <button
              onClick={addCategory}
              className="px-4 py-2.5 rounded-xl text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
            >
              Thêm
            </button>
            <button
              onClick={() => { setShowAddForm(false); setNewName(""); }}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-[var(--color-sand)]"
              style={{ border: "1px solid var(--color-sand)" }}
            >
              <X size={14} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
            </button>
          </div>
          {newName.trim() && (
            <p
              className="mt-2 text-xs"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
            >
              Slug: <code style={{ color: "var(--color-sage)" }}>{toSlug(newName)}</code>
            </p>
          )}
        </div>
      )}

      {/* ── Category list ── */}
      <div className="space-y-2">
        {sorted.map((cat, idx) => {
          const isEditing = editingId === cat.id;
          const isDeleting = deletingId === cat.id;

          return (
            <div
              key={cat.id}
              className="rounded-2xl transition-all"
              style={{
                backgroundColor: "#fff",
                border: isEditing
                  ? "1.5px solid var(--color-sage-light)"
                  : isDeleting
                  ? "1.5px solid #fca5a5"
                  : "1px solid var(--color-sand)",
              }}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                {/* Order badge */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-sage-dark)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {cat.order}
                </div>

                {/* Grip icon */}
                <GripVertical size={14} strokeWidth={1.5} style={{ color: "var(--color-sand)", flexShrink: 0 }} />

                {/* Name / Edit input */}
                {isEditing ? (
                  <input
                    autoFocus
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitEdit(cat.id);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    className="flex-1 px-3 py-1.5 rounded-lg text-sm outline-none"
                    style={{
                      border: "1px solid var(--color-sage-light)",
                      backgroundColor: "var(--color-cream)",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter)",
                    }}
                  />
                ) : (
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-medium truncate"
                      style={{ color: isDeleting ? "#dc2626" : "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                    >
                      {cat.name}
                    </p>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      /{cat.slug} · {cat.serviceCount} dịch vụ
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => commitEdit(cat.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-green-50"
                      >
                        <Check size={14} strokeWidth={2} style={{ color: "#16a34a" }} />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-sand)]"
                      >
                        <X size={14} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                      </button>
                    </>
                  ) : isDeleting ? (
                    <>
                      <span
                        className="text-xs mr-1"
                        style={{ color: "#dc2626", fontFamily: "var(--font-inter)" }}
                      >
                        Xoá?
                      </span>
                      <button
                        onClick={() => confirmDelete(cat.id)}
                        className="px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-red-50"
                        style={{ border: "1px solid #fca5a5", color: "#dc2626", fontFamily: "var(--font-inter)" }}
                      >
                        Xác nhận
                      </button>
                      <button
                        onClick={() => setDeletingId(null)}
                        className="px-3 py-1.5 rounded-lg text-xs transition-all"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                      >
                        Huỷ
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Reorder */}
                      <button
                        onClick={() => move(cat.id, -1)}
                        disabled={idx === 0}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)] disabled:opacity-20"
                      >
                        <ChevronUp size={14} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                      </button>
                      <button
                        onClick={() => move(cat.id, 1)}
                        disabled={idx === sorted.length - 1}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)] disabled:opacity-20"
                      >
                        <ChevronDown size={14} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                      </button>

                      {/* Divider */}
                      <div className="w-px h-4 mx-1" style={{ backgroundColor: "var(--color-sand)" }} />

                      {/* Edit */}
                      <button
                        onClick={() => startEdit(cat)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)]"
                      >
                        <Pencil size={13} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => { setDeletingId(cat.id); setEditingId(null); }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50"
                      >
                        <Trash2 size={13} strokeWidth={1.5} style={{ color: "#fca5a5" }} />
                      </button>

                      {/* Manage link */}
                      <div className="w-px h-4 mx-1" style={{ backgroundColor: "var(--color-sand)" }} />
                      <Link
                        href={`/admin/services/${cat.slug}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:opacity-80"
                        style={{
                          backgroundColor: "var(--color-sage-dark)",
                          color: "#fff",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        <Layers size={11} strokeWidth={1.5} />
                        Dịch vụ
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Empty state ── */}
      {sorted.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-sm mb-4" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
            Chưa có danh mục nào.
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="text-sm px-4 py-2 rounded-xl transition-all hover:opacity-80"
            style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
          >
            Tạo danh mục đầu tiên
          </button>
        </div>
      )}
    </div>
  );
}
