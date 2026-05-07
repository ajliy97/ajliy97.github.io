import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

function AboutMe() {
    const { t } = useLanguage();
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = t({
        es: '<Hola visitante; />',
        en: '<Hello outsider; />'
    });

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && typedText.length < fullText.length) {
                setTypedText(fullText.substring(0, typedText.length + 1));
            } else if (!isDeleting && typedText.length === fullText.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typedText.length > 0) {
                setTypedText(fullText.substring(0, typedText.length - 1));
            } else if (isDeleting && typedText.length === 0) {
                setIsDeleting(false);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, fullText]);

    return (
        <section id="about" className="scroll-mt-24 w-full max-w-6xl mx-auto p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LADO IZQUIERDO: TEXTO */}
                <div className="space-y-2.5 text-left">
                    <div className="space-y-1">
                        <div className="pt-0">
                        <p className="md:text-xl text-base font-mono text-cyan-500 dark:text-blue-400 min-h-8">
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>

                        <p className="text-lg md:xl font-mono text-gray-500 dark:text-gray-400">
                            {t({ es: 'Mi nombre es', en: 'My name is' })}
                        </p>

                        <div className="flex items-baseline gap-1.5 flex-wrap">
                            <h1 className="about-head text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                                Adrian Liy
                            </h1>
                            <span className="text-xs md:text-sm italic text-gray-500 dark:text-gray-500 font-medium">
                                {t({ es: 'Ingeniero Informático', en: 'Computer Engineer' })}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2 about-text">
                        <p className="text-gray-500 md:text-base dark:text-gray-400 leading-relaxed italic text-center md:text-left">
                            {t({
                                es: 'No es solo código o diseño lo que necesitas, es una experiencia que conecte de verdad. Para mí esto es más que crear: se trata de construir experiencias duraderas.',
                                en: "It's not just code or design you need, it's an experience that truly connects. For me this is more than creating: it's about building lasting experiences."
                            })}
                        </p>
                        <p className="text-gray-500 md:text-base dark:text-gray-400 leading-relaxed italic text-center md:text-left">
                            {t({
                                es: 'Si estás aquí, es porque buscas a alguien que no solo desarrolle, sino que se involucre en el propósito. Mi enfoque une la calidad con la capacidad para que, juntos, creemos algo significativo.',
                                en: "If you're here, it's because you're looking for someone who doesn't just develop, but who is truly committed to the cause. My approach combines quality with capability so that, together, we can create something meaningful."
                            })}
                        </p>
                    </div>

                    
                </div>

                {/* LADO DERECHO: IMAGEN */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>

                        <div className="relative overflow-hidden w-64 h-64 md:w-80 md:h-80 rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <img 
                                src="/me.png" 
                                alt="Adrian Liy" 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutMe;