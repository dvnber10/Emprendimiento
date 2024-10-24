import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, AppBar, Toolbar, Typography, Switch, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuSection from '../Components/MenuSection';  // Importa desde Components
import { useTheme } from '../Components/ThemeContext';  // Importa el hook useTheme

const IndexApp = () => {
  const { darkMode, toggleDarkMode } = useTheme();  // Usa el contexto de tema

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurant & Bar
          </Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Home />
        <MenuSection /> {/* Muestra el menú directamente */}
      </Container>
    </MuiThemeProvider>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hola")
    navigate('/login'); // Redirige a la página de login
  };
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Bienvenido al monitor para mascotas</Typography>
      <img src="https://via.placeholder.com/400" alt="Restaurant" style={{ width: '100%', maxWidth: '400px' }} />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">Define el comportamiento de las mascotas</Typography>
        <Button variant="contained" color="primary" onClick={handleClick} >LogIn</Button>
      </Box>
    </Box>
  );
};

export default IndexApp;
