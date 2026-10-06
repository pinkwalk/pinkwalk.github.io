import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-walk.jpg";
import heroImg2 from "@/assets/hero-walk2.jpg";
import heroImg3 from "@/assets/hero-walk3.jpg";
import heroImg4 from "@/assets/hero-walk4.jpg";
import { thisYearEvent, organizersList, partners, supporters, newsCoverage2026 } from "@/lib/event-data";
import { PartnerCallout } from "@/components/PartnerCallout";
import { GuestProfileSection } from "@/components/GuestProfileSection";

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
      <GuestProfileSection />
      <NewsCoverageSection />
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
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2500ms] ease-in-out ${idx === currentIdx
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
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          PinkWalk 2026 Concluded · {thisYearEvent.date}
        </span>

        <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] text-white [text-shadow:_0_3px_16px_rgba(0,0,0,0.7)] sm:text-6xl md:text-7xl">
          Over 1,000 Walked.
          <br />
          <span className="bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(190,24,93,0.9)]">
            Hope & Awareness Unified.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/95 [text-shadow:_0_1px_8px_rgba(0,0,0,0.6)]">
          PinkWalk 2026 successfully concluded on Saturday, October 3, bringing together over <strong className="font-semibold text-white">1,000 participants</strong> from{" "}
          <strong className="font-semibold text-white">Basantapur</strong> (Kathmandu Durbar Square) to{" "}
          <strong className="font-semibold text-white">Mangal Bazar</strong> (Lalitpur Durbar Square). All registration proceeds were handed over to Cancer Care Nepal.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:flex-row">
          <a
            href={thisYearEvent.photosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
          >
            <span>📷 View 2026 Event Photos</span>
          </a>
          <Link
            to="/press-release"
            className="inline-flex items-center rounded-full bg-white/12 px-7 py-3 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Read Press Release
          </Link>
          <Link
            to="/past-event"
            className="inline-flex items-center rounded-full bg-white/12 px-7 py-3 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            See 2023 & 2026 Walks →
          </Link>
        </div>

        <EventSummaryBanner />
      </div>
    </section>
  );
}

function EventSummaryBanner() {
  const highlights = [
    { label: "Participants", value: "1,000+", desc: "Walkers in pink" },
    { label: "Heritage Route", value: "4.3 km", desc: "Basantapur → Patan" },
    { label: "Proceeds Handover", value: "100%", desc: "To Cancer Care Nepal" },
    { label: "Distinguished Guests", value: "8+", desc: "Leaders & advocates" },
  ];

  return (
    <div className="mt-12 mx-auto w-full max-w-3xl">
      <div className="rounded-3xl bg-white/12 p-6 backdrop-blur-md ring-1 ring-white/25 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-widest text-pink-200 mb-4 text-center">
          🎉 PinkWalk 2026 Impact Summary
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/10 px-3 py-3.5 backdrop-blur-sm ring-1 ring-white/15"
            >
              <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {h.value}
              </span>
              <span className="mt-1 text-xs font-semibold text-white/90">
                {h.label}
              </span>
              <span className="text-[10px] text-white/70">
                {h.desc}
              </span>
            </div>
          ))}
        </div>
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
          <p className="font-display text-2xl font-semibold">Thank You for Walking With Us!</p>
          <p className="mt-3 text-pretty leading-relaxed text-white/90">
            Over 1,000 participants put on pink and walked in solidarity from Basantapur to Mangal Bazar. Every step raised awareness and helped fund cancer care for patients in need.
          </p>
          <Link
            to="/press-release"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Read Conclusion Press Release →
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsCoverageSection() {
  const featuredCoverage = newsCoverage2026.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="In The News"
        title="PinkWalk 2026 media coverage"
        subtitle={`Featured coverage from leading media outlets. Over ${newsCoverage2026.length} national news platforms have highlighted PinkWalk 2026.`}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCoverage.map((n) => (
          <a
            key={n.href}
            href={n.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {n.note}
              </span>
              <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                {n.label}
              </h3>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-semibold text-primary">
              <span>Read article</span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/press-release"
          hash="news"
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
        >
          <span>Explore all {newsCoverage2026.length}+ media articles in our Press Room</span>
          <span className="text-base">→</span>
        </Link>
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

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Partners() {
  const [supportersWithLogo] = useState(() =>
    shuffleArray(supporters.filter((p) => p.logo))
  );
  const [supportersText] = useState(() =>
    shuffleArray(supporters.filter((p) => !p.logo))
  );

  const [partnersWithLogo] = useState(() =>
    shuffleArray(partners.filter((p) => p.logo))
  );
  const [partnersText] = useState(() =>
    shuffleArray(partners.filter((p) => !p.logo))
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6">
      <PartnerCallout className="mb-8 sm:mb-10" />

      <SectionHeading
        eyebrow="Together"
        title="Partners & supporters"
        subtitle="PinkWalk is made possible by the organisations that walk, fund, and amplify the cause."
      />

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Supported by
        </p>
        {supportersWithLogo.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {supportersWithLogo.map((p) =>
              p.href ? (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.label}
                  className="flex items-center justify-center rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <img
                    src={p.logo}
                    alt={p.label}
                    className="max-h-22 w-full max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div
                  key={p.label}
                  className="flex items-center justify-center rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <img
                    src={p.logo}
                    alt={p.label}
                    className="max-h-22 w-full max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              )
            )}
          </div>
        )}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Partners
          </p>
          {partnersWithLogo.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {partnersWithLogo.map((p) => {
                const inner = (
                  <>
                    {p.type && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2 bg-pink-wash/80 px-2.5 py-0.5 rounded-full border border-primary/20">
                        {p.type}
                      </span>
                    )}
                    <img
                      src={p.logo}
                      alt={p.label}
                      className="max-h-14 w-full max-w-[150px] object-contain"
                      loading="lazy"
                    />
                  </>
                );
                return p.href ? (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={p.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-soft text-center hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={p.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-soft text-center hover:border-primary/40 transition-colors"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          )}
          {partnersText.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2.5">
              {partnersText.map((p) =>
                p.href ? (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {p.label}
                  </a>
                ) : (
                  <span
                    key={p.label}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {p.label}
                  </span>
                )
              )}
            </div>
          )}
        </div>


        {supportersText.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {supportersText.map((p) =>
              p.href ? (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {p.label}
                </a>
              ) : (
                <span
                  key={p.label}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {p.label}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
