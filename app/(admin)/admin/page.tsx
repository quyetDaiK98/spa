import { logoutAction } from "@/app/_lib/auth-actions";

export default function AdminPlaceholderPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-8"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--color-sage)", fontFamily: "var(--font-inter)" }}
        >
          Zen Spa Admin
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "3rem",
            fontWeight: 300,
            color: "var(--color-charcoal)",
          }}
        >
          Dashboard
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
        >
          Đăng nhập thành công. Dashboard đang được xây dựng.
        </p>
      </div>

      <form action={logoutAction}>
        <button
          type="submit"
          className="px-8 py-3 text-sm tracking-widest uppercase transition-all hover:opacity-80"
          style={{
            border: "1.5px solid var(--color-sage-dark)",
            color: "var(--color-sage-dark)",
            fontFamily: "var(--font-inter)",
          }}
        >
          Đăng xuất
        </button>
      </form>
    </div>
  );
}
