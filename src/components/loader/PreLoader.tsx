'use client'

import { assets } from "@/constants/assets"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const DISPLAY_TIME = 1800

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), DISPLAY_TIME)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="w-screen fixed z-500 h-screen bg-white dark:bg-zinc-950 [--loader-bg:white] dark:[--loader-bg:#09090b]">
            <div className="flex h-full items-center justify-center relative">

              {/* Logo — swap for light/dark */}
              <div className="absolute size-28 logo-loader">
                <Image
                  alt="logo"
                  src={assets.logoLight}
                  height={80}
                  className="dark:hidden"
                />
                <Image
                  alt="logo"
                  src={assets.logoDark}
                  height={80}
                  className="hidden dark:block"
                />
              </div>

              <div className="loader-spinner relative size-20 rotate-45 bg-white dark:bg-zinc-950"/>

              {/* Cover block — matches bg */}
              <div className="top-1/2 translate-y-6 size-40 w-100 h-40 absolute bg-white dark:bg-zinc-950"/>

              <h1 className="absolute translate-y-12 font-medium text-4xl z-20 text-zinc-900 dark:text-white">
                Iyalode Taofikat Hub
              </h1>

            </div>
          </div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}