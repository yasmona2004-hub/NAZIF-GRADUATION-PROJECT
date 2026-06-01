"use client";

import { useState } from "react";
import {
  Bell, Search, Download, Filter,
  Ban, Trash2, ChevronLeft, ChevronRight,
  TrendingUp, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminSidebar from "@/app/_components/AdminSidebar/AdminSidebar";

type UserStatus = "Active" | "Offline" | "Suspended";

interface User {
  id:     number;
  name:   string;
  email:  string;
  joined: string;
  status: UserStatus;
  avatar: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<UserStatus, string> = {
  Active:    "text-emerald-600",
  Offline:   "text-gray-400",
  Suspended: "text-red-500",
};

const STATUS_DOT: Record<UserStatus, string> = {
  Active:    "bg-emerald-500",
  Offline:   "bg-gray-400",
  Suspended: "bg-red-500",
};

const AVATAR_COLORS = [
  "bg-emerald-600", "bg-blue-600", "bg-violet-600", "bg-amber-600",
];

const USERS: User[] = [
  { id: 1, name: "Elena Rodriguez", email: "elena.rod@eco-nazif.org", joined: "Oct 12, 2023", status: "Active",    avatar: "ER" },
  { id: 2, name: "Julian Thorne",   email: "j.thorne@greenleaf.com",  joined: "Nov 05, 2023", status: "Active",    avatar: "JT" },
  { id: 3, name: "Sarah Chen",      email: "sarah.chen@web.dev",      joined: "Jan 20, 2024", status: "Offline",   avatar: "SC" },
  { id: 4, name: "Marcus Vancity",  email: "marcus.v@nature.org",     joined: "Feb 15, 2024", status: "Suspended", avatar: "MV" },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function UsersPage() {
  const [search, setSearch]           = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filtered = USERS.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#f7f9f7] font-sans overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 shrink-0">
          <div className="flex-1 relative max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search users..."
              className="pl-8 h-8 text-sm bg-gray-50 border-gray-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-1.5 text-gray-400 hover:text-gray-600">
              <Bell size={18} />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <div className="w-7 h-7 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white text-xs font-bold">A</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Users Management</h1>
            <p className="text-sm text-gray-500 mt-1">Manage and monitor ecosystem community members.</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Total Users */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 relative overflow-hidden">
              <div className="absolute right-4 top-4 w-16 h-16 rounded-full bg-gray-100 opacity-40" />
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Users</p>
              <p className="text-3xl font-bold text-gray-800">12,482</p>
              <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">
                <TrendingUp size={12} /> +8% from last month
              </p>
            </div>

            {/* New Users */}
            <div className="bg-[#c8e6c0] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute right-3 top-3 w-14 h-14 rounded-full bg-white/30" />
              <div className="absolute right-8 top-8 w-10 h-10 rounded-full bg-white/20" />
              <p className="text-[11px] font-semibold text-[#2d5a3d] uppercase tracking-wider mb-1">New Users</p>
              <p className="text-3xl font-bold text-[#2d5a3d]">842</p>
              <p className="text-xs text-[#2d5a3d]/70 font-medium mt-2">Last 7 days registration</p>
            </div>

            {/* Active Users */}
            <div className="bg-[#2d5a3d] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute right-3 top-3 w-14 h-14 rounded-full bg-white/10" />
              <div className="absolute right-8 top-8 w-10 h-10 rounded-full bg-white/5" />
              <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-1">Active Users</p>
              <p className="text-3xl font-bold text-white">4,291</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-1.5">
                  {["ER", "JT", "SC", "MV"].map((i, idx) => (
                    <div key={i} className={`w-5 h-5 rounded-full border border-[#2d5a3d] text-[8px] font-bold text-white flex items-center justify-center ${AVATAR_COLORS[idx]}`}>
                      {i[0]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/70 font-medium">Currently online</p>
              </div>
            </div>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-700">User Directory</p>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200">
                  <Filter size={13} /> Filter
                </button>
                <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200">
                  <Download size={13} /> Export
                </button>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Name", "Email", "Join Date", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((user, idx) => (
                  <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${AVATAR_COLORS[idx % AVATAR_COLORS.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                          {user.avatar}
                        </div>
                        <p className="text-sm font-medium text-gray-800">{user.name}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">{user.email}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">{user.joined}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[user.status]}`} />
                        <span className={`text-sm font-medium ${STATUS_STYLES[user.status]}`}>{user.status}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-amber-500 hover:bg-amber-50 transition-colors"><Ban size={14} /></button>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-between px-5 py-3.5">
              <p className="text-xs text-gray-400">Showing 1–10 of 12,482 users</p>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"><ChevronLeft size={14} /></button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-7 h-7 text-xs rounded-lg ${currentPage === p ? "bg-[#2d5a3d] text-white font-semibold" : "text-gray-500 hover:bg-gray-100"}`}
                  >
                    {p}
                  </button>
                ))}
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"><ChevronRight size={14} /></button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}