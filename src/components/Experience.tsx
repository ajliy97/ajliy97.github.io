import { useLanguage } from './LanguageContext';

function ExperienceCard({ experience, t, index }: { experience: any, t: any, index: number }) {
    const logoSrc = Array.isArray(experience.images)
        ? experience.images[0]
        : experience.image;

    const isEven = index % 2 === 0;

    return (
        <div id="experience" className="relative pb-16 group scroll-mt-24">
            {/* Línea vertical - solo móvil */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 sm:hidden"></div>

            {/* Móvil */}
            <div className="flex items-start sm:hidden pl-16">
                <div className="absolute left-0 top-0 w-10 h-10 overflow-hidden rounded-lg bg-white p-1.5 shadow-sm border border-gray-200 dark:border-gray-600 z-10 flex-shrink-0 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                    {logoSrc ? (
                        <img src={logoSrc} alt={experience.company} className="w-full h-full object-contain" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-[10px]">No Logo</div>
                    )}
                </div>
                {/* Punto centrado sobre la línea (left-5 = 20px, punto 12px → left-[14px]) */}
                <div className="absolute left-[14px] top-[-6px] w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-900 z-20 transition-transform duration-300 group-hover:scale-125"></div>

                <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-blue-400 mb-1 uppercase tracking-tighter">{experience.date}</span>
                    <h3 className="text-base font-mono font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-blue-400 transition-colors">{t(experience.position)}</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{experience.company}</span>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">{t(experience.description)}</p>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-x-6">
                {/* Columna izquierda */}
                <div className={isEven ? 'flex flex-col items-end text-right pr-4' : ''}>
                    {isEven && (
                        <div className="group/card">
                            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-blue-400 mb-1 uppercase block tracking-tigh">{experience.date}</span>
                            <h3 className="text-lg md:text-xl font-mono font-bold text-gray-900 dark:text-white transition-colors group-hover/card:text-cyan-600 dark:group-hover/card:text-blue-400">{t(experience.position)}</h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">{experience.company}</span>
                            <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed max-w-md ml-auto">{t(experience.description)}</p>
                        </div>
                    )}
                </div>

                {/* Columna central: punto + logo */}
                <div className="flex flex-col items-center z-20">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-900 mb-2 transition-transform duration-300 group-hover:scale-125"></div>
                    <div className="w-14 h-14 overflow-hidden rounded-lg bg-white p-2 shadow-sm border border-gray-200 dark:border-gray-600 flex-shrink-0 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                        {logoSrc ? (
                            <img src={logoSrc} alt={experience.company} className="w-full h-full object-contain" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-[10px]">No Logo</div>
                        )}
                    </div>
                </div>

                {/* Columna derecha */}
                <div className={!isEven ? 'flex flex-col items-start text-left pl-4' : ''}>
                    {!isEven && (
                        <div className="group/card">
                            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-blue-400 mb-1 uppercase block tracking-tighter">{experience.date}</span>
                            <h3 className="text-lg md:text-xl font-mono font-bold text-gray-900 dark:text-white transition-colors group-hover/card:text-cyan-600 dark:group-hover/card:text-blue-400">{t(experience.position)}</h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">{experience.company}</span>
                            <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">{t(experience.description)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            position: { es: 'Desarrollador Full Stack | QA', en: 'Full Stack Developer | QA' },
            company: 'ACL Powered by DataArt',
            date: 'Oct 2025 - Marz 2026',
            description: {
                es: 'Participé en el Programa Profesionales Jóvenes desarrollando aplicaciones web Full Stack bajo metodologías ágiles (Scrum/Kanban). Trabajé en automatización de procesos con n8n, documentación técnica, QA y gestión de bases de datos. Proyecto destacado: SafeMine AI, plataforma de alertas sísmicas y climáticas para minería con APIs REST, e implementación de Authentik como Identity Provider con SSO.',
                en: 'Participated in the Young Professionals Program developing Full Stack web applications under agile methodologies (Scrum/Kanban). Worked on process automation with n8n, technical documentation, QA, and database management. Key project: SafeMine AI, a seismic and climate alert platform for mining with REST APIs, and Authentik implementation as Identity Provider with SSO.'
            },
            image: '/acl_logo.webp',
        },
        {
            position: { es: 'Desarrollador Web', en: 'Web Developer' },
            company: 'Freelance',
            date: 'Abr 2024 - Sep 2025',
            description: {
                es: 'Desarrollé aplicaciones web Full Stack con interfaces dinámicas y responsivas, gestionando proyectos de forma integral desde el levantamiento de requerimientos hasta la puesta en marcha. Brindé acompañamiento técnico personalizado y configuración de sistemas según las necesidades operativas de cada cliente.',
                en: 'Developed Full Stack web applications with dynamic and responsive interfaces, managing projects end-to-end from requirements gathering to deployment. Provided personalized technical support and system configuration based on each client\'s operational needs'
            },
            image: '/freelance_logo.png',
        },
        {
            position: { es: 'Desarrollador de Software | Soporte TI - Práctica Profesional', en: 'Software Developer | IT Support - Professional Practice' },
            company: 'Centro de Informática Médica (CESIM) | UCI, Cuba',
            date: 'Ene 2022 - Ene 2023',
            description: {
                es: 'Desarrollé soluciones web para la digitalización de procesos clínicos en entornos médicos, participando en proyectos de telemedicina con integración de bases de datos relacionales (PostgreSQL, MySQL). Realicé migraciones de módulos, diseñé planes de prueba QA, documenté actividades de desarrollo y capacité al personal médico durante la implementación en producción.',
                en: 'Developed web solutions for digitizing clinical processes in medical environments, participating in telemedicine projects with relational database integration (PostgreSQL, MySQL). Performed module migrations, designed QA test plans, documented development activities, and trained medical staff during production deployment.'
            },
            image: '/uci_logo.png',
        },
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl font-mono text-gray-900 dark:text-white">
                    {t({ es: 'Experiencia Laboral', en: 'Work Experience' })}
                </h2>
                <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Línea vertical desktop */}
                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} t={t} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Experience;