import logoPng from "@/assets/pinkwalk-logo.png";
import ribbonPng from "@/assets/pink-ribbon.png";
import bannerPng from "@/assets/brandkits/Banner.png";
import { thisYearEvent } from "./event-data";

export interface BrandColor {
  name: string;
  role: string;
  hex: string;
  oklch: string;
  bgClass: string;
  borderClass?: string;
  textClass: string;
  usage: string;
}

export const brandColors: BrandColor[] = [
  {
    name: "Awareness Pink",
    role: "Primary Brand Color",
    hex: "#EC008C",
    oklch: "oklch(0.58 0.26 342.5)",
    bgClass: "bg-primary",
    textClass: "text-white",
    usage:
      "Main CTA buttons, primary highlights, ribbons, key branding elements.",
  },
  {
    name: "Deep Plum",
    role: "Dark Accent / Typography",
    hex: "#4A1231",
    oklch: "oklch(0.34 0.09 350)",
    bgClass: "bg-[oklch(0.34_0.09_350)]",
    textClass: "text-white",
    usage:
      "Headings, high contrast cards, dark mode backdrop, anchor elements.",
  },
  {
    name: "Soft Blush",
    role: "Secondary Accent",
    hex: "#FCE4EC",
    oklch: "oklch(0.85 0.06 8)",
    bgClass: "bg-[oklch(0.85_0.06_8)]",
    textClass: "text-foreground",
    usage: "Badge backgrounds, tag highlights, interactive hover states.",
  },
  {
    name: "Warm Cream",
    role: "Canvas Background",
    hex: "#FDF8F9",
    oklch: "oklch(0.992 0.008 385)",
    bgClass: "bg-background",
    borderClass: "border border-border",
    textClass: "text-foreground",
    usage: "Page background, light card backings, section breaks.",
  },
];

export interface LogoAsset {
  id: string;
  title: string;
  description: string;
  type: "png" | "svg";
  fileUrl: string;
  dimensions: string;
  recommendedFor: string;
  bgColor: "light" | "dark" | "pink";
}

export const logoAssets: LogoAsset[] = [
  {
    id: "pinkwalk-main-logo",
    title: "PinkWalk Official Logo (Full Color)",
    description:
      "Primary horizontal logo with breast cancer ribbon motif and PinkWalk typography.",
    type: "png",
    fileUrl: logoPng,
    dimensions: "1200 × 400 px",
    recommendedFor:
      "Light backgrounds, website headers, posters, document headers.",
    bgColor: "light",
  },
  {
    id: "pinkwalk-ribbon-emblem",
    title: "Pink Ribbon Icon Emblem",
    description: "Official standalone breast cancer awareness ribbon icon.",
    type: "png",
    fileUrl: ribbonPng,
    dimensions: "800 × 800 px",
    recommendedFor:
      "Social media profile pictures, favicons, badge icons, stickers.",
    bgColor: "pink",
  },
];

export interface BannerAsset {
  id: string;
  title: string;
  tagline: string;
  aspectRatio: string;
  width: number;
  height: number;
  format: "PNG" | "JPG";
  usage: string;
  fileUrl: string;
}

export const bannerAssets: BannerAsset[] = [
  {
    id: "pinkwalk-2026-official-banner",
    title: "PinkWalk 2026 Official Campaign Banner",
    tagline: "Walk for Awareness, Walk for Hope — Main promotional banner graphic",
    aspectRatio: "2:1",
    width: 2400,
    height: 1200,
    format: "PNG",
    usage: "Social Covers, Web Header, Press Releases, Announcements & Email Headers",
    fileUrl: bannerPng,
  },
];

/**
 * Downloads an image from URL
 */
