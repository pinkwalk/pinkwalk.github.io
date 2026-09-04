import { contactEmail, thisYearEvent } from "./event-data";

export interface PartnerEmailPayload {
  organizationName: string;
  contactPerson: string;
  designation?: string;
  contactNumber: string;
  email: string;
  partnershipType: string;
  contributionText: string;
  website?: string;
  inquiryId?: string;
}

/**
 * Sends a notification email to the PinkWalk organizing committee via Resend API.
 * Uses `VITE_RESEND_EMAIL_API` key configured in environment.
 */
export async function sendPartnerNotificationEmail(
  payload: PartnerEmailPayload,
): Promise<{ success: boolean; data?: any; error?: string }> {
  const apiKey = import.meta.env.VITE_RESEND_EMAIL_API || "";

  if (!apiKey || apiKey.includes("your_") || apiKey.trim() === "") {
    console.warn("[Email Service] VITE_RESEND_EMAIL_API is not configured.");
    return { success: false, error: "Resend API key not configured" };
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 16px;">
      <div style="background-color: #4A154B; padding: 20px; text-align: center; border-radius: 12px; margin-bottom: 20px;">
        <h2 style="color: #ffffff; margin: 0; font-size: 22px;">PinkWalk 2026 — New Partner Application</h2>
      </div>

      <p style="color: #374151; font-size: 15px;">A new partnership inquiry has been submitted via the website:</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb; width: 35%;">Organization</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(payload.organizationName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Contact Person</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(payload.contactPerson)} ${payload.designation ? `(${escapeHtml(payload.designation)})` : ""}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="tel:${escapeHtml(payload.contactNumber)}">${escapeHtml(payload.contactNumber)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Partnership Type</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #db2777;">${escapeHtml(payload.partnershipType.toUpperCase())}</td>
        </tr>
        ${
          payload.website
            ? `<tr>
                <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Website/Link</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="${escapeHtml(payload.website)}" target="_blank">${escapeHtml(payload.website)}</a></td>
              </tr>`
            : ""
        }
      </table>

      <div style="margin-top: 20px; padding: 15px; background: #fff5f7; border-left: 4px solid #db2777; border-radius: 4px;">
        <h4 style="margin: 0 0 8px 0; color: #9d174d; font-size: 14px;">Proposed Contribution Details:</h4>
        <p style="margin: 0; color: #374151; font-size: 14px; white-space: pre-wrap;">${escapeHtml(payload.contributionText)}</p>
      </div>

      <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center;">
        Inquiry Reference ID: <code>${payload.inquiryId || "N/A"}</code> | Event: ${thisYearEvent.title} (${thisYearEvent.date})
      </div>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "PinkWalk Partnership <onboarding@resend.dev>",
        to: [contactEmail],
        subject: `[PinkWalk Partner] New Application: ${payload.organizationName}`,
        html: htmlBody,
        reply_to: payload.email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("[Email Service] Resend API error:", data);
      return {
        success: false,
        error: data.message || `HTTP error ${res.status}`,
      };
    }

    console.log("[Email Service] Resend email dispatched successfully:", data);
    return { success: true, data };
  } catch (err) {
    console.error("[Email Service] Failed to send email via Resend:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
