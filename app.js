// APPES Legal AI — configuración simple
// Reemplazá el valor de CONTACT_EMAIL por el email real antes de publicar.
const CONFIG = {
  CONTACT_EMAIL: "TU_EMAIL_AQUI"
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

const contactLink = $("#contact-email");
if (contactLink && CONFIG.CONTACT_EMAIL !== "TU_EMAIL_AQUI") {
  const subject = encodeURIComponent("Consulta APPES Legal AI");
  const body = encodeURIComponent(
    "Hola, quisiera conversar sobre una posible solución de IA aplicada al trabajo jurídico."
  );
  contactLink.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const toggle = $(".menu-toggle");
const nav = $(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

$$(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
  observer.observe(el);
});
