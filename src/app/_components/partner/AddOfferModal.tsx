"use client";

import { useState } from "react";
import { X, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddOfferModalProps {
  open: boolean;
  onClose: () => void;
}

const PARTNERS = [
  "GreenLife Solutions",
  "Green Grocer Co.",
  "VoltRecycle Ltd",
  "TerraStore Global",
  "BioFuel Solutions",
];

export default function AddOfferModal({ open, onClose }: AddOfferModalProps) {
  const [partnerType, setPartnerType] = useState<"EXISTING" | "NEW PARTNER">(
    "EXISTING"
  );
  const [selectedPartner, setSelectedPartner] = useState(PARTNERS[0]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <DialogHeader className="mb-1">
          <DialogTitle className="text-2xl font-bold text-[#1A2E0A]">
            Item Details
          </DialogTitle>
          <p className="text-sm text-[#4A7C59]">
            Update or create product listings for the inventory.
          </p>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          {/* Product Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-[#1A2E0A]">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product title..."
              className="rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
            />
          </div>

          {/* Summary Description */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-[#1A2E0A]">
              Summary Description
            </label>
            <textarea
              rows={3}
              placeholder="Brief overview of the item's benefits and specifications..."
              className="resize-none rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
            />
          </div>

          {/* Points Cost + Inventory */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#1A2E0A]">
                Points Cost
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5">
                {/* leaf icon */}
                <svg
                  className="h-4 w-4 text-[#4A7C59]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 2C6 2 2 8 2 14c0 4 4 8 10 8s10-4 10-8c0-6-4-12-10-12z" />
                  <path d="M2 14c4-2 8-2 10 0" />
                </svg>
                <input
                  type="number"
                  placeholder="000"
                  className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                <span className="text-xs font-semibold text-gray-400">PTS</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#1A2E0A]">
                Inventory
              </label>
              <input
                type="number"
                placeholder="Units available"
                className="rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
              />
            </div>
          </div>

          {/* Partner Status toggle */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-[#1A2E0A]">
              Partner Status
            </label>
            <div className="flex rounded-lg border border-gray-200 bg-[#F7F7F3] p-1">
              {(["EXISTING", "NEW PARTNER"] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setPartnerType(opt)}
                  className={`flex-1 rounded-md py-2 text-xs font-semibold transition-colors ${
                    partnerType === opt
                      ? "bg-[#2D5016] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Select Partner */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-[#1A2E0A]">
              Select Partner
            </label>
            <div className="relative">
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-[#F7F7F3] px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30"
              >
                {PARTNERS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={onClose}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[#2D5016] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3D6B1F]"
          >
            <Save className="h-4 w-4" />
            Save Listing
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}