// ========== SISTEMA DE IDIOMA GLOBAL ==========

// Ejecutar tras cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Textos comunes para nav y footer
  const texts = {
    es: {
      "lang-btn": "EN",
      "logo-text": "Wired Navi",
      "nav-inicio": "Inicio",
      "nav-sobre": "Sobre mí",
      "nav-servicios": "Servicios",
      "nav-proyectos": "Portafolio",
      "nav-contacto": "Contacto",
      "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi",
    },
    en: {
      "lang-btn": "ES",
      "logo-text": "Wired Navi",
      "nav-inicio": "Home",
      "nav-sobre": "About me",
      "nav-servicios": "Services",
      "nav-proyectos": "Portfolio",
      "nav-contacto": "Contact",
      "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi",
    },
  };

  // Textos específicos por página
  const pages = {
    "/index.html": {
      es: {
        "#hero-title": "¡Hola! Soy Catalina Ossandón",
        "#hero-desc": `<strong>Desarrolladora web & diseñadora independiente.</strong><br>
Creo sitios web modernos, atractivos y efectivos para empresas, pymes, profesionales, artistas y marcas personales.<br><br>¿Tu proyecto necesita presencia digital? ¡Aquí comienza!`,
        "#hero-btn": "Cotiza gratis tu web",
        "#hero-portfolio-btn": "Ver portafolio",
        "#resumen-servicios h2": "¿Qué puedo crear para ti?",
        "#resumen-servicios li:nth-child(1)":
          "✔️ Sitios web responsivos y personalizados",
        "#resumen-servicios li:nth-child(2)":
          "✔️ Formularios funcionales para captar clientes",
        "#resumen-servicios li:nth-child(3)":
          "✔️ Animaciones e interacción moderna",
        "#resumen-servicios li:nth-child(4)":
          "✔️ Botón de idioma y WhatsApp (si lo necesitas)",
        "#resumen-servicios li:nth-child(5)":
          "✔️ Optimización SEO básica / media",
        "#resumen-servicios li:nth-child(6)":
          "✔️ Soporte post-entrega y capacitación",
        "#resumen-servicios .cta-btn-secondary":
          "Ver todos los servicios y paquetes",
        "#por-que-web h2": "¿Por qué tu negocio necesita un sitio web propio?",
        "#por-que-web li:nth-child(1)":
          "🔹 Control total: No dependes de redes sociales o plataformas de terceros.",
        "#por-que-web li:nth-child(2)":
          "🔹 Credibilidad y confianza: Un sitio profesional transmite seriedad y confianza.",
        "#por-que-web li:nth-child(3)":
          "🔹 Capta más clientes: Formularios y llamadas a la acción para aumentar tus ventas.",
        "#por-que-web li:nth-child(4)":
          "🔹 Disponible 24/7: Tu negocio visible todo el año, sin límites geográficos.",
        "#por-que-web li:nth-child(5)":
          "🔹 Mejor posicionamiento en Google: Más visibilidad y oportunidades.",
        "#por-que-web .highlight":
          "🔗 ¡Destaca tu marca con un sitio web hecho a tu medida!",
        "#cta-final h2": "¿Listo para elevar tu presencia digital?",
        "#cta-final .cta-btn": "Contáctame ahora",
        "#cta-final .cta-btn-outline": "Ver ejemplos de mi trabajo",
      },
      en: {
        "#hero-title": "Hi! I'm Catalina Ossandón",
        "#hero-desc": `<strong>Web developer & independent designer.</strong><br>
I create modern, attractive and effective websites for businesses, professionals, artists and personal brands.<br><br>Does your project need a digital presence? Let's begin here!`,
        "#hero-btn": "Get a free quote",
        "#hero-portfolio-btn": "View portfolio",
        "#resumen-servicios h2": "What can I create for you?",
        "#resumen-servicios li:nth-child(1)":
          "✔️ Responsive and custom websites",
        "#resumen-servicios li:nth-child(2)":
          "✔️ Functional client-catching forms",
        "#resumen-servicios li:nth-child(3)":
          "✔️ Modern animations and interactivity",
        "#resumen-servicios li:nth-child(4)":
          "✔️ Language button & WhatsApp (if needed)",
        "#resumen-servicios li:nth-child(5)":
          "✔️ Basic / medium SEO optimization",
        "#resumen-servicios li:nth-child(6)":
          "✔️ Post-delivery support and training",
        "#resumen-servicios .cta-btn-secondary":
          "See all services and packages",
        "#por-que-web h2": "Why does your business need its own website?",
        "#por-que-web li:nth-child(1)":
          "🔹 Full control: No dependency on social media or third-party platforms.",
        "#por-que-web li:nth-child(2)":
          "🔹 Credibility and trust: A professional site builds confidence.",
        "#por-que-web li:nth-child(3)":
          "🔹 Capture more clients: Forms and CTAs to boost sales.",
        "#por-que-web li:nth-child(4)":
          "🔹 Available 24/7: Your business visible year-round, anywhere.",
        "#por-que-web li:nth-child(5)":
          "🔹 Better Google ranking: More visibility and opportunities.",
        "#por-que-web .highlight":
          "🔗 Make your brand stand out with a custom-built site!",
        "#cta-final h2": "Ready to boost your digital presence?",
        "#cta-final .cta-btn": "Contact me now",
        "#cta-final .cta-btn-outline": "View my work",
      },
    },
    "/sobre-mi.html": {
      es: {
        ".about-section h2": "¡Hola! Soy Catalina Ossandón",
        ".about-paragraph": `Desarrolladora front-end con enfoque en diseño funcional, visualmente atractivo y adaptado a cada cliente. Ayudo a profesionales, pymes y emprendedores a tener presencia digital con sitios modernos, responsivos y fáciles de gestionar.<br><br>Me involucro en cada etapa del proyecto, desde la planificación hasta el soporte final, para asegurar que tu web cumpla su propósito y represente lo que quieres comunicar.<br><br><strong>¿Por qué trabajar conmigo?</strong><br>• Diseño personalizado según tu público y objetivos.<br>• Comunicación clara y directa.<br>• Compromiso con la calidad, los plazos y el resultado final.<br><br><span class="highlight">Tu sitio web no solo debe verse bien: debe funcionar y conectar. Si estás buscando eso, hablemos.</span>`,
        ".about-section .cta-btn": "¡Contáctame!",
        ".about-section .cta-btn-outline": "Ver mi portafolio",
        ".about-extra h2": "¿Cómo trabajo?",
        ".about-extra li:nth-child(1)":
          "🔹 Escucho tus ideas y defino objetivos contigo.",
        ".about-extra li:nth-child(2)":
          "🔹 Propongo una solución visual y técnica adaptada a tu público.",
        ".about-extra li:nth-child(3)":
          "🔹 Desarrollo tu web con avances visibles y comunicación constante.",
        ".about-extra li:nth-child(4)":
          "🔹 Entrego el sitio listo, con capacitación y soporte post-lanzamiento.",
        ".about-extra .highlight": "¡Tu proyecto merece destacar en internet!",
      },
      en: {
        ".about-section h2": "Hi! I'm Catalina Ossandón",
        ".about-paragraph": `Front-end developer focused on functional, visually attractive design. I help professionals, small businesses, and entrepreneurs build a digital presence with modern, responsive, easy-to-manage websites.<br><br>I get involved in every stage—from planning to final support—to ensure your site meets its goals.<br><br><strong>Why work with me?</strong><br>• Custom design based on your audience and goals.<br>• Clear and direct communication.<br>• Commitment to quality, deadlines and final results.<br><br><span class="highlight">Your website should not only look great—it must function and connect. If that’s what you’re looking for, let’s talk.</span>`,
        ".about-section .cta-btn": "Contact me!",
        ".about-section .cta-btn-outline": "View my portfolio",
        ".about-extra h2": "How I work?",
        ".about-extra li:nth-child(1)":
          "🔹 I listen to your ideas and define objectives with you.",
        ".about-extra li:nth-child(2)":
          "🔹 I propose visual & technical solutions tailored to your audience.",
        ".about-extra li:nth-child(3)":
          "🔹 I develop your site with visible progress and constant communication.",
        ".about-extra li:nth-child(4)":
          "🔹 I deliver a ready-to-use site, with training and post-launch support.",
        ".about-extra .highlight": "Your project deserves to stand out online!",
      },
    },
    "/servicios.html": {
      es: {
        "#servicios-intro h2": "Tu sitio web ideal, sin complicaciones",
        "#servicios-intro p": `Desarrollo web a medida con diseño UI, animaciones personalizadas, formularios funcionales, SEO y más. Publicación en tu dominio o hosting gratuito.`,
        ".section-subtitle": "Servicios disponibles",
        ".servicio-card:nth-child(1) h3": "Landing pages profesionales",
        ".servicio-card:nth-child(1) p":
          "Una sola página, moderna, responsive y clara. Ideal para promocionar productos, servicios o portafolios personales con identidad visual propia.",
        ".servicio-card:nth-child(2) h3": "Sitios web multipágina",
        ".servicio-card:nth-child(2) p":
          "Estructura completa con varias secciones. Perfecto para marcas, empresas o negocios que necesitan transmitir más información o trabajar el SEO.",
        ".servicio-card:nth-child(3) h3": "Formularios funcionales",
        ".servicio-card:nth-child(3) p":
          "Formulario de contacto conectado a tu correo con EmailJS, validación en tiempo real y protección antispam. Listo para recibir mensajes desde el día uno.",
        ".servicio-card:nth-child(4) h3": "Integraciones opcionales",
        ".servicio-card:nth-child(4) p":
          "Agrega funcionalidades como botones animados, sliders, integración con redes sociales, APIs, Google Maps o efectos especiales según lo que necesites.",
        ".nota-contacto":
          "¿Tienes un proyecto en mente? <strong>Solicita tu cotización personalizada</strong>. El precio final dependerá del tipo de sitio, funcionalidades y plazos.",
        ".servicios-cards .cta-btn": "Solicita tu cotización",
        ".highlight-section:nth-child(3) h2": "Próximamente",
        ".highlight-section:nth-child(3) p": `En el futuro podrás solicitar sitios desarrollados con React, blogs dinámicos, tiendas virtuales y más funcionalidades interactivas. Me mantengo en constante formación para ofrecerte soluciones modernas y escalables.`,
        ".cta-section h2": "¿Listo para crear tu web?",
        ".cta-section .cta-btn": "Solicita tu cotización",
      },
      en: {
        "#servicios-intro h2": "Your ideal website, hassle-free",
        "#servicios-intro p": `Custom web development with UI design, animations, functional forms, SEO, and more. Published to your domain or free hosting.`,
        ".section-subtitle": "Available services",
        ".servicio-card:nth-child(1) h3": "Professional landing pages",
        ".servicio-card:nth-child(1) p":
          "A single-page site that’s modern, responsive and clear. Ideal for showcasing products, services or personal portfolios with strong visual identity.",
        ".servicio-card:nth-child(2) h3": "Multipage websites",
        ".servicio-card:nth-child(2) p":
          "Full structured sites with several sections. Perfect for brands, companies or businesses that need to convey more information or work on SEO.",
        ".servicio-card:nth-child(3) h3": "Functional forms",
        ".servicio-card:nth-child(3) p":
          "Contact forms connected to your email via EmailJS, real-time validation and anti-spam protection. Ready to receive messages from day one.",
        ".servicio-card:nth-child(4) h3": "Optional integrations",
        ".servicio-card:nth-child(4) p":
          "Add features like animated buttons, sliders, social media integrations, APIs, Google Maps or special effects based on your needs.",
        ".nota-contacto":
          "Got a project in mind? <strong>Request your custom quote</strong>. Final pricing depends on site type, features and timelines.",
        ".servicios-cards .cta-btn": "Request your quote",
        ".highlight-section:nth-child(3) h2": "Coming soon",
        ".highlight-section:nth-child(3) p": `Soon you’ll be able to request React-built sites, dynamic blogs, online stores and more interactive features. I stay in constant training to offer modern and scalable solutions.`,
        ".cta-section h2": "Ready to build your site?",
        ".cta-section .cta-btn": "Request your quote",
      },
    },
    "/portafolio.html": {
      es: {
        ".highlight-section h2": "Portafolio",
        ".highlight-section p": `Aquí puedes ver algunos de mis proyectos recientes y ejemplos de lo que puedo crear para ti.<br>Cada web es única, adaptada a la identidad y necesidades de cada cliente.`,
        ".portafolio-card:nth-child(1) h3": "Landing Creativa Dark",
        ".portafolio-card:nth-child(1) p": `Sitio para marcas modernas, creativos y negocios que buscan un look alternativo y memorable.<br><span class="tech-used">HTML, CSS, JS</span>`,
        ".portafolio-card:nth-child(1) a": "Ver demo",
        ".portafolio-card:nth-child(2) h3": "Landing Corporativa Blue",
        ".portafolio-card:nth-child(2) p": `Web para empresas y profesionales formales. Diseño limpio, secciones claras y formulario de contacto.<br><span class="tech-used">HTML, CSS, JS</span>`,
        ".portafolio-card:nth-child(2) a": "Ver demo",
        ".cta-section h2": "¿Te gustaría ver tu web aquí?",
        ".cta-section .cta-btn": "¡Hablemos de tu proyecto!",
      },
      en: {
        ".highlight-section h2": "Portfolio",
        ".highlight-section p": `Here are some of my recent projects and examples of what I can build for you.<br>Each site is unique, tailored to each client's identity and needs.`,
        ".portafolio-card:nth-child(1) h3": "Creative Dark Landing",
        ".portafolio-card:nth-child(1) p": `Site for modern brands, creatives, and businesses seeking an alternative and memorable look.<br><span class="tech-used">HTML, CSS, JS</span>`,
        ".portafolio-card:nth-child(1) a": "See demo",
        ".portafolio-card:nth-child(2) h3": "Corporate Blue Landing",
        ".portafolio-card:nth-child(2) p": `Website for formal companies and professionals. Clean design, clear sections, and contact form.<br><span class="tech-used">HTML, CSS, JS</span>`,
        ".portafolio-card:nth-child(2) a": "See demo",
        ".cta-section h2": "Would you like to see your website here?",
        ".cta-section .cta-btn": "Let's talk about your project!",
      },
    },
    "/contacto.html": {
      es: {
        ".highlight-section h2": "Contacto",
        ".highlight-section p":
          "¿Listo para comenzar tu proyecto, tienes dudas o quieres cotizar? Completa el formulario o escríbeme directamente. ¡Te responderé lo antes posible!",
        "#form-name": "Tu nombre",
        "#form-email": "Tu correo",
        "#form-message": "Cuéntame sobre tu idea o consulta",
        "#form-btn": "Enviar mensaje",
        ".contacto-directo p": "O si prefieres, escríbeme directo por:",
        ".contacto-directo a[href^='mailto']": "Correo",
        ".contacto-directo a[href^='https://wa.me']": "WhatsApp",
        // Preguntas del FAQ dentro de cada <details>
        ".qna-section details:nth-of-type(1) summary":
          "¿Qué necesito para encargar mi web?",
        ".qna-section details:nth-of-type(2) summary":
          "¿Cuánto tarda el desarrollo?",
        ".qna-section details:nth-of-type(3) summary":
          "¿Puedo administrar mi web después?",
        ".qna-section details:nth-of-type(4) summary":
          "¿Incluye hosting y dominio?",
        ".qna-section details:nth-of-type(5) summary":
          "¿Cómo es el proceso de pago?",
        ".qna-section details:nth-of-type(6) summary":
          "¿Y si tengo dudas o problemas después de la entrega?",
        // Respuestas del FAQ
        ".qna-section details:nth-of-type(1) div":
          "Solo necesitas tener clara tu idea, tus objetivos y el público al que quieres llegar. Si ya tienes textos, imágenes o logo, ¡mejor! Si no, te ayudo a definir lo necesario.",
        ".qna-section details:nth-of-type(2) div":
          "Depende del tipo de sitio y la cantidad de páginas. Un proyecto básico puede estar listo en 1 a 2 semanas. Proyectos más grandes o personalizados pueden tomar de 3 a 5 semanas.",
        ".qna-section details:nth-of-type(3) div":
          "Sí, ofrezco capacitación básica para que puedas actualizar textos e imágenes. Si prefieres que yo haga los cambios, también puedes contratar soporte mensual.",
        ".qna-section details:nth-of-type(4) div":
          "Sí, puedo ayudarte a publicar tu web en un hosting gratuito o guiarte en la compra de un dominio propio para tu marca.",
        ".qna-section details:nth-of-type(5) div":
          "Generalmente se acuerda un 50% al iniciar y el resto al entregar el proyecto. Para proyectos pequeños es posible pago único.",
        ".qna-section details:nth-of-type(6) div":
          "Incluyo soporte post-entrega y puedes contactarme siempre que lo necesites. ¡Quiero que tu web funcione perfecto!",
      },
      en: {
        ".highlight-section h2": "Contact",
        ".highlight-section p":
          "Ready to start your project, have questions, or want a quote? Fill out the form or message me directly. I’ll reply as soon as possible!",
        "#form-name": "Your name",
        "#form-email": "Your email",
        "#form-message": "Tell me about your idea or question",
        "#form-btn": "Send message",
        ".contacto-directo p": "Or if you prefer, write me via:",
        ".contacto-directo a[href^='mailto']": "Email",
        ".contacto-directo a[href^='https://wa.me']": "WhatsApp",
        // FAQ questions
        ".qna-section details:nth-of-type(1) summary":
          "What do I need to order my website?",
        ".qna-section details:nth-of-type(2) summary":
          "How long does development take?",
        ".qna-section details:nth-of-type(3) summary":
          "Can I manage my site afterward?",
        ".qna-section details:nth-of-type(4) summary":
          "Does it include hosting and a domain?",
        ".qna-section details:nth-of-type(5) summary":
          "What is the payment process?",
        ".qna-section details:nth-of-type(6) summary":
          "What if I have questions or problems after delivery?",
        // FAQ answers
        ".qna-section details:nth-of-type(1) div":
          "You only need a clear idea, objectives, and audience. If you have texts, images, or a logo, great! If not, I help define what's needed.",
        ".qna-section details:nth-of-type(2) div":
          "It depends on site type and number of pages. A basic project can be ready in 1-2 weeks. Larger or custom projects may take 3-5 weeks.",
        ".qna-section details:nth-of-type(3) div":
          "Yes, I offer basic training so you can update texts and images. If you prefer me to handle changes, you can also hire monthly support.",
        ".qna-section details:nth-of-type(4) div":
          "Yes, I can help publish your site on free hosting or guide you in purchasing your own domain.",
        ".qna-section details:nth-of-type(5) div":
          "Typically, 50% is paid at start and the rest upon delivery. For small projects, a single payment might suffice.",
        ".qna-section details:nth-of-type(6) div":
          "I include post-delivery support and you can contact me anytime you need. I want your site to work perfectly!",
      },
    },
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    // comunes
    Object.entries(texts[lang]).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    });
    // sección multipágina
    let route = location.pathname;
    if (route.endsWith("/")) {
      route += "index.html";
    }
    // si no termina en .html, lo añadimos
    if (!route.endsWith(".html")) {
      route += ".html";
    }
    const page = pages[route]?.[lang];
    if (page) {
      Object.entries(page).forEach(([sel, val]) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.innerHTML = val;
      });
    }
    // botón
    const btn = document.getElementById("lang-switch");
    if (btn) btn.textContent = texts[lang]["lang-btn"];
  }

  let lang = "es";
  setLanguage(lang);
  document.getElementById("lang-switch").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    //localStorage.setItem("lang", lang);
    setLanguage(lang);
  });
});

