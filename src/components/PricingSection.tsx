import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, DollarSign } from "lucide-react";

interface PricingProps {
  serviceType: "plagiarism-report" | "ai-report" | "drillbit-report" | "plagiarism-removal";
}

const PricingSection = ({ serviceType }: PricingProps) => {
  const getPricingData = () => {
    switch (serviceType) {
      case "plagiarism-report":
        return {
          title: "Plagiarism Report Pricing",
          subtitle: "Affordable pricing based on document length",
          data: [
            { range: "0–3", inr: "₹60", usd: "$1" },
            { range: "4–6", inr: "₹80", usd: "$1" },
            { range: "7–10", inr: "₹100", usd: "$2" },
            { range: "11–15", inr: "₹120", usd: "$2" },
            { range: "16–20", inr: "₹140", usd: "$3" },
            { range: "21–40", inr: "₹160", usd: "$3" },
            { range: "41–70", inr: "₹220", usd: "$5" },
            { range: "71–100", inr: "₹240", usd: "$5" },
            { range: "101–150", inr: "₹260", usd: "$7" },
            { range: "150 plus", inr: "₹300", usd: "$7" }
          ],
          columns: ["No. of Pages", "INR (₹)", "USD ($)"]
        };
      
      case "ai-report":
        return {
          title: "AI Report Pricing",
          subtitle: "Competitive pricing for AI detection services",
          data: [
            { range: "0–3", inr: "₹80", usd: "$2" },
            { range: "4–6", inr: "₹100", usd: "$3" },
            { range: "7–10", inr: "₹120", usd: "$5" },
            { range: "11–15", inr: "₹140", usd: "$6" },
            { range: "16–20", inr: "₹160", usd: "$8" },
            { range: "21–40", inr: "₹180", usd: "$8" },
            { range: "41–70", inr: "₹200", usd: "$8" },
            { range: "71–100", inr: "₹220", usd: "$8" },
            { range: "101–150", inr: "₹240", usd: "$8" },
            { range: "150 plus", inr: "₹300", usd: "$8" }
          ],
          columns: ["Page Range", "INR (₹)", "USD ($)"]
        };
      
      case "drillbit-report":
        return {
          title: "Drillbit Report Pricing",
          subtitle: "Fixed pricing with AI enhancement",
          data: [
            { range: "Complete Report with AI", inr: "₹350", usd: "$4" }
          ],
          columns: ["Service", "INR (₹)", "USD ($)"]
        };
      
      case "plagiarism-removal":
        return {
          title: "Plagiarism Removal Pricing",
          subtitle: "Per page pricing based on plagiarism percentage",
          data: [
            { range: "71% plus", inr: "₹350", usd: "$4" },
            { range: "61–70%", inr: "₹240", usd: "$3" },
            { range: "51–60%", inr: "₹200", usd: "$2" },
            { range: "41–50%", inr: "₹150", usd: "$2" },
            { range: "31–40%", inr: "₹100", usd: "$1" },
            { range: "21–30%", inr: "₹80", usd: "$1" },
            { range: "11–20%", inr: "₹60", usd: "$1" }
          ],
          columns: ["Plagiarism (%)", "Cost (Per Page) (₹)", "Cost (Per Page) ($)"]
        };
      
      default:
        return { title: "", subtitle: "", data: [], columns: [] };
    }
  };

  const pricing = getPricingData();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">{pricing.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elegant border-border/50">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Pricing Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {pricing.columns.map((column, index) => (
                      <th key={index} className="text-left py-4 px-4 font-semibold text-foreground">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.data.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{row.range}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-foreground">
                          <IndianRupee className="w-4 h-4" />
                          <span className="font-semibold">{row.inr.replace('₹', '')}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-foreground">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">{row.usd.replace('$', '')}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            All prices are subject to change. Contact us for bulk discounts on large projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;