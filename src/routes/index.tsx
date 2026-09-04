import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-walk.jpg";
import heroImg2 from "@/assets/hero-walk2.jpg";
import heroImg3 from "@/assets/hero-walk3.jpg";
import heroImg4 from "@/assets/hero-walk4.jpg";
import { thisYearEvent, partners, supporters } from "@/lib/event-data";
import { PartnerCallout } from "@/components/PartnerCallout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "PinkWalk 2026 — Breast Cancer Awareness Walk, Kathmandu",
      },
      {
        name: "description",
        content:
          "PinkWalk is a community breast cancer awareness walk in Kathmandu Valley. This year: Basantapur (Kathmandu Durbar Square) to Mangal Bazar (Lalitpur Durbar Square). Walk together, raise awareness.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2026 — Breast Cancer Awareness Walk, Kathmandu",
      },
      {
        property: "og:description",
        content:
          "PinkWalk is a community breast cancer awareness walk in Kathmandu Valley. This year: Basantapur (Kathmandu Durbar Square) to Mangal Bazar (Lalitpur Durbar Square). Walk together, raise awareness.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ThisYear />
      <Cause />
      <RouteSection />
      <PastEventTeaser />
      <Partners />
    </>
  );
}

function Hero() {
  const images = [heroImg, heroImg2, heroImg3, heroImg4];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Crowd walking together in pink for breast cancer awareness - slide ${idx + 1}`}
            width={1920}
            height={1280}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2500ms] ease-in-out ${
              idx === currentIdx
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-plum/85 via-plum/70 to-plum/95 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 text-center sm:px-6">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/25 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {thisYearEvent.date} · Kathmandu Valley
        </span>

        <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] text-white [text-shadow:_0_3px_16px_rgba(0,0,0,0.7)] sm:text-6xl md:text-7xl">
          Walk together.
          <br />
          <span className="bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(190,24,93,0.9)]">
            Raise awareness.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/95 [text-shadow:_0_1px_8px_rgba(0,0,0,0.6)]">
          PinkWalk is a community breast cancer awareness walk. This year we
          walk from{" "}
          <strong className="font-semibold text-white">Basantapur</strong>{" "}
          (Kathmandu Durbar Square) to{" "}
          <strong className="font-semibold text-white">Mangal Bazar</strong>{" "}
          (Lalitpur Durbar Square) — about an hour through the heart of the
          valley.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
          >
            Register for the Walk
          </Link>
          <Link
            to="/past-event"
            className="inline-flex items-center rounded-full bg-white/12 px-7 py-3 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            See the 2023 walk →
          </Link>
        </div>

        <CountdownTimer />
      </div>
    </section>
  );
}

function CountdownTimer() {
  const targetDate = new Date("2026-10-03T06:00:00+05:45").getTime();
  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isFinished: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: false });

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isFinished) {
    return (
      <div className="mt-10 mx-auto max-w-xl rounded-2xl bg-white/15 px-6 py-4 text-center text-white backdrop-blur-md ring-1 ring-white/25">
        <p className="font-display text-xl font-bold">
          PinkWalk 2026 is Here! 🎉
        </p>
      </div>
    );
  }

  const units = [
    { label: "Days", value: mounted ? timeLeft.days : 0 },
    { label: "Hours", value: mounted ? timeLeft.hours : 0 },
    { label: "Minutes", value: mounted ? timeLeft.minutes : 0 },
    { label: "Seconds", value: mounted ? timeLeft.seconds : 0 },
  ];

  return (
    <div className="mt-12 mx-auto w-full max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3.5 text-center">
        Countdown to October 3rd · 6:00 AM
      </p>
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex flex-col items-center justify-center rounded-2xl bg-white/10 px-3 py-3.5 sm:py-4 backdrop-blur-md ring-1 ring-white/20 shadow-soft transition-transform hover:scale-[1.02]"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/75 sm:text-xs">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ThisYear() {
  const cards = [
    { label: "When", value: thisYearEvent.date, note: thisYearEvent.dateNote },
    {
      label: "Start",
      value: thisYearEvent.route.startLabel,
      note: "Kathmandu Durbar Square",
    },
    {
      label: "Finish",
      value: thisYearEvent.route.endLabel,
      note: "Lalitpur Durbar Square",
    },
    {
      label: "Duration",
      value: thisYearEvent.duration,
      note: `${thisYearEvent.distance} · walkable for all`,
    },
  ];

  return (
    <section id="this-year" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="PinkWalk 2026"
        title="A heritage walk through two durbar squares"
        subtitle="We move from Basantapur in Kathmandu to Mangal Bazar in Lalitpur — linking two of the valley's most iconic squares in a single hour of walking together."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {c.label}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-foreground">
              {c.value}
            </p>
            {c.note && (
              <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
            )}
          </div>
        ))}
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {thisYearEvent.highlights.map((h) => (
          <li
            key={h}
            className="flex items-start gap-3 rounded-xl bg-pink-wash px-4 py-3 text-sm text-foreground"
          >
            <span className="mt-0.5 text-primary">✦</span>
            <span className="text-pretty">{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Cause() {
  return (
    <section id="cause" className="bg-pink-wash">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The Cause"
            title="Awareness, early detection, and support"
            subtitle="PinkWalk serves a dual purpose: raising awareness about breast cancer and raising funds to support those who need care. Donations are channeled through Cancer Care Nepal to provide essential breast cancer treatment to individuals facing economic hardship."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {thisYearEvent.organizers.map((o) => (
              <span
                key={o}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {o}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              k: "Awareness",
              v: "Educating the community about signs, symptoms, and the importance of early detection.",
            },
            {
              k: "Screening",
              v: "Motivating regular check-ups and self-examination as proactive breast-health habits.",
            },
            {
              k: "Community",
              v: "Families, friends, and organisations walking in solidarity for the cause.",
            },
            {
              k: "Support",
              v: "Funds directed to treatment and care for those who cannot afford it.",
            },
          ].map((b) => (
            <div
              key={b.k}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <p className="font-display text-lg font-semibold text-primary">
                {b.k}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteSection() {
  const stops = thisYearEvent.routeStops;
  return (
    <section id="route" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="The Route"
        title="Basantapur → Mangal Bazar"
        subtitle="A roughly one-hour walk that traces the living heritage of the Kathmandu Valley — from the palaces of Kathmandu to the courtyards of Patan."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <ol className="relative space-y-6 border-l-2 border-blush pl-6">
          {stops.map((s, i) => (
            <li key={s} className="relative">
              <span className="absolute -left-[1.65rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground ring-4 ring-background">
                {i + 1}
              </span>
              <p className="font-display text-lg font-medium text-foreground">
                {s}
              </p>
            </li>
          ))}
        </ol>

        <div className="rounded-3xl bg-pink-gradient p-8 text-primary-foreground shadow-pink">
          <p className="font-display text-2xl font-semibold">Walk with us</p>
          <p className="mt-3 text-pretty leading-relaxed text-white/90">
            Put on something pink and join the line. Whether you walk in memory,
            in support, or simply in solidarity — every step spreads awareness
            and helps fund care for those who need it most.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Register now
          </Link>
        </div>
      </div>
    </section>
  );
}

function PastEventTeaser() {
  return (
    <section className="bg-pink-wash">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Looking back
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
            PinkWalk 2023 — Narayanchaur to Swayambhu
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
            In 2023 we walked 4 km through Kathmandu, joined by partners and
            supporters across media, health, and the community. See the route,
            objectives, and news coverage from the first walk.
          </p>
        </div>
        <Link
          to="/past-event"
          className="shrink-0 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          View 2023 event →
        </Link>
      </div>
    </section>
  );
}

function Partners() {
  const partnersWithLogo = partners.filter((p) => p.logo);
  const partnersText = partners.filter((p) => !p.logo);

  const supportersWithLogo = supporters.filter((p) => p.logo);
  const supportersText = supporters.filter((p) => !p.logo);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <PartnerCallout className="mb-14" />

      <SectionHeading
        eyebrow="Together"
        title="Partners & supporters"
        subtitle="PinkWalk is made possible by the organisations that walk, fund, and amplify the cause."
      />

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Partners
        </p>
        {partnersWithLogo.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partnersWithLogo.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-center rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <img
                  src={p.logo}
                  alt={p.label}
                  className="max-h-14 w-full max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
        {partnersText.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {partnersText.map((p) => (
              <span
                key={p.label}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {p.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Supported by
        </p>
        {supportersWithLogo.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {supportersWithLogo.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-center rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <img
                  src={p.logo}
                  alt={p.label}
                  className="max-h-14 w-full max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
        {supportersText.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {supportersText.map((p) => (
              <span
                key={p.label}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {p.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
