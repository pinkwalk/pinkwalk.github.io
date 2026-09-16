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
   CUSTOM SVG GRAPHIC COMPONENTS FOR EACH STEP
   ========================================================================== */

function BseStep1Graphic() {
  return (
    <div className="relative flex h-60 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-4 border border-primary/20 shadow-soft">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pink Circle Frame */}
        <circle cx="100" cy="92" r="75" fill="#FFF5F8" stroke="#EC008C" strokeWidth="3" />
        <circle cx="100" cy="92" r="71" fill="none" stroke="#F472B6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

        {/* Head & Neck */}
        <circle cx="100" cy="48" r="14" fill="#F43F5E" opacity="0.8" />
        <path d="M96 62 L96 70 L104 70 L104 62 Z" fill="#E11D48" />

        {/* Torso & Breasts Contour */}
        <path d="M72 82 C72 74 128 74 128 82 L124 135 L76 135 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="2" />
        <path d="M72 82 C75 95 98 112 100 112 C102 112 125 95 128 82" stroke="#EC008C" strokeWidth="2" />

        {/* Breast Tissue Contours */}
        <path d="M76 96 C76 86 96 86 96 96 C96 106 76 106 76 96 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
        <path d="M104 96 C104 86 124 86 124 96 C124 106 104 106 104 96 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
        <circle cx="86" cy="96" r="3" fill="#EC008C" />
        <circle cx="114" cy="96" r="3" fill="#EC008C" />

        {/* Hands Resting on Hips */}
        <path d="M72 82 C65 92 65 105 76 112" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M128 82 C135 92 135 105 124 112" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" />

        {/* Mirror Reflection Ray Icon */}
        <g transform="translate(138, 38)">
          <circle cx="10" cy="10" r="14" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
          <path d="M5 10 C5 7 15 7 15 10 C15 13 5 13 5 10 Z" stroke="#EC008C" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2.5" fill="#EC008C" />
        </g>

        {/* Bottom Label Badge Pill */}
        <rect x="25" y="148" width="150" height="24" rx="12" fill="#EC008C" />
        <text x="100" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
          STEP 1: MIRROR CHECK
        </text>
      </svg>
    </div>
  );
}

function BseStep2Graphic() {
  return (
    <div className="relative flex h-60 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-4 border border-primary/20 shadow-soft">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pink Circle Frame */}
        <circle cx="100" cy="92" r="75" fill="#FFF5F8" stroke="#EC008C" strokeWidth="3" />
        <circle cx="100" cy="92" r="71" fill="none" stroke="#F472B6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

        {/* Head & Neck */}
        <circle cx="100" cy="52" r="14" fill="#F43F5E" opacity="0.8" />
        <path d="M96 66 L96 74 L104 74 L104 66 Z" fill="#E11D48" />

        {/* Arms Raised High */}
        <path d="M72 85 L60 48 L72 32" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M128 85 L140 48 L128 32" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Torso & Lifted Breasts */}
        <path d="M72 85 C72 78 128 78 128 85 L124 135 L76 135 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="2" />
        <path d="M76 96 C76 86 96 86 96 96 C96 106 76 106 76 96 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
        <path d="M104 96 C104 86 124 86 124 96 C124 106 104 106 104 96 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
        <circle cx="86" cy="95" r="3" fill="#EC008C" />
        <circle cx="114" cy="95" r="3" fill="#EC008C" />

        {/* Upward Movement Motion Arrows */}
        <path d="M54 75 L54 58 M54 58 L50 63 M54 58 L58 63" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M146 75 L146 58 M146 58 L142 63 M146 58 L150 63" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom Label Badge Pill */}
        <rect x="25" y="148" width="150" height="24" rx="12" fill="#EC008C" />
        <text x="100" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
          STEP 2: ARMS OVERHEAD
        </text>
      </svg>
    </div>
  );
}

