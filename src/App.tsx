
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/staff" element={<div className="text-center py-8"><h2 className="text-2xl font-bold">Staff Management</h2><p className="text-gray-600 mt-2">Coming soon...</p></div>} />
            <Route path="/appointments" element={<div className="text-center py-8"><h2 className="text-2xl font-bold">Appointments</h2><p className="text-gray-600 mt-2">Coming soon...</p></div>} />
            <Route path="/departments" element={<div className="text-center py-8"><h2 className="text-2xl font-bold">Departments</h2><p className="text-gray-600 mt-2">Coming soon...</p></div>} />
            <Route path="/records" element={<div className="text-center py-8"><h2 className="text-2xl font-bold">Medical Records</h2><p className="text-gray-600 mt-2">Coming soon...</p></div>} />
            <Route path="/settings" element={<div className="text-center py-8"><h2 className="text-2xl font-bold">Settings</h2><p className="text-gray-600 mt-2">Coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
