"use client"

import { useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReset() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    const reset = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView()
      } else {
        window.scrollTo(0, 0)
      }
    }

    reset()
    const timers = [0, 80, 240, 600].map((delay) =>
      window.setTimeout(reset, delay)
    )
    window.addEventListener("pageshow", reset)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener("pageshow", reset)
      window.history.scrollRestoration = previousRestoration
    }
  }, [pathname])

  return null
}
