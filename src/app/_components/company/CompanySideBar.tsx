// components/CompanySidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, LogOut } from "lucide-react";

const NAV = [
  { href: "/companyProfile", label: "Profile", icon: User },
  { href: "/collectorsManagement", label: "Collectors", icon: Package },
];

export default function CompanySidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[200px] shrink-0 flex-col bg-[#F5F5F0] border-r border-gray-200 px-4 py-6">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A2E0A]">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-extrabold leading-none text-[#1A2E0A]">NAZIF</p>
          <p className="text-[9px] font-medium uppercase tracking-widest text-gray-400">
            Admin Portal
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#2D5016] text-white"
                  : "text-gray-500 hover:bg-gray-200 hover:text-[#1A2E0A]"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-gray-200 hover:text-red-500 transition-colors">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}