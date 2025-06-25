"use client"

import { useEffect, useState, useRef, useCallback } from "react"

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
  const animationFrameRef = useRef<number>()

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    },
    [isVisible],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 })

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [handleIntersection])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = easeOutCubic * end
      const displayValue = Math.floor(currentValue)

      setCount(displayValue)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible, end, duration])

  const formatNumber = useCallback((num: number) => {
    return Math.floor(num).toLocaleString()
  }, [])

  return (
    <div
      ref={counterRef}
      className="text-3xl font-bold text-white transition-all duration-100 gpu-accelerate"
      style={{
        willChange: isVisible && count < end ? "auto" : "auto",
      }}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  )
}
