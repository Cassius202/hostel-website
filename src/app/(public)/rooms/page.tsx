"use client";

import { rooms } from "@/constants/roomAssets";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import RoomCard from "./RoomCard";
import SearchModal from "@/app/(public)/rooms/SearchModal";
import { Search } from "lucide-react";

const RoomsPage = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  // Ctrl+K / Cmd+K
  useHotkeys("ctrl+k, meta+k", (e) => {
    e.preventDefault();
    setSearchOpen(true);
  });

  return (
    <div className="w-full bg-stone-50 dark:bg-stone-950 min-h-screen global-padding py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header + search trigger */}
        <div className="flex items-center justify-between mb-12 max-sm:flex-col max-sm:items-start gap-y-5 max-sm:mb-7">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500 mb-3 block">All Rooms</span>
            <h1 className="text-4xl font-bold text-stone-900 dark:text-white tracking-tight">Find your room</h1>
          </div>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-400 hover:border-stone-300 dark:hover:border-stone-600 transition-colors shadow-sm"
          >
            <Search size={14} />
            <span>Search rooms...</span>
            <span className="flex items-center gap-1 ml-2">
              <kbd className="text-[10px] bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded font-mono">⌘</kbd>
              <kbd className="text-[10px] bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded font-mono">K</kbd>
            </span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room, idx) => (
            <RoomCard key={idx} room={room} index={idx} />
          ))}
        </div>

      </div>

        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default RoomsPage;