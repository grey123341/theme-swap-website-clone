import { useState } from "react";
import axios from "axios";
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

const PlagiarismReport = () => {
  const [selectedService, setSelectedService] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("India");
  const [file, setFile] = useState<File | null>(null);
  const [privacy, setPrivacy] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const services = [
    "Plagiarism Check",
    "Turnitin Report",
    "Similarity Report",
    "Academic Integrity Check",
    "Citation Analysis",
    "Reference Verification"
  ];

  const keyFeatures = [
    "Detailed Turnitin plagiarism report",
    "24*7 availability for urgent requests",
    "Professional academic experts",
    "Confidential and secure process",
    "Fastest 30-minute delivery",
    "Comprehensive similarity analysis"
  ];

  // --------------------- VALIDATION ---------------------
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!selectedService.trim()) newErrors.selectedService = "Please choose a service.";
    if (!pages.trim() || isNaN(Number(pages)) || Number(pages) <= 0)
      newErrors.pages = "Please enter a valid number of pages.";
    if (!language.trim()) newErrors.language = "Please select the document language.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (!firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!phone.trim() || !/^\+?\d{7,15}$/.test(phone))
      newErrors.phone = "Please enter a valid phone number (7–15 digits).";
    if (!file) newErrors.file = "Please upload your document file.";
    if (!privacy) newErrors.privacy = "You must agree to the Privacy Policy.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setShowCaptcha(true);
  };

  const handleFormSubmit = async () => {
    try {
      const data = new FormData();
      data.append("service", selectedService);
      data.append("pages", pages);
      data.append("language", language);
      data.append("email", email);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("phone", phone);
      data.append("country", country);
      data.append("privacy", privacy.toString());
      if (file) data.append("file", file);

      await axios.post("http://localhost:5000/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Data submitted successfully!");
      setShowCaptcha(false);
      setCaptchaToken(null);
    } catch (error) {
      console.error(error);
      alert("Failed to submit data!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
                24*7 Plagiarism Report
              </Badge>

              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                24*7 Plagiarism Report
              </h2>

              <h3 className="text-lg md:text-xl font-semibold text-primary">
                Plagiarism Check Report Cheapest Price
              </h3>

              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Get instant and comprehensive plagiarism reports with our professional Turnitin checking service. 
                Our experts provide detailed similarity reports to ensure your academic integrity and help you 
                understand exactly where improvements are needed.
              </p>

              <div className="bg-gradient-primary p-4 md:p-6 rounded-lg shadow-elegant">
                <p className="text-center text-primary-foreground font-semibold text-sm md:text-lg">
                  Fastest delivery in just 30 minutes! Available 24/7 for your urgent needs!
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
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">24*7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Available</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">30min</div>
                <div className="text-xs md:text-sm text-muted-foreground">Fastest</div>
              </div>
              <div className="text-center space-y-1 md:space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Confidential</div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl text-foreground">Get Plagiarism Report</CardTitle>
              <p className="text-muted-foreground text-sm md:text-base">
                Upload your document to receive a detailed plagiarism report
              </p>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
              {/* Service & Pages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm md:text-base">Choose Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className={`text-sm md:text-base ${errors.selectedService ? "border-red-500" : ""}`}>
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
                  {errors.selectedService && (
                    <p className="text-red-500 text-xs md:text-sm">{errors.selectedService}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pages" className="text-sm md:text-base">No. of Pages *</Label>
                  <Input
                    id="pages"
                    type="number"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="Pages"
                    className={`text-sm md:text-base ${errors.pages ? "border-red-500" : ""}`}
                  />
                  {errors.pages && <p className="text-red-500 text-xs md:text-sm">{errors.pages}</p>}
                </div>
              </div>

              {/* Language & File */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Document Language *</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className={errors.language ? "border-red-500" : ""}>
                      <SelectValue placeholder="Choose Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="non-english">Non-English</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Choose File *</Label>
                  <div className={`border-2 border-dashed p-4 text-center ${errors.file ? "border-red-500" : "border-border"}`}>
                    <input
                      type="file"
                      id="file"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    <label htmlFor="file" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-6 h-6 mb-2" />
                      <p className="text-sm">Click to choose a file</p>
                    </label>
                    {file && <p className="text-sm text-green-600 mt-2">{file.name}</p>}
                  </div>
                  {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
                </div>
              </div>

              {/* Email & Name */}
              <div className="space-y-2">
                <Label htmlFor="email">Email ID *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Phone & Country */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" checked={privacy} onCheckedChange={(checked) => setPrivacy(checked === true)} />
                <Label htmlFor="terms" className="text-xs md:text-sm leading-tight">
                  I agree to the <span className="text-primary">Privacy Policy</span> and agree to the terms.
                </Label>
              </div>
              {errors.privacy && <p className="text-red-500 text-xs md:text-sm">{errors.privacy}</p>}

              <Button
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={!privacy}
              >
                Get Report
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
      <PricingSection serviceType="plagiarism-report" />
    </div>
  );
};

export default PlagiarismReport;
