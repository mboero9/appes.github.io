
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = $(".menu-toggle");
const mobileMenu = $("#mobileMenu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

// Hero product tabs
$$(".product-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.productTab;
    $$(".product-tab").forEach(t => t.classList.toggle("active", t === tab));
    $$(".product-panel").forEach(panel => {
      panel.classList.toggle("active", panel.dataset.productPanel === target);
    });
  });
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 45}ms`;
  revealObserver.observe(el);
});

// APPES monkey arm animation.
// La cara permanece exactamente en la imagen base, de perfil.
// Solo el brazo aislado rota desde el hombro y acompaña suavemente al cursor.
const logo = $("#interactiveLogo");

if (logo && window.matchMedia("(hover:hover)").matches) {
  let active = false;

  const setArm = (angle, lift = -1) => {
    logo.style.setProperty("--arm-angle", `${angle}deg`);
    logo.style.setProperty("--arm-lift", `${lift}px`);
  };

  logo.addEventListener("mouseenter", () => {
    active = true;
    setArm(56, -2);
  });

  logo.addEventListener("mousemove", (event) => {
    if (!active) return;

    const rect = logo.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // Movimiento muy pequeño para que el saludo "acompañe" el cursor
    // sin parecer una animación infantil.
    const followX = (x - 0.5) * 7;
    const followY = (0.5 - y) * 5;
    const angle = Math.max(48, Math.min(64, 56 + followX + followY));

    setArm(angle, -2 - Math.max(0, (0.5 - y) * 2));
  });

  logo.addEventListener("mouseleave", () => {
    active = false;
    setArm(0, 0);
  });
}
