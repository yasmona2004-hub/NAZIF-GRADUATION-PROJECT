// import React from 'react'

// export default function PickupTask() {
//   return (
//     <div>PickupTask</div>
//   )
// }
"use client";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    name: "Green Valley Residences",
    time: "09:30 AM",
    type: "Plastic & Paper",
    status: "IN PROGRESS",
    address: "Unit 402, Block B",
    note: "2.4 km away",
    category: "residential",
    icon: "🚛",
  },
  {
    id: 2,
    name: "Serenity Bistro",
    time: "10:15 AM",
    type: "Metal",
    status: "PENDING",
    address: "Main Street, No. 88",
    note: "High Volume",
    category: "commercial",
    icon: "🏪",
  },
  {
    id: 3,
    name: "Creative Hub Offices",
    time: "11:00 AM",
    type: "Paper",
    status: "PENDING",
    address: "Level 3, Loading Dock",
    note: "Express Service",
    category: "commercial",
    icon: "🏢",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    time: "11:45 AM",
    type: "Plastic",
    status: "PENDING",
    address: "Crestwood Dr. 12",
    note: "Residential Pickup",
    category: "residential",
    icon: "🏠",
  },
];

const tabs = ["All Tasks", "Residential", "Commercial"];

export default function PickupTasksPage() {
  const [activeTab, setActiveTab] = useState("All Tasks");

  const filtered = tasks.filter((t) => {
    if (activeTab === "All Tasks") return true;
    return t.category === activeTab.toLowerCase();
  });

  return (
    <div className="flex min-h-screen bg-[#f4f4ef]" style={{ fontFamily: "DM Sans, sans-serif" }}>
      {/* ───── SIDEBAR ───── */}
      <aside className="w-52 bg-white flex flex-col py-6 px-4 border-r border-gray-100 min-h-screen shrink-0">
        <div className="mb-10 px-2">
          <h2 className="text-xl font-black tracking-widest text-[#1a2e1a]">NAZIF</h2>
          <p className="text-[10px] text-gray-400 tracking-widest font-medium mt-0.5">
            WASTE AGENT PORTAL
          </p>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {[
            { label: "Pickup Tasks", active: true },
            { label: "Agent Profile", active: false },
            { label: "Task Details", active: false },
            { label: "Help Center", active: false },
          ].map(({ label, active }) => (
            <button
              key={label}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                active
                  ? "bg-[#e8f0e8] text-[#1a2e1a]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#1a2e1a]"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="flex items-center justify-center gap-2 bg-[#1a2e1a] text-white text-sm font-medium px-4 py-2.5 rounded-xl w-full mt-4 hover:bg-[#2a4a2a] transition-colors">
          ⚠ Report Issue
        </button>
      </aside>

      {/* ───── MAIN ───── */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#1a2e1a]">Pickup Tasks</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Manage your assigned collections for today
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                🔔
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              <span className="text-sm font-medium text-[#1a2e1a]">Agent Malik</span>
            </div>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-2xl mb-1">📋</p>
            <p className="text-xs text-gray-400 mb-1">Pending</p>
            <p className="text-3xl font-bold text-[#1a2e1a]">12</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-2xl mb-1">🔄</p>
            <p className="text-xs text-gray-400 mb-1">In Progress</p>
            <p className="text-3xl font-bold text-[#1a2e1a]">03</p>
          </div>
          <div className="bg-[#1a2e1a] rounded-2xl p-5 text-white relative overflow-hidden">
            <p className="text-2xl mb-1">🗺</p>
            <p className="text-xs text-green-300 mb-1">Route Efficiency</p>
            <p className="text-3xl font-bold">94%</p>
            <p className="text-xs text-green-300 mt-1">Optimal path active for 15 pickups</p>
          </div>
        </div>

        {/* ── TASK LIST ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
          {/* Tabs */}
          <div className="flex items-center justify-between px-5 pt-4 pb-0 border-b border-gray-100">
            <div className="flex gap-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "text-[#1a2e1a] border-b-2 border-[#1a2e1a]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-xs text-gray-400 pb-2">≡ Sorted by Priority</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-50">
            {filtered.map((task) => (
              <div
                key={task.id}
                className="flex items-center px-5 py-4 hover:bg-gray-50 cursor-pointer transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mr-4 shrink-0 text-lg">
                  {task.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-[#1a2e1a] truncate">
                      {task.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                        task.status === "IN PROGRESS"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>🕐 {task.time}</span>
                    <span>♻ {task.type}</span>
                  </div>
                </div>
                <div className="text-right mr-3">
                  <p className="text-xs font-medium text-[#1a2e1a]">{task.address}</p>
                  <p className="text-xs text-gray-400">{task.note}</p>
                </div>
                <span className="text-gray-300 group-hover:text-gray-500 transition-colors">›</span>
              </div>
            ))}
          </div>

          <div className="px-5 py-4 text-center border-t border-gray-50">
            <button className="text-sm text-gray-400 hover:text-[#1a2e1a] transition-colors font-medium">
              Load 8 More Tasks
            </button>
          </div>
        </div>

        {/* ── BOTTOM SECTION ── */}
        <div className="grid grid-cols-2 gap-4">
          {/* Impact Card */}
          <div className="relative rounded-2xl overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80"
              alt="Recycling facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs font-semibold text-green-300 mb-0.5">Impact Today</p>
              <p className="text-sm font-medium leading-snug">
                You&apos;ve diverted 420kg of waste from landfills this week.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#eef3e8] rounded-2xl p-4 flex-1">
              <p className="text-[10px] font-bold tracking-widest text-[#4a7a4a] mb-2">
                💡 AGENT TIP
              </p>
              <p className="text-xs text-[#2a4a2a] leading-relaxed">
                Check the &apos;Map&apos; tab for real-time traffic updates. We&apos;ve detected
                congestion on North Highway which may delay your 11:00 AM pickup.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
                <p className="text-lg font-bold text-[#1a2e1a]">12.4</p>
                <p className="text-xs text-gray-400 mt-0.5">⛽ Fuel Saved (L)</p>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
                <p className="text-lg font-bold text-[#1a2e1a]">08</p>
                <p className="text-xs text-gray-400 mt-0.5">🏅 Badges Earned</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}