function BseStep3Graphic() {
  return (
    <div className="relative flex h-60 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-4 border border-primary/20 shadow-soft">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pink Circle Frame */}
        <circle cx="100" cy="92" r="75" fill="#FFF5F8" stroke="#EC008C" strokeWidth="3" />
        <circle cx="100" cy="92" r="71" fill="none" stroke="#F472B6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

        {/* Close-Up Breast Contour */}
        <path d="M45 130 C45 68 155 68 155 130 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="2" />
        <circle cx="100" cy="92" r="22" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="100" cy="92" r="5" fill="#EC008C" />

        {/* Finger Pinch Indicators */}
        <path d="M74 92 L88 92" stroke="#EC008C" strokeWidth="3" strokeLinecap="round" />
        <path d="M83 87 L88 92 L83 97" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M126 92 L112 92" stroke="#EC008C" strokeWidth="3" strokeLinecap="round" />
        <path d="M117 87 L112 92 L117 97" stroke="#EC008C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Fluid Discharge Droplet */}
        <path d="M100 102 C100 102 95 113 100 117 C105 117 100 102 100 102 Z" fill="#EC008C" />

        {/* Bottom Label Badge Pill */}
        <rect x="25" y="148" width="150" height="24" rx="12" fill="#EC008C" />
        <text x="100" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
          STEP 3: NIPPLE CHECK
        </text>
      </svg>
    </div>
  );
}

function BseStep4Graphic() {
  return (
    <div className="relative flex h-60 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-4 border border-primary/20 shadow-soft">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pink Circle Frame */}
        <circle cx="100" cy="92" r="75" fill="#FFF5F8" stroke="#EC008C" strokeWidth="3" />
        <circle cx="100" cy="92" r="71" fill="none" stroke="#F472B6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

        {/* Pillow & Reclining Angle */}
        <path d="M40 115 L160 115 L160 132 C160 132 40 132 40 132 Z" fill="#E5E7EB" />
        <path d="M40 108 C40 108 65 92 90 108 Z" fill="#CBD5E1" />

        {/* Lying Torso & Breast Tissue */}
        <path d="M50 105 C70 92 145 92 160 105 L160 115 L50 115 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="1.5" />
        <path d="M85 105 C85 84 125 84 125 105 Z" fill="#FFF" stroke="#EC008C" strokeWidth="2" />
        <circle cx="105" cy="93" r="3" fill="#EC008C" />

        {/* 3 Circular Motion Rings (Light, Medium, Firm Pressure) */}
        <circle cx="105" cy="93" r="14" stroke="#F472B6" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="105" cy="93" r="22" stroke="#EC008C" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* 3 Finger Pads Indicator Icon */}
        <g transform="translate(118, 62)">
          <rect x="0" y="0" width="6" height="16" rx="3" fill="#EC008C" />
          <rect x="8" y="-3" width="6" height="19" rx="3" fill="#EC008C" />
          <rect x="16" y="0" width="6" height="16" rx="3" fill="#EC008C" />
        </g>

        {/* Bottom Label Badge Pill */}
        <rect x="25" y="148" width="150" height="24" rx="12" fill="#EC008C" />
        <text x="100" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
          STEP 4: LYING DOWN PALPATION
        </text>
      </svg>
    </div>
  );
}

