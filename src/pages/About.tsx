import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Award, Target, Heart, Star, Clock, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      expertise: "PhD in Literature, 15+ years experience",
      description: "Specializes in plagiarism detection and academic integrity"
    },
    {
      name: "Dr. Michael Chen",
      role: "Lead Research Expert", 
      expertise: "PhD in Computer Science, AI specialist",
      description: "Expert in AI detection and document analysis"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Quality Assurance Head",
      expertise: "PhD in Education, 12+ years experience", 
      description: "Ensures highest quality standards in all deliverables"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate results with meticulous attention to detail"
    },
    {
      icon: Heart,
      title: "Integrity", 
      description: "Academic honesty and ethical practices are at our core"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with students to achieve their academic goals"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality academic services"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Students Helped" },
    { number: "27+", label: "PhD Experts" },
    { number: "99.5%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
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
              <Button asChild variant="ghost">
                <Link to="/drillbit-report">Drillbit Report</Link>
              </Button>
              <Button asChild variant="ghost" className="text-primary">
                <Link to="/about">About Us</Link>
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
        
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            About Research Experts
          </Badge>
          
          <h1 className="text-5xl font-bold text-foreground leading-tight">
            Leading Academic 
            <span className="text-primary"> Excellence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, Research Experts has been the trusted partner for students worldwide, 
            providing professional academic services with unmatched quality and reliability.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card key={index} className="text-center shadow-elegant border-border/50">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2014, Research Experts began with a simple mission: to help students 
                achieve academic success through professional, ethical, and reliable academic services.
              </p>
              <p>
                What started as a small team of PhD scholars has grown into a comprehensive 
                academic support platform, serving thousands of students across the globe.
              </p>
              <p>
                Today, we pride ourselves on being the most trusted name in academic integrity 
                services, plagiarism removal, and research assistance.
              </p>
            </div>
          </div>
          
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-primary" />
                Why Choose Us?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "27+ PhD experts with specialized knowledge",
                "24/7 customer support and assistance", 
                "100% confidential and secure processes",
                "Fastest delivery with quality assurance",
                "Affordable pricing with no hidden costs",
                "Unlimited revisions until satisfaction"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every service we provide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-elegant border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your academic success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-elegant border-border/50">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground font-medium">{member.expertise}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Guarantee */}
        <Card className="shadow-elegant border-border/50 bg-gradient-primary/5">
          <CardContent className="pt-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              <h2 className="text-3xl font-bold text-foreground">Our Commitment to You</h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We guarantee 100% satisfaction with our services. Your academic success is our priority, 
                and we stand behind every piece of work we deliver with confidence and integrity.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold">100% Confidential</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold">On-Time Delivery</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold">Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;