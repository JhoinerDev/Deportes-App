"use client";

import React from 'react';
import Link from 'next/link';

// Componente de Tarjeta Visual
const VisualCard = ({ title, category, imageColor, icon, link }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className={`h-32 ${imageColor} flex items-center justify-center`}>
            <span className="text-6xl">{icon}</span>
        </div>
        <div className="p-5">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{category}</span>
            <h3 className="mt-2 text-xl font-bold text-gray-800">{title}</h3>
            <Link href={link} className="mt-4 inline-block text-sm font-semibold text-gray-500 hover:text-blue-600">
                Ver Detalles <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    </div>
);

export default function StudentDashboardPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-10">
            
            {/* 1. HERO SECTION INTEGRADA 
                Nota: 'pt-32' añade espacio arriba para que el menú no tape el texto
            */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 h-[500px] rounded-b-[50px] flex items-center justify-center text-center px-4 shadow-lg pt-20">
                <div className="text-white">
                    <span className="uppercase tracking-widest text-sm font-semibold opacity-80 border border-white/30 px-3 py-1 rounded-full">
                        Sistema de Gestión Deportiva
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mt-6 tracking-tight drop-shadow-lg">
                        VIVE EL DEPORTE
                    </h1>
                    <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Únete a la comunidad deportiva de la UNEFA. Inscríbete, entrena y compite al máximo nivel.
                    </p>
                </div>
            </div>

            {/* 2. BARRA FLOTANTE DE BÚSQUEDA */}
            <div className="relative -mt-20 max-w-5xl mx-auto px-4 z-20">
                <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
                    <div className="flex-1 w-full">
                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Buscar Disciplina</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Fútbol, Ajedrez..." 
                            className="w-full mt-1 p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 transition"
                        />
                    </div>
                    <div className="flex-1 w-full">
                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Estado</label>
                        <select className="w-full mt-1 p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 bg-white cursor-pointer">
                            <option>Todas</option>
                            <option>Disponibles</option>
                            <option>Cerradas</option>
                        </select>
                    </div>
                    <div className="w-full md:w-auto mt-5">
                        <Link href="/disciplinas" className="block w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Explorar
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3. CONTENIDO PRINCIPAL */}
            <div className="max-w-5xl mx-auto px-6 mt-10">
                
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Escoge tu Disciplina Favorita 🔥</h2>
                        
                    </div>
                    <Link href="/disciplinas" className="block w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Disciplinas
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    <VisualCard 
                        title="Fútbol Sala" 
                        category="Equipo" 
                        imageColor="bg-green-100 text-green-600"
                        icon="⚽" 
                        link="/disciplinas" 
                    />
                    <VisualCard 
                        title="Baloncesto" 
                        category="Cancha" 
                        imageColor="bg-orange-100 text-orange-600"
                        icon="🏀" 
                        link="/disciplinas" 
                    />
                    <VisualCard 
                        title="Ajedrez" 
                        category="Mesa" 
                        imageColor="bg-cyan-100 text-cyan-600"
                        icon="♟️" 
                        link="/disciplinas" 
                    />
                    <VisualCard 
                        title="Voleibol" 
                        category="Cancha" 
                        imageColor="bg-red-100 text-red-600"
                        icon="🏐" 
                        link="/disciplinas" 
                    />
                    <VisualCard 
                        title="Taekwondo" 
                        category="Tatami" 
                        imageColor="bg-yellow-100 text-black-600"
                        icon="🥋" 
                        link="/disciplinas" 
                    />
                </div>

                {/* 4. BANNER PROMOCIONAL
                <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl overflow-hidden relative mb-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                    
                    <div className="relative z-10 max-w-lg">
                        <h3 className="text-3xl font-bold">Consulta tu Estado</h3>
                        <p className="mt-4 text-blue-100 text-lg">
                            ¿Ya te inscribiste? Revisa si tu solicitud ha sido aprobada por el entrenador.
                        </p>
                    </div>
                    <div className="relative z-10 mt-8 md:mt-0">
                        <Link href="/estado" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-xl shadow hover:bg-gray-100 transition inline-block">
                            Ver Mi Estado
                        </Link>
                    </div>
                </div>

                {/* Pie de página completo, con bloques de información que ofrecemos */}
                {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">🏆</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Compite y Gana</h4>
                        <p className="mt-2 text-gray-600">
                            Participa en torneos internos y demuestra tus habilidades deportivas.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">🤝</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Comunidad Activa</h4>
                        <p className="mt-2 text-gray-600">
                            Únete a una red de atletas y entrenadores comprometidos con el deporte.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">📅</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Eventos Regulares</h4>
                        <p className="mt-2 text-gray-600">
                            Mantente informado sobre los próximos entrenamientos y competencias.
                        </p>
                    </div>  
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">🌟</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Mejora Continua</h4>
                        <p className="mt-2 text-gray-600">
                            Accede a recursos y capacitaciones para llevar tu rendimiento al siguiente nivel.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">📊</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Seguimiento de Progreso</h4>
                        <p className="mt-2 text-gray-600">
                            Monitorea tu desarrollo deportivo con estadísticas y reportes personalizados.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <span className="text-5xl">💬</span>    
                        <h4 className="mt-4 text-xl font-bold text-gray-800">Soporte Dedicado</h4>
                        <p className="mt-2 text-gray-600">
                            Nuestro equipo está aquí para ayudarte en cada paso de tu viaje deportivo.
                        </p>
                    </div> */} */
                    {/* Footer centrado */}
                    {/* <footer
                        className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div style={{ height: '100vh' }}>Contenido que llena la pantalla?.
                            
                            <div className="text-gray-600">
                                &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
                                </div>
                                <nav className="mt-4">
                                    <Link href="/acerca" className="text-blue-600 hover:underline">Acerca de</Link>
                                <span className="mx-2">|</span>
                                <Link href="/contacto" className="text-blue-600 hover:underline">Contacto</Link>
                                <span className="mx-2">|</span>
                                <Link href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link>
                                    </nav>
                                </div>
                            </div>
                        
                        

                        
                    </footer> */}
                

            </div>
        </div>
    );
}