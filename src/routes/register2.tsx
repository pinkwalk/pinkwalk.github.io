import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  contactEmail,
  thisYearEvent,
  tshirtSizeChart,
} from "@/lib/event-data";
import { saveRegistration } from "@/lib/firebase";
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
  User,
  Mail,
  Phone,
  Building,
  FileText,
  CreditCard,
  Banknote,
} from "lucide-react";

export const Route = createFileRoute("/register2")({
  head: () => ({
    meta: [
      { title: "Register for PinkWalk 2026 — Basantapur to Mangal Bazar" },
      {
        name: "description",
        content:
          "Register for PinkWalk 2026 on October 3rd. Scan Fonepay/eSewa QR code to register, select your t-shirt size, and walk for breast cancer awareness in Kathmandu Valley.",
      },
      { property: "og:title", content: "Register for PinkWalk 2026" },
      {
        property: "og:description",
        content:
          "Register for PinkWalk 2026. Scan Fonepay/eSewa QR code, pick your t-shirt size, and join us on October 3rd, 2026.",
      },
    ],
  }),
  component: RegisterPage2,
});

function RegisterPage2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState<string>("M");
  const [amount, setAmount] = useState("");
  const [txnId, setTxnId] = useState("");
  const [group, setGroup] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const res = await saveRegistration({
      name,
      email,
      phone,
      size,
      group: [group, amount ? `Amount: Rs. ${amount}` : "", txnId ? `Txn ID: ${txnId}` : ""]
        .filter(Boolean)
        .join(" | "),
      notes,
    });

    if (!res.success) {
      // Fallback mailto if firebase credentials are not configured
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `T-Shirt Size: ${size}`,
        `Paid Amount: Rs. ${amount}`,
        `Transaction ID: ${txnId}`,
        `Organisation/Group: ${group || "—"}`,
        `Notes: ${notes || "—"}`,
        "",
        `Event: ${thisYearEvent.title} — ${thisYearEvent.date}`,
      ].join("\n");
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        "PinkWalk 2026 Registration — " + (name || "Participant"),
      )}&body=${encodeURIComponent(body)}`;
    } else {
      setIsDuplicate(Boolean(res.alreadyRegistered));
    }

    setSubmitting(false);
    setSent(true);
  };

  const selectedSizeInfo = tshirtSizeChart.find((s) => s.size === size);

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

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
          Scan our official Fonepay QR code to pay & register, or complete your details below. Join us on{" "}
          <strong className="font-semibold text-foreground">
            {thisYearEvent.date} ({thisYearEvent.dateNote})
          </strong>{" "}
          as we walk together from {thisYearEvent.route.startLabel} to {thisYearEvent.route.endLabel}.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid gap-8 pb-20 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          {/* Section 1: Fonepay QR Code & Registration */}
          <div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-card via-card to-emerald-500/5 p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/40">
                  <img
                    src={esewaLogo}
                    alt="Fonepay Logo"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    Register via Fonepay QR Code
                  </h2>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Scan QR code using Fonepay or mobile banking app to complete payment
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Official Fonepay QR
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-center">
              {/* QR Image Card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
                <div className="relative rounded-xl border-2 border-dashed border-emerald-500/30 p-3 bg-white">
                  <img
                    src={esewaQrImg}
                    alt="PinkWalk 2026 Fonepay Registration QR Code"
                    className="h-56 w-56 object-contain rounded-lg sm:h-64 sm:w-64"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={esewaQrImg}
                    download="PinkWalk_2026_Fonepay_QR.png"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download QR Image
                  </a>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  How to Register with Fonepay:
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      1
                    </span>
                    <span className="text-muted-foreground">
                      Open your <strong className="text-foreground">Fonepay / Mobile Banking App</strong> on your mobile phone.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      2
                    </span>
                    <span className="text-muted-foreground">
                      Tap <strong className="text-foreground">Scan & Pay</strong> and scan the QR code.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      3
                    </span>
                    <span className="text-muted-foreground">
                      In <strong className="text-foreground">Remarks</strong>, write your <strong className="text-foreground">Name, Phone & T-Shirt Size</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      4
                    </span>
                    <span className="text-muted-foreground">
                      Fill out the form below with your paid amount & Transaction ID to complete registration!
                    </span>
                  </li>
                </ol>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs text-muted-foreground">
                  <p className="font-medium text-emerald-700 dark:text-emerald-300">
                    💡 Tip for mobile users:
                  </p>
                  <p className="mt-0.5">
                    Save or screenshot the QR code image, open your mobile app, tap "Scan & Pay", and select the image from your photo gallery!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: T-Shirt Size Chart */}
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
                  Official PinkWalk 2026 t-shirt size measurements (in Inches)
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <th className="px-4 py-3 rounded-l-xl">Size</th>
                    <th className="px-4 py-3">Chest (in Inches)</th>
                    <th className="px-4 py-3">Length (in Inches)</th>
                    <th className="px-4 py-3 text-right rounded-r-xl">Selection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {tshirtSizeChart.map((item) => {
                    const isSelected = size === item.size;
                    return (
                      <tr
                        key={item.size}
                        onClick={() => setSize(item.size)}
                        className={`cursor-pointer transition-colors hover:bg-pink-wash/50 ${
                          isSelected ? "bg-pink-wash/80 font-semibold" : ""
                        }`}
                      >
                        <td className="px-4 py-3.5">
                          <span className="inline-flex items-center gap-2">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                isSelected ? "bg-primary" : "bg-muted-foreground/30"
                              }`}
                            />
                            <strong className="text-foreground">
                              {item.name}
                            </strong>
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-foreground/80 font-mono">
                          {item.chestInches}"
                        </td>
                        <td className="px-4 py-3.5 text-foreground/80 font-mono">
                          {item.lengthInches}"
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSize(item.size);
                            }}
                            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                            }`}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-pink-wash p-3.5 text-xs text-muted-foreground">
              <span>
                <strong>Fit Note:</strong> T-shirts are unisex fit. Measurements represent garment dimensions in inches.
              </span>
              <span className="font-semibold text-primary">
                Selected Size: {selectedSizeInfo?.name}
              </span>
            </div>
          </div>

          {/* Section 3: Online Registration Form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="border-b border-border/60 pb-5">
              <h2 className="font-display text-xl font-bold text-foreground">
                Participant Registration Form
              </h2>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Enter your details & transaction info to complete your registration
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <User className="h-4 w-4 text-primary" />
                    Full Name <span className="text-primary">*</span>
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address <span className="text-primary">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number <span className="text-primary">*</span>
                  </span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    className={inputCls}
                  />
                </label>
              </div>

              {/* T-Shirt Selector */}
              <div>
                <label className="block text-sm font-medium text-foreground">
                  <span className="flex items-center gap-1.5">
                    <Shirt className="h-4 w-4 text-primary" />
                    Select T-Shirt Size <span className="text-primary">*</span>
                  </span>
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
                  {tshirtSizeChart.map((item) => {
                    const isChecked = size === item.size;
                    return (
                      <button
                        key={item.size}
                        type="button"
                        onClick={() => setSize(item.size)}
                        className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all ${
                          isChecked
                            ? "border-primary bg-primary text-primary-foreground shadow-pink"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                      >
                        <span className="text-base font-bold">
                          {item.size}
                        </span>
                        <span
                          className={`text-[11px] ${
                            isChecked ? "text-white/80" : "text-muted-foreground"
                          }`}
                        >
                          Chest {item.chestInches}"
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Banknote className="h-4 w-4 text-primary" />
                    Paid Amount (NPR) <span className="text-primary">*</span>
                  </span>
                  <input
                    required
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter paid amount (e.g. 500)"
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <CreditCard className="h-4 w-4 text-primary" />
                    Transaction ID <span className="text-primary">*</span>
                  </span>
                  <input
                    required
                    value={txnId}
                    onChange={(e) => setTxnId(e.target.value)}
                    placeholder="Enter Fonepay/eSewa Txn ID"
                    className={inputCls}
                  />
                </label>
              </div>

              <label className="block">
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Building className="h-4 w-4 text-primary" />
                  Organisation / Group Name (Optional)
                </span>
                <input
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  placeholder="Company, college, friends group…"
                  className={inputCls}
                />
              </label>

              <label className="block">
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <FileText className="h-4 w-4 text-primary" />
                  Additional Notes (Optional)
                </span>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Walking in honor of someone, accessibility requirements, etc."
                  className={inputCls}
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                {submitting ? "Submitting Registration..." : "Submit Registration"}
              </button>

              {sent && (
                <div className="flex items-start gap-3 rounded-2xl bg-pink-wash p-4 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-primary">
                      {isDuplicate
                        ? "Already Registered!"
                        : "Registration Submitted Successfully!"}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {isDuplicate
                        ? `This email (${email}) is already registered for PinkWalk 2026. We look forward to seeing you on October 3rd!`
                        : `Thank you, ${name}! Your registration for PinkWalk 2026 has been received. Paid Amount: Rs. ${amount}, Txn ID: ${txnId}, Selected T-Shirt size: ${selectedSizeInfo?.name}.`}
                    </p>
                  </div>
                </div>
              )}
            </form>
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
                What's included in registration?
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
            <h3 className="font-display text-lg font-semibold">
              Need Assistance?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/90">
              For group registrations, bulk orders, or registration queries, contact {thisYearEvent.contactPersons.join(" or ")}:
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
