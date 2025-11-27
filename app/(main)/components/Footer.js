// import Link from 'next/link';
// export default function Footer() {
//     return (
//         // El footer usa un fondo oscuro para contrastar con el contenido claro.
//         <footer className="bg-slate-900 text-white pt-10 pb-6 mt-12 border-t-4 border-amber-500">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
//                     {/* Columna 1: Logo y Misión */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-bold text-amber-500">
//                             SIGED <span className="text-white text-base font-normal">UNEFA</span>
//                         </h3>
//                         <p className="text-sm text-gray-400">
//                             Sistema de Gestión Deportiva de la UNEFA. Fomentando el deporte, la disciplina y la excelencia académica.
//                         </p>
//                     </div>

//                     {/* Columna 2: Navegación Rápida */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">Navegación</h4>
//                         <ul className="space-y-3">
//                             <li><Link href="/dashboard" className="text-gray-400 hover:text-amber-500 transition text-sm">Dashboard</Link></li>
//                             <li><Link href="/disciplinas" className="text-gray-400 hover:text-amber-500 transition text-sm">Catálogo de Disciplinas</Link></li>
//                             <li><Link href="/perfil" className="text-gray-400 hover:text-amber-500 transition text-sm">Mi Perfil</Link></li>
//                             <li><Link href="/notificaciones" className="text-gray-400 hover:text-amber-500 transition text-sm">Notificaciones</Link></li>
//                         </ul>
//                     </div>

//                     {/* Columna 3: Información y Ayuda */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">Soporte</h4>
//                         <ul className="space-y-3">
//                             <li><Link href="/soporte/faq" className="text-gray-400 hover:text-amber-500 transition text-sm">Preguntas Frecuentes</Link></li>
//                             <li><Link href="/soporte/contacto" className="text-gray-400 hover:text-amber-500 transition text-sm">Contacto Técnico</Link></li>
//                             <li><Link href="/login" className="text-gray-400 hover:text-amber-500 transition text-sm">Acceso Entrenadores</Link></li>
//                             <li><Link href="/documentacion" className="text-gray-400 hover:text-amber-500 transition text-sm">Documentación</Link></li>
//                         </ul>
//                     </div>

//                     {/* Columna 4: Contacto */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">Contacto Oficial</h4>
//                         <p className="text-sm text-gray-400 space-y-2">
//                             <span>📧 deportes@unefa.edu.ve</span><br />
//                             <span>📞 (0212) 555-1234</span><br />
//                             <span>📍 Vicerrectorado de Asuntos Sociales</span>
//                         </p>
//                     </div>

//                 </div>

//                 <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-center">
//                     <p className="text-sm text-gray-500">
//                         &copy; {new Date().getFullYear()} UNEFA - Todos los derechos reservados.
//                     </p>
//                     <div className="flex space-x-4 mt-3 md:mt-0">
//                         <Link href="#" className="text-gray-400 hover:text-amber-500">Twitter</Link>
//                         <Link href="#" className="text-gray-400 hover:text-amber-500">Instagram</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }