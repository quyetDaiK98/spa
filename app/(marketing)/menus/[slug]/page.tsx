"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type Variant = { duration: number; price: string; note?: string };
type Service = { name: string; badge?: string; desc: string; variants: Variant[] };

const catalogData: Record<string, { title: string; subtitle: string; services: Service[] }> = {
  "hanoi-spa-signature-full-body-treatment": {
    title: "Hanoi Spa Signature\nFull Body Treatment",
    subtitle: "Liệu pháp độc quyền kết hợp Stone massage, Bamboo và Herbal — cân bằng thần kinh, thúc đẩy tuần hoàn.",
    services: [
      {
        name: "Hanoi Signature Treatment",
        badge: "Exclusive",
        desc: "Kết hợp Stone massage (đá núi lửa) + Bamboo + Herbal, cân bằng thần kinh, thúc đẩy tuần hoàn.",
        variants: [
          { duration: 60, price: "1.390.000" },
          { duration: 120, price: "2.700.000" },
          { duration: 165, price: "3.200.000" },
        ],
      },
      {
        name: "Hanoi Unique Treatment",
        badge: "Most Popular",
        desc: "Kết hợp tre + thảo dược giảm stress, bổ sung khoáng chất cho cơ thể.",
        variants: [
          { duration: 60, price: "1.290.000" },
          { duration: 75, price: "1.590.000" },
          { duration: 90, price: "1.890.000" },
          { duration: 120, price: "2.290.000" },
          { duration: 165, price: "3.000.000" },
        ],
      },
      {
        name: "Luxury Four Hands Massage",
        badge: undefined,
        desc: "2 trị liệu sư đồng bộ với dầu thơm, thư giãn toàn diện và trải nghiệm liệu pháp biến đổi.",
        variants: [
          { duration: 60, price: "2.090.000" },
          { duration: 75, price: "2.690.000" },
          { duration: 90, price: "3.290.000" },
          { duration: 120, price: "4.290.000" },
          { duration: 165, price: "4.700.000" },
        ],
      },
      {
        name: "Special Four Hands Massage",
        badge: "Best Seller",
        desc: "Đá núi lửa + tre nóng + túi thảo dược, hiệu quả trị liệu tăng cao.",
        variants: [
          { duration: 60, price: "2.590.000" },
          { duration: 120, price: "5.340.000" },
        ],
      },
      {
        name: "Volcanic Rock Treatment",
        badge: "Most Favourite",
        desc: "Đá nóng trị liệu sâu, giảm cơ cứng, cải thiện tuần hoàn.",
        variants: [
          { duration: 60, price: "1.190.000" },
          { duration: 120, price: "2.740.000" },
        ],
      },
      {
        name: "Vietnamese Bamboo Treatment",
        badge: undefined,
        desc: "Kỹ thuật tre truyền thống, tác động sâu vào mô cơ.",
        variants: [],
      },
      {
        name: "Herbal Treatment",
        badge: undefined,
        desc: "Thảo dược thiên nhiên kết hợp massage trị liệu.",
        variants: [],
      },
      {
        name: "Bioelectric Treatment",
        badge: undefined,
        desc: "Liệu pháp điện sinh học hiện đại tăng cường phục hồi.",
        variants: [],
      },
    ],
  },
  "basic-full-body-massage": {
    title: "Basic Full Body\nMassage",
    subtitle: "Các kỹ thuật massage truyền thống từ khắp châu Á — phục hồi toàn diện, linh hoạt lựa chọn.",
    services: [
      {
        name: "Vietnamese Massage",
        desc: "Kỹ thuật bấm huyệt + dầu thơm, cải thiện linh hoạt, giải phóng căng thẳng.",
        variants: [
          { duration: 60, price: "750.000" },
          { duration: 75, price: "950.000" },
          { duration: 90, price: "1.250.000" },
          { duration: 120, price: "1.650.000" },
        ],
      },
      {
        name: "Traditional Thai Massage",
        desc: "Bấm dọc kinh mạch + giãn cơ, phục hồi năng lượng.",
        variants: [
          { duration: 60, price: "750.000" },
          { duration: 75, price: "950.000" },
          { duration: 90, price: "1.250.000" },
          { duration: 120, price: "1.750.000" },
        ],
      },
      {
        name: "Japanese Judo Therapy",
        desc: "Tập trung mông/cột sống/vai, cải thiện tư thế, tăng miễn dịch.",
        variants: [
          { duration: 60, price: "1.390.000" },
          { duration: 75, price: "1.690.000" },
          { duration: 90, price: "2.190.000" },
          { duration: 120, price: "2.690.000" },
        ],
      },
      {
        name: "Swedish Massage",
        desc: "Áp lực nhẹ đến trung, an thần kinh, hỗ trợ giấc ngủ.",
        variants: [
          { duration: 60, price: "740.000" },
          { duration: 75, price: "940.000" },
          { duration: 90, price: "1.140.000" },
          { duration: 120, price: "1.540.000" },
        ],
      },
      {
        name: "Asian Massage",
        desc: "Kết hợp Thai + Vietnamese + Shiatsu Nhật, rejuvenate toàn thân.",
        variants: [
          { duration: 60, price: "950.000" },
          { duration: 75, price: "1.150.000" },
          { duration: 90, price: "1.350.000" },
          { duration: 120, price: "1.850.000" },
        ],
      },
      {
        name: "Pregnant Treatment",
        desc: "Kỹ thuật truyền thống + tinh dầu thiên nhiên + đá nóng cho bà bầu.",
        variants: [
          { duration: 60, price: "880.000" },
          { duration: 75, price: "1.280.000" },
          { duration: 90, price: "1.480.000" },
        ],
      },
      {
        name: "Children Care Therapy",
        desc: "Kỹ thuật nhẹ nhàng + thảo dược, cải thiện tuần hoàn và vận động.",
        variants: [
          { duration: 60, price: "720.000" },
          { duration: 75, price: "920.000" },
          { duration: 90, price: "1.120.000" },
        ],
      },
    ],
  },
  "body-skin-care": {
    title: "Body\nSkin Care",
    subtitle: "Scrubs và Wraps cao cấp với nguyên liệu thiên nhiên — làm mới và nuôi dưỡng làn da từ sâu bên trong.",
    services: [
      {
        name: "Vietnamese Coconut Scrub",
        desc: "Chống oxy hóa, chống lão hóa với dầu dừa nguyên chất Việt Nam.",
        variants: [{ duration: 45, price: "880.000" }],
      },
      {
        name: "Oat Milk Moisturizing Body Scrub",
        desc: "Mật ong + thảo dược + sữa gạo Sapa — dưỡng ẩm sâu và làm sáng da.",
        variants: [{ duration: 45, price: "880.000" }],
      },
      {
        name: "Dead Sea Salt Scrub",
        desc: "Làm sạch sâu, bổ sung khoáng chất, giảm mụn.",
        variants: [{ duration: 45, price: "880.000" }],
      },
      {
        name: "Green Tea Scrub",
        desc: "Giảm thâm, làm sáng da với chiết xuất trà xanh.",
        variants: [{ duration: 45, price: "880.000" }],
      },
      {
        name: "Coconut Wrap",
        desc: "Dưỡng ẩm sâu với dầu dừa nguyên chất.",
        variants: [{ duration: 45, price: "990.000" }],
      },
      {
        name: "Oat Body Wrap",
        desc: "Bột yến mạch ấm thúc đẩy đổ mồ hôi thải độc.",
        variants: [{ duration: 45, price: "990.000" }],
      },
      {
        name: "Dead Sea Detox Body Wrap",
        desc: "Bùn khoáng khoáng chất thải độc tế bào.",
        variants: [{ duration: 45, price: "990.000" }],
      },
    ],
  },
  "back-shoulder-head-relaxation": {
    title: "Back · Shoulder\nHead Relaxation",
    subtitle: "Liệu pháp chuyên sâu cho lưng, vai và đầu — giải phóng cơ căng mỏi và cải thiện tuần hoàn não.",
    services: [
      {
        name: "Back-Shoulder-Head Therapy",
        desc: "Kết hợp Thai + deep tissue, giải phóng cơ căng mỏi.",
        variants: [
          { duration: 30, price: "580.000" },
          { duration: 45, price: "680.000" },
          { duration: 60, price: "780.000" },
        ],
      },
      {
        name: "Gorgeous Treatment",
        desc: "Đá núi lửa + tre + thảo dược, giảm đau đầu, tăng tuần hoàn.",
        variants: [
          { duration: 60, price: "990.000" },
          { duration: 75, price: "1.290.000" },
          { duration: 90, price: "1.490.000" },
        ],
      },
      {
        name: "Herbal Back-Shoulder-Head",
        desc: "Túi thảo dược nóng kết hợp massage sâu.",
        variants: [
          { duration: 45, price: "790.000" },
          { duration: 60, price: "890.000" },
          { duration: 75, price: "990.000" },
          { duration: 90, price: "1.390.000" },
        ],
      },
      {
        name: "Volcanic Rock BSH",
        desc: "Đá nóng núi lửa trị liệu sâu vùng lưng vai cổ.",
        variants: [
          { duration: 45, price: "790.000" },
          { duration: 60, price: "890.000" },
          { duration: 75, price: "990.000" },
          { duration: 90, price: "1.390.000" },
        ],
      },
      {
        name: "Vietnamese Bamboo BSH",
        desc: "Tre Việt Nam kỹ thuật truyền thống vùng lưng vai cổ.",
        variants: [
          { duration: 45, price: "790.000" },
          { duration: 60, price: "890.000" },
          { duration: 75, price: "990.000" },
          { duration: 90, price: "1.390.000" },
        ],
      },
      {
        name: "Head Massage",
        desc: "Dựa trên nguyên lý chữa lành Ayurvedic 1000+ năm, hỗ trợ mất ngủ.",
        variants: [
          { duration: 30, price: "490.000" },
          { duration: 45, price: "590.000" },
        ],
      },
      {
        name: "Hair Wash & Neck-Shoulder",
        desc: "Làm sạch trị liệu + massage cổ vai, nuôi dưỡng da đầu.",
        variants: [
          { duration: 30, price: "550.000" },
          { duration: 60, price: "880.000" },
        ],
      },
    ],
  },
  "facial-treatment": {
    title: "Facial\nTreatment",
    subtitle: "Chăm sóc da mặt chuyên sâu với dòng Artistry skincare — làm sạch, cấp ẩm, săn chắc và chống lão hóa.",
    services: [
      {
        name: "Classic Facial",
        desc: "Artistry skincare làm sạch sâu, cấp ẩm, săn chắc, làm sáng da. Phù hợp mọi loại da.",
        variants: [{ duration: 60, price: "990.000" }],
      },
      {
        name: "Luxury Facial",
        desc: "Trị liệu chống lão hóa mạnh, plumping tức thì, tăng giữ ẩm. Dành cho da trưởng thành.",
        variants: [{ duration: 60, price: "1.190.000" }],
      },
    ],
  },
  "foot-therapy": {
    title: "Foot\nTherapy",
    subtitle: "Kích thích đầu thần kinh, giải phóng tắc nghẽn nội tạng — phục hồi năng lượng từ đôi bàn chân.",
    services: [
      {
        name: "Foot Reflexology",
        desc: "Kích thích đầu thần kinh liên kết nội tạng, giải phóng tắc nghẽn.",
        variants: [
          { duration: 45, price: "660.000" },
          { duration: 60, price: "760.000" },
          { duration: 75, price: "860.000" },
        ],
      },
      {
        name: "Luxury Foot Massage",
        desc: "Đá núi lửa + tre + bấm huyệt, giảm cơ cứng không khó chịu.",
        variants: [
          { duration: 45, price: "850.000" },
          { duration: 60, price: "1.050.000" },
          { duration: 75, price: "1.250.000" },
        ],
      },
    ],
  },
  "hanoi-relaxing": {
    title: "Hanoi\nRelaxing",
    subtitle: "Jacuzzi gỗ Pơ Mu và Herbal Steam với 10+ loại thảo mộc quý — thải độc, phục hồi, thư giãn sâu.",
    services: [
      {
        name: "Jacuzzi / Herbal Bathtub",
        desc: "Truyền thống dào Đỏ, 10+ loại thảo mộc quý, bồn gỗ Pơ Mu thủ công. Lợi ích: thải độc, giảm đau khớp, phục hồi sau sinh, cải thiện giấc ngủ.",
        variants: [{ duration: 15, price: "580.000" }],
      },
      {
        name: "Herbal Steam",
        desc: "Nhiệt độ mở lỗ chân lông, loại bỏ độc tố. Lợi ích: tuần hoàn, làm mềm mô cơ, giảm stress, hô hấp, tăng cường hiệu quả điều trị.",
        variants: [{ duration: 15, price: "380.000" }],
      },
    ],
  },
  "hanoi-special-packages": {
    title: "Special\nPackages",
    subtitle: "Gói trải nghiệm toàn diện — kết hợp nhiều dịch vụ để tối đa hóa lợi ích phục hồi.",
    services: [
      {
        name: "Hanoi Signature Package",
        desc: "Special Four Hands 90' + Luxury Facial 60' + Scrub 45' + Wrap 45' + Steam 15' + Jacuzzi 15'. Kèm bánh ngọt Việt Nam.",
        variants: [{ duration: 270, price: "7.200.000" }],
      },
      {
        name: "Romantic Honeymoon Luxury",
        desc: "Cho cặp đôi: Green Tea Scrub + Dead Sea Wrap + Four Hands 75' + Luxury Facial + Steam + Jacuzzi. Kèm bánh ngọt.",
        variants: [{ duration: 255, price: "12.050.000", note: "cho 2 người" }],
      },
      {
        name: "Romantic Honeymoon",
        desc: "Cho cặp đôi: Green Tea Scrub + Vietnamese Massage 90' + Classic Facial + Steam. Kèm bánh ngọt.",
        variants: [{ duration: 210, price: "6.300.000", note: "cho 2 người" }],
      },
      {
        name: "Vietnamese Package",
        desc: "Oat Scrub + Bamboo Treatment 75' + Classic Facial + Steam. Kèm bánh ngọt.",
        variants: [{ duration: 195, price: "3.270.000" }],
      },
      {
        name: "Relaxation for Her",
        desc: "Coconut Scrub + Classic Facial + Herbal Treatment 75' + Steam + Jacuzzi. Kèm bánh ngọt.",
        variants: [{ duration: 210, price: "3.700.000" }],
      },
      {
        name: "Relaxation for Him",
        desc: "Dead Sea Scrub + Volcanic Rock 75' + Classic Facial + Steam + Jacuzzi. Kèm bánh ngọt.",
        variants: [{ duration: 210, price: "3.700.000" }],
      },
    ],
  },
};

