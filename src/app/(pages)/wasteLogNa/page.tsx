"use client";

import { useState } from "react";

/* ── ICONS ── */
const RecycleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.4 4.8h-1a7 7 0 0 1 .7 3.2H16l-4 3-4-3h1.9A7 7 0 0 1 10.6 6.8h-1L12 2zm-6.9 9H3l4 3 4-3H9a7 7 0 0 0 6.9 5.5v2A9 9 0 0 1 5.1 11zm13.8 0a9 9 0 0 1-1.4 4.9l1.6 1-5 1.5 1.5-5 1.5 1a7 7 0 0 0 1-3.4H18.9z" />
  </svg>
);

const PaperIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const MetalIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const WeightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    <path d="M6.343 9.657L3.515 20h17l-2.829-10.343" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-4 h-4">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-4 h-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
  </svg>
);

const BulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 12 2z" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </svg>
);

/* ── TYPES ── */
type MaterialType = "Plastic" | "Paper" | "Metal";

interface WasteItem {
  id: number;
  material: MaterialType;
  weight: string;
  date: string;
  address: string;
}

const materialPoints: Record<MaterialType, number> = {
  Plastic: 100,
  Paper: 50,
  Metal: 150,
};

const materialIcons: Record<MaterialType, React.ReactNode> = {
  Plastic: <RecycleIcon />,
  Paper: <PaperIcon />,
  Metal: <MetalIcon />,
};

