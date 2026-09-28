import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  Upload,
  RotateCw,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Heart,
  Calendar,
  MapPin,
  Camera,
  Trash2,
  Move,
  CheckCircle2,
  Award,
} from "lucide-react";
import { thisYearEvent } from "@/lib/event-data";
import logoPng from "@/assets/pinkwalk-logo.png";
import ribbonPng from "@/assets/pink-ribbon.png";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "I'm Going to PinkWalk 2026 — Photo Badge & Frame Generator" },
      {
        name: "description",
        content:
          "Upload your photo and generate your personalized PinkWalk 2026 'I Am Going / Join Me' social media picture badge for breast cancer awareness in Kathmandu.",
      },
      {
        property: "og:title",
        content: "I'm Going to PinkWalk 2026 — Join Me!",
      },
      {
        property: "og:description",
        content:
          "Create your custom PinkWalk 2026 photo frame badge and share it on Instagram, WhatsApp, and Facebook.",
      },
    ],
  }),
  component: JoinPage,
});

// Preset Tagline Options
const TAGLINE_OPTIONS = [
  "I'm Going to PinkWalk 2026! 💕",
  "Join Me at PinkWalk! 🌸",
  "Walking for Breast Cancer Awareness 🎗️",
  "Walking for Hope & Healing ✨",
  "Pink Ambassador 2026 💖",
  "Walking for a Loved One 💗",
];

// Badge Style Presets
type FrameStyle = "glam-square" | "story-portrait" | "polaroid" | "plum-dark";

interface StyleOption {
  id: FrameStyle;
  name: string;
  desc: string;
  width: number;
  height: number;
  aspectRatioClass: string;
}

const FRAME_STYLES: StyleOption[] = [
  {
    id: "glam-square",
    name: "Pink Glam Badge",
    desc: "1:1 Square — Ideal for Instagram post, Facebook profile, WhatsApp",
    width: 1080,
    height: 1080,
    aspectRatioClass: "aspect-square",
  },
  {
    id: "story-portrait",
    name: "Instagram Story",
    desc: "9:16 Vertical — Ideal for Instagram / WhatsApp / Facebook Stories",
    width: 1080,
    height: 1920,
    aspectRatioClass: "aspect-[9/16]",
  },
  {
    id: "polaroid",
    name: "Classic Polaroid Print",
    desc: "4:5 Classic — White photo frame with caption area",
    width: 1080,
    height: 1350,
    aspectRatioClass: "aspect-[4/5]",
  },
  {
    id: "plum-dark",
    name: "Deep Plum Premium",
    desc: "1:1 Dark Mode — Elegant dark background with glowing pink accents",
    width: 1080,
    height: 1080,
    aspectRatioClass: "aspect-square",
  },
];

