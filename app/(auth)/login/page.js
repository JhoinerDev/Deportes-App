"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // <--- 1. IMPORTAR LINK

export default function LoginPage() {
  
  const [usuario, setUsuario] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    let destino = '';
    let roleName = '';

    if (usuario.startsWith('V-1')) {
      destino = '/dashboard';
      roleName = 'Estudiante'; 
    } else if (usuario.startsWith('V-2')) {
      destino = '/entrenador/solicitudes';
      roleName = 'Entrenador'; 
    } else if (usuario.startsWith('V-3')) {
      destino = '/admin';
      roleName = 'Administrador'; 
    } else {
      alert('Usuario no reconocido. Intenta con V-1, V-2 o V-3.');
      return;
    }

    if (typeof window !== 'undefined') {
        localStorage.setItem('userRole', roleName);
    }

    router.push(destino);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        
        <div className="mb-6 text-center">
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            SIGED-UNEFA
          </h2>
          <p className="text-gray-600">
            Sistema Integral de Gestión Deportiva
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          
          <div>
            <label 
              htmlFor="usuario" 
              className="block text-sm font-medium text-gray-700"
            >
              Usuario (Cédula) - Ej: V-12345678
            </label>
            <div className="mt-1">
              <input
                id="usuario"
                name="usuario"
                type="text"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="V-1..., V-2..., o V-3..."
                onChange={(e) => setUsuario(e.target.value)} 
                value={usuario}
              />
            </div>
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              {/* 2. REEMPLAZAR <a> POR <Link> */}
              <Link 
                href="/recuperar-clave" 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ingresar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}