"use client"

import { useState, useEffect } from "react"

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("omar-splash-seen")
    if (hasVisited) {
      // Already seen splash this session, skip it
      return
    }

    // First visit this session: show splash
    setShowSplash(true)
    sessionStorage.setItem("omar-splash-seen", "1")

    const fadeTimer = setTimeout(() => setFadeOut(true), 1200)
    const hideTimer = setTimeout(() => setShowSplash(false), 1700)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!showSplash) {
    return <>{children}</>
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-card transition-opacity duration-500 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-4xl font-bold tracking-tight text-card-foreground md:text-6xl animate-fade-in-up">
          Omar <span className="text-primary">Saab</span>
        </h1>
        <p className="mt-3 text-sm text-card-foreground/50 animate-fade-in-up-delay">
          {"Computer Engineering \u00B7 AI \u00B7 Robotics"}
        </p>
        <div className="mt-8 h-0.5 w-16 animate-expand-width rounded-full bg-primary" />
      </div>
      <div className="opacity-0">{children}</div>
    </>
  )
}
