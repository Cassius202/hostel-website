"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { rooms } from "@/constants/roomAssets";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleReset = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);
  // Close on Escape

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => e.key === "Escape" && handleReset();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleReset]);

  const filtered = rooms.filter((r) => {
    const q = query.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.gender.toLowerCase().includes(q) ||
      r.bathroom.toLowerCase().includes(q) ||
      String(r.capacity).includes(q)
    );
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 z-300 bg-black/50 backdrop-blur-sm "
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-301 w-full max-w-lg max-sm:w-[calc(100vw-10px)]"
          >
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-2xl overflow-hidden">

              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-100 dark:border-stone-800">
                <Search size={16} className="text-stone-400 shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, gender, capacity..."
                  className="flex-1 bg-transparent text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none"
                />
                {query && (
                  <button onClick={() => setQuery("")}>
                    <X size={14} className="text-stone-400 hover:text-stone-600" />
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto">
                {query === "" ? (
                  <p className="text-xs text-stone-400 text-center py-8">Start typing to search rooms...</p>
                ) : filtered.length === 0 ? (
                  <p className="text-xs text-stone-400 text-center py-8">{`No rooms found for "${query}"`}</p>
                ) : (
                  filtered.map((room, i) => (
                    <button
                      key={i}
                      onClick={() => { router.push(`/rooms/${room.id}`); onClose(); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors text-left"
                    >
                      <div className="relative size-10 rounded-lg overflow-hidden shrink-0 bg-stone-200">
                        <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-stone-900 dark:text-white truncate">{room.name}</p>
                        <p className="text-xs text-stone-400 capitalize">{room.gender} · {room.capacity} person · {room.bathroom}</p>
                      </div>
                      <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 shrink-0">
                        ₦{Number(room.price).toLocaleString()}
                      </p>
                    </button>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2.5 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3">
                <span className="text-[10px] text-stone-400">Press</span>
                <kbd className="text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-500 px-1.5 py-0.5 rounded font-mono">ESC</kbd>
                <span className="text-[10px] text-stone-400">to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}