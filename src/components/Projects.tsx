import { useLanguage } from './LanguageContext';

function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'La Herradura SPA',
            description: { 
                es: 'Página informativa para una empresa de envíos de paquetería, destacando sus servicios y promociones.', 
                en: 'Information page for a parcel delivery company, highlighting its services and promotions.' 
            },
            tools: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
            title: 'Ferrelect',
            description: { 
                es: 'Ecommerce de productos eléctricos y de ferretería con catálogo y carrito de compra.', 
                en: 'Ecommerce for electrical and hardware products with catalog and shopping cart.' 
            },
            tools: ['React', 'Tailwind CSS', 'TypeScript', 'MongoDB']
        },
        {
            title: 'SafeMine AI',
            description: { 
                es: 'Simulación de proyecto empresarial que utiliza IA (Gemini) para transformar datos meteorológicos en alertas preventivas automáticas.', 
                en: 'Simulation of a business project that uses AI (Gemini) to transform meteorological data into automatic preventive alerts.' 
            },
            tools: ['React', 'JavaScript', 'Python', 'FastApi']
        },
        {
            title: 'Soflicenses',
            description: { 
                es: 'Ecommerce para la gestión y venta de licencias de software. Incluye inicio de sesión, registro de usuarios y carrito de compra.', 
                en: 'Ecommerce for managing and selling software licenses. Includes user login, registration, and shopping cart.' 
            },
            tools: ['React', 'Tailwind CSS', 'Java', 'SpringBoot', 'PostgreSQL']
        }
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-8">
            <h2 className="text-3xl font-mono text-gray-900 dark:text-white mb-8 text-center">
                {t({ es: 'Proyectos', en: 'Projects' })}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-sans text-gray-900 dark:text-white mb-3">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {t(project.description)}
                        </p>
                        {/* Recuadro de herramientas */}
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, toolIndex) => (
                                <span 
                                    key={toolIndex}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;