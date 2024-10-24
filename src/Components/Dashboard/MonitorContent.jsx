import React from 'react'
import { Pie ,Scatter} from 'react-chartjs-2';
import { Paper, Typography, Grid } from '@mui/material';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ScatterController,
    LineElement,
    PointElement,
    LinearScale
} from 'chart.js';

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend, ScatterController, LineElement, PointElement, LinearScale);
const dataBehavior = {
    labels: ['Normal', 'Agitado', 'Tranquilo'],
    datasets: [
        {
            label: 'Comportamiento',
            data: [40, 30, 30], // Datos de ejemplo
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const dataEnergy = {
    labels: ['Bajo', 'Medio', 'Alto'],
    datasets: [
        {
            label: 'Energía',
            data: [20, 50, 30], // Datos de ejemplo
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const dataHealth = {
    labels: ['Buena', 'Regular', 'Mala'],
    datasets: [
        {
            label: 'Salud',
            data: [70, 20, 10], // Datos de ejemplo
            backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        },
    ],
};
const scatterData = {
    datasets: [
        {
            label: 'Historial de Salud',
            data: [
                { x: 1, y: 8 },
                { x: 2, y: 6 },
                { x: 3, y: 9 },
                { x: 4, y: 5 },
                { x: 5, y: 7 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
        },
    ],
};
function MonitorContent() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h6">Comportamiento</Typography>
                    <Pie data={dataBehavior} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h6">Energía</Typography>
                    <Pie data={dataEnergy} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h6">Salud</Typography>
                    <Pie data={dataHealth} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h6">Historial de Salud</Typography>
                    <Scatter data={scatterData} options={{ scales: { x: { title: { display: true, text: 'Días' } }, y: { title: { display: true, text: 'Salud' } } } }} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default MonitorContent