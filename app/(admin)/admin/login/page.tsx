"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/_lib/auth-actions";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-sage-dark)" }}
    >
      {/* Background botanical SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -bottom-20 -right-20 opacity-5"
          width="600"
          height="600"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path d="M200 380 Q280 260 200 140 Q120 260 200 380Z" fill="white" />
          <path d="M200 20 Q280 140 200 260 Q120 140 200 20Z" fill="white" />
          <path d="M20 200 Q140 280 200 200 Q140 120 20 200Z" fill="white" />
          <path d="M380 200 Q260 280 200 200 Q260 120 380 200Z" fill="white" />
          <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute -top-20 -left-20 opacity-5"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.7" />
          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <ellipse
                  key={deg}
                  cx="20"
                  cy="10"
                  rx="5"
                  ry="9"
                  fill="white"
                  opacity="0.8"
                  transform={`rotate(${deg} 20 20)`}
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="white" opacity="0.8" />
            </svg>
            <span
              className="text-3xl font-light italic tracking-wider text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              zen spa
            </span>
          </div>
          <p
            className="text-xs tracking-[0.35em] uppercase text-white/40"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Admin Portal
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-[1.5rem] p-8 lg:p-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h1
            className="text-white mb-2 text-2xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Đăng nhập
          </h1>
          <p
            className="text-sm text-white/45 mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Nhập thông tin quản trị viên để tiếp tục
          </p>

          <form action={action} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs tracking-[0.18em] uppercase text-white/50 mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                // type="email"
                required
                // autoComplete="email"
                // placeholder="admin@zenspa.vn"
                className="w-full px-4 py-3.5 text-sm rounded-xl outline-none transition-all duration-200 text-white placeholder-white/25 focus:ring-1 focus:ring-white/30"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  fontFamily: "var(--font-inter)",
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs tracking-[0.18em] uppercase text-white/50 mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 pr-12 text-sm rounded-xl outline-none transition-all duration-200 text-white placeholder-white/25 focus:ring-1 focus:ring-white/30"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(255,255,255,0.12)",
                    fontFamily: "var(--font-inter)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 hover:text-white/70 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {state?.error && (
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: "rgba(220,53,69,0.15)",
                  border: "1px solid rgba(220,53,69,0.3)",
                  color: "#ff8a8a",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {state.error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 rounded-xl"
              style={{
                backgroundColor: "var(--color-white)",
                color: "var(--color-sage-dark)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {isPending && <Loader2 size={15} className="animate-spin" />}
              {isPending ? "Đang xác thực..." : "Đăng nhập"}
            </button>
          </form>
        </div>

        <p
          className="text-center text-xs text-white/25 mt-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Zen Spa Admin · Chỉ dành cho quản trị viên
        </p>
      </div>
    </div>
  );
}
