import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { href: "/plagiarism-removal", label: "Plagiarism Removal" },
    { href: "/plagiarism-report", label: "Plagiarism Report" },
    { href: "/ai-report", label: "AI Report" },
    { href: "/drillbit-report", label: "Drillbit Report" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">RESEARCH</h1>
              <p className="text-sm text-primary font-semibold">ASSISTANT</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={`transition-all duration-300 hover:bg-primary/10 hover:text-primary relative group ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <Link to={item.href} className="relative px-4 py-2">
                  {item.label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </Button>
            ))}
          </nav>
          
          <div className="text-sm text-muted-foreground">
            help@researchassistant.in / (+91)896-857-2273
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;