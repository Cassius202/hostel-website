'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { dashboardLinks, backgroundImage } from "@/constants/tenantAssets"
import { LogOut } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"

const user = {
  name: "Cassius Samuel",
  preferredName: "Cassius",
  email: "cassiusejekwu@hotmail.com",
}

const SidebarContent = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname()

  return (
    <div className="relative slate:bg-slate-900 dark:bg-zinc-950 flex flex-col h-full px-4 py-6 overflow-hidden">

      {/* background image */}
      <Image
        src={backgroundImage}
        fill
        className="object-cover slate:opacity-30 dark:opacity-30"
        alt="bg"
      />

      {/* dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/50" />

      {/* all content sits above the image */}
      <div className="relative z-10 flex flex-col h-full">

        {/* user info */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold text-white shrink-0">
            {user.preferredName[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-white/60">{user.email}</p>
          </div>
        </div>

        {/* links */}
        <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
          General
        </p>

        <nav className="flex flex-col gap-1 flex-1">
          {dashboardLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                  ${isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <link.icon size={16} />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <button className="flex items-center gap-2 px-3 py-2 text-sm text-white/40 hover:text-red-400 transition-colors mt-4">
          <LogOut size={16} />
          Logout
        </button>

      </div>
    </div>
  )
}

export default SidebarContent