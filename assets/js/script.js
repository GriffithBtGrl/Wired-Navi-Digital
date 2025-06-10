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