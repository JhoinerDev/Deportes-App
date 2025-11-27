"use client";

import React from 'react';
import Link from 'next/link';

// Componente: Tarjeta para cada Disciplina
// Recibe un objeto 'discipline' completo en lugar de props separadas.
const DisciplineCard = ({ discipline }) => {
    const { name, description, coach, available, link, icon, accentColor } = discipline;
    
    // Lógica de estado y colores
    const statusText = available ? 'Disponible' : 'Cerrado';
    const statusBg = available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
    const buttonStyle = available ? `bg-blue-600 hover:bg-blue-700` : 'bg-gray-400 cursor-not-allowed';
    const cardBorder = `border-${accentColor}-600`; // Para el borde superior

    return (
        <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${cardBorder} flex flex-col justify-between transition transform hover:scale-[1.01] duration-300`}>
            <div>
                {/* Ícono Temático y Estatus */}
                <div className="flex justify-between items-start mb-3">
                    <span className={`text-3xl ${accentColor}`}>{icon}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusBg}`}>
                        {statusText}
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                <p className="mt-2 text-gray-600 text-sm h-12 overflow-hidden">{description}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700">
                    Entrenador: <span className="text-blue-600 font-semibold">{coach}</span>
                </p>
                
                {available ? (
                    <Link href={link} className={`mt-4 w-full block text-center text-white py-2 rounded-lg font-semibold transition duration-150 shadow-md ${buttonStyle}`}>
                        Ver Detalles →
                    </Link>
                ) : (
                    <button disabled className={`mt-4 w-full text-center text-white py-2 rounded-lg font-semibold ${buttonStyle}`}>
                        Inscripciones Cerradas
                    </button>
                )}
            </div>
        </div>
    );
};

// VISTA: CATÁLOGO DE DISCIPLINAS
export default function DisciplinesPage() {
    // Hemos añadido 'icon' y 'accentColor' para la identidad visual
    const disciplines = [
        
        {
            id: 1, 
            name: "Fútbol Sala", 
            description: "Entrenamiento táctico y físico para el equipo de fútbol sala masculino y femenino.", 
            coach: "Prof. Luis Pérez", 
            available: true, 
            link: "/disciplinas/futbol-sala",
            icon: "⚽",
            accentColor: "text-orange" // Color primario
        },
        { 
            id: 2, 
            name: "Baloncesto", 
            description: "Sesiones de práctica en la cancha, enfocadas en técnica individual y juego en equipo.", 
            coach: "Prof. Ana Gómez", 
            available: true, 
            link: "/disciplinas/baloncesto",
            icon: "🏀",
            accentColor: "text-amber" // Color primario
        },
        { 
            id: 3, 
            name: "Voleibol", 
            description: "Potencia de salto, bloqueo rápido y ataque certero. ¡Eleva tu juego a la red!", 
            coach: "Prof. Juan Ramos", 
            available: true, 
            link: "/disciplinas/voleibol",
            icon: "🏐",
            accentColor: "text-red" // Color primario
        },
        {   
            
            id: 4, 
            name: "Ajedrez", 
            description: "Desarrolla tu concentración, paciencia y visión a largo plazo para el jaque mate.", 
            coach: "Prof. María Soto", 
            imageColor:"bg-orange-100 text-orange-600",
            available: true, 
            link: "/disciplinas/ajedrez",
            icon: "♟️",
            accentColor: "text-yellow" // Color primario
        },
        { 
            id: 5, 
            name: "Taekwondo", 
            description: "Arte marcial coreano basado en la fuerza, la velocidad y la ética.", 
            coach: "Prof. Carlos Díaz", 
            available: null, 
            link: "/disciplinas/taekwondo",
            icon: "🥋",
            accentColor: "text-orange" // Color primario
        },
    ];

    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Catálogo de Disciplinas 🏅
                </h1>
                <p className="text-lg text-gray-600">
                    Selecciona una disciplina para ver **horarios**, **requisitos** y la **información del entrenador**.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {disciplines.map(d => (
                        <DisciplineCard
                            key={d.id}
                            discipline={d} // Pasamos el objeto completo
                        />
                    ))}
                </div>

                <p className="text-sm text-gray-500 pt-4 border-t">
                    *Nota: Las inscripciones están sujetas a la disponibilidad de cupos en cada selección.
                </p>
            </div>
        </div>
    );
}