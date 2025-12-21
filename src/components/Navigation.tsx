import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { href: "/plagiarism-report", label: "Plagiarism Report" },
    { href: "/plagiarism-removal", label: "Plagiarism Removal" },
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
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Research Assistant" className="h-12" />
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
          
          {/* <div className="text-sm text-muted-foreground">
            help@researchassistant.in / (+91)896-857-2273
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;