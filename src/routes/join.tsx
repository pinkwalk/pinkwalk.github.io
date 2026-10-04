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
  "I Walked in PinkWalk 2026! 💕",
  "Proud Participant of PinkWalk 2026! 🌸",
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
  // {
  //   id: "polaroid",
  //   name: "Classic Polaroid Print",
  //   desc: "4:5 Classic — White photo frame with caption area",
  //   width: 1080,
  //   height: 1350,
  //   aspectRatioClass: "aspect-[4/5]",
  // },
  // {
  //   id: "plum-dark",
  //   name: "Deep Plum Premium",
  //   desc: "1:1 Dark Mode — Elegant dark background with glowing pink accents",
  //   width: 1080,
  //   height: 1080,
  //   aspectRatioClass: "aspect-square",
  // },
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
    // CONSISTENT BADGE DESIGN SYSTEM
    // All styles share the same layout hierarchy:
    // Logo → Official Badge Pill → Headline → Photo Frame (Name Pill + Ribbon) → Tagline → Date/Route Box → CTA → Footer
    // Background: Pink watercolor vignette (light, with pink edges fading to white center)
    // ==========================================

    // Helper: Draw pink watercolor vignette background
    const drawWatercolorBg = (intense = false) => {
      // White base
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, W, H);

      // Corner watercolor blobs
      const corners = [
        { cx: 0, cy: 0 },
        { cx: W, cy: 0 },
        { cx: 0, cy: H },
        { cx: W, cy: H },
      ];
      const edges = [
        { cx: W / 2, cy: -H * 0.05 },
        { cx: W / 2, cy: H * 1.05 },
        { cx: -W * 0.05, cy: H / 2 },
        { cx: W * 1.05, cy: H / 2 },
      ];

      const baseAlpha = intense ? 0.6 : 0.5;
      const edgeAlpha = intense ? 0.38 : 0.28;

      corners.forEach(({ cx, cy }) => {
        const radius = Math.max(W, H) * 0.55;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(255, 182, 206, ${baseAlpha})`);
        grad.addColorStop(0.45, `rgba(255, 210, 225, ${baseAlpha * 0.35})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      });

      edges.forEach(({ cx, cy }) => {
        const radius = Math.max(W, H) * 0.4;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(255, 190, 214, ${edgeAlpha})`);
        grad.addColorStop(0.5, `rgba(255, 215, 230, ${edgeAlpha * 0.3})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      });
    };

    if (frameStyle === "glam-square") {
      // ==========================================
      // STYLE 1: PINK GLAM SQUARE (1080×1080)
      // ==========================================

      // Pink watercolor background
      drawWatercolorBg();

      // Logo (centered)
      if (logoImageRef.current) {
        const logoW = 350;
        const logoH = (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, W / 2 - logoW / 2, 45, logoW, logoH);
      }

      // Official Badge Pill
      // ctx.save();
      // ctx.fillStyle = "rgba(236, 0, 140, 0.08)";
      // ctx.strokeStyle = "rgba(236, 0, 140, 0.3)";
      // ctx.lineWidth = 2;
      // ctx.beginPath();
      // ctx.roundRect(W / 2 - 220, 72, 440, 42, 21);
      // ctx.fill();
      // ctx.stroke();
      // ctx.fillStyle = "#D81B60";
      // ctx.font = "bold 20px 'Outfit', sans-serif";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText("OFFICIAL AWARENESS WALK 2026", W / 2, 93);
      // ctx.restore();

      // Headline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1A1A1A";
      ctx.font = "bold 38px 'Montserrat', sans-serif";
      ctx.fillText("I'M WALKING FOR", W / 2, 200);
      ctx.fillStyle = "#EC008C";
      ctx.font = "bold 48px 'Montserrat', sans-serif";
      ctx.fillText("PINKWALK 2026", W / 2, 250);
      ctx.restore();

      // Photo Frame
      const frameX = 90;
      const frameY = 300;
      const frameW = W - 180;
      const frameH = 490;
      const frameRadius = 32;

      // Frame shadow
      ctx.save();
      ctx.shadowColor = "rgba(236, 0, 140, 0.18)";
      ctx.shadowBlur = 28;
      ctx.shadowOffsetY = 10;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.fill();
      ctx.restore();

      // Photo clip
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
        ctx.font = "600 32px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Your Photo Here", frameX + frameW / 2, frameY + frameH / 2 - 16);
        ctx.font = "300 24px 'Outfit', sans-serif";
        ctx.fillStyle = "#880E4F";
        ctx.fillText("Show your support for PinkWalk 2026", frameX + frameW / 2, frameY + frameH / 2 + 24);
      }
      ctx.restore();

      // Name pill overlaid at bottom-left of frame
      const nameText = userName.trim() || "Walk Participant";
      ctx.save();
      const nameBoxY = frameY + frameH - 90;
      const namePillW = Math.min(frameW - 160, Math.max(380, nameText.length * 24 + 70));
      ctx.fillStyle = "rgba(49, 0, 110, 0.92)";
      ctx.beginPath();
      ctx.roundRect(frameX + 24, nameBoxY, namePillW, 66, 16);
      ctx.fill();
      // Left accent stripe
      ctx.beginPath();
      ctx.roundRect(frameX + 24, nameBoxY, namePillW, 66, 16);
      ctx.clip();
      ctx.fillStyle = "#EC008C";
      ctx.fillRect(frameX + 24, nameBoxY, 7, 66);
      ctx.restore();

      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 30px 'Montserrat', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(nameText, frameX + 52, nameBoxY + 33);
      ctx.restore();

      // Ribbon at bottom-right of frame
      if (ribbonImageRef.current) {
        ctx.drawImage(ribbonImageRef.current, frameX + frameW - 90, frameY + frameH - 95, 110, 110);
      }

      // Tagline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#D81B60";
      ctx.font = "600 36px 'Outfit', sans-serif";
      ctx.fillText(`"${activeTagline}"`, W / 2, 855);
      ctx.restore();

      // Date & Route Box
      ctx.save();
      const dateBoxW = 720;
      const dateBoxH = 98;
      const dateBoxY = 910;
      ctx.fillStyle = "rgba(236, 0, 140, 0.06)";
      ctx.strokeStyle = "rgba(236, 0, 140, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - dateBoxW / 2, dateBoxY, dateBoxW, dateBoxH, 20);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2A091A";
      ctx.font = "bold 26px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`📅 ${thisYearEvent.dateNote}`, W / 2, dateBoxY + 37);
      ctx.font = "500 22px 'Outfit', sans-serif";
      ctx.fillStyle = "#EC008C";
      ctx.fillText(`📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel}`, W / 2, dateBoxY + 78);
      ctx.restore();

      // CTA
      // ctx.save();
      // ctx.textAlign = "center";
      // ctx.fillStyle = "#2A091A";
      // ctx.font = "bold 28px 'Montserrat', sans-serif";
      // ctx.fillText("JOIN ME AT THE WALK! 🌸", W / 2, 965);
      // ctx.restore();

      // Footer
      ctx.save();
      ctx.font = "400 20px 'Outfit', sans-serif";
      ctx.fillStyle = "rgba(74, 18, 49, 0.55)";
      ctx.textAlign = "center";
      ctx.fillText("pinkwalk.github.io · #PinkWalk2026", W / 2, 1055);
      ctx.restore();
    }

    // ==========================================
    // STYLE 2: INSTAGRAM STORY PORTRAIT (1080×1920)
    // ==========================================
    else if (frameStyle === "story-portrait") {
      // Pink watercolor background
      drawWatercolorBg();

      // Logo (centered)
      if (logoImageRef.current) {
        const logoW = 450;
        const logoH = (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, W / 2 - logoW / 2, 45, logoW, logoH);
      }

      // Official Badge Pill
      // ctx.save();
      // ctx.fillStyle = "rgba(236, 0, 140, 0.08)";
      // ctx.strokeStyle = "rgba(236, 0, 140, 0.3)";
      // ctx.lineWidth = 2;
      // ctx.beginPath();
      // ctx.roundRect(W / 2 - 280, 120, 560, 60, 30);
      // ctx.fill();
      // ctx.stroke();
      // ctx.fillStyle = "#D81B60";
      // ctx.font = "bold 26px 'Outfit', sans-serif";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText("OFFICIAL AWARENESS WALK 2026", W / 2, 150);
      // ctx.restore();

      // Headline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1A1A1A";
      ctx.font = "bold 64px 'Montserrat', sans-serif";
      ctx.fillText("I'M WALKING FOR", W / 2, 262);
      ctx.fillStyle = "#EC008C";
      ctx.font = "bold 72px 'Montserrat', sans-serif";
      ctx.fillText("PINKWALK 2026", W / 2, 342);
      ctx.restore();

      // Photo Frame
      const frameX = 90;
      const frameY = 410;
      const frameW = W - 180;
      const frameH = 1040;
      const frameRadius = 40;

      // Frame shadow
      ctx.save();
      ctx.shadowColor = "rgba(236, 0, 140, 0.18)";
      ctx.shadowBlur = 35;
      ctx.shadowOffsetY = 14;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.fill();
      ctx.restore();

      // Photo clip
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
        ctx.fillStyle = "#880E4F";
        ctx.fillText("Show your support for PinkWalk 2026", frameX + frameW / 2, frameY + frameH / 2 + 35);
      }
      ctx.restore();

      // Name pill overlaid at bottom-left of frame
      const nameText = userName.trim() || "Walk Participant";
      ctx.save();
      const nameBoxY = frameY + frameH - 110;
      const namePillW = Math.min(frameW - 180, Math.max(460, nameText.length * 28 + 80));
      ctx.fillStyle = "rgba(49, 0, 110, 0.92)";
      ctx.beginPath();
      ctx.roundRect(frameX + 30, nameBoxY, namePillW, 80, 20);
      ctx.fill();
      // Left accent stripe
      ctx.beginPath();
      ctx.roundRect(frameX + 30, nameBoxY, namePillW, 80, 20);
      ctx.clip();
      ctx.fillStyle = "#EC008C";
      ctx.fillRect(frameX + 30, nameBoxY, 8, 80);
      ctx.restore();

      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 38px 'Montserrat', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(nameText, frameX + 62, nameBoxY + 40);
      ctx.restore();

      // Ribbon at bottom-right of frame
      if (ribbonImageRef.current) {
        ctx.drawImage(ribbonImageRef.current, frameX + frameW - 140, frameY + frameH - 150, 160, 160);
      }

      // Tagline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#D81B60";
      ctx.font = "600 42px 'Outfit', sans-serif";
      ctx.fillText(`"${activeTagline}"`, W / 2, 1550);
      ctx.restore();

      // Date & Route Box
      ctx.save();
      const dateBoxW = W - 180;
      const dateBoxH = 180;
      const dateBoxY = 1640;
      ctx.fillStyle = "rgba(236, 0, 140, 0.06)";
      ctx.strokeStyle = "rgba(236, 0, 140, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - dateBoxW / 2, dateBoxY, dateBoxW, dateBoxH, 24);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2A091A";
      ctx.font = "bold 36px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`📅 ${thisYearEvent.dateNote}`, W / 2, dateBoxY + 55);
      ctx.font = "500 30px 'Outfit', sans-serif";
      ctx.fillStyle = "#EC008C";
      ctx.fillText(`📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel}`, W / 2, dateBoxY + 115);
      ctx.restore();

      // CTA
      // ctx.save();
      // ctx.textAlign = "center";
      // ctx.fillStyle = "#2A091A";
      // ctx.font = "bold 36px 'Montserrat', sans-serif";
      // ctx.fillText("JOIN ME AT THE WALK! 🌸", W / 2, 1762);
      // ctx.restore();

      // Footer
      ctx.save();
      ctx.font = "400 24px 'Outfit', sans-serif";
      ctx.fillStyle = "rgba(74, 18, 49, 0.55)";
      ctx.textAlign = "center";
      ctx.fillText("pinkwalk.github.io · #PinkWalk2026", W / 2, 1880);
      ctx.restore();
    }

    // ==========================================
    // STYLE 3: CLASSIC POLAROID (1080×1350)
    // ==========================================
    else if (frameStyle === "polaroid") {
      // Pink watercolor background
      drawWatercolorBg();

      // Logo (centered)
      if (logoImageRef.current) {
        const logoW = 350;
        const logoH = (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, W / 2 - logoW / 2, 25, logoW, logoH);
      }

      // Official Badge Pill
      // ctx.save();
      // ctx.fillStyle = "rgba(236, 0, 140, 0.08)";
      // ctx.strokeStyle = "rgba(236, 0, 140, 0.3)";
      // ctx.lineWidth = 2;
      // ctx.beginPath();
      // ctx.roundRect(W / 2 - 250, 82, 500, 48, 24);
      // ctx.fill();
      // ctx.stroke();
      // ctx.fillStyle = "#D81B60";
      // ctx.font = "bold 22px 'Outfit', sans-serif";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText("OFFICIAL AWARENESS WALK 2026", W / 2, 106);
      // ctx.restore();

      // Headline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1A1A1A";
      ctx.font = "bold 50px 'Montserrat', sans-serif";
      ctx.fillText("I'M WALKING FOR", W / 2, 174);
      ctx.fillStyle = "#EC008C";
      ctx.font = "bold 60px 'Montserrat', sans-serif";
      ctx.fillText("PINKWALK 2026", W / 2, 244);
      ctx.restore();

      // Photo Frame
      const frameX = 90;
      const frameY = 285;
      const frameW = W - 180;
      const frameH = 640;
      const frameRadius = 36;

      // Frame shadow
      ctx.save();
      ctx.shadowColor = "rgba(236, 0, 140, 0.18)";
      ctx.shadowBlur = 30;
      ctx.shadowOffsetY = 12;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.fill();
      ctx.restore();

      // Photo clip
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
        ctx.font = "600 36px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Your Photo Here", frameX + frameW / 2, frameY + frameH / 2 - 18);
        ctx.font = "300 26px 'Outfit', sans-serif";
        ctx.fillStyle = "#880E4F";
        ctx.fillText("Show your support for PinkWalk 2026", frameX + frameW / 2, frameY + frameH / 2 + 28);
      }
      ctx.restore();

      // Name pill overlaid at bottom-left of frame
      const nameText = userName.trim() || "Walk Participant";
      ctx.save();
      const nameBoxY = frameY + frameH - 95;
      const namePillW = Math.min(frameW - 170, Math.max(420, nameText.length * 26 + 75));
      ctx.fillStyle = "rgba(49, 0, 110, 0.92)";
      ctx.beginPath();
      ctx.roundRect(frameX + 28, nameBoxY, namePillW, 72, 18);
      ctx.fill();
      // Left accent stripe
      ctx.beginPath();
      ctx.roundRect(frameX + 28, nameBoxY, namePillW, 72, 18);
      ctx.clip();
      ctx.fillStyle = "#EC008C";
      ctx.fillRect(frameX + 28, nameBoxY, 7, 72);
      ctx.restore();

      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 34px 'Montserrat', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(nameText, frameX + 56, nameBoxY + 36);
      ctx.restore();

      // Ribbon at bottom-right of frame
      if (ribbonImageRef.current) {
        ctx.drawImage(ribbonImageRef.current, frameX + frameW - 110, frameY + frameH - 120, 130, 130);
      }

      // Tagline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#D81B60";
      ctx.font = "600 30px 'Outfit', sans-serif";
      ctx.fillText(`"${activeTagline}"`, W / 2, 965);
      ctx.restore();

      // Date & Route Box
      ctx.save();
      const dateBoxW = 720;
      const dateBoxH = 120;
      const dateBoxY = 1025;
      ctx.fillStyle = "rgba(236, 0, 140, 0.06)";
      ctx.strokeStyle = "rgba(236, 0, 140, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - dateBoxW / 2, dateBoxY, dateBoxW, dateBoxH, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2A091A";
      ctx.font = "bold 30px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`📅 ${thisYearEvent.dateNote}`, W / 2, dateBoxY + 42);
      ctx.font = "500 24px 'Outfit', sans-serif";
      ctx.fillStyle = "#EC008C";
      ctx.fillText(`📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel}`, W / 2, dateBoxY + 88);
      ctx.restore();

      // CTA
      // ctx.save();
      // ctx.textAlign = "center";
      // ctx.fillStyle = "#2A091A";
      // ctx.font = "bold 32px 'Montserrat', sans-serif";
      // ctx.fillText("JOIN ME AT THE WALK! 🌸", W / 2, 1197);
      // ctx.restore();

      // Footer
      ctx.save();
      ctx.font = "400 22px 'Outfit', sans-serif";
      ctx.fillStyle = "rgba(74, 18, 49, 0.55)";
      ctx.textAlign = "center";
      ctx.fillText("pinkwalk.github.io · #PinkWalk2026", W / 2, 1250);
      ctx.restore();
    }

    // ==========================================
    // STYLE 4: DEEP PLUM PREMIUM (1080×1080)
    // ==========================================
    else if (frameStyle === "plum-dark") {
      // Pink watercolor background (slightly more saturated)
      drawWatercolorBg(true);

      // Logo (centered)
      if (logoImageRef.current) {
        const logoW = 350;
        const logoH = (logoW * logoImageRef.current.height) / logoImageRef.current.width;
        ctx.drawImage(logoImageRef.current, W / 2 - logoW / 2, 25, logoW, logoH);
      }

      // Official Badge Pill
      // ctx.save();
      // ctx.fillStyle = "rgba(236, 0, 140, 0.12)";
      // ctx.strokeStyle = "rgba(236, 0, 140, 0.4)";
      // ctx.lineWidth = 2;
      // ctx.beginPath();
      // ctx.roundRect(W / 2 - 220, 72, 440, 42, 21);
      // ctx.fill();
      // ctx.stroke();
      // ctx.fillStyle = "#D81B60";
      // ctx.font = "bold 20px 'Outfit', sans-serif";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText("OFFICIAL AWARENESS WALK 2026", W / 2, 93);
      // ctx.restore();

      // Headline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1A1A1A";
      ctx.font = "bold 38px 'Montserrat', sans-serif";
      ctx.fillText("I'M WALKING FOR", W / 2, 154);
      ctx.fillStyle = "#EC008C";
      ctx.font = "bold 48px 'Montserrat', sans-serif";
      ctx.fillText("PINKWALK 2026", W / 2, 210);
      ctx.restore();

      // Photo Frame with subtle pink border
      const frameX = 90;
      const frameY = 240;
      const frameW = W - 180;
      const frameH = 490;
      const frameRadius = 32;

      // Frame border
      ctx.save();
      ctx.strokeStyle = "rgba(236, 0, 140, 0.25)";
      ctx.lineWidth = 3;
      ctx.shadowColor = "rgba(236, 0, 140, 0.15)";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 8;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameW, frameH, frameRadius);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Photo clip
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
        ctx.font = "600 32px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Upload Your Photo Here", frameX + frameW / 2, frameY + frameH / 2 - 16);
        ctx.font = "300 24px 'Outfit', sans-serif";
        ctx.fillStyle = "#880E4F";
        ctx.fillText("Show your support for PinkWalk 2026", frameX + frameW / 2, frameY + frameH / 2 + 24);
      }
      ctx.restore();

      // Name pill overlaid at bottom-left of frame
      const nameText = userName.trim() || "Walk Participant";
      ctx.save();
      const nameBoxY = frameY + frameH - 90;
      const namePillW = Math.min(frameW - 160, Math.max(380, nameText.length * 24 + 70));
      ctx.fillStyle = "rgba(49, 0, 110, 0.92)";
      ctx.beginPath();
      ctx.roundRect(frameX + 24, nameBoxY, namePillW, 66, 16);
      ctx.fill();
      // Left accent stripe
      ctx.beginPath();
      ctx.roundRect(frameX + 24, nameBoxY, namePillW, 66, 16);
      ctx.clip();
      ctx.fillStyle = "#EC008C";
      ctx.fillRect(frameX + 24, nameBoxY, 7, 66);
      ctx.restore();

      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 30px 'Montserrat', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(nameText, frameX + 52, nameBoxY + 33);
      ctx.restore();

      // Ribbon at bottom-right of frame
      if (ribbonImageRef.current) {
        ctx.drawImage(ribbonImageRef.current, frameX + frameW - 90, frameY + frameH - 95, 110, 110);
      }

      // Tagline
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#D81B60";
      ctx.font = "600 26px 'Outfit', sans-serif";
      ctx.fillText(`"${activeTagline}"`, W / 2, 768);
      ctx.restore();

      // Date & Route Box
      ctx.save();
      const dateBoxW = 720;
      const dateBoxH = 108;
      const dateBoxY = 823;
      ctx.fillStyle = "rgba(236, 0, 140, 0.08)";
      ctx.strokeStyle = "rgba(236, 0, 140, 0.25)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - dateBoxW / 2, dateBoxY, dateBoxW, dateBoxH, 20);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2A091A";
      ctx.font = "bold 26px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`📅 ${thisYearEvent.dateNote}`, W / 2, dateBoxY + 37);
      ctx.font = "500 22px 'Outfit', sans-serif";
      ctx.fillStyle = "#EC008C";
      ctx.fillText(`📍 ${thisYearEvent.route.startLabel} → ${thisYearEvent.route.endLabel}`, W / 2, dateBoxY + 78);
      ctx.restore();

      // CTA
      // ctx.save();
      // ctx.textAlign = "center";
      // ctx.fillStyle = "#2A091A";
      // ctx.font = "bold 28px 'Montserrat', sans-serif";
      // ctx.fillText("JOIN ME AT THE WALK! 🌸", W / 2, 965);
      // ctx.restore();

      // Footer
      ctx.save();
      ctx.font = "400 20px 'Outfit', sans-serif";
      ctx.fillStyle = "rgba(74, 18, 49, 0.55)";
      ctx.textAlign = "center";
      ctx.fillText("pinkwalk.github.io · #PinkWalk2026", W / 2, 1015);
      ctx.restore();
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
          I Walked in <span className="text-gradient-pink">PinkWalk 2026!</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Upload your photo, personalize your PinkWalk 2026 badge, and share it on social media to spread breast cancer awareness and show your solidarity!
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
                    className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all ${frameStyle === style.id
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
                    className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${tagline === tag && !customTagline
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
