@AGENTS.md

# Zen Spa — Website Giới Thiệu Dịch Vụ Massage & Spa

## Tổng quan dự án

Website showcase giới thiệu sản phẩm và dịch vụ massage & spa cao cấp — clone chức năng và nội dung từ **hanoispa.vn**. Mục tiêu: tối giản, hiện đại, chuyên nghiệp, mobile-first.

---

## Tech Stack

| Layer     | Công nghệ                   |
| --------- | --------------------------- |
| Framework | Next.js 16 (App Router)     |
| Styling   | Tailwind CSS v4 + shadcn/ui |
| Database  | Supabase (PostgreSQL)       |
| ORM       | Prisma                      |
| Language  | TypeScript                  |

---

## Design System

### Bảng màu (Zen Spa Palette)

```css
--color-sage:       #5C7A5C   /* Xanh sage chính - CTA, accent */
--color-sage-dark:  #3D5440   /* Xanh dam - hover, heading */
--color-sage-light: #8FA88F   /* Xanh nhat - border, icon */
--color-cream:      #F5F0E8   /* Kem nen - section bg */
--color-sand:       #E8DFD0   /* Cat - card bg, divider */
--color-charcoal:   #2C2C2C   /* Chu chinh */
--color-muted:      #7A7A7A   /* Chu phu */
--color-white:      #FFFFFF
```

### Typography

- **Heading**: Serif (Cormorant Garamond hoac Playfair Display)
- **Body**: Sans-serif (Inter hoac Geist Sans)
- **Scale**: text-sm caption / text-base body / text-2xl den text-6xl heading

### Nguyen tac thiet ke

- Toi gian: nhieu whitespace, py-20 / py-32 cho section
- Arched shapes: rounded-[2rem] hoac rounded-full cho card/image
- Botanical motifs: icon la, hoa bang SVG inline hoac Lucide
- Grid can doi: 2-col / 3-col gap deu
- Mobile-first: breakpoint md: va lg:
- Khong dark mode — chi light mode

---

## Cau truc thu muc

```
app/
├── (marketing)/
│   ├── layout.tsx              # Shared Navbar + Footer
│   ├── page.tsx                # Trang chu
│   ├── about-us/page.tsx
│   ├── menus/
│   │   ├── page.tsx            # Tat ca dich vu
│   │   └── [slug]/page.tsx     # Chi tiet tung danh muc
│   ├── spa-etiquette/page.tsx
│   ├── contacts/page.tsx
│   └── booking/page.tsx
├── _components/
│   ├── ui/                     # shadcn components
│   ├── sections/               # Hero, Services, About, Testimonials, CTA
│   └── layout/                 # Navbar, Footer
├── _lib/
│   ├── supabase.ts
│   └── prisma.ts
├── _hooks/
├── globals.css
└── layout.tsx

prisma/
└── schema.prisma
```

---

## Navigation (theo hanoispa.vn)

| Label          | Route            |
| -------------- | ---------------- |
| Home           | /                |
| About Us       | /about-us        |
| Services       | /menus           |
| Contacts       | /contacts        |
| Book Now (CTA) | /booking         |

---

## Brand & Content (nguon: hanoispa.vn)

### Taglines

- "Indulge in the Art of True Wellness"
- "Where expert hands and serene spaces restore your energy"
- "Where Inner Peace Meets Holistic Wellness"
- "Your life is waiting. Fast, long-lasting relief is nearby."

### Mission

"Accompany every client on their journey toward physical and mental well-being, combining world-class techniques and Vietnam's traditional therapies."

### Core Values

Mindful rituals / Natural beauty / Healing touch / Holistic wellness

### Thong tin lien he

- Dia chi: 17 Hang Hom, Hoan Kiem, Ha Noi
- Dien thoai: +84 38910 3837
- Email: hanoispavn@gmail.com
- Gio mo cua: Thu 2 - CN, 8:00 - 1:00 (hom sau)

### Mang xa hoi

- Facebook: facebook.com/hanoispavn
- Instagram: instagram.com/hanoispavn
- YouTube: youtube.com/@hanoispavn
- TripAdvisor: listing rieng

---

## Danh muc & Dich vu (day du)

### 1. Hanoi Spa Signature Full Body Treatment

slug: hanoi-spa-signature-full-body-treatment