function JoinPage() {
  const [userName, setUserName] = useState("");
  const [tagline, setTagline] = useState(TAGLINE_OPTIONS[0]);
  const [customTagline, setCustomTagline] = useState("");
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("glam-square");

  // User uploaded photo state
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [imageFileName, setImageFileName] = useState<string>("");

  // Photo transform controls
  const [zoom, setZoom] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [rotation, setRotation] = useState(0); // degrees: 0, 90, 180, 270

  // Dragging state on preview canvas
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // UI state
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // References for Canvas and Brand Assets
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const ribbonImageRef = useRef<HTMLImageElement | null>(null);
  const [brandAssetsLoaded, setBrandAssetsLoaded] = useState(false);

  // Preload Brand Assets
  useEffect(() => {
    let loadedCount = 0;
    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount >= 2) {
        setBrandAssetsLoaded(true);
      }
    };

    const logoImg = new Image();
    logoImg.crossOrigin = "anonymous";
    logoImg.src = logoPng;
    logoImg.onload = () => {
      logoImageRef.current = logoImg;
      checkLoaded();
    };

    const ribbonImg = new Image();
    ribbonImg.crossOrigin = "anonymous";
    ribbonImg.src = ribbonPng;
    ribbonImg.onload = () => {
      ribbonImageRef.current = ribbonImg;
      checkLoaded();
    };
  }, []);

  // Handle Photo File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (JPG, PNG, or WEBP).");
      return;
    }

    setImageFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setUserImage(img);
        // Reset transforms for new photo
        setZoom(1);
        setOffsetX(0);
        setOffsetY(0);
        setRotation(0);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setUserImage(null);
    setImageFileName("");
    setZoom(1);
    setOffsetX(0);
    setOffsetY(0);
    setRotation(0);
  };

  // Active Tagline
  const activeTagline = customTagline.trim() || tagline;

  // Main Canvas Rendering Logic
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !brandAssetsLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const activeStyleConfig =
      FRAME_STYLES.find((s) => s.id === frameStyle) || FRAME_STYLES[0];
    const W = activeStyleConfig.width;
    const H = activeStyleConfig.height;

    canvas.width = W;
    canvas.height = H;

    // Clear canvas
    ctx.clearRect(0, 0, W, H);

    // ==========================================
    // STYLE 1: PINK GLAM SQUARE BADGE (1080x1080)
    // ==========================================
    if (frameStyle === "glam-square") {
      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, "#FDF8F9");
      bgGrad.addColorStop(0.5, "#FFF0F5");
      bgGrad.addColorStop(1, "#FCE4EC");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Decorative top arc / background shapes
      ctx.fillStyle = "rgba(236, 0, 140, 0.05)";
      ctx.beginPath();
      ctx.arc(W / 2, -100, 700, 0, Math.PI * 2);
      ctx.fill();

      // Top Header Ribbon Banner
      const topBannerGrad = ctx.createLinearGradient(0, 0, W, 0);
      topBannerGrad.addColorStop(0, "#EC008C");
      topBannerGrad.addColorStop(0.5, "#D81B60");
      topBannerGrad.addColorStop(1, "#4A1231");
      ctx.fillStyle = topBannerGrad;
      ctx.fillRect(0, 0, W, 140);

      // Top Banner Text
      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px 'Outfit', 'Montserrat', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("I'M GOING TO PINKWALK 2026", W / 2, 70);
      ctx.restore();

      // Draw Photo (Circular masked avatar at center)
      const centerX = W / 2;
      const centerY = 520;
      const radius = 310;

      // Photo backdrop shadow
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(236, 0, 140, 0.15)";
      ctx.shadowColor = "rgba(236, 0, 140, 0.3)";
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.restore();

      // Photo Ring Border
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 8, 0, Math.PI * 2);
      const ringGrad = ctx.createLinearGradient(
        centerX - radius,
        centerY - radius,
        centerX + radius,
        centerY + radius
      );
      ringGrad.addColorStop(0, "#EC008C");
      ringGrad.addColorStop(0.5, "#FF6B8B");
      ringGrad.addColorStop(1, "#4A1231");
      ctx.fillStyle = ringGrad;
      ctx.fill();
      ctx.restore();

      // Clip Circle for User Photo
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      if (userImage) {
        // Draw user uploaded image inside circle clip
        ctx.save();
        ctx.translate(centerX + offsetX, centerY + offsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        // Aspect ratio cover math
        const imgAspect = userImage.width / userImage.height;
        let drawW = radius * 2 * zoom;
        let drawH = drawW / imgAspect;

        if (drawH < radius * 2 * zoom) {
          drawH = radius * 2 * zoom;
          drawW = drawH * imgAspect;
        }

        ctx.drawImage(userImage, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      } else {
        // Fallback default placeholder canvas background
        ctx.fillStyle = "#F8BBD0";
        ctx.fillRect(
          centerX - radius,
          centerY - radius,
          radius * 2,
          radius * 2
        );

        ctx.fillStyle = "#EC008C";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "600 36px 'Outfit', sans-serif";
        ctx.fillText("Click 'Upload Photo' Below", centerX, centerY - 20);
        ctx.font = "400 28px 'Outfit', sans-serif";
        ctx.fillStyle = "#880E4F";
        ctx.fillText("to customize your badge", centerX, centerY + 30);
      }

      ctx.restore(); // Restore clip

      // Overlaid Pink Ribbon Emblem at top-right of circle
      if (ribbonImageRef.current) {
        ctx.save();
        const ribbonSize = 130;
        ctx.drawImage(
          ribbonImageRef.current,
          centerX + radius - 70,
          centerY - radius - 20,
          ribbonSize,
          ribbonSize
        );
        ctx.restore();
      }

      // User Name Box below circle
      const nameText = userName.trim()
        ? userName.trim()
        : "Join Me in Kathmandu!";
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Pill container for Name
      const pillWidth = Math.min(
        W - 120,
        Math.max(480, nameText.length * 28 + 80)
      );
      ctx.fillStyle = "#31006E"; // Deep purple
      ctx.beginPath();
      ctx.roundRect(W / 2 - pillWidth / 2, 860, pillWidth, 76, 38);
      ctx.fill();

      // Name Text
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 38px 'Montserrat', sans-serif";
      ctx.fillText(nameText, W / 2, 898);
      ctx.restore();

      // Tagline Text
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#EC008C";
      ctx.font = "600 32px 'Outfit', sans-serif";
      ctx.fillText(activeTagline, W / 2, 965);
      ctx.restore();

      // Footer Banner (Date, Location, Hashtag)
      ctx.save();
      ctx.fillStyle = "#4A1231";
      ctx.fillRect(0, H - 65, W, 65);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "500 24px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `📅 ${thisYearEvent.date} · 📍 ${thisYearEvent.route.startLabel} to ${thisYearEvent.route.endLabel} · #PinkWalk2026`,
        W / 2,
        H - 32
      );
      ctx.restore();

      // Top Logo watermark
      if (logoImageRef.current) {
        ctx.save();
        const logoW = 160;
        const logoH = (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, 30, 20, logoW, logoH);
        ctx.restore();
      }
    }

    // ==========================================
    // STYLE 2: INSTAGRAM STORY PORTRAIT (1080x1920)
    // ==========================================
    else if (frameStyle === "story-portrait") {
      // Dark/Pink luxury gradient backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
      bgGrad.addColorStop(0, "#2F0B20");
      bgGrad.addColorStop(0.35, "#540D36");
      bgGrad.addColorStop(0.7, "#880E4F");
      bgGrad.addColorStop(1, "#31006E");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Decorative Glowing Circles
      ctx.fillStyle = "rgba(236, 0, 140, 0.15)";
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.4, 600, 0, Math.PI * 2);
      ctx.fill();

      // Top Tagline Badge
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 280, 120, 560, 60, 30);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFD1DC";
      ctx.font = "bold 26px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("OFFICIAL AWARENESS WALK 2026", W / 2, 150);
      ctx.restore();

      // Headline Text
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 64px 'Montserrat', sans-serif";
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
      ctx.shadowBlur = 15;
      ctx.fillText("I'M WALKING FOR", W / 2, 230);
      ctx.fillStyle = "#FF6B8B";
      ctx.font = "bold 72px 'Montserrat', sans-serif";
      ctx.fillText("PINKWALK 2026", W / 2, 310);
      ctx.restore();

      // Main Large Photo Mask (Rounded Rectangle Frame)
      const frameX = 90;
      const frameY = 410;
      const frameW = W - 180; // 900
      const frameH = 920;
      const frameRadius = 40;

      // Frame Drop Shadow
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetY = 20;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.fill();
      ctx.restore();

      // Photo Clip
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.clip();

      if (userImage) {
        const cx = frameX + frameW / 2;
        const cy = frameY + frameH / 2;

        ctx.translate(cx + offsetX, cy + offsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        const imgAspect = userImage.width / userImage.height;
        let drawW = frameW * zoom;
        let drawH = drawW / imgAspect;

        if (drawH < frameH * zoom) {
          drawH = frameH * zoom;
          drawW = drawH * imgAspect;
        }

        ctx.drawImage(userImage, -drawW / 2, -drawH / 2, drawW, drawH);
      } else {
        ctx.fillStyle = "#FCE4EC";
        ctx.fillRect(frameX, frameY, frameW, frameH);

        ctx.fillStyle = "#EC008C";
        ctx.font = "600 40px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Your Photo Here", frameX + frameW / 2, frameY + frameH / 2 - 20);
        ctx.font = "300 28px 'Outfit', sans-serif";
        ctx.fillStyle = "#4A1231";
        ctx.fillText("Show your support for PinkWalk 2026", frameX + frameW / 2, frameY + frameH / 2 + 35);
      }

      ctx.restore(); // Restore photo clip

      // Ribbon Badge overlay on frame bottom right
      if (ribbonImageRef.current) {
        ctx.save();
        ctx.drawImage(
          ribbonImageRef.current,
          frameX + frameW - 140,
          frameY + frameH - 140,
          160,
          160
        );
        ctx.restore();
      }

      // User Name Box Overlay at bottom of Photo
      const nameText = userName.trim() || "Walk Participant";
      ctx.save();
      const nameBoxY = frameY + frameH - 110;
      ctx.fillStyle = "rgba(49, 0, 110, 0.9)";
      ctx.beginPath();
      ctx.roundRect(frameX + 30, nameBoxY, frameW - 180, 80, 20);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 40px 'Montserrat', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(nameText, frameX + 60, nameBoxY + 40);
      ctx.restore();

      // Lower Section Tagline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFD1DC";
      ctx.font = "600 38px 'Outfit', sans-serif";
      ctx.fillText(`"${activeTagline}"`, W / 2, 1400);
      ctx.restore();

      // Date & Route Box
      ctx.save();
      const dateBoxW = W - 180;
      const dateBoxH = 180;
      const dateBoxY = 1480;
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - dateBoxW / 2, dateBoxY, dateBoxW, dateBoxH, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`📅 ${thisYearEvent.dateNote}`, W / 2, dateBoxY + 55);
      ctx.font = "500 30px 'Outfit', sans-serif";
      ctx.fillStyle = "#FF6B8B";
      ctx.fillText(
        `📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel}`,
        W / 2,
        dateBoxY + 115
      );
      ctx.restore();

      // Call to action Footer
      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px 'Montserrat', sans-serif";
      ctx.fillText("JOIN ME AT THE WALK! 🌸", W / 2, 1750);

      ctx.font = "400 24px 'Outfit', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillText("pinkwalk.github.io · #PinkWalk2026", W / 2, 1820);
      ctx.restore();

      // Top Logo
      if (logoImageRef.current) {
        ctx.save();
        const logoW = 200;
        const logoH =
          (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, W / 2 - logoW / 2, 45, logoW, logoH);
        ctx.restore();
      }
    }

    // ==========================================
    // STYLE 3: CLASSIC POLAROID PRINT (1080x1350)
    // ==========================================
    else if (frameStyle === "polaroid") {
      // Warm pinkish textured background
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, "#F5EBEB");
      bgGrad.addColorStop(1, "#E8D5DA");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Polaroid Card Backdrop
      const cardX = 80;
      const cardY = 80;
      const cardW = W - 160; // 920
      const cardH = H - 160; // 1190

      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
      ctx.shadowBlur = 35;
      ctx.shadowOffsetY = 15;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 16);
      ctx.fill();
      ctx.restore();

      // Polaroid Photo Box
      const photoX = cardX + 50;
      const photoY = cardY + 60;
      const photoW = cardW - 100; // 820
      const photoH = 780;

      ctx.save();
      ctx.beginPath();
      ctx.rect(photoX, photoY, photoW, photoH);
      ctx.clip();

      if (userImage) {
        const cx = photoX + photoW / 2;
        const cy = photoY + photoH / 2;

        ctx.translate(cx + offsetX, cy + offsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        const imgAspect = userImage.width / userImage.height;
        let drawW = photoW * zoom;
        let drawH = drawW / imgAspect;

        if (drawH < photoH * zoom) {
          drawH = photoH * zoom;
          drawW = drawH * imgAspect;
        }

        ctx.drawImage(userImage, -drawW / 2, -drawH / 2, drawW, drawH);
      } else {
        ctx.fillStyle = "#FCE4EC";
        ctx.fillRect(photoX, photoY, photoW, photoH);

        ctx.fillStyle = "#EC008C";
        ctx.font = "600 36px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Photo Here", photoX + photoW / 2, photoY + photoH / 2);
      }
      ctx.restore();

      // Pink Washi Tape Accent on top left of card
      ctx.save();
      ctx.fillStyle = "rgba(236, 0, 140, 0.6)";
      ctx.translate(cardX + 40, cardY - 15);
      ctx.rotate((-8 * Math.PI) / 180);
      ctx.fillRect(0, 0, 180, 45);
      ctx.restore();

      // Ribbon Stamp top right
      if (ribbonImageRef.current) {
        ctx.save();
        ctx.drawImage(
          ribbonImageRef.current,
          photoX + photoW - 120,
          photoY + photoH - 120,
          140,
          140
        );
        ctx.restore();
      }

      // Caption Area below Polaroid Photo
      const nameText = userName.trim()
        ? userName.trim()
        : "I'm Walking for Hope!";
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Handwritten-style / Script Name
      ctx.fillStyle = "#31006E";
      ctx.font = "bold 52px 'Montserrat', sans-serif";
      ctx.fillText(nameText, W / 2, cardY + photoH + 120);

      // Tagline
      ctx.fillStyle = "#EC008C";
      ctx.font = "500 32px 'Outfit', sans-serif";
      ctx.fillText(activeTagline, W / 2, cardY + photoH + 190);

      // Official Event Stamp
      ctx.fillStyle = "#4A1231";
      ctx.font = "bold 26px 'Outfit', sans-serif";
      ctx.fillText(
        `PINKWALK 2026 · ${thisYearEvent.dateNote}`,
        W / 2,
        cardY + photoH + 250
      );
      ctx.restore();
    }

    // ==========================================
    // STYLE 4: DEEP PLUM DARK MODE (1080x1080)
    // ==========================================
    else if (frameStyle === "plum-dark") {
      // Dark Plum Background
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, "#2A091A");
      bgGrad.addColorStop(0.5, "#4A1231");
      bgGrad.addColorStop(1, "#1D0512");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Neon Pink Circle Ring Backdrop
      const centerX = W / 2;
      const centerY = 480;
      const radius = 300;

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 14, 0, Math.PI * 2);
      ctx.strokeStyle = "#EC008C";
      ctx.lineWidth = 8;
      ctx.shadowColor = "#EC008C";
      ctx.shadowBlur = 25;
      ctx.stroke();
      ctx.restore();

      // Photo Circle Clip
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      if (userImage) {
        ctx.translate(centerX + offsetX, centerY + offsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        const imgAspect = userImage.width / userImage.height;
        let drawW = radius * 2 * zoom;
        let drawH = drawW / imgAspect;

        if (drawH < radius * 2 * zoom) {
          drawH = radius * 2 * zoom;
          drawW = drawH * imgAspect;
        }

        ctx.drawImage(userImage, -drawW / 2, -drawH / 2, drawW, drawH);
      } else {
        ctx.fillStyle = "#360C22";
        ctx.fillRect(
          centerX - radius,
          centerY - radius,
          radius * 2,
          radius * 2
        );

        ctx.fillStyle = "#FF6B8B";
        ctx.font = "600 36px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Photo", centerX, centerY);
      }
      ctx.restore();

      // Header Tagline Badge
      ctx.save();
      ctx.fillStyle = "#EC008C";
      ctx.font = "bold 28px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("I AM GOING TO PINKWALK 2026", W / 2, 110);
      ctx.restore();

      // Ribbon Emblem
      if (ribbonImageRef.current) {
        ctx.save();
        ctx.drawImage(
          ribbonImageRef.current,
          centerX + radius - 60,
          centerY - radius - 20,
          130,
          130
        );
        ctx.restore();
      }

      // Name & Tagline Text
      const nameText = userName.trim() || "Join Me on October 3rd!";
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px 'Montserrat', sans-serif";
      ctx.fillText(nameText, W / 2, 840);

      ctx.fillStyle = "#FF6B8B";
      ctx.font = "600 30px 'Outfit', sans-serif";
      ctx.fillText(activeTagline, W / 2, 900);

      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "400 24px 'Outfit', sans-serif";
      ctx.fillText(
        `📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel} · ${thisYearEvent.dateNote}`,
        W / 2,
        960
      );
      ctx.restore();

      // Logo Top Left
      if (logoImageRef.current) {
        ctx.save();
        const logoW = 160;
        const logoH =
          (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, 40, 30, logoW, logoH);
        ctx.restore();
      }
    }
  }, [
    brandAssetsLoaded,
    frameStyle,
    userName,
    activeTagline,
    userImage,
    zoom,
    offsetX,
    offsetY,
    rotation,
  ]);

  // Redraw canvas whenever state changes
  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Interactive Dragging on Canvas Preview
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    // Scale canvas pixels relative to preview container size
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleFactor = canvas.width / rect.width;

    setOffsetX((prev) => prev + dx * scaleFactor);
    setOffsetY((prev) => prev + dy * scaleFactor);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch support for mobile dragging
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    dragStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleFactor = canvas.width / rect.width;

    setOffsetX((prev) => prev + dx * scaleFactor);
    setOffsetY((prev) => prev + dy * scaleFactor);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Download High-Res Badge Image
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsGenerating(true);
    setTimeout(() => {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      const cleanName = (userName || "Participant")
        .replace(/[^a-zA-Z0-9]/g, "_")
        .toLowerCase();
      link.download = `${cleanName}-pinkwalk-badge.jpg`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsGenerating(false);
    }, 150);
  };

  // Share Badge
  const handleShare = async () => {
    const canvas = canvasRef.current;
    const name = userName.trim() || "Me";
    const shareText = `I'm going to PinkWalk 2026 for Breast Cancer Awareness! 💕 Join me on ${thisYearEvent.dateNote} (${thisYearEvent.date}) at ${thisYearEvent.route.startLabel}. Learn more & register at ${window.location.origin}`;

    if (canvas && navigator.share && navigator.canShare) {
      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File(
            [blob],
            `${name}-PinkWalk-2026-Badge.jpg`,
            { type: "image/jpeg" }
          );

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: "I'm Going to PinkWalk 2026!",
              text: shareText,
              files: [file],
            });
            return;
          }

          await navigator.share({
            title: "I'm Going to PinkWalk 2026!",
            text: shareText,
            url: window.location.href,
          });
        }, "image/jpeg", 0.95);
      } catch (err) {
        console.log("Share cancelled", err);
      }
    } else {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${shareText}\n${window.location.origin}/join`
      )}`;
      window.open(waUrl, "_blank");
    }
  };

  // Copy Post Text
  const handleCopyText = () => {
    const name = userName.trim() || "Me";
    const postCaption = `I am going to PinkWalk 2026! 🌸\n\nJoin me in walking for Breast Cancer Awareness in Kathmandu.\n\n📅 Date: ${thisYearEvent.dateNote} (${thisYearEvent.date})\n📍 Route: ${thisYearEvent.route.startLabel} to ${thisYearEvent.route.endLabel}\n\nLet's walk together for hope, awareness, and solidarity! 💕\n\nCreate your badge & register: ${window.location.origin}/join\n\n#PinkWalk2026 #WalkForHope #BreastCancerAwareness #Kathmandu`;

    navigator.clipboard.writeText(postCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const activeStyleObj =
    FRAME_STYLES.find((s) => s.id === frameStyle) || FRAME_STYLES[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header Banner */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>PinkWalk 2026 · Photo Frame & Badge Generator</span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          I Am Going to <span className="text-gradient-pink">PinkWalk 2026!</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Upload your photo, personalize your PinkWalk 2026 badge, and share it on Instagram, WhatsApp, or Facebook to let your friends know you're walking for breast cancer awareness!
        </p>
      </section>

      {/* Main App Grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Editor Controls */}
        <div className="space-y-6 lg:col-span-6">
          {/* Step 1: Upload Photo */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                1
              </span>
              <span>Upload Your Photo</span>
            </h2>

            <div className="mt-4">
              {!userImage ? (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-pink-wash/30 p-6 text-center transition-colors hover:border-primary hover:bg-pink-wash/60">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-foreground">
                    Click to upload photo or selfie
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    Supports JPG, PNG, WEBP (Recommended square or portrait photo)
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/30 p-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-background">
                      <img
                        src={userImage.src}
                        alt="Uploaded preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="truncate">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {imageFileName || "Uploaded Photo"}
                      </p>
                      <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Photo Loaded
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer rounded-xl bg-accent px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent/80">
                      Change
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="rounded-xl border border-border bg-background p-1.5 text-destructive transition-colors hover:bg-destructive/10"
                      title="Remove photo"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Photo Adjustments (Zoom, Rotate, Offset) */}
            {userImage && (
              <div className="mt-5 border-t border-border/60 pt-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Move className="h-3.5 w-3.5 text-primary" /> Adjust Photo Position & Scale
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setZoom(1);
                      setOffsetX(0);
                      setOffsetY(0);
                      setRotation(0);
                    }}
                    className="text-xs text-primary hover:underline"
                  >
                    Reset
                  </button>
                </div>

                {/* Zoom Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-foreground font-medium">
                    <span className="flex items-center gap-1">
                      <ZoomOut className="h-3.5 w-3.5 text-muted-foreground" /> Scale / Zoom
                    </span>
                    <span>{Math.round(zoom * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Rotate Button */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-foreground font-medium flex items-center gap-1">
                    <RotateCw className="h-3.5 w-3.5 text-muted-foreground" /> Rotate Photo
                  </span>
                  <button
                    type="button"
                    onClick={() => setRotation((prev) => (prev + 90) % 360)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    <RotateCw className="h-3.5 w-3.5 text-primary" />
                    <span>Rotate ({rotation}°)</span>
                  </button>
                </div>

                <p className="text-xs text-muted-foreground bg-muted/40 p-2.5 rounded-xl">
                  💡 <strong>Tip:</strong> You can also drag the photo directly inside the preview canvas on the right to position it!
                </p>
              </div>
            )}
          </div>

          {/* Step 2: Select Frame Style & Personalize */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7 space-y-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                2
              </span>
              <span>Choose Frame Style & Text</span>
            </h2>

            {/* Frame Style Selector */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Badge Style
              </label>
              <div className="grid grid-cols-2 gap-3">
                {FRAME_STYLES.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setFrameStyle(style.id)}
                    className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all ${
                      frameStyle === style.id
                        ? "border-primary bg-pink-wash/50 ring-2 ring-primary/20"
                        : "border-border bg-background hover:bg-accent"
                    }`}
                  >
                    <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                      {style.name}
                      {frameStyle === style.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 leading-snug">
                      {style.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* User Name Input */}
            <div>
              <label
                htmlFor="user-name"
                className="block text-sm font-medium text-foreground"
              >
                Your Full Name (Display on Badge)
              </label>
              <input
                id="user-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Sujan Karki"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Tagline Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Tagline / Statement
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {TAGLINE_OPTIONS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setTagline(tag);
                      setCustomTagline("");
                    }}
                    className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                      tagline === tag && !customTagline
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-background text-foreground hover:bg-accent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Custom Tagline input */}
              <input
                type="text"
                value={customTagline}
                onChange={(e) => setCustomTagline(e.target.value)}
                placeholder="Or type custom tagline (e.g. Walking for Mom)"
                className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Step 3: Action Buttons */}
            <div className="pt-4 border-t border-border/60 space-y-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={isGenerating}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="h-5 w-5" />
                <span>
                  {isGenerating ? "Generating High-Res Badge..." : "Download High-Res Badge (.JPG)"}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Share2 className="h-4 w-4 text-primary" />
                  <span>Share Badge</span>
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
                      <span>Copy Caption</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Complementary Card: Invite Friends Link */}
          <div className="rounded-3xl border border-border/80 bg-pink-wash/50 p-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                <span>Want to invite your friends too?</span>
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Generate personalized invitation cards for your friends & family!
              </p>
            </div>
            <Link
              to="/invite"
              className="flex-shrink-0 rounded-xl bg-background border border-border px-4 py-2 text-xs font-semibold text-primary hover:bg-accent transition-colors"
            >
              Open Invite Generator &rarr;
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Live Canvas Preview */}
        <div className="flex flex-col items-center justify-center lg:col-span-6">
          <div className="relative w-full max-w-[440px] rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-5">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Badge Preview
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Render ({activeStyleObj.width}×{activeStyleObj.height})
              </span>
            </div>

            {/* Canvas Viewport */}
            <div
              className={`relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-inner select-none cursor-grab active:cursor-grabbing ${activeStyleObj.aspectRatioClass}`}
            >
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="h-full w-full object-contain touch-none"
              />

              {!brandAssetsLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card text-center p-4">
                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Loading PinkWalk Graphics...
                  </p>
                </div>
              )}
            </div>

            <div className="mt-3 text-center">
              <p className="text-xs text-muted-foreground">
                {userImage
                  ? "Drag photo on canvas to reposition. Adjust scale with slider."
                  : "Click 'Upload Your Photo' on the left to personalize this badge."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
