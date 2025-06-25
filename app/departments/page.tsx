import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Department of English",
      description: "Literature, Language, and Communication Studies",
      faculty: "12 Faculty Members",
    },
    {
      name: "Department of Mathematics",
      description: "Pure and Applied Mathematics",
      faculty: "8 Faculty Members",
    },
    {
      name: "Department of Physics",
      description: "Theoretical and Experimental Physics",
      faculty: "10 Faculty Members",
    },
    {
      name: "Department of Chemistry",
      description: "Organic, Inorganic, and Physical Chemistry",
      faculty: "9 Faculty Members",
    },
    {
      name: "Department of Commerce",
      description: "Business Studies and Commerce",
      faculty: "15 Faculty Members",
    },
    {
      name: "Department of Computer Science",
      description: "Programming, Software Development, and IT",
      faculty: "11 Faculty Members",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Departments
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Academic Departments</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our diverse academic departments, each dedicated to excellence in teaching and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dept.faculty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
