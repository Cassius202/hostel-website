'use client'

import { motion } from 'framer-motion'
import { XCircle, Home, MapPin } from 'lucide-react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '2348000000000'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, my registration on the Iyalode Taofikat Hub portal was rejected. I believe this may be an error and would like to resolve it."
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const RejectPage = () => {
  return (
    <div className="h-[80vh] bg-stone-50 dark:bg-zinc-950 flex items-center justify-center px-4">
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
          <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center ring-1 ring-red-200 dark:ring-red-900">
            <XCircle className="w-7 h-7 text-red-500" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl text-stone-900 dark:text-stone-50 mb-2">
            Registration Rejected
          </h1>
          <p className="font-sans text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            {`Your registration could not be verified against our hostel records.
            If you believe this is a mistake, please reach out directly.`}
          </p>
        </div>

        {/* Visit office card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl px-5 py-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 w-8 h-8 rounded-full bg-rose-600/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-rose-600" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-stone-800 dark:text-stone-200 mb-0.5">
                {`Visit the Hostel Manager's Office`}
              </p>
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                {`The manager's office is located inside the hostel. Speak with her
                directly and she'll resolve your registration in person.`}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
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
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-sans text-sm transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Message an Admin
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default RejectPage