"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react"

const ThemeContext = createContext(undefined)

const STORAGE_KEY = "aptechnosys-theme"

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark")

  // Load saved theme once after hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)

      if (saved === "light" || saved === "dark") {
        setThemeState(saved)
      } else {
        const prefersLight = window.matchMedia(
          "(prefers-color-scheme: light)"
        ).matches

        setThemeState(prefersLight ? "light" : "dark")
      }
    } catch {
      setThemeState("dark")
    }
  }, [])

  const applyTheme = useCallback((next) => {
    const root = document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(next)

    root.style.colorScheme = next

    const meta = document.querySelector('meta[name="theme-color"]')

    if (meta) {
      meta.setAttribute(
        "content",
        next === "light" ? "#ffffff" : "#09090b"
      )
    }

    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  const setTheme = useCallback((next) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return ctx
}