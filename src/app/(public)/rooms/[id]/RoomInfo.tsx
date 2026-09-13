"use client";
import { Rooms } from "@/constants/interfaces";
import { amenities } from "@/constants/amenitiesAssets";
import {
  Users,
  Bath,
  Bed,
  Lock,
  Zap,
  BookOpen,
  UtensilsCrossed,
  AlertCircle,
  Space,
} from "lucide-react";
import Link from "next/link";

const included = [
  { icon: Bath, label: "Ensuite Bathroom & Toilet" },
  { icon: BookOpen, label: "Reading Table / Chair" },
  { icon: Space, label: "Large Balcony" },
  { icon: Lock, label: "Lockable Wardrobe" },
  { icon: Zap, label: "Personal Socket / USB" },
  { icon: UtensilsCrossed, label: "Private Kitchenette" },
];

const notIncluded = ["Curtains", "Bedsheets", "Pillows"];

export default function RoomInfo({
  room,
}: {
  room: Rooms;
}) {
  const formattedPrice = Number(room.price).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

  return (
    <div className="global-padding max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left — main info */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-3">
            About this room
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              label: "Capacity",
              value: `${room.capacity} person${room.capacity > 1 ? "s" : ""}`,
            },
            { label: "Bathroom", value: room.bathroom },
            { label: "Wing", value: `${room.wing} wing` },
            { label: "Custom Bed", value: room.customBed ? "Yes" : "No" },
            {
              label: "Gender",
              value: room.gender === "male" ? "Male only" : "Female only",
            },
            { label: "Per Session", value: formattedPrice },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-4"
            >
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 capitalize">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div>
          <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">{`What's included`}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400"
              >
                <div className="flex items-center justify-center size-8 rounded-lg bg-stone-100 dark:bg-stone-800 shrink-0">
                  <Icon
                    size={14}
                    className="text-stone-500 dark:text-stone-400"
                  />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Not included */}
          <div className="mt-4 flex items-start gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-xl p-4">
            <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 dark:text-amber-400">
              <span className="font-semibold">Not included: </span>
              {notIncluded.join(", ")}
            </p>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
            Hostel amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map(({ title, Icon }) => (
              <div
                key={title}
                className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400"
              >
                <Icon size={13} className="text-rose-400 shrink-0" />
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — sticky price card */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col gap-5">
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wider">
              Price per session
            </p>
            <p className="text-3xl font-bold text-stone-900 dark:text-white mt-1">
              {formattedPrice}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <Users size={14} />
            <span>
              {room.capacity} occupant{room.capacity > 1 ? "s" : ""} ·{" "}
              {room.gender} wing
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href="/waitlist"
              className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-xl text-center transition-colors"
            >
              Check Availability
            </Link>
            <Link
              href="/rooms"
              className="w-full py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-sm font-semibold rounded-xl text-center transition-colors"
            >
              View All Rooms
            </Link>
          </div>

          <p className="text-xs text-stone-400 text-center">
            Payment is per academic session. Contact us for installment options.
          </p>
        </div>
      </div>
    </div>
  );
}
