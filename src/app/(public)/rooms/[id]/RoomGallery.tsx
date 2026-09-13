"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Rooms } from "@/constants/interfaces"

export default function RoomGallery({ room }: { room: Rooms }) {
  const allImages = [...room.images, room.bathroomImage]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="global-padding max-w-6xl flex flex-col gap-4">

      {/* Header */}
      <div>
        <span className=" text-sm uppercase tracking-[0.2em] font-medium text-rose-500 mb-2 block">
          {room.gender === "male" ? "♂ Male Wing" : "♀ Female Wing"}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
          {room.name}
        </h1>
      </div>

      {/* Main image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={allImages[activeIndex]}
              alt={`${room.name} view ${activeIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {activeIndex + 1} / {allImages.length}
        </div>

        {/* Last image label */}
        {activeIndex === allImages.length - 1 && (
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            Bathroom
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              i === activeIndex
                ? "border-rose-500 opacity-100"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
            {i === allImages.length - 1 && (
              <div className="absolute inset-0 bg-black/20 flex items-end p-1">
                <span className="text-[8px] text-white font-medium">Bath</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}