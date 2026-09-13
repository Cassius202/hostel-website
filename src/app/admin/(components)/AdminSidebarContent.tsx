'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Shield } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
// import { logout } from "@/app/admin/actions"
import { adminLinks } from "@/constants/AdminAssets"

// Replace with real admin user from session
const admin = {
  name: "Hostel Manager",
  email: "admin@iyalodetaofikathub.com",
  role: "Administrator",
}

const AdminSidebarContent = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-zinc-950 px-4 py-6">

      {/* branding */}
      <div className="flex items-center gap-2.5 mb-8 px-1">
        <div className="w-7 h-7 rounded-md bg-rose-600 flex items-center justify-center shrink-0">
          <Shield size={14} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white tracking-wide font-sans">ITH Admin</p>
          <p className="text-[10px] text-zinc-500 font-sans">Iyalode Taofikat Hub</p>
        </div>
      </div>

      {/* divider */}
      <div className="h-px bg-zinc-800 mb-6" />

      {/* nav */}
      <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2 px-1 font-sans">
        Management
      </p>

      <nav className="flex flex-col gap-0.5 flex-1">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-all
                ${isActive
                  ? "bg-rose-600 text-white font-medium"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                }`}
            >
              <link.icon size={15} strokeWidth={isActive ? 2 : 1.5} />
              {link.name}

              {/* badge support e.g pending count */}
              {link.badge ? (
                <span className="ml-auto text-[10px] bg-rose-600 text-white rounded-full px-1.5 py-0.5 font-sans">
                  {link.badge}
                </span>
              ) : null}
            </Link>
          )
        })}
      </nav>

      {/* divider */}
      <div className="h-px bg-zinc-800 mb-4" />

      {/* admin info */}
      <div className="flex items-center gap-3 px-1 mb-4">
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-semibold text-zinc-300 shrink-0 font-sans">
          {admin.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-zinc-200 truncate font-sans">{admin.name}</p>
          <p className="text-[10px] text-zinc-500 truncate font-sans">{admin.role}</p>
        </div>
      </div>

      {/* logout */}
      <form >
        <button
          type="submit"
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-500 hover:text-red-400 hover:bg-zinc-900 transition-colors font-sans"
        >
          <LogOut size={15} />
          Sign out
        </button>
      </form>

    </div>
  )
}

export default AdminSidebarContent