import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, FileText, Users, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { CaptchaModal } from "@/components/ui/captcha";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navigation from "@/components/Navigation";
import { useFormSubmission } from "@/hooks/useFormSubmission";

const Index = () => {
  const [selectedService, setSelectedService] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("India");
  const [file, setFile] = useState<File | null>(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { submitForm, isSubmitting } = useFormSubmission();

  const services = [
    "Plagiarism Check",
    "AI Report", 
    "Drillbit Report",
    "Plagiarism Removal",
    "AI Reduction",
    "Document Formatting",
    "Proofreading",
    "Grammar Correction",
    "Presentation Making",
    "Citation Formatting"
  ];

  const keyFeatures = [
    "Choose your desired deadline",
    "Experts with years of Experience", 
    "No data will be stored in the repository",
    "Plagiarism Report after the work is done",
    "No softwares are used to reduce the Plagiarism",
    "Quick turnaround time within 24 hours"
  ];

  const handleSubmit = () => {
    setShowCaptcha(true);
  };

  const handleFormSubmit = async () => {
    if (!captchaToken) return;
    
    const formData = {
      type: selectedService || "general",
      email,
      file: file || undefined,
      captchaToken
    };

    try {
      await submitForm(formData);
      setShowCaptcha(false);
      // Reset form
      setSelectedService("");
      setPages("");
      setLanguage("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setCountry("India");
      setFile(null);
      setCaptchaToken(null);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-8 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
              Professional Academic Services
            </Badge>
            
            <h1 className="text-2xl md:text-5xl font-bold text-foreground leading-tight">
              Research Assistant - Your Academic Success Partner
            </h1>
            
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get expert help with plagiarism checking, AI detection, academic writing, and research assistance. 
              Professional quality guaranteed with 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                <Link to="/plagiarism-report">Get Started</Link>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Form */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left Column - Features */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Why Choose Research Assistant?
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground">
                  We provide comprehensive academic support services with professional expertise and guaranteed quality.
                </p>
              </div>

              <Card className="shadow-elegant border-border/50">
                <CardHeader className="px-4 md:px-6">
                  <CardTitle className="flex items-center gap-2 text-foreground text-lg md:text-xl">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4 px-4 md:px-6">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Experts</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Quality</div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Service Form */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-xl md:text-2xl text-foreground">Quick Service Request</CardTitle>
                <p className="text-muted-foreground text-sm md:text-base">
                  Get started with our academic services
                </p>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm md:text-base">Choose Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-sm md:text-base">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pages and Language */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pages" className="text-sm md:text-base">Number of Pages</Label>
                    <Input
                      id="pages"
                      type="number"
                      placeholder="Pages"
                      value={pages}
                      onChange={(e) => setPages(e.target.value)}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-sm md:text-base">Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="text-sm md:text-base">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english" className="text-sm md:text-base">English</SelectItem>
                        <SelectItem value="spanish" className="text-sm md:text-base">Spanish</SelectItem>
                        <SelectItem value="french" className="text-sm md:text-base">French</SelectItem>
                        <SelectItem value="german" className="text-sm md:text-base">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm md:text-base">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm md:text-base">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Country Selection */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm md:text-base">Country</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India" className="text-sm md:text-base">India</SelectItem>
                      <SelectItem value="USA" className="text-sm md:text-base">USA</SelectItem>
                      <SelectItem value="UK" className="text-sm md:text-base">UK</SelectItem>
                      <SelectItem value="Canada" className="text-sm md:text-base">Canada</SelectItem>
                      <SelectItem value="Australia" className="text-sm md:text-base">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-sm md:text-base">Upload Document (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" />
                    <div className="mt-2 md:mt-4">
                      <Label htmlFor="file-upload" className="cursor-pointer">
                        <span className="mt-2 block text-xs md:text-sm font-medium text-primary">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</span>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                          className="hidden"
                        />
                      </Label>
                    </div>
                    {file && (
                      <div className="mt-2 flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">{file.name}</Badge>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 md:py-3 text-sm md:text-base"
                >
                  {isSubmitting ? "Submitting..." : "Get Quote"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection serviceType="general" />

      {/* Captcha Modal */}
      <CaptchaModal
        isOpen={showCaptcha}
        onClose={() => setShowCaptcha(false)}
        onVerify={setCaptchaToken}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Index;