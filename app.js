const menuButton = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-nav');

if (menuButton && mainMenu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    mainMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    mainMenu.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mainMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries, io) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    io.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -36px' });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
