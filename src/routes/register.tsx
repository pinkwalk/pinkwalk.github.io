import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { contactEmail, thisYearEvent } from "@/lib/event-data";
import { Bell, Mail, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { saveNotificationEmail } from "@/lib/firebase";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Registration Opening Soon — PinkWalk 2026" },
      {
        name: "description",
        content:
          "Registration for PinkWalk 2026 is opening soon. Join us on October 3rd, 2026 for the breast cancer awareness walk in Kathmandu Valley.",
      },
      { property: "og:title", content: "Registration Opening Soon — PinkWalk 2026" },
      {
        property: "og:description",
        content:
          "Registration for PinkWalk 2026 will open soon. Get notified when sign-ups launch for the October 3rd walk.",
      },
    ],
  }),
  component: RegistrationComingSoonPage,
});

function RegistrationComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);

    const res = await saveNotificationEmail(email);
    if (!res.success) {
      // Fallback mailto if firebase config is not yet added
      const subject = "Please notify me when PinkWalk 2026 registration opens";
      const body = `Hi PinkWalk Team,\n\nPlease notify me at ${email} as soon as registration for PinkWalk 2026 opens!\n\nThank you!`;
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    } else {
      setIsDuplicate(Boolean(res.alreadyRegistered));
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-14 text-center sm:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Bell className="h-3.5 w-3.5" />
          <span>Registration · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Registration <span className="text-gradient-pink">Opening Soon</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Online registration for {thisYearEvent.title} will open soon. Join us on{" "}
          <strong className="font-semibold text-foreground">{thisYearEvent.dateNote}</strong>{" "}
          as we walk together from {thisYearEvent.route.startLabel} to {thisYearEvent.route.endLabel}{" "}
          for breast cancer awareness.
        </p>
      </section>

      <div className="mx-auto grid max-w-4xl gap-8 pb-20 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-wash text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Get Notified
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Be the first to know when registrations launch and reserve your official PinkWalk t-shirt.
            </p>

            <form onSubmit={handleNotifySubmit} className="mt-6 space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
              >
                Notify Me When Open
              </button>
            </form>

            {submitted && (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-pink-wash p-3.5 text-xs text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {isDuplicate ? (
                    <>You are already registered for updates! We'll notify you as soon as registration launches.</>
                  ) : (
                    <>Thank you! We've saved your email and will notify you as soon as registration opens.</>
                  )}
                </span>
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground">
            Have group or sponsorship inquiries? Email us directly at{" "}
            <a href={`mailto:${contactEmail}`} className="font-medium text-primary hover:underline">
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Event Details
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-wash text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Date & Time
                  </p>
                  <p className="mt-0.5 font-medium text-foreground">{thisYearEvent.date}</p>
                  <p className="text-xs text-muted-foreground">{thisYearEvent.startTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-wash text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Route
                  </p>
                  <p className="mt-0.5 font-medium text-foreground">{thisYearEvent.route.startFull}</p>
                  <p className="text-xs text-muted-foreground">→ {thisYearEvent.route.endFull}</p>
                  <p className="mt-1 text-xs font-medium text-primary">
                    {thisYearEvent.distance} · {thisYearEvent.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-pink-wash p-4 text-xs text-foreground">
              <p className="font-semibold text-primary">What's included upon registration?</p>
              <ul className="mt-1.5 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Official PinkWalk 2026 awareness t-shirt</li>
                <li>Hydration & refreshment support along the route</li>
                <li>Community unity & solidarity for breast cancer awareness</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-pink-gradient p-5 text-primary-foreground shadow-pink">
            <div>
              <p className="font-display text-sm font-semibold">Explore 2023 Walk</p>
              <p className="text-xs text-white/80">See highlights & photos from our last walk</p>
            </div>
            <Link
              to="/past-event"
              className="inline-flex items-center rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/30"
            >
              View 2023 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
