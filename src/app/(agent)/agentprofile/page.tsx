// import React from 'react'

// export default function AgentProfile() {
//   return (
//     <div>AgentProfile</div>
//   )
// }
import Image from "next/image";

export default function AgentProfile() {
  return (
    <div className="flex  bg-[#f5f4f0]">

     

      {/* Main */}
      <main className="ml-56 flex-1 px-6 py-6 lg:px-10">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-[#1a1a1a]">Agent Profile</h1>
         
        </div>

        {/* Cover image */}
        <div className="rounded-2xl overflow-hidden h-48 lg:h-56 mb-5 bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=900&q=80"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Agent name row */}
        <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <h2 className="text-2xl font-extrabold text-[#1a331f]">Agent Malik</h2>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">ID: NZF-2024-0892</span>
              <span className="bg-[#eaf2e8] text-[#2d4a28] text-xs font-semibold px-3 py-1 rounded-full">Senior Field Agent</span>
            </div>
          </div>
          
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Left col */}
          <div className="space-y-4">

            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
                <h3 className="font-bold text-[#1a1a1a] text-base">Personal Info</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Full Name", value: "Malik bin Ibrahim" },
                  { label: "Age", value: "29 Years Old" },
                  { label: "Email Address", value: "malik.i@nazif.com" },
                  { label: "Phone Number", value: "+60 12-345 6789" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-sm text-[#1a1a1a] font-medium">{item.value}</p>
                  </div>
                ))}
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-1">Vehicle Type</p>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                    <p className="text-sm text-[#1a1a1a] font-medium">Industrial Compactor (V8-Titan)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Score */}
            <div className="bg-[#2d4a28] rounded-2xl p-6">
              <p className="text-[10px] tracking-widest uppercase text-[#7aab72] mb-2">Performance Score</p>
              <p className="text-5xl font-extrabold text-white mb-3">98.4%</p>
              <p className="text-sm text-[#a8c49a] leading-relaxed">
                Excellent reliability this month. Malik is in the top 5% of agents nationwide.
              </p>
            </div>
          </div>

          {/* Right col: Pickup History */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                <h3 className="font-bold text-[#1a1a1a] text-base">Pickup History</h3>
              </div>
              <a href="#" className="text-xs text-gray-500 hover:text-[#2d4a28] font-medium transition">
                View Full Report →
              </a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="pb-2 text-left font-semibold">Date</th>
                    <th className="pb-2 text-left font-semibold">Client Name</th>
                    <th className="pb-2 text-left font-semibold">Waste Type</th>
                    <th className="pb-2 text-right font-semibold">Weight (KG)</th>
                    <th className="pb-2 text-right font-semibold">St.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { date: "Oct 24, 2023", client: "Marina Heights Mall", id: "CL-9021", type: "Recyclables", weight: "420.5", typeColor: "bg-blue-50 text-blue-600" },
                    { date: "Oct 24, 2023", client: "Green Valley Estates", id: "CL-4412", type: "Organic", weight: "185.2", typeColor: "bg-green-50 text-green-700" },
                    { date: "Oct 23, 2023", client: "EcoPark Corporate Plaza", id: "CL-2109", type: "Paper/Cardboard", weight: "1,240.0", typeColor: "bg-yellow-50 text-yellow-700" },
                    { date: "Oct 23, 2023", client: "Westside Residences", id: "CL-1182", type: "General", weight: "312.8", typeColor: "bg-gray-100 text-gray-600" },
                    { date: "Oct 22, 2023", client: "City Library", id: "CL-5590", type: "Plastic", weight: "94.5", typeColor: "bg-purple-50 text-purple-600" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      <td className="py-3 text-gray-500 whitespace-nowrap">{row.date}</td>
                      <td className="py-3 pr-3">
                        <p className="font-semibold text-[#1a1a1a] leading-tight">{row.client}</p>
                        <p className="text-gray-400 text-[10px]">ID: {row.id}</p>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.typeColor}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-3 text-right font-semibold text-[#1a1a1a]">{row.weight}</td>
                      <td className="py-3 text-right">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2d4a28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}