/* ── PAGE ── */
export default function WastelogPage() {
  const [items, setItems] = useState<WasteItem[]>([]);
  const [material, setMaterial] = useState<MaterialType>("Plastic");
  const [weight, setWeight] = useState("0.00");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalPoints = items.reduce((sum, item) => sum + materialPoints[item.material], 0);

  const handleAddItem = () => {
    if (!weight || parseFloat(weight) <= 0) return;
    setItems((prev) => [
      ...prev,
      { id: Date.now(), material, weight, date, address },
    ]);
    setWeight("0.00");
    setDate("");
    setAddress("");
  };

  const handleRemoveItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleConfirm = () => {
    if (items.length === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f9faf8] flex items-center justify-center px-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap');`}</style>
        <div className="bg-white rounded-3xl border border-[#e7e8e6] p-10 max-w-md w-full text-center shadow-sm flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#173809] flex items-center justify-center">
            <RecycleIcon className="w-8 h-8 text-[#caec7f]" />
          </div>
          <h2 className="text-[#191c1b] font-extrabold text-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Request Confirmed!
          </h2>
          <p className="text-[#73796d] text-sm leading-relaxed">
            Your waste log has been submitted. You earned{" "}
            <span className="text-[#173809] font-bold">{totalPoints} pts</span> for this request.
          </p>
          <button
            onClick={() => { setItems([]); setSubmitted(false); }}
            className="bg-[#173809] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#2d4f1e] active:scale-95 transition-all duration-200"
          >
            Log Another Request
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9faf8] px-4 sm:px-6 py-10" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap');`}</style>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* ── PAGE TITLE ── */}
        <div>
          <h1
            className="text-[#191c1b] font-extrabold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            Log Your Waste
          </h1>
          <p className="text-[#73796d] text-sm mt-1 max-w-md">
            Track your contribution to a cleaner planet. Your daily actions drive the global shift towards a circular economy.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ── LEFT COLUMN (form + summary) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Current Request Summary */}
            <div className="bg-white rounded-3xl border border-[#e7e8e6] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ClipboardIcon />
                  <h2
                    className="text-[#191c1b] font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem" }}
                  >
                    Current Request Summary
                  </h2>
                </div>
                <span className="bg-[#f3f4f2] text-[#43493e] text-xs font-semibold px-3 py-1 rounded-full border border-[#e1e3e1]">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
              </div>

              {items.length === 0 ? (
                <p className="text-[#73796d] text-sm text-center py-6">
                  No items added to your request yet.
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-[#f9faf8] rounded-2xl px-4 py-3 border border-[#e7e8e6]"
                    >
                      <span className="text-[#2d4f1e]">{materialIcons[item.material]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#191c1b] font-semibold text-sm">{item.material}</p>
                        <p className="text-[#73796d] text-xs">{item.weight} kg {item.date && `· ${item.date}`}</p>
                      </div>
                      <span className="text-[#4c6703] text-xs font-bold">+{materialPoints[item.material]} pts</span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-[#73796d] hover:text-[#ba1a1a] transition-colors p-1"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-[#e7e8e6] mt-1">
                    <span className="text-[#43493e] text-xs font-semibold">Total Points</span>
                    <span className="text-[#173809] font-extrabold text-sm">+{totalPoints} pts</span>
                  </div>
                </div>
              )}
            </div>

            {/* Material Type */}
            <div className="bg-white rounded-3xl border border-[#e7e8e6] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <RecycleIcon className="w-4 h-4 text-[#2d4f1e]" />
                <h2
                  className="text-[#191c1b] font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem" }}
                >
                  Material Type
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {(["Plastic", "Paper", "Metal"] as MaterialType[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`flex flex-col items-center gap-2 py-4 px-3 rounded-2xl border-2 transition-all duration-200
                      ${material === m
                        ? "bg-[#173809] border-[#173809] text-white shadow-md"
                        : "bg-[#f9faf8] border-[#e7e8e6] text-[#43493e] hover:border-[#2d4f1e] hover:bg-[#f3f4f2]"
                      }`}
                  >
                    {m === "Plastic" && <RecycleIcon className="w-6 h-6" />}
                    {m === "Paper" && <PaperIcon className="w-6 h-6" />}
                    {m === "Metal" && <MetalIcon className="w-6 h-6" />}
                    <span className="text-xs font-semibold">{m}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="bg-white rounded-3xl border border-[#e7e8e6] p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Weight */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#43493e] uppercase tracking-widest">
                    <WeightIcon />
                    Weight in KG
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      min="0"
                      step="0.01"
                      onChange={(e) => setWeight(e.target.value)}
                      suppressHydrationWarning
                      className="w-full bg-[#f9faf8] border border-[#e1e3e1] rounded-2xl px-4 py-3 text-sm text-[#191c1b] outline-none
                        focus:border-[#173809] focus:bg-white transition-all duration-200 pr-10"
                      placeholder="0.00"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#73796d] text-xs font-semibold">KG</span>
                  </div>
                </div>

                {/* Preferred Pickup */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#43493e] uppercase tracking-widest">
                    <CalendarIcon />
                    Preferred Pickup
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    suppressHydrationWarning
                    className="w-full bg-[#f9faf8] border border-[#e1e3e1] rounded-2xl px-4 py-3 text-sm text-[#191c1b] outline-none
                      focus:border-[#173809] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Pickup Address - full width */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#43493e] uppercase tracking-widest">
                    <LocationIcon />
                    Pickup Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    suppressHydrationWarning
                    className="w-full bg-[#f9faf8] border border-[#e1e3e1] rounded-2xl px-4 py-3 text-sm text-[#191c1b] outline-none
                      focus:border-[#173809] focus:bg-white transition-all duration-200"
                    placeholder="Street address, City, State, Zip"
                  />
                </div>
              </div>
            </div>

            {/* ── BOTTOM ACTIONS ── */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddItem}
                className="inline-flex items-center gap-2 border-2 border-[#173809] text-[#173809] font-semibold text-sm px-6 py-3 rounded-full
                  hover:bg-[#f3f4f2] active:scale-95 transition-all duration-200"
              >
                <PlusIcon />
                Add Another Item
              </button>
              <button
                onClick={handleConfirm}
                disabled={items.length === 0}
                className="inline-flex items-center gap-2 bg-[#173809] text-white font-semibold text-sm px-8 py-3 rounded-full
                  hover:bg-[#2d4f1e] active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                Confirm Request
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* Waste Guidelines */}
            <div className="bg-[#173809] rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#caec7f]" />
                <h3
                  className="text-white font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.95rem" }}
                >
                  Waste Guidelines
                </h3>
              </div>
              <p className="text-[#98c083] text-xs leading-relaxed">
                Proper separation increases the value of your waste and helps with accurate point calculation.
              </p>

              <div className="flex flex-col gap-1.5">
                <p className="text-[#caec7f] text-xs font-semibold uppercase tracking-widest">Material Types</p>
                {[
                  "Plastic (bottles, containers)",
                  "Paper (newspapers, cardboard)",
                  "Metal (cans, tins)",
                ].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#98c083] flex-shrink-0" />
                    <span className="text-[#98c083] text-xs">{type}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
                <p className="text-[#caec7f] text-xs font-semibold uppercase tracking-widest">Points Per KG</p>
                {(Object.entries(materialPoints) as [MaterialType, number][]).map(([mat, pts]) => (
                  <div key={mat} className="flex items-center justify-between">
                    <span className="text-[#98c083] text-xs">{mat}</span>
                    <span className="text-white text-xs font-bold">{pts} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eco Tip */}
            <div className="bg-[#f3f4f2] border border-[#e1e3e1] rounded-3xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#4c6703]">
                <BulbIcon />
                <span className="text-xs font-semibold uppercase tracking-widest">Eco Tip</span>
              </div>
              <p className="text-[#43493e] text-xs leading-relaxed">
                Rinsing your plastic containers before logging helps the recycling facility process material{" "}
                <span className="font-semibold text-[#2d4f1e]">2x faster</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}