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
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            {pricing.title}
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            {pricing.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="group bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
              <CardTitle className="text-center text-2xl font-bold text-foreground">
                Pricing Overview
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 relative z-10">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border/30 bg-gradient-to-r from-muted/50 to-muted/30">
                      <th className="text-left py-4 px-6 font-bold text-foreground text-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {pricing.columns[0]}
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 font-bold text-foreground text-lg">
                        {pricing.columns[1]}
                      </th>
                      <th className="text-center py-4 px-6 font-bold text-foreground text-lg">
                        {pricing.columns[2]}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {pricing.data.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300"
                      >
                        {/* Column 1: Range */}
                        <td className="py-4 px-6 text-foreground font-semibold text-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary/60 to-primary"></div>
                            {row.range}
                          </div>
                        </td>

                        {/* Column 2: INR */}
                        <td className="py-4 px-6 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                            <IndianRupee className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="font-bold text-lg text-emerald-700 dark:text-emerald-300">
                              {row.inr.replace('₹', '')}
                            </span>
                          </div>
                        </td>

                        {/* Column 3: USD */}
                        <td className="py-4 px-6 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                            <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="font-bold text-lg text-blue-700 dark:text-blue-300">
                              {row.usd.replace('$', '')}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 py-4">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
            <p className="text-muted-foreground font-medium">
              All prices are subject to change. Contact us for bulk discounts on large projects.
            </p>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;