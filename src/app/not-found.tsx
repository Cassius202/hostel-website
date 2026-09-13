import { assets } from "@/constants/assets"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="relative w-screen min-h-svh flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          alt="Iyalode Taofikat Hub"
          src={assets.hostelImage}
          fill
          className="object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center global-padding">

        {/* Big 404 */}
        <p className="text-[20vw] font-black leading-none tracking-tighter text-zinc-900 dark:text-white opacity-[0.06] select-none pointer-events-none absolute">
          404
        </p>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-rose-500">
            Page not found
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
            You seem lost
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-base leading-relaxed">
          {`The page you're looking for doesn't exist or has been moved. Let's get you back home.`}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/"
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Back to Home
            </Link>
            <Link
              href="/rooms"
              className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 text-sm font-semibold rounded-full transition-colors duration-200"
            >
              View Rooms
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NotFound