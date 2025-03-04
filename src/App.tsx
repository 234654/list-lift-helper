
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Создаем экземпляр клиента запросов
const queryClient = new QueryClient();

// Главный компонент приложения
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/list-lift-helper">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ДОБАВЛЯЙТЕ ВСЕ КАСТОМНЫЕ МАРШРУТЫ ВЫШЕ МАРШРУТА "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
