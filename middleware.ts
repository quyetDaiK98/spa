import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/_lib/session";

const LOGIN_PATH = "/admin/login";
const ADMIN_ROOT = "/admin";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("admin_session")?.value;
  const session = token ? await decrypt(token) : null;
  const isAuthenticated = !!session;

  // Already logged in → skip login page
  if (isAuthenticated && pathname === LOGIN_PATH) {
    return NextResponse.redirect(new URL(ADMIN_ROOT, request.url));
  }

  // Not logged in → redirect to login
  if (!isAuthenticated && pathname !== LOGIN_PATH) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
