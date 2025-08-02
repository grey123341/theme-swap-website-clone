import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bounce, setBounce] = useState(true);

  const whatsappNumber = "+919251614";
  const defaultMessage = "Hi! I need help with your academic services.";

  // Stop bounce after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setBounce(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Play sound and open WhatsApp
  const openWhatsApp = () => {
    const audio = new Audio("/click-sound.mp3");
    audio.play();
    const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  // Play sound when floating widget is clicked (open/close)
  const handleWidgetClick = () => {
    const audio = new Audio("/click-sound.mp3");
    audio.play();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {isOpen && (
            <Card className="absolute bottom-16 right-0 w-80 shadow-2xl border-border/50 bg-background/95 backdrop-blur-sm animate-in slide-in-from-bottom-2">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Research Assistant</h3>
                      <p className="text-sm text-green-500 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Online
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="space-y-3 mb-4">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-foreground">👋 Hi there! How can we help you today?</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-foreground">Get instant help with:</p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Plagiarism Reports</li>
                      <li>• AI Detection</li>
                      <li>• Academic Services</li>
                      <li>• Pricing Questions</li>
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(`tel:${whatsappNumber}`, "_self")}
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Floating Button */}
          <Button
            onClick={handleWidgetClick}
            className={`relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              bounce ? "animate-bounce" : ""
            }`}
            size="icon"
          >
            {isOpen ? <X className="w-6 h-6" /> : <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />}
            {!isOpen && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">1</span>
              </div>
            )}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppWidget;
