// ========== IDIOMA ==========

      // Textos en ES y EN
      const texts = {
        es: {
          "lang-btn": "EN",
          "logo-text": "Wired Navi",
          "nav-inicio": "Inicio",
          "nav-sobre": "Sobre mí",
          "nav-servicios": "Servicios",
          "nav-proyectos": "Proyectos",
          "nav-contacto": "Contacto",
          "hero-title": "Wired Navi",
          "hero-desc": `Soluciones web rápidas y modernas.<br /><br />Landing pages, portafolios y sitios a medida para tu negocio o marca personal.<br /><br />Diseño atractivo, responsivo y con formularios listos para captar clientes.`,
          "hero-btn": "Solicita tu web",
          "about-title": "Sobre mí",
          "about-desc": `Soy Catalina Ossandón, desarrolladora web orientada al usuario y estudiante de Full Stack Developer. Me especializo en crear páginas web modernas, responsivas y listas para captar clientes. Ya sea para pequeñas empresas, freelancers, profesionales del fitness o artistas, te ayudo a tener presencia digital rápidamente, con diseños atractivos, formularios funcionales y enfoque en resultados.`,
          "services-title": "Servicios",
          "serv-item-1": "✔️ Landing pages profesionales",
          "serv-item-2": "✔️ Diseño responsive",
          "serv-item-3": "✔️ Formularios funcionales",
          "serv-item-4": "✔️ Optimización SEO básica",
          "projects-title": "Proyectos",
          "proj-title-1": "Landing Creativa Dark",
          "proj-desc-1": "Ideal para marcas modernas, creativos y negocios que buscan un look alternativo y memorable. Diseño oscuro, slider y formulario.",
          "proj-demo-1": "Ver demo",
          "proj-title-2": "Landing Corporativa Blue",
          "proj-desc-2": "Perfecta para empresas y profesionales formales. Diseño claro, servicios destacados, información clara y formulario de contacto.",
          "proj-demo-2": "Ver demo",
          "contact-title": "Contacto",
          "form-name": "Tu nombre",
          "form-email": "Tu correo",
          "form-message": "Tu mensaje",
          "form-btn": "Enviar mensaje",
          "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi"
        },
        en: {
          "lang-btn": "ES",
          "logo-text": "Wired Navi",
          "nav-inicio": "Home",
          "nav-sobre": "About me",
          "nav-servicios": "Services",
          "nav-proyectos": "Projects",
          "nav-contacto": "Contact",
          "hero-title": "Wired Navi",
          "hero-desc": `Fast, modern web solutions.<br /><br />Landing pages, portfolios, and custom sites for your business or personal brand.<br /><br />Attractive, responsive design with ready-to-capture-client forms.`,
          "hero-btn": "Get your website",
          "about-title": "About me",
          "about-desc": `I'm Catalina Ossandón, a user-focused web developer and Full Stack Developer student. I specialize in creating modern, responsive websites ready to attract clients. Whether for small businesses, freelancers, fitness pros, or artists, I’ll help you get online fast with attractive designs, functional forms, and a results-driven approach.`,
          "services-title": "Services",
          "serv-item-1": "✔️ Professional landing pages",
          "serv-item-2": "✔️ Responsive design",
          "serv-item-3": "✔️ Functional forms",
          "serv-item-4": "✔️ Basic SEO optimization",
          "projects-title": "Projects",
          "proj-title-1": "Creative Dark Landing",
          "proj-desc-1": "Ideal for modern brands, creatives, and businesses seeking a memorable, alternative look. Dark design, slider, and form.",
          "proj-demo-1": "See demo",
          "proj-title-2": "Corporate Blue Landing",
          "proj-desc-2": "Perfect for formal companies and professionals. Clean design, featured services, clear info, and contact form.",
          "proj-demo-2": "See demo",
          "contact-title": "Contact",
          "form-name": "Your name",
          "form-email": "Your email",
          "form-message": "Your message",
          "form-btn": "Send message",
          "footer-text": "&copy; 2025 Catalina Ossandón · Wired Navi"
        }
      };

      // Cambia idioma (y cambia lang en <html>)
      function setLanguage(lang) {
        document.documentElement.lang = lang;
        Object.entries(texts[lang]).forEach(([id, txt]) => {
          const el = document.getElementById(id);
          if (el) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
              el.placeholder = txt;
            } else if (id === "form-btn") {
              el.textContent = txt;
            } else if (id === "footer-text") {
              el.innerHTML = txt;
            } else if (id === "hero-desc" || id === "about-desc") {
              el.innerHTML = txt;
            } else {
              el.textContent = txt;
            }
          }
        });
        // Cambia el texto del botón de idioma
        document.getElementById("lang-switch").textContent = texts[lang]["lang-btn"];
      }

      // Detecta idioma inicial
      let lang = localStorage.getItem("lang") || "es";
      setLanguage(lang);

      // Maneja el cambio con el botón
      document.getElementById("lang-switch").addEventListener("click", function () {
        lang = (lang === "es") ? "en" : "es";
        setLanguage(lang);
        localStorage.setItem("lang", lang);
      });


// ===== MENÚ HAMBURGUESA =====
// Selecciona el ícono del menú (tres líneas) y el <ul> que contiene los enlaces del nav
const burger = document.getElementById("burger");
const nav = document.querySelector("nav ul");


burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});




// ===== FORMULARIO DE CONTACTO CON EMAILJS =====
document.addEventListener("DOMContentLoaded", function () {
  
  emailjs.init("Q3XsOAiEKNt06MIcu"); //--> Public Key

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_c6nohop", "template_akwotc5", form)
      .then(() => {
        msg.textContent = "Mensaje enviado con éxito ✅";
        msg.style.color = "lightgreen";
        form.reset();
      })
      .catch((error) => {
        msg.textContent = "Ocurrió un error al enviar el mensaje 😢";
        msg.style.color = "tomato";
        console.error("EmailJS error:", error);
      });
  });
});