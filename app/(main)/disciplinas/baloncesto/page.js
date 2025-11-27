"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Componente para Fila de Información (reutilizable)
const DetailRow = ({ icon, label, value, color }) => (
    <div className="flex items-center space-x-4 border-b border-gray-100 py-3">
        <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
            <span className={`text-xl ${color}`}>{icon}</span>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-900">{value}</p>
        </div>
    </div>
);

// Componente para Botón de Acción Secundaria (reutilizable)
const ActionButton = ({ icon, text, onClick, disabled = false }) => (
    <button 
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center space-x-3 w-full p-4 rounded-xl transition duration-200 border ${
            disabled 
            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:shadow-md'
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
            <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded text-xs uppercase">{day}</span>
            <span className="text-gray-700 font-medium">{time}</span>
        </div>
        <span className="text-xs text-gray-500 flex items-center">
            📍 {location}
        </span>
    </div>
);


export default function BaloncestoPage() {
    const [activeTab, setActiveTab] = useState('general');

    // Clases específicas de color para Baloncesto (Naranja/Amarillo)
    const primaryColor = "text-orange-600";
    const primaryBg = "bg-orange-500";
    const primaryAccent = "bg-orange-100 text-orange-700";

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            {/* ==================================================================
                SECCIÓN 1: HERO (Baloncesto)
               ================================================================== */}
            <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden rounded-b-[40px] shadow-2xl">
                {/* Fondo Decorativo */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-transparent z-10"></div>
                
                {/* Aquí iría la foto real de Baloncesto */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto">
                    <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-2">
                        Disciplina de Pista
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight italic">
                        BALON<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-amber-500">CESTO</span>
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg max-w-xl leading-relaxed">
                        Velocidad, precisión en el tiro y defensa en zona. Únete a la tradición del baloncesto unefista.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className={`${primaryBg} hover:bg-orange-400 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-orange-500/50 transition transform hover:-translate-y-1`}>
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
                        <p className="text-3xl font-bold text-white">18</p>
                        <p className="text-xs text-gray-400 uppercase">Atletas</p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-white">4</p>
                        <p className="text-xs text-gray-400 uppercase">Días/Semana</p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-orange-400">ABIERTO</p>
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
                                        El Baloncesto fomenta el trabajo en equipo, la rapidez de decisión y la explosividad física. 
                                        Nuestro programa se centra en drills de tiro, jugadas de pick-and-roll y estrategias defensivas zonales.
                                    </p>
                                    
                                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                        <h4 className="font-bold text-orange-900 mb-2">Objetivos del Semestre</h4>
                                        <ul className="list-disc list-inside text-orange-800 space-y-1">
                                            <li>Aumentar la efectividad en tiros de campo por encima del 45%.</li>
                                            <li>Mejorar la defensa hombre-a-hombre.</li>
                                            <li>Clasificar a las finales del campeonato nacional universitario.</li>
                                        </ul>
                                    </div>

                                    {/* Perfil del Entrenador */}
                                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">👨‍🏫</div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase font-bold">Entrenador Principal</p>
                                            <p className="text-xl font-bold text-gray-900">Prof. Elena Torres</p>
                                            <p className="text-sm text-blue-600">etorres@unefa.edu.ve</p>
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
                        <div className="bg-white rounded-3xl shadow-xl p-6 border-t-8 border-orange-500">
                            <h3 className="text-lg font-bold text-gray-800">Estado de Inscripción</h3>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">Cupos Disponibles</span>
                                <span className="font-bold text-gray-900">12 / 20</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                            <p className="mt-4 text-xs text-center text-gray-400">¡Quedan pocos cupos! Inscríbete pronto.</p>
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