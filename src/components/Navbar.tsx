import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import {
    HiOutlineUser,
    HiOutlineBriefcase,
    HiOutlineCode,
    HiOutlineMail,
} from 'react-icons/hi';

function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [darkMode, setDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about'); // Estado para la sección activa

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- LÓGICA PARA DETECTAR SECCIÓN ACTIVA ---
    useEffect(() => {
        const observers = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' } // Activa la sección cuando está en el centro de la pantalla
        );

        const sections = ['about', 'experience', 'projects', 'contact'];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observers.observe(el);
        });

        return () => observers.disconnect();
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navLinks = [
        { id: 'about', label: { es: 'Sobre mí', en: 'About me' }, icon: <HiOutlineUser /> },
        { id: 'experience', label: { es: 'Experiencia', en: 'Experience' }, icon: <HiOutlineBriefcase /> },
        { id: 'projects', label: { es: 'Proyectos', en: 'Projects' }, icon: <HiOutlineCode /> },
        { id: 'contact', label: { es: 'Contacto', en: 'Contact' }, icon: <HiOutlineMail /> },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 p-3 transition-all duration-300">
            <nav 
                className={`flex items-center justify-between gap-3 px-3 py-2 rounded-full transition-all duration-500 ease-in-out
                ${scrolled 
                    ? 'w-auto min-w-fit bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-700'
                    : 'w-auto min-w-fit bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700'
                }`}
            >
                {/* Sección Links (Isla Central) */}
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-full border border-gray-200 dark:border-gray-700">
                    {navLinks.map((link) => (
                        <button 
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 group
                            ${activeSection === link.id
                                ? (darkMode
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'bg-yellow-400 text-gray-900 shadow-md scale-105')
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700'
                            }`}
                        >
                            <span className={`text-lg transition-transform group-hover:scale-110 ${activeSection === link.id ? 'text-current' : ''}`}>
                                {link.icon}
                            </span>
                            <span className={`hidden md:block text-xs font-medium ${activeSection === link.id ? 'font-bold' : ''}`}>
                                {t({ es: link.label.es, en: link.label.en })}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Sección Controles (Idioma y Tema) */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleLanguage}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:ring-2 ring-blue-400 transition-all duration-300"
                    >
                        <span className="text-[10px] font-bold uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
                    </button>

                    {/* Tema */}
                <button
                    onClick={toggleDarkMode}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                        darkMode 
                            ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30'
                            : 'bg-blue-600/20 text-blue-600 hover:bg-blue-600/30'
                    }`}
                >
                    {darkMode ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4
                                4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;