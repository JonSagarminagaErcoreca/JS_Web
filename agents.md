# Reglas del Proyecto JSweb

## Estructura del Proyecto

### Arquitectura General
- **Portfolio personal** con enfoque en diseño UX/UI y desarrollo web
- **Estructura modular** con separación clara de responsabilidades
- **Navegación consistente** entre todas las páginas
- **Sistema de diseño unificado** con tokens CSS

### Páginas Principales
1. **index.html** - Página de inicio con efecto líquido interactivo
2. **work.html** - Galería de proyectos con carrusel horizontal
3. **about.html** - Página personal con fondo de imagen
4. **ai-corner.html** - Laboratorio de experimentos con IA
5. **project.html** - Página dinámica de detalle de proyectos

## Reglas de Diseño

### Sistema de Colores
```css
:root {
  --bg: #ffffff;
  --text: #0f172a;
  --muted: #667085;
  --card: #ffffff;
  --card-ink: #0f172a;
  --panel-bg: rgba(255,255,255,0.67);
  --panel-ink: #6b7280;
  --stroke: rgba(15,23,42,.10);
  --fill-soft: rgba(15,23,42,.04);
}
```

### Tipografía
- **Fuente principal**: Montserrat Alternates
- **Pesos utilizados**: 400, 500, 600, 700
- **Jerarquía consistente** en títulos y textos
- **Letter-spacing**: -0.01em para títulos principales

### Espaciado y Layout
- **Grid system** de 12 columnas para layouts complejos
- **Gap consistente**: 16px entre elementos
- **Border radius**: 12px-20px para cards y elementos
- **Padding estándar**: 24px para contenedores principales

## Reglas de Navegación

### Menú Principal
- **Posición fija** en la parte superior
- **Backdrop blur** para efecto glassmorphism
- **Animaciones suaves** en transiciones
- **Logo interactivo** con gradientes aleatorios en hover
- **Menú hamburguesa** con animación a X

### Enlaces de Navegación
- **Work** → work.html
- **About** → about.html  
- **AI Lab** → ai-corner.html
- **Logo** → index.html (página de inicio)

## Reglas de Interacción

### Efectos Hover
- **Transform scale(1.02)** para cards
- **Transform translateY(-2px)** para elementos flotantes
- **Gradientes aleatorios** en logo
- **Blur effects** en imágenes de fondo
- **Transiciones suaves** con cubic-bezier

### Animaciones
- **Duración estándar**: 0.3s para hover, 0.5s para transiciones complejas
- **Easing**: cubic-bezier(.2,.6,.2,1) para movimientos naturales
- **Transform origin**: center para escalados
- **Will-change**: transform para optimización

## Reglas de Contenido

### Estructura de Proyectos (projects.json)
```json
{
  "id": "string",
  "slug": "string", 
  "title": "string",
  "category": "string",
  "year": "string",
  "image": "url",
  "hero": {
    "type": "video|image",
    "src": "url"
  },
  "desc": "string",
  "tags": ["array"],
  "description": {
    "overview": "string",
    "sections": [{"title": "string", "content": "string"}]
  },
  "gallery": ["array of urls"],
  "links": {
    "case": "url",
    "repo": "url", 
    "live": "url"
  }
}
```

### Categorías de Proyectos
- **DIGITAL TWIN** - Gemelos digitales y simulaciones
- **APP DESIGN** - Diseño de aplicaciones móviles
- **BRANDING** - Identidad visual y marca
- **WEB DESIGN** - Diseño web y desarrollo
- **UX/UI DESIGN** - Experiencia de usuario
- **DIGITAL ART** - Arte digital y generativo

## Reglas Técnicas

### CSS
- **CSS Custom Properties** para sistema de tokens
- **Mobile-first** approach con media queries
- **Backdrop-filter** para efectos glassmorphism
- **Grid y Flexbox** para layouts
- **Z-index hierarchy**: 2000+ para overlays, 10000+ para modales

### JavaScript
- **Vanilla JS** sin frameworks pesados
- **Event delegation** para performance
- **RequestAnimationFrame** para animaciones suaves
- **LocalStorage** para persistencia de estado
- **Modular functions** para reutilización

### Responsive Design
- **Breakpoints**:
  - Mobile: max-width 560px
  - Tablet: max-width 980px
  - Desktop: 980px+
- **Grid adaptativo** que cambia columnas según dispositivo
- **Touch-friendly** en móviles con gestos de arrastre

## Reglas de Performance

### Optimización de Imágenes
- **Lazy loading** para imágenes de galería
- **WebP format** cuando sea posible
- **Object-fit: cover** para mantener proporciones
- **Alt text** descriptivo para accesibilidad

### Carga de Recursos
- **Preconnect** a Google Fonts
- **Defer** en scripts no críticos
- **CDN** para librerías externas
- **Minificación** en producción

## Reglas de Accesibilidad

### ARIA Labels
- **aria-label** en botones interactivos
- **aria-hidden="true"** en elementos decorativos
- **aria-busy** para estados de carga
- **role="navigation"** en menús

### Navegación por Teclado
- **Tab order** lógico
- **Focus visible** en elementos interactivos
- **Escape key** para cerrar modales
- **Enter/Space** para activar elementos

## Reglas de SEO

### Meta Tags
- **Title dinámico** por página
- **Description** descriptiva
- **Viewport** responsive
- **Charset UTF-8**

### Estructura Semántica
- **HTML5 semantic tags**: header, nav, main, section, article
- **Heading hierarchy** correcta (h1, h2, h3...)
- **Alt text** en todas las imágenes
- **Schema markup** para proyectos

## Reglas de Mantenimiento

### Organización de Archivos
```
/
├── index.html (página principal)
├── work.html (galería de proyectos)
├── about.html (página personal)
├── ai-corner.html (laboratorio IA)
├── project.html (detalle dinámico)
├── projects.json (datos de proyectos)
├── assets/
│   ├── cursors/ (recursos visuales)
│   └── MSM/ (imágenes de proyectos)
├── styles/
│   └── global.css (estilos principales)
└── scripts/
    └── menu.js (funcionalidad menú)
```

### Convenciones de Código
- **CamelCase** para variables JavaScript
- **kebab-case** para clases CSS
- **PascalCase** para componentes
- **Comentarios descriptivos** en código complejo

### Versionado
- **Git** para control de versiones
- **Commits descriptivos** con cambios claros
- **Branches** para features nuevas
- **Tags** para releases

## Reglas de Seguridad

### Enlaces Externos
- **rel="noopener"** en enlaces externos
- **target="_blank"** solo cuando sea necesario
- **Validación** de URLs antes de renderizar

### Contenido Dinámico
- **Sanitización** de datos del JSON
- **Escape** de caracteres especiales
- **Validación** de estructura de datos

## Reglas de Testing

### Funcionalidad
- **Cross-browser** testing
- **Mobile responsiveness** en diferentes dispositivos
- **Performance** con Lighthouse
- **Accessibility** con herramientas de auditoría

### Datos
- **Validación** de estructura JSON
- **Fallbacks** para datos faltantes
- **Error handling** en carga de recursos
- **Loading states** para mejor UX

---

*Este documento define las reglas y convenciones del proyecto JSweb. Debe actualizarse cuando se añadan nuevas funcionalidades o se modifiquen patrones existentes.*

