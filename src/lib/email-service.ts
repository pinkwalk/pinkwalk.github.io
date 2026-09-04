import { createServerFn } from "@tanstack/react-start";
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
 * Server Function: Executes exclusively on the server.
 * Reads RESEND_API_KEY / VITE_RESEND_EMAIL_API without exposing secrets to client JS bundle.
 * Protected by TanStack Start CSRF middleware.
 */
export const sendPartnerNotificationEmailServer = createServerFn({
  method: "POST",
})
  .validator((data: PartnerEmailPayload) => {
    // Input validation & sanitization check
    if (!data.organizationName || data.organizationName.trim().length < 2) {
      throw new Error("Organization Name is required");
    }
    if (!data.contactPerson || data.contactPerson.trim().length < 2) {
      throw new Error("Contact Person is required");
    }
    if (!data.email || !data.email.includes("@")) {
      throw new Error("Valid email address is required");
    }
    if (!data.contactNumber || data.contactNumber.trim().length < 6) {
      throw new Error("Valid contact phone number is required");
    }
    if (!data.contributionText || data.contributionText.trim().length < 5) {
      throw new Error("Contribution details are required");
    }
    return data;
  })
  .handler(async ({ data }): Promise<{ success: boolean; id?: string; error?: string }> => {
    // Server-side environment key resolution (Server process.env prioritized over VITE_ bundle)
    const apiKey =
      process.env.RESEND_API_KEY ||
      process.env.VITE_RESEND_EMAIL_API ||
      import.meta.env.VITE_RESEND_EMAIL_API ||
      "";

    if (!apiKey || apiKey.includes("your_") || apiKey.trim() === "") {
      console.warn("[Server Email] RESEND_API_KEY is missing on server.");
      return { success: false, error: "Resend API key not configured on server" };
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 16px;">
        <div style="background-color: #4A154B; padding: 20px; text-align: center; border-radius: 12px; margin-bottom: 20px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">PinkWalk 2026 — New Partner Application</h2>
        </div>

        <p style="color: #374151; font-size: 15px;">A new partnership inquiry has been submitted via the website:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb; width: 35%;">Organization</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(data.organizationName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Contact Person</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(data.contactPerson)} ${data.designation ? `(${escapeHtml(data.designation)})` : ""}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Phone</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="tel:${escapeHtml(data.contactNumber)}">${escapeHtml(data.contactNumber)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Partnership Type</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #db2777;">${escapeHtml(data.partnershipType.toUpperCase())}</td>
          </tr>
          ${
            data.website
              ? `<tr>
                  <td style="padding: 8px 12px; font-weight: bold; background: #f9fafb; border: 1px solid #e5e7eb;">Website/Link</td>
                  <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><a href="${escapeHtml(data.website)}" target="_blank">${escapeHtml(data.website)}</a></td>
                </tr>`
              : ""
          }
        </table>

        <div style="margin-top: 20px; padding: 15px; background: #fff5f7; border-left: 4px solid #db2777; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #9d174d; font-size: 14px;">Proposed Contribution Details:</h4>
          <p style="margin: 0; color: #374151; font-size: 14px; white-space: pre-wrap;">${escapeHtml(data.contributionText)}</p>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center;">
          Inquiry Reference ID: <code>${data.inquiryId || "N/A"}</code> | Event: ${thisYearEvent.title} (${thisYearEvent.date})
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
          subject: `[PinkWalk Partner] New Application: ${data.organizationName}`,
          html: htmlBody,
          reply_to: data.email,
        }),
      });

      const resData = await res.json();

      if (!res.ok) {
        console.error("[Server Email] Resend API error:", resData);
        return {
          success: false,
          error: resData.message || `HTTP error ${res.status}`,
        };
      }

      console.log("[Server Email] Resend notification dispatched successfully:", resData.id);
      return { success: true, id: resData.id };
    } catch (err) {
      console.error("[Server Email] Failed to send email via Resend:", err);
      return {
        success: false,
        error: err instanceof Error ? err.message : "Network error",
      };
    }
  });

/**
 * Public dispatch wrapper called by application code.
 */
export async function sendPartnerNotificationEmail(
  payload: PartnerEmailPayload,
): Promise<{ success: boolean; error?: string }> {
  try {
    return await sendPartnerNotificationEmailServer({ data: payload });
  } catch (err) {
    console.error("[Email Service] Dispatch error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to dispatch email",
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
