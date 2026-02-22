// ============================================================
// QUANTUMLEAP WEALTH — MAIN JS
// ============================================================

(function () {
  'use strict';

  /* ---- Sticky Navbar scroll class ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  /* ---- Hamburger / Mobile Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.nav-overlay');

  function closeMenu() {
    if (!hamburger) return;
    hamburger.classList.remove('open');
    navMenu && navMenu.classList.remove('open');
    overlay && overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navMenu.classList.toggle('open', isOpen);
      overlay && overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  overlay && overlay.addEventListener('click', closeMenu);

  /* ---- Mobile Dropdown Accordions ---- */
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const link = item.querySelector('.nav-link');
    if (!link) return;

    link.addEventListener('click', function (e) {
      // Only accordion on mobile
      if (window.innerWidth > 960) return;
      e.preventDefault();
      const isOpen = item.classList.toggle('open');
      // Close siblings
      item.closest('.nav-menu').querySelectorAll('.nav-item.has-dropdown').forEach(sib => {
        if (sib !== item) sib.classList.remove('open');
      });
    });
  });

  /* ---- Close menu on nav link click (mobile) ---- */
  navMenu && navMenu.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---- Close dropdown on outside click (desktop) ---- */
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 960) return;
    document.querySelectorAll('.nav-item.has-dropdown.open').forEach(item => {
      if (!item.contains(e.target)) item.classList.remove('open');
    });
  });

  /* ---- Keyboard nav (Escape closes dropdowns) ---- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
      closeMenu();
    }
  });

  /* ---- Active page highlight ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && (href === currentPath || href.endsWith('/' + currentPath))) {
      link.classList.add('active');
      // Also mark parent nav-item if dropdown child
      const parent = link.closest('.nav-item');
      if (parent) {
        const parentLink = parent.querySelector(':scope > .nav-link');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  /* ---- Scroll-reveal micro-animation ---- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      const toggle = item.querySelector('.faq-toggle');
      if (toggle) {
        toggle.textContent = item.classList.contains('active') ? '−' : '+';
      }
    });
  });

})();
