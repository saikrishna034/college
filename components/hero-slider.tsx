"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Welcome to Sri Vignana Bharathi Degree College",
    subtitle: "Excellence in Education Since 1985",
    description:
      "Empowering young minds through quality education. Join a legacy of academic excellence and holistic development.",
    duration: 2000,
  },
  {
    image: "/images/slide2.jpg",
    title: "Best Degree College in Your City",
    subtitle: "Shape Your Future with Us",
    description:
      "Join thousands of students who have transformed their lives through our innovative programs and world-class faculty.",
    duration: 2000,
  },
  {
    image: "/images/slide3.jpg",
    title: "Academic Excellence & Innovation",
    subtitle: "50+ Programs | 15,000+ Students | 500+ Faculty",
    description:
      "Discover cutting-edge programs designed for tomorrow's leaders with state-of-the-art infrastructure.",
    duration: 2000,
  },
  {
    image: "/images/slide4.jpg",
    title: "Your Journey to Success Starts Here",
    subtitle: "Apply Now for 2025 Admissions Open",
    description:
      "Take the first step towards your bright future. Applications are now open for the upcoming academic year.",
    duration: 3000,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 1500);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(nextSlide, slides[currentSlide].duration);
    return () => clearTimeout(timer);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden gpu-accelerate">
      {/* Background Images with Optimized Transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out gpu-accelerate ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              willChange:
                index === currentSlide ||
                index === (currentSlide + 1) % slides.length
                  ? "opacity"
                  : "auto",
            }}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Campus slide ${index + 1}`}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay with Optimized Animations */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <div key={currentSlide} className="space-y-6">
              <div className="space-y-4">
                <p
                  className="text-sm font-semibold text-white/90 tracking-widest uppercase transform transition-all duration-600 ease-out animate-in slide-in-from-left-4 fade-in gpu-accelerate"
                  style={{
                    animationDelay: "0ms",
                    willChange: "transform, opacity",
                  }}
                >
                  {slides[currentSlide].subtitle}
                </p>

                <h1
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight transform transition-all duration-700 ease-out animate-in slide-in-from-left-6 fade-in gpu-accelerate"
                  style={{
                    animationDelay: "150ms",
                    willChange: "transform, opacity",
                  }}
                >
                  {slides[currentSlide].title}
                </h1>

                <p
                  className="max-w-2xl text-lg text-white/90 leading-relaxed font-medium transform transition-all duration-600 ease-out animate-in slide-in-from-left-4 fade-in gpu-accelerate"
                  style={{
                    animationDelay: "300ms",
                    willChange: "transform, opacity",
                  }}
                >
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row pt-6">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 gpu-accelerate"
                >
                  EXPLORE COURSES →
                </Button>
                <Link href={"/apply"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg gpu-accelerate"
                  >
                    APPLY NOW →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 gpu-accelerate ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            style={{
              willChange:
                index === currentSlide ? "transform, background-color" : "auto",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
