import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import IndexApp from "./Routes/Index";
import { ThemeProvider } from './Components/ThemeContext';
import Login from './Components/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardLayoutBasic from './Routes/Dashboard';
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<IndexApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<DashboardRouter />} /> {/* Enrutamiento para Dashboard */}
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// Componente para manejar el enrutamiento del Dashboard
function DashboardRouter() {
  const location = useLocation();

  return (
    <Routes> {/* Asegúrate de envolver los Route en Routes */}
      <Route path="/dashboard" element={<DashboardLayoutBasic currentPath={location.pathname} />} />
      <Route path="/monitor" element={<DashboardLayoutBasic currentPath={location.pathname} />} />
      <Route path="/reports" element={<DashboardLayoutBasic currentPath={location.pathname} />} />
      <Route path="/integrations" element={<DashboardLayoutBasic currentPath={location.pathname} />} />
    </Routes>
  );
}

export default App;
