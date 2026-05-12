import { useState } from "react";
import { useLanguage } from "./LanguageContext";

function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from Portfolio - ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:liyajp97@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <footer id="contact" className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 md:mt-20 mt-10">

            {/* Divisor superior */}
            <div className="mx-auto w-3/5 border-t dark:border-t border-dashed border-gray-200 dark:border-gray-700 dark:block hidden" />

            <div className="max-w-2xl mx-auto py-8 pt-16 px-6">

                {/* Encabezado */}
                <div className="mb-10 text-center">
                    <span className="inline-block text-xs font-mono font-semibold tracking-widest text-cyan-500 uppercase mb-3">
                        {t({ es: '— Hablemos —', en: '— Let\'s Talk —' })}
                    </span>
                    <h2 className="text-3xl font-mono text-gray-900 dark:text-white text-center">
                        {t({ es: 'Contacto', en: 'Contact' })}
                    </h2>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                        {t({
                            es: 'Cuéntame cuál es el reto y nos ponemos en marcha. ¡Espero tu mensaje!',
                            en: 'Tell me about the challenge and we\'ll get started. I look forward to hearing from you!'
                        })}
                    </p>
                </div>

                {/* Card formulario */}
                <div className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/60 px-8 py-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-gray-500 black:text-gray-400 uppercase tracking-widest">
                                    {t({ es: 'Nombre', en: 'Name' })}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={t({ es: 'Tu nombre', en: 'Your name' })}
                                    className="px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600/60 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                                        focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-bold text-gray-500 black:text-gray-400 uppercase tracking-widest">
                                    {t({ es: 'Correo', en: 'Email' })}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t({ es: 'correo@ejemplo.com', en: 'email@example.com' })}
                                    className="px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600/60 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                                        focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-bold text-gray-500 black:text-gray-400 uppercase tracking-widest">
                                {t({ es: 'Mensaje', en: 'Message' })}
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={t({ es: 'Escribe tu mensaje aquí...', en: 'Write your message here...' })}
                                className="px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600/60 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                                    focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center
                                gap-2 text-sm tracking-wide"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                            </svg>
                            {t({ es: 'Enviar mensaje', en: 'Send message' })}
                        </button>
                    </form>
                </div>

                {/* Botones sociales */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://github.com/ajliy97"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900
                        dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207
                                11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
                                3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
                                2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386
                                0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/adrian-portelles-liy/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600
                        dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
                                5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                                23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a
                        href="https://wa.me/+56936544985"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-green-600
                        dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200 text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.52 3.48A11.79 11.79 0 0012.01 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63A11.94 11.94 0 0012.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.01 21.82c-1.82
                                    0-3.6-.49-5.17-1.42l-.37-.22-3.68.97.98-3.59-.24-.37a9.79 9.79 0 01-1.5-5.19c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 012.87 6.95c0 5.42-4.41 9.82-9.83
                                    9.82zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95
                                    1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2
                                    0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.08 2.85 1.23 3.05.15.2 2.13 3.25 5.17 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                        </svg>
                        WhatsApp
                    </a>

                    <a
                        href="/CV_Adrian_Portelles.pdf"
                        download
                        aria-label="Download CV"
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-blue-400 hover:border-cyan-400
                        dark:hover:border-blue-600 transition-all duration-200 text-sm font-mono font-semibold"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {t({ es: 'Descargar CV', en: 'Download CV' })}
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-base text-gray-400 dark:text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Adrian Liy. {t({ es: 'Todos los derechos reservados.', en: 'All rights reserved.' })}</p>
                </div>
            </div>
        </footer>
    );
}

export default Contact;
