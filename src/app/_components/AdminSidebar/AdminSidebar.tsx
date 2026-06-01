"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, ShoppingBag, FileText, Users,
  Bot, Handshake, HelpCircle, LogOut, Recycle,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: ShoppingBag,     label: "Marketplace", href: "/marketPlace" },
  { icon: FileText,        label: "Articles",    href: "/articles"    },
  { icon: Users,           label: "customers",       href: "/customerManagement"},
  { icon: Bot,             label: "companies",      href: "/companyManagement"},
  { icon: Handshake,       label: "Partners",    href: "/partnersManagement"},
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router   = useRouter();

  return (
    <aside className="w-[200px] shrink-0 bg-white border-r border-gray-100 flex flex-col py-5 px-3 h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
        <div className="leading-tight">
          <p className="text-xs font-bold text-[#2d5a3d] uppercase tracking-wide">Nazif</p>
          <p className="text-[10px] text-gray-400">Eco-System Management</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          return (
            <button
              key={label}
              onClick={() => router.push(href)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-[#2d5a3d] text-white font-medium"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-100 pt-3 space-y-0.5">
        <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50">
          <HelpCircle size={16} /> Support
        </button>
        <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-50">
          <LogOut size={16} /> Log Out
        </button>
        {/* Admin profile */}
        <div className="flex items-center gap-2 px-2 pt-2">
          <div className="w-8 h-8 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-gray-700">Admin User</p>
            <p className="text-[10px] text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}