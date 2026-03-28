import axios from "axios";
import { NextResponse } from "next/server";
import { portfolioAssistantPrompt } from "@/lib/portfolio-context";

const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";

type IncomingChatMessage = {
  role?: unknown;
  content?: unknown;
};

type ChatRequestBody = {
  message?: unknown;
  conversationHistory?: unknown;
};

type GeminiMessage = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

function getTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeHistory(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as Array<{ role: "user" | "assistant"; content: string }>;
  }

  return value
    .map((entry) => {
      const item = entry as IncomingChatMessage;
      const role = item.role === "assistant" ? "assistant" : item.role === "user" ? "user" : null;
      const content = getTrimmedString(item.content).slice(0, 2000);

      if (!role || !content) {
        return null;
      }

      return { role, content };
    })
    .filter((entry): entry is { role: "user" | "assistant"; content: string } => entry !== null)
    .slice(-8);
}

function toGeminiRole(role: "user" | "assistant"): GeminiMessage["role"] {
  return role === "assistant" ? "model" : "user";
}

function extractGeminiText(payload: any) {
  const parts = payload?.candidates?.[0]?.content?.parts;

  if (!Array.isArray(parts)) {
    return "";
  }

  return parts
    .map((part: { text?: unknown }) => (typeof part?.text === "string" ? part.text : ""))
    .join("")
    .trim();
}

function getGeminiErrorMessage(payload: any) {
  if (typeof payload?.error?.message === "string" && payload.error.message.trim()) {
    return payload.error.message.trim();
  }

  if (typeof payload?.promptFeedback?.blockReason === "string" && payload.promptFeedback.blockReason.trim()) {
    return `The request was blocked by Gemini: ${payload.promptFeedback.blockReason.trim()}.`;
  }

  return "The chat service is unavailable right now.";
}

export async function POST(request: Request) {  
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini is not configured yet. Add GEMINI_API_KEY in .env.local." },
      { status: 500 },
    );
  }

  let payload: ChatRequestBody;

  try {
    payload = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const message = getTrimmedString(payload.message).slice(0, 2000);

  if (!message) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  const history = normalizeHistory(payload.conversationHistory);
  const contents: GeminiMessage[] = history.map((entry) => ({
    role: toGeminiRole(entry.role),
    parts: [{ text: entry.content }],
  }));

  const lastHistoryEntry = history.at(-1);

  if (!lastHistoryEntry || lastHistoryEntry.role !== "user" || lastHistoryEntry.content !== message) {
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });
  }

  const model = process.env.GEMINI_MODEL?.trim() || DEFAULT_GEMINI_MODEL;
  try {
    const geminiResponse = await axios.post(
      `${GEMINI_BASE_URL}/${encodeURIComponent(model)}:generateContent`,
      {
        system_instruction: {
          parts: [{ text: portfolioAssistantPrompt }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          topP: 0.9,
          maxOutputTokens: 400,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        timeout: 15000,
      },
    );

    const responseText = extractGeminiText(geminiResponse.data);

    if (!responseText) {
      return NextResponse.json(
        { error: "Gemini did not return a response." },
        { status: 502 },
      );
    }

    return NextResponse.json({ response: responseText });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Gemini chat request failed:", error.response?.data ?? error.message);

      return NextResponse.json(
        { error: getGeminiErrorMessage(error.response?.data) },
        { status: 502 },
      );
    }

    console.error("Unexpected Gemini chat error:", error);

    return NextResponse.json(
      { error: "The chat service is unavailable right now." },
      { status: 500 },
    );
  }
}
