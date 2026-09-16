import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Image as ImageIcon,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  Share2,
} from "lucide-react";
import { thisYearEvent } from "@/lib/event-data";
import {
  logoAssets,
  bannerAssets,
  downloadFile,
  type BannerAsset,
} from "@/lib/brand-assets";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Brand Assets & Media Kit — PinkWalk 2026" },
      {
        name: "description",
        content:
          "Download official PinkWalk logos, promotional banners, social media assets, and brand guidelines for breast cancer awareness promotion.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2026 Brand Assets & Media Kit",
      },
      {
        property: "og:description",
        content:
          "Download official logos, promotional banners, and campaign graphics for PinkWalk 2026.",
      },
    ],
  }),
  component: BrandingPage,
});

function BrandingPage() {
  const [selectedBannerModal, setSelectedBannerModal] =
    useState<BannerAsset | null>(null);
  const [logoBackdrop, setLogoBackdrop] = useState<"light" | "dark" | "pink">(
    "light",
  );

  const handleDownloadBanner = (banner: BannerAsset) => {
    downloadFile(banner.fileUrl, `${banner.id}.png`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Official Press & Media Kit · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Brand Assets &{" "}
          <span className="text-gradient-pink">Promotional Kit</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Download high-resolution PinkWalk logos, social media promotional
          banners, brand colors, and guidelines to support and share breast
          cancer awareness across Nepal.
        </p>

        {/* Anchor Links Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href="#logos"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
          >
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Official Logos</span>
          </a>
          <a
            href="#banners"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Promotional Banners</span>
          </a>
          <a
            href="#guidelines"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Usage Guidelines</span>
          </a>
        </div>
      </section>

      {/* SECTION 1: LOGOS */}
      <section id="logos" className="scroll-mt-24 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <ImageIcon className="h-6 w-6 text-primary" />
              <span>Official Logos & Emblems</span>
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Official PinkWalk graphics available in PNG formats for print,
              web, and social media.
            </p>
          </div>

          {/* Backdrop Switcher Controls */}
          <div className="flex items-center gap-1.5 bg-muted p-1 rounded-full text-xs font-medium self-start sm:self-auto">
            <span className="px-2 text-muted-foreground">Preview Canvas:</span>
            <button
              onClick={() => setLogoBackdrop("light")}
              className={`rounded-full px-3 py-1 transition-all ${logoBackdrop === "light"
                ? "bg-card text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Light
            </button>
            <button
              onClick={() => setLogoBackdrop("dark")}
              className={`rounded-full px-3 py-1 transition-all ${logoBackdrop === "dark"
                ? "bg-plum text-white shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Dark
            </button>
            <button
              onClick={() => setLogoBackdrop("pink")}
              className={`rounded-full px-3 py-1 transition-all ${logoBackdrop === "pink"
                ? "bg-primary text-white shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Pink Wash
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {logoAssets.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/30"
            >
              <div>
                {/* Logo Display Canvas Container */}
                <div
                  className={`relative flex h-52 items-center justify-center rounded-2xl p-6 transition-colors ${logoBackdrop === "light"
                    ? "bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200/80"
                    : logoBackdrop === "dark"
                      ? "bg-[oklch(0.24_0.07_350)] border border-plum/50"
                      : "bg-pink-wash border border-primary/20"
                    }`}
                >
                  <img
                    src={logo.fileUrl}
                    alt={logo.title}
                    className="max-h-36 max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-mono font-medium text-muted-foreground border border-border/80 backdrop-blur-xs">
                    {logo.dimensions}
                  </span>
                </div>

                {/* Details */}
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {logo.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {logo.description}
                </p>

                <div className="mt-4 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Recommended Usage:{" "}
                  </span>
                  {logo.recommendedFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                <button
                  onClick={() => downloadFile(logo.fileUrl, `${logo.id}.png`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  <span>Download High-Res PNG</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PROMOTIONAL BANNERS */}
      <section id="banners" className="scroll-mt-24 pb-16">
        <div className="border-b border-border pb-4 mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Share2 className="h-6 w-6 text-primary" />
            <span>Promotional Banners & Social Media Kit</span>
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Official PinkWalk 2026 campaign banner graphics for social media, web publications, and news releases.
          </p>
        </div>

        <div className="grid gap-8">
          {bannerAssets.map((banner) => (
            <div
              key={banner.id}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div>
                {/* Banner Preview Card */}
                <div className="relative group overflow-hidden rounded-2xl border border-border bg-neutral-900/5 transition-transform">
                  <img
                    src={banner.fileUrl}
                    alt={banner.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay with Preview Icon */}
                  <button
                    onClick={() => setSelectedBannerModal(banner)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs text-white text-xs font-semibold gap-2"
                  >
                    <Maximize2 className="h-5 w-5" />
                    <span>Full Preview</span>
                  </button>

                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur-md">
                    {banner.width} × {banner.height} px
                  </span>
                </div>

                {/* Banner Header Info */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-md bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                      {banner.usage}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                      {banner.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {banner.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownloadBanner(banner)}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download High-Res PNG ({banner.width}×{banner.height})</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: GUIDELINES & PRESS CONTACT */}
      <section id="guidelines" className="scroll-mt-24 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Usage Guidelines */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Logo & Media Usage Guidelines</span>
            </h3>

            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Clear Space:</strong>{" "}
                  Always maintain adequate padding around the logo so it remains
                  distinct and readable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Aspect Ratio:</strong> Do
                  not stretch, skew, rotate, or alter the proportions of the
                  logo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">
                    Background Contrast:
                  </strong>{" "}
                  Use the primary full-color logo on light or white backgrounds,
                  and high-contrast versions on dark backgrounds.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">
                    Official Partnership:
                  </strong>{" "}
                  When publishing co-branded materials, please credit{" "}
                  <em className="text-foreground">
                    "PinkWalk 2026"
                  </em>
                  .
                </span>
              </li>
            </ul>
          </div>

          {/* Media Inquiries Card */}
          <div className="rounded-3xl border border-primary/20 bg-pink-wash p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <ExternalLink className="h-6 w-6" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground">
                Media Inquiries & Custom Formats
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Need high-resolution vector press files (EPS/AI), custom print
                dimensions, or official press releases for television,
                newspaper, or radio features?
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-primary/15">
              <p className="text-xs font-semibold text-foreground">
                Contact Organizing Committee:
              </p>
              <p className="text-sm font-medium text-primary mt-1">
                pinkwalknepal@gmail.com
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL PREVIEW MODAL */}
      {selectedBannerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBannerModal(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl bg-card border border-border p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {selectedBannerModal.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedBannerModal.width} × {selectedBannerModal.height} px
                  · {selectedBannerModal.usage}
                </p>
              </div>

              <button
                onClick={() => setSelectedBannerModal(null)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="my-6 flex justify-center max-h-[65vh] overflow-auto rounded-2xl bg-neutral-900/10 p-2">
              <img
                src={selectedBannerModal.fileUrl}
                alt={selectedBannerModal.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedBannerModal(null)}
                className="rounded-xl border border-input bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent"
              >
                Close
              </button>

              <button
                onClick={() => {
                  handleDownloadBanner(selectedBannerModal);
                  setSelectedBannerModal(null);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                <span>Download High-Res PNG</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
