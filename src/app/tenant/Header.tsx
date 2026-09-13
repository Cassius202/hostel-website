'use client'

import { Bell } from "lucide-react"
import Image from "next/image"

export const Header = () => {
  const now = new Date()
  const date = now.toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 slate:bg-transparent dark:bg-transparent slate:border-slate-800 bg-linear-to-r from-amber-300/50 to-stone-100">
      {/* date */}
      <div>
        <p className="text-sm text-zinc-700 slate:text-slate-500 dark:text-zinc-300">{date}</p>
      </div>

      <div className="flex items-center gap-4">
        {/* nigeria flag */}
        <Image
          src="https://flagcdn.com/w40/ng.png"
          alt="Nigeria"
          width={24}
          height={16}
          className="rounded-sm"
        />

        {/* notifications */}
        <button className="relative">
          <Bell size={18} className="text-zinc-500 slate:text-slate-400" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* user avatar */}
        <div className="w-8 h-8 rounded-full bg-zinc-200 slate:bg-slate-700 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1629740936456-4b990c27e503?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}