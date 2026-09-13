'use client'

import { useState } from "react"
import {Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import SidebarContent from "./SideBarContent"

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden md:flex flex-col w-60 h-screen border-r border-zinc-100 dark:border-zinc-800 sticky top-0 overflow-hidden">
        <SidebarContent setIsOpen={setIsOpen} />
      </aside>

      {/* mobile: hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800"
      >
        <Menu size={18} />
      </button>

      {/* mobile: drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/40"
            />

            {/* drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 left-0 z-50 w-64 h-screen bg-white slate:bg-slate-900 dark:bg-zinc-950 shadow-xl overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-600"
              >
                <X size={18} />
              </button>
              <SidebarContent setIsOpen={setIsOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default SideBar