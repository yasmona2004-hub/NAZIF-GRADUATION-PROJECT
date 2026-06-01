"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Tag, LogOut } from "lucide-react";

// ── Nav items ──────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Profile", href: "/partnerProfile", icon: User },
  { label: "Offers",  href: "/offers",  icon: Tag  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function PartnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 h-screen bg-white border-r border-gray-100 flex flex-col shrink-0">

      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#2d5a3d] flex items-center justify-center">
            <span className="text-white text-xs font-bold">N</span>
          </div>
          <div>
            <p className="text-sm font-bold text-[#2d5a3d] leading-none">NAZIF</p>
            <p className="text-[10px] text-gray-400 leading-none mt-0.5">Recycling Ecosystem</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? "bg-[#2d5a3d] text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </aside>
  );
}