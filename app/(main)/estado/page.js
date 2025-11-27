"use client"; 

import React from 'react';
import Link from 'next/link';

// VISTA: ESTADO DE MI SOLICITUD
export default function StatusPage() {
    
    // Simulación del estado actual (Pendiente, Aprobada, Rechazada)
    const currentStatus = {
        discipline: "Fútbol Sala",
        date: "15/11/2025",
        status: "Pendiente", // <-- Cambia a 'Aprobada' o 'Rechazada' para probar
        comment: null,
    };

    let statusColor = '';
    let statusBadge = '';

    switch (currentStatus.status) {
        case 'Aprobada':
            statusColor = 'border-green-500 bg-green-50';
            statusBadge = 'bg-green-500 text-white';
            break;
        case 'Rechazada':
            statusColor = 'border-red-500 bg-red-50';
            statusBadge = 'bg-red-500 text-white';
            break;
        case 'Pendiente':
        default:
            statusColor = 'border-yellow-500 bg-yellow-50';
            statusBadge = 'bg-yellow-500 text-gray-800';
            break;
    }


    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">
                Mi Estado de Participación 📋
            </h1>
            <p className="text-gray-600">
                Consulta el estado de tu última solicitud de inscripción y tu condición actual en el programa.
            </p>

            <div className={`p-8 rounded-lg shadow-xl border-l-8 ${statusColor}`}>
                <div className="flex justify-between items-start">
                    <div>
                        <span className={`text-xl font-bold px-3 py-1 rounded-full ${statusBadge}`}>
                            {currentStatus.status}
                        </span>
                        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                            {currentStatus.discipline}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Fecha de Solicitud: {currentStatus.date}
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">Detalles de la Evaluación</h3>
                    
                    {currentStatus.status === 'Pendiente' && (
                        <p className="text-gray-700 mt-2">
                            Tu solicitud se encuentra en revisión por el entrenador responsable.
                            Este proceso puede tardar hasta 72 horas.
                        </p>
                    )}

                    {currentStatus.status === 'Rechazada' && (
                        <div className="mt-2 bg-white p-4 border border-red-300 rounded-md">
                            <p className="text-red-700 font-medium">Comentario del Entrenador:</p>
                            <p className="text-gray-800 italic mt-1">
                                {currentStatus.comment || "El cupo máximo ha sido alcanzado, o la documentación está incompleta."}
                            </p>
                        </div>
                    )}

                    {currentStatus.status === 'Aprobada' && (
                        <p className="text-green-700 font-medium mt-2">
                            ¡Felicidades! Tu inscripción ha sido **aprobada**. Revisa la sección de Mis Horarios para tu próxima sesión.
                        </p>
                    )}

                </div>
            </div>
            
            {/* Botón de acción para el futuro */}
            {currentStatus.status === 'Aprobada' && (
                <div className="mt-8">
                    <Link href="/horarios" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Ver mis Horarios de Entrenamiento →
                    </Link>
                </div>
            )}

        </div>
    );
}