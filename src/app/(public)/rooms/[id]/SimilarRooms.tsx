"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Rooms } from "@/constants/interfaces";

export default function SimilarRooms({ rooms }: { rooms: Rooms[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (rooms.length === 0) return null;

  return (
    <section className="global-padding max-w-6xl flex flex-col gap-8 py-16 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      {/* Header + Navigation */}
      <div className="flex items-end justify-between px-4 md:px-0 max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 font-medium">
            OTHER OPTIONS
          </span>
          <h2 className="text-4xl font-light text-stone-900 dark:text-stone-50 tracking-tight">
            Similar Rooms
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center size-11 rounded-full border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-50 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-stone-900 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} strokeWidth={1.2} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center size-11 rounded-full border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-50 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-50 dark:hover:text-stone-900 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-10 scroll-smooth scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group relative shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden snap-start border border-stone-200 dark:border-stone-800"
          >
            {/* Room Image */}
            <Image
              src={room.images[0]}
              alt={room.name}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay (Optimized for readability in both modes) */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex flex-col gap-1 mb-6">
                <h3 className="text-2xl font-light text-white">
                  {room.name}
                </h3>
               
              </div>

              <Link
                href={`/rooms/${room.id}`}
                className="w-fit px-8 py-3 border border-white/30 rounded-full text-white text-[10px] uppercase tracking-widest font-medium backdrop-blur-md hover:bg-white hover:text-stone-950 hover:border-white transition-all duration-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}