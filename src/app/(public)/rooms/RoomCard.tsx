"use client";

import { Rooms } from "@/constants/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Bath } from "lucide-react";

const RoomCard = ({ room, index }: { room: Rooms; index: number }) => {
  const isMale = room.gender === "male";
  const formattedPrice = Number(room.price).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden hover:border-rose-200 dark:hover:border-rose-900 transition-all duration-300 flex flex-col"
    >
      <Link href={`/rooms/${room.id}`}>
        {/* Image */}
        <div className="relative w-full aspect-4/3 max-sm:aspect-11/6 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${isMale ? "bg-sky-500/20 border-sky-400/30 text-sky-300" : "bg-rose-500/20 border-rose-400/30 text-rose-300"}`}
          >
            {isMale ? "♂ Male" : "♀ Female"}
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-white font-medium">
              Available
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-stone-900 dark:text-white leading-tight">
              {room.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 bg-stone-100 dark:bg-stone-800 rounded-lg px-2.5 py-1">
              <Users size={12} className="text-stone-400" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                {room.capacity}
              </span>
            </div>
          </div>

          {/* Tags — hide wing on mobile to save space */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <span className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-2 sm:px-2.5 py-1">
              <Bath size={11} />
              {room.bathroom}
            </span>
            {room.customBed && (
              <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-2 sm:px-2.5 py-1">
                Custom bed
              </span>
            )}
            
          </div>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100 dark:border-stone-800">
            <div>
              <p className="text-xs text-stone-400 dark:text-stone-500">
                Per session
              </p>
              <p className="text-lg font-bold text-stone-900 dark:text-white">
                {formattedPrice}
              </p>
            </div>
            <span className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-full transition-colors duration-200">
              View Room
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RoomCard;
