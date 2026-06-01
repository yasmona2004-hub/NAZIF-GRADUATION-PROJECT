"use client";

import { Bell, MapPin, Phone, ChevronRight } from "lucide-react";

// ─── Active Zones ─────────────────────────────────────────────────────────────
const ZONES = [
  {
    name: "Downtown Sector A",
    sub: "Daily Collection Cycle",
    dotColor: "bg-[#2D5016]",
    icon: "🔄",
    iconBg: "bg-[#E8F5E9]",
  },
  {
    name: "Industrial Hub East",
    sub: "Bi-weekly Frequency",
    dotColor: "bg-[#F59E0B]",
    icon: "🏭",
    iconBg: "bg-[#FFF8E1]",
  },
  {
    name: "Residential North",
    sub: "Mon, Wed, Fri",
    dotColor: "bg-[#3B82F6]",
    icon: "🏠",
    iconBg: "bg-[#EFF6FF]",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CompanyProfilePage() {
  return (
    <>
      {/* ── Top bar ── */}
      <header className="flex items-center justify-end border-b border-gray-200 bg-[#F5F5F0] px-8 h-14">
        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D5016] text-xs font-bold text-white">
            EC
          </div>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D6B1F] via-[#2D5016] to-[#1A2E0A]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 30%, #8BC34A 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, #4A7C59 0%, transparent 45%)",
          }}
        />

        {/* Logo box */}
        <div className="absolute left-8 bottom-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg border-2 border-white/60">
          <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2D5016] text-white text-xs">
            ✓
          </span>
        </div>

        {/* Name + badge */}
        <div className="absolute left-36 bottom-10">
          <span className="mb-1 inline-flex rounded-full border border-[#8BC34A]/50 bg-[#4A7C59]/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#C8E6C9]">
            Verified Collector
          </span>
          <h2 className="text-3xl font-extrabold text-white leading-tight">
            EcoCollect Solutions
          </h2>
          <p className="text-sm text-[#A5D6A7]">
            Pioneering sustainable recovery for a greener future with innovative logistics.
          </p>
        </div>

        {/* Global rank */}
        <div className="absolute right-8 bottom-8 text-right">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A5D6A7]">
            Global Rank
          </p>
          <p className="text-4xl font-extrabold text-white">#12</p>
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className="grid grid-cols-[1.4fr_1fr] gap-6 px-8 py-6">
        {/* Left: About card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm relative overflow-hidden">
          {/* Watermark icon */}
          <div className="absolute right-4 top-4 opacity-[0.06]">
            <svg className="h-24 w-24 text-[#2D5016]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>

          {/* About */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-5 w-1 rounded-full bg-[#2D5016]" />
            <p className="text-sm font-bold text-[#1A2E0A]">About Company</p>
          </div>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed">
            EcoCollect Solutions specialises in the large-scale recovery of industrial
            post-consumer plastics and aluminium. Established in 2018, we have become a
            key partner in the NAZIF ecosystem, processing over 500 tons of recyclable
            material monthly.
          </p>

          {/* HQ + Contact grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="mb-2 flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#E8F5E9]">
                  <MapPin className="h-3 w-3 text-[#2D5016]" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Headquarters
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                128 Green Tech Blvd,
                <br />
                Sector 4<br />
                Metropolis Eco Hub
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#E8F5E9]">
                  <Phone className="h-3 w-3 text-[#2D5016]" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Contact Details
                </p>
              </div>
              <p className="text-sm text-gray-700">ops@ecocollect.example.com</p>
              <p className="text-sm text-gray-700 mt-0.5">+1 (555) 012-3456</p>
            </div>
          </div>
        </div>

        {/* Right: Active Zones */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold text-[#1A2E0A]">Active Zones</p>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-400">Managed operation areas</p>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5E9] text-xs font-bold text-[#2D5016]">
                04
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {ZONES.map((zone) => (
              <div
                key={zone.name}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 hover:border-[#2D5016]/30 hover:bg-[#FAFAF7] transition-colors cursor-pointer"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${zone.iconBg}`}>
                  {zone.icon}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1A2E0A]">{zone.name}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <span className={`h-1.5 w-1.5 rounded-full ${zone.dotColor}`} />
                    {zone.sub}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}