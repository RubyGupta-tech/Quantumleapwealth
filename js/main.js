// ============================================================
// QUANTUM LEAP WEALTH - MAIN JS
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
    function normalizeUrl(url) {
      let clean = url.split('#')[0].split('?')[0];
      clean = clean.replace(/\/+$/, '');
      if (clean.endsWith('/index.html')) {
        clean = clean.substring(0, clean.length - 11);
      }
      return clean;
    }

    const currentUrl = normalizeUrl(window.location.href);

    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
      const href = link.href;
      if (!href) return;

      const rawHref = link.getAttribute('href') || '';
      if (rawHref.startsWith('#') || rawHref.startsWith('javascript:')) return;

      if (normalizeUrl(href) === currentUrl) {
        link.classList.add('active');
        const parentNavItem = link.closest('.nav-item');
        if (parentNavItem) {
          const parentLink = parentNavItem.querySelector(':scope > .nav-link');
          if (parentLink && parentLink !== link) {
            parentLink.classList.add('active');
          }
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

window.handleSubmit = async function (e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.form-submit') || form.querySelector('button[type="submit"]') || form.querySelector('input[type="submit"]');
  const originalText = submitBtn ? (submitBtn.textContent || submitBtn.value) : 'Submit';

  if (submitBtn) {
    if (submitBtn.tagName === 'INPUT') submitBtn.value = 'Sending...';
    else submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVUXsk5cp5koV_SDg94fq5wEpshQtykf1PAdXzuYXwwPIqurG0Shb6JWc01zpCCPCjgQ/exec';
  const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:3000/api/contact' 
    : '/api/contact';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: new URLSearchParams(formData), mode: 'no-cors' });
    } catch (sheetErr) {
      console.warn("Google Sheets backup failed, but CRM saved successfully.", sheetErr);
    }

    form.style.display = 'none';
    let successMsg = form.parentElement.querySelector('.form-success');
    if (successMsg) {
      successMsg.style.display = 'block';
    } else {
      alert("✅ Thank you! Your message has been sent securely. We'll reach out within 24 hours.");
    }
    form.reset();

  } catch (error) {
    console.error('API Submission Error:', error);
    alert("Error submitting form: " + error.message + " - Please make sure the Next.js dev server is running on port 3000.");
  } finally {
    if (submitBtn) {
      if (submitBtn.tagName === 'INPUT') submitBtn.value = originalText;
      else submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
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

// --- CALENDLY MOBILE BACK BUTTON FIX ---
if (typeof window !== 'undefined') {
  const initCalendlyObserver = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('calendly-overlay')) {
            window.history.pushState({ calendlyOpen: true }, '');
            
            // Inject custom close button for mobile
            if (window.innerWidth <= 768 && !document.getElementById('custom-calendly-close')) {
                const btn = document.createElement('button');
                btn.id = 'custom-calendly-close';
                btn.innerHTML = '✕';
                btn.style.cssText = 'position: fixed; top: 15px; right: 15px; width: 44px; height: 44px; border-radius: 50%; background: #04111f; color: white; border: 2px solid white; font-size: 20px; font-weight: bold; cursor: pointer; z-index: 2147483647; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.5);';
                btn.onclick = () => {
                    if (window.Calendly && typeof window.Calendly.closePopupWidget === 'function') {
                        window.Calendly.closePopupWidget();
                    }
                };
                document.body.appendChild(btn);
            }
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('calendly-overlay')) {
            if (window.history.state && window.history.state.calendlyOpen) {
              window.history.back(); 
            }
            const btn = document.getElementById('custom-calendly-close');
            if (btn) btn.remove();
          }
        });
      });
    });
    observer.observe(document.body, { childList: true });
  };

  if (document.body) {
    initCalendlyObserver();
  } else {
    document.addEventListener('DOMContentLoaded', initCalendlyObserver);
  }

  window.addEventListener('popstate', (e) => {
    if (document.querySelector('.calendly-overlay') && window.Calendly && typeof window.Calendly.closePopupWidget === 'function') {
      window.Calendly.closePopupWidget();
    }
  });
}

