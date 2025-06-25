"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)

    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
      }`}
    >
      {children}
    </div>
  )
}
