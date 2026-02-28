// ============================================================
// QUANTUM LEAP WEALTH — MAIN JS
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

window.handleSubmit = function (e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.form-submit');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  const SERVICE_ID = 'service_7bd9xhg';
  const ADMIN_TEMPLATE_ID = 'template_8bopej4';
  const AUTO_REPLY_TEMPLATE_ID = 'template_vaf4xrs';
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVUXsk5cp5koV_SDg94fq5wEpshQtykf1PAdXzuYXwwPIqurG0Shb6JWc01zpCCPCjgQ/exec';

  let userNameHidden = form.querySelector('input[name="user_name"]');
  if (!userNameHidden) {
    userNameHidden = document.createElement('input');
    userNameHidden.type = 'hidden';
    userNameHidden.name = 'user_name';
    form.appendChild(userNameHidden);
  }
  userNameHidden.value = form.first_name.value + ' ' + form.last_name.value;

  let timeHidden = form.querySelector('input[name="time"]');
  if (!timeHidden) {
    timeHidden = document.createElement('input');
    timeHidden.type = 'hidden';
    timeHidden.name = 'time';
    form.appendChild(timeHidden);
  }
  timeHidden.value = new Date().toLocaleString();

  emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, form)
    .then(function () {
      return emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, form);
    })
    .then(function () {
      const formData = new FormData(form);
      const encodedData = new URLSearchParams(formData);
      return fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: encodedData, mode: 'no-cors' });
    })
    .then(function () {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.style.display = 'none';

      let successMsg = form.parentElement.querySelector('.form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
      } else {
        alert("✅ Thank you! Your message has been sent. We'll reach out within 24 hours.");
      }
      form.reset();
    })
    .catch(function (error) {
      console.error('Error!', error);
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      alert("EmailJS Error: " + (error.text || error.message || JSON.stringify(error)));
    });
};
