import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  Heart,
  Calendar,
  MapPin,
  RefreshCw,
} from "lucide-react";
import { thisYearEvent } from "@/lib/event-data";
import invitationSvg from "@/assets/invitation.svg";

export const Route = createFileRoute("/invite")({
  head: () => ({
    meta: [
      { title: "Invite Friends — PinkWalk 2026 Card Generator" },
      {
        name: "description",
        content:
          "Create personalized invitation cards for your friends and family to join PinkWalk 2026 breast cancer awareness walk in Kathmandu.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2026 — Personalized Friend Invitation Card",
      },
      {
        property: "og:description",
        content:
          "Generate custom PinkWalk invitation graphics and invite your loved ones to walk for breast cancer awareness.",
      },
    ],
  }),
  component: InvitePage,
});

function InvitePage() {
  const [inviteeName, setInviteeName] = useState("");
  const [friendList, setFriendList] = useState<string[]>([]);
  const [batchInput, setBatchInput] = useState("");
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [activeFriendIndex, setActiveFriendIndex] = useState(0);

  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Load SVG card background image once
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = invitationSvg;
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  // Determine current display name
  const currentDisplayName = isBatchMode
    ? friendList[activeFriendIndex] || ""
    : inviteeName;

  // Draw card on canvas
  const drawCard = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef.current || !imageLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cardImageWidth = 1080;
    const cardImageHeight = 1920;

    canvas.width = cardImageWidth;
    canvas.height = cardImageHeight;

    // Fill solid white background for clean JPG export
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, cardImageWidth, cardImageHeight);

    // Draw background SVG template image
    ctx.drawImage(imageRef.current, 0, 0, cardImageWidth, cardImageHeight);

    const nameToRender = currentDisplayName.trim();
    if (nameToRender) {
      // Dynamic font sizing for 1080x1920 canvas viewBox
      let fontSize = 68;
      if (nameToRender.length > 40) {
        fontSize = 44;
      } else if (nameToRender.length > 30) {
        fontSize = 52;
      } else if (nameToRender.length > 20) {
        fontSize = 58;
      }

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#31006E"; // Deep purple brand color
      ctx.font = `500 ${fontSize}px "Montserrat", "Outfit", sans-serif`;

      // Render invitee name centered at (540, 1300)
      ctx.fillText(nameToRender, 540, 1000);

      ctx.restore();
    }
  }, [currentDisplayName, imageLoaded]);

  useEffect(() => {
    drawCard();
  }, [drawCard]);

  // Handle high-res card download
  const handleDownloadCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsGenerating(true);
    setTimeout(() => {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      const cleanName = (currentDisplayName || "Friend")
        .replace(/[^a-zA-Z0-9]/g, "_")
        .toLowerCase();
      link.download = `${cleanName}-pinkwalk-invitation.jpg`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsGenerating(false);
    }, 150);
  };

  // Handle native Web Share or WhatsApp fallback
  const handleShareCard = async () => {
    const canvas = canvasRef.current;
    const friend = currentDisplayName.trim() || "Friend";
    const shareText = `Hey ${friend}! 💕 I'm inviting you to join PinkWalk 2026 for Breast Cancer Awareness on ${thisYearEvent.dateNote}. Let's walk together! 🌸`;

    if (canvas && navigator.share && navigator.canShare) {
      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], `${friend}-PinkWalk-Invitation.jpg`, {
            type: "image/jpeg",
          });

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: "PinkWalk 2026 Invitation",
              text: shareText,
              files: [file],
            });
            return;
          }

          // Fallback share text
          await navigator.share({
            title: "PinkWalk 2026 Invitation",
            text: shareText,
            url: window.location.href,
          });
        }, "image/jpeg", 0.95);
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      // Direct WhatsApp share fallback
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${shareText}\n${window.location.href}`
      )}`;
      window.open(waUrl, "_blank");
    }
  };

  // Copy invitation text message
  const handleCopyText = () => {
    const friend = currentDisplayName.trim() || "Friend";
    const message = `Hi ${friend}! 🌸\n\nI want to invite you to walk with me at PinkWalk 2026, a community breast cancer awareness walk in Kathmandu!\n\n📅 Date: ${thisYearEvent.dateNote}\n📍 Route: ${thisYearEvent.route.startLabel} to ${thisYearEvent.route.endLabel}\n\nLet's support breast cancer survivors and raise awareness together! 💕\n\nLearn more & register: ${window.location.origin}`;

    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Process batch input lines
  const handleProcessBatch = () => {
    const names = batchInput
      .split(/[\n,]+/)
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    if (names.length > 0) {
      setFriendList(names);
      setActiveFriendIndex(0);
      setIsBatchMode(true);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header Banner */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Card Generator · PinkWalk 2026</span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          Invite Your <span className="text-gradient-pink">Friends & Family</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Personalize an official PinkWalk 2026 invitation card for your loved ones. Enter their name below to instantly generate a personalized card graphic ready to download and share!
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Form Controls & Inputs */}
        <div className="space-y-6 lg:col-span-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {/* Mode Switch Tabs */}
            <div className="mb-6 flex rounded-2xl bg-muted/60 p-1">
              <button
                type="button"
                onClick={() => setIsBatchMode(false)}
                className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-all sm:text-sm ${!isBatchMode
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Single Invite
              </button>
              <button
                type="button"
                onClick={() => setIsBatchMode(true)}
                className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-all sm:text-sm ${isBatchMode
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Batch Friends List ({friendList.length})
              </button>
            </div>

            {!isBatchMode ? (
              /* Single Invite Form */
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="invitee-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Friend / Invitee Full Name
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="invitee-name"
                      type="text"
                      value={inviteeName}
                      onChange={(e) => setInviteeName(e.target.value)}
                      placeholder="e.g. Anjali Sharma"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Batch Friends Form */
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="batch-input"
                    className="block text-sm font-medium text-foreground"
                  >
                    Enter Multiple Friends' Names
                  </label>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Enter one name per line or separated by commas to generate cards for all of them.
                  </p>
                  <textarea
                    id="batch-input"
                    rows={4}
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    placeholder={`Anjali Sharma\nSujan Karki\nPooja Shrestha\nAarav Thapa`}
                    className="mt-2 w-full rounded-xl border border-input bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleProcessBatch}
                  className="w-full rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  Process Friend List
                </button>

                {friendList.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">
                      Select Friend to Preview:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {friendList.map((name, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveFriendIndex(idx)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${activeFriendIndex === idx
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "border border-border bg-background text-foreground hover:bg-accent"
                            }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 space-y-3 border-t border-border/60 pt-6">
              <button
                type="button"
                onClick={handleDownloadCard}
                disabled={isGenerating}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="h-5 w-5" />
                <span>
                  {isGenerating ? "Generating Card..." : "Download High-Res Card (.JPG)"}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleShareCard}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Share2 className="h-4 w-4 text-primary" />
                  <span>Share Card</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-primary" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Event Summary Box */}
          <div className="rounded-3xl border border-border/80 bg-pink-wash/50 p-6">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
              <Heart className="h-4 w-4 text-primary fill-primary/20" />
              <span>PinkWalk 2026 Event Details</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{thisYearEvent.dateNote} ({thisYearEvent.date})</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>
                  {thisYearEvent.route.startLabel} → {thisYearEvent.route.endLabel}
                </span>
              </li>
            </ul>
            <div className="mt-4 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Learn more about registering for the walk &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Live Card Canvas Preview */}
        <div className="flex flex-col items-center justify-center lg:col-span-6">
          <div className="relative w-full max-w-[380px] rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-5">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Card Preview
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Render (1080×1920)
              </span>
            </div>

            {/* Canvas Container with aspect ratio matching 1080x1920 (9:16) */}
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-inner aspect-[1080/1920]">
              <canvas
                ref={canvasRef}
                className="h-full w-full object-contain"
              />

              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card text-center p-4">
                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Loading Invitation Template...
                  </p>
                </div>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              {currentDisplayName.trim()
                ? `Personalized for "${currentDisplayName.trim()}"`
                : "Type a friend's name above to personalize this card."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
