import { useLanguage } from './LanguageContext';
import { useState, useEffect } from 'react'; // Importamos hooks para detectar el tema

function AutomationCard({ automation, t }: { automation: any, t: any }) {
    // Estado para rastrear si el modo oscuro está activo
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Verificamos si el elemento html tiene la clase 'dark'
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkDark();

        // Observador para cambiar el video en tiempo real si el usuario cambia el tema
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    // Lógica para seleccionar el video:
    // 1. Si 'videos' es un objeto con 'light' y 'black', elige según el tema.
    // 2. Si 'videos' es un string simple, usa ese.
    // 3. Si es el campo 'video' (singular), usa ese.
    let videoSrc = '';
    if (typeof automation.videos === 'object' && automation.videos !== null) {
        videoSrc = isDark ? automation.videos.black : automation.videos.light;
    } else {
        videoSrc = automation.videos || automation.video;
    }

    return (
        <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-cyan-500/50
        dark:hover:border-blue-500/50 w-full">

            <div className="p-3 border-b border-gray-50 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <h3 className="font-mono font-bold text-gray-900 dark:text-white text-center text-xs md:text-sm uppercase tracking-wider">
                    {t(automation.title) || t({ es: 'Automatización', en: 'Automation' })}
                </h3>
            </div>

            <div className="relative w-full overflow-hidden bg-black flex items-center justify-center" style={{ aspectRatio: '0 / 9' }}>
                <video
                    key={videoSrc} // Importante: la key fuerza al video a recargarse cuando cambia el src
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            <div className="p-4 bg-white dark:bg-gray-800">
                <p className="text-xs italic text-gray-600 dark:text-gray-400 text-center leading-relaxed line-clamp-2">
                    {t(automation.description)}
                </p>
            </div>
        </div>
    );
}

function Automations() {
    const { t } = useLanguage();

    const automatizations = [
        {
            title: {
                es: 'Monitoreo de API y Gestión de Logs',
                en: 'API Monitoring & Log Management'
            },
            description: {
                es: 'Flujo que valida datos de una API; si detecta fallos, notifica por Gmail y registra automáticamente el error en Google Sheets y Drive.',
                en: 'Workflow that validates data from an API; if it detects errors, it sends a notification via Gmail and automatically logs the error in Google Sheets and Drive.'
            },
            videos: {
                light: '/monitoreo-white.mp4',
                black: '/monitoreo-black.mp4'
            }
        },
        {
            title: {
                es: 'Automatización de Búsqueda Laboral',
                en: 'Job Search Automation'
            },
            description: {
                es: 'Flujo que extrae diariamente vacantes desde Getonbrd, filtra por fecha y envía un resumen formateado vía Gmail.',
                en: 'Workflow that daily scrapes development job openings from Getonbrd, filters by date, and sends a formatted summary via Gmail.'
            },
            videos: {
                light: '/correopost-white.mp4',
                black: '/correopost-black.mp4'
            }
        }
    ];

    return (
        <section className="w-full pb-8">
            {/* Encabezado de Sección */}
            <div className="mb-4 pt-4 md:pt-8">
                <h2 className="md:text-2xl text-lg font-mono text-cyan-500 dark:text-blue-400 mb-2 text-left md:pl-12 pl-2 mt-8">
                    {t({ es: 'Automatizaciones n8n', en: 'n8n Automations' })}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
                {automatizations.map((auto, index) => (
                    <AutomationCard key={index} automation={auto} t={t} />
                ))}
            </div>
        </section>
    );
}

export default Automations;