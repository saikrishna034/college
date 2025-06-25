import { Badge } from "@/components/ui/badge"

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Research
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Research & Innovation
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Advancing knowledge through cutting-edge research and fostering innovation across disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Research Focus Areas</h2>
            <p>
              Our college encourages research activities across various disciplines to contribute to the advancement of
              knowledge and society.
            </p>

            <h3>Current Research Projects</h3>
            <ul>
              <li>Environmental Science and Sustainability</li>
              <li>Computer Science and Artificial Intelligence</li>
              <li>Social Sciences and Community Development</li>
              <li>Mathematical Modeling and Applications</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
