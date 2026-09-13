'use client';

import { useEffect, useState } from "react";
import { Sun, Moon, Layers } from "lucide-react";

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "slate", label: "Slate" },
]

const applyTheme = (value: string) => {
  const root = document.getElementById('tenant-root')
  const html = document.documentElement

  // clear all theme classes from both elements
  root?.classList.remove('slate', 'dark')
  html.classList.remove('dark')

  if (value === 'dark') {
    root?.classList.add('dark')
    html.classList.add('dark')       // next-themes dark
  } else if (value === 'slate') {
    root?.classList.add('slate')
  }
  // light — no classes needed, just remove everything
}

const Settings = () => {
  const [theme, setThemeState] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('tenant-theme') ?? 'light'
    setThemeState(saved)
    applyTheme(saved)
  }, [])

  const handleChange = (value: string) => {
    setThemeState(value)
    applyTheme(value)
    localStorage.setItem('tenant-theme', value)
  }

  if (!mounted) return <div className="min-h-svh" />

  return (
    <div className="min-h-svh px-6 py-8 bg-white dark:bg-zinc-900 slate:bg-slate-900">
      <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100 mb-8">
        Settings
      </h1>

      <div className="max-w-md rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-5">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100 mb-1">
          Appearance
        </h2>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500 mb-4">
          Choose how the dashboard looks to you
        </p>

        {/* theme chips */}
        <div className="flex gap-2">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => handleChange(t.value)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-colors border
                ${theme === t.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-zinc-500 dark:text-zinc-400 slate:text-slate-400 border-zinc-200 dark:border-zinc-700 slate:border-slate-700 hover:border-blue-400"
                }`}
            >
              {t.value === 'light' && <Sun size={12} />}
              {t.value === 'dark' && <Moon size={12} />}
              {t.value === 'slate' && <Layers size={12} />}
              {t.label.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* current theme indicator */}
        <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500 mt-3 text-center">
          Current: <span className="font-medium text-zinc-600 dark:text-zinc-300 slate:text-slate-300 capitalize">{theme}</span>
        </p>
      </div>
    </div>
  )
}

export default Settings