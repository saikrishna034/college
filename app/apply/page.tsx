"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  GraduationCap,
  FileText,
  Sparkles,
  Phone,
  Mail,
  BookOpen,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollFadeUp from "@/components/scroll-fade-up"

interface FormData {
  // Essential Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: Date | undefined

  // Course & Academic
  course: string
  previousEducation: string
  percentage: string

  // Contact
  city: string
  state: string

  // Optional
  whyChooseUs: string
  termsAccepted: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: undefined,
  course: "",
  previousEducation: "",
  percentage: "",
  city: "",
  state: "",
  whyChooseUs: "",
  termsAccepted: false,
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [applicationId, setApplicationId] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [focusedField, setFocusedField] = useState<string>("")

  const courses = [
    { value: "bsc-cs", label: "BSC Computer Science", icon: "💻", popular: true },
    { value: "bcom-ca", label: "BCom Computer Applications", icon: "📊", popular: true },
    { value: "bsc-ai", label: "BSC AI & Computer Science", icon: "🤖", popular: true },
    { value: "ba-english", label: "BA English Literature", icon: "📚", popular: false },
    { value: "bcom-general", label: "BCom General", icon: "💼", popular: false },
    { value: "bsc-maths", label: "BSC Mathematics", icon: "🔢", popular: false },
  ]

