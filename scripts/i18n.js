// Simple site-wide i18n with persistent language (localStorage)
// Usage:
// - Add data-i18n="key" to any element whose textContent should be translated
// - Add data-i18n-placeholder="key" to inputs/placeholders
// - Place a button with id="langToggle" to toggle between ES/EN
// - Include this script with defer on every page

(function () {
  const STORAGE_KEY = 'site_lang';
  const DEFAULT_LANG = 'es';

  const dict = {
    es: {
      'menu.work': 'Work',
      'menu.about': 'About',
      'menu.ai': 'AI Lab',
      'cta.more': 'Ver más detalle',
      'password.title': 'Acceso Requerido',
      'password.desc': 'Por favor, introduce la contraseña para continuar.',
      'password.placeholder': 'Introduce la contraseña',
      'password.error': 'Contraseña incorrecta. Por favor, inténtalo de nuevo.',
      'password.submit': 'Continuar',
      // AI Corner - JS Web
      'card.jsweb.title': 'JS Web — Vibe Coding',
      'card.jsweb.subtitle': 'Portfolio personal desarrollado íntegramente con inteligencia artificial',
      'card.jsweb.overlayShort': 'Portfolio creado como experimento técnico y creativo, combinando diseño, prompting y desarrollo asistido por IA.',
      'card.jsweb.long1': '"JS Web – Vibe Coding" es un proyecto personal que explora el potencial del desarrollo web potenciado por IA.',
      'card.jsweb.long2': 'Todo el proceso —desde la concepción visual hasta la estructura de código— ha sido guiado mediante prompting en ChatGPT, integrando Cursor.ai como entorno de desarrollo y coordinación del flujo de trabajo.',
      'card.jsweb.long3': 'Algunas imágenes y recursos visuales se generaron con Nano Banana, y para efectos de presentación interactiva y motion se utilizó Unicorn.studio.',
      'card.jsweb.long4': 'El resultado es una web dinámica, moderna y coherente visualmente, donde el diseño, la tecnología y la IA se integran para expresar una nueva forma de crear digitalmente.',
      // AI Corner - Make
      'card.make.title': 'Automatizaciones Make.com',
      'card.make.subtitle': 'Generación automática de contenidos para Instagram y X.',
      'card.make.overlayShort': 'Automatización completa de contenido para redes sociales usando Make.com. Generación automática de posts para Instagram y X con programación inteligente.',
      // AI Corner - CNAPP
      'card.cnapp.title': 'CNAPP Survival',
      'card.cnapp.subtitle': 'App de supervivencia con Lovable.',
      'card.cnapp.overlayShort': 'Aplicación de supervivencia desarrollada con Lovable, plataforma de desarrollo con IA. Experiencia completa de supervivencia en situaciones extremas.',
      // AI Corner - RRSS
      'card.rrss.title': 'Contenidos RRSS',
      'card.rrss.subtitle': 'ChatGPT entrenado con datos empresariales.',
      'card.rrss.overlayShort': 'ChatGPT personalizado entrenado con datos específicos de la empresa para generar temas, desarrollar contenidos y proponer ideas de ilustración para redes sociales.',
      // AI Corner - Amazon
      'card.amazon.title': 'Amazon AI Series',
      'card.amazon.subtitle': 'Consistencia visual con IA temprana.',
      'card.amazon.overlayShort': 'Proyecto pionero de generación de imágenes con IA de hace más de un año, cuando lograr consistencia visual era un verdadero desafío técnico.',
      // About
      'about.h1': 'Para qué diseñamos',
      'about.p1': 'Me enganché a esta profesión cuando descubrí que un detalle de interacción, una micro-animación o un flujo bien pensado puede ser la diferencia entre frustración y una experiencia fluida.',
      'about.p2': 'Vengo del diseño gráfico, una disciplina que todavía disfruto y en la que sigo colaborando en algunos proyectos. Ahí entendí algo clave: diseñar va mucho más allá de la estética. Se trata de comunicar, de resolver problemas y de dar sentido a cada decisión visual. Esa base me enseñó a cuidar los detalles, pero sobre todo a asumir que un buen diseño no solo se ve bien: funciona, conecta y facilita. Esa forma de pensar es la que sigo aplicando hoy en producto digital y en cada proyecto que desarrollo.',
      'about.p3': 'Estamos en un momento brutal, donde se está redibujando la manera de diseñar y de usar productos digitales. Me motiva pensar en cómo combinar lo mejor de la creatividad con las nuevas tecnologías. Para mí, el reto es claro: hacer que la tecnología siga estando al servicio de las personas.',
      'about.p4': 'He liderado equipos y proyectos de diseño UX/UI, producto y branding durante años, siempre con metodologías ágiles y un enfoque práctico: testear rápido, aprender y mejorar. Me muevo con naturalidad entre lo visual, lo estratégico y lo técnico (Figma, Webflow, Adobe Suite, 3D, animación…), porque creo que el buen diseño pasa por entender todos los ángulos.',
      'about.p5': 'Y bueno, más allá de las etiquetas, lo que me mueve es seguir aprendiendo, experimentar con lo que viene y diseñar experiencias que realmente sumen. Si quieres ver el recorrido más formal, te paso mi CV encantado. 😉',
      // Project page
      'project.back': 'Atrás',
      'project.gallery': 'Galería del proyecto',
      'project.other': 'Ver otros proyectos',
      'project.view': 'Ver proyecto',
      'project.notFound': 'Proyecto no encontrado',
      'project.notFoundBack': 'Vuelve a',
      // Work page
      'work.error': 'Error al cargar proyectos',
    },
    en: {
      'menu.work': 'Work',
      'menu.about': 'About',
      'menu.ai': 'AI Lab',
      'cta.more': 'View details',
      'password.title': 'Access Required',
      'password.desc': 'Please enter the password to continue.',
      'password.placeholder': 'Enter password',
      'password.error': 'Incorrect password. Please try again.',
      'password.submit': 'Continue',
      // AI Corner - JS Web
      'card.jsweb.title': 'JS Web — Vibe Coding',
      'card.jsweb.subtitle': 'Personal portfolio developed entirely with artificial intelligence',
      'card.jsweb.overlayShort': 'Portfolio created as a technical and creative experiment, combining design, prompting and AI-assisted development.',
      'card.jsweb.long1': '"JS Web – Vibe Coding" is a personal project exploring the potential of AI-augmented web development.',
      'card.jsweb.long2': 'The whole process—from visual concept to code structure—was guided through prompting in ChatGPT, integrating Cursor.ai as the development environment and the workflow coordination hub.',
      'card.jsweb.long3': 'Some images and visual assets were generated with Nano Banana, and Unicorn.studio was used for interactive presentation and motion effects.',
      'card.jsweb.long4': 'The result is a dynamic, modern and visually coherent website where design, technology and AI come together to express a new way of creating digitally.',
      // AI Corner - Make
      'card.make.title': 'Make.com Automations',
      'card.make.subtitle': 'Automatic content generation for Instagram and X.',
      'card.make.overlayShort': 'End-to-end social content automation using Make.com. Automatic posts for Instagram and X with smart scheduling.',
      // AI Corner - CNAPP
      'card.cnapp.title': 'CNAPP Survival',
      'card.cnapp.subtitle': 'Survival app built with Lovable.',
      'card.cnapp.overlayShort': 'Survival application developed with Lovable, an AI-powered development platform. Full survival experience for extreme scenarios.',
      // AI Corner - RRSS
      'card.rrss.title': 'Social Content',
      'card.rrss.subtitle': 'ChatGPT trained with company data.',
      'card.rrss.overlayShort': 'Custom ChatGPT trained with company-specific data to generate topics, develop content and suggest illustration ideas for social media.',
      // AI Corner - Amazon
      'card.amazon.title': 'Amazon AI Series',
      'card.amazon.subtitle': 'Visual consistency with early-stage AI.',
      'card.amazon.overlayShort': 'Pioneering project of AI image generation from more than a year ago, when achieving visual consistency was a real technical challenge.',
      // About
      'about.h1': 'What we design for',
      'about.p1': 'I fell in love with this craft when I discovered that an interaction detail, a micro-animation or a well-thought flow can be the difference between frustration and a smooth experience.',
      'about.p2': 'I come from graphic design, a discipline I still enjoy and collaborate on. There I learned something key: design goes far beyond aesthetics. It is about communicating, solving problems and giving meaning to each visual decision. That foundation taught me to care for details, but above all to assume that good design is not only good-looking: it works, connects and enables. That way of thinking is what I apply today in digital product and every project I develop.',
      'about.p3': 'We are in an exciting moment, where the way we design and use digital products is being redrawn. I am motivated by combining the best of creativity with new technologies. For me, the challenge is clear: making technology remain at the service of people.',
      'about.p4': 'I have led UX/UI, product and branding teams and projects for years, always with agile methodologies and a practical approach: test fast, learn and improve. I move comfortably between visual, strategic and technical work (Figma, Webflow, Adobe Suite, 3D, animation…), because good design comes from understanding every angle.',
      'about.p5': 'Beyond labels, what drives me is to keep learning, experiment with what is coming, and design experiences that truly add value. If you want the more formal overview, I will gladly share my CV. 😉',
      // Project page
      'project.back': 'Back',
      'project.gallery': 'Project Gallery',
      'project.other': 'View other projects',
      'project.view': 'View project',
      'project.notFound': 'Project not found',
      'project.notFoundBack': 'Go back to',
      // Work page
      'work.error': 'Error loading projects',
    },
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    const normalized = (lang || '').toString().trim().toLowerCase();
    const safe = normalized === 'en' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, safe);
  }

  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) || key;
  }

  // Helper to get field in current language (fallback to ES if EN not available)
  function getField(obj, fieldName) {
    const lang = getLang();
    if (lang === 'en') {
      // Try to get EN version first (field_en), fallback to ES
      const enField = `${fieldName}_en`;
      return obj[enField] || obj[fieldName] || '';
    }
    return obj[fieldName] || '';
  }

  // Expose helper globally
  window.i18nGetField = getField;
  window.i18nGetLang = getLang;

  // Main toggle function
  function toggleLang(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
    
    const current = getLang();
    console.log('toggleLang called. Current lang:', current);
    const next = current === 'es' ? 'en' : 'es';
    console.log('Switching to:', next);
    setLang(next);
    console.log('Lang saved to localStorage:', localStorage.getItem(STORAGE_KEY));
    console.log('Reloading page...');
    // Reload so the whole page content follows the chosen language everywhere
    setTimeout(() => window.location.reload(), 100);
  }
  window.toggleLang = toggleLang;
  
  // Debug: expose functions for console testing
  window.getLang = getLang;
  window.setLang = setLang;

  function applyTranslations() {
    // Update html lang
    document.documentElement.setAttribute('lang', getLang());

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = t(key);
      if (value) el.setAttribute('placeholder', value);
    });

    // Update lang toggle label - show the ACTION (language to switch TO)
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      const current = getLang().toLowerCase();
      // Show the language you will switch TO (if ES, show EN; if EN, show ES)
      langBtn.textContent = current === 'es' ? 'EN' : 'ES';
      langBtn.setAttribute('aria-label', current === 'es' ? 'Switch to English' : 'Cambiar a Español');
      langBtn.setAttribute('title', current === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
  }

  // Expose applyTranslations globally
  window.applyTranslations = applyTranslations;

  // Initialize lang toggle button with event delegation
  function initLangButton() {
    // Use event delegation on document to catch all clicks
    document.addEventListener('click', function(e) {
      // Check if the click was on the lang toggle button
      if (e.target && e.target.id === 'langToggle') {
        console.log('langToggle clicked via delegation!');
        toggleLang(e);
      }
    }, true); // Use capture phase to ensure we catch it first
  }

  // Initial apply
  function init() {
    console.log('i18n init called');
    // Default lang if not set
    const stored = localStorage.getItem(STORAGE_KEY);
    console.log('Stored lang:', stored);
    if (!stored || (stored !== 'es' && stored !== 'en')) {
      setLang(DEFAULT_LANG);
      console.log('Set default lang:', DEFAULT_LANG);
    }
    applyTranslations();
    console.log('Translations applied. Current lang:', getLang());
  }

  // Initialize event delegation immediately (no need to wait for DOM)
  initLangButton();

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  console.log('i18n.js loaded. toggleLang available:', typeof window.toggleLang);
})();
