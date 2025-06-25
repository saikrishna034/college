"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-4 group">
          <Image
            src="/images/collegelogo.png"
            alt="Sri Vignana Bharathi Degree College Logo"
            width={50}
            height={50}
            className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary leading-tight transition-colors duration-300 group-hover:text-primary/80">
              Sri Vignana Bharathi Degree College
            </span>
            <span className="text-xs text-muted-foreground leading-tight transition-colors duration-300 group-hover:text-muted-foreground/80">
              D.No.6/18 & 5-2, Pachapuram Kruttivennu, Krishna Dist.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 relative">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-base font-medium transition-all duration-300 ease-out rounded-lg group overflow-hidden ${isActive(item.href)
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>

              {/* Underline effect */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300 ease-out"></span>

              {/* Text */}
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 w-3/4 h-0.5 bg-primary transform -translate-x-1/2 animate-in slide-in-from-bottom-1 duration-300"></span>
              )}
            </Link>
          ))}

          {/* Separator */}
          <div className="w-px h-6 bg-border mx-2"></div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-md"></span>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 relative z-10" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 z-10" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Apply Now Button */}
          <Button
            size="sm"
            className="ml-2 relative overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            <span className="relative z-10">Apply Now</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-md"></span>
          <div className="relative z-10">
            <X
              className={`h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
            />
            <Menu
              className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
            />
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t bg-background/95 backdrop-blur transition-all duration-300 ease-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <nav className="container flex flex-col px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-3 text-base font-medium transition-all duration-300 ease-out rounded-lg group overflow-hidden ${isActive(item.href)
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              onClick={() => setIsMenuOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>

              {/* Left border effect */}
              <span className="absolute left-0 top-1/2 w-0 h-0 bg-primary transform -translate-y-1/2 group-hover:w-1 group-hover:h-3/4 transition-all duration-300 ease-out rounded-r"></span>

              {/* Text */}
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                {item.label}
              </span>

              {/* Active indicator */}
              {isActive(item.href) && (
                <span className="absolute left-0 top-1/2 w-1 h-3/4 bg-primary transform -translate-y-1/2 rounded-r animate-in slide-in-from-left-1 duration-300"></span>
              )}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-fit relative overflow-hidden group hover:bg-primary/10 transition-all duration-300 mt-4"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-md"></span>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 relative z-10 mr-2" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 z-10 left-3" />
            <span className="relative z-10 ml-6">Toggle Theme</span>
          </Button>

          {/* Mobile Apply Button */}
          <Button
            size="sm"
            className="w-fit mt-2 relative overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            <span className="relative z-10">Apply Now</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
