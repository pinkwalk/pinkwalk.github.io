import { createFileRoute, Link } from "@tanstack/react-router";
import {
  contactEmail,
  thisYearEvent,
  tshirtSizeChart,
} from "@/lib/event-data";
import esewaQrImg from "@/assets/esewa-qr.png";
import esewaLogo from "@/assets/esewa-logo.png";
import {
  Shirt,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Download,
  ShieldCheck,
  Smartphone,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register via eSewa — PinkWalk 2026" },
      {
        name: "description",
        content:
          "Register for PinkWalk 2026 on October 3rd by scanning the official eSewa QR code. Choose your t-shirt size and join the walk from Basantapur to Mangal Bazar.",
      },
      { property: "og:title", content: "Register via eSewa — PinkWalk 2026" },
      {
        property: "og:description",
        content:
          "Scan the eSewa QR code to register for PinkWalk 2026. Join us on October 3rd for breast cancer awareness.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero Header */}
      <section className="py-10 text-center sm:py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Registration Open · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Register for <span className="text-gradient-pink">PinkWalk 2026</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Scan our official eSewa QR code—a direct deeplink that takes you straight to the registration form inside eSewa. Join us on{" "}
          <strong className="font-semibold text-foreground">
            {thisYearEvent.date} ({thisYearEvent.dateNote})
          </strong>{" "}
          from {thisYearEvent.route.startLabel} to {thisYearEvent.route.endLabel}.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid gap-8 pb-20 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          {/* Main eSewa QR Code Card */}
          <div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-card via-card to-emerald-500/5 p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40">
                  <img
                    src={esewaLogo}
                    alt="eSewa Logo"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    Scan QR to Register using eSewa
                  </h2>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Direct eSewa deeplink to registration form
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Official eSewa Deeplink
              </span>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
              {/* QR Image & Direct Link */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                <a
                  href="esewa://"
                  title="Scan or Tap to open eSewa Form"
                  className="group relative rounded-2xl border-2 border-dashed border-emerald-500/30 p-4 bg-white transition-all hover:scale-102 hover:border-emerald-500"
                >
                  <img
                    src={esewaQrImg}
                    alt="PinkWalk 2026 eSewa Registration QR Code"
                    className="h-60 w-60 object-contain rounded-xl sm:h-64 sm:w-64"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-emerald-950/20 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                      <Smartphone className="h-4 w-4" />
                      Open eSewa Form
                    </span>
                  </div>
                </a>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="esewa://"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
                  >
                    <Smartphone className="h-4 w-4" />
                    Open eSewa Form
                  </a>
                  <a
                    href={esewaQrImg}
                    download="PinkWalk_2026_eSewa_QR.png"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Save QR Code
                  </a>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-5">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Registration Instructions:
                </h3>

                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-sm">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        Scan QR Code with your Camera
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Scan the QR code with your phone camera (or tap the QR code on mobile).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-sm">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        Fill Form & Remarks
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Once redirected to the eSewa form, enter your <strong className="text-foreground">Your details</strong>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-sm">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        Registering Friends & Family?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        You can register multiple people on the form at once!.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs text-emerald-900 dark:text-emerald-200">
                  <p className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Instant Confirmation
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    Once payment is completed, your registration is instantly logged with the PinkWalk team!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: T-Shirt Size Guide Table */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3 border-b border-border/60 pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-wash text-primary">
                <Shirt className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  T-Shirt Size Guide
                </h2>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Check your measurements before adding your size to eSewa Remarks
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <th className="px-4 py-3 rounded-l-xl">Size</th>
                    <th className="px-4 py-3">Chest (in Inches)</th>
                    <th className="px-4 py-3 rounded-r-xl">Length (in Inches)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {tshirtSizeChart.map((item) => (
                    <tr key={item.size} className="hover:bg-pink-wash/40 transition-colors">
                      <td className="px-4 py-3.5">
                        <strong className="text-foreground">{item.name}</strong>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-foreground/80">
                        {item.chestInches}"
                      </td>
                      <td className="px-4 py-3.5 font-mono text-foreground/80">
                        {item.lengthInches}"
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-xl bg-pink-wash p-3.5 text-xs text-muted-foreground flex items-center justify-between">
              <span>
                <strong>Fit Note:</strong> T-shirts are unisex fit. Dimensions are in inches.
              </span>
              <span className="font-semibold text-primary">
                Include size code (e.g. M, L, XL) in eSewa Remarks
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Event Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-foreground">
              Event Summary
            </h3>

            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-wash text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Date & Time
                  </p>
                  <p className="font-medium text-foreground">
                    {thisYearEvent.date}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {thisYearEvent.dateNote}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-wash text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Walk Route
                  </p>
                  <p className="font-medium text-foreground">
                    {thisYearEvent.route.startFull}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    → {thisYearEvent.route.endFull}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-primary">
                    {thisYearEvent.distance} · {thisYearEvent.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-pink-wash p-4 text-xs">
              <p className="font-semibold text-primary">
                What's included upon registration?
              </p>
              <ul className="mt-2 space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  Official PinkWalk 2026 T-Shirt
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  Hydration & Refreshments along route
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  Community Solidarity Badge
                </li>
              </ul>
            </div>
          </div>

          {/* Contact / Inquiry Card */}
          <div className="rounded-3xl bg-pink-gradient p-6 text-primary-foreground shadow-pink">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <Heart className="h-5 w-5 fill-current" />
              Need Support?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/90">
              For group or corporate registration support, contact:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-block font-medium underline text-sm text-white"
            >
              {contactEmail}
            </a>
          </div>

          {/* Link to past walk */}
          <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
            <p className="text-xs font-medium text-muted-foreground">
              Want to see photos from our previous event?
            </p>
            <Link
              to="/past-event"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              View PinkWalk 2023 Highlights →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
