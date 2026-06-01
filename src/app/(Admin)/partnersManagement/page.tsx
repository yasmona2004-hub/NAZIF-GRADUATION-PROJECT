
"use client";

import { useState } from "react";

import {
  Bell,
  Settings,
  Plus,
  Pencil,
  Trash2,
  Download,
  Filter,
  MapPinned,
  Lightbulb,
  Search,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AdminSidebar from "@/app/_components/AdminSidebar/AdminSidebar";

const partners = [
  {
    name: "GreenCycle Solutions",
    category: "Retail",
    area: "Downtown Metro Center",
    status: "ACTIVE",
  },
  {
    name: "HeavyBulk Industries",
    category: "Industrial",
    area: "Port Logistics Hub",
    status: "ACTIVE",
  },
  {
    name: "SwiftMove Eco",
    category: "Logistics",
    area: "Northern Residential Area",
    status: "PENDING",
  },
  {
    name: "Urban Markets Co.",
    category: "Retail",
    area: "Old Town Square",
    status: "INACTIVE",
  },
];

const stats = [
  {
    title: "TOTAL PARTNERS",
    value: "156",
    icon: MapPinned,
    color: "bg-[#edf6e7] text-[#4f7b35]",
  },
  {
    title: "ACTIVE PARTNERSHIPS",
    value: "142",
    icon: Lightbulb,
    color: "bg-[#eef9df] text-[#4f7b35]",
  },
  {
    title: "PENDING APPROVAL",
    value: "14",
    icon: Bell,
    color: "bg-[#ffeef3] text-[#df5f8f]",
  },
];

export default function PartnersPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex h-screen bg-[#f7f9f7] overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 shrink-0">
          <div className="flex-1 relative max-w-sm">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Input
              placeholder="Search partners, areas, or categories..."
              className="pl-8 h-8 text-sm bg-gray-50 border-gray-200"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <Bell size={18} />
            </button>

            <button className="text-gray-400 hover:text-gray-600">
              <Settings size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[11px] text-gray-400">System Admin</p>
                <p className="text-sm font-semibold text-[#1d3d1c]">
                  Alex Rivers
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#1e3c1f] tracking-tight">
                Partners Management
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage and monitor recycling partner relationships and
                performance.
              </p>
            </div>

            <Button
              onClick={() => setOpenModal(true)}
              className="h-11 rounded-full bg-[#1f4d13] px-5 text-white hover:bg-[#183d10]"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Partner
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-gray-100 relative overflow-hidden"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}
                >
                  <item.icon size={22} />
                </div>

                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {item.title}
                </p>

                <p className="text-3xl font-bold text-[#1d3d1c]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden">
            {/* Table Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-[#24451f]">
                Partners Directory
              </h2>

              <div className="flex items-center gap-3 text-gray-500">
                <button className="hover:text-gray-700">
                  <Filter size={18} />
                </button>

                <button className="hover:text-gray-700">
                  <Download size={18} />
                </button>
              </div>
            </div>

            {/* Column Names */}
            <div className="grid grid-cols-5 px-6 py-3 border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              <p>Partner Name</p>
              <p>Category</p>
              <p>Assigned Area</p>
              <p>Status</p>
              <p className="text-right">Actions</p>
            </div>

            {/* Rows */}
            <div>
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center px-6 py-5 border-b border-gray-50 hover:bg-gray-50/40 transition-colors"
                >
                  {/* Partner */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#edf2e7]" />

                    <div>
                      <p className="font-semibold text-[#1f3f20] text-sm">
                        {partner.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        ID: PR-{8124 + index}
                      </p>
                    </div>
                  </div>

                  {/* Category */}
                  <p className="text-sm text-gray-600">
                    {partner.category}
                  </p>

                  {/* Area */}
                  <p className="text-sm text-gray-600">
                    {partner.area}
                  </p>

                  {/* Status */}
                  <div>
                    <div
                      className={`inline-flex rounded-full px-4 py-1 text-xs font-medium ${
                        partner.status === "ACTIVE"
                          ? "bg-[#e8f8ec] text-[#2d9c5b]"
                          : partner.status === "PENDING"
                          ? "bg-[#ffe8ef] text-[#db5c8b]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {partner.status}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-4">
                    <button className="text-[#315728] hover:scale-110 transition">
                      <Pencil size={17} />
                    </button>

                    <button className="text-[#e05c5c] hover:scale-110 transition">
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4">
              <p className="text-sm text-gray-400">
                Showing 4 of 156 partners
              </p>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-200"
                >
                  Previous
                </Button>

                <Button className="rounded-full bg-[#1f4d13] hover:bg-[#183d10]">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[32px] bg-white p-7 shadow-2xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1f3f20]">
                  Add New Partner
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Fill in the information below.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Partner Name
                </label>

                <Input placeholder="GreenCycle Solutions" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <Input placeholder="Retail / Industrial" />
              </div>


              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Contact Email
                </label>

                <Input placeholder="partner@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <Input placeholder="+20 100 000 0000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Status
                </label>

                <select className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-[#2d5a3d]">
                  <option>ACTIVE</option>
                  <option>PENDING</option>
                  <option>INACTIVE</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Notes / Description
              </label>

              <textarea
                placeholder="Write partner details here..."
                className="min-h-[120px] w-full rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-[#2d5a3d]"
              />
            </div>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setOpenModal(false)}
                className="rounded-full px-6"
              >
                Cancel
              </Button>

              <Button className="rounded-full bg-[#1f4d13] px-6 hover:bg-[#183d10]">
                Save Partner
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

