"use client";

import { useState } from "react";
import { Search, Bell, Settings, UserPlus, SlidersHorizontal, Download, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import AddCollectorModal from "@/app/_components/company/AddCollectorModal";

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = "Completed" | "Pending";

interface Collector {
  id: string;
  collectorId: string;
  name: string;
  initials: string;
  avatarBg: string;
  collectionDate: string;
  materialType: string;
  materialColor: string;
  weight: number;
  status: Status;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const COLLECTORS: Collector[] = [
  {
    id: "1", collectorId: "#COL-8821", name: "Elena Kostic", initials: "EK",
    avatarBg: "bg-[#E8F5E9]", collectionDate: "Oct. 24, 2023",
    materialType: "Plastic", materialColor: "text-[#4A7C59] bg-[#E8F5E9]",
    weight: 142.5, status: "Completed",
  },
  {
    id: "2", collectorId: "#COL-8822", name: "David Miller", initials: "DM",
    avatarBg: "bg-[#E3F2FD]", collectionDate: "Oct. 24, 2023",
    materialType: "Metal", materialColor: "text-[#1565C0] bg-[#E3F2FD]",
    weight: 89.0, status: "Pending",
  },
  {
    id: "3", collectorId: "#COL-8823", name: "Sarah Wong", initials: "SW",
    avatarBg: "bg-[#FFF8E1]", collectionDate: "Oct. 23, 2023",
    materialType: "Paper", materialColor: "text-[#F59E0B] bg-[#FFF8E1]",
    weight: 210.3, status: "Completed",
  },
  {
    id: "4", collectorId: "#COL-8824", name: "Amir Jackson", initials: "AJ",
    avatarBg: "bg-[#FCE4EC]", collectionDate: "Oct. 23, 2023",
    materialType: "Plastic", materialColor: "text-[#4A7C59] bg-[#E8F5E9]",
    weight: 56.5, status: "Completed",
  },
];

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusDot({ status }: { status: Status }) {
  return (
    <span className={`flex items-center gap-1.5 text-xs font-medium ${status === "Completed" ? "text-[#2D5016]" : "text-amber-500"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === "Completed" ? "bg-[#2D5016]" : "bg-amber-500"}`} />
      {status}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CollectorsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search collectors or transactions..."
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D5016] text-[10px] font-bold text-white">
              AU
            </div>
            <div className="text-xs">
              <p className="font-semibold text-[#1A2E0A] leading-none">Admin User</p>
              <p className="text-gray-400 leading-none mt-0.5">System Admin</p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-8 pb-10">
        {/* Breadcrumb */}
        <div className="mb-2 flex items-center gap-1 text-xs text-gray-400">
          <span className="font-medium uppercase tracking-wider">Agents</span>
          <span>/</span>
          <span className="font-semibold uppercase tracking-wider text-[#2D5016]">Management</span>
        </div>

        {/* Heading + CTA */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A2E0A]">Collectors Management</h1>
            <p className="mt-1 max-w-md text-sm text-gray-500">
              Track real-time recycling activities, monitor collector efficiency, and manage
              logistical statuses across your region.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#2D5016] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#3D6B1F] transition-colors"
          >
            <UserPlus className="h-4 w-4" />
            Add Collector
          </button>
        </div>

        {/* Table card */}
        <div className="rounded-2xl bg-white shadow-sm">
          {/* Table toolbar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <p className="text-sm font-bold text-[#1A2E0A]">Collectors History</p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <Download className="h-3.5 w-3.5" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[2fr_1fr_1.2fr_1fr_1fr_1fr_auto] items-center gap-4 px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            <span>Collector Name</span>
            <span>ID</span>
            <span>Collection Date</span>
            <span>Material Type</span>
            <span>Weight (KG)</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Rows */}
          {COLLECTORS.map((c, i) => (
            <div
              key={c.id}
              className={`grid grid-cols-[2fr_1fr_1.2fr_1fr_1fr_1fr_auto] items-center gap-4 px-6 py-4 hover:bg-[#FAFAF7] transition-colors ${
                i !== COLLECTORS.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#2D5016] ${c.avatarBg}`}>
                  {c.initials}
                </span>
                <span className="text-sm font-semibold text-[#1A2E0A]">{c.name}</span>
              </div>

              <span className="text-xs text-gray-400 font-mono">{c.collectorId}</span>
              <span className="text-sm text-gray-600">{c.collectionDate}</span>

              {/* Material pill */}
              <span className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.materialColor}`}>
                {c.materialType}
              </span>

              <span className="text-sm font-semibold text-[#1A2E0A]">{c.weight}</span>
              <StatusDot status={c.status} />

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button className="rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
            <p className="text-xs text-gray-400">Showing 1 to 4 of 24 results</p>
            <div className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                    n === 1 ? "bg-[#2D5016] text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Info cards ── */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            {
              icon: "📦",
              title: "Resource Allocation",
              body: "Truck availability in Sector 4 is currently at 85%.",
            },
            {
              icon: "🌿",
              title: "Carbon Offset",
              body: "Collected materials saved approx. 4.6 tons of CO₂ this week.",
            },
            {
              icon: "🖥️",
              title: "System Health",
              body: "All 12 regional hubs are currently online and syncing.",
            },
          ].map((card) => (
            <div key={card.title} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <span className="text-2xl">{card.icon}</span>
              <div>
                <p className="text-sm font-bold text-[#1A2E0A]">{card.title}</p>
                <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddCollectorModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}