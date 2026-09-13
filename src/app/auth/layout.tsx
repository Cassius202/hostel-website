import React from "react"
import RightBanner from "./RightBanner"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-svh w-screen flex bg-zinc-50 dark:bg-zinc-950">

      {/* Left — login or register */}
      <div className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16 max-w-lg mx-auto lg:mx-0">
        {children}
      </div>

      {/* Right — shared banner */}
      <RightBanner />

    </div>
  )
}

export default layout