| Dich vu | Thoi gian | Gia (VND) | Badge |
|---|---|---|---|
| Hanoi Signature Treatment | 60/120/165 phut | 1.390k/2.700k/3.200k | Exclusive |
| Hanoi Unique Treatment | 60/75/90/120/165 phut | 1.290k/1.590k/1.890k/2.290k/3.000k | Most Popular |
| Luxury Four Hands Massage | 60/75/90/120/165 phut | 2.090k/2.690k/3.290k/4.290k/4.700k | |
| Special Four Hands Massage | 60/120 phut | 2.590k/5.340k | Best Seller |
| Volcanic Rock Treatment | 60/120 phut | 1.190k/2.740k | Most Favorite |
| Vietnamese Bamboo Treatment | — | — | |
| Herbal Treatment | — | — | |
| Bioelectric Treatment | — | — | |

Mo ta chi tiet:
- Hanoi Signature: ket hop Stone massage (da nui lua) + Bamboo + Herbal, can bang than kinh, thuc day tuan hoan
- Hanoi Unique: ket hop tre + thao duoc giam stress, bo sung khoang chat
- Luxury Four Hands: 2 tri lieu su dong bo voi dau thom, thu gian toan dien
- Special Four Hands: da nui lua + tre nong + tui thao duoc, hieu qua tri lieu tang cao
- Volcanic Rock: da nong tri lieu sau, giam co cung, cai thien tuan hoan

### 2. Basic Full Body Massage

slug: basic-full-body-massage

| Dich vu | Thoi gian | Gia (VND) |
|---|---|---|
| Vietnamese Massage | 60/75/90/120 phut | 750k/950k/1.250k/1.650k |
| Traditional Thai Massage | 60/75/90/120 phut | 750k/950k/1.250k/1.750k |
| Japanese Judo Therapy | 60/75/90/120 phut | 1.390k/1.690k/2.190k/2.690k |
| Swedish Massage | 60/75/90/120 phut | 740k/940k/1.140k/1.540k |
| Asian Massage | 60/75/90/120 phut | 950k/1.150k/1.350k/1.850k |
| Pregnant Treatment | 60/75/90 phut | 880k/1.280k/1.480k |
| Children Care Therapy | 60/75/90 phut | 720k/920k/1.120k |

Mo ta:
- Vietnamese: ky thuat bam huyet + dau thom, cai thien linh hoat, giai phong can thang
- Thai: bam doc kinh mach + gian co, phuc hoi nang luong
- Japanese Judo: tap trung mong/cot song/vai, cai thien tu the, tang mien dich
- Swedish: ap luc nhe den trung, an than kinh, ho tro giac ngu
- Asian: ket hop Thai + Vietnamese + Shiatsu Nhat, rejuvenate toan than
- Pregnant: ky thuat truyen thong + tinh dau thien nhien + da nong cho ba bau
- Children: ky thuat nhe nhang + thao duoc, cai thien tuan hoan va van dong

### 3. Body Skin Care

slug: body-skin-care

Body Scrubs (45 phut, 880k VND):
- Vietnamese Coconut Scrub: chong oxy hoa, chong lao hoa
- Oat Milk Moisturizing Body Scrub: mat ong + thao duoc + sua gao Sapa
- Dead Sea Salt Scrub: lam sach sau, bo sung khoang chat, giam mun
- Green Tea Scrub: giam tham, lam sang da

Body Wraps (45 phut, 990k VND):
- Coconut Wrap: duong am sau, dau dua nguyen chat
- Oat Body Wrap: bot yen mach am thuc day do mo hoi thai doc
- Dead Sea Detox Body Wrap: bun khoang khoang chat thai doc te bao

### 4. Back - Shoulder - Head Relaxation

slug: back-shoulder-head-relaxation

| Dich vu | Thoi gian | Gia (VND) |
|---|---|---|
| Back-Shoulder-Head Therapy | 30/45/60 phut | 580k/680k/780k |
| Gorgeous Treatment | 60/75/90 phut | 990k/1.290k/1.490k |
| Herbal Back-Shoulder-Head | 45/60/75/90 phut | 790k/890k/990k/1.390k |
| Volcanic Rock BSH | 45/60/75/90 phut | 790k/890k/990k/1.390k |
| Vietnamese Bamboo BSH | 45/60/75/90 phut | 790k/890k/990k/1.390k |
| Head Massage | 30/45 phut | 490k/590k |
| Hair Wash & Neck-Shoulder | 30/60 phut | 550k/880k |

