const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .capability, .timeline-item, .principles > div').forEach(el => {
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.is-visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

const visibilityObserver = new MutationObserver(() => {
  document.querySelectorAll('.is-visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
visibilityObserver.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
