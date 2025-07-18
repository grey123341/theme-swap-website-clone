import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlagiarismRemoval from "./pages/PlagiarismRemoval";
import PlagiarismReport from "./pages/PlagiarismReport";
import AIReport from "./pages/AIReport";
import DrillbitReport from "./pages/DrillbitReport";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plagiarism-removal" element={<PlagiarismRemoval />} />
          <Route path="/plagiarism-report" element={<PlagiarismReport />} />
          <Route path="/ai-report" element={<AIReport />} />
          <Route path="/drillbit-report" element={<DrillbitReport />} />
          <Route path="/my-account" element={<MyAccount />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
