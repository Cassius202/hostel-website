'use client'

import Link from 'next/link'
import { Megaphone, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const announcements = [
  { id: 1, text: "New rooms now available for 2025/2026 session — limited slots!", link: "/rooms" },
  { id: 2, text: "Hostel orientation for new residents holds Saturday 8am at the common room.", link: "/blog" },
  { id: 3, text: "Bakery now open from 6am daily. Fresh bread every morning.", link: "/amenities" },
]

export default function NoticeBar() {
  const [current, setCurrent] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [animating, setAnimating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length)
        setAnimating(false)
      }, 300)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const announcement = announcements[current]
  const show = pathname === "/" && !scrolled

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="notice-bar"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full bg-stone-100 dark:bg-zinc-900 border-b border-stone-200 dark:border-white/5 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 py-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Megaphone size={13} className="text-rose-500 shrink-0" />
              <p className={`text-xs text-stone-600 dark:text-stone-300 truncate transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
                {announcement.text}
              </p>
            </div>
            <Link
              href={announcement.link}
              className="flex items-center gap-1 text-xs font-medium text-rose-500 hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Learn More <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}