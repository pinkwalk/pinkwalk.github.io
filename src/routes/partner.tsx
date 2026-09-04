import { createFileRoute } from "@tanstack/react-router";
import { thisYearEvent, contactEmail } from "@/lib/event-data";
import { partnershipCategories } from "@/lib/partner-data";
import { PartnerFormContent } from "@/components/PartnerFormContent";
import { Handshake, Megaphone, Heart, Users, Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — PinkWalk 2026 Breast Cancer Walk" },
      {
        name: "description",
        content:
          "Partner with PinkWalk 2026. Join us as a media, medical, corporate, logistics, or community partner for the breast cancer awareness walk in Kathmandu.",
      },
      {
        property: "og:title",
        content: "Partner With Us — PinkWalk 2026",
      },
      {
        property: "og:description",
        content:
          "Collaborate with PinkWalk 2026 to expand breast cancer awareness across Nepal.",
      },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero Header */}
      <section className="py-14 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Handshake className="h-3.5 w-3.5" />
          <span>Collaboration & Sponsorship · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Partner With <span className="text-gradient-pink">PinkWalk 2026</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          PinkWalk brings together thousands of citizens across the Kathmandu Valley to walk for breast cancer awareness, early detection, and solidarity. Join us as an official partner to amplify this cause.
        </p>
      </section>

      {/* Main Grid: Form + Categories Info */}
      <div className="grid gap-10 pb-20 lg:grid-cols-[1.3fr_1fr]">
        {/* Left Column: Form Card */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="mb-6 pb-4 border-b border-border">
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <Handshake className="h-6 w-6 text-primary" />
              <span>Partnership Application Form</span>
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Please share your organization details and proposal. Our organizing committee will connect with you within 24–48 hours.
            </p>
          </div>

          <PartnerFormContent source="partner_page" />
        </div>

        {/* Right Column: Partnership Categories & Benefits */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Partnership Opportunities
            </h3>
            <div className="space-y-4">
              {partnershipCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-border/70 bg-background p-4 transition-colors hover:border-primary/40"
                >
                  <h4 className="text-sm font-semibold text-foreground">
                    {cat.label}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="rounded-3xl border border-primary/20 bg-pink-wash/50 p-6 text-center">
            <Mail className="mx-auto h-8 w-8 text-primary" />
            <h4 className="mt-3 font-display text-base font-semibold text-foreground">
              Direct Inquiries
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Prefer to email us directly or request an official proposal document?
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-block font-semibold text-sm text-primary hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
