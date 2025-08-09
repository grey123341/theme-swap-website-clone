import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, FileText, Users, Shield, Clock, Award, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { CaptchaModal } from "@/components/ui/captcha";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navigation from "@/components/Navigation";

const AIReport = () => {
  const [selectedService, setSelectedService] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("India");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const services = [
    "AI Content Detection",
    "GPT Detection Report",
    "ChatGPT Analysis",
    "AI Writing Assessment",
    "Human vs AI Analysis",
    "Content Authenticity Check"
  ];

  const keyFeatures = [
    "Advanced AI detection algorithms",
    "Comprehensive AI content analysis",
    "Detailed human vs AI breakdown",
    "Fast and accurate results",
    "Multiple AI model detection",
    "Professional AI assessment report"
  ];

  const handleSubmit = () => {
    setShowCaptcha(true);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', {
      selectedService,
      pages,
      language,
      email,
      firstName,
      lastName,
      phone,
      country,
      captchaToken
    });
    setShowCaptcha(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-20">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">AI Content Detection</h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI detection service to identify artificially generated content with precision and accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left Column - Features */}
            <div className="space-y-6 md:space-y-8">
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="px-4 md:px-6">
                  <CardTitle className="flex items-center gap-2 text-foreground text-lg md:text-xl">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Why Choose Our AI Detection?
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

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">99%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Accurate</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">Fast</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Results</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-foreground">Pro</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Analysis</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-xl md:text-2xl text-foreground">AI Content Detection Form</CardTitle>
                <p className="text-muted-foreground text-sm md:text-base">
                  Submit your content for comprehensive AI detection analysis
                </p>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm md:text-base">Choose Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue placeholder="Select AI detection service" />
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
                    <Label htmlFor="language" className="text-sm md:text-base">Content Language</Label>
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

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 md:py-3 text-sm md:text-base"
                >
                  Submit for AI Detection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection serviceType="ai-detection" />

      {/* Captcha Modal */}
      <CaptchaModal
        isOpen={showCaptcha}
        onClose={() => setShowCaptcha(false)}
        onVerify={handleFormSubmit}
      />
    </div>
  );
};

export default AIReport;