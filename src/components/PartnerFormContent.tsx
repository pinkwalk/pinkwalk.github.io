import { useState } from "react";
import { contactEmail, thisYearEvent } from "@/lib/event-data";
import {
  partnershipCategories,
  type PartnershipCategory,
} from "@/lib/partner-data";
import { savePartnerInquiry } from "@/lib/firebase";
import { sendPartnerNotificationEmail } from "@/lib/email-service";
import {
  Building2,
  User,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Handshake,
  Send,
} from "lucide-react";

interface PartnerFormContentProps {
  onSuccess?: () => void;
  source?: string;
}

export function PartnerFormContent({
  onSuccess,
  source = "partner_form",
}: PartnerFormContentProps) {
  const [organizationName, setOrganizationName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [partnershipType, setPartnershipType] =
    useState<PartnershipCategory>("media");
  const [website, setWebsite] = useState("");
  const [contributionText, setContributionText] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    // Spam honeypot check
    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    const res = await savePartnerInquiry({
      organizationName,
      contactPerson,
      designation,
      contactNumber,
      email,
      partnershipType,
      contributionText,
      website,
      source,
    });

    if (!res.success) {
      console.warn("[Partner Form] Firestore save failed, attempting direct Resend dispatch:", res.error);
      const emailRes = await sendPartnerNotificationEmail({
        organizationName,
        contactPerson,
        designation,
        contactNumber,
        email,
        partnershipType,
        contributionText,
        website,
      });

      if (!emailRes.success) {
        // Fallback mailto if both Firebase and Resend fail
        const body = [
          `Organization Name: ${organizationName}`,
          `Contact Person: ${contactPerson}`,
          `Designation: ${designation || "N/A"}`,
          `Phone: ${contactNumber}`,
          `Email: ${email}`,
          `Partnership Category: ${partnershipType}`,
          `Website/Social: ${website || "N/A"}`,
          `Contribution Details:\n${contributionText}`,
          "",
          `Event Context: ${thisYearEvent.title} — ${thisYearEvent.date}`,
        ].join("\n");

        const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
          `PinkWalk 2026 Partnership Inquiry — ${organizationName}`,
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
      }
    }

    setSubmitting(false);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-wash text-primary ring-8 ring-pink-wash/50">
          <CheckCircle2 className="h-9 w-9 text-primary" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Partnership Application Submitted!
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
          Thank you, <strong className="text-foreground">{contactPerson}</strong> from{" "}
          <strong className="text-foreground">{organizationName}</strong>. Our partnership team will review your proposal and get in touch with you shortly.
        </p>
        <div className="mt-6 rounded-2xl bg-card border border-border p-4 text-xs text-muted-foreground w-full max-w-sm">
          <div className="flex items-center justify-center gap-2 font-medium text-foreground mb-1">
            <Mail className="h-4 w-4 text-primary" />
            <span>Direct Inquiry Contact</span>
          </div>
          <span>Have an urgent inquiry? Email us directly at </span>
          <a
            href={`mailto:${contactEmail}`}
            className="font-medium text-primary hover:underline"
          >
            {contactEmail}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="website_hp_check"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Organization Name <span className="text-primary">*</span>
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              required
              placeholder="e.g. Acme Health / NTV / Lions Club"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Partnership Type <span className="text-primary">*</span>
          </label>
          <select
            value={partnershipType}
            onChange={(e) => setPartnershipType(e.target.value as PartnershipCategory)}
            className={`${inputCls} cursor-pointer`}
          >
            {partnershipCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contact Person <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Full name of contact person"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Designation / Role
          </label>
          <input
            type="text"
            placeholder="e.g. CSR Lead, Marketing Manager"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contact Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +977 98XXXXXXXX"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@organization.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Website or Social Media Link
        </label>
        <input
          type="url"
          placeholder="https://..."
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className={inputCls}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          How can your organization contribute to PinkWalk? <span className="text-primary">*</span>
        </label>
        <textarea
          required
          rows={3}
          placeholder="Describe how you would like to partner with PinkWalk (e.g., providing medical staff, broadcasting event coverage, sponsoring refreshments, bringing volunteers)..."
          value={contributionText}
          onChange={(e) => setContributionText(e.target.value)}
          className={`${inputCls} resize-none`}
        />
      </div>

      {errorMsg && (
        <p className="text-xs font-medium text-destructive">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Submitting Proposal...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Submit Partner Application</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-muted-foreground">
        By submitting, you agree to allow the PinkWalk organizing committee to contact you regarding event partnership.
      </p>
    </form>
  );
}
