import { Badge } from "@/components/ui/badge"

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Infrastructure
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                World-Class Infrastructure
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                State-of-the-art facilities designed to provide an optimal learning environment for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Content */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Campus Facilities</h2>
            <p>Our campus is equipped with modern facilities to support academic excellence and student life.</p>

            <h3>Key Facilities</h3>
            <ul>
              <li>Modern Classrooms with Smart Boards</li>
              <li>Well-equipped Laboratories</li>
              <li>Digital Library with Online Resources</li>
              <li>Computer Labs with Latest Technology</li>
              <li>Sports Complex and Gymnasium</li>
              <li>Auditorium and Seminar Halls</li>
              <li>Cafeteria and Recreation Areas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
