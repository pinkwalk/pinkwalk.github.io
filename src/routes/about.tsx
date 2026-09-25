import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin,
  Calendar,
  Globe,
  Handshake,
} from "lucide-react";
import logo from "@/assets/pinkwalk-logo.png";
import infiniteLogo from "@/assets/infinite-logo.jpg";
import cancerCareLogo from "@/assets/cancercare-logo.jpg";
import infiniteCaresLogo from "@/assets/infinitecares-logo.svg";
import { thisYearEvent, contactEmail } from "@/lib/event-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PinkWalk, Infinite Cares & Cancer Care Nepal" },
      {
        name: "description",
        content:
          "Learn about PinkWalk, Infinite Cares (CSR of Infinite Software Services), Infinite Computer Solutions, and Cancer Care Nepal working together for breast cancer awareness.",
      },
      {
        property: "og:title",
        content: "About Us — PinkWalk & Our Organizers",
      },
      {
        property: "og:description",
        content:
          "Discover the story behind PinkWalk, Infinite Cares, Infinite, and Cancer Care Nepal.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero Header */}
      <section className="py-14 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Heart className="h-3.5 w-3.5 fill-primary" />
          <span>Our Story & Mission · {thisYearEvent.year}</span>
        </div>

        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Walking Together for{" "}
          <span className="text-gradient-pink">Hope & Awareness</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          PinkWalk is a community-led breast cancer awareness initiative in the
          Kathmandu Valley, brought to life through the collaborative efforts of{" "}
          <strong className="text-foreground font-semibold">Infinite Cares</strong>,{" "}
          <strong className="text-foreground font-semibold">Infinite Software Services</strong>, and{" "}
          <strong className="text-foreground font-semibold">Cancer Care Nepal</strong>.
        </p>

        {/* Anchor Nav Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          <a
            href="#pinkwalk"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>PinkWalk Campaign</span>
          </a>
          <a
            href="#infinite-cares"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Heart className="h-3.5 w-3.5 text-primary" />
            <span>Infinite Cares</span>
          </a>
          <a
            href="#infinite"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Building2 className="h-3.5 w-3.5 text-primary" />
            <span>Infinite Software Services Nepal Pvt. Ltd.</span>
          </a>
          <a
            href="#cancer-care-nepal"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 font-semibold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Cancer Care Nepal</span>
          </a>
        </div>
      </section>

      {/* Highlights Stat Bar */}
      <section className="mb-16 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-4 sm:p-8 text-center">
        <div>
          <p className="font-display text-3xl sm:text-4xl font-bold text-primary">
            4.3 km
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Heritage Walk Route
          </p>
        </div>
        <div>
          <p className="font-display text-3xl sm:text-4xl font-bold text-primary">
            600+
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            IT Professionals at Infinite
          </p>
        </div>
        <div>
          <p className="font-display text-3xl sm:text-4xl font-bold text-primary">
            2,500+
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Expected Participants
          </p>
        </div>
        <div>
          <p className="font-display text-3xl sm:text-4xl font-bold text-primary">
            2 Cities
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Basantapur → Mangal Bazar
          </p>
        </div>
      </section>

      {/* SECTION 1: PINKWALK */}
      <section id="pinkwalk" className="scroll-mt-24 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-3 py-1 text-xs font-semibold text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Community Walkathon Initiative</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              About <span className="text-gradient-pink">PinkWalk</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              PinkWalk is an annual community awareness walkathon created to raise
              vital public awareness about breast cancer, highlight the life-saving
              importance of early detection, and extend solidarity to individuals and
              families affected by cancer across Nepal.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Breast cancer can be treated effectively when identified early. PinkWalk
              serves as an open, stigma-free platform encouraging regular health screenings,
              self-examinations, and compassionate social support throughout cancer recovery.
            </p>

            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-foreground">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong>Heritage Route:</strong> Basantapur (Kathmandu Durbar Square) to Patan Durbar Square (Mangal Bazar)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong>Proven Track Record:</strong> Inaugural 2023 edition mobilized 600+ participants from Narayanchaur to Swayambhu.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong>Community Solidarity:</strong> Uniting doctors, survivors, students, press, and civic leaders.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-pink-wash/50 p-6 sm:p-8 flex flex-col justify-between shadow-soft">
            <img src={logo} alt="PinkWalk Logo" className="h-12 w-auto self-start" />
            <div className="mt-8 space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 font-display text-base italic text-foreground leading-relaxed">
                "PinkWalk is not just a walk; it is a collective expression of awareness, hope, courage, and solidarity."
              </blockquote>
              <p className="text-xs text-muted-foreground">
                — Dijup Tuladhar, Lead at Infinite Cares & PinkWalk Co-Organizer
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-primary/20 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
              <Link to="/register" className="text-primary hover:underline flex items-center gap-1">
                <span>Register for PinkWalk 2026</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/past-event" className="text-muted-foreground hover:text-foreground">
                View 2023 Walkathon →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INFINITE CARES */}
      <section id="infinite-cares" className="scroll-mt-24 pb-16">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-3 py-1 text-xs font-semibold text-primary mb-2">
                <Heart className="h-3.5 w-3.5 fill-primary" />
                <span>Corporate Social Responsibility</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <img src={infiniteCaresLogo} alt="Infinite Cares" className="h-10 w-auto object-contain" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">

                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              The dedicated CSR unit driving community health, education, and social sustainability initiatives in Nepal.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 text-sm text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong className="text-foreground">Infinite Cares</strong> is the community and Corporate Social Responsibility (CSR) wing of Infinite Software Services Nepal Pvt. Ltd. It represents the collective passion of our team members to create tangible, positive social impact beyond software engineering.
              </p>
              <p>
                Through Infinite Cares, our employees and leadership actively design and support long-term social initiatives focusing on community health awareness, women's wellbeing, educational opportunities, and environmental sustainability across Nepal.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-muted/40 p-5 sm:p-6 border border-border/70">
              <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>Infinite Cares Pillars</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Health & Preventive Awareness:</strong> Leading healthcare walkathons and screening awareness drives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Community Solidarity:</strong> Supporting affected families with emotional and social resources.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Employee Engagement:</strong> Mobilizing 600+ professionals for civic causes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: CANCER CARE NEPAL */}
      <section id="cancer-care-nepal" className="scroll-mt-24 pb-20">
        <div className="rounded-3xl border border-primary/20 bg-pink-wash/80 p-6 sm:p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-3.5 py-1 text-xs font-semibold text-primary mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Medical Partner & Non-Profit Organization</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                About Cancer Care Nepal
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                Cancer Care Nepal is a non-profit organization dedicated to cancer awareness, prevention, early detection, and comprehensive patient support across Nepal.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Working alongside hospitals, oncology professionals, community health workers, and donors, Cancer Care Nepal strives to ensure that no individual is denied information, screening, or medical care because of where they live or what they can afford.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-2xl bg-card p-5 border border-border/80 shadow-xs">
                  <h4 className="font-semibold text-foreground text-sm">Awareness & Early Screening</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Conducting community health camps and breast screening programs across rural and urban Nepal.
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-5 border border-border/80 shadow-xs">
                  <h4 className="font-semibold text-foreground text-sm">Patient Assistance</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Directing donations to assist underprivileged patients with diagnostic tests, treatment, and care.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full rounded-2xl bg-white p-6 border border-border/80 shadow-md flex items-center justify-center">
                <img
                  src={cancerCareLogo}
                  alt="Cancer Care Nepal Logo"
                  className="h-24 sm:h-28 md:h-32 w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-primary/20 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <a
              href="https://cancercarenepal.org.np"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline flex items-center gap-1.5"
            >
              <span>Visit Cancer Care Nepal Website</span>
              <Globe className="h-4 w-4" />
            </a>

            <Link to="/partner" className="text-foreground hover:text-primary flex items-center gap-1">
              <span>Partner with Cancer Care Nepal & PinkWalk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: INFINITE (ISS NEPAL / INFINITE COMPUTER SOLUTIONS) */}
      <section id="infinite" className="scroll-mt-24 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
            <div className="flex items-center gap-4 mb-6">
              <img src={infiniteLogo} alt="Infinite Software Services" className="h-10 w-auto" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Infinite Software Services Nepal
                </h3>
                <p className="text-xs text-muted-foreground">
                  Infinite Computer Solutions Global Delivery Center
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Infinite</strong> is a global technology services company helping enterprises harness emerging technologies to create measurable business outcomes and enduring advantage.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              With more than <strong className="text-foreground">600 professionals in Nepal</strong>, Infinite helps organizations modernize core platforms, operationalize enterprise AI and deliver measurable outcomes through deep healthcare expertise.
            </p>

            <div className="mt-6 pt-5 border-t border-border/70 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Global Tech Leader · 600+ Staff in Nepal</span>
              <a
                href="https://www.infinite.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Visit infinite.com</span>
                <Globe className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-pink-wash px-3 py-1 text-xs font-semibold text-primary mb-4">
              <Building2 className="h-3.5 w-3.5" />
              <span>Technology with Purpose</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              About <span className="text-gradient-pink">Infinite</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Beyond engineering high-scale technology platforms, Infinite is deeply committed to creating a positive impact in society through sustainable corporate social responsibility.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              By leveraging our organizational strengths, passionate team members, and healthcare industry experience, Infinite continuously supports initiatives like PinkWalk that build a healthier, more inclusive, and sustainable society.
            </p>
          </div>
        </div>
      </section>



      {/* CTA Footer Card */}
      <section className="pb-20 text-center">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-soft">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Join Us in the Walk for Breast Cancer Awareness
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Whether you walk with us on October 3, 2026, join as an official partner, or spread the message across Nepal, your support makes a vital difference.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link
              to="/register"
              className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5"
            >
              Register for PinkWalk 2026
            </Link>
            <Link
              to="/partner"
              className="rounded-full border border-input bg-background px-6 py-3 text-foreground hover:bg-accent"
            >
              Become an Official Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
