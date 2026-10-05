import { useState } from "react";
import { thisYearGuests, lastEventGuests, GuestItem } from "@/lib/event-data";
import { Sparkles, UserCheck, Stethoscope, Quote } from "lucide-react";

interface GuestProfileSectionProps {
  defaultYear?: 2026 | 2023;
  showToggle?: boolean;
  className?: string;
}

export function GuestProfileSection({
  defaultYear = 2026,
  showToggle = true,
  className = "",
}: GuestProfileSectionProps) {
  const [selectedYear, setSelectedYear] = useState<2026 | 2023>(defaultYear);

  const guests: GuestItem[] =
    selectedYear === 2026 ? thisYearGuests : lastEventGuests;

  return (
    <section id="guests" className={`scroll-mt-20 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-pink-wash px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Dignitaries & Champions</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Distinguished Guests & Advocates
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Renowned leaders, parliamentarians, cultural artists, medical experts, and beauty icons who stood together with over 1,000 walkers in pink solidarity.
            </p>
          </div>

          {/* Year Selector Tabs */}
          {showToggle && (
            <div className="flex items-center rounded-2xl border border-border bg-card p-1.5 shadow-soft shrink-0">
              <button
                type="button"
                onClick={() => setSelectedYear(2026)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedYear === 2026
                    ? "bg-primary text-primary-foreground shadow-pink"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>PinkWalk 2026</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                  {thisYearGuests.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedYear(2023)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedYear === 2023
                    ? "bg-primary text-primary-foreground shadow-pink"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>PinkWalk 2023</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                  {lastEventGuests.length}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Guest Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guests.map((guest) => (
            <div
              key={guest.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-pink-gradient opacity-10 blur-xl transition-opacity group-hover:opacity-25" />

              <div>
                <div className="flex items-start gap-4">
                  {guest.image ? (
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-2 ring-primary/20 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary/40"
                    />
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pink-wash font-display text-xl font-bold text-primary ring-2 ring-primary/20 shadow-xs">
                      {guest.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}

                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {guest.name}
                    </h3>
                    {guest.role && (
                      <p className="mt-1 inline-block rounded-full bg-pink-wash px-2.5 py-0.5 text-[11px] font-semibold text-primary border border-primary/15">
                        {guest.role}
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {guest.bio}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-[11px] font-semibold text-muted-foreground">
                <span className="flex items-center gap-1 text-primary">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Honored Guest</span>
                </span>
                <span className="text-primary/70">{selectedYear} Campaign</span>
              </div>
            </div>
          ))}
        </div>

        {/* Medical & Oncologist Session Banner for 2026 */}
        {selectedYear === 2026 && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-primary/20 bg-pink-gradient p-8 text-white shadow-pink">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold backdrop-blur-md text-white">
                  <Stethoscope className="h-4 w-4 text-pink-200" />
                  <span>Oncology & Health Sessions</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Medical Guidance & Survivor Testimonials
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  During PinkWalk 2026, leading oncologists Dr. Madan Piya, Dr. Sandhya, and Dr. Rashmi from Cancer Care Nepal delivered hands-on awareness sessions regarding bodily signs, early self-screening, and modern treatments. Cancer survivors also shared courageous personal journeys at Patan Durbar Square.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl bg-white/12 p-5 backdrop-blur-md ring-1 ring-white/25 max-w-xs">
                <Quote className="h-6 w-6 text-pink-200 mb-2 opacity-80" />
                <p className="text-xs italic text-white/95 leading-relaxed">
                  "Early detection saves lives. Full recovery is achievable when we talk openly and act without delay."
                </p>
                <p className="mt-2 text-[11px] font-semibold text-pink-200">
                  — Cancer Care Nepal Oncology Panel
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
