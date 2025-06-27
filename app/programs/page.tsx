"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Laptop,
  Microscope,
  Calculator,
  Palette,
  Globe,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import ScrollFadeUp from "@/components/scroll-fade-up"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Computer Science",
      description:
        "Cutting-edge curriculum covering software development, AI, cybersecurity, and data science.",
      duration: "4 years",
      students: "1,200+",
      icon: Laptop,
      level: "Bachelor's",
      category: "Technology",
    },
    {
      title: "Business Administration",
      description:
        "Comprehensive business education with focus on leadership, strategy, and entrepreneurship.",
      duration: "4 years",
      students: "2,000+",
      icon: Briefcase,
      level: "Bachelor's",
      category: "Business",
    },
    {
      title: "Biomedical Sciences",
      description:
        "Advanced study in life sciences, preparing students for medical and research careers.",
      duration: "4 years",
      students: "800+",
      icon: Microscope,
      level: "Bachelor's",
      category: "Science",
    },
    {
      title: "Engineering",
      description:
        "Multiple engineering disciplines including mechanical, electrical, and civil engineering.",
      duration: "4 years",
      students: "1,500+",
      icon: Calculator,
      level: "Bachelor's",
      category: "Engineering",
    },
    {
      title: "Fine Arts",
      description:
        "Creative programs in visual arts, music, theater, and digital media production.",
      duration: "4 years",
      students: "600+",
      icon: Palette,
      level: "Bachelor's",
      category: "Arts",
    },
    {
      title: "International Relations",
      description:
        "Global perspective on politics, economics, and cultural studies for future diplomats.",
      duration: "4 years",
      students: "400+",
      icon: Globe,
      level: "Bachelor's",
      category: "Social Sciences",
    },
  ]

  const categories = [
    "All",
    "Technology",
    "Business",
    "Science",
    "Engineering",
    "Arts",
    "Social Sciences",
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollFadeUp>
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4 text-base px-4 py-2">
                  Academic Programs
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Path to Success
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose from our diverse range of undergraduate and graduate programs designed to prepare you for the
                  challenges and opportunities of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Program Highlights */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              <ScrollFadeUp delay={100}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Degree Programs</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">15:1</div>
                  <div className="text-sm text-muted-foreground">Student-Faculty Ratio</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Graduate Employment Rate</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={400}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-muted-foreground">Industry Partnerships</div>
                </div>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Filter + Programs Grid */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore our comprehensive range of academic programs across multiple disciplines.
                </p>
              </div>
            </ScrollFadeUp>

            {/* Category Filter */}
            <ScrollFadeUp delay={100}>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer transition-all hover:bg-primary hover:text-primary-foreground ${selectedCategory === category ? "bg-primary text-primary-foreground" : ""
                      }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </ScrollFadeUp>

            {/* Programs Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <ScrollFadeUp key={index} delay={100 + index * 100}>
                    <Card className="transform transition duration-300 hover:scale-[1.1] hover:shadow-xl hover:opacity-90 shadow-md">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="h-8 w-8 text-primary" />
                          <Badge variant="secondary">{program.category}</Badge>
                        </div>
                        <CardTitle>{program.title}</CardTitle>
                        <CardDescription>{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Duration:</span>
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Students:</span>
                            <span>{program.students}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Level:</span>
                            <span>{program.level}</span>
                          </div>
                        </div>
                        <Button className="w-full" variant="outline">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollFadeUp>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollFadeUp>
    </div>
  )
}