// ========== SISTEMA DE IDIOMA GLOBAL ==========

// document.addEventListener("DOMContentLoaded", () => {
//   const texts = {
//     es: {
//       "lang-btn": "EN",
//       "logo-text": "Wired Navi",
//       "nav-inicio": "Inicio",
//       "nav-sobre": "Sobre mí",
//       "nav-servicios": "Servicios",
//       "nav-proyectos": "Portafolio",
//       "nav-contacto": "Contacto",
//       "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi"
//     },
//     en: {
//       "lang-btn": "ES",
//       "logo-text": "Wired Navi",
//       "nav-inicio": "Home",
//       "nav-sobre": "About me",
//       "nav-servicios": "Services",
//       "nav-proyectos": "Portfolio",
//       "nav-contacto": "Contact",
//       "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi"
//     }
//   };

//   const pages = {
//     "/index.html": {
//       es: {
//         "#hero-title": "¡Hola! Soy Catalina Ossandón",
//         "#hero-desc": `<strong>Desarrolladora web & diseñadora independiente.</strong><br>
// Creo sitios web modernos, atractivos y efectivos para empresas, pymes, profesionales, artistas y marcas personales.<br><br>¿Tu proyecto necesita presencia digital? ¡Aquí comienza!`,
//         "#hero-btn": "Cotiza gratis tu web",
//         "#hero-portfolio-btn": "Ver portafolio",
//         "#resumen-servicios h2": "¿Qué puedo crear para ti?",
//         "#resumen-servicios li:nth-child(1)": "✔️ Sitios web responsivos y personalizados",
//         "#resumen-servicios li:nth-child(2)": "✔️ Formularios funcionales para captar clientes",
//         "#resumen-servicios li:nth-child(3)": "✔️ Animaciones e interacción moderna",
//         "#resumen-servicios li:nth-child(4)": "✔️ Botón de idioma y WhatsApp (si lo necesitas)",
//         "#resumen-servicios li:nth-child(5)": "✔️ Optimización SEO básica / media",
//         "#resumen-servicios li:nth-child(6)": "✔️ Soporte post-entrega y capacitación",
//         "#resumen-servicios .cta-btn-secondary": "Ver todos los servicios y paquetes",
//         "#por-que-web h2": "¿Por qué tu negocio necesita un sitio web propio?",
//         "#por-que-web li:nth-child(1)": "🔹 Control total: No dependes de redes sociales o plataformas de terceros.",
//         "#por-que-web li:nth-child(2)": "🔹 Credibilidad y confianza: Un sitio profesional transmite seriedad y confianza.",
//         "#por-que-web li:nth-child(3)": "🔹 Capta más clientes: Formularios y llamadas a la acción para aumentar tus ventas.",
//         "#por-que-web li:nth-child(4)": "🔹 Disponible 24/7: Tu negocio visible todo el año, sin límites geográficos.",
//         "#por-que-web li:nth-child(5)": "🔹 Mejor posicionamiento en Google: Más visibilidad y oportunidades.",
//         "#por-que-web .highlight": "🔗 ¡Destaca tu marca con un sitio web hecho a tu medida!",
//         "#cta-final h2": "¿Listo para elevar tu presencia digital?",
//         "#cta-final .cta-btn": "Contáctame ahora",
//         "#cta-final .cta-btn-outline": "Ver ejemplos de mi trabajo"
//       },
//       en: {
//         "#hero-title": "Hi! I'm Catalina Ossandón",
//         "#hero-desc": `<strong>Web developer & independent designer.</strong><br>
// I create modern, attractive and effective websites for businesses, professionals, artists and personal brands.<br><br>Does your project need a digital presence? Let's begin here!`,
//         "#hero-btn": "Get a free quote",
//         "#hero-portfolio-btn": "View portfolio",
//         "#resumen-servicios h2": "What can I create for you?",
//         "#resumen-servicios li:nth-child(1)": "✔️ Responsive and custom websites",
//         "#resumen-servicios li:nth-child(2)": "✔️ Functional client-catching forms",
//         "#resumen-servicios li:nth-child(3)": "✔️ Modern animations and interactivity",
//         "#resumen-servicios li:nth-child(4)": "✔️ Language button & WhatsApp (if needed)",
//         "#resumen-servicios li:nth-child(5)": "✔️ Basic / medium SEO optimization",
//         "#resumen-servicios li:nth-child(6)": "✔️ Post-delivery support and training",
//         "#resumen-servicios .cta-btn-secondary": "See all services and packages",
//         "#por-que-web h2": "Why does your business need its own website?",
//         "#por-que-web li:nth-child(1)": "🔹 Full control: No dependency on social media or third-party platforms.",
//         "#por-que-web li:nth-child(2)": "🔹 Credibility and trust: A professional site builds confidence.",
//         "#por-que-web li:nth-child(3)": "🔹 Capture more clients: Forms and CTAs to boost sales.",
//         "#por-que-web li:nth-child(4)": "🔹 Available 24/7: Your business visible year-round, anywhere.",
//         "#por-que-web li:nth-child(5)": "🔹 Better Google ranking: More visibility and opportunities.",
//         "#por-que-web .highlight": "🔗 Make your brand stand out with a custom-built site!",
//         "#cta-final h2": "Ready to boost your digital presence?",
//         "#cta-final .cta-btn": "Contact me now",
//         "#cta-final .cta-btn-outline": "View my work"
//       }
//     },
//     "/sobre-mi.html": {
//       es: {
//         ".about-section h2": "¡Hola! Soy Catalina Ossandón",
//         ".about-paragraph": `Desarrolladora front-end con enfoque en diseño funcional, visualmente atractivo y adaptado a cada cliente.<br><br>Me involucro en cada etapa del proyecto, desde la planificación hasta el soporte final para asegurar que tu web cumpla su propósito.<br><br><strong>¿Por qué trabajar conmigo?</strong><br>• Diseño personalizado según tu público.<br>• Comunicación clara y directa.<br>• Compromiso con la calidad y los plazos.<br><br><span class="highlight">Tu sitio web debe verse bien y funcionar de maravilla.</span>`,
//         ".about-section .cta-btn": "¡Contáctame!",
//         ".about-section .cta-btn-outline": "Ver mi portafolio",
//         ".about-extra h2": "¿Cómo trabajo?",
//         ".about-extra li:nth-child(1)": "🔹 Escucho tus ideas y definimos objetivos.",
//         ".about-extra li:nth-child(2)": "🔹 Propongo solución visual y técnica.",
//         ".about-extra li:nth-child(3)": "🔹 Desarrollo con avances y feedback constantes.",
//         ".about-extra li:nth-child(4)": "🔹 Entrega final con capacitación y soporte.",
//         ".about-extra .highlight": "¡Tu proyecto merece destacar en internet!"
//       },
//       en: {
//         ".about-section h2": "Hi! I'm Catalina Ossandón",
//         ".about-paragraph": `Front-end developer focused on functional, visually appealing design.<br><br>I engage in every project stage—from planning to final support—to ensure your site meets its goals.<br><br><strong>Why work with me?</strong><br>• Custom design tailored to your audience.<br>• Clear, direct communication.<br>• Commitment to quality and deadlines.<br><br><span class="highlight">Your site should look great and perform flawlessly.</span>`,
//         ".about-section .cta-btn": "Contact me!",
//         ".about-section .cta-btn-outline": "View my portfolio",
//         ".about-extra h2": "How I work?",
//         ".about-extra li:nth-child(1)": "🔹 I listen to your ideas and define goals.",
//         ".about-extra li:nth-child(2)": "🔹 Propose visual and technical solutions.",
//         ".about-extra li:nth-child(3)": "🔹 Develop with regular updates and feedback.",
//         ".about-extra li:nth-child(4)": "🔹 Final delivery with training and support.",
//         ".about-extra .highlight": "Your project deserves to shine online!"
//       }
//     },
//     "/servicios.html": {
//       es: {
//         "#servicios-intro h2": "Tu sitio web ideal, sin complicaciones",
//         "#servicios-intro p": "Desarrollo web a medida con UI, animaciones, formularios y SEO. Publicación en tu dominio o hosting gratuito.",
//         ".section-subtitle": "Servicios disponibles",
//         ".servicio-card:nth-child(1) h3": "Landing pages profesionales",
//         ".servicio-card:nth-child(1) p": "Una sola página, moderna y clara. Ideal para promocionar tu marca.",
//         ".servicio-card:nth-child(2) h3": "Sitios multipágina",
//         ".servicio-card:nth-child(2) p": "Estructura completa para empresas que requieren más información.",
//         ".servicio-card:nth-child(3) h3": "Formularios funcionales",
//         ".servicio-card:nth-child(3) p": "Contacto con EmailJS, validación y protección antispam.",
//         ".servicio-card:nth-child(4) h3": "Integraciones opcionales",
//         ".servicio-card:nth-child(4) p": "Sliders, APIs, Google Maps y más a tu medida.",
//         ".nota-contacto": "¿Tienes un proyecto? <strong>Solicita tu cotización</strong>.",
//         ".servicios-cards .cta-btn": "Solicita tu cotización",
//         ".highlight-section:nth-of-type(2) h2": "Próximamente",
//         ".highlight-section:nth-of-type(2) p": "Próximamente: React, tiendas y blogs dinámicos.",
//         ".cta-section h2": "¿Listo para crear tu web?",
//         ".cta-section .cta-btn": "Solicita tu cotización"
//       },
//       en: {
//         "#servicios-intro h2": "Your ideal website, hassle-free",
//         "#servicios-intro p": "Custom web development with UI, animations, forms and SEO. Deployed to your domain or free hosting.",
//         ".section-subtitle": "Available services",
//         ".servicio-card:nth-child(1) h3": "Professional landing pages",
//         ".servicio-card:nth-child(1) p": "Single page, modern and clear. Perfect for showcasing your brand.",
//         ".servicio-card:nth-child(2) h3": "Multipage websites",
//         ".servicio-card:nth-child(2) p": "Comprehensive structure for businesses needing more info.",
//         ".servicio-card:nth-child(3) h3": "Functional forms",
//         ".servicio-card:nth-child(3) p": "EmailJS contact, real-time validation, anti-spam protection.",
//         ".servicio-card:nth-child(4) h3": "Optional integrations",
//         ".servicio-card:nth-child(4) p": "Sliders, APIs, Google Maps and more tailored features.",
//         ".nota-contacto": "Got a project? <strong>Request your quote</strong>.",
//         ".servicios-cards .cta-btn": "Request your quote",
//         ".highlight-section:nth-of-type(2) h2": "Coming soon",
//         ".highlight-section:nth-of-type(2) p": "Coming soon: React sites, online stores, dynamic blogs.",
//         ".cta-section h2": "Ready to build your site?",
//         ".cta-section .cta-btn": "Request your quote"
//       }
//     },
//     "/portafolio.html": {
//       es: {
//         ".highlight-section h2": "Portafolio",
//         ".highlight-section p": "Aquí ves proyectos recientes. Cada web es única, adaptada a tu marca.",
//         ".portafolio-card:nth-child(1) h3": "Landing Creativa Dark",
//         ".portafolio-card:nth-child(1) p": "Sitio alternativo y memorable.<br><span class=\"tech-used\">HTML, CSS, JS</span>",
//         ".portafolio-card:nth-child(1) a": "Ver demo",
//         ".portafolio-card:nth-child(2) h3": "Landing Corporativa Blue",
//         ".portafolio-card:nth-child(2) p": "Diseño limpio y profesional.<br><span class=\"tech-used\">HTML, CSS, JS</span>",
//         ".portafolio-card:nth-child(2) a": "Ver demo",
//         ".cta-section h2": "¿Te gustaría ver tu web aquí?",
//         ".cta-section .cta-btn": "¡Hablemos de tu proyecto!"
//       },
//       en: {
//         ".highlight-section h2": "Portfolio",
//         ".highlight-section p": "See recent projects. Each site is unique and tailored to your brand.",
//         ".portafolio-card:nth-child(1) h3": "Creative Dark Landing",
//         ".portafolio-card:nth-child(1) p": "Alternative, memorable site.<br><span class=\"tech-used\">HTML, CSS, JS</span>",
//         ".portafolio-card:nth-child(1) a": "See demo",
//         ".portafolio-card:nth-child(2) h3": "Corporate Blue Landing",
//         ".portafolio-card:nth-child(2) p": "Clean, professional design.<br><span class=\"tech-used\">HTML, CSS, JS</span>",
//         ".portafolio-card:nth-child(2) a": "See demo",
//         ".cta-section h2": "Would you like your site here?",
//         ".cta-section .cta-btn": "Let's talk about your project!"
//       }
//     },
//     "/contacto.html": {
//       es: {
//         ".highlight-section h2": "Contacto",
//         ".highlight-section p": "¿Listo para tu proyecto? Completa el formulario o escríbeme directamente.",
//         "#form-name": "Tu nombre",
//         "#form-email": "Tu correo",
//         "#form-message": "Cuéntame sobre tu idea o consulta",
//         "#form-btn": "Enviar mensaje",
//         ".contacto-directo p": "O si prefieres, escríbeme por:",
//         ".contacto-directo a[href^='mailto']": "Correo",
//         ".contacto-directo a[href^='https://wa.me']": "WhatsApp",
//         ".qna-section h2": "Preguntas Frecuentes"
//       },
//       en: {
//         ".highlight-section h2": "Contact",
//         ".highlight-section p": "Ready for your project? Fill out the form or message me directly.",
//         "#form-name": "Your name",
//         "#form-email": "Your email",
//         "#form-message": "Tell me about your idea or question",
//         "#form-btn": "Send message",
//         ".contacto-directo p": "Or if you prefer, reach me via:",
//         ".contacto-directo a[href^='mailto']": "Email",
//         ".contacto-directo a[href^='https://wa.me']": "WhatsApp",
//         ".qna-section h2": "Frequently Asked Questions"
//       }
//     }
//   };

