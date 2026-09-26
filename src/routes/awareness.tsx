import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Eye,
  Hand,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Calendar,
  Printer,
  Copy,
  Check,
  ArrowRight,
  Play,
} from "lucide-react";
import { contactEmail } from "@/lib/event-data";
import bseHeroImg from "@/assets/bse-hero-screening.jpg";
import bseStep1Img from "@/assets/bse-step1.jpg";
import bseStep2Img from "@/assets/bse-step2.jpg";
import bseStep3Img from "@/assets/bse-step3.jpg";
import bseStep4Img from "@/assets/bse-step4.jpg";
import bseStep5Img from "@/assets/bse-step5.jpg";

export const Route = createFileRoute("/awareness")({
  head: () => ({
    meta: [
      { title: "Breast Self-Examination Guide & Awareness — PinkWalk" },
      {
        name: "description",
        content:
          "Step-by-step Breast Self-Examination (BSE) guide, visual graphics, warning signs, early detection tips, and screening advice from PinkWalk and Cancer Care Nepal.",
      },
      {
        property: "og:title",
        content: "Breast Self-Examination (BSE) Guide — PinkWalk Awareness",
      },
      {
        property: "og:description",
        content:
          "Learn how to perform a monthly Breast Self-Examination (BSE) in 5 easy steps with clear visual graphics for early breast cancer detection.",
      },
    ],
  }),
  component: AwarenessPage,
});

/* ==========================================================================
   MAIN AWARENESS PAGE COMPONENT
   ========================================================================== */

