import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Globe, Database, FileText, FileCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Get Report Within 30 Minutes",
      description: "30 min",
      highlight: "FASTEST"
    },
    {
      icon: Shield,
      title: "Privacy Guaranteed",
      description: "100% Secure",
      highlight: "SECURE"
    },
    {
      icon: Globe,
      title: "World-Wide Accepted Plagiarism Report",
      description: "Globally Recognized",
      highlight: "TRUSTED"
    },
    {
      icon: Database,
      title: "No Repository",
      description: "Data Protection",
      highlight: "PRIVATE"
    },
    {
      icon: FileText,
      title: "Multiple File Formats",
      description: "All Formats Supported",
      highlight: "FLEXIBLE"
    },
    {
      icon: FileCheck,
      title: "Highlighted Content with The Sources Mentioned Below",
      description: "Detailed Analysis",
      highlight: "PRECISE"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-12 md:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
          <div className="inline-block">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4">
              <span className="text-white/90 font-medium text-xs md:text-sm tracking-wide">✨ PREMIUM FEATURES</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Ensure Academic Excellence with 
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Reliable Plagiarism Reports
            </span>
          </h2>
          
          <p className="text-sm md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            We at Research Experts provides <span className="font-semibold text-white">100% authentic</span> and genuine plagiarism reports within 
            <span className="font-semibold text-white"> 30 minutes</span>. We use 100% authentic software to generate our reports
            at very affordable prices. Our reports are 100% valid and genuine, and we offer a 
            <span className="font-semibold text-white"> satisfaction guarantee</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-3 z-20">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {feature.highlight}
                </div>
              </div>
              
              <Card className="relative bg-white/95 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group-hover:-translate-y-2 overflow-hidden h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <CardContent className="relative p-4 md:p-8 text-center space-y-4 md:space-y-6 h-full flex flex-col justify-center">
                  {/* Icon Container with Animation */}
                  <div className="relative mx-auto">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-blue-300 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  
                  {/* Title with Animation */}
                  <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="space-y-2">
                    <p className="text-blue-600 font-bold text-base md:text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Progress bar animation */}
                    <div className="w-full bg-blue-100 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm md:text-lg">
              Over 10,000+ Reports Delivered Successfully
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;