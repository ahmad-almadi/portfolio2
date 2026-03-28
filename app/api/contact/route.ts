import axios from "axios";
import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const FALLBACK_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const FALLBACK_TO_EMAIL = "ahmadalmadi2005@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function getTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        { error: "Contact email is not configured yet." },
        { status: 500 },
      );
    }

    let payload: ContactRequestBody;

    try {
      payload = (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    const name = getTrimmedString(payload.name).slice(0, 120);
    const email = getTrimmedString(payload.email).toLowerCase().slice(0, 320);
    const message = getTrimmedString(payload.message).slice(0, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL?.trim() || FALLBACK_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL?.trim() || FALLBACK_TO_EMAIL;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const resendResponse = await axios.post(
      RESEND_API_URL,
      {
        from,
        to: [to],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <h2 style="margin-bottom: 16px;">New portfolio message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          </div>
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "User-Agent": "ahmad-portfolio/1.0",
        },
        timeout: 15000,
      },
    );

    return NextResponse.json({
      ok: true,
      id: resendResponse.data?.id ?? null,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const resendMessage =
        typeof error.response?.data?.message === "string" &&
        error.response.data.message.trim()
          ? error.response.data.message.trim()
          : typeof error.response?.data?.error?.message === "string" &&
              error.response.data.error.message.trim()
            ? error.response.data.error.message.trim()
            : null;

      console.error("Resend email send failed:", error.response?.data ?? error.message);

      return NextResponse.json(
        {
          error:
            resendMessage ||
            "Could not send the message right now. Please check your Resend sender settings.",
        },
        { status: 502 },
      );
    }

    console.error("Unexpected contact route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending the message." },
      { status: 500 },
    );
  }
}
