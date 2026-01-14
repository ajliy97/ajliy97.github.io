# 💼 Mi Portafolio Personal

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS. Presenta mis habilidades, proyectos y experiencia como desarrollador full-stack.

## ✨ Características

- 🌐 **Multiidioma**: Soporte para español e inglés
- 🌓 **Modo Oscuro/Claro**: Tema adaptable según preferencias del usuario
- 📱 **Responsive Design**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Animaciones Suaves**: Carrusel infinito de tecnologías con transiciones fluidas
- 🎨 **UI Moderna**: Diseño limpio y profesional con Tailwind CSS
- ⌨️ **Efecto de Escritura**: Animación de texto tipo máquina de escribir
- 🎯 **Navegación Fluida**: Experiencia de usuario intuitiva

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 19.2.0
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.1
- **Iconos**: React Icons
- **Build Tool**: Vite 7.2
- **Linting**: ESLint


## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/mi-portafolio.git
cd mi-portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📂 Estructura del Proyecto

```
mi-portafolio/
├── src/
│   ├── components/
│   │   ├── AboutMe.tsx       # Sección sobre mí con animación
│   │   ├── Contact.tsx       # Información de contacto
│   │   ├── LanguageContext.tsx # Contexto de idioma
│   │   ├── Navbar.tsx        # Barra de navegación
│   │   ├── Projects.tsx      # Sección de proyectos
│   │   └── Skills.tsx        # Carrusel de habilidades técnicas
│   ├── pages/
│   │   └── Home.tsx          # Página principal
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales y animaciones
├── public/                    # Archivos estáticos
└── package.json              # Dependencias y scripts
```

## 🎨 Características Técnicas

### Carrusel Infinito
Implementación de un carrusel de tecnologías con:
- Animación CSS personalizada
- Velocidad adaptativa según dispositivo
- Transición suave sin saltos
- Optimización de rendimiento con `will-change`

### Sistema de Idiomas
Context API para cambio de idioma en tiempo real sin recargar la página.

### Modo Oscuro
Implementación con Tailwind CSS utilizando la variante `dark:` para una experiencia visual óptima.

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
