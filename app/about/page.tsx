import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Globe } from "lucide-react"
import ScrollFadeUp from "@/components/scroll-fade-up"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollFadeUp>
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  About EduCollege
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empowering Minds Since 1985
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For nearly four decades, EduCollege has been at the forefront of higher education, nurturing
                  tomorrow's leaders and innovators through excellence in teaching, research, and community service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* History Section */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollFadeUp>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                    <p className="text-muted-foreground md:text-lg">
                      Founded in 1985 by visionary educators Dr. Sarah Johnson and Dr. Michael Chen, EduCollege began as
                      a small institution with big dreams. What started with just 200 students and 15 faculty members
                      has grown into a prestigious institution serving over 15,000 students from around the world.
                    </p>
                    <p className="text-muted-foreground md:text-lg">
                      Our commitment to academic excellence, innovation, and student success has earned us recognition
                      as one of the top colleges in the region. We continue to evolve and adapt to meet the changing
                      needs of our students and society.
                    </p>
                  </div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Historic campus building"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Mission, Vision, Values */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Foundation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  The principles that guide everything we do.
                </p>
              </div>
            </ScrollFadeUp>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ScrollFadeUp delay={100}>
                <Card className="text-center">
                  <CardHeader>
                    <Target className="mx-auto h-12 w-12 text-primary mb-4" />
                    <CardTitle>Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To provide transformative education that empowers students to become ethical leaders and
                      innovative problem-solvers in a global society.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <Card className="text-center">
                  <CardHeader>
                    <Eye className="mx-auto h-12 w-12 text-primary mb-4" />
                    <CardTitle>Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To be a globally recognized institution that shapes the future through excellence in education,
                      research, and community engagement.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <Card className="text-center">
                  <CardHeader>
                    <Heart className="mx-auto h-12 w-12 text-primary mb-4" />
                    <CardTitle>Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Integrity, Excellence, Innovation, Diversity, Collaboration, and Social Responsibility form the
                      core of our institutional culture.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={400}>
                <Card className="text-center">
                  <CardHeader>
                    <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
                    <CardTitle>Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Creating positive change in communities worldwide through our graduates, research, and
                      partnerships with organizations globally.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Leadership Team */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Meet the dedicated leaders who guide our institution toward excellence.
                </p>
              </div>
            </ScrollFadeUp>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ScrollFadeUp delay={100}>
                <Card>
                  <CardHeader className="text-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt="Dr. Emily Rodriguez"
                      className="mx-auto rounded-full mb-4"
                    />
                    <CardTitle>Dr. Emily Rodriguez</CardTitle>
                    <CardDescription>President</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Leading EduCollege with 20+ years of experience in higher education administration and a passion
                      for student success.
                    </p>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <Card>
                  <CardHeader className="text-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt="Dr. James Thompson"
                      className="mx-auto rounded-full mb-4"
                    />
                    <CardTitle>Dr. James Thompson</CardTitle>
                    <CardDescription>Vice President of Academics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Overseeing academic excellence and curriculum development with expertise in educational innovation
                      and faculty development.
                    </p>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <Card>
                  <CardHeader className="text-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt="Maria Santos"
                      className="mx-auto rounded-full mb-4"
                    />
                    <CardTitle>Maria Santos</CardTitle>
                    <CardDescription>Dean of Student Affairs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Dedicated to creating an inclusive campus environment that supports student growth, well-being,
                      and success.
                    </p>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Achievements */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Recognition and milestones that reflect our commitment to excellence.
                </p>
              </div>
            </ScrollFadeUp>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ScrollFadeUp delay={100}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-primary">Top 50</div>
                  <div className="text-sm text-muted-foreground">National College Ranking</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Student Satisfaction Rate</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-primary">$50M+</div>
                  <div className="text-sm text-muted-foreground">Research Funding</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={400}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-primary">85+</div>
                  <div className="text-sm text-muted-foreground">Countries Represented</div>
                </div>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>
    </div>
  )
}
