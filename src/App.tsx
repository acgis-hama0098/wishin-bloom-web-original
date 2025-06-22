
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Baptism from "./pages/Baptism";
import MothersDay from "./pages/MothersDay";
import Christmas from "./pages/Christmas";
import Communion from "./pages/Communion";
import BabyShower from "./pages/BabyShower";
import Anniversary from "./pages/Anniversary";
import ValentinesDay from "./pages/ValentinesDay";
import Easter from "./pages/Easter";
import Graduation from "./pages/Graduation";
import Engagement from "./pages/Engagement";
import NewYear from "./pages/NewYear";
import Retirement from "./pages/Retirement";
import CasualGifts from "./pages/CasualGifts";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/baptism" element={<Baptism />} />
          <Route path="/mothers-day" element={<MothersDay />} />
          <Route path="/christmas" element={<Christmas />} />
          <Route path="/communion" element={<Communion />} />
          <Route path="/baby-shower" element={<BabyShower />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/valentines-day" element={<ValentinesDay />} />
          <Route path="/easter" element={<Easter />} />
          <Route path="/graduation" element={<Graduation />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/new-year" element={<NewYear />} />
          <Route path="/retirement" element={<Retirement />} />
          <Route path="/casual-gifts" element={<CasualGifts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