//   function setLanguage(lang) {
//     document.documentElement.lang = lang;

//     // Aplica textos comunes
//     Object.entries(texts[lang]).forEach(([id, val]) => {
//       const el = document.getElementById(id);
//       if (el) el.innerHTML = val;
//     });

//     // Aplica textos de página
//     const route = location.pathname.endsWith("/") ? "/index.html" : location.pathname;
//     const page = pages[route]?.[lang];
//     if (page) {
//       Object.entries(page).forEach(([sel, val]) => {
//         const el = document.querySelector(sel);
//         if (!el) return;
//         if (Array.isArray(val)) {
//           el.querySelectorAll("li").forEach((li, i) => (li.textContent = val[i]));
//         } else if (/<.*>/.test(val)) {
//           el.innerHTML = val;
//         } else {
//           el.textContent = val;
//         }
//       });
//     }

//     // Actualiza botón
//     const btn = document.getElementById("lang-switch");
//     if (btn) btn.textContent = texts[lang]["lang-btn"];
//   }

//   let lang = localStorage.getItem("lang") || "es";
//   setLanguage(lang);

//   document.getElementById("lang-switch")?.addEventListener("click", () => {
//     lang = lang === "es" ? "en" : "es";
//     localStorage.setItem("lang", lang);
//     setLanguage(lang);
//   });
// });
