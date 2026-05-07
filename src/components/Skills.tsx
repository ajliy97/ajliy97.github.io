import { useLanguage } from "./LanguageContext";
import {
    SiPython, SiAngular, SiPostgresql, SiReact, SiTypescript,
    SiNodedotjs, SiJavascript, SiGit, SiMongodb, SiPostman,
    SiSpringboot, SiBootstrap, SiTailwindcss, SiMysql,
    SiHtml5, SiAuthentik, SiFirebase, SiDocker
} from 'react-icons/si';
import { FaCss3Alt } from "react-icons/fa6";
import { FaJava } from 'react-icons/fa';

function Skills() {
    const { t } = useLanguage();

    const technologies = [
        // Lenguajes
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-600 dark:text-yellow-300', bgColor: 'bg-yellow-200 dark:bg-yellow-900/20' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700 dark:text-blue-400', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        { name: 'Python', icon: SiPython, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        { name: 'Java', icon: FaJava, color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-200 dark:bg-red-900/20' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-200 dark:bg-orange-900/20' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        // Frameworks y Librerías
        { name: 'React', icon: SiReact, color: 'text-cyan-600 dark:text-cyan-300', bgColor: 'bg-cyan-200 dark:bg-cyan-900/20' },
        { name: 'Angular', icon: SiAngular, color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-200 dark:bg-red-900/20' },
        { name: 'SpringBoot', icon: SiSpringboot, color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-200 dark:bg-green-900/20' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-200 dark:bg-green-900/20' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-600 dark:text-sky-400', bgColor: 'bg-sky-200 dark:bg-sky-900/20' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-200 dark:bg-purple-900/20' },
        //Bases de Datos
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700 dark:text-blue-300', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        { name: 'mysql', icon: SiMysql, color: 'text-blue-700 dark:text-blue-300', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700 dark:text-green-400', bgColor: 'bg-green-200 dark:bg-green-900/20' },
        //Herramientas y DEVOPS
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-200 dark:bg-yellow-900/20' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-200 dark:bg-orange-900/20' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-200 dark:bg-blue-900/20' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-200 dark:bg-orange-900/20' },
        { name: 'Authentik', icon: SiAuthentik, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-200 dark:bg-orange-900/20' }
    ];

    return (
        <section className="w-full overflow-hidden">
            <h2 className="md:text-2xl text-lg font-mono text-cyan-500 dark:text-blue-400 mb-2 text-left md:pl-12 pl-2 mt-2">
                {t({ es: 'Tecnologías', en: 'Tech Stack' })}
            </h2>

            {/*
                SISTEMA DE DESVANECIMIENTO:
                maskImage: El 'black' es TRANSPARENCIA CERO (visible). El 'transparent' es TRANSPARENCIA TOTAL (invisible).
            */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 px-4 sm:px-12" style={{ 
                maskImage: 'linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 100%)'
            }}>
                <div className="relative overflow-hidden w-full">
                    <div className="inline-flex animate-scroll will-change-transform py-2">
                        {[...technologies, ...technologies].map((tech, index) => {
                            const IconComponent = tech.icon;
                            return (
                                <div
                                    key={index}
                                    className="shrink-0 flex-none px-2 sm:px-4 flex items-center group"
                                >
                                    <div className={`flex items-center gap-1.5 md:gap-2 px-3 sm:py-2 py-1.5 rounded-full border transition-all duration-300 
                                        ${tech.bgColor} border-transparent group-hover:border-current group-hover:scale-105 
                                        ${tech.color.replace('text-', 'border-')}`}>
                                            <IconComponent className={`text-2xl md:text-3xl ${tech.color}`} />
                                        <p className={`text-[10px] sm:text-base md:text-sm font-mono font-medium ${tech.color}`}>
                                            {tech.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;