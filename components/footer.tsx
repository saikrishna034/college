import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/collegelogo.png"
                alt="Sri Vignana Bharathi Degree College Logo"
                width={32}
                height={32}
                className="h-11 w-11 object-contain"
              />
              <h3 className="text-lg font-semibold">Sri Vignana Bharathi Degree College</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with quality education and innovative learning experiences since 1985.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/programs" className="block text-sm text-muted-foreground hover:text-primary">
                Programs
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Admissions
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Student Life
              </Link>
            </div>
          </div>

          {/* Academic */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Academic</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Academic Calendar
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Library
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Research
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Faculty
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Online Learning
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  123 Education Street
                  <br />
                  Knowledge City, KC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@svbdegreecollege.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sri Vignana Bharathi Degree College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
