// import React from 'react'

// export default function MarketplacePage() {
  
//   return (
//     <div className=" bg-[#f2f2f0]">

//       {/* Header */}
//       <div className="max-w-5xl mx-auto px-6 pt-12 pb-6">
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

//           {/* Left text */}
//           <div>
//             <p className="text-[11px] tracking-[0.18em] uppercase text-[#3a6b4e] font-semibold mb-1">
//               Eco-Conscious Rewards
//             </p>
//             <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Marketplace</h1>
//             <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-sm">
//               Redeem your hard-earned impact points for ethically sourced, premium sustainable
//               goods. Every choice you make here supports a greener planet.
//             </p>
//           </div>

//           {/* Balance card */}
//           <div className="bg-[#2c5a3c] rounded-xl px-6 py-4 flex items-center gap-4 min-w-[230px] self-start">
//             <div className="bg-[#3a7050] rounded-lg p-2.5">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
//                 <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-[10px] tracking-[0.15em] uppercase text-[#8fb89e] mb-0.5">Available Balance</p>
//               <p className="text-white text-xl font-bold leading-none">
//                 2,450 <span className="text-[#8fb89e] text-xs font-normal">Points</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Category pills */}
//         <div className="flex flex-wrap gap-2 mt-8">
//           <button className="px-4 py-1.5 rounded-full text-sm border bg-[#2c5a3c] text-white border-[#2c5a3c]">All Items</button>
//           <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Home & Kitchen</button>
//           <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Personal Care</button>
//           <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Apparel</button>
//           <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Accessories</button>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="max-w-5xl mx-auto px-6 pb-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

//           {/* Card 1 - Artisan Bamboo Set */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#1b2f2b] flex items-center justify-center">
//               <img src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80" alt="Artisan Bamboo Set" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">4.9</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Artisan Bamboo Set</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">450 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">Biodegradable handles and BPA-free charcoal infused bristles for a naturally clean smile.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//           {/* Card 2 - Earth-Bound Mug */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#f2ede3]">
//               <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" alt="Earth-Bound Mug" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">5.0</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Earth-Bound Mug</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">850 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">Double-walled ceramic travel mug that keeps your coffee warm and the oceans clean.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//           {/* Card 3 - Evergreen Tote */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#dce8e0]">
//               <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80" alt="Evergreen Tote" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">4.8</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Evergreen Tote</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">300 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">Heavy-duty organic cotton canvas with reinforced stitching for all your daily essentials.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//           {/* Card 4 - Pristine Home Kit */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#c8e6c3]">
//               <img src="https://images.unsplash.com/photo-1585218334750-7d021c0e0ebb?w=400&q=80" alt="Pristine Home Kit" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">4.7</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Pristine Home Kit</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">1,200 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">All-in-one plastic-free home cleaning solution with glass bottles and sisal fiber brushes.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//           {/* Card 5 - Glacier Flask */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#e8e8e8]">
//               <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" alt="Glacier Flask" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">4.9</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Glacier Flask</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">950 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">Triple-insulated stainless steel keeps drinks ice-cold for 24 hours. Built for life's adventures.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//           {/* Card 6 - Market Mesh Set */}
//           <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
//             <div className="relative h-52 bg-[#3a7d5c]">
//               <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80" alt="Market Mesh Set" className="w-full h-full object-cover" />
//               <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
//                 <span className="text-xs font-semibold text-[#1a1a1a]">4.6</span>
//               </div>
//             </div>
//             <div className="p-5 flex flex-col flex-1">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h3 className="font-semibold text-[#1a1a1a] text-[15px]">Market Mesh Set</h3>
//                 <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">250 pts</span>
//               </div>
//               <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">Five reusable hemp mesh bags for grocery shopping. Say goodbye to single-use plastics.</p>
//               <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830]">Redeem Points</button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* CTA Strip */}
//       <div className="bg-[#e8ece8] border-t border-[#d4dad5]">
//         <div className="max-w-5xl mx-auto px-6 py-14 text-center">
//           <p className="text-[#1a1a1a] font-semibold text-base mb-2">Earn more, do more.</p>
//           <p className="text-[#6b6b6b] text-sm max-w-md mx-auto leading-relaxed mb-5">
//             Log your sustainable actions today—walking to work, recycling, or choosing local—to
//             earn more points for our marketplace.
//           </p>
//           <a href="#" className="inline-flex items-center gap-1.5 text-[#2c5a3c] text-sm font-medium underline underline-offset-4">
//             How to earn points <span>→</span>
//           </a>
//         </div>
//       </div>

