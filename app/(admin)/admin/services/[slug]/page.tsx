"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Eye, EyeOff, Pencil, Trash2, X, Check, ChevronDown, ChevronUp } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Variant {
  id: string;
  duration: number;
  price: number;
  note?: string;
}

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  badge?: string;
  isVisible: boolean;
  variants: Variant[];
}

interface CategoryData {
  id: string;
  slug: string;
  name: string;
  order: number;
  services: Service[];
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const catalogData: Record<string, CategoryData> = {
  "hanoi-spa-signature-full-body-treatment": {
    id: "cat1", slug: "hanoi-spa-signature-full-body-treatment", name: "Hanoi Spa Signature Full Body Treatment", order: 1,
    services: [
      { id: "s1", name: "Hanoi Signature Treatment", slug: "hanoi-signature-treatment", description: "Kết hợp Stone massage + Bamboo + Herbal, cân bằng thần kinh, thúc đẩy tuần hoàn", badge: "Exclusive", isVisible: true, variants: [{ id: "v1", duration: 60, price: 1390000 }, { id: "v2", duration: 120, price: 2700000 }, { id: "v3", duration: 165, price: 3200000 }] },
      { id: "s2", name: "Hanoi Unique Treatment", slug: "hanoi-unique-treatment", description: "Kết hợp tre + thảo dược giảm stress, bổ sung khoáng chất", badge: "Most Popular", isVisible: true, variants: [{ id: "v4", duration: 60, price: 1290000 }, { id: "v5", duration: 75, price: 1590000 }, { id: "v6", duration: 90, price: 1890000 }, { id: "v7", duration: 120, price: 2290000 }, { id: "v8", duration: 165, price: 3000000 }] },
      { id: "s3", name: "Luxury Four Hands Massage", slug: "luxury-four-hands-massage", description: "2 trị liệu sư đồng bộ với dầu thơm, thư giãn toàn diện", isVisible: true, variants: [{ id: "v9", duration: 60, price: 2090000 }, { id: "v10", duration: 75, price: 2690000 }, { id: "v11", duration: 90, price: 3290000 }, { id: "v12", duration: 120, price: 4290000 }, { id: "v13", duration: 165, price: 4700000 }] },
      { id: "s4", name: "Special Four Hands Massage", slug: "special-four-hands-massage", description: "Đá núi lửa + tre nóng + túi thảo dược, hiệu quả trị liệu tăng cao", badge: "Best Seller", isVisible: true, variants: [{ id: "v14", duration: 60, price: 2590000 }, { id: "v15", duration: 120, price: 5340000 }] },
      { id: "s5", name: "Volcanic Rock Treatment", slug: "volcanic-rock-treatment", description: "Đá nóng trị liệu sâu, giảm cơ cứng, cải thiện tuần hoàn", badge: "Most Favorite", isVisible: true, variants: [{ id: "v16", duration: 60, price: 1190000 }, { id: "v17", duration: 120, price: 2740000 }] },
      { id: "s6", name: "Vietnamese Bamboo Treatment", slug: "vietnamese-bamboo-treatment", description: "Liệu pháp tre truyền thống Việt Nam", isVisible: true, variants: [] },
      { id: "s7", name: "Herbal Treatment", slug: "herbal-treatment", description: "Trị liệu thảo dược", isVisible: true, variants: [] },
      { id: "s8", name: "Bioelectric Treatment", slug: "bioelectric-treatment", description: "Trị liệu điện sinh học", isVisible: false, variants: [] },
    ],
  },
  "basic-full-body-massage": {
    id: "cat2", slug: "basic-full-body-massage", name: "Basic Full Body Massage", order: 2,
    services: [
      { id: "s10", name: "Vietnamese Massage", slug: "vietnamese-massage", description: "Kỹ thuật bấm huyệt + dầu thơm, cải thiện linh hoạt, giải phóng căng thẳng", isVisible: true, variants: [{ id: "v20", duration: 60, price: 750000 }, { id: "v21", duration: 75, price: 950000 }, { id: "v22", duration: 90, price: 1250000 }, { id: "v23", duration: 120, price: 1650000 }] },
      { id: "s11", name: "Traditional Thai Massage", slug: "traditional-thai-massage", description: "Bấm dọc kinh mạch + giãn cơ, phục hồi năng lượng", isVisible: true, variants: [{ id: "v24", duration: 60, price: 750000 }, { id: "v25", duration: 75, price: 950000 }, { id: "v26", duration: 90, price: 1250000 }, { id: "v27", duration: 120, price: 1750000 }] },
      { id: "s12", name: "Japanese Judo Therapy", slug: "japanese-judo-therapy", description: "Tập trung mông/cột sống/vai, cải thiện tư thế, tăng miễn dịch", isVisible: true, variants: [{ id: "v28", duration: 60, price: 1390000 }, { id: "v29", duration: 75, price: 1690000 }, { id: "v30", duration: 90, price: 2190000 }, { id: "v31", duration: 120, price: 2690000 }] },
      { id: "s13", name: "Swedish Massage", slug: "swedish-massage", description: "Áp lực nhẹ đến trung, an thần kinh, hỗ trợ giấc ngủ", isVisible: true, variants: [{ id: "v32", duration: 60, price: 740000 }, { id: "v33", duration: 75, price: 940000 }, { id: "v34", duration: 90, price: 1140000 }, { id: "v35", duration: 120, price: 1540000 }] },
      { id: "s14", name: "Asian Massage", slug: "asian-massage", description: "Kết hợp Thai + Vietnamese + Shiatsu Nhật, rejuvenate toàn thân", isVisible: true, variants: [{ id: "v36", duration: 60, price: 950000 }, { id: "v37", duration: 75, price: 1150000 }, { id: "v38", duration: 90, price: 1350000 }, { id: "v39", duration: 120, price: 1850000 }] },
      { id: "s15", name: "Pregnant Treatment", slug: "pregnant-treatment", description: "Kỹ thuật truyền thống + tinh dầu thiên nhiên + đá nóng cho bà bầu", isVisible: true, variants: [{ id: "v40", duration: 60, price: 880000 }, { id: "v41", duration: 75, price: 1280000 }, { id: "v42", duration: 90, price: 1480000 }] },
      { id: "s16", name: "Children Care Therapy", slug: "children-care-therapy", description: "Kỹ thuật nhẹ nhàng + thảo dược, cải thiện tuần hoàn và vận động", isVisible: true, variants: [{ id: "v43", duration: 60, price: 720000 }, { id: "v44", duration: 75, price: 920000 }, { id: "v45", duration: 90, price: 1120000 }] },
    ],
  },
  "facial-treatment": {
    id: "cat5", slug: "facial-treatment", name: "Facial Treatment", order: 5,
    services: [
      { id: "s30", name: "Classic Facial", slug: "classic-facial", description: "Artistry skincare làm sạch sâu, cấp ẩm, săn chắc, làm sáng da — mọi loại da", isVisible: true, variants: [{ id: "v60", duration: 60, price: 990000 }] },
      { id: "s31", name: "Luxury Facial", slug: "luxury-facial", description: "Trị liệu chống lão hoá mạnh, plumping tức thì, tăng giữ ẩm — da trưởng thành", isVisible: true, variants: [{ id: "v61", duration: 60, price: 1190000 }] },
    ],
  },
  "foot-therapy": {
    id: "cat6", slug: "foot-therapy", name: "Foot Therapy", order: 6,
    services: [
      { id: "s40", name: "Foot Reflexology", slug: "foot-reflexology", description: "Kích thích đầu thần kinh liên kết nội tạng, giải phóng tắc nghẽn", isVisible: true, variants: [{ id: "v70", duration: 45, price: 660000 }, { id: "v71", duration: 60, price: 760000 }, { id: "v72", duration: 75, price: 860000 }] },
      { id: "s41", name: "Luxury Foot Massage", slug: "luxury-foot-massage", description: "Đá núi lửa + tre + bấm huyệt, giảm cơ cứng không khó chịu", isVisible: true, variants: [{ id: "v73", duration: 45, price: 850000 }, { id: "v74", duration: 60, price: 1050000 }, { id: "v75", duration: 75, price: 1250000 }] },
    ],
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "Exclusive":    { bg: "#fef3c7", color: "#92400e" },
  "Most Popular": { bg: "#d1fae5", color: "#065f46" },
  "Best Seller":  { bg: "#e0e7ff", color: "#3730a3" },
  "Most Favorite": { bg: "#fce7f3", color: "#9d174d" },
};

function formatPrice(p: number) {
  return (p / 1000).toLocaleString("vi-VN") + "k";
}

// ── Add/Edit service form ─────────────────────────────────────────────────────

interface ServiceFormProps {
  initial?: Partial<Service>;
  onSave: (s: Partial<Service>) => void;
  onCancel: () => void;
}

function ServiceForm({ initial, onSave, onCancel }: ServiceFormProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [badge, setBadge] = useState(initial?.badge ?? "");
  const [variants, setVariants] = useState<Variant[]>(initial?.variants ?? []);
  const [newDuration, setNewDuration] = useState("");
  const [newPrice, setNewPrice] = useState("");

  function addVariant() {
    const dur = parseInt(newDuration);
    const pr = parseInt(newPrice) * 1000;
    if (!dur || !pr) return;
    setVariants((prev) => [...prev, { id: `v_${Date.now()}`, duration: dur, price: pr }]);
    setNewDuration("");
    setNewPrice("");
  }

  function removeVariant(id: string) {
    setVariants((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <div
      className="rounded-2xl p-5"
      style={{ backgroundColor: "var(--color-cream)", border: "1.5px solid var(--color-sage-light)" }}
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2">
          <label className="text-xs tracking-widest uppercase block mb-1.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>Tên dịch vụ *</label>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ví dụ: Hanoi Signature Treatment"
            className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
            style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff", color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
          />
        </div>
        <div className="col-span-2">
          <label className="text-xs tracking-widest uppercase block mb-1.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>Mô tả</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            placeholder="Mô tả ngắn về dịch vụ..."
            className="w-full resize-none px-4 py-2.5 rounded-xl text-sm outline-none"
            style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff", color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
          />
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase block mb-1.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>Badge</label>
          <select
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
            style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff", color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
          >
            <option value="">Không có</option>
            <option>Exclusive</option>
            <option>Most Popular</option>
            <option>Best Seller</option>
            <option>Most Favorite</option>
          </select>
        </div>
      </div>

      {/* Variants */}
      <div className="mb-4">
        <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
          Biến thể (thời gian + giá)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {variants.map((v) => (
            <span
              key={v.id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
              style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
            >
              {v.duration}p · {formatPrice(v.price)}
              <button onClick={() => removeVariant(v.id)} className="hover:opacity-60 transition-opacity">
                <X size={10} strokeWidth={2} />
              </button>
            </span>
          ))}
          {variants.length === 0 && (
            <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>Chưa có biến thể</span>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            value={newDuration}
            onChange={(e) => setNewDuration(e.target.value)}
            placeholder="Phút (60)"
            className="w-28 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff", fontFamily: "var(--font-inter)" }}
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Giá (k)"
            className="w-28 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--color-sand)", backgroundColor: "#fff", fontFamily: "var(--font-inter)" }}
          />
          <button
            onClick={addVariant}
            className="px-3 py-2 rounded-lg text-sm transition-all hover:opacity-80"
            style={{ border: "1px solid var(--color-sage-light)", color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
          >
            + Thêm
          </button>
        </div>
      </div>

      {/* Form actions */}
      <div className="flex gap-2 justify-end pt-3" style={{ borderTop: "1px solid var(--color-sand)" }}>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-xl text-sm transition-all hover:bg-[var(--color-sand)]"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
        >
          Huỷ
        </button>
        <button
          onClick={() => onSave({ name, description, badge: badge || undefined, variants })}
          disabled={!name.trim()}
          className="px-5 py-2 rounded-xl text-sm transition-all hover:opacity-80 disabled:opacity-40"
          style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
        >
          {initial?.id ? "Lưu thay đổi" : "Tạo dịch vụ"}
        </button>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

function toSlug(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

export default function CategoryServicesPage() {
  const { slug } = useParams<{ slug: string }>();
  const catData = catalogData[slug];

  const [services, setServices] = useState<Service[]>(catData?.services ?? []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!catData) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
        <p
          className="text-lg mb-4"
          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-cormorant)" }}
        >
          Không tìm thấy danh mục "{slug}"
        </p>
        <Link
          href="/admin/services"
          className="text-sm hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
        >
          ← Quay lại danh mục
        </Link>
      </div>
    );
  }

  function addService(data: Partial<Service>) {
    if (!data.name) return;
    setServices((prev) => [
      ...prev,
      {
        id: `svc_${Date.now()}`,
        name: data.name!,
        slug: toSlug(data.name!),
        description: data.description ?? "",
        badge: data.badge,
        isVisible: true,
        variants: data.variants ?? [],
      },
    ]);
    setShowAddForm(false);
  }

  function saveEdit(id: string, data: Partial<Service>) {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, ...data, slug: toSlug(data.name ?? s.name) }
          : s
      )
    );
    setEditingId(null);
  }

  function toggleVisibility(id: string) {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isVisible: !s.isVisible } : s))
    );
  }

  function deleteService(id: string) {
    setServices((prev) => prev.filter((s) => s.id !== id));
    setDeletingId(null);
  }

  return (
    <div className="p-8 max-w-[1000px] mx-auto">

      {/* ── Breadcrumb ── */}
      <div
        className="flex items-center gap-2 mb-6 text-xs"
        style={{ fontFamily: "var(--font-inter)", color: "var(--color-muted)" }}
      >
        <Link href="/admin/services" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
          <ArrowLeft size={13} strokeWidth={1.5} />
          Danh mục
        </Link>
        <span>/</span>
        <span style={{ color: "var(--color-charcoal)" }}>{catData.name}</span>
      </div>

      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
          >
            Danh mục #{catData.order}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--color-charcoal)",
              lineHeight: 1.2,
              maxWidth: "600px",
            }}
          >
            {catData.name}
          </h1>
          <p
            className="mt-1 text-xs"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
          >
            /{catData.slug} · {services.length} dịch vụ
          </p>
        </div>
        <button
          onClick={() => { setShowAddForm(true); setEditingId(null); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:opacity-80 shrink-0"
          style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
        >
          <Plus size={14} strokeWidth={2} />
          Thêm dịch vụ
        </button>
      </div>

      {/* ── Add form ── */}
      {showAddForm && (
        <div className="mb-4">
          <ServiceForm onSave={addService} onCancel={() => setShowAddForm(false)} />
        </div>
      )}

      {/* ── Service list ── */}
      <div className="space-y-2">
        {services.length === 0 && !showAddForm && (
          <div className="py-20 text-center" style={{ border: "1px dashed var(--color-sand)", borderRadius: "1rem" }}>
            <p className="text-sm mb-4" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              Danh mục này chưa có dịch vụ nào.
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="text-sm px-4 py-2 rounded-xl transition-all hover:opacity-80"
              style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
            >
              Tạo dịch vụ đầu tiên
            </button>
          </div>
        )}

        {services.map((svc) => {
          const isExpanded = expandedId === svc.id;
          const isEditing = editingId === svc.id;
          const isDeleting = deletingId === svc.id;
          const badgeCfg = svc.badge ? BADGE_COLORS[svc.badge] : null;

          if (isEditing) {
            return (
              <div key={svc.id}>
                <ServiceForm
                  initial={svc}
                  onSave={(data) => saveEdit(svc.id, data)}
                  onCancel={() => setEditingId(null)}
                />
              </div>
            );
          }

          return (
            <div
              key={svc.id}
              className="rounded-2xl overflow-hidden transition-all"
              style={{
                backgroundColor: "#fff",
                border: isDeleting ? "1.5px solid #fca5a5" : "1px solid var(--color-sand)",
                opacity: svc.isVisible ? 1 : 0.6,
              }}
            >
              {/* Service row */}
              <div className="flex items-start gap-4 px-5 py-4">
                {/* Visibility indicator */}
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: svc.isVisible ? "var(--color-sage)" : "var(--color-muted)" }}
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p
                      className="font-medium"
                      style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                    >
                      {svc.name}
                    </p>
                    {badgeCfg && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: badgeCfg.bg, color: badgeCfg.color, fontFamily: "var(--font-inter)" }}
                      >
                        {svc.badge}
                      </span>
                    )}
                    {!svc.isVisible && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-sand)", color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                      >
                        Ẩn
                      </span>
                    )}
                  </div>

                  {/* Variants */}
                  {svc.variants.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {svc.variants.map((v) => (
                        <span
                          key={v.id}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            backgroundColor: "var(--color-cream)",
                            color: "var(--color-sage-dark)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {v.duration}p · {formatPrice(v.price)}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description (expandable) */}
                  {isExpanded && svc.description && (
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {svc.description}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0 mt-0.5">
                  {isDeleting ? (
                    <>
                      <span className="text-xs mr-1" style={{ color: "#dc2626", fontFamily: "var(--font-inter)" }}>Xoá?</span>
                      <button
                        onClick={() => deleteService(svc.id)}
                        className="px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-red-50"
                        style={{ border: "1px solid #fca5a5", color: "#dc2626", fontFamily: "var(--font-inter)" }}
                      >
                        Xác nhận
                      </button>
                      <button
                        onClick={() => setDeletingId(null)}
                        className="px-3 py-1.5 rounded-lg text-xs"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                      >
                        Huỷ
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Expand */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : svc.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)]"
                        title={isExpanded ? "Thu gọn" : "Xem mô tả"}
                      >
                        {isExpanded
                          ? <ChevronUp size={13} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                          : <ChevronDown size={13} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                        }
                      </button>

                      {/* Toggle visibility */}
                      <button
                        onClick={() => toggleVisibility(svc.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)]"
                        title={svc.isVisible ? "Ẩn dịch vụ" : "Hiện dịch vụ"}
                      >
                        {svc.isVisible
                          ? <Eye size={13} strokeWidth={1.5} style={{ color: "var(--color-sage)" }} />
                          : <EyeOff size={13} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                        }
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => { setEditingId(svc.id); setDeletingId(null); setShowAddForm(false); }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-cream)]"
                        title="Chỉnh sửa"
                      >
                        <Pencil size={13} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => { setDeletingId(svc.id); setEditingId(null); }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50"
                        title="Xoá dịch vụ"
                      >
                        <Trash2 size={13} strokeWidth={1.5} style={{ color: "#fca5a5" }} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
