"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Componente para Botón de Acción Secundaria (reutilizable)
const ActionButton = ({ icon, text, onClick, disabled = false }) => (
    <button 
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center space-x-3 w-full p-4 rounded-xl transition duration-200 border ${
            disabled 
            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-yellow-600 hover:text-yellow-700 hover:shadow-md'
        }`}
    >
        <span className="text-xl">{icon}</span>
        <span className="font-semibold text-sm">{text}</span>
    </button>
);

// Componente para Tarjeta de Horario (reutilizable)
const ScheduleCard = ({ day, time, location }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex items-center space-x-3">
            <span className="bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded text-xs uppercase">{day}</span>
            <span className="text-gray-700 font-medium">{time}</span>
        </div>
        <span className="text-xs text-gray-500 flex items-center">
            📍 {location}
        </span>
    </div>
);


export default function AjedrezPage() {
    const [activeTab, setActiveTab] = useState('general');

    // Clases específicas de color para Ajedrez (Amarillo/Dorado)
    const primaryBg = "bg-yellow-600";
    const primaryAccent = "bg-yellow-100 text-yellow-800";

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            {/* ==================================================================
                SECCIÓN 1: HERO (Ajedrez)
               ================================================================== */}
            <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden rounded-b-[40px] shadow-2xl">
                {/* Fondo Decorativo */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-transparent z-10"></div>
                
                {/* Aquí iría la foto real de Ajedrez */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
                    <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-2">
                        Disciplina de Estrategia
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight italic">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">AJE</span>DREZ
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg max-w-xl leading-relaxed">
                        Controla el tablero. Desarrolla tu concentración, paciencia y visión a largo plazo para el jaque mate.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className={`${primaryBg} hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-500/50 transition transform hover:-translate-y-1`}>
                            INSCRIBIRME
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition">
                            Ver Galería
                        </button>
                    </div>
                </div>

                {/* Barra de Estadísticas Flotante */}
                {/* <div className="absolute bottom-0 right-0 p-8 hidden md:flex space-x-8 z-20">
                    <div className="text-right">
                        <p className="text-3xl font-bold text-white">45</p>
                        <p className="text-xs text-gray-400 uppercase">Estudiantes</p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-white">2</p>
                        <p className="text-xs text-gray-400 uppercase">Sesiones/Semana</p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-yellow-400">ABIERTO</p>
                        <p className="text-xs text-gray-400 uppercase">Estado</p>
                    </div>
                </div> */}
            </div>

            {/* ==================================================================
                SECCIÓN 2: CONTENIDO PRINCIPAL Y BARRA LATERAL
               ================================================================== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* COLUMNA IZQUIERDA (2/3): INFORMACIÓN DETALLADA */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Tarjeta Principal de Navegación (Tabs) */}
                        <div className="bg-white rounded-3xl shadow-xl p-2 flex space-x-1 overflow-x-auto">
                            {['General', 'Horarios', 'Requisitos', 'Equipo'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-6 py-3 rounded-2xl font-bold text-sm transition ${
                                        activeTab === tab.toLowerCase() 
                                        ? 'bg-slate-900 text-white shadow-md' 
                                        : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* CONTENIDO DINÁMICO SEGÚN PESTAÑA */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[400px]">
                            
                            {activeTab === 'general' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <h3 className="text-2xl font-bold text-gray-800">Descripción de la Disciplina</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        El Ajedrez desarrolla habilidades cognitivas vitales como la resolución de problemas, 
                                        la memoria y la planificación anticipada. Los entrenamientos incluyen análisis de partidas históricas y tácticas avanzadas.
                                    </p>
                                    
                                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                        <h4 className="font-bold text-yellow-900 mb-2">Objetivos del Semestre</h4>
                                        <ul className="list-disc list-inside text-yellow-800 space-y-1">
                                            <li>Dominar la apertura Ruy López y la defensa Siciliana.</li>
                                            <li>Aumentar el ELO promedio del equipo en 50 puntos.</li>
                                            <li>Organizar el I Torneo de Ajedrez Rápido UNEFA.</li>
                                        </ul>
                                    </div>

                                    {/* Perfil del Entrenador */}
                                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">👨‍🏫</div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold">Entrenador Principal</p>
                                            <p className="text-xl font-bold text-gray-900">Prof. José Linares (Maestro FIDE)</p>
                                            <p className="text-sm text-blue-600">jlinares@unefa.edu.ve</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'horarios' && (
                                <div className="text-center py-10 animate-fadeIn">
                                    <div className="space-y-4 animate-fadeIn">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Planificación Semanal</h3>
                                        <span className="text-4xl">🚧</span>
                                        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                            <p className="text-sm text-yellow-800">
                                                <strong>Nota:</strong> Esta sección solo es visible para miembros inscritos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'requisitos' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <h3 className="text-2xl font-bold text-gray-800">Requisitos de Ingreso</h3>
                                    <ul className="space-y-3">
                                        {['Ser estudiante activo.', 'Copia de C.I.',' Comprobante de inscripción.', 'Indumentaria deportiva adecuada.'].map((req, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <span className="text-green-500 font-bold">✓</span>
                                                <span className="text-gray-700">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'equipo' && (
                                <div className="text-center py-10 animate-fadeIn">
                                    <span className="text-4xl">🚧</span>
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">Lista de Atletas</h3>
                                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                        <p className="text-sm text-yellow-800">
                                            <strong>Nota:</strong> Esta sección solo es visible para miembros inscritos.
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* COLUMNA DERECHA (1/3): CENTRO DE COMANDOS */}
                    <div className="space-y-6">
                        
                        {/* Widget de Estado */}
                        <div className="bg-white rounded-3xl shadow-xl p-6 border-t-8 border-yellow-500">
                            <h3 className="text-lg font-bold text-gray-800">Estado de Inscripción</h3>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Plazas Disponibles</span>
                                <span className="font-bold text-gray-900">Ilimitadas</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <p className="mt-4 text-xs text-center text-gray-400">La inscripción permanece abierta todo el semestre.</p>
                        </div>

                                                {/* Caja de Herramientas (Botones Futuros) */}
                        <div className="bg-white rounded-3xl shadow-xl p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Herramientas</h3>
                            <div className="space-y-3">
                                <ActionButton 
                                    icon="💬" 
                                    text="Contactar al Entrenador" 
                                    onClick={() => alert('Abriendo chat...')} 
                                />
                                <ActionButton 
                                    icon="⚖️" 
                                    text="Ver Reglamento Interno" 
                                    onClick={() => alert('Mostrando reglamento...')} 
                                />
                                <ActionButton 
                                    icon="📷" 
                                    text="Galería de Fotos" 
                                    onClick={() => alert('Ir a galería...')} 
                                />
                                <ActionButton 
                                    icon="🚑" 
                                    text="Reportar Lesión" 
                                    onClick={() => {}} 
                                    disabled={true} // Ejemplo de botón deshabilitado
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}