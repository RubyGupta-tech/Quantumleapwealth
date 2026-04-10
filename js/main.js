// ============================================================
// QUANTUM LEAP WEALTH — MAIN JS
// ============================================================

(function () {
  'use strict';

  /* ---- Navbar Injection & Initialization ---- */
  function injectNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) {
      // If no placeholder, try to initialize functions anyway (fallback)
      initNavbarFunctions();
      return;
    }

    // Calculate relative path depth
    let depth = Math.max(0, window.location.pathname.split('/').filter(Boolean).length - 1);
    // Explicitly handle root/index
    const isIndex = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
    let rel = depth > 0 ? '../'.repeat(depth) : '';

    fetch(rel + 'components/navbar.html?v=' + new Date().getTime())
      .then(response => {
        if (!response.ok) throw new Error('Navbar fetch failed');
        return response.text();
      })
      .then(html => {
        placeholder.innerHTML = html.replace(/\{rel\}/g, rel);
        initNavbarFunctions(); // Initialize interactivity after injection
      })
      .catch(err => console.error(err));
  }

  function initNavbarFunctions() {
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

      // Ensure we don't attach multiple listeners if re-initialized
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      newLink.addEventListener('click', function (e) {
        if (window.innerWidth > 960) return;
        e.preventDefault();
        const isOpen = item.classList.toggle('open');
        item.closest('.nav-menu').querySelectorAll('.nav-item.has-dropdown').forEach(sib => {
          if (sib !== item) sib.classList.remove('open');
        });
      });
    });

    /* ---- Close menu on nav link click (mobile) ---- */
    navMenu && navMenu.querySelectorAll('.dropdown-item').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    /* ---- Active page highlight ---- */
    const currentPaths = window.location.pathname.split('/').filter(Boolean);
    const currentFile = currentPaths.pop() || 'index.html';
    
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
      const href = link.getAttribute('href') || '';
      // Clean up href to just the filename for comparison
      const linkFile = href.split('/').pop();
      
      if (linkFile && (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html'))) {
        link.classList.add('active');
        const parent = link.closest('.nav-item');
        if (parent) {
          const parentLink = parent.querySelector(':scope > .nav-link');
          if (parentLink) parentLink.classList.add('active');
        }
      }
    });

    /* ---- Close dropdown on outside click (desktop) ---- */
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 960) return;
      document.querySelectorAll('.nav-item.has-dropdown.open').forEach(item => {
        if (!item.contains(e.target)) item.classList.remove('open');
      });
    });

    /* ---- Keyboard nav ---- */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
        closeMenu();
      }
    });
  }

  // Start the process reliably
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }


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

  /* ---- Floating Action Button (FAB) Toggle ---- */
  const fabContainer = document.querySelector('.fab-container');
  const fabToggle = document.querySelector('.fab-toggle');
  if (fabToggle && fabContainer) {
    fabToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      fabContainer.classList.toggle('open');
    });

    // Close FAB when clicking outside
    document.addEventListener('click', (e) => {
      if (!fabContainer.contains(e.target)) {
        fabContainer.classList.remove('open');
      }
    });
  }

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
  const firstName = form.first_name ? form.first_name.value : '';
  const lastName = form.last_name ? form.last_name.value : '';
  userNameHidden.value = (firstName + ' ' + lastName).trim();

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

// --- SUBSCRIPTION MODAL LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('signupModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModal');

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
