import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp number (replace with actual number)
  const whatsappNumber = "+918968572273";
  const defaultMessage = "Hi! I need help with your academic services.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Preview Card */}
          {isOpen && (
            <Card className="absolute bottom-16 right-0 w-80 shadow-2xl border-border/50 bg-background/95 backdrop-blur-sm animate-in slide-in-from-bottom-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
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
                
                <div className="space-y-3 mb-4">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-foreground">
                      👋 Hi there! How can we help you today?
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-foreground">
                      Get instant help with:
                    </p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Plagiarism Reports</li>
                      <li>• AI Detection</li>
                      <li>• Academic Services</li>
                      <li>• Pricing Questions</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(`tel:${whatsappNumber}`, '_self')}
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Floating WhatsApp Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none"
            size="icon"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
            
            {/* Notification dot */}
            {!isOpen && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">1</span>
              </div>
            )}
          </Button>
        </div>
      </div>

      {/* Backdrop */}
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