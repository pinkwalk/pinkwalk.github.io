import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  contactEmail,
  thisYearEvent,
  tshirtSizes,
} from "@/lib/event-data";

export const Route = createFileRoute("/register2")({
  head: () => ({
    meta: [
      { title: "Register for PinkWalk 2026 — October 3rd, Kathmandu" },
      {
        name: "description",
        content:
          "Register for PinkWalk 2026 on October 3rd: walk from Basantapur to Mangalbazar for breast cancer awareness. Pick your t-shirt size and join the walk.",
      },
      { property: "og:title", content: "Register for PinkWalk 2026" },
      {
        property: "og:description",
        content:
          "Sign up for the PinkWalk 2026 breast cancer awareness walk in Kathmandu — October 3rd, 2026. Choose your t-shirt size.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState<string>("M");
  const [group, setGroup] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `T-shirt size: ${size}`,
      `Organisation / group: ${group || "—"}`,
      `Notes: ${notes || "—"}`,
      "",
      `Event: ${thisYearEvent.title} — ${thisYearEvent.date}`,
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "PinkWalk 2026 registration — " + (name || "Participant"),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-14 sm:py-20">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Registration · {thisYearEvent.year}
        </span>
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Join <span className="text-gradient-pink">PinkWalk 2026</span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {thisYearEvent.date} — Basantapur to Mangalbazar, about an hour of
          walking together for breast cancer awareness. Register below and pick
          your t-shirt size.
        </p>
      </section>

      <div className="grid gap-8 pb-20 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-foreground">
                Full name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputCls}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-foreground">Email</span>
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
              <span className="text-sm font-medium text-foreground">Phone</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98XXXXXXXX"
                className={inputCls}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-foreground">
                Organisation or group (optional)
              </span>
              <input
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder="Company, college, family, friends…"
                className={inputCls}
              />
            </label>
          </div>

          <fieldset className="mt-7">
            <legend className="text-sm font-medium text-foreground">
              T-shirt size
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {tshirtSizes.map((s) => (
                <label key={s} className="cursor-pointer">
                  <input
                    type="radio"
                    name="tshirt"
                    value={s}
                    checked={size === s}
                    onChange={() => setSize(s)}
                    className="peer sr-only"
                  />
                  <span className="inline-flex min-w-14 items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                    {s}
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Unisex fit. Sizes are subject to availability on event day.
            </p>
          </fieldset>

          <label className="mt-7 block">
            <span className="text-sm font-medium text-foreground">
              Anything we should know? (optional)
            </span>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Walking in memory of…, accessibility needs, number of friends joining…"
              className={inputCls}
            />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Submit registration
          </button>

          {sent && (
            <p className="mt-4 rounded-xl bg-pink-wash px-4 py-3 text-sm text-foreground">
              Your email app should now open with your registration details —
              just hit send. If it didn't, email us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-primary hover:underline"
              >
                {contactEmail}
              </a>
              .
            </p>
          )}
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Date
            </p>
            <p className="mt-1.5 font-display text-xl font-semibold text-foreground">
              {thisYearEvent.date}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {thisYearEvent.startTime}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Route
            </p>
            <ol className="mt-3 space-y-2 text-sm text-foreground">
              {thisYearEvent.routeStops.map((s, i) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-muted-foreground">
              {thisYearEvent.distance} · {thisYearEvent.duration}
            </p>
          </div>

          <div className="rounded-3xl bg-pink-gradient p-6 text-primary-foreground shadow-pink">
            <p className="font-display text-xl font-semibold">Questions?</p>
            <p className="mt-2 text-sm text-white/90">
              Reach out to {thisYearEvent.contactPersons.join(" or ")} at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
