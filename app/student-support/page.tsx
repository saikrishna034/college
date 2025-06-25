import { Badge } from "@/components/ui/badge"

export default function StudentSupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Student Support
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Comprehensive Student Support
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dedicated support services to ensure every student's success and well-being throughout their academic
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Content */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="prose max-w-none">
            <h2>Student Support Services</h2>
            <p>We provide comprehensive support services to help students succeed academically and personally.</p>

            <h3>Available Support Services</h3>
            <ul>
              <li>Academic Counseling and Guidance</li>
              <li>Career Counseling and Placement Support</li>
              <li>Financial Aid and Scholarships</li>
              <li>Health and Wellness Services</li>
              <li>Student Activities and Clubs</li>
              <li>Mentorship Programs</li>
              <li>Grievance Redressal System</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
