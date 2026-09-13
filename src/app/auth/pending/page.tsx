'use client'

import { motion } from 'framer-motion'
import { Clock, Home, MessageCircle } from 'lucide-react'
import Link from 'next/link'

// Replace with actual hostel WhatsApp number
const WHATSAPP_NUMBER = '2348000000000'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I registered on the Iyalode Taofikat Hub portal but I'm unable to access my dashboard. Please can you verify my account?"
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const steps = [
  'Check your email for a confirmation message',
  'Visit the hostel office during working hours',
  'Meet any exco member directly',
]

const PendingAccess = () => {
  return (
    <div className="h-[80vh] bg-stone-50 dark:bg-zinc-950 flex items-center justify-center px-4 global-padding">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center ring-1 ring-rose-200 dark:ring-rose-900">
            <Clock className="w-7 h-7 text-rose-600" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl text-stone-900 dark:text-stone-50 mb-2">
            Account Under Review
          </h1>
          <p className="font-sans text-stone-500 dark:text-stone-400 leading-relaxed">
            Our team is verifying your registration against hostel records.
            This usually takes a few hours.
          </p>
        </div>

        {/* 36hr note */}
        <div className="bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl px-5 py-4 mb-6">
          <p className="font-sans text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3">
            No access after 36 hours?
          </p>
          <ul className="space-y-2">
            {steps.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2.5"
              >
                <span className="mt-0.5 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] flex items-center justify-center flex-shrink-0 font-sans font-medium">
                  {i + 1}
                </span>
                <span className="font-sans text-sm text-stone-600 dark:text-stone-300">
                  {step}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-stone-300 font-sans text-sm hover:bg-stone-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </motion.button>
          </Link>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-sans text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Message an Admin
          </motion.a>
        </div>

        {/* Footer note */}
        <p className="text-center font-sans text-xs text-stone-400 dark:text-stone-600 mt-6">
          Iyalode Taofikat Hub · Student Hostel Portal
        </p>
      </motion.div>
    </div>
  )
}

export default PendingAccess