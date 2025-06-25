"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ end, duration = 1000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Smooth easing function for natural increment
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      // Calculate current value with smooth increment
      const currentValue = easeOutCubic * end

      // Round to appropriate decimal places for smooth display
      let displayValue: number
      displayValue = Math.floor(currentValue)

      setCount(displayValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Ensure we end exactly at the target value
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  const formatNumber = (num: number) => {
    // Always return integers (no decimals)
    return Math.floor(num).toLocaleString()
  }

  return (
    <div ref={counterRef} className="text-3xl font-bold text-white transition-all duration-100">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  )
}
