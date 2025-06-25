import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Computer, TrendingUp, Brain } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import AnimatedCounter from "@/components/animated-counter"
import ScrollFadeUp from "@/components/scroll-fade-up"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Highlighted Stats Section with Dark Background */}
      <ScrollFadeUp>
        <section className="py-16 md:py-24 bg-gray-900 dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <ScrollFadeUp delay={100}>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <AnimatedCounter end={15000} suffix="+" />
                  <div className="text-sm text-gray-300 font-medium tracking-wide">Students Enrolled</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-sm text-gray-300 font-medium tracking-wide">Expert Faculty</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <AnimatedCounter end={50} suffix="+" />
                  <div className="text-sm text-gray-300 font-medium tracking-wide">Programs Offered</div>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={400}>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <AnimatedCounter end={95} suffix="%" />
                  <div className="text-sm text-gray-300 font-medium tracking-wide">Graduate Success Rate</div>
                </div>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Courses Offered Section */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Courses Offered</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover our specialized programs designed for the digital future.
                  </p>
                </div>
              </div>
            </ScrollFadeUp>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* BSC Computers */}
              <ScrollFadeUp delay={100}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:z-10 cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/bsccomputers.webp"
                      alt="BSC Computers background"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
                    {/* Highlight border on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400 transition-all duration-500 rounded-lg"></div>
                  </div>
                  <CardContent className="relative z-10 p-6 h-64 flex flex-col justify-end text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <Computer className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      <h3 className="text-xl font-bold group-hover:text-blue-100 transition-colors duration-300">
                        BSC Computers
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Master the fundamentals of computer science with hands-on programming, software development, and
                      system design for a thriving tech career.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-fit border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg"
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </ScrollFadeUp>

              {/* BCom Computer */}
              <ScrollFadeUp delay={200}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:z-10 cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/bcomcomputers.webp"
                      alt="BCom Computer background"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
                    {/* Highlight border on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-400 transition-all duration-500 rounded-lg"></div>
                  </div>
                  <CardContent className="relative z-10 p-6 h-64 flex flex-col justify-end text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                      <h3 className="text-xl font-bold group-hover:text-green-100 transition-colors duration-300">
                        BCom Computer
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Blend business acumen with computer applications, preparing for roles in digital commerce,
                      financial technology, and business analytics.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-fit border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg"
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </ScrollFadeUp>

              {/* BSC AI Computers */}
              <ScrollFadeUp delay={300}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:z-10 cursor-pointer md:col-span-2 lg:col-span-1">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/bscaicomputers.webp"
                      alt="BSC AI Computers background"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-500"></div>
                    {/* Highlight border on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-400 transition-all duration-500 rounded-lg"></div>
                  </div>
                  <CardContent className="relative z-10 p-6 h-64 flex flex-col justify-end text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      <h3 className="text-xl font-bold group-hover:text-purple-100 transition-colors duration-300">
                        BSC AI Computers
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Dive into artificial intelligence, machine learning, and data science to shape the future of
                      technology and innovation.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-fit border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg"
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
            </div>

            {/* Call to Action */}
            <ScrollFadeUp delay={400}>
              <div className="text-center mt-12">
                <Button size="lg" className="px-8">
                  View All Courses
                </Button>
              </div>
            </ScrollFadeUp>
          </div>
        </section>
      </ScrollFadeUp>

      {/* News & Events */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollFadeUp>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest News & Events</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay updated with the latest happenings on campus.
                  </p>
                </div>
              </div>
            </ScrollFadeUp>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <ScrollFadeUp delay={100}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <CardTitle>Spring Semester Registration Opens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Registration for Spring 2025 semester is now open. Don't miss out on your preferred courses!
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 20, 2024</span>
                    </div>
                    <CardTitle>Annual Science Fair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Join us for our annual science fair showcasing innovative projects from our students.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
              <ScrollFadeUp delay={300}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 5, 2025</span>
                    </div>
                    <CardTitle>New Library Wing Opening</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our state-of-the-art library extension opens with modern study spaces and digital resources.
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* CTA Section */}
      <ScrollFadeUp>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollFadeUp>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take the first step towards your future. Apply now and join our community of learners.
                  </p>
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={200}>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Apply Now</Button>
                  <Button variant="outline" size="lg">
                    Schedule a Visit
                  </Button>
                </div>
              </ScrollFadeUp>
            </div>
          </div>
        </section>
      </ScrollFadeUp>
    </div>
  )
}
