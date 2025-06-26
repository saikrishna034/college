"use client"

import { useState, useEffect, useRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Calendar,
  Users,
  Award,
  BookOpen,
  Microscope,
  Trophy,
  GraduationCap,
  Building,
} from "lucide-react"

const newsEvents = [
  { date: "Dec 15, 2024", title: "Spring Semester Registration Opens", description: "Registration for Spring 2025 semester is now open. Don't miss out on your preferred courses!", icon: BookOpen, category: "Academic", color: "text-blue-500" },
  { date: "Dec 20, 2024", title: "Annual Science Fair", description: "Join us for our annual science fair showcasing innovative projects from our students.", icon: Microscope, category: "Event", color: "text-green-500" },
  { date: "Jan 5, 2025", title: "New Library Wing Opening", description: "Our state-of-the-art library extension opens with modern study spaces and digital resources.", icon: Building, category: "Infrastructure", color: "text-purple-500" },
  { date: "Jan 12, 2025", title: "Inter-College Sports Championship", description: "Our college teams compete in the annual inter-college sports championship across multiple disciplines.", icon: Trophy, category: "Sports", color: "text-orange-500" },
  { date: "Jan 18, 2025", title: "Industry Expert Guest Lectures", description: "Leading industry professionals will share insights on emerging technologies and career opportunities.", icon: Users, category: "Career", color: "text-indigo-500" },
  { date: "Jan 25, 2025", title: "Student Research Symposium", description: "Undergraduate students present their research findings in various fields of study.", icon: Award, category: "Research", color: "text-red-500" },
  { date: "Feb 1, 2025", title: "Alumni Meet & Career Fair", description: "Connect with successful alumni and explore career opportunities with top companies.", icon: GraduationCap, category: "Career", color: "text-teal-500" },
  { date: "Feb 8, 2025", title: "Cultural Festival - Kaleidoscope 2025", description: "Three-day cultural extravaganza featuring music, dance, drama, and art competitions.", icon: Users, category: "Cultural", color: "text-pink-500" },
]

const ITEMS_PER_SLIDE = 3
const SLIDE_WIDTH_PERCENT = 100

export default function AutoScrollingNews() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = Math.ceil(newsEvents.length / ITEMS_PER_SLIDE)
  const duplicated = [...newsEvents, ...newsEvents.slice(0, ITEMS_PER_SLIDE)]

  useEffect(() => {
    if (isHovered) return

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1)
      intervalRef.current = setInterval(() => {
        setIndex((prev) => prev + 1)
      }, 4000)
    }, 500)

    return () => {
      clearTimeout(timeout)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  useEffect(() => {
    if (index === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false)
        setIndex(0)
      }, 700)
    } else {
      setIsTransitioning(true)
    }
  }, [index, totalSlides])

  const slideStyle = {
    transform: `translateX(-${index * SLIDE_WIDTH_PERCENT}%)`,
    transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        <div className="flex w-full" style={slideStyle}>
          {Array.from({ length: Math.ceil(duplicated.length / ITEMS_PER_SLIDE) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {duplicated.slice(slideIndex * ITEMS_PER_SLIDE, slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE).map((item, itemIndex) => {
                  const IconComponent = item.icon
                  return (
                    <Card
                      key={`${slideIndex}-${itemIndex}`}
                      className="group border border-muted rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.11] cursor-pointer"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-xs px-2 py-1 bg-muted rounded-full font-medium">{item.category}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${index % totalSlides === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Animated Background Elements (only left & center) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute bottom-10 left-10 w-14 h-14 bg-secondary/10 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-accent/5 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  )
}
