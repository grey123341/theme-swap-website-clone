import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import PlagiarismRemoval from "./pages/PlagiarismRemoval";
import PlagiarismReport from "./pages/PlagiarismReport";
import AIReport from "./pages/AIReport";
import DrillbitReport from "./pages/DrillbitReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/plagiarism-removal" element={<PlagiarismRemoval />} />
              <Route path="/plagiarism-report" element={<PlagiarismReport />} />
              <Route path="/ai-report" element={<AIReport />} />
              <Route path="/drillbit-report" element={<DrillbitReport />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
