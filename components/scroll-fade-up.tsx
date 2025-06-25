"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"

interface ScrollFadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function ScrollFadeUp({
  children,
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: ScrollFadeUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isVisible) {
        if (delay > 0) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
          }, delay)
        } else {
          setIsVisible(true)
        }
      }
    },
    [isVisible, delay],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleIntersection, threshold, rootMargin])

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out gpu-accelerate ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate3d(0, ${isVisible ? "0" : "30px"}, 0)`,
        transitionDuration: `${duration}ms`,
        transitionProperty: "opacity, transform",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
