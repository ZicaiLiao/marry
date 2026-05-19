import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-data";
import { Locale } from "@/lib/types";

type InquiryPayload = {
  locale: Locale;
  names: string;
  email: string;
  city: string;
  date: string;
  guestCount: string;
  budget: string;
  focus: string;
  note: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildSummaryRows(payload: InquiryPayload) {
  const labels =
    payload.locale === "zh"
      ? {
          names: "你们的称呼",
          email: "联系邮箱",
          city: "婚礼城市",
          date: "预计日期",
          guestCount: "宾客规模",
          budget: "预算范围",
          focus: "优先需求",
          note: "补充说明"
        }
      : {
          names: "Names",
          email: "Email",
          city: "City",
          date: "Date",
          guestCount: "Guest count",
          budget: "Budget",
          focus: "Priority",
          note: "Notes"
        };

  return Object.entries({
    [labels.names]: payload.names,
    [labels.email]: payload.email,
    [labels.city]: payload.city,
    [labels.date]: payload.date,
    [labels.guestCount]: payload.guestCount,
    [labels.budget]: payload.budget,
    [labels.focus]: payload.focus,
    [labels.note]: payload.note
  }).filter(([, value]) => value.trim().length > 0);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Marry <onboarding@resend.dev>";
  const toEmail = process.env.RESEND_TO_EMAIL ?? siteConfig.email;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 503 }
    );
  }

  const payload = (await request.json()) as InquiryPayload;

  if (!payload.names?.trim() || !payload.email?.trim()) {
    return NextResponse.json(
      { error: "names and email are required." },
      { status: 400 }
    );
  }

  const summaryRows = buildSummaryRows(payload);
  const subject =
    payload.locale === "zh"
      ? `Marry 新咨询 - ${payload.names}`
      : `New Marry Inquiry - ${payload.names}`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #33282c; line-height: 1.7;">
      <h2 style="margin-bottom: 12px;">${escapeHtml(subject)}</h2>
      <p style="margin-top: 0;">
        ${payload.locale === "zh" ? "收到一条来自网站的新咨询。" : "A new inquiry has been submitted through the website."}
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tbody>
          ${summaryRows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="width: 160px; padding: 10px 0; border-bottom: 1px solid #ead6c8; color: #6f5e63; vertical-align: top;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ead6c8;">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  const text = summaryRows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject,
      html,
      text
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();

    return NextResponse.json(
      { error: errorText || "Failed to send inquiry." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
