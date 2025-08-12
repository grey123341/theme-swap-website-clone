import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, Users, Shield, Clock, Award } from "lucide-react";
import { CaptchaModal } from "@/components/ui/captcha";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navigation from "@/components/Navigation";

const PlagiarismRemoval = () => {
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
    "No softwares are used to reduce the Plagiarism"
  ];

  const handleSubmit = () => {
    setShowCaptcha(true);
  };

  const handleFormSubmit = () => {
    // Handle actual form submission here
    console.log("Form submitted with captcha verification");
    setShowCaptcha(false);
    setCaptchaToken(null);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          
          {/* Left Section - Service Description */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
                Manual Plagiarism Removal
              </Badge>
              
              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                Manual Plagiarism Removal
              </h2>
              
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Struggling with a high plagiarism score? Don't let plagiarism stand in the way of your academic success! Our team of 27 PhD experts specializes in reducing plagiarism to less than 10%.
              </p>
              
              <div className="bg-gradient-primary p-4 md:p-6 rounded-lg shadow-elegant">
                <p className="text-center text-primary-foreground font-semibold text-sm md:text-lg">
                  Now with up to 20% Concession! Same-day project delivery is available!
                </p>
              </div>
            </div>

            {/* Key Features */}
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
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">27+</div>
                <div className="text-xs md:text-sm text-muted-foreground">PhD Experts</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">&lt;10%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Plagiarism</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">24h</div>
                <div className="text-xs md:text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Section - Upload Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl text-foreground">Upload Your Document</CardTitle>
              <p className="text-muted-foreground text-sm md:text-base">
                Add your project (docx, doc, pdf file/s) to receive your quotation mail
              </p>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground text-sm md:text-base">Choose Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue placeholder="Choose a service" />
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
                
                <div className="space-y-2">
                  <Label htmlFor="pages" className="text-foreground text-sm md:text-base">No. of Pages *</Label>
                  <Input
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="Pages"
                    className="text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-foreground text-sm md:text-base">Document Language *</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue placeholder="Choose Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english" className="text-sm md:text-base">English</SelectItem>
                      <SelectItem value="non-english" className="text-sm md:text-base">Non-English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-foreground text-sm md:text-base">Choose File *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-3 md:p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground mx-auto mb-1 md:mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground">Click this area to upload</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm md:text-base">Email ID *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="text-sm md:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground text-sm md:text-base">First name *</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="text-sm md:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground text-sm md:text-base">Last name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground text-sm md:text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="text-sm md:text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground text-sm md:text-base">Country</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="text-sm md:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India" className="text-sm md:text-base">India</SelectItem>
                      <SelectItem value="United States" className="text-sm md:text-base">United States</SelectItem>
                      <SelectItem value="United Kingdom" className="text-sm md:text-base">United Kingdom</SelectItem>
                      <SelectItem value="Canada" className="text-sm md:text-base">Canada</SelectItem>
                      <SelectItem value="Australia" className="text-sm md:text-base">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs md:text-sm text-muted-foreground">
                  I have read the <span className="text-primary">Privacy Policy</span> and agree to the terms.
                </Label>
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-2 md:py-3 text-sm md:text-base"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <CaptchaModal
        isOpen={showCaptcha}
        onClose={() => setShowCaptcha(false)}
        onVerify={setCaptchaToken}
        onSubmit={handleFormSubmit}
      />
      
      <FeaturesSection />
      <PricingSection serviceType="plagiarism-removal" />
    </div>
  );
};

export default PlagiarismRemoval;