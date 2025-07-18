import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$15",
      period: "per page",
      description: "Perfect for small documents",
      features: [
        "Basic plagiarism check",
        "48-hour delivery",
        "Email support",
        "Standard report format",
        "Single revision"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$25",
      period: "per page", 
      description: "Most popular choice",
      features: [
        "Advanced plagiarism removal",
        "24-hour delivery",
        "Priority support",
        "Detailed report",
        "Unlimited revisions",
        "Quality guarantee"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$35",
      period: "per page",
      description: "For urgent requirements",
      features: [
        "Expert-level service",
        "30-minute delivery",
        "24/7 phone support",
        "Comprehensive analysis",
        "Unlimited revisions",
        "Money-back guarantee",
        "Personal project manager"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our quality guarantee and professional support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300 ${
                plan.popular ? 'border-primary/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold py-3 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground' 
                      : 'bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom quote for bulk orders?
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;