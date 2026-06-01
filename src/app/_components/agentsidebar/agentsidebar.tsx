
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    label: "Pickup Tasks",
    href: "/pickuptask",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    label: "Task Details",
    href: "/taskdetails",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    label: "Agent Profile",
    href: "/agentprofile",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

const reportIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const helpIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const logoutIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

export default function AgentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col justify-between py-8 px-5 fixed h-full z-10">
      <div>
        {/* Brand */}
        <div className="mb-10">
          <p className="text-[#1a331f] font-extrabold text-base">NAZIF</p>
          <p className="text-xs text-gray-400">Waste Agent Portal</p>
        </div>

        {/* Nav items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-[#eaf2e8] text-[#2d4a28] font-semibold"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}

          {/* Report Issue — solid green button */}
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white bg-[#2d4a28] font-semibold hover:bg-[#1e3318] transition-all mt-1">
            {reportIcon}
            Report Issue
          </button>

          {/* Help Center */}
          <Link
            href="/helpCenter"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
              pathname === "/helpCenter"
                ? "bg-[#eaf2e8] text-[#2d4a28] font-semibold"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {helpIcon}
            Help Center
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 px-3 py-2 transition">
        {logoutIcon}
        Logout
      </button>
    </aside>
  );
}