// app/(partner)/profile/page.tsx
"use client";

import { useState } from "react";
import { Plus, Download, SlidersHorizontal, MapPin, Mail, Phone } from "lucide-react";
import AddOfferModal from "@/app/_components/partner/AddOfferModal";
import TopBar from "@/app/_components/partner/TopBar";
import StatusBadge from "@/app/_components/partner/StatusBadge";

// ─── Types ────────────────────────────────────────────────────────────────────
interface OfferPerformance {
  name: string;
  status: "Active" | "Paused";
  conversion: string;
  volume: string | number;
  revenue: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const RECENT_OFFERS: OfferPerformance[] = [
  {
    name: "Recycled HDPE Pellets",
    status: "Active",
    conversion: "84%",
    volume: 145.2,
    revenue: "€12,400",
  },
  {
    name: "Post-Industrial Copper Scraps",
    status: "Active",
    conversion: "92%",
    volume: 12.8,
    revenue: "€48,600",
  },
  {
    name: "Mixed Glass Cullet (Grade A)",
    status: "Paused",
    conversion: "0%",
    volume: 0,
    revenue: "€0",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Top nav – right slot shows partner avatar initials */}
      <TopBar
        searchPlaceholder="Search resources..."
        rightSlot={
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D5016] text-xs font-bold text-white">
            GC
          </div>
        }
      />

      <div className="px-8 pb-10">
        {/* ── Hero banner ── */}
        <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#1A2E0A]" style={{ height: 180 }}>
          {/* Background texture – subtle radial gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016] via-[#1A2E0A] to-[#0D1A05] opacity-80" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #4A7C59 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8BC34A 0%, transparent 40%)",
            }}
          />

          {/* Brand logo placeholder */}
          <div className="absolute bottom-4 left-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg">
            <span className="text-xs font-bold text-[#2D5016]">Brand Logo</span>
          </div>

          {/* Partner name + badge */}
          <div className="absolute bottom-5 left-28 flex items-center gap-3">
            <h2 className="text-2xl font-extrabold text-white">
              GreenCycle Solutions
            </h2>
            <span className="rounded-full bg-[#4A7C59]/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#A5D6A7] border border-[#4A7C59]">
              ✓ Verified Partner
            </span>
          </div>
          <p className="absolute bottom-1 left-28 text-xs text-[#A5D6A7]">
            Industrial Recycling &amp; Sustainable Waste Management
          </p>

          {/* Add New Offer button */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute right-6 bottom-6 flex items-center gap-2 rounded-full bg-[#2D5016] border border-[#4A7C59] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3D6B1F] transition-colors shadow"
          >
            <Plus className="h-4 w-4" />
            Add New Offer
          </button>
        </div>

        {/* ── Two-column content ── */}
        <div className="grid grid-cols-[1fr_2fr] gap-6">
          {/* Left: Company Info */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                <svg className="h-3 w-3 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </span>
              <h3 className="text-sm font-bold text-[#1A2E0A]">
                Company Information
              </h3>
            </div>

            {/* About */}
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-2">
              About
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              GreenCycle Solutions is a leader in industrial-scale material
              recovery, specialising in rare earth metals and polymer
              repurposing. Founded in 2014, we operate three zero-emission
              facilities across Northern Germany.
            </p>

            {/* Headquarters */}
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-2">
              Headquarters
            </p>
            <div className="flex items-start gap-2 mb-5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              <p className="text-sm text-gray-600">
                Industriestraße 42
                <br />
                10115 Berlin, Germany
              </p>
            </div>

            {/* Contact */}
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A7C59] mb-2">
              Contact Details
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">admin@greencycle.eco</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">+49 30 555-0123</span>
              </div>
            </div>
          </div>

          {/* Right: Recent Offer Performance */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5E9]">
                  <svg className="h-3 w-3 text-[#2D5016]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </span>
                <h3 className="text-sm font-bold text-[#1A2E0A]">
                  Recent Offer Performance
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs font-medium text-[#4A7C59] hover:underline">
                  Download
                </button>
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700">
                  <SlidersHorizontal className="h-3 w-3" />
                  Filter
                </button>
              </div>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-100">
              <span>Offer Name</span>
              <span>Status</span>
              <span>Conversion</span>
              <span>Volume (T)</span>
              <span>Revenue</span>
            </div>

            {/* Rows */}
            {RECENT_OFFERS.map((offer, i) => (
              <div
                key={i}
                className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-4 py-4 ${
                  i !== RECENT_OFFERS.length - 1
                    ? "border-b border-gray-50"
                    : ""
                }`}
              >
                <span className="text-sm font-semibold text-[#1A2E0A]">
                  {offer.name}
                </span>

                {/* Status dot */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      offer.status === "Active"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />
                  <span className="text-xs text-gray-500">{offer.status}</span>
                </div>

                <span className="text-sm text-gray-700">{offer.conversion}</span>
                <span className="text-sm text-gray-700">{offer.volume}</span>
                <span className="text-sm font-semibold text-[#1A2E0A]">
                  {offer.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddOfferModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}