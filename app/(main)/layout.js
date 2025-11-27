"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

// --- FUNCIÓN DE SESIÓN ---
const getRoleFromSession = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('userRole') || 'public';
    }
    return 'public';
};

// --- COMPONENTE HEADER INTELIGENTE ---
const Header = ({ role, handleLogout }) => {
    const pathname = usePathname();
    
    // Detectamos si estamos en la página principal (Dashboard) para activar el modo transparente
    const isDashboard = pathname === '/dashboard' || pathname === '/entrenador/dashboard';

    // Clases dinámicas según la página
    const headerContainerClass = isDashboard 
        ? "absolute top-0 left-0 w-full z-50 bg-transparent" // Flotante y transparente
        : "bg-white shadow-md border-b border-gray-200 relative"; // Blanco normal

    const textClass = isDashboard 
        ? "text-white hover:bg-white/20" // Texto blanco con hover translúcido
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"; // Texto gris normal

    const logoClass = isDashboard ? "text-white" : "text-blue-800";
    const activeClass = isDashboard ? "bg-white/20 text-white" : "bg-blue-100 text-blue-700";

    const navItems = [
        // ESTUDIANTE
        { name: 'Inicio', href: '/dashboard', roles: ['Estudiante'] },
        { name: 'Disciplinas', href: '/disciplinas', roles: ['Estudiante'] }, 
        { name: 'Mi Estado', href: '/estado', roles: ['Estudiante'] }, 
        { name: 'Horarios', href: '/horarios', roles: ['Estudiante'] }, 
        { name: 'Resultados', href: '/resultados', roles: ['Estudiante'] },
        
        // ENTRENADOR
        { name: 'Inicio', href: '/entrenador/dashboard', roles: ['Entrenador'] }, 
        { name: 'Solicitudes', href: '/entrenador/solicitudes', roles: ['Entrenador'] }, 
        { name: 'Horarios', href: '/entrenador/horarios', roles: ['Entrenador'] }, 
        { name: 'Atletas', href: '/entrenador/atletas', roles: ['Entrenador'] },
        { name: 'Asistencia', href: '/entrenador/asistencia', roles: ['Entrenador'] },

        // ADMIN
        { name: 'Panel Admin', href: '/admin', roles: ['Administrador'] }, 
        { name: 'Usuarios', href: '/admin/usuarios', roles: ['Administrador'] }, 
        { name: 'Disciplinas', href: '/admin/disciplinas', roles: ['Administrador'] }, 
        { name: 'Reportes', href: '/admin/reportes', roles: ['Administrador'] }, 

        // COMÚN
        { name: 'Perfil', href: '/perfil', roles: ['Estudiante', 'Entrenador', 'Administrador'] }, 
    ];

    const filteredItems = navItems.filter(item => item.roles.includes(role));

    return (
        <header className={headerContainerClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className={`text-2xl font-extrabold tracking-tight ${logoClass}`}>
                            UNEFA Deportes
                        </h1>
                    </div>

                    {/* Navegación */}
                    <nav className="hidden md:flex md:space-x-2">
                        {filteredItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition duration-300 ${
                                    pathname === item.href ? activeClass : textClass
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Botón Salir */}
                    <div className="flex items-center space-x-4">
                        <span className={`text-sm font-medium hidden sm:inline ${isDashboard ? 'text-blue-100' : 'text-gray-500'}`}>
                            {role}
                        </span>
                        <button 
                            onClick={handleLogout} 
                            className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition transform hover:scale-105 ${
                                isDashboard 
                                ? "bg-white text-blue-900 hover:bg-gray-100" 
                                : "bg-red-600 text-white hover:bg-red-700"
                            }`}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

// --- LAYOUT PRINCIPAL ---
export default function MainLayout({ children }) {
    const router = useRouter();
    const [role, setRole] = useState('public');
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        const sessionRole = getRoleFromSession();
        setRole(sessionRole);
        setIsMounted(true);
        if (sessionRole === 'public') router.push('/login');
    }, [router]);

    const handleLogout = () => {
        if (typeof window !== 'undefined') localStorage.removeItem('userRole'); 
        setRole('public');
        router.push('/login');
    };

    if (!isMounted || role === 'public') {
        return <div className="flex min-h-screen items-center justify-center text-xl text-gray-600">Cargando...</div>; 
    }
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 relative">
            {/* Header pasa props para renderizarse correctamente */}
            <Header role={role} handleLogout={handleLogout} />

            {/* Main ocupa toda la pantalla */}
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}