"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, BedDouble } from "lucide-react";
import { navLinks, assets } from "@/constants/assets";
import { useSidebarStore } from "@/store/useSidebarStore";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleSmall from "@/minor-components/ThemeToggleSmall";

const hostelPhone = "+2348000000000";
const hostelPhoneDisplay = "+234 800 000 0000";

export default function SideBar() {
  const { isOpen, close } = useSidebarStore();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position  = "fixed";
      document.body.style.top       = `-${scrollY}px`;
      document.body.style.width     = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position  = "";
      document.body.style.top       = "";
      document.body.style.width     = "";
      document.body.style.overflowY = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      document.body.style.position  = "";
      document.body.style.top       = "";
      document.body.style.width     = "";
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-200 bg-black/40 backdrop-blur-sm"
          />

          {/* Panel — drops from top */}
          <motion.aside
            key="panel"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-[200] bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-2xl shadow-black/20 dark:shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 dark:border-stone-800">
              <Link href="/" onClick={close} className="flex items-center gap-2">
                <Image src={assets.logoLight} alt="Logo" height={28} className="object-contain dark:hidden" />
                <Image src={assets.logoDark} alt="Logo" height={28} className="object-contain hidden dark:block" />
                <span className="text-sm font-bold text-stone-900 dark:text-white">
                  Iyalode <span className="font-normal text-stone-400">Taofikat Hub</span>
                </span>
              </Link>

              <div className="flex items-center gap-4">
                <div className="relative group">
                  <ThemeToggleSmall />
                  <span className="tooltip">
                    Set{" "}<span className="dark:hidden">dark theme</span><span className="hidden dark:inline">Light theme</span>
                  </span>
                </div>
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="flex items-center justify-center size-8 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Nav links */}
            <nav className="px-3 py-3">
              {navLinks.map(({ name, href, icon: Icon }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={href}
                    onClick={close}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-150 group"
                  >
                    <span className="flex items-center justify-center size-8 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-rose-500/10 text-stone-400 group-hover:text-rose-500 transition-colors duration-150">
                      <Icon className="size-4" />
                    </span>
                    {name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTAs */}
            <div className="px-4 pb-5 py-4 flex flex-col sm:flex-row gap-2.5 border-t border-stone-100 dark:border-stone-800 mt-1">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="flex-1"
              >
                <Link
                  href="/rooms"
                  onClick={close}
                  className="flex w-full items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors duration-200 shadow-md shadow-rose-600/20"
                >
                  <BedDouble className="size-4" />
                  Explore Rooms
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="flex-1"
              >
                <Link
                  href={`tel:${hostelPhone}`}
                  className="flex w-full items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-sm font-semibold px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 transition-colors duration-200"
                >
                  <Phone className="size-4 text-rose-500" />
                  {hostelPhoneDisplay}
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}