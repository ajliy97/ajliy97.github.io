import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [darkMode, setDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);

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

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav 
            className={`bg-white fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 md:px-36 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md' 
                    : 'bg-white dark:bg-gray-900'
            }`}
            style={{ borderBottom: darkMode ? '0.5px solid rgba(255, 255, 255, 0.2)' : '0.5px solid #c9f1ff' }}
        >
            <div className="flex items-center gap-4">
                {darkMode ? (
                        <img 
                            src="/portafolio icon-white.png" 
                            alt="Portafolio Icon" 
                            className="w-9 h-9 md:w-12 md:h-12"
                            onClick={()=> window.location.href = '/'}
                        />
                ) : (
                    <img 
                            src="/portafolio icon-black.png" 
                            alt="Portafolio Icon" 
                            className="w-9 h-9 md:w-12 md:h-12"
                            onClick={()=> window.location.href = '/'}
                        />
                )}
                <div className="hidden md:block">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Adrian Liy</h1>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                        {t({ es: 'Ingeniero Informático', en: 'Computer Engineer' })}
                    </p>
                </div>
            </div>

            {/*Botón para cambiar el idioma*/}
            <div className="flex gap-2">
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium transition-colors flex items-center gap-1.5 md:gap-2"
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-sm md:text-base">{language === 'es' ? 'ENG' : 'ESP'}</span>
                </button>

                {/*Botón para cambiar el tema (modo oscuro/claro)*/}
                <button
                    onClick={toggleDarkMode}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium transition-colors"
                >
                    {darkMode ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;