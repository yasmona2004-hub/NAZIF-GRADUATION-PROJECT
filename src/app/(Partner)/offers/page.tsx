"use client";

import { useState } from "react";
import { Plus, Download, SlidersHorizontal, Pencil, Trash2, TrendingUp } from "lucide-react";
import TopBar from "@/app/_components/partner/TopBar";
import StatusBadge from "@/app/_components/partner/StatusBadge";
import AddOfferModal from "@/app/_components/partner/AddOfferModal";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Offer {
  id: number;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  discount: string;
  target: string;
  validity: string;
  status: "Active" | "Expiring Soon" | "Inactive";
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const OFFERS: Offer[] = [
  {
    id: 1,
    title: "Eco Warrior Discount",
    subtitle: "Tier 1 Recyclers",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#2D5016]",
    discount: "15% OFF",
    target: "Green Grocer Co.",
    validity: "Jan 01 - Dec 31, 2024",
    status: "Active",
  },
  {
    id: 2,
    title: "Flash Waste Rewards",
    subtitle: "Hazardous Materials",
    iconBg: "bg-[#FFF9C4]",
    iconColor: "text-[#F59E0B]",
    discount: "$50 Credit",
    target: "VoltRecycle Ltd",
    validity: "May 15 - Jun 15, 2024",
    status: "Expiring Soon",
  },
  {
    id: 3,
    title: "Holiday Bundle",
    subtitle: "All Registered Users",
    iconBg: "bg-[#F3F4F6]",
    iconColor: "text-gray-500",
    discount: "8000 Free",
    target: "TerraStore Global",
    validity: "Dec 20 - Jan 05, 2023",
    status: "Inactive",
  },
  {
    id: 4,
    title: "Premium Partner Pass",
    subtitle: "Corporate Partners",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#2D5016]",
    discount: "25% Rebate",
    target: "BioFuel Solutions",
    validity: "Feb 01 - Jun 30, 2024",
    status: "Active",
  },
];

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  sub,
  subColor,
}: {
  label: string;
  value: string | number;
  sub?: string;
  subColor?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-xs font-medium text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-bold text-[#1A2E0A]">{value}</p>
      {sub && (
        <p className={`mt-1 flex items-center gap-1 text-xs ${subColor ?? "text-gray-400"}`}>
          {subColor?.includes("green") && <TrendingUp className="h-3 w-3" />}
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Offer row icon ───────────────────────────────────────────────────────────
function OfferIcon({ bg, color, type }: { bg: string; color: string; type: number }) {
  return (
    <span className={`flex h-9 w-9 items-center justify-center rounded-full ${bg}`}>
      {type === 1 && (
        <svg className={`h-4 w-4 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      )}
      {type === 2 && (
        <svg className={`h-4 w-4 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
      )}
      {type === 3 && (
        <svg className={`h-4 w-4 ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )}
      {type === 4 && (
        <svg className={`h-4 w-4 ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OffersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Top nav */}
      <TopBar searchPlaceholder="Search offers..." />

      <div className="px-8 pb-10">
        {/* Page heading */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-[#1A2E0A]">
              Offers Management
            </h1>
            <p className="mt-1 max-w-md text-sm text-[#4A7C59]">
              Create and manage partner discounts, incentive programs, and
              exclusive recycling rewards for the NAZIF ecosystem.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#2D5016] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#3D6B1F] transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add New Offer
          </button>
        </div>

        {/* Stat cards */}
        <div className="mb-8 grid grid-cols-4 gap-4">
          <StatCard
            label="Total Active"
            value={24}
            sub="+12% from last month"
            subColor="text-green-600"
          />
          <StatCard
            label="Expiring Soon"
            value="05"
            sub="Requires attention"
            subColor="text-amber-500"
          />
          <StatCard label="Redemption Rate" value="68%" sub="Avg per partner" />
          <StatCard
            label="New Partner Apps"
            value="03"
            sub="Pending review"
          />
        </div>

        {/* Table card */}
        <div className="rounded-2xl bg-white shadow-sm">
          {/* Table header row */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Active Partner Offers
            </p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <Download className="h-3.5 w-3.5" />
                Export CSV
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filter
              </button>
            </div>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr_auto] gap-4 px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            <span>Offer Title</span>
            <span>Discount / Value</span>
            <span>Target Partner</span>
            <span>Validity Period</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Rows */}
          {OFFERS.map((offer, i) => (
            <div
              key={offer.id}
              className={`grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr_auto] items-center gap-4 px-6 py-4 ${
                i !== OFFERS.length - 1 ? "border-b border-gray-50" : ""
              } hover:bg-[#FAFAF7] transition-colors`}
            >
              {/* Title */}
              <div className="flex items-center gap-3">
                <OfferIcon bg={offer.iconBg} color={offer.iconColor} type={offer.id} />
                <div>
                  <p className="text-sm font-semibold text-[#1A2E0A]">
                    {offer.title}
                  </p>
                  <p className="text-xs text-gray-400">{offer.subtitle}</p>
                </div>
              </div>

              <span className="text-sm font-bold text-[#1A2E0A]">
                {offer.discount}
              </span>
              <span className="text-sm text-gray-600">{offer.target}</span>
              <span className="text-xs text-gray-500">{offer.validity}</span>
              <StatusBadge status={offer.status} />

              {/* Action buttons */}
              <div className="flex items-center gap-1">
                <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button className="rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
            <p className="text-xs text-gray-400">Showing 1 to 4 of 24 offers</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    n === 1
                      ? "bg-[#2D5016] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D5016] text-white hover:bg-[#3D6B1F] transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AddOfferModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}