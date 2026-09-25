import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Printer,
  Sparkles,
  Calendar,
  MapPin,
  Heart,
  ShieldCheck,
  Building2,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Share2,
} from "lucide-react";
import logo from "@/assets/pinkwalk-logo.png";
import infiniteLogo from "@/assets/infinite-logo.jpg";
import cancerCareLogo from "@/assets/cancercare-logo.jpg";
import infiniteCaresLogo from "@/assets/infinitecares-logo.svg";
import {
  thisYearEvent,
  lastEvent,
  partners,
  supporters,
  contactEmail,
} from "@/lib/event-data";

export const Route = createFileRoute("/slides")({
  head: () => ({
    meta: [
      { title: "Guest Slide Deck — PinkWalk 2026 Presentation" },
      {
        name: "description",
        content:
          "Official guest slide deck presentation for PinkWalk 2026 breast cancer awareness walk in Kathmandu Valley. Basantapur to Mangal Bazar on October 3rd, 2026.",
      },
      {
        property: "og:title",
        content: "PinkWalk 2026 — Official Guest Slide Deck",
      },
      {
        property: "og:description",
        content:
          "Explore event details, route, organizers, guest dignitaries, and key objectives for PinkWalk 2026.",
      },
    ],
  }),
  component: SlidesPage,
});

