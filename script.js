const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// This placeholder is intentionally not a real email address.
document.getElementById('copyEmail').addEventListener('click', async () => {
  const toast = document.getElementById('toast');
  const message = 'Replace the email placeholder in index.html with your real email.';
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3000);
});

// Small reveal effect for cards when they enter the viewport.
const cards = document.querySelectorAll('.skill-card, .project-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    card.style.transition = 'opacity .5s ease, transform .5s ease, border-color .2s';
    observer.observe(card);
  });
  const style = document.createElement('style');
  style.textContent = '.is-visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(style);
}
