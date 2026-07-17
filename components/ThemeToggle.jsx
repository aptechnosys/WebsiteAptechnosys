"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/ThemeProvider"

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-hidden="true"
        className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900/10 dark:border-white/10 ${className}`}
      />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-900/5 dark:hover:bg-white/5 transition-colors duration-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}