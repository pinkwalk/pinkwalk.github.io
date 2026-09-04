import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PartnerFormModal } from "./PartnerFormModal";
import {
  Handshake,
  ArrowRight,
  Megaphone,
  Stethoscope,
  Truck,
  Sparkles,
  Award,
} from "lucide-react";

interface PartnerCalloutProps {
  className?: string;
}

export function PartnerCallout({ className = "" }: PartnerCalloutProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative isolate overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-plum via-plum/90 to-pink-950 p-7 sm:p-10 text-white shadow-xl ${className}`}
      >
        {/* Background decorative glows */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold text-pink-200 backdrop-blur-sm ring-1 ring-white/20">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Partnership & Collaboration</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Amplify the Cause — <br />
              <span className="bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300 bg-clip-text text-transparent">
                Partner with PinkWalk 2026
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-white/85">
              We invite media houses, healthcare institutions, corporate organizations, logistics providers, and community networks to join hands with us. Help us expand our reach and impact across the Kathmandu Valley.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/90">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                <Megaphone className="h-3.5 w-3.5 text-primary" /> Media & Coverage
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                <Stethoscope className="h-3.5 w-3.5 text-primary" /> Health & Screening
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                <Truck className="h-3.5 w-3.5 text-primary" /> Logistics & Water
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                <Award className="h-3.5 w-3.5 text-primary" /> CSR & Support
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-pink transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Handshake className="h-4 w-4" />
                <span>Partner With Us</span>
              </button>

              <Link
                to="/partner"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span>View Partnership Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center rounded-2xl bg-white/5 p-6 border border-white/10 text-center backdrop-blur-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary ring-8 ring-primary/10 mb-4">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Why Partner With Us?
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-white/80 text-left">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Direct engagement with thousands of event participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Widespread media, social, and press coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Demonstrate health awareness & social impact leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {modalOpen && (
        <PartnerFormModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          source="index_callout"
        />
      )}
    </>
  );
}
