import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function DashboardContent() {
    const questions = [
        {
            id: 1,
            text: '¿Tu mascota muestra signos de falta de energía?',
            options: ['Sí', 'No', 'A veces']
        },
        {
            id: 2,
            text: '¿Ha cambiado el apetito de tu mascota recientemente?',
            options: ['Aumentado', 'Disminuido', 'Sin cambios']
        },
        {
            id: 3,
            text: '¿Tu mascota muestra comportamientos inusuales, como agresividad o miedo?',
            options: ['Sí', 'No', 'A veces']
        },
        {
            id: 4,
            text: '¿Tu mascota tiene dificultad para moverse o jugar?',
            options: ['Sí', 'No', 'A veces']
        },
        {
            id: 5,
            text: '¿Has notado cambios en el sueño de tu mascota?',
            options: ['Duerme más', 'Duerme menos', 'Sin cambios']
        },
        {
            id: 6,
            text: '¿Tu mascota presenta síntomas como tos, vómito o diarrea?',
            options: ['Sí', 'No']
        },
        {
            id: 7,
            text: '¿Tu mascota ha tenido interacciones sociales normales con otros animales o personas?',
            options: ['Sí', 'No', 'A veces']
        },
        {
            id: 8,
            text: '¿Has notado cambios en la apariencia física de tu mascota, como pérdida de peso o pelaje opaco?',
            options: ['Sí', 'No']
        },
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleOptionChange = (questionId, option) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionId - 1] = option;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Respuestas enviadas:', answers);
        // Aquí puedes realizar cualquier acción adicional, como enviar las respuestas a un servidor.
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px' }}>
            <h1>Dashboard</h1>
            <h3>Preguntas para ver la salud de mascotas:</h3>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '800px' }}>
                {questions.map((question) => (
                    <div key={question.id} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <h4>{question.text}</h4>
                        {question.options.map((option, i) => (
                            <label key={i} style={{ margin: '0 10px' }}>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    checked={answers[question.id - 1] === option}
                                    onChange={() => handleOptionChange(question.id, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <Button onClick={handleSubmit} sx={{flex: 'center'}}>Enviar Respuestas</Button>
            </form>
        </div>
    );
}

export default DashboardContent;
