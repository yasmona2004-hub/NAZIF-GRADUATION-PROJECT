"use client";

import { useState } from "react";
import { X, UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddCollectorModalProps {
  open: boolean;
  onClose: () => void;
}

const REGIONS = ["Sector A – Downtown", "Industrial Hub East", "Residential North", "Sector 4 – West"];

export default function AddCollectorModal({ open, onClose }: AddCollectorModalProps) {
  const [form, setForm] = useState({
    name: "",
    id: "",
    region: REGIONS[0],
  });

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-[#1A2E0A]">
            Add Collector
          </DialogTitle>
          <p className="text-sm text-[#4A7C59]">
            Register a new collector into the recycling network.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Name + ID */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#1A2E0A]">Collector Name</label>
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Full name..."
                className="rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#1A2E0A]">Collector ID</label>
              <input
                value={form.id}
                onChange={(e) => set("id", e.target.value)}
                placeholder="#COL-0000"
                className="rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
              />
            </div>
          </div>

          {/* Region */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-[#1A2E0A]">Assign Region</label>
            <div className="relative">
              <select
                value={form.region}
                onChange={(e) => set("region", e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
              >
                {REGIONS.map((r) => <option key={r}>{r}</option>)}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-1 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-full border border-gray-200 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2D5016] py-3 text-sm font-semibold text-white hover:bg-[#3D6B1F] transition-colors"
            >
              <UserPlus className="h-4 w-4" />
              Add Collector
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}