export default function MenuSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = catalogData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", color: "var(--color-charcoal)" }}>
          Không tìm thấy dịch vụ
        </p>
        <Link
          href="/menus"
          className="text-sm tracking-widest uppercase"
          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
        >
          ← Quay lại Menu
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--color-white)" }}>
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-40 pb-20 px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-sage-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-4">
            <Link
              href="/menus"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Services
            </Link>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-white mb-6 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Services list */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {data.services.map((svc) => (
              <motion.div
                key={svc.name}
                variants={fadeUp}
                className="rounded-[1.5rem] p-7 flex flex-col gap-4"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {svc.badge && (
                      <span
                        className="inline-block text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: "var(--color-sage)", color: "#fff", fontFamily: "var(--font-inter)" }}
                      >
                        {svc.badge}
                      </span>
                    )}
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "var(--color-charcoal)",
                        lineHeight: 1.2,
                      }}
                    >
                      {svc.name}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {svc.desc}
                </p>

                {svc.variants.length > 0 && (
                  <div
                    className="flex flex-wrap gap-2 pt-3 border-t"
                    style={{ borderColor: "var(--color-sand)" }}
                  >
                    {svc.variants.map((v) => (
                      <div
                        key={v.duration}
                        className="flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ backgroundColor: "var(--color-sand)" }}
                      >
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                        >
                          {v.duration}&apos;
                          {v.note && <span className="ml-1 opacity-60">({v.note})</span>}
                        </span>
                        <span className="w-px h-3 opacity-30" style={{ backgroundColor: "var(--color-muted)" }} />
                        <span
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "var(--color-sage-dark)",
                          }}
                        >
                          {v.price}đ
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {svc.variants.length === 0 && (
                  <p
                    className="text-xs tracking-widest uppercase pt-3 border-t"
                    style={{ color: "var(--color-sage-light)", fontFamily: "var(--font-inter)", borderColor: "var(--color-sand)" }}
                  >
                    Liên hệ để biết giá
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Book CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="py-20 px-6 lg:px-12 text-center"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 300,
              color: "var(--color-charcoal)",
            }}
          >
            Sẵn sàng trải nghiệm?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Đặt lịch ngay hôm nay và để chúng tôi chăm sóc bạn.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-9 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--color-sage-dark)", color: "#fff", fontFamily: "var(--font-inter)" }}
            >
              Đặt lịch ngay
            </Link>
            <Link
              href="/menus"
              className="inline-flex items-center justify-center px-9 py-4 text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-sage/5"
              style={{ borderColor: "var(--color-sage-light)", color: "var(--color-sage-dark)", fontFamily: "var(--font-inter)" }}
            >
              Xem tất cả dịch vụ
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
