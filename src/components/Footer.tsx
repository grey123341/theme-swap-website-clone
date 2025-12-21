import { Mail, Phone, MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Research Assistant" className="h-10" />
              <div>
                <h1 className="text-xl font-bold text-foreground">RESEARCH</h1>
                <p className="text-sm text-primary font-semibold">ASSISTANT</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Professional academic services with 24/7 support. Get expert assistance for plagiarism removal, AI reports, and more.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plagiarism-removal" className="text-muted-foreground hover:text-primary transition-colors">
                  Plagiarism Removal
                </Link>
              </li>
              <li>
                <Link to="/plagiarism-report" className="text-muted-foreground hover:text-primary transition-colors">
                  Plagiarism Report
                </Link>
              </li>
              <li>
                <Link to="/ai-report" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Detection Report
                </Link>
              </li>
              <li>
                <Link to="/drillbit-report" className="text-muted-foreground hover:text-primary transition-colors">
                  Drillbit Report
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">Document Formatting</span>
              </li>
              <li>
                <span className="text-muted-foreground">Proofreading</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">help@researchassistant.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(+91)896-857-2273</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                  FAQ
                </span>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                  Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Research Assistant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Secure Payment</span>
              <span className="text-sm text-muted-foreground">100% Confidential</span>
              <span className="text-sm text-muted-foreground">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;