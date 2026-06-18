'use client';

import React from 'react';

export default function NewsletterPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #090f1e, #1a2540)', padding: '100px 20px' }}>
      <div style={{ background: '#fff', padding: '50px 40px', borderRadius: '12px', maxWidth: '500px', width: '100%', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <h1 style={{ color: '#0b1d42', marginBottom: '10px', fontSize: '2rem' }}>Join our newsletter</h1>
        <p style={{ color: '#555', marginBottom: '30px' }}>Stay updated with our latest financial insights.</p>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = {
            firstName: formData.get('firstName'),
            email: formData.get('email')
          };
          try {
            const res = await fetch('/api/newsletter', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });
            if (res.ok) {
              window.location.href = '/newsletter/success';
            } else {
              alert('Something went wrong. Please try again.');
            }
          } catch (err) {
            console.error(err);
            alert('Something went wrong. Please try again.');
          }
        }}>
          
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>First Name</label>
            <input type="text" name="firstName" required placeholder="Enter your first name" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }} />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email Address</label>
            <input type="email" name="email" required placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '16px', background: '#c9a84c', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseOver={(e) => e.target.style.background = '#b5953e'}
            onMouseOut={(e) => e.target.style.background = '#c9a84c'}
          >
            Subscribe
          </button>
        </form>
        <div style={{ marginTop: '20px' }}>
          <a href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