//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";

// ── Fallback image pool (cycles by index if no image from API) ──
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80",
  "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80",
  "https://images.unsplash.com/photo-1585218334750-7d021c0e0ebb?w=400&q=80",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
  "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80",
];

// ── Star icon ──
const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ── Skeleton card shown while loading ──
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col animate-pulse">
      <div className="h-52 bg-[#e8e8e4]" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-4 bg-[#e8e8e4] rounded w-3/4" />
        <div className="h-3 bg-[#e8e8e4] rounded w-full" />
        <div className="h-3 bg-[#e8e8e4] rounded w-5/6" />
        <div className="h-9 bg-[#e8e8e4] rounded-lg mt-2" />
      </div>
    </div>
  );
}

// ── Single product card ──
function OfferCard({ offer, index }) {
  const image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2de] flex flex-col">
      {/* Image */}
      <div className="relative h-52 bg-[#dce8e0]">
        <img
          src={image}
          alt={offer.offer_Title}
          className="w-full h-full object-cover"
        />
        {/* Rating badge */}
        <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
          <StarIcon />
          <span className="text-xs font-semibold text-[#1a1a1a]">4.8</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-[#1a1a1a] text-[15px] leading-snug">
            {offer.offer_Title}
          </h3>
          <span className="text-[#2c5a3c] font-semibold text-sm whitespace-nowrap">
            {Number(offer.points_Required).toLocaleString()} pts
          </span>
        </div>

        <p className="text-[#6b6b6b] text-[13px] leading-relaxed flex-1">
          {offer.description}
        </p>

        {/* Partner name if available */}
        {offer.partnerName && (
          <p className="text-[10px] tracking-wide uppercase text-[#9b9b90] mt-2">
            by {offer.partnerName}
          </p>
        )}

        <button className="mt-4 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#2c5a3c] text-white hover:bg-[#234830] active:scale-95 transition-all duration-150">
          Redeem Points
        </button>
      </div>
    </div>
  );
}

// ── Main page ──
export default function MarketplacePage() {
  const [offers, setOffers]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const res = await fetch("https://nazif.tryasp.net/api/Offer");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setOffers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  return (
    <div className="bg-[#f2f2f0] min-h-screen">

      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          {/* Left text */}
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#3a6b4e] font-semibold mb-1">
              Eco-Conscious Rewards
            </p>
            <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Marketplace</h1>
            <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-sm">
              Redeem your hard-earned impact points for ethically sourced, premium sustainable
              goods. Every choice you make here supports a greener planet.
            </p>
          </div>

          {/* Balance card */}
          <div className="bg-[#2c5a3c] rounded-xl px-6 py-4 flex items-center gap-4 min-w-[230px] self-start">
            <div className="bg-[#3a7050] rounded-lg p-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#8fb89e] mb-0.5">Available Balance</p>
              <p className="text-white text-xl font-bold leading-none">
                2,450 <span className="text-[#8fb89e] text-xs font-normal">Points</span>
              </p>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          <button className="px-4 py-1.5 rounded-full text-sm border bg-[#2c5a3c] text-white border-[#2c5a3c]">All Items</button>
          <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Home & Kitchen</button>
          <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Personal Care</button>
          <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Apparel</button>
          <button className="px-4 py-1.5 rounded-full text-sm border bg-white text-[#3d3d3d] border-[#d0d0cb] hover:border-[#2c5a3c] hover:text-[#2c5a3c]">Accessories</button>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-5xl mx-auto px-6 pb-16">

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <p className="text-[#1a1a1a] font-semibold mb-1">Failed to load offers</p>
            <p className="text-[#6b6b6b] text-sm">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && offers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-[#1a1a1a] font-semibold mb-1">No offers available</p>
            <p className="text-[#6b6b6b] text-sm">Check back later for new rewards.</p>
          </div>
        )}

        {/* Offers grid */}
        {!loading && !error && offers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map((offer, index) => (
              <OfferCard key={offer.offer_ID} offer={offer} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA Strip ── */}
      <div className="bg-[#e8ece8] border-t border-[#d4dad5]">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="text-[#1a1a1a] font-semibold text-base mb-2">Earn more, do more.</p>
          <p className="text-[#6b6b6b] text-sm max-w-md mx-auto leading-relaxed mb-5">
            Log your sustainable actions today—walking to work, recycling, or choosing local—to
            earn more points for our marketplace.
          </p>
          <a href="#" className="inline-flex items-center gap-1.5 text-[#2c5a3c] text-sm font-medium underline underline-offset-4">
            How to earn points <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}