Mo ta:
- BSH Therapy: ket hop Thai + deep tissue, giai phong co cang moi
- Gorgeous Treatment: da nui lua + tre + thao duoc, giam dau dau, tuan hoan
- Head Massage: dua tren nguyen ly chua lanh Ayurvedic 1000+ nam, ho tro mat ngu
- Hair Wash: lam sach tri lieu + massage co vai, nuoi duong da dau

### 5. Facial Treatment

slug: facial-treatment

| Dich vu | Thoi gian | Gia (VND) |
|---|---|---|
| Classic Facial (moi loai da) | 60 phut | 990k |
| Luxury Facial (da truong thanh) | 60 phut | 1.190k |

Mo ta:
- Classic: Artistry skincare lam sach sau, cap am, san chac, lam sang da
- Luxury: tri lieu chong lao hoa manh, plumping tuc thi, tang giu am

### 6. Foot Therapy

slug: foot-therapy

| Dich vu | Thoi gian | Gia (VND) |
|---|---|---|
| Foot Reflexology | 45/60/75 phut | 660k/760k/860k |
| Luxury Foot Massage | 45/60/75 phut | 850k/1.050k/1.250k |

Mo ta:
- Reflexology: kich thich dau than kinh lien ket noi tang, giai phong tac nghen
- Luxury: da nui lua + tre + bam huyet, giam co cung khong kho chiu

### 7. Hanoi Relaxing

slug: hanoi-relaxing

| Dich vu | Thoi gian | Gia (VND) |
|---|---|---|
| Jacuzzi / Herbal Bathtub (bon go Po Mu) | 15 phut | 580k |
| Herbal Steam | 15 phut | 380k |

Mo ta:
- Jacuzzi/Herbal Bath: truyen thong dao Do Do, 10+ loai thao moc quy, bon go Po Mu thu cong
  Loi ich: thai doc, giam dau khop, phuc hoi sau sinh, cai thien giac ngu
- Herbal Steam: nhiet do mo lo chan long, loai bo doc to
  Loi ich: tuan hoan, lam mem mo co, giam stress, ho hap, tang cuong hieu qua dieu tri

### 8. Special Packages

slug: hanoi-special-packages

| Goi | Thoi gian | Gia (VND) | Bao gom |
|---|---|---|---|
| Hanoi Signature Package | 270 phut | 7.200k | Special Four Hands 90' + Luxury Facial 60' + Scrub 45' + Wrap 45' + Steam 15' + Jacuzzi 15' |
| Romantic Honeymoon Luxury (cap doi) | 255 phut | 12.050k | Green Tea Scrub + Dead Sea Wrap + Four Hands 75' + Luxury Facial + Steam + Jacuzzi |
| Romantic Honeymoon (cap doi) | 210 phut | 6.300k | Green Tea Scrub + Vietnamese Massage 90' + Classic Facial + Steam |
| Vietnamese Package | 195 phut | 3.270k | Oat Scrub + Bamboo Treatment 75' + Classic Facial + Steam |
| Relaxation for Her | 210 phut | 3.700k | Coconut Scrub + Classic Facial + Herbal Treatment 75' + Steam + Jacuzzi |
| Relaxation for Him | 210 phut | 3.700k | Dead Sea Scrub + Volcanic Rock 75' + Classic Facial + Steam + Jacuzzi |

Tat ca packages kem banh ngot Viet Nam.

---

## Prisma Schema

```prisma
model ServiceCategory {
  id       String    @id @default(cuid())
  slug     String    @unique
  name     String
  order    Int
  services Service[]
}

model Service {
  id          String          @id @default(cuid())
  slug        String          @unique
  name        String
  description String
  benefits    String?
  badge       String?         // "Most Popular", "Best Seller", "Exclusive", "Most Favorite"
  categoryId  String
  category    ServiceCategory @relation(fields: [categoryId], references: [id])
  variants    ServiceVariant[]
  createdAt   DateTime        @default(now())
}

model ServiceVariant {
  id        String  @id @default(cuid())
  serviceId String
  service   Service @relation(fields: [serviceId], references: [id])
  duration  Int     // phut
  price     Decimal
  note      String? // "includes Herbal Steam", "includes Jacuzzi"
}

model Package {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  description String?
  duration    Int
  price       Decimal
  components  String   // mo ta cac phan
  target      String?  // "couple", "her", "him", "all"
  createdAt   DateTime @default(now())
}

model Booking {
  id        String    @id @default(cuid())
  name      String
  email     String
  phone     String
  message   String?
  serviceId String?
  packageId String?
  date      DateTime?
  status    String    @default("pending")
  createdAt DateTime  @default(now())
}

model Testimonial {
  id        String   @id @default(cuid())
  author    String
  content   String
  rating    Int
  avatarUrl String?
  source    String?  // "TripAdvisor", "Google", "Facebook"
  createdAt DateTime @default(now())
}
```

