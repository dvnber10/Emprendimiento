import React, { useState } from 'react';
import { get, useForm } from "react-hook-form";
import { useTheme } from '../Components/ThemeContext'; // Asegúrate de que la ruta sea correcta
import { Container, Box, Typography, TextField, Button, Link, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { SessionInit } from '../Hooks/Autentication'
import Cookies from "universal-cookie";

const Login = () => {
  
  const cookie = new Cookies();
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [documentNumber, setDocumentNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const onSubmit = handleSubmit((data) => {
    // Consulta de usuario que exista 
    mutation.mutate(data)
  })
  const mutation = SessionInit();

  if (mutation.isSuccess) {
    // 
    let usuario = mutation.data.data.Id
    let token = mutation.data.data.Token

    // se crea una cookie con el id de usuario 
    cookie.set('id', usuario, { path: '/' })

    cookie.set('token', token, { path: '/' });
    // Se envia a la ruta del dashboard con inicio de session

    navigate("/Dashboard")


  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
            padding: 3,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Número de Documento"
              type="number"
              autoComplete="document"
              autoFocus
              value={documentNumber}
              {...register('documentNumber', {
                required: {
                  value: true,
                  message: "el numero de documento es requerido"
                }
              })}
              onChange={(e) => setDocumentNumber(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              value={password}
              {...register('password', {
                required: {
                  value: true,
                  message: "La contraseña es requerida"
                }
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Link href="#" variant="body2" sx={{ mt: 2 }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
