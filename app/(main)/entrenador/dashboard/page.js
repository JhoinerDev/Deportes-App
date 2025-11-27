"use client";

import React from 'react';
import Link from 'next/link';

// Componente de KPI para la barra flotante
const StatBox = ({ label, value, icon, color }) => (
    <div className="flex items-center space-x-4 p-2">
        <div className={`p-3 rounded-full ${color} text-white`}>
            <span className="text-2xl">{icon}</span>
        </div>
        <div>
            <p className="text-xs font-bold text-gray-400 uppercase">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

// Componente de Tarea Estilo Tarjeta
const TaskCard = ({ title, desc, actionText, link, accentColor }) => (
    <div className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${accentColor} hover:shadow-xl transition duration-300`}>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm mb-4">{desc}</p>
        <Link href={link} className="text-sm font-bold text-gray-500 hover:text-blue-800 flex items-center">
            {actionText} <span className="ml-2">&rarr;</span>
        </Link>
    </div>
);

export default function CoachDashboardPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-10">
            
            {/* 1. HERO SECTION ENTRENADOR (Más sobrio pero moderno) */}
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 h-[350px] rounded-b-[50px] flex flex-col justify-center px-8 md:px-16 text-white">
                <div className="-mt-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Panel Técnico</h1>
                    <p className="mt-2 text-lg opacity-80">Gestión y control de atletas.</p>
                </div>
            </div>

            {/* 2. BARRA FLOTANTE DE ESTADÍSTICAS (El cuadro blanco superpuesto) */}
            <div className="relative -mt-20 max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <StatBox 
                        label="Solicitudes Pendientes" 
                        value="4" 
                        icon="📝" 
                        color="bg-yellow-500" 
                    />
                    <StatBox 
                        label="Atletas Activos" 
                        value="20" 
                        icon="👥" 
                        color="bg-blue-600" 
                    />
                    <StatBox 
                        label="Próx. Entrenamiento" 
                        value="Hoy 3PM" 
                        icon="⏰" 
                        color="bg-green-500" 
                    />
                </div>
            </div>

            {/* 3. SECCIÓN DE GESTIÓN (Tarjetas) */}
            <div className="max-w-6xl mx-auto px-6 mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión Rápida</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TaskCard 
                        title="Aprobar Inscripciones" 
                        desc="Revisa los nuevos aspirantes que desean unirse a tus disciplinas." 
                        actionText="Gestionar Solicitudes"
                        link="/entrenador/solicitudes"
                        accentColor="border-yellow-500"
                    />
                    <TaskCard 
                        title="Control de Asistencia" 
                        desc="Registra la asistencia del día para mantener las estadísticas al día." 
                        actionText="Tomar Asistencia"
                        link="/entrenador/asistencia"
                        accentColor="border-blue-600"
                    />
                    <TaskCard 
                        title="Mis Horarios" 
                        desc="Organiza las sesiones de entrenamiento de la semana." 
                        actionText="Ver Calendario"
                        link="/entrenador/horarios"
                        accentColor="border-green-500"
                    />
                </div>

                {/* Lista de Atletas Recientes (Estilo Tabla limpia) */}
                <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Actividad Reciente</h3>
                        <button className="text-sm text-blue-600 font-semibold hover:underline">Ver todo</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer border border-gray-100">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                                        AT
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Nueva Solicitud - Fútbol</p>
                                        <p className="text-xs text-gray-500">Carlos Pérez solicitó ingreso</p>
                                    </div>
                                </div>
                                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Hace 2h</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}