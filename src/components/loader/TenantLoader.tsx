'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { RefreshCw } from "lucide-react"
import { footballFacts } from "@/constants/footballFacts"

const DISPLAY_TIME = 7000

const fallbackFacts = [
  "Between February 2012 and February 2013, Lionel Messi scroed 100 goals.",
  "In 1962 UI became an independent institution, making it the oldest degree-awarding institution in Nigeria.",
  "Cassius was the chief architect of Julius Caesar's assassination in 44 BC — he convinced Brutus to join the conspiracy that changed Rome forever.",
  "Former World number 1 Jannik Sinner is the only player to have won the Tennis ATP Finals back-to-back without dropping a single set — a tournament only the world's top 8 players qualify for.",
]

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [fact, setFact] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [isFootball, setIsFootball] = useState(false)

  const fetchFact = async () => {
    setIsFetching(true)

    const isFootballFact = Math.random() < 0.25;
    setIsFootball(isFootballFact)

    try {
      if (isFootballFact) {
        const random = footballFacts[Math.floor(Math.random() * footballFacts.length)]
        setFact(random)
      } else {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
        const data = await res.json()
        setFact(data.text)
      }
    } catch {
      // pick a random fallback fact instead of always showing the same one
      const random = fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)]
      setFact(random)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    fetchFact()
    const t = setTimeout(() => setIsLoading(false), DISPLAY_TIME)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-screen fixed z-500 h-screen bg-white dark:bg-zinc-950"
          >
            <div className="flex flex-col h-full items-center justify-center gap-6 px-8">

              <div className="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-zinc-800 dark:border-zinc-700 dark:border-t-zinc-200 animate-spin" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={isFootball ? "football" : "general"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-slate-500"
                >
                  {isFootball ? "⚽ Sport Fact" : "Did you know?"}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {fact && (
                  <motion.p
                    key={fact}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-center text-lg text-zinc-600 dark:text-zinc-300 max-w-sm"
                  >
                    💡 {fact}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                onClick={fetchFact}
                disabled={isFetching}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <motion.span
                  animate={isFetching ? { rotate: 360 } : { rotate: 0 }}
                  transition={isFetching ? { duration: 0.6, repeat: Infinity, ease: "linear" } : {}}
                >
                  <RefreshCw size={12} />
                </motion.span>
                another fact
              </motion.button>

            </div>
          </motion.div>
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