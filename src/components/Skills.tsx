import { useLanguage } from "./LanguageContext";
import { 
    SiPython, 
    SiAngular, 
    SiPostgresql, 
    SiReact, 
    SiTypescript, 
    SiNodedotjs, 
    SiJavascript, 
    SiGit,
    SiMongodb,
    SiPostman,
    SiSpringboot,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiHtml5,
    SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Skills() {
    const { t } = useLanguage();

    const technologies = [
        { name: 'Python', icon: SiPython, color: 'text-blue-600 dark:text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-600 dark:text-sky-400' },
        { name: 'Angular', icon: SiAngular, color: 'text-red-600 dark:text-red-400' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700 dark:text-blue-300' },
        { name: 'React', icon: SiReact, color: 'text-cyan-600 dark:text-cyan-300' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700 dark:text-blue-400' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600 dark:text-orange-400' },
        { name: 'SpringBoot', icon: SiSpringboot, color: 'text-green-600 dark:text-green-400' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600 dark:text-purple-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600 dark:text-green-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-600 dark:text-yellow-300' },
        { name: 'CSS3', icon: SiCss3, color: 'text-blue-600 dark:text-blue-400' },
        { name: 'mysql', icon: SiMysql, color: 'text-blue-700 dark:text-blue-300' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600 dark:text-orange-400' },
        { name: 'Java', icon: FaJava, color: 'text-red-600 dark:text-red-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700 dark:text-green-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-600 dark:text-orange-400' }
    ];

    return (
        <section className="w-full max-w-8xl mx-auto py-8">
            <h2 className="text-3xl font-mono text-gray-900 dark:text-white mb-12 text-center">
                {t({ es: 'Herramientas', en: 'Tech Stack' })}
            </h2>
            <div className="relative overflow-hidden w-full">
                <div className="inline-flex animate-scroll will-change-transform">
                    {/* Duplicar el arreglo para crear efecto de desplazamiento infinito  */}
                    {[...technologies, ...technologies].map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div
                                key={index}
                                className="shrink-0 flex-none px-4 sm:px-4 md:px-6 flex flex-col items-center justify-center"
                            >
                                <div className="mb-2 hover:scale-110 transition-transform duration-300">
                                    <IconComponent className={`text-4xl sm:text-5xl md:text-6xl ${tech.color}`} />
                                </div>
                                <p className={`text-xs sm:text-sm font-mono ${tech.color}`}>
                                    {tech.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;