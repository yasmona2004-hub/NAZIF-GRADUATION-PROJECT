"use client";

import { useState } from "react";
import Link from "next/link";

/* ── ICONS ───────────────────────────────────── */
const LeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-13 4z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const RecycleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.4 4.8h-1a7 7 0 0 1 .7 3.2H16l-4 3-4-3h1.9A7 7 0 0 1 10.6 6.8h-1L12 2zm-6.9 9H3l4 3 4-3H9a7 7 0 0 0 6.9 5.5v2A9 9 0 0 1 5.1 11zm13.8 0a9 9 0 0 1-1.4 4.9l1.6 1-5 1.5 1.5-5 1.5 1a7 7 0 0 0 1-3.4H18.9z" />
  </svg>
);

const CompostIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.7 2.9-1.7 3.8C17.2 12 19 14.3 19 17a7 7 0 0 1-14 0c0-2.7 1.8-5 4.7-6.2A5 5 0 0 1 12 2zm0 2a3 3 0 0 0-1.2 5.7L12 10.4l1.2-.7A3 3 0 0 0 12 4z" />
  </svg>
);

const AuditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <path d="M16 12h4v4h-4a2 2 0 0 1 0-4z" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── DATA ────────────────────────────────────── */
const requestHistory = [
  {
    id: 1,
    icon: <RecycleIcon />,
    iconBg: "bg-[#e1e3e1]",
    iconColor: "text-[#2d4f1e]",
    title: "Recycling Pickup",
    subtitle: "SCHEDULED FOR APRIL 23, 2024",
    status: "Scheduled",
    statusColor: "bg-[#caec7f] text-[#384e00]",
    points: "+30 pts",
  },
  {
    id: 2,
    icon: <CompostIcon />,
    iconBg: "bg-[#f3f4f2]",
    iconColor: "text-[#4c6703]",
    title: "Compost Drop-off",
    subtitle: "COMPLETED MARCH 15, 2024",
    status: "Completed",
    statusColor: "bg-[#173809] text-white",
    points: "+15 pts",
  },
  {
    id: 3,
    icon: <AuditIcon />,
    iconBg: "bg-[#f3f4f2]",
    iconColor: "text-[#73796d]",
    title: "Bulk Waste Audit",
    subtitle: "FEBRUARY 28, 2024",
    status: "Completed",
    statusColor: "bg-[#173809] text-white",
    points: "+50 pts",
  },
];

const vouchers = [
  {
    discount: "15% OFF",
    exp: "JAN 30, 2024",
    color: "bg-[#f3f4f2]",
    btnColor: "bg-[#173809] text-white hover:bg-[#2d4f1e]",
    textColor: "text-[#191c1b]",
    subColor: "text-[#73796d]",
  },
  {
    discount: "25% OFF",
    exp: "JUL 15, 2024",
    color: "bg-[#f3f4f2]",
    btnColor: "bg-[#173809] text-white hover:bg-[#2d4f1e]",
    textColor: "text-[#191c1b]",
    subColor: "text-[#73796d]",
  },
  {
    discount: "FREE PICKUP",
    exp: "AUG 30, 2023",
    color: "bg-[#173809]",
    btnColor: "bg-[#caec7f] text-[#173809] hover:bg-[#b1d269]",
    textColor: "text-white",
    subColor: "text-[#98c083]",
  },
];

