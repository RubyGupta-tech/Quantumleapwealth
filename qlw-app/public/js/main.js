// ============================================================
// QUANTUM LEAP WEALTH — MAIN JS
// ============================================================

(function () {
  'use strict';

  /* ---- Navbar Functions (LEGACY REMOVED - NOW IN React Navbar.jsx) ---- */
  // We keep only scroll class for sticky effect if needed, but safer to handle in React.
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }, { passive: true });
    }
  }

  // Start the process reliably
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStickyNavbar);
  } else {
    initStickyNavbar();
  }


  /* ---- Hero Dynamic Slider (MOVED TO React page.js for stability) ---- */

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

  // Gather form data into JSON
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Optional: keep Google Sheets backup active alongside PostgreSQL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVUXsk5cp5koV_SDg94fq5wEpshQtykf1PAdXzuYXwwPIqurG0Shb6JWc01zpCCPCjgQ/exec';

  try {
    // 1. Send to our new Next.js CRM Database + Resend API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    // 2. (Optional) Legacy Google Sheets Backup
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: new URLSearchParams(formData), mode: 'no-cors' });
    } catch (sheetErr) {
      console.warn("Google Sheets backup failed, but CRM saved successfully.", sheetErr);
    }

    // Success UI updates
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
    alert("Error submitting form: " + error.message);
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
