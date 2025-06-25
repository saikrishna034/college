"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Welcome to Sri Vignana Bharathi Degree College",
    subtitle: "Excellence in Education Since 1985",
    description:
      "Empowering young minds through quality education. Join a legacy of academic excellence and holistic development.",
    duration: 2000, // 2 seconds
  },
  {
    image: "/images/slide2.jpg",
    title: "Best Degree College in Your City",
    subtitle: "Shape Your Future with Us",
    description:
      "Join thousands of students who have transformed their lives through our innovative programs and world-class faculty.",
    duration: 2000, // 2 seconds
  },
  {
    image: "/images/slide3.jpg",
    title: "Academic Excellence & Innovation",
    subtitle: "50+ Programs | 15,000+ Students | 500+ Faculty",
    description: "Discover cutting-edge programs designed for tomorrow's leaders with state-of-the-art infrastructure.",
    duration: 2000, // 2 seconds
  },
  {
    image: "/images/slide4.jpg",
    title: "Your Journey to Success Starts Here",
    subtitle: "Apply Now for 2025 Admissions Open",
    description:
      "Take the first step towards your bright future. Applications are now open for the upcoming academic year.",
    duration: 3000, // 3 seconds
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, slides[currentSlide].duration)

    return () => clearTimeout(timer)
  }, [currentSlide, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images with Quick Soft Fade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Campus slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay with Smooth Left to Right Animation */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            {/* Animated Text Content */}
            <div key={currentSlide} className="space-y-6">
              <div className="space-y-4">
                {/* Subtitle - slides in first */}
                <p
                  className="text-sm font-semibold text-white/90 tracking-widest uppercase transform transition-all duration-600 ease-out animate-in slide-in-from-left-4 fade-in"
                  style={{ animationDelay: "0ms" }}
                >
                  {slides[currentSlide].subtitle}
                </p>

                {/* Main Title - slides in second */}
                <h1
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight transform transition-all duration-700 ease-out animate-in slide-in-from-left-6 fade-in"
                  style={{ animationDelay: "150ms" }}
                >
                  {slides[currentSlide].title}
                </h1>

                {/* Description - slides in third */}
                <p
                  className="max-w-2xl text-lg text-white/90 leading-relaxed font-medium transform transition-all duration-600 ease-out animate-in slide-in-from-left-4 fade-in"
                  style={{ animationDelay: "300ms" }}
                >
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Static Buttons - No Animation, Positioned with Text */}
              <div className="flex flex-col gap-4 sm:flex-row pt-6">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
                >
                  EXPLORE COURSES →
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  APPLY NOW →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