function AwarenessPage() {
  const [copied, setCopied] = useState<boolean>(false);

  const steps = [
    {
      step: 1,
      title: "Visual Inspection in Front of a Mirror (Arms at Sides)",
      tagline: "Look closely at your breasts in front of a mirror with your shoulders straight and arms on your hips.",
      image: bseStep1Img,
      instructions: [
        "Check that your breasts are their usual size, shape, and color.",
        "Look for any visible dimpling, puckering, or bulging of the skin.",
        "Check for nipples that have changed position or become inverted (pushed inward).",
        "Look for any redness, soreness, rash, or swelling.",
      ],
      tip: "It is normal for one breast to be slightly larger than the other. Look out for new changes in symmetry or contour.",
    },
    {
      step: 2,
      title: "Visual Inspection (Arms Raised Overhead)",
      tagline: "Raise your arms high overhead and look for the same visual changes as tissue lifts.",
      image: bseStep2Img,
      instructions: [
        "Raise both arms high overhead and inspect both breasts from the front and sides.",
        "Look for any skin dimpling, tightness, or tethering as the breast tissue shifts upward.",
        "Check the underside of your breasts where tissue meets the chest wall.",
      ],
      tip: "Raising your arms stretches the chest muscles, making underlying skin changes or dimples far more noticeable.",
    },
    {
      step: 3,
      title: "Check Nipple Fluid & Discharge",
      tagline: "Look for any unusual fluid coming out of one or both nipples.",
      image: bseStep3Img,
      instructions: [
        "Gently squeeze the nipple of each breast between your thumb and forefinger.",
        "Check if any fluid comes out — milky, yellow, clear, or bloody fluid.",
        "Note if fluid occurs spontaneously without squeezing or only from one single breast.",
      ],
      tip: "If you notice any clear, pink, or bloody discharge, schedule a consultation with a doctor promptly.",
    },
    {
      step: 4,
      title: "Feel Breasts Lying Down (Palpation with 3 Pressure Levels)",
      tagline: "Lie flat on your back with a pillow under your shoulder and use finger pads to examine tissue.",
      image: bseStep4Img,
      instructions: [
        "Lie flat on your back with a pillow under your right shoulder and place your right arm behind your head.",
        "Use the flat pads (not fingertips) of your 3 middle fingers pressed together.",
        "Use small, overlapping circular motions about the size of a coin to feel the breast tissue.",
        "Apply 3 levels of pressure: Light (skin surface), Medium (deeper tissue), and Firm (closest to chest wall/ribs).",
        "Cover the entire breast from collarbone to top of abdomen, and from armpit to cleavage.",
        "Switch sides: place pillow under left shoulder and use right hand for left breast.",
      ],
      tip: "Lying flat spreads the breast tissue evenly over your chest wall, making it easier to feel every layer.",
    },
    {
      step: 5,
      title: "Feel Breasts Standing or in the Shower",
      tagline: "Feel your breasts while standing or sitting, especially when skin is wet and slippery in the shower.",
      image: bseStep5Img,
      instructions: [
        "Soapy skin in the shower helps your fingers glide smoothly over your breasts.",
        "Raise one arm behind your head and use the opposite hand to feel the entire breast and collarbone area.",
        "Be sure to check your armpit (axilla) area, where breast tissue extends into the underarm.",
        "Repeat the same circular motions with light, medium, and firm pressure.",
      ],
      tip: "Performing this step every month in the shower builds familiarity with your normal breast texture.",
    },
  ];

  const warningSigns = [
    {
      title: "Lumping or Thickening",
      description:
        "A distinct hard lump, painless mass, or localized tissue thickening inside the breast or underarm area.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M22 56 C22 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <circle cx="46" cy="38" r="6" fill="#EC008C" />
          <circle cx="46" cy="38" r="9" stroke="#EC008C" strokeWidth="1" strokeDasharray="2 1" fill="none" />
        </svg>
      ),
    },
    {
      title: "Skin Dimpling",
      description:
        "Small indentations, puckering, or skin surface dimpling that looks similar to an orange peel (peau d'orange).",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M22 56 C22 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <circle cx="36" cy="38" r="1.5" fill="#EC008C" />
          <circle cx="42" cy="40" r="1.5" fill="#EC008C" />
          <circle cx="46" cy="37" r="1.5" fill="#EC008C" />
          <circle cx="40" cy="44" r="1.5" fill="#EC008C" />
          <path d="M34 36 C40 33 46 36 48 40" stroke="#EC008C" strokeWidth="1.5" strokeDasharray="2 1" />
        </svg>
      ),
    },
    {
      title: "Clear or Bloody Nipple Discharge",
      description:
        "Spontaneous fluid leaking out of the nipple — clear, yellow, or bloody, especially from a single breast.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M22 56 C22 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="2.5" fill="#EC008C" />
          <path d="M40 44 C40 44 36 52 40 55 C44 55 40 44 40 44 Z" fill="#EC008C" />
        </svg>
      ),
    },
    {
      title: "Skin Color or Texture Change",
      description:
        "Redness, scaling, ridging, warmth, or unusual texture changes on the breast skin or areola.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M22 56 C22 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <path d="M30 42 C34 34 46 34 50 42" stroke="#EC008C" strokeWidth="2" strokeDasharray="3 2" fill="none" />
          <path d="M34 46 C38 40 42 40 46 46" stroke="#EC008C" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
        </svg>
      ),
    },
    {
      title: "Pulled in Nipple (Inversion)",
      description:
        "A nipple that turns inward, changes position, flattens, or retracts into the breast tissue.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M22 56 C22 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="4.5" fill="#EC008C" />
          <path d="M33 40 L37 40 M47 40 L43 40" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" />
          <path d="M35 38 L37 40 L35 42 M45 38 L43 40 L45 42" stroke="#EC008C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Size or Shape Change",
      description:
        "An unexplained, sudden change in the overall size, contour, weight, or symmetry of one breast.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M18 56 C18 36 38 36 38 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <path d="M38 56 C38 28 64 28 64 56 Z" fill="#FFF" stroke="#EC008C" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Armpit Pain or Swelling",
      description:
        "Persistent pain, discomfort, or swollen lymph node lumps in the axilla (underarm) area.",
      icon: (
        <svg viewBox="0 0 80 80" className="h-14 w-14 shrink-0 drop-shadow-xs">
          <circle cx="40" cy="40" r="36" fill="#FFF5F8" stroke="#EC008C" strokeWidth="2.5" />
          <path d="M25 56 C25 34 58 34 58 56 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
          <path d="M20 32 C30 26 30 36 24 48" stroke="#EC008C" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="22" cy="34" r="3.5" fill="#EC008C" />
          <circle cx="26" cy="40" r="2.5" fill="#EC008C" />
        </svg>
      ),
    },
  ];

  const handleCopyGuide = () => {
    const text = `Breast Self-Examination (BSE) Guide — PinkWalk Nepal\n\nWhen to check: Once every month (7-10 days after your period starts).\n\n5 Easy Steps:\n1. Visual Inspection in Mirror (Arms at Sides)\n2. Visual Inspection (Arms Raised Overhead)\n3. Check Nipple Discharge\n4. Feel Breasts Lying Down (Using 3 pressure levels)\n5. Feel Breasts Standing or in Shower\n\nFor screening & medical inquiries, visit https://pinkwalk.github.io/awareness`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 print:p-0 print:m-0 print:max-w-none">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 text-center border-b border-border/60 print:hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Heart className="h-3.5 w-3.5 fill-primary" />
          <span>Health Guide & Prevention</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Breast Self-Examination <span className="text-gradient-pink">Guide</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Early detection is the strongest tool against breast cancer. Performing a monthly Breast Self-Examination (BSE) takes only 5 minutes and helps you know your normal body so you can notice any changes early.
        </p>

        {/* Hero Screening Photograph Banner */}
        <div className="mt-8 relative overflow-hidden rounded-3xl border border-primary/20 shadow-soft">
          <img
            src={bseHeroImg}
            alt="Breast Cancer Awareness & Medical Screening Consultation"
            className="w-full h-auto max-h-[440px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5" />
                Cancer Care Nepal Approved Guide
              </span>
              <p className="text-white font-display text-lg sm:text-xl font-bold mt-2">
                Knowledge Saves Lives: Understand Your Normal & Detect Changes Early
              </p>
            </div>
          </div>
        </div>

        {/* Quick Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <button
            onClick={handleCopyGuide}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Copied Summary</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-primary" />
                <span>Copy Summary</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Printer className="h-3.5 w-3.5 text-primary" />
            <span>Print Full Guide</span>
          </button>

          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
          >
            <span>Walk With Us (Oct 3)</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* When to Perform Section Card */}
      <section className="my-10 rounded-3xl border border-primary/20 bg-pink-wash/70 p-6 sm:p-8 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
              <Calendar className="h-3.5 w-3.5" />
              <span>Recommended Frequency</span>
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground">
              When Should You Perform a Self-Exam?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Examine your breasts <strong className="text-foreground font-semibold">once every month</strong>. The best time is <strong>7 to 10 days after your menstrual period starts</strong>, when breasts are least likely to be swollen or tender. If you no longer have periods, pick a fixed date (like the 1st of every month).
            </p>
          </div>

          <div className="shrink-0 rounded-2xl bg-card p-5 border border-border text-center sm:text-left shadow-xs">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Quick Rule of Thumb
            </p>
            <p className="font-display text-lg font-bold text-foreground mt-1">
              Monthly Routine = 5 Minutes
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Look, Feel, & Note Changes
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: EMBEDDED VIDEO TUTORIALS */}
      <section className="my-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-wash px-3 py-1 text-xs font-semibold text-primary border border-primary/20 mb-2">
            <Play className="h-3.5 w-3.5 fill-primary" />
            <span>Video Demonstration & Guides</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Watch: Breast Self-Exam Video Tutorials
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
            Watch these step-by-step video guides demonstrating the proper techniques for monthly breast self-examination and early detection.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Video 1: Self Examination Guide */}
          <div className="space-y-2.5">
            <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-pink">1</span>
              <span>Breast Self-Examination Step-by-Step</span>
            </h3>
            <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video shadow-md border border-border/80">
              <iframe
                src="https://www.youtube-nocookie.com/embed/tfh0aOq-ys0"
                title="Breast Self-Examination Video Guide"
                className="absolute top-0 left-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video 2: Early Detection Overview */}
          <div className="space-y-2.5">
            <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-wash text-xs font-bold text-primary border border-primary/30">2</span>
              <span>Early Detection & Warning Signs Overview</span>
            </h3>
            <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video shadow-md border border-border/80">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eY6p1lnxbyY"
                title="Breast Cancer Video made by NHEICC"
                className="absolute top-0 left-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ALL 5 STEPS (FULL SEQUENTIAL DISPLAY WITH GRAPHICS) */}
      <section className="py-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Step-by-Step Visual Instructions
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-1">
            5 Complete Steps to Perform a Breast Self-Exam
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Follow these 5 simple steps every month to inspect and feel your breast tissue thoroughly.
          </p>
        </div>

        {/* List of All 5 Steps */}
        <div className="space-y-12">
          {steps.map((s) => {
            return (
              <div
                key={s.step}
                className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft transition-all hover:border-primary/30 print:border-none print:shadow-none print:p-0 print:mb-8"
              >
                <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-center">
                  {/* Left Column: Visual Healthcare Graphic Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-soft">
                    <img
                      src={s.image}
                      alt={`Step ${s.step}: ${s.title}`}
                      className="h-full w-full object-cover aspect-[4/3]"
                    />
                  </div>

                  {/* Right Column: Step Content */}
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border/70">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-pink">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                          Step {s.step}: {s.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 font-medium">
                          {s.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Instructions List */}
                    <div className="mt-5 space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        What to do:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                        {s.instructions.map((inst, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tip Box */}
                    <div className="mt-5 rounded-2xl bg-pink-wash/80 p-4 border border-primary/15 text-xs sm:text-sm text-foreground">
                      <p className="font-semibold text-primary flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4" />
                        <span>Key Examination Tip:</span>
                      </p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{s.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WARNING SIGNS GRID */}
      <section className="my-16 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive border border-destructive/20 mb-3">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Critical Awareness</span>
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground">
            7 Warning Signs to Watch Out For
          </h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            While most breast lumps are benign (non-cancerous), you should contact a doctor or visit Cancer Care Nepal immediately if you notice any of these key symptoms during your monthly exam:
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {warningSigns.map((w, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-background p-4 shadow-xs transition-colors hover:border-primary/40"
            >
              {w.icon}
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL SCREENING & MAMMOGRAM ADVICE CARD */}
      <section className="my-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-6 sm:p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px] items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Stethoscope className="h-3.5 w-3.5" />
              <span>Medical Screening Guidelines</span>
            </span>

            <h2 className="font-display text-3xl font-bold text-foreground">
              Clinical Breast Exams & Mammograms
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A monthly Breast Self-Exam (BSE) is an essential self-awareness tool, but it does <strong className="text-foreground font-semibold">not replace regular clinical breast exams or mammography</strong>.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Ages 20 – 39:</strong> Clinical breast exam by a doctor or trained nurse at least once every 1–3 years.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Ages 40+:</strong> Annual mammogram screening in addition to annual clinical breast exams.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>High Risk / Family History:</strong> Consult a specialist early about mammograms or breast ultrasound screening starting before age 40.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-soft text-center space-y-4">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
            <div>
              <h3 className="font-display text-base font-bold text-foreground">
                Cancer Care Nepal Partner
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                PinkWalk is organized in partnership with medical experts to provide screening consultations during event day.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-pink transition-transform hover:opacity-95"
            >
              Contact Health Committee
            </a>
          </div>
        </div>
      </section>
      {/* CTA Footer */}
      <section className="pb-20 text-center print:hidden">
        <div className="rounded-3xl border border-primary/20 bg-pink-wash p-8 sm:p-12 shadow-soft">
          <Heart className="mx-auto h-10 w-10 text-primary mb-3 fill-primary/20" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Spread Awareness — Walk With Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Share this Breast Self-Examination guide with your friends, sisters, mothers, and colleagues. Join us for PinkWalk 2026 on October 3rd to walk together for health and solidarity.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link
              to="/register"
              className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
            >
              Register for PinkWalk 2026
            </Link>
            <Link
              to="/press-release"
              className="rounded-full border border-input bg-card px-6 py-3 text-foreground hover:bg-accent"
            >
              Read Press Announcements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
