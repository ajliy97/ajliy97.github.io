import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

function ProjectCard({ project, t }: { project: any, t: any }) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        if (Array.isArray(project.images)) {
            const interval = setInterval(() => {
                setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [project.images]);

    const displayImage = Array.isArray(project.images)
        ? project.images[currentImgIndex]
        : project.image;

    const hasImage =
        (Array.isArray(project.images) && project.images.length > 0) ||
        project.image;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div
                id="projects"
                className={`scroll-mt-24 group relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm transition-all duration-500 overflow-hidden border border-gray-100 
                dark:border-gray-700 flex flex-col justify-center ${
                    hasImage
                        ? 'hover:shadow-2xl hover:scale-[1.02] h-48 hover:h-72'
                        : 'h-46'
                }`}
            >
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-500 ${
                        project.hoverType === 'image'
                            ? 'opacity-0 group-hover:opacity-100'
                            : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="relative w-full h-full">
                        {project.images && project.images.length > 0 ? (
                            project.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={project.title}
                                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                                        idx === currentImgIndex
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                />
                            ))
                        ) : (
                            <img
                                src={displayImage}
                                alt={project.title}
                                className="w-full h-full object-cover object-center"
                            />
                        )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 dark:from-black/60 via-transparent to-black/20 dark:to-black/60"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col transition-all duration-500">
                    <div className="transition-all duration-500 group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:p-0">
                        <h3
                            className={`md:text-2xl text-xl font-mono text-gray-900 dark:text-white transition-colors duration-300 ${
                                hasImage
                                    ? 'group-hover:text-white group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                                    : ''
                            }`}
                        >
                            {project.title}
                        </h3>

                        <p
                            className={`md:text-base text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 transition-all duration-300 overflow-hidden md:pt-2 pt-1 ${
                                hasImage
                                    ? 'group-hover:opacity-0 group-hover:h-0'
                                    : ''
                            }`}
                        >
                            {t(project.description)}
                        </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 transition-all duration-500 group-hover:absolute group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:p-0 pt-1">
                        {project.tools.map((tool: string, toolIndex: number) => (
                            <span
                                key={toolIndex}
                                className="px-2 py-1 text-xs font-bold bg-cyan-500 text-white dark:bg-blue-600 dark:text-gray-100 rounded-t-lg rounded-b-lg shadow-sm"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}

function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'La Herradura SPA',
            link: 'https://la-herradura-spa.web.app/',
            description: {
                es: 'Portal web para agencia de envíos, proyectando sus servicios logísticos, rastreo de carga y promociones.',
                en: 'Website for a shipping agency, showcasing its logistics services, shipment tracking, and promotions.'
            },
            tools: ['React', 'TypeScript', 'Tailwind CSS'],
            images: ['/LHSPA1.png', '/LHSPA2.png', '/LHSPA3.png'],
            hoverType: 'image'
        },
        {
            title: 'SafeMine AI',
            link: 'https://modelo-ia-proyecto-mineria.pages.dev/',
            description: {
                es: 'Simulación de proyecto empresarial que utiliza IA (Gemini) para transformar datos meteorológicos en alertas preventivas automáticas.',
                en: 'Simulation of a business project that uses AI (Gemini) to transform meteorological data into automatic preventive alerts.'
            },
            tools: ['React', 'JavaScript', 'Python', 'FastApi'],
            images: ['/SM1.png', '/SM2.png'],
            hoverType: 'image'
        },
        {
            title: 'Ferrelect',
            link: 'https://github.com/ajliy97/Ferrelect',
            description: {
                es: 'Simulador de ecommerce para suministros eléctricos y ferretería, integrando catálogo dinámico y carrito interactivo.',
                en: 'Ecommerce simulator for electrical and hardware products with dynamic catalog and interactive shopping cart.'
            },
            tools: ['React', 'Tailwind CSS', 'TypeScript', 'MongoDB'],
            //image: 'https://images.unsplash.com/photo-1581091226045-4a66f799e992?q=80&w=800',
            //hoverType: 'image'
        },
        {
            title: 'Soflicenses',
            link: 'https://github.com/ajliy97/SoftLicenses-CRUD#',
            description: {
                es: 'Simulación de ecommerce para gestión de licencias, incluyendo acceso autenticado, registro de clientes y flujo de compra.',
                en: 'Ecommerce simulator for managing and selling software licenses. Includes user login, registration, and shopping cart.'
            },
            tools: ['React', 'Tailwind CSS', 'Java', 'SpringBoot', 'PostgreSQL']
        }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-6">
            <div className="text-center">
                <h2 className="text-3xl font-mono text-gray-900 dark:text-white md:mb-12 mb-10 text-center">
                    {t({ es: 'Proyectos', en: 'Projects' })}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} t={t} />
                ))}
            </div>
        </section>
    );
}

export default Projects;