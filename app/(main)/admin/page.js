"use client";

import React from 'react';

// Datos de ejemplo para las métricas
const metrics = [
    { title: 'Usuarios Totales', value: 345, icon: '👥', bgColor: 'bg-blue-600' },
    { title: 'Disciplinas Activas', value: 15, icon: '🏆', bgColor: 'bg-green-600' },
    { title: 'Solicitudes Pendientes', value: 8, icon: '⏳', bgColor: 'bg-yellow-600' },
    { title: 'Reportes Generados', value: 42, icon: '📈', bgColor: 'bg-indigo-600' },
];

const MetricCard = ({ title, value, icon, bgColor }) => (
    <div className={`p-5 rounded-lg shadow-xl ${bgColor} text-white`}>
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{title}</h3>
            <span className="text-3xl">{icon}</span>
        </div>
        <p className="mt-2 text-4xl font-bold">{value}</p>
    </div>
);

// VISTA DEL ADMINISTRADOR / COORDINADOR
export default function AdminDashboardPage() {
    
    // Función de ejemplo para mostrar la acción de crear
    const handleCreate = (entity) => {
        alert(`Navegando a la página para crear un nuevo(a) ${entity}...`);
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">
                Panel de Administración y Coordinación
            </h1>
            
            {/* 1. Métricas Clave (KPIs) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </div>

            {/* 2. Sección de Gestión de Datos (Tablas y Acciones) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Gestión de Usuarios (Admin y Coach) */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Gestión de Usuarios</h2>
                        <button
                            onClick={() => handleCreate('Usuario')}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150"
                        >
                            + Crear Nuevo Usuario
                        </button>
                    </div>
                    
                    {/* Tabla simulada de usuarios (demuestra la distribución) */}
                    <div className="bg-gray-50 p-4 rounded text-gray-700">
                        Tabla de Usuarios: (Ej. Nombre, Cédula, Rol, Estado, Acción)
                        <ul className="mt-2 text-sm space-y-1">
                            <li>- 300 Estudiantes-Atletas</li>
                            <li>- 15 Entrenadores</li>
                            <li>- 2 Administradores</li>
                        </ul>
                    </div>
                </div>

                {/* Gestión de Disciplinas */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Gestión de Disciplinas</h2>
                        <button
                            onClick={() => handleCreate('Disciplina')}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150"
                        >
                            + Crear Nueva Disciplina
                        </button>
                    </div>

                    {/* Tabla simulada de disciplinas */}
                    <div className="bg-gray-50 p-4 rounded text-gray-700">
                        Tabla de Disciplinas: (Ej. Nombre, Entrenador Asignado, Estatus, Cupos)
                        <ul className="mt-2 text-sm space-y-1">
                            <li>- Natación (Activa)</li>
                            <li>- Baloncesto (Activa)</li>
                            <li>- Voleibol (Inactiva)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. Panel de Reportes */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-xl font-semibold border-b pb-3 mb-4 text-gray-800">
                    Generación de Reportes
                </h2>
                <div className="flex space-x-4">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                        Generar Reporte de Asistencia
                    </button>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                        Generar Reporte de Inscripciones
                    </button>
                </div>
            </div>

        </div>
    );
}