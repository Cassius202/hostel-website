import { Rooms } from "@/constants/interfaces";
import { roomsShortened } from "@/constants/roomAssets";
import NeutralGridBackground from "@/minor-components/GridBackground";
import Image from "next/image";
import Link from "next/link";
import { Users, Bath, ArrowRight } from "lucide-react";

const RoomsSection = () => {
  return (
    <section className="relative w-full bg-stone-100 dark:bg-stone-950 py-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 mask-[linear-gradient(45deg,transparent,black_20%,black_80%,transparent)] opacity-50 dark:opacity-30 pointer-events-none">
        <NeutralGridBackground />
      </div>

      <div className="relative global-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500 mb-4 block">
            Accommodation
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-stone-900 dark:text-white">
            Our Rooms
          </h2>
          <p className="mt-4 text-stone-500 dark:text-stone-400 max-w-lg text-base leading-relaxed">
            Premium and secure student accommodation — combining comfort with a
            hospitality-driven approach for complete peace of mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roomsShortened.map((room, idx) => (
            <RoomCard key={idx} room={room} />
          ))}
        </div>

        <Link href='/rooms' className="mx-auto w-max flex items-center text-center mt-10 h-12 bg-slate-200 dark:bg-stone-950 rounded-full gap-2 p-1.5 pl-4 group btn">
          <p>See All Rooms</p>
          <div className="bg-accent rounded-full h-full aspect-square relative group-hover:scale-[1.04] overflow-hidden grid place-content-center">
            <ArrowRight className="shrink-0 text-white group-hover:-rotate-45 transition-transform duration-400" />
          </div>
        </Link>
      </div>
    </section>
  );
};

const RoomCard = ({ room }: { room: Rooms }) => {
  const formattedPrice = Number(room.price).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

  return (
    <div className="group rounded-2xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 overflow-hidden hover:border-rose-200 dark:hover:border-rose-900 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-stone-200 dark:bg-stone-800">
        <Image
          src={room.images[0]}
          alt={room.name.split("-")[0]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Availability dot */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-white font-medium">Available</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Name + capacity */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-stone-900 dark:text-white leading-tight">
            {room.name.split("-")[0]}
          </h3>
          <div className="flex items-center gap-1 shrink-0 bg-stone-100 dark:bg-stone-800 rounded-lg px-2.5 py-1">
            <Users size={12} className="text-stone-400" />
            <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
              {room.capacity}
            </span>
          </div>
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-2.5 py-1">
            <Bath size={11} />
            {room.bathroom}
          </span>
          {room.customBed && (
            <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-2.5 py-1">
              Custom bed
            </span>
          )}
          <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-lg px-2.5 py-1 capitalize">
            {room.wing} wing
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100 dark:border-stone-800">
          <div>
            <p className="text-xs text-stone-400 dark:text-stone-500">
              Per session
            </p>
            <p className="text-lg font-bold text-stone-900 dark:text-white">
              {formattedPrice}
            </p>
          </div>
          <Link
            href={`/rooms/${room.id}`}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-full transition-colors duration-200"
          >
            View Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomsSection;
