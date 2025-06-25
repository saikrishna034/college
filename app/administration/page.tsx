import { Badge } from "@/components/ui/badge"

export default function AdministrationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Administration
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                College Administration
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet our dedicated administrative team committed to providing excellent educational services and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Administrative Structure</h2>
            <p>
              Our administration is structured to ensure efficient management and delivery of educational services. The
              administrative team works closely with faculty and staff to maintain the highest standards of education.
            </p>

            <h3>Key Administrative Positions</h3>
            <ul>
              <li>Principal</li>
              <li>Vice Principal</li>
              <li>Academic Coordinator</li>
              <li>Administrative Officer</li>
              <li>Finance Officer</li>
              <li>Student Affairs Officer</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
