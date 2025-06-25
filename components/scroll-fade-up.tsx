"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollFadeUp({ children, delay = 0, duration = 600, className = "" }: ScrollFadeUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visible
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible, delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
