// Supabase Edge Function: send-contact-email
// Receives contact-form submissions, persists them, and emails the site owner.
//
// Required secrets (set via `supabase secrets set <NAME>=<VALUE>`):
//   RESEND_API_KEY    Resend API key (https://resend.com/api-keys)
//   CONTACT_TO_EMAIL  Destination address (defaults to ethanmrubenstein@gmail.com)
//   CONTACT_FROM_EMAIL Verified sender on your Resend domain (e.g. contact@yourdomain.com)

// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const validate = (payload: any): ContactPayload | string => {
  if (!payload || typeof payload !== "object") return "Invalid payload";
  const firstName = String(payload.firstName ?? "").trim();
  const lastName = String(payload.lastName ?? "").trim();
  const email = String(payload.email ?? "").trim().toLowerCase();
  const phoneRaw = payload.phone == null ? "" : String(payload.phone).trim();
  const message = String(payload.message ?? "").trim();

  if (!firstName || firstName.length > 50) return "Invalid first name";
  if (!lastName || lastName.length > 50) return "Invalid last name";
  if (!email || email.length > 255 || !EMAIL_RE.test(email))
    return "Invalid email";
  if (phoneRaw.length > 20) return "Invalid phone";
  if (!message || message.length > 2000) return "Invalid message";

  return { firstName, lastName, email, phone: phoneRaw || undefined, message };
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const result = validate(body);
  if (typeof result === "string") {
    return jsonResponse({ error: result }, 400);
  }
  const data = result;

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const toEmail =
    Deno.env.get("CONTACT_TO_EMAIL") ?? "ethanmrubenstein@gmail.com";
  const fromEmail =
    Deno.env.get("CONTACT_FROM_EMAIL") ?? "onboarding@resend.dev";

  if (!supabaseUrl || !serviceKey) {
    return jsonResponse({ error: "Server misconfigured" }, 500);
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("cf-connecting-ip") ??
    null;

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  const { error: dbError } = await supabase.from("contact_messages").insert({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone ?? null,
    message: data.message,
    submitter_ip: ip,
  });

  if (dbError) {
    const friendly = /rate limit/i.test(dbError.message)
      ? "Too many submissions. Please try again later."
      : "Unable to save your message. Please try again.";
    return jsonResponse({ error: friendly }, 429);
  }

  if (!resendKey) {
    // Message is saved; email delivery is simply unavailable.
    return jsonResponse({ ok: true, emailed: false });
  }

  const subject = `New contact form: ${data.firstName} ${data.lastName}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
  `;
  const text = [
    `New contact form submission`,
    ``,
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    ``,
    `Message:`,
    data.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject,
        html,
        text,
      }),
    });

    if (!resendRes.ok) {
      return jsonResponse({ ok: true, emailed: false }, 200);
    }
  } catch {
    return jsonResponse({ ok: true, emailed: false }, 200);
  }

  return jsonResponse({ ok: true, emailed: true });
});
