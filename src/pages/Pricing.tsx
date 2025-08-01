import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, DollarSign, FileText, Bot, Drill, Shield, Zap, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Pricing = () => {
  const services = [
    {
      title: "Plagiarism Report",
      description: "Comprehensive plagiarism detection with detailed Turnitin reports",
      icon: <FileText className="w-8 h-8 text-primary" />,
      features: ["24*7 availability", "30-minute delivery", "Detailed analysis", "100% confidential"],
      pricing: [
        { range: "0–3", inr: 60, usd: 1 },
        { range: "4–6", inr: 80, usd: 1 },
        { range: "7–10", inr: 100, usd: 2 },
        { range: "11–15", inr: 120, usd: 2 },
        { range: "16–20", inr: 140, usd: 3 },
        { range: "21–40", inr: 160, usd: 3 },
        { range: "41–70", inr: 220, usd: 5 },
        { range: "71–100", inr: 240, usd: 5 },
        { range: "101–150", inr: 260, usd: 7 },
        { range: "150+", inr: 300, usd: 7 }
      ],
      unitLabel: "Pages"
    },
    {
      title: "AI Detection Report",
      description: "Advanced AI content detection using latest algorithms",
      icon: <Bot className="w-8 h-8 text-primary" />,
      features: ["Multi-AI detection", "99% accuracy", "Fast results", "Detailed breakdown"],
      pricing: [
        { range: "0–3", inr: 80, usd: 2 },
        { range: "4–6", inr: 100, usd: 3 },
        { range: "7–10", inr: 120, usd: 5 },
        { range: "11–15", inr: 140, usd: 6 },
        { range: "16–20", inr: 160, usd: 8 },
        { range: "21–40", inr: 180, usd: 8 },
        { range: "41–70", inr: 200, usd: 8 },
        { range: "71–100", inr: 220, usd: 8 },
        { range: "101–150", inr: 240, usd: 8 },
        { range: "150+", inr: 300, usd: 8 }
      ],
      unitLabel: "Pages"
    },
    {
      title: "Drillbit Report",
      description: "Deep analysis with comprehensive multi-database scanning",
      icon: <Drill className="w-8 h-8 text-primary" />,
      features: ["Deep scanning", "Multi-database", "AI enhanced", "Thorough analysis"],
      pricing: [
        { range: "Complete Report", inr: 350, usd: 4 }
      ],
      unitLabel: "Service"
    },
    {
      title: "Plagiarism Removal",
      description: "Manual plagiarism reduction by PhD experts",
      icon: <Shield className="w-8 h-8 text-primary" />,
      features: ["Manual editing", "PhD experts", "<10% plagiarism", "Same-day delivery"],
      pricing: [
        { range: "11–20%", inr: 60, usd: 1 },
        { range: "21–30%", inr: 80, usd: 1 },
        { range: "31–40%", inr: 100, usd: 1 },
        { range: "41–50%", inr: 150, usd: 2 },
        { range: "51–60%", inr: 200, usd: 2 },
        { range: "61–70%", inr: 240, usd: 3 },
        { range: "71%+", inr: 350, usd: 4 }
      ],
      unitLabel: "Plagiarism %"
    },
    {
      title: "Combined AI + Plagiarism Report",
      description: "Complete package with both AI detection and plagiarism checking",
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: ["Best value", "Complete analysis", "Dual reports", "Save money"],
      pricing: [
        { range: "0–15", inr: 350, usd: 5 },
        { range: "16–40", inr: 400, usd: 6 },
        { range: "41–100", inr: 450, usd: 7 },
        { range: "101–150", inr: 500, usd: 8 },
        { range: "150+", inr: 550, usd: 8 }
      ],
      unitLabel: "Pages",
      isPopular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
            Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Fair Pricing
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive range of academic services with transparent pricing. 
            No hidden fees, no surprises - just honest rates for quality work.
          </p>
          
          <div className="bg-gradient-primary p-6 rounded-lg shadow-elegant max-w-2xl mx-auto">
            <p className="text-center text-primary-foreground font-semibold text-lg">
              🎉 Special Offer: Up to 20% discount available! Same-day delivery for urgent projects!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`shadow-elegant border-border/50 relative ${
                  service.isPopular ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                }`}
              >
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-foreground mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing Table */}
                  <div className="border border-border rounded-lg overflow-hidden">
                    <div className="bg-muted/50 p-3 border-b border-border">
                      <h4 className="font-semibold text-foreground text-center">
                        {service.unitLabel} - Pricing
                      </h4>
                    </div>
                    
                    <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                      {service.pricing.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                          <span className="text-sm font-medium text-foreground">{price.range}</span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <IndianRupee className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm font-semibold text-foreground">{price.inr}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm font-semibold text-foreground">{price.usd}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full font-semibold py-3 ${
                      service.isPopular 
                        ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground' 
                        : 'bg-gradient-primary hover:opacity-90 text-primary-foreground'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Services?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">100% Confidential</h3>
                <p className="text-sm text-muted-foreground">Your documents and data are completely secure with us</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround times, even same-day delivery available</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Expert PhD professionals ensure top-quality results</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              Have questions about our pricing? Need a custom quote for bulk orders?
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Contact Us for Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;