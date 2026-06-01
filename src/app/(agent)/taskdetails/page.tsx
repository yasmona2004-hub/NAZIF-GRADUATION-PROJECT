export default function TaskDetails() {
  return (
    <div className="flex min-h-screen bg-[#f5f4f0]">


      {/* Main */}
      <main className="ml-56 flex-1 px-6 py-6 lg:px-8">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to Tasks
          </button>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow">
              <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">

          {/* Left column */}
          <div className="space-y-4">

            {/* Pickup Details card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <span className="bg-[#eaf2e8] text-[#2d4a28] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Active Pickup
                  </span>
                  <h1 className="text-3xl font-extrabold text-[#1a1a1a] mt-2 mb-1">Pickup Details</h1>
                  <p className="text-sm text-gray-400">ID: #WA-20941-2024</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Estimated Time</p>
                  <p className="text-2xl font-bold text-[#1a1a1a]">14:20 PM</p>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Client Name */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Client Name</p>
                  </div>
                  <p className="text-2xl font-bold text-[#1a1a1a]">Jane Doe</p>
                </div>

                {/* Waste Type */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.89"/></svg>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Waste Type</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.89"/></svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1a1a1a]">15kg Plastic</p>
                      <p className="text-xs text-gray-400">Recyclable Category A</p>
                    </div>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Full Address</p>
                  </div>
                  <p className="text-sm font-semibold text-[#1a1a1a] leading-relaxed">
                    123 Evergreen Lane,<br />Springfield, ST 55210
                  </p>
                  <button className="flex items-center gap-1.5 mt-2 text-sm text-[#2d4a28] font-medium hover:underline">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Get Directions
                  </button>
                </div>

                {/* Agent Notes */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Agent Notes</p>
                  </div>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "Please ring bell upon arrival. Waste is located in the green bin next to the garage side door."
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Protocol */}
            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">Safety Protocol Active</p>
                  <p className="text-xs text-gray-400">Gloves and mask required for this pickup</p>
                </div>
              </div>
              <button className="text-sm font-semibold text-[#1a1a1a] hover:underline whitespace-nowrap">
                View Checklist
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">

            {/* Map */}
            <div className="bg-[#dce8dc] rounded-2xl overflow-hidden h-52 flex items-center justify-center relative">
              <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                <circle cx="60" cy="55" r="50" fill="#c8dcc8" />
                <line x1="10" y1="55" x2="110" y2="55" stroke="#b0ccb0" strokeWidth="1" />
                <line x1="60" y1="5" x2="60" y2="105" stroke="#b0ccb0" strokeWidth="1" />
                <line x1="20" y1="25" x2="100" y2="85" stroke="#b0ccb0" strokeWidth="0.8" />
                <line x1="20" y1="85" x2="100" y2="25" stroke="#b0ccb0" strokeWidth="0.8" />
                <path d="M60 20 C45 20 33 32 33 47 C33 62 60 95 60 95 C60 95 87 62 87 47 C87 32 75 20 60 20Z" fill="#c0392b" />
                <circle cx="60" cy="47" r="12" fill="white" />
                <circle cx="60" cy="47" r="5" fill="#c0392b" />
              </svg>
            </div>

            {/* Validate Pickup */}
            <button className="w-full bg-[#2d4a28] text-white rounded-2xl px-6 py-5 flex items-center justify-center gap-3 hover:bg-[#1e3318] active:scale-[0.98] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span className="text-lg font-bold">Validate Pickup</span>
            </button>
            <p className="text-center text-xs text-gray-400 -mt-2">
              Confirming will notify the client and update your history.
            </p>

            {/* Report Discrepancy */}
            <div className="bg-[#fdf2f2] border border-red-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p className="text-[10px] tracking-widest uppercase text-red-600 font-bold">Report Discrepancy</p>
              </div>
              <p className="text-xs text-red-500 mb-4">Waste weight or type doesn't match the description?</p>
              <button className="w-full border border-red-400 text-red-500 font-bold text-sm py-2.5 rounded-xl hover:bg-red-50 active:scale-[0.98] transition-all">
                Notify Dispatch
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}