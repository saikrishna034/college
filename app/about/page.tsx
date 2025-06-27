
// app/about/page.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Globe } from "lucide-react"
import ScrollFadeUp from "@/components/scroll-fade-up"

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Emily Rodriguez",
      role: "President",
      description:
        "Leading Sri Vignana Bharathi Degree College with 15 years of experience in higher education administration and a passion for student success.",
      image: "images/img1.jpeg",
      delay: 100,
    },
    {
      name: "Dr. James Thompson",
      role: "Vice President of Academics",
      description:
        "Overseeing academic excellence and curriculum development with expertise in educational innovation and faculty development.",
      image: "images/img2.jpeg",
      delay: 200,
    },
    {
      name: "Dr. John Doe",
      role: "Dean of Student Affairs",
      description:
        "Dedicated to creating an inclusive campus environment that supports student growth, well-being, and success.",
      image: "images/img3.jpeg",
      delay: 300,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollFadeUp>
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6 text-center space-y-4 flex flex-col items-center justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-base rounded-md shadow-sm"
            >
              About Sri Vignana Bharathi Degree College
            </Badge>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Empowering Minds Since 2010
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              For nearly four decades, Sri Vignana Bharathi Degree College has been at the forefront of higher education,
              nurturing tomorrow&apos;s leaders and innovators through excellence in teaching, research, and community service.
            </p>
          </div>
        </section>
      </ScrollFadeUp>

      {/* History Section */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <ScrollFadeUp>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  Founded in 2010 by visionary educators Dr. Sarah Johnson and Dr. Michael Chen, Sri Vignana Bharathi Degree College
                  began as a small institution with big dreams. What started with just 200 students and 15 faculty members has grown into a
                  prestigious institution serving over 15,000 students from around the world.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our commitment to academic excellence, innovation, and student success has earned us recognition
                  as one of the top colleges in the region.
                </p>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp delay={200}>
              <img
                src="/images/collegeimage.avif"
                width={600}
                height={400}
                alt="Historic campus building"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </ScrollFadeUp>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Mission / Vision / Values */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <ScrollFadeUp>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Foundation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>
            </ScrollFadeUp>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[{
                icon: <Target className="mx-auto h-12 w-12 text-primary mb-4" />,
                title: "Mission",
                text: "To provide transformative education that empowers students to become ethical leaders and innovative problem-solvers in a global society."
              }, {
                icon: <Eye className="mx-auto h-12 w-12 text-primary mb-4" />,
                title: "Vision",
                text: "To be a globally recognized institution that shapes the future through excellence in education, research, and community engagement."
              }, {
                icon: <Heart className="mx-auto h-12 w-12 text-primary mb-4" />,
                title: "Values",
                text: "Integrity, Excellence, Innovation, Diversity, Collaboration, and Social Responsibility form the core of our institutional culture."
              }, {
                icon: <Globe className="mx-auto h-12 w-12 text-primary mb-4" />,
                title: "Impact",
                text: "Creating positive change in communities worldwide through our graduates, research, and partnerships with organizations globally."
              }].map((item, i) => (
                <ScrollFadeUp key={i} delay={100 * i}>
                  <Card className="text-center">
                    <CardHeader>
                      {item.icon}
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.text}</CardDescription>
                    </CardContent>
                  </Card>
                </ScrollFadeUp>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Leadership */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <ScrollFadeUp>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
                  Meet the dedicated leaders who guide our institution toward excellence.
                </p>
              </div>
            </ScrollFadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pb-6 relative z-0 overflow-visible">
              {leadership.map((leader, index) => (
                <ScrollFadeUp key={index} delay={leader.delay}>
                  <div className="leadership-card group relative rounded-xl bg-card/40 backdrop-blur-md p-6 transition-all duration-300 ease-out hover:scale-110 hover:bg-card/60 hover:shadow-2xl cursor-pointer">
                    <div className="text-center relative z-10">
                      <div className="mb-4 transition-transform duration-300 ease-out group-hover:scale-105">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-background shadow-lg"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3 transition-colors">
                        {leader.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed transition-colors">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeUp>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Achievements */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <ScrollFadeUp>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed mx-auto">
                  Recognition and milestones that reflect our commitment to excellence.
                </p>
              </div>
            </ScrollFadeUp>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Top 50", subtitle: "National College Ranking" },
                { title: "98%", subtitle: "Student Satisfaction Rate" },
                { title: "$50M+", subtitle: "Research Funding" },
                { title: "85+", subtitle: "Countries Represented" },
              ].map((item, i) => (
                <ScrollFadeUp key={i} delay={100 * (i + 1)}>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                  </div>
                </ScrollFadeUp>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeUp>
    </div>
  )
}