function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      }
      setIsFullscreen(false);
    }
  };

  const slides = [
    // Slide 1: Welcome / Cover
    <div key="slide-1" className="flex flex-col items-center justify-center text-center space-y-6 h-full px-4 sm:px-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Official Guest Presentation · {thisYearEvent.year}</span>
      </span>

      <img src={logo} alt="PinkWalk Logo" className="h-16 sm:h-20 w-auto my-2" />

      <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight text-foreground max-w-4xl">
        Walk Together. <span className="text-gradient-pink">Raise Awareness.</span>
      </h1>

      <p className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed">
        Community Breast Cancer Awareness Walkathon through the historic heart of Kathmandu Valley
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-foreground pt-4">
        <div className="flex items-center gap-2 rounded-2xl bg-card border border-border px-5 py-3 shadow-xs">
          <Calendar className="h-5 w-5 text-primary" />
          <span>{thisYearEvent.date} ({thisYearEvent.dateNote})</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-card border border-border px-5 py-3 shadow-xs">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Basantapur → Mangal Bazar</span>
        </div>
      </div>
    </div>,

    // Slide 2: Executive Overview
    <div key="slide-2" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Executive Summary</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          PinkWalk 2026 Overview
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-primary/20 bg-pink-wash/60 p-5 text-center">
          <p className="text-xs text-muted-foreground font-medium uppercase">Date</p>
          <p className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">Oct 3, 2026</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Saturday Morning</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
          <p className="text-xs text-muted-foreground font-medium uppercase">Distance</p>
          <p className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">4.3 km</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">~1 Hour Walk</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
          <p className="text-xs text-muted-foreground font-medium uppercase">Assembly</p>
          <p className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">6:00 AM</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Basantapur Square</p>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-pink-wash/60 p-5 text-center">
          <p className="text-xs text-muted-foreground font-medium uppercase">Expected Walkers</p>
          <p className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">1,500+</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Citizens & Dignitaries</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">Event Highlights</h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          {thisYearEvent.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,

    // Slide 3: Our Cause & Mission
    <div key="slide-3" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Purpose & Impact</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Why We Walk: Early Detection Saves Lives
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-pink-wash flex items-center justify-center text-primary font-bold">1</div>
          <h3 className="font-display text-lg font-semibold text-foreground">Promote Early Detection</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Breast cancer detected in early stages has over 90% treatability. PinkWalk educates women and families on regular Breast Self-Examinations (BSE) and mammography screenings.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-pink-wash flex items-center justify-center text-primary font-bold">2</div>
          <h3 className="font-display text-lg font-semibold text-foreground">Break Social Stigma</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Open health dialogues eliminate hesitation around breast healthcare in Nepali society, encouraging timely consultation with healthcare providers.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-pink-wash flex items-center justify-center text-primary font-bold">3</div>
          <h3 className="font-display text-lg font-semibold text-foreground">Support Patients & Survivors</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Partnering with Cancer Care Nepal to provide medical guidance and financial treatment assistance to underprivileged patients fighting breast cancer.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-pink-wash flex items-center justify-center text-primary font-bold">4</div>
          <h3 className="font-display text-lg font-semibold text-foreground">Unite Civic & Corporate Leaders</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bringing together mayors, corporate leaders, IT professionals, doctors, students, and media in a shared commitment to public health.
          </p>
        </div>
      </div>
    </div>,

    // Slide 4: Heritage Route
    <div key="slide-4" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Walkathon Route</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Historic Twin Capital Route (4.3 km)
        </h2>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
          <div>
            <span className="text-xs text-muted-foreground font-medium">Starting Point</span>
            <p className="font-display text-lg font-bold text-foreground">{thisYearEvent.route.startFull}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-primary shrink-0" />
          <div className="text-right">
            <span className="text-xs text-muted-foreground font-medium">Destination</span>
            <p className="font-display text-lg font-bold text-foreground">{thisYearEvent.route.endFull}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Route Checkpoints:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-medium">
            {thisYearEvent.routeStops.map((stop, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl bg-muted/50 p-2.5 border border-border/60">
                <span className="h-5 w-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="truncate">{stop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-xs">
        <div className="rounded-2xl bg-pink-wash/50 p-4 border border-primary/20">
          <p className="font-bold text-foreground">Flag-Off: 6:00 AM</p>
          <p className="text-muted-foreground mt-1">Basantapur Durbar Square UNESCO site</p>
        </div>
        <div className="rounded-2xl bg-pink-wash/50 p-4 border border-primary/20">
          <p className="font-bold text-foreground">Hydration & Support</p>
          <p className="text-muted-foreground mt-1">Water & medical stations along the way</p>
        </div>
        <div className="rounded-2xl bg-pink-wash/50 p-4 border border-primary/20">
          <p className="font-bold text-foreground">Finish Ceremony</p>
          <p className="text-muted-foreground mt-1">Mangal Bazar, Patan Durbar Square</p>
        </div>
      </div>
    </div>,

    // Slide 5: Organizers
    <div key="slide-5" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Organizational Leadership</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Organizers & CSR Backing
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="h-10 flex items-center mb-3">
              <img src={infiniteCaresLogo} alt="Infinite Cares" className="h-9 w-auto object-contain" />
            </div>
            <h3 className="font-bold text-foreground text-sm">Lead Event Organizer</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              The CSR wing of Infinite Software Services Nepal, driving healthcare awareness, women's wellbeing, and community solidarity across Nepal.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-primary">Mobilizing 600+ Professionals</span>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="h-10 flex items-center mb-3">
              <img src={cancerCareLogo} alt="Cancer Care Nepal" className="h-9 w-auto object-contain" />
            </div>
            <h3 className="font-bold text-foreground text-sm">Medical & Non-Profit Partner</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Dedicated to cancer prevention, community screening camps, and direct financial care for underprivileged patients across Nepal.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-primary">Cancer Care & Screening Partner</span>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="h-10 flex items-center mb-3">
              <img src={infiniteLogo} alt="Infinite Software Services" className="h-8 w-auto object-contain" />
            </div>
            <h3 className="font-bold text-foreground text-sm">Infinite Computer Solutions</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Global digital tech & healthcare services provider empowering enterprises and supporting social sustainability in Nepal.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-primary">Global Technology Leader</span>
        </div>
      </div>
    </div>,

    // Slide 6: Proven Legacy
    <div key="slide-6" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Proven Track Record</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          PinkWalk 2023 Legacy & Impact
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
              <span>{lastEvent.date}</span>
              <span className="text-primary font-bold">{lastEvent.distance} Route</span>
            </div>
            <p className="font-display text-lg font-bold text-foreground">{lastEvent.venue}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{lastEvent.about}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-pink-wash/80 p-3.5 border border-primary/20">
              <p className="font-display text-2xl font-bold text-primary">600+</p>
              <p className="text-xs text-muted-foreground font-medium">Walkers Mobilized</p>
            </div>
            <div className="rounded-xl bg-pink-wash/80 p-3.5 border border-primary/20">
              <p className="font-display text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground font-medium">Community Driven</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-3">
          <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
            2023 Key Objectives Delivered:
          </h3>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            {lastEvent.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">{obj.title}:</strong> {obj.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Slide 7: Guests of Honor
    <div key="slide-7" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Dignitaries & Champions</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Honored Guests & Social Advocates
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {lastEvent.guests.map((g, idx) => (
          <div key={idx} className="rounded-2xl border border-border bg-card p-4 shadow-xs flex flex-col justify-between text-center space-y-3">
            <div>
              {g.image ? (
                <img src={g.image} alt={g.name} className="h-20 w-20 rounded-full object-cover mx-auto ring-2 ring-primary/30" />
              ) : (
                <div className="h-20 w-20 rounded-full bg-pink-wash flex items-center justify-center mx-auto text-primary font-bold text-xl">
                  {g.name[0]}
                </div>
              )}
              <h3 className="font-display font-bold text-sm text-foreground mt-3">{g.name}</h3>
              <p className="text-[11px] font-semibold text-primary">{g.role}</p>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-3 leading-relaxed">{g.bio}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 8: Partners & Supporters
    <div key="slide-8" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Ecosystem Support</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Our Partners & Supporters
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Civic Supporters:</p>
          <div className="grid grid-cols-3 gap-3 text-xs">
            {supporters.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-xs">
                {s.logo ? (
                  <img src={s.logo} alt={s.label} className="h-6 w-auto max-w-[80px] object-contain" />
                ) : (
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                )}
                <span className="font-semibold text-foreground truncate">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Corporate & Media Partners:</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 text-[11px]">
            {partners.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl border border-border bg-card p-2.5 shadow-xs">
                {p.logo && <img src={p.logo} alt={p.label} className="h-5 w-auto max-w-[60px] object-contain" />}
                <span className="font-medium text-foreground truncate">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 9: Guest Logistics
    <div key="slide-9" className="flex flex-col justify-center space-y-6 h-full px-4 sm:px-12">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Guest Guidelines</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-1">
          Event Day Schedule & Instructions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" /> Morning Timeline (Oct 3)
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">05:45 AM</span>
              <p className="text-muted-foreground">Guest Arrival & T-Shirt Distribution at Basantapur</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">06:15 AM</span>
              <p className="text-muted-foreground">Inaugural Flag-Off</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">06:30 AM</span>
              <p className="text-muted-foreground">Welcome Remarks</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">07:00 AM</span>
              <p className="text-muted-foreground">Walkathon Commences toward Patan</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">08:00 AM</span>
              <p className="text-muted-foreground">Arrival at Mangal Bazar, Patan Durbar Square</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">08:30 AM</span>
              <p className="text-muted-foreground">Closing Address</p>
            </div>
            <div className="flex gap-3 border-l-2 border-primary/40 pl-3">
              <span className="font-bold text-primary shrink-0">09:00 AM</span>
              <p className="text-muted-foreground">Group Photo Ceremony</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> Guest Comfort & Amenities
          </h3>
          <ul className="space-y-3 text-xs text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Dress Code:</strong> Pink Attire or Official PinkWalk T-Shirt (Sizes XXS to 4XL).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Hydration & Refreshments:</strong> Provided along route checkpoints and at destination.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Medical Safety:</strong> Ambulance and medical volunteers stationed throughout walk.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span><strong>Traffic Control:</strong> Coordinated with Metropolitan Traffic Police.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 10: Call to Action & Contact
    <div key="slide-10" className="flex flex-col items-center justify-center text-center space-y-6 h-full px-4 sm:px-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
        <Heart className="h-3.5 w-3.5 fill-primary" />
        <span>Join Us on October 3rd, 2026</span>
      </span>

      <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-foreground max-w-3xl">
        Together, We Walk for <span className="text-gradient-pink">Hope & Life</span>
      </h2>

      <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        Your presence inspires thousands across Nepal. Scan the QR code or visit our website to complete guest registration and reserve your event T-shirt.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          to="/register"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
        >
          <span>Register Now</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/invite"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground hover:bg-accent"
        >
          <Share2 className="h-4 w-4 text-primary" />
          <span>Invite Friends</span>
        </Link>
      </div>

      <div className="pt-6 border-t border-border/60 text-xs text-muted-foreground space-y-1">
        <p><strong>Contact Email:</strong> {contactEmail}</p>
        <p><strong>Organizers:</strong> Dijup Tuladhar & Lijala Shrestha (Infinite Cares)</p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Presentation Header Bar */}
      <header className="flex items-center justify-between border-b border-border/60 bg-card px-4 sm:px-6 py-3 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PinkWalk" className="h-7 w-auto" />
          </Link>
          <span className="hidden sm:inline-block text-xs font-semibold text-muted-foreground border-l border-border pl-3">
            Guest Presentation Deck
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-accent transition-colors"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5 text-primary" /> : <Play className="h-3.5 w-3.5 text-primary" />}
            <span className="hidden sm:inline">{isPlaying ? "Pause" : "Autoplay"}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-accent transition-colors"
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:bg-accent transition-colors"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 min-h-[72vh]">
        <div className="w-full max-w-5xl rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft transition-all duration-300 min-h-[580px] flex flex-col justify-center relative overflow-hidden">
          {slides[currentSlide]}
        </div>
      </main>

      {/* Slide Navigation Controls & Indicator */}
      <footer className="border-t border-border/60 bg-card px-4 sm:px-6 py-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <span>Slide {currentSlide + 1} of {totalSlides}</span>
          <span className="text-border">|</span>
          <span className="hidden sm:inline text-muted-foreground/80">Use ← → arrow keys to navigate</span>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-muted hover:bg-muted-foreground/40"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="flex items-center gap-1 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-pink hover:opacity-95 transition-transform hover:-translate-y-0.5"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
