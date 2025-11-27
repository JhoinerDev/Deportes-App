"use client";

import React from 'react';

// Datos de ejemplo para la tabla de solicitudes
const solicitudes = [
    { id: 101, atleta: 'María Pérez', cedula: 'V-15.456.789', disciplina: 'Ajedres', estado: 'Pendiente' },
    { id: 102, atleta: 'Carlos López', cedula: 'V-20.123.456', disciplina: 'Fútbol Sala', estado: 'Pendiente' },
    { id: 103, atleta: 'Ana Gutiérrez', cedula: 'V-25.987.654', disciplina: 'Baloncesto', estado: 'Pendiente' },
    { id: 104, atleta: 'José Rivero', cedula: 'V-18.345.678', disciplina: 'Kárate', estado: 'Pendiente' },
];

// VISTA DEL ENTRENADOR: PANEL DE APROBACIÓN DE INSCRIPCIONES (Proceso 2)
export default function SolicitudesEntrenadorPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
                Gestión de Solicitudes
            </h1>
            <p className="text-gray-600">
                Panel para aprobar o rechazar las solicitudes de atletas para tu disciplina.
            </p>

            {/* Tarjeta principal con la tabla */}
            <div className="bg-white p-6 rounded-lg shadow-xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Atleta
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cédula
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Disciplina
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {solicitudes.map((solicitud) => (
                            <tr key={solicitud.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {solicitud.atleta}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {solicitud.cedula}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {solicitud.disciplina}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {solicitud.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center space-x-2">
                                    <button 
                                        className="text-green-600 hover:text-green-900 font-semibold border border-green-600 px-3 py-1 rounded"
                                        onClick={() => console.log(`Aprobando a ${solicitud.atleta}`)}
                                    >
                                        Aprobar
                                    </button>
                                    <button 
                                        className="text-red-600 hover:text-red-900 font-semibold border border-red-600 px-3 py-1 rounded"
                                        onClick={() => console.log(`Rechazando a ${solicitud.atleta}`)}
                                    >
                                        Rechazar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}