export function downloadFile(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generates an SVG string representation of a promotional banner
 */
export function generateBannerSvg(
  banner: BannerAsset,
  event = thisYearEvent,
): string {
  const { width, height, theme } = banner;

  let bgDef = "";
  let textColor = "#ffffff";
  let subtitleColor = "rgba(255, 255, 255, 0.9)";
  let badgeBg = "rgba(255, 255, 255, 0.2)";
  let badgeText = "#ffffff";
  let accentColor = "#FFD1DC";
  let pillBg = "#ffffff";
  let pillText = "#EC008C";

  if (theme === "pink-gradient") {
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EC008C" />
        <stop offset="50%" stop-color="#D81B60" />
        <stop offset="100%" stop-color="#4A1231" />
      </linearGradient>
    `;
  } else if (theme === "plum-dark") {
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#360C22" />
        <stop offset="60%" stop-color="#4A1231" />
        <stop offset="100%" stop-color="#7B1E4E" />
      </linearGradient>
    `;
    accentColor = "#FF6B8B";
  } else {
    // cream-light
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FDF8F9" />
        <stop offset="100%" stop-color="#FCE4EC" />
      </linearGradient>
    `;
    textColor = "#360C22";
    subtitleColor = "#5C3349";
    badgeBg = "rgba(236, 0, 140, 0.12)";
    badgeText = "#EC008C";
    accentColor = "#EC008C";
    pillBg = "#EC008C";
    pillText = "#ffffff";
  }

  const isVertical = height > width;
  const isWide = width > height * 1.5;

  const baseFontSize = width / 20;

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      ${bgDef}
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25" />
      </filter>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6584" />
        <stop offset="100%" stop-color="#EC008C" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Decorative Circles -->
    <circle cx="${width * 0.9}" cy="${height * 0.15}" r="${width * 0.3}" fill="${accentColor}" opacity="0.1" />
    <circle cx="${width * 0.1}" cy="${height * 0.85}" r="${width * 0.25}" fill="${accentColor}" opacity="0.08" />

    <!-- Top Tag Badge -->
    <g transform="translate(${width / 2}, ${isVertical ? height * 0.12 : height * 0.16})">
      <rect x="-180" y="-24" width="360" height="48" rx="24" fill="${badgeBg}" />
      <text x="0" y="7" fill="${badgeText}" font-family="sans-serif" font-size="${baseFontSize * 0.45}" font-weight="700" letter-spacing="2" text-anchor="middle">
        OFFICIAL AWARENESS WALK
      </text>
    </g>

    <!-- Main Title -->
    <g transform="translate(${width / 2}, ${isVertical ? height * 0.32 : isWide ? height * 0.42 : height * 0.38})">
      <!-- Ribbon SVG Icon -->
      <g transform="translate(0, -${baseFontSize * 1.8}) scale(${width / 1000})">
        <path d="M-20 -40 C-20 -60 0 -70 20 -70 C40 -70 50 -50 40 -30 C30 -10 -20 30 -30 60 L-10 60 C5 35 30 0 45 -20 C60 -40 50 -85 20 -85 C-15 -85 -40 -60 -40 -30 C-40 0 -15 35 0 60 L20 60 C5 35 -20 0 -20 -40 Z" fill="url(#ribbonGrad)" opacity="0.9" />
      </g>
      <text x="0" y="${baseFontSize * 0.6}" fill="${textColor}" font-family="Georgia, serif" font-size="${baseFontSize * 1.75}" font-weight="bold" text-anchor="middle" filter="url(#shadow)">
        PinkWalk ${event.year}
      </text>
      <text x="0" y="${baseFontSize * 1.6}" fill="${accentColor}" font-family="sans-serif" font-size="${baseFontSize * 0.65}" font-weight="600" text-anchor="middle" letter-spacing="1">
        Walk for awareness, walk for hope
      </text>
    </g>

    <!-- Date & Route Card -->
    <g transform="translate(${width / 2}, ${isVertical ? height * 0.62 : isWide ? height * 0.72 : height * 0.68})">
      <rect x="-${width * 0.38}" y="-50" width="${width * 0.76}" height="100" rx="20" fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1.5" />
      
      <text x="0" y="-12" fill="${textColor}" font-family="sans-serif" font-size="${baseFontSize * 0.65}" font-weight="bold" text-anchor="middle">
        📅 ${event.date}
      </text>
      <text x="0" y="24" fill="${subtitleColor}" font-family="sans-serif" font-size="${baseFontSize * 0.52}" font-weight="500" text-anchor="middle">
        📍 ${event.route.startLabel} → ${event.route.endLabel}
      </text>
    </g>

    <!-- Call To Action Button -->
    <g transform="translate(${width / 2}, ${isVertical ? height * 0.84 : isWide ? height * 0.88 : height * 0.86})">
      <rect x="-160" y="-28" width="320" height="56" rx="28" fill="${pillBg}" filter="url(#shadow)" />
      <text x="0" y="7" fill="${pillText}" font-family="sans-serif" font-size="${baseFontSize * 0.48}" font-weight="bold" text-anchor="middle" letter-spacing="1">
        JOIN THE MOVEMENT
      </text>
    </g>

    <!-- Footer Credit -->
    <text x="${width / 2}" y="${height - 24}" fill="${subtitleColor}" font-family="sans-serif" font-size="${baseFontSize * 0.35}" opacity="0.8" text-anchor="middle">
      Organised by Infinite Care · pinkwalk.org
    </text>
  </svg>
  `;
}

/**
 * Converts SVG string into downloadable PNG image via HTML5 Canvas
 */
export function downloadSvgAsPng(
  svgString: string,
  filename: string,
  width: number,
  height: number,
) {
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0, width, height);
      const pngUrl = canvas.toDataURL("image/png");
      downloadFile(pngUrl, filename);
    }
    URL.revokeObjectURL(url);
  };
  img.src = url;
}