---

## Sections trang chu (thu tu)

1. Navbar: logo trai, nav links giua, "Book Now" CTA; mobile: hamburger -> Sheet
2. Hero: full-height, tagline serif lon, sub-tagline, 2 buttons (Book / Explore Services)
3. Mission / About snippet: 2-col, text trai, anh arched phai
4. Service Categories: 4-8 card grid, moi card: icon + ten danh muc + link
5. Featured Services: 3 dich vu noi bat (Hanoi Unique, Volcanic Rock, Four Hands)
6. Special Packages: 2-col grid packages voi gia
7. Hanoi Relaxing: Jacuzzi + Herbal Steam highlight
8. Testimonials: carousel quote
9. Booking CTA: nen sage, form nhanh (ten, phone, dich vu, ngay)
10. Footer: logo, links, dia chi, gio mo cua, mang xa hoi

---

## Quy tac bat buoc (MANDATORY)

### 1. Screenshot & So sanh sau moi thay doi lon

Sau moi thay doi lon (hoan thanh 1 section, thay doi layout, update design token), PHAI:

1. Chay dev server neu chua chay: `npm run dev`
2. Chup screenshot trang hien tai bang cong cu screenshot cua he thong
3. Dat screenshot vao `design/screenshots/[ten-section]-[yyyymmdd].png`
4. So sanh voi `design/design.jpg` ve:
   - Color palette (sage green, cream, sand)
   - Typography (serif heading, san-serif body)
   - Spacing & whitespace
   - Layout grid (2-col / 3-col)
   - Arched shapes va botanical elements
5. Neu co sai lech ro rang so voi design goc, sua truoc khi chuyen sang section tiep theo

### 2. Tat ca section PHAI co scroll animation

Moi section khi xuat hien trong viewport PHAI co animation. Su dung `framer-motion` lam thu vien chinh.

**Pattern chuan cho moi section:**

```tsx
// Wrapper dung lai cho tat ca section
"use client"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

// Dung trong section:
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
  <motion.h2 variants={fadeInUp}>...</motion.h2>
  <motion.p variants={fadeInUp}>...</motion.p>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>...</motion.div>
  ))}
</motion.section>
```

**Quy dinh animation theo tung loai element:**

| Element | Animation | Duration |
|---|---|---|
| Section heading | fadeInUp (y: 30) | 0.6s |
| Section subtitle | fadeInUp (y: 20), delay 0.1s | 0.5s |
| Card grid | stagger fadeInUp, stagger 0.15s | 0.5s moi card |
| Hero text | fadeInUp (y: 50) | 0.8s |
| Hero image | fadeIn (opacity only) | 1.0s |
| 2-col: text | slideInLeft (x: -40) | 0.7s |
| 2-col: image | slideInRight (x: 40) | 0.7s |
| CTA button | scale 0.9 -> 1, fadeIn | 0.4s |

**Cac component can "use client"** vi dung framer-motion:
- Tat ca section components trong `_components/sections/`
- Navbar (animation mo menu mobile)
- Testimonial carousel

**KHONG dung CSS animation thuan tuy** cho scroll effects — chi dung framer-motion de dam bao nhat quan.

---

## Quy uoc code

- Server Components mac dinh, "use client" chi khi can tuong tac
- Prisma chi dung server-side (Server Components, Route Handlers, Server Actions)
- Supabase: createServerClient phia server, createBrowserClient phia client
- Prisma client singleton trong _lib/prisma.ts
- Tailwind v4: cau hinh qua @theme block trong globals.css, khong can tailwind.config.js
- Anh dung next/image voi sizes prop
- Doc node_modules/next/dist/docs/ truoc khi dung bat ky Next.js API nao

---

## Lenh thuong dung

```bash
npm run dev           # Dev server
npm run build         # Production build
npm run lint          # ESLint
npx prisma generate   # Generate Prisma client
npx prisma db push    # Sync schema len DB
npx prisma studio     # GUI quan ly data
```

---

## Bien moi truong (.env.local)

```
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
