import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Calendar,
  MapPin,
  Share2,
  Copy,
  Check,
  Download,
  Printer,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Mail,
  Building,
  Quote,
  CheckCircle2,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import logo from "@/assets/pinkwalk-logo.png";
import { pressReleases, type PressRelease } from "@/lib/press-release-data";
import { thisYearEvent, newsCoverage2026 } from "@/lib/event-data";

export const Route = createFileRoute("/press-release")({
  head: () => ({
    meta: [
      { title: "Press Releases & Media Announcements — PinkWalk 2026" },
      {
        name: "description",
        content:
          "Official press releases, news announcements, and media statements for PinkWalk 2026 breast cancer awareness walkathon in Kathmandu Valley.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2026 Press Releases & Media Room",
      },
      {
        property: "og:description",
        content:
          "Read official media announcements and press statements from Infinite Care for PinkWalk 2026.",
      },
    ],
  }),
  component: PressReleasePage,
});

function PressReleasePage() {
  const [selectedReleaseId, setSelectedReleaseId] = useState<string>(
    pressReleases[0].id
  );
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [copied, setCopied] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeRelease =
    pressReleases.find((r) => r.id === selectedReleaseId) || pressReleases[0];

  const hasNepali = Boolean(activeRelease.nepaliContent);
  const currentLang = hasNepali ? language : "en";

  const displayTitle =
    currentLang === "ne" && activeRelease.nepaliContent
      ? activeRelease.nepaliContent.title
      : activeRelease.title;

  const displaySubtitle =
    currentLang === "ne" && activeRelease.nepaliContent
      ? activeRelease.nepaliContent.subtitle
      : activeRelease.subtitle;

  const displayDate =
    currentLang === "ne" && activeRelease.nepaliContent
      ? activeRelease.nepaliContent.date
      : activeRelease.date;

  const displayLocation =
    currentLang === "ne" && activeRelease.nepaliContent
      ? activeRelease.nepaliContent.location
      : activeRelease.location;

  const displayContent =
    currentLang === "ne" && activeRelease.nepaliContent
      ? activeRelease.nepaliContent.content
      : activeRelease.content;

  const filteredReleases = pressReleases.filter((r) => {
    const query = searchQuery.toLowerCase();
    const titleEn = r.title.toLowerCase();
    const titleNe = r.nepaliContent?.title.toLowerCase() || "";
    const summaryEn = r.summary.toLowerCase();
    const summaryNe = r.nepaliContent?.summary.toLowerCase() || "";
    return (
      titleEn.includes(query) ||
      titleNe.includes(query) ||
      summaryEn.includes(query) ||
      summaryNe.includes(query) ||
      r.date.toLowerCase().includes(query)
    );
  });

  const handleCopyText = () => {
    const fullText = `${displayTitle}\n\n${displayDate} — ${displayLocation}\n\n${displayContent.lead}\n\n${displayContent.sections
      .map(
        (s) =>
          `${s.heading ? `${s.heading}\n` : ""}${s.paragraphs.join("\n\n")}`
      )
      .join("\n\n")}\n\nMedia Contact:\n${activeRelease.mediaContact.name} (${activeRelease.mediaContact.email})`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 print:p-0 print:m-0 print:max-w-none">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 text-center border-b border-border/60 print:hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <FileText className="h-3.5 w-3.5" />
          <span>Official Press Room & Statements · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Press Room & <span className="text-gradient-pink">Media Releases</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Official news announcements, media statements, and public advisories
          published by Infinite Care and the PinkWalk 2026 organizing committee.
        </p>

        {/* Quick Nav Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <Link
            to="/branding"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Brand Assets & Media Kit</span>
          </Link>
          <Link
            to="/partner"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Building className="h-3.5 w-3.5 text-primary" />
            <span>Media Partnerships</span>
          </Link>
          <a
            href={`mailto:${activeRelease.mediaContact.email}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>Media Contact Desk</span>
          </a>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid gap-10 py-12 lg:grid-cols-[1fr_340px] print:block print:py-0 print:my-0">
        {/* Left Column: Active Press Release Reader */}
        <main className="space-y-8 print:space-y-4">
          {/* Release Document Header Card */}
          <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10 print:border-none print:shadow-none print:p-0 print:m-0">
            {/* PRINT-ONLY OFFICIAL LETTERHEAD HEADER */}
            <div className="hidden print:block mb-8 pb-6 border-b-2 border-neutral-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="PinkWalk Logo" className="h-10 w-auto" />
                  <div>
                    <h1 className="font-display text-xl font-bold text-black tracking-tight">
                      PinkWalk Nepal — Infinite Cares
                    </h1>
                    <p className="text-xs text-neutral-600 font-sans">
                      Official Press Statement & Media Announcement
                    </p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <span className="font-bold tracking-widest uppercase text-black block text-sm">
                    PRESS RELEASE
                  </span>
                  <span className="text-neutral-700 font-semibold">
                    FOR IMMEDIATE RELEASE
                  </span>
                  <span className="text-neutral-500 block text-[10px]">
                    {displayDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Metadata Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/70 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                  {activeRelease.category}
                </span>
                <span className="flex items-center gap-1 font-medium text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {displayDate}
                </span>
                <span className="flex items-center gap-1 font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {displayLocation}
                </span>
              </div>

              {/* Action Toolbar & Language Selector */}
              <div className="flex flex-wrap items-center gap-2 print:hidden">
                {hasNepali && (
                  <div className="flex items-center gap-1 rounded-xl bg-muted p-1 text-xs font-semibold">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`rounded-lg px-2.5 py-1 transition-all ${currentLang === "en"
                        ? "bg-card text-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage("ne")}
                      className={`rounded-lg px-2.5 py-1 transition-all ${currentLang === "ne"
                        ? "bg-primary text-primary-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      नेपाली
                    </button>
                  </div>
                )}

                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-accent transition-colors"
                  title="Copy press release text to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-accent transition-colors"
                  title="Print press release"
                >
                  <Printer className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            {/* Headline & Subtitle */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {displayTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed font-medium text-muted-foreground sm:text-lg">
                {displaySubtitle}
              </p>
            </div>

            {/* Dateline & Lead Paragraph */}
            <div className="mt-8 rounded-2xl bg-pink-wash/60 p-5 sm:p-6 border border-primary/15">
              <p className="text-sm sm:text-base leading-relaxed text-foreground font-medium">
                {displayContent.lead}
              </p>
            </div>

            {/* Event Key Highlights Box (if available) */}
            {displayContent.highlights && (
              <div className="mt-8 rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>
                    {currentLang === "ne"
                      ? "मुख्य कार्यक्रम विवरण"
                      : "Key Announcement Highlights"}
                  </span>
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {displayContent.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section Paragraphs */}
            <div className="mt-8 space-y-8 text-sm sm:text-base text-foreground/90 leading-relaxed">
              {displayContent.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  {section.heading && (
                    <h3 className="font-display text-xl font-semibold text-foreground pt-2">
                      {section.heading}
                    </h3>
                  )}
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              ))}

              {/* Quote Block (if present) */}
              {displayContent.quote && (
                <div className="my-8 rounded-2xl border-l-4 border-primary bg-accent/50 p-6 sm:p-8">
                  <Quote className="h-8 w-8 text-primary/40 mb-2" />
                  <p className="font-display text-base sm:text-lg italic text-foreground leading-relaxed">
                    "{displayContent.quote.text}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <p className="font-semibold text-sm text-foreground">
                      — {displayContent.quote.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {displayContent.quote.title}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Official Media Contact Sign-off */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-base font-semibold text-foreground mb-3">
                {currentLang === "ne"
                  ? "सञ्चार तथा प्रेस सम्पर्क"
                  : "Media Contact & Official Inquiries"}
              </h3>
              <div className="grid gap-4 rounded-2xl border border-border bg-muted/30 p-5 sm:grid-cols-2 text-xs sm:text-sm">
                <div>
                  <p className="font-medium text-muted-foreground">
                    {currentLang === "ne"
                      ? "सम्पर्क प्रतिनिधिहरू:"
                      : "Contact Representatives:"}
                  </p>
                  <p className="font-semibold text-foreground mt-0.5">
                    {currentLang === "ne" && activeRelease.nepaliContent
                      ? "दिजुप तुलाधर (इकाई प्रमुख, इन्फिनिट केयर्स)"
                      : activeRelease.mediaContact.name}
                  </p>
                  <p className="text-muted-foreground">
                    {activeRelease.mediaContact.organization}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-muted-foreground">
                    {currentLang === "ne"
                      ? "ईमेल मिडिया डेस्क:"
                      : "Email Media Desk:"}
                  </p>
                  <a
                    href={`mailto:${activeRelease.mediaContact.email}`}
                    className="font-semibold text-primary hover:underline block mt-0.5"
                  >
                    {activeRelease.mediaContact.email}
                  </a>
                  <p className="text-muted-foreground">
                    {activeRelease.mediaContact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Banner */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60 text-xs print:hidden">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {currentLang === "ne"
                    ? "पिंकवाक नेपालको आधिकारिक प्रेस विज्ञप्ति"
                    : "Official Statement by PinkWalk Nepal"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/branding"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                >
                  <span>Download Media Kit & Logos</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* PRINT-ONLY OFFICIAL DOCUMENT FOOTER */}
            <div className="hidden print:flex items-center justify-between mt-10 pt-4 border-t border-neutral-300 text-[9pt] text-neutral-600 font-sans">
              <span>PinkWalk Nepal · Breast Cancer Awareness Initiative</span>
              <span>Official Press Room: https://pinkwalk.github.io/press-release</span>
            </div>
          </article>

          {/* 2026 News Coverage Section */}
          <section id="news" className="scroll-mt-20 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5">
              <div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {thisYearEvent.year} Media Coverage
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  In The News — Media Articles
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Recent press & online news coverage of PinkWalk 2026
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {newsCoverage2026.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-background p-5 transition-all hover:border-primary/40 hover:bg-accent/40 hover:shadow-soft"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-primary">
                        {item.note}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Globe className="h-3 w-3" />
                        <span>Online News</span>
                      </span>
                    </div>
                    <h4 className="mt-2.5 font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs font-semibold text-primary">
                    <span>Read Full Article</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar: Press Release Navigation & Media Tools */}
        <aside className="space-y-6 print:hidden">
          {/* News Coverage Quick Links Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-sm font-semibold text-foreground">
                In The News (2026)
              </h4>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                {newsCoverage2026.length} Articles
              </span>
            </div>
            <ul className="space-y-2.5 text-xs">
              {newsCoverage2026.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-2 rounded-xl border border-border/50 p-2.5 transition-colors hover:border-primary/30 hover:bg-accent/50"
                  >
                    <div>
                      <span className="block font-semibold text-primary text-[11px]">
                        {item.note}
                      </span>
                      <span className="line-clamp-2 text-foreground/90 font-medium group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Press Release Directory Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Press Release Directory
            </h3>

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-input bg-background pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* List of Releases */}
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {filteredReleases.map((release) => {
                const isActive = release.id === activeRelease.id;
                const releaseTitle =
                  currentLang === "ne" && release.nepaliContent
                    ? release.nepaliContent.title
                    : release.title;

                return (
                  <button
                    key={release.id}
                    onClick={() => {
                      setSelectedReleaseId(release.id);
                      if (!release.nepaliContent) setLanguage("en");
                    }}
                    className={`w-full text-left rounded-2xl p-3.5 transition-all text-xs ${isActive
                      ? "bg-pink-wash border border-primary/30 shadow-xs"
                      : "border border-border/60 hover:bg-accent/70 hover:border-border"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-semibold ${isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                      >
                        {release.date}
                      </span>
                      <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {release.category}
                      </span>
                    </div>

                    <h4
                      className={`font-semibold line-clamp-2 ${isActive ? "text-foreground" : "text-foreground/90"
                        }`}
                    >
                      {releaseTitle}
                    </h4>
                  </button>
                );
              })}

              {filteredReleases.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">
                  No press releases match your search query.
                </p>
              )}
            </div>
          </div>

          {/* Media Kit CTA Card */}
          <div className="rounded-3xl border border-primary/20 bg-pink-wash/70 p-6 text-center shadow-soft">
            <Sparkles className="mx-auto h-8 w-8 text-primary mb-3" />
            <h4 className="font-display text-base font-semibold text-foreground">
              Official Media Kit
            </h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Download official PinkWalk 2026 logos, social media banners, brand
              colors, and publication guidelines.
            </p>

            <Link
              to="/branding"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              <span>Explore Brand Kit</span>
            </Link>
          </div>

          {/* Contact Box */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h4 className="font-display text-sm font-semibold text-foreground mb-2">
              For Journalists & Media Outlets
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Need custom press quotes, high-res photos, or broadcast interview
              arrangements? Contact our press liaison:
            </p>

            <a
              href={`mailto:${activeRelease.mediaContact.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span>pinkwalknepal@gmail.com</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
