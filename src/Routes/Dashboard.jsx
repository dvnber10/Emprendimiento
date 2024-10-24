import React from 'react';
import { AppProvider, DashboardLayout, PageContainer } from '@toolpad/core';
import Grid from '@mui/material/Grid';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import DashboardContent from '../Components/Dashboard/DashboardContent';
import MonitorContent from '../Components/Dashboard/MonitorContent';
import ReportsContent from '../Components/Dashboard/ReportsContent';
import UserCard from '../Components/Account/Usercard';
import { AccountBox, AccountCircle, DisabledByDefault } from '@mui/icons-material';
import { Button } from '@mui/material'; 
import { useState } from 'react';
// Navegación
const NAVIGATION = [
  { segment: 'Dashboard', title: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboard' },
  { segment: 'Monitor', title: 'Monitor', icon: <BarChartIcon />, path: '/Monitor' },
  { segment: 'Reports', title: 'Reports', icon: <DescriptionIcon />, path: '/Reports' },
  { segment: 'Integrations', title: 'Integrations', icon: <LayersIcon />, path: '/Integrations' },
  { segment: 'User', title: 'User', icon: <AccountCircle />, path: '/Account' }
];



const IntegrationsContent = () => (
  <div>
    <h2>Integrations</h2>
    <p>Contenido específico para Integrations.</p>
  </div>
);

export default function DashboardLayoutBasic({ currentPath }) {
  const [open, setOpen] = useState(false);
  const user = {
    name: "John Doe", // Cambia esto por el nombre real del usuario
    email: "john.doe@example.com", // Cambia esto por el email real del usuario
  };
  const handleLogout = () => {
    // Lógica para cerrar sesión (por ejemplo, limpiar el estado del usuario)
    console.log("User logged out");
    setOpen(false);
  };
  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button
                variant="outlined"
                onClick={() => setOpen(!open)} // Alterna la visibilidad de la tarjeta
                sx={{ marginBottom: 2 }}
              >
                {open ? <DisabledByDefault /> : <AccountBox />}
              </Button>
              {open && (
                <UserCard user={user} onLogout={handleLogout} /> // Muestra la tarjeta si 'open' es true
              )}
            </Grid>
            <Grid item xs={12}>
              {currentPath === '/Dashboard' && <DashboardContent />}
              {currentPath === '/Monitor' && <MonitorContent />}
              {currentPath === '/Reports' && <ReportsContent />}
              {currentPath === '/Integrations' && <IntegrationsContent />}
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
