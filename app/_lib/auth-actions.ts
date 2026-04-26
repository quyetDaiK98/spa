"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./session";

export async function loginAction(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return { error: "Server configuration error." };
  }

  if (email !== adminEmail || password !== adminPassword) {
    return { error: "Email hoặc mật khẩu không đúng." };
  }

  await createSession();
  redirect("/admin");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/admin/login");
}
