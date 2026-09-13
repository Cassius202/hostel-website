'use client'

import { Bell, Shield } from "lucide-react"
import Image from "next/image"

export default function AdminHeader() {
  const now = new Date()
  const date = now.toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 border-b border-zinc-800 bg-zinc-950">

      {/* left — date + admin badge */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-600/10 border border-rose-600/20">
          <Shield size={11} className="text-rose-500" />
          <span className="text-[10px] font-semibold text-rose-500 uppercase tracking-widest font-sans">
            Admin
          </span>
        </div>
        <p className="text-xs text-zinc-500 font-sans">{date}</p>
      </div>

      {/* right */}
      <div className="flex items-center gap-4">

        {/* nigeria flag */}
        <Image
          src="https://flagcdn.com/w40/ng.png"
          alt="Nigeria"
          width={24}
          height={16}
          className="rounded-sm opacity-80"
        />

        {/* notifications */}
        <button className="relative p-1.5 rounded-lg hover:bg-zinc-900 transition-colors">
          <Bell size={16} className="text-zinc-400" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </button>

        {/* divider */}
        <div className="w-px h-5 bg-zinc-800" />

        {/* user avatar */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-zinc-700">
            <Image
              src="https://images.unsplash.com/photo-1629740936456-4b990c27e503?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Admin"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-zinc-200 font-sans">Hostel Manager</p>
            <p className="text-[10px] text-zinc-500 font-sans">Administrator</p>
          </div>
        </div>

      </div>
    </div>
  )
}