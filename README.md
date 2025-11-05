# BlueDeBug - Página Web Corporativa

## 🎨 Descripción

Página web moderna y profesional para BlueDeBug, empresa de transformación digital. Diseño impactante con colores corporativos azul y negro.

## ✨ Características

- **Diseño Moderno**: Efectos glassmorphism, gradientes animados y transiciones suaves
- **Totalmente Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Avanzadas**: Scroll animations, parallax effects, cursor personalizado
- **Secciones Completas**:
  - Hero con call-to-action
  - Servicios (6 servicios destacados)
  - Sobre Nosotros con estadísticas
  - Portafolio de proyectos
  - Formulario de contacto funcional
  - Footer completo

## 🚀 Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (sin dependencias)
- Google Fonts (Inter & Poppins)

## 📁 Estructura de Archivos

```
WebBlueDeBug/
├── index.html          # Estructura principal
├── styles.css          # Estilos y animaciones
├── script.js           # Interactividad y efectos
├── logo.png            # Logo de la empresa
└── README.md           # Este archivo
```

## 🎯 Instalación

1. **Guarda el logo**: 
   - Guarda el logo de BlueDeBug como `logo.png` en la carpeta raíz del proyecto
   - Tamaño recomendado: 200x200px o mayor (se escala automáticamente)

2. **Abre el proyecto**:
   - Simplemente abre `index.html` en tu navegador
   - O usa Live Server en VS Code para desarrollo

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-blue: #2196F3;
    --primary-black: #0A0E27;
    /* ... más colores */
}
```

### Contenido
- **Servicios**: Modifica el contenido en la sección `.services-grid` del HTML
- **Proyectos**: Actualiza `.portfolio-grid` con tus proyectos reales
- **Información de Contacto**: Cambia datos en la sección `.contact`

### Fuentes
Las fuentes actuales son Inter y Poppins. Para cambiarlas:
1. Actualiza el link de Google Fonts en el `<head>`
2. Modifica las variables `--font-primary` y `--font-secondary`

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Móvil: < 768px
- Móvil pequeño: < 480px

## ⚡ Características Interactivas

- **Menú de navegación**: Se vuelve sticky al hacer scroll
- **Animaciones on-scroll**: Elementos aparecen al hacer scroll
- **Formulario de contacto**: Validación incluida (configura backend)
- **Cursor personalizado**: Solo en desktop
- **Contador animado**: En la sección "Sobre Nosotros"
- **Efecto parallax**: En la sección hero

## 🔧 Próximos Pasos

1. **Logo**: Guarda tu logo como `logo.png`
2. **Imágenes**: Añade imágenes reales para el portafolio
3. **Backend**: Conecta el formulario a tu servidor/API
4. **SEO**: Optimiza meta tags y añade structured data
5. **Analytics**: Integra Google Analytics o alternativa
6. **Hosting**: Despliega en Netlify, Vercel, o tu hosting preferido

## 📞 Información de Contacto

Actualiza estos datos en `index.html`:
- Email: info@bluedebug.com
- Teléfono: +34 123 456 789
- Ubicación: Madrid, España
- Redes sociales: LinkedIn, Twitter, GitHub, Instagram

## 🌟 Tips para Mejores Resultados

1. **Optimiza imágenes**: Usa formatos WebP para mejor rendimiento
2. **CDN**: Considera usar un CDN para assets estáticos
3. **Minificación**: Minifica CSS y JS para producción
4. **Lighthouse**: Ejecuta auditorías de rendimiento
5. **Testing**: Prueba en diferentes navegadores y dispositivos

## 📄 Licencia

Página web desarrollada para BlueDeBug - 2025

---

**Desarrollado con ❤️ para transformación digital**