/* ── PAGE ────────────────────────────────────── */
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"history" | "vouchers">("history");

  return (
    <main
      className="min-h-screen bg-[#f9faf8] px-4 sm:px-6 py-10"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap');`}</style>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* ── PAGE TITLE ── */}
        <div>
          <h1
            className="text-[#191c1b] font-extrabold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Your Stewardship Dashboard
          </h1>
          <p className="text-[#73796d] text-sm mt-1">
            Managing your environmental contribution in Jane Doe's ecosystem.
          </p>
        </div>

        {/* ── PROFILE HEADER CARD ── */}
        <div className="bg-white rounded-3xl border border-[#e7e8e6] p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between shadow-sm">

          {/* Left: user info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#2d4f1e] flex items-center justify-center text-white font-bold text-sm">
                JD
              </div>
              <div>
                <h2
                  className="text-[#191c1b] font-bold text-lg leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Jane Doe
                </h2>
              </div>
            </div>
            <p className="text-[#73796d] text-xs">jane.doe@example.com</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#f3f4f2] text-[#43493e] text-xs font-semibold px-3 py-1 rounded-full border border-[#e1e3e1]">
                Member since Jan 2023
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#173809] text-[#caec7f] text-xs font-semibold px-3 py-1 rounded-full">
                <CheckIcon />
                Verified Contributor
              </span>
            </div>
          </div>

          {/* Center: status */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#73796d] text-xs font-semibold tracking-widest uppercase">
              Current Status
            </span>
            <span
              className="text-[#173809] font-extrabold italic"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.5rem" }}
            >
              Eco-Warrior
            </span>
          </div>

          {/* Right: points card */}
          <div className="bg-[#173809] rounded-2xl px-6 py-4 flex flex-col gap-2 min-w-[180px]">
            <span className="text-[#98c083] text-xs font-semibold tracking-widest uppercase">
              Collected Points
            </span>
            <div className="flex items-end gap-2">
              <span
                className="text-white font-extrabold leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.4rem" }}
              >
                2,450
              </span>
              <span className="text-[#98c083] text-sm mb-1">pts</span>
              <LeafIcon className="w-6 h-6 text-[#caec7f] mb-1 ml-auto" />
            </div>
            <button className="mt-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200">
              <WalletIcon />
              Redeem Points
            </button>
          </div>
        </div>

        {/* ── MAIN CONTENT: 2 columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* LEFT: Request History (spans 2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#e7e8e6] p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3
                className="text-[#191c1b] font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem" }}
              >
                Request History
              </h3>
              <Link
                href="/wastelog"
                className="inline-flex items-center gap-1.5 bg-[#173809] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#2d4f1e] active:scale-95 transition-all duration-200"
              >
                <PlusIcon />
                Make New Request
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {requestHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#f9faf8] border border-transparent hover:border-[#e7e8e6] transition-all duration-150 group"
                >
                  {/* icon */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}>
                    {item.icon}
                  </div>

                  {/* text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[#191c1b] font-semibold text-sm truncate">{item.title}</p>
                    <p className="text-[#73796d] text-xs mt-0.5">{item.subtitle}</p>
                  </div>

                  {/* points */}
                  <span className="text-[#4c6703] text-xs font-bold whitespace-nowrap">{item.points}</span>

                  {/* status badge */}
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${item.statusColor}`}>
                    {item.status}
                  </span>

                  <ChevronRight />
                </div>
              ))}
            </div>

            {/* View all */}
            <button className="mt-1 text-[#2d4f1e] text-xs font-semibold hover:underline self-start transition-colors">
              View all requests →
            </button>
          </div>

          {/* RIGHT: Active Vouchers */}
          <div className="bg-white rounded-3xl border border-[#e7e8e6] p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3
                className="text-[#191c1b] font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem" }}
              >
                Active Vouchers
              </h3>
              <TagIcon />
            </div>

            <div className="flex flex-col gap-3">
              {vouchers.map((v, i) => (
                <div
                  key={i}
                  className={`${v.color} rounded-2xl px-4 py-3.5 flex flex-col gap-2`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-extrabold leading-tight ${v.textColor}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.1rem" }}
                    >
                      {v.discount}
                    </span>
                  </div>
                  <p className={`text-xs ${v.subColor}`}>
                    EXP: {v.exp}
                  </p>
                  <button
                    className={`w-full text-xs font-semibold py-1.5 rounded-full transition-all duration-200 active:scale-95 ${v.btnColor}`}
                  >
                    Use Voucher
                  </button>
                </div>
              ))}
            </div>

            <button className="text-[#2d4f1e] text-xs font-semibold hover:underline self-start transition-colors">
              View all vouchers →
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}