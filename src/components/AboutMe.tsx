import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

function AboutMe() {
    const { t } = useLanguage();
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = t({ 
        es: '<Observar; Analizar; Codificar />', 
        en: '<Observe; Analyze; Code />' 
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
        <section className="w-full max-w-4xl mx-auto p-6 md:p-8">  {/*bg-white dark:bg-gray-800 rounded-lg shadow-lg*/}
            <h2 className="text-3xl text-gray-900 font-mono dark:text-white mb-6">
                {t({ es: 'Hola visitante.', en: 'Hello outsider.' })}
            </h2>
            
            <div className="space-y-4">
                <p className="text-gray-700 md:text-lg dark:text-gray-300 leading-relaxed">
                    {t({ 
                        es: 'No es solo código o diseño lo que necesitas, es una experiencia que conecte de verdad. Soy Adrian, y para mí esto es más que crear: se trata de construir experiencias duraderas.',
                        en: "It's not just code or design you need, it's an experience that truly connects. I'm Adrian, and for me this is more than creating: it's about building lasting experiences."
                    })}
                </p>
                <p className="text-gray-700 md:text-lg dark:text-gray-300 leading-relaxed" >
                    {t({
                        es: 'Si estás aquí, es porque buscas a alguien que no solo desarrolle, sino que se involucre en el propósito. Mi enfoque une la pasión por construir software de calidad con la capacidad analítica para que, juntos, hagamos cosas grandes.',
                        en: "If you're here, it's because you're looking for someone who doesn't just develop, but gets involved in the purpose. My approach combines the passion for building quality software with analytical skills so that, together, we can do great things."
                    })}
                </p>
                
                <p className="md:text-xl text-base font-mono text-blue-600 dark:text-blue-400 min-h-8">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </p>
            </div>
        </section>
    );
}

export default AboutMe;