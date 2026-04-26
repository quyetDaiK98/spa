"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/app/_lib/auth-actions";
import {
  LayoutDashboard,
  CalendarCheck,
  Layers,
  Package,
  Star,
  LogOut,
  ExternalLink,
} from "lucide-react";

const nav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Bookings", href: "/admin/bookings", icon: CalendarCheck, exact: false },
  { label: "Services", href: "/admin/services", icon: Layers, exact: false },
  { label: "Packages", href: "/admin/packages", icon: Package, exact: false },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star, exact: false },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      className="flex flex-col h-full w-60 shrink-0"
      style={{ backgroundColor: "var(--color-sage-dark)" }}
    >
      {/* Brand */}
      <div className="px-6 py-7 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2.5 mb-1">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse
                key={deg}
                cx="20" cy="10" rx="5" ry="9"
                fill="white" opacity="0.8"
                transform={`rotate(${deg} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="3" fill="white" opacity="0.8" />
          </svg>
          <span
            className="text-xl font-light italic tracking-wider text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            zen spa
          </span>
        </div>
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
        >
          Admin Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
        {nav.map(({ label, href, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150"
              style={{
                backgroundColor: active ? "rgba(255,255,255,0.12)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-inter)",
              }}
            >
              <Icon size={16} strokeWidth={active ? 2 : 1.5} />
              {label}
              {active && (
                <span
                  className="ml-auto w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--color-sage-light)" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t space-y-1" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 hover:bg-white/10"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}
        >
          <ExternalLink size={15} strokeWidth={1.5} />
          View Website
        </a>
        <form action={logoutAction}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 hover:bg-red-500/15"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}
          >
            <LogOut size={15} strokeWidth={1.5} />
            Đăng xuất
          </button>
        </form>
      </div>
    </aside>
  );
}