function BseStep5Graphic() {
  return (
    <div className="relative flex h-60 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-wash via-white to-pink-wash/40 p-4 border border-primary/20 shadow-soft">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Pink Circle Frame */}
        <circle cx="100" cy="92" r="75" fill="#FFF5F8" stroke="#EC008C" strokeWidth="3" />
        <circle cx="100" cy="92" r="71" fill="none" stroke="#F472B6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

        {/* Shower Water Droplets */}
        <path d="M45 35 L45 50 M65 28 L65 43 M135 28 L135 43 M155 35 L155 50" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />

        {/* Head & Neck */}
        <circle cx="100" cy="48" r="14" fill="#F43F5E" opacity="0.8" />
        <path d="M96 62 L96 70 L104 70 L104 62 Z" fill="#E11D48" />

        {/* Arm Behind Head */}
        <path d="M78 78 L62 62 L82 48" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Opposite Arm Reaching Across */}
        <path d="M122 78 L138 95 L108 95" stroke="#EC008C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Torso & Breasts */}
        <path d="M78 78 C78 72 122 72 122 78 L118 132 L82 132 Z" fill="#FFE4E6" stroke="#EC008C" strokeWidth="2" />
        <path d="M82 94 C82 85 98 85 98 94 C98 103 82 103 82 94 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />
        <path d="M102 94 C102 85 118 85 118 94 C118 103 102 103 102 94 Z" fill="#FFF" stroke="#EC008C" strokeWidth="1.5" />

        <circle cx="90" cy="94" r="2.5" fill="#EC008C" />
        <circle cx="110" cy="94" r="2.5" fill="#EC008C" />

        {/* Soap Friction Slide Circular Arrow */}
        <path d="M85 94 C85 80 115 80 115 94 C115 108 85 108 85 94 Z" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Bottom Label Badge Pill */}
        <rect x="25" y="148" width="150" height="24" rx="12" fill="#EC008C" />
        <text x="100" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
          STEP 5: IN-SHOWER EXAM
        </text>
      </svg>
    </div>
  );
}

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
      graphic: BseStep1Graphic,
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
      graphic: BseStep2Graphic,
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
      graphic: BseStep3Graphic,
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
      graphic: BseStep4Graphic,
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
      graphic: BseStep5Graphic,
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
                src="https://www.youtube-nocookie.com/embed/jjBY8Wp1I6Y"
                title="Breast Cancer Early Detection Overview"
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
            const GraphicComponent = s.graphic;

            return (
              <div
                key={s.step}
                className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft transition-all hover:border-primary/30 print:border-none print:shadow-none print:p-0 print:mb-8"
              >
                <div className="grid gap-8 lg:grid-cols-[300px_1fr] items-center">
                  {/* Left Column: Visual Illustration Graphic Card */}
                  <div>
                    <GraphicComponent />
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
                      <p className="mt-1 text-muted-foreground leading-relaxed">
                        {s.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: WARNING SIGNS CHECKLIST */}
      <section className="py-12 border-t border-border">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive mb-2">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Symptoms & Warning Signs</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">
            What Warning Signs to Look For
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            If you notice any of the following changes during your self-examination, schedule an appointment with a doctor for professional evaluation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {warningSigns.map((sign, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft hover:border-primary/40 hover:shadow-md transition-all"
            >
              {sign.icon}
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {sign.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {sign.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: WHAT TO DO IF YOU FIND A LUMP */}
      <section className="py-12 border-t border-border">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
              <Stethoscope className="h-7 w-7 text-primary" />
              <span>What To Do If You Notice a Change or Lump</span>
            </h2>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <div className="rounded-2xl bg-muted/40 p-4 border border-border/80">
                <p className="font-semibold text-foreground text-sm">
                  1. Don't Panic — Most Lumps Are Non-Cancerous
                </p>
                <p className="mt-1">
                  8 out of 10 breast lumps are non-cancerous (benign) conditions such as fluid-filled cysts, fibroadenomas, or hormonal tissue changes.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/40 p-4 border border-border/80">
                <p className="font-semibold text-foreground text-sm">
                  2. Schedule a Medical Consultation
                </p>
                <p className="mt-1">
                  Book an appointment with a gynecologist, general physician, or oncologist for a formal clinical breast examination.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/40 p-4 border border-border/80">
                <p className="font-semibold text-foreground text-sm">
                  3. Request Diagnostic Screening
                </p>
                <p className="mt-1">
                  Your doctor may recommend an ultrasound (for younger women with dense tissue) or a screening mammogram to examine the tissue clearly.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Need screening advice? Email PinkWalk Health Desk ({contactEmail})</span>
              </a>

              <Link to="/about" className="text-foreground hover:text-primary">
                Learn about Cancer Care Nepal →
              </Link>
            </div>
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
