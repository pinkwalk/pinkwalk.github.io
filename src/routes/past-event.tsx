import { createFileRoute, Link } from "@tanstack/react-router";
import {
  lastEvent,
  lastEventSiteUrl,
  newsCoverage,
  photos,
} from "@/lib/event-data";

export const Route = createFileRoute("/past-event")({
  head: () => ({
    meta: [
      {
        title: "PinkWalk 2023 — Narayanchaur to Swayambhu | Past Event",
      },
      {
        name: "description",
        content:
          "PinkWalk 2023: a 4 km breast cancer awareness walk from Narayanchaur to Swayambhu, Kathmandu. Route, objectives, partners, news coverage, and photos from the first walk.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2023 — Narayanchaur to Swayambhu",
      },
      {
        property: "og:description",
        content:
          "The first PinkWalk: 4 km through Kathmandu, September 30th 2023, organised by Cotiviti Nepal with Cancer Care Nepal.",
      },
    ],
  }),
  component: PastEvent,
});

function PastEvent() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Hero />
      <Details />
      <Objectives />
      <RouteStops />
      <Coverage />
      <Gallery />
      <CtaBack />
    </div>
  );
}

function Hero() {
  return (
    <section className="py-16 sm:py-20">
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Past Event · {lastEvent.year}
      </span>
      <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {lastEvent.title} —{" "}
        <span className="text-gradient-pink">{lastEvent.venue}</span>
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {lastEvent.about}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
          {lastEvent.date}
        </span>
        <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
          {lastEvent.distance}
        </span>
        <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
          {lastEvent.time}
        </span>
      </div>
    </section>
  );
}

function Details() {
  const items = [
    { label: "Venue", value: lastEvent.venue },
    { label: "Proposed Date", value: lastEvent.date },
    { label: "Start", value: lastEvent.startTime },
    { label: "Finish", value: lastEvent.endTime },
    { label: "Distance", value: lastEvent.distance },
    { label: "Window", value: lastEvent.time },
  ];
  return (
    <section className="grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <div
          key={i.label}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {i.label}
          </p>
          <p className="mt-1.5 font-display text-lg font-medium text-foreground">
            {i.value}
          </p>
        </div>
      ))}
    </section>
  );
}

function Objectives() {
  return (
    <section className="border-y border-border/60 bg-pink-wash -mx-4 px-4 py-16 sm:-mx-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Objectives of the walk
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {lastEvent.objectives.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <p className="font-display text-lg font-semibold text-primary">
                {o.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteStops() {
  return (
    <section className="py-16">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        The route
      </h2>
      <p className="mt-3 text-muted-foreground">
        A 4 km walk through the heart of Kathmandu, finishing at Swayambhu.
      </p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lastEvent.routeStops.map((s, i) => (
          <li
            key={s}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <span className="font-medium text-foreground">{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Coverage() {
  return (
    <section id="news" className="scroll-mt-20 py-16">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        News coverage
      </h2>
      <ul className="mt-8 divide-y divide-border">
        {newsCoverage.map((n) => (
          <li key={n.label}>
            <a
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-4"
            >
              <span>
                <span className="text-pretty font-medium text-foreground group-hover:text-primary">
                  {n.label}
                </span>
                {n.note && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    · {n.note}
                  </span>
                )}
              </span>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-16">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        Photos from the walk
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-pink-wash p-5 transition-colors hover:border-primary"
          >
            <p className="text-2xl">📷</p>
            <p className="mt-2 text-sm font-medium text-foreground group-hover:text-primary">
              {p.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              View album ↗
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function CtaBack() {
  return (
    <section className="py-16 text-center">
      <div className="rounded-3xl bg-pink-gradient p-10 shadow-pink">
        <p className="font-display text-2xl font-semibold text-primary-foreground">
          This year we walk again.
        </p>
        <p className="mx-auto mt-2 max-w-md text-pretty text-white/90">
          Basantapur to Mangal Bazar — about an hour, for awareness.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            See PinkWalk 2026 →
          </Link>
          <a
            href={lastEventSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/15 px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/25"
          >
            Original 2023 site ↗
          </a>
        </div>
      </div>
    </section>
  );
}
