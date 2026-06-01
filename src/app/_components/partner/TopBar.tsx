"use client";

import { Bell, Settings } from "lucide-react";
import SearchBar from "./SearchBar";

interface TopBarProps {
  searchPlaceholder?: string;
  rightSlot?: React.ReactNode;
}

export default function TopBar({ searchPlaceholder}: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <SearchBar placeholder={searchPlaceholder} />
    </header>
  );
}