  const states = [
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "Bihar",
  ]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits"
    if (!formData.course) newErrors.course = "Please select a course"
    if (!formData.previousEducation) newErrors.previousEducation = "Previous education is required"
    if (!formData.percentage.trim()) newErrors.percentage = "Percentage is required"
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value:any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const simulateBackendSubmission = async (): Promise<{ success: boolean; applicationId?: string; error?: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 2000 + Math.random() * 1000))
    const isSuccess = Math.random() > 0.05 // 95% success rate

    if (isSuccess) {
      const applicationId = `SVBDC${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`
      return { success: true, applicationId }
    } else {
      const errors = [
        "Email already exists in our system.",
        "Server temporarily unavailable. Please try again.",
        "Network timeout. Please check your connection.",
      ]
      return { success: false, error: errors[Math.floor(Math.random() * errors.length)] }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const result = await simulateBackendSubmission()

      if (result.success) {
        setApplicationId(result.applicationId!)
        setIsSubmitted(true)
      
      } else {
       
      }
    } catch {
      
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <ScrollFadeUp>
          <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-2xl mx-auto">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-4 h-4 text-secondary-foreground" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-primary">Welcome to SVBDC Family! 🎓</h1>
                  <p className="text-xl text-muted-foreground">Your application has been successfully submitted</p>
                </div>

                <Card className="w-full max-w-md bg-primary/5 border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-primary flex items-center justify-center space-x-2">
                      <Star className="w-5 h-5" />
                      <span>Application Confirmed</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-background rounded-lg p-4 border border-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Application ID:</span>
                        <Badge variant="secondary" className="font-mono text-sm">
                          {applicationId}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Course:</span>
                        <span className="text-sm font-medium">
                          {courses.find((c) => c.value === formData.course)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Badge className="bg-secondary text-secondary-foreground">Under Review</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg text-sm">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-primary">Email Sent</p>
                      <p className="text-muted-foreground text-xs">{formData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-primary">SMS Sent</p>
                      <p className="text-muted-foreground text-xs">{formData.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 w-full">
                  <h3 className="font-semibold text-lg mb-3 text-center text-primary">What&apos;s Next? 🚀</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <span>Our admissions team will review your application within 2-3 business days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <span>You&apos;ll receive an interview call if your application is shortlisted</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <span>Final admission confirmation will be sent via email and SMS</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.print()}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    📄 Print Confirmation
                  </Button>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData(initialFormData)
                      setApplicationId("")
                    }}
                    className="bg-primary hover:bg-primary/90"
                  >
                    ➕ Submit Another Application
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeUp>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollFadeUp>
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Admissions Open 2025
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-primary">
                Join SVBDC Today! 🎓
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Start your journey towards a bright future. Our simple application process takes just 2 minutes to
                complete.
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Quick & Easy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No Application Fee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeUp>

      {/* Application Form */}
      <ScrollFadeUp>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/30">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold flex items-center justify-center space-x-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <span>Application Form</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill in your details below to apply for admission
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <User className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField("")}
                          className={cn(
                            "transition-all duration-200",
                            errors.firstName ? "border-destructive bg-destructive/10" : "",
                            focusedField === "firstName" ? "ring-2 ring-primary/20 border-primary" : "",
                          )}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField("")}
                          className={cn(
                            "transition-all duration-200",
                            errors.lastName ? "border-destructive bg-destructive/10" : "",
                            focusedField === "lastName" ? "ring-2 ring-primary/20 border-primary" : "",
                          )}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          className={cn(
                            "transition-all duration-200",
                            errors.email ? "border-destructive bg-destructive/10" : "",
                            focusedField === "email" ? "ring-2 ring-primary/20 border-primary" : "",
                          )}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField("")}
                          className={cn(
                            "transition-all duration-200",
                            errors.phone ? "border-destructive bg-destructive/10" : "",
                            focusedField === "phone" ? "ring-2 ring-primary/20 border-primary" : "",
                          )}
                          placeholder="10-digit mobile number"
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Date of Birth</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal transition-all duration-200",
                                !formData.dateOfBirth && "text-muted-foreground",
                                focusedField === "dateOfBirth" ? "ring-2 ring-primary/20 border-primary" : "",
                              )}
                              onFocus={() => setFocusedField("dateOfBirth")}
                              onBlur={() => setFocusedField("")}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.dateOfBirth}
                              onSelect={(date) => handleInputChange("dateOfBirth", date )}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">City</Label>
                        <Input
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Your city"
                          className="transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">State</Label>
                        <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                          <SelectTrigger className="transition-all duration-200">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">Course Selection</h3>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-sm font-medium">Choose Your Course *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course) => (
                          <div
                            key={course.value}
                            className={cn(
                              "relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",
                              formData.course === course.value
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border hover:border-primary/50",
                            )}
                            onClick={() => handleInputChange("course", course.value)}
                          >
                            {course.popular && (
                              <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs">
                                Popular
                              </Badge>
                            )}
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{course.icon}</span>
                              <div>
                                <p className="font-medium text-sm">{course.label}</p>
                              </div>
                            </div>
                            <input
                              type="radio"
                              name="course"
                              value={course.value}
                              checked={formData.course === course.value}
                              onChange={() => handleInputChange("course", course.value)}
                              className="absolute top-2 right-2"
                            />
                          </div>
                        ))}
                      </div>
                      {errors.course && (
                        <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.course}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">Academic Background</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-sm font-medium">Previous Education *</Label>
                        <RadioGroup
                          value={formData.previousEducation}
                          onValueChange={(value) => handleInputChange("previousEducation", value)}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="12th" id="12th" />
                            <Label htmlFor="12th" className="cursor-pointer flex-1">
                              12th Standard / Intermediate
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="diploma" id="diploma" />
                            <Label htmlFor="diploma" className="cursor-pointer flex-1">
                              Diploma
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="graduation" id="graduation" />
                            <Label htmlFor="graduation" className="cursor-pointer flex-1">
                              Graduation
                            </Label>
                          </div>
                        </RadioGroup>
                        {errors.previousEducation && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.previousEducation}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="percentage" className="text-sm font-medium">
                          Percentage/CGPA *
                        </Label>
                        <Input
                          id="percentage"
                          value={formData.percentage}
                          onChange={(e) => handleInputChange("percentage", e.target.value)}
                          onFocus={() => setFocusedField("percentage")}
                          onBlur={() => setFocusedField("")}
                          className={cn(
                            "transition-all duration-200",
                            errors.percentage ? "border-destructive bg-destructive/10" : "",
                            focusedField === "percentage" ? "ring-2 ring-primary/20 border-primary" : "",
                          )}
                          placeholder="e.g., 85.5"
                        />
                        {errors.percentage && (
                          <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Optional Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-primary">Tell Us More (Optional)</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whyChooseUs" className="text-sm font-medium">
                        Why do you want to join SVBDC?
                      </Label>
                      <Textarea
                        id="whyChooseUs"
                        value={formData.whyChooseUs}
                        onChange={(e) => handleInputChange("whyChooseUs", e.target.value)}
                        placeholder="Share your motivation, goals, or what excites you about our college..."
                        className="min-h-[100px] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-6 pt-4 border-t">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                        I accept the{" "}
                        <a href="#" className="text-primary hover:underline font-medium">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline font-medium">
                          Privacy Policy
                        </a>
                        . I understand that submitting this application does not guarantee admission. *
                      </Label>
                    </div>
                    {errors.termsAccepted && (
                      <p className="text-sm text-destructive flex items-center animate-in slide-in-from-left-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.termsAccepted}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Your Application...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Submit My Application 🚀
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </ScrollFadeUp>
    </div>
  )
}
