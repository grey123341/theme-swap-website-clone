import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, FileText, Users, Shield, Clock, Award, Drill } from "lucide-react";
import { Link } from "react-router-dom";

const DrillbitReport = () => {
  const [selectedService, setSelectedService] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("India");

  const services = [
    "Drillbit Analysis",
    "Deep Content Scan",
    "Advanced Similarity Check",
    "Multi-Database Search",
    "Content Integrity Assessment",
    "Comprehensive Report Generation"
  ];

  const keyFeatures = [
    "Deep drilling into content databases",
    "Advanced multi-source checking",
    "Comprehensive similarity analysis",
    "Professional detailed reporting",
    "Fast and accurate results",
    "Multiple format support"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RESEARCH</h1>
                <p className="text-sm text-primary font-semibold">EXPERTS</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Button asChild variant="ghost">
                <Link to="/plagiarism-removal">Plagiarism Removal</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/plagiarism-report">Plagiarism Report</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/ai-report">AI Report</Link>
              </Button>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/drillbit-report">Drillbit Report</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/about">About Us</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/my-account">My Account</Link>
              </Button>
            </nav>
            
            <div className="text-sm text-muted-foreground">
              help@researchexperts.in / (+91)896-857-2273
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section - Service Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Advanced Drillbit Analysis
              </Badge>
              
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Drillbit Deep Analysis Report
              </h2>
              
              <h3 className="text-xl font-semibold text-primary">
                Comprehensive Content Drilling & Analysis
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the most thorough content analysis with our Drillbit technology. We drill deep into multiple databases and sources to provide you with the most comprehensive similarity and content integrity report available in the market.
              </p>
              
              <div className="bg-gradient-primary p-6 rounded-lg shadow-elegant">
                <p className="text-center text-primary-foreground font-semibold text-lg">
                  Most comprehensive analysis available! Deep drilling technology for accurate results!
                </p>
              </div>
            </div>

            {/* Key Features */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Drill className="w-5 h-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Drill className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">Deep</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">Multi</div>
                <div className="text-sm text-muted-foreground">Database</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Thorough</div>
              </div>
            </div>
          </div>

          {/* Right Section - Upload Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Drillbit Report</CardTitle>
              <p className="text-muted-foreground">
                Upload your document for comprehensive drillbit analysis
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Choose Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pages" className="text-foreground">No. of Pages *</Label>
                  <Input
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="Pages"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-foreground">Document Language *</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="non-english">Non-English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-foreground">Choose File *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click this area to upload</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email ID *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First name *</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground">Country</Label>
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

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I have read the <span className="text-primary">Privacy Policy</span> and agree to the terms.
                </Label>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3">
                Get Drillbit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DrillbitReport;