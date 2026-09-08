"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`site-header-backdrop${isScrolled ? " is-visible" : ""}`}
        aria-hidden="true"
      />
      <header className="site-header">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Link href="/" className="wordmark" aria-label="pepeloper/ui, home">
          pepeloper<span>/ ui</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#components">Components</Link>
          <Link href="/#blocks">Blocks</Link>
          <Link href="/docs">Docs</Link>
        </nav>
        <a href="https://www.pepeloper.dev/" className="personal-link">
          pepeloper.dev
        </a>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="https://www.pepeloper.dev/">Pepeloper</a>
      <span>My UI toolbox.</span>
      <Link href="/r/registry.json">Registry</Link>
    </footer>
  )
}
