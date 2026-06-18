'use client';

import React from 'react';
import Link from 'next/link';

export default function NewsletterSuccess() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #090f1e, #1a2540)', padding: '100px 20px' }}>
      <div style={{ background: '#fff', padding: '60px 40px', borderRadius: '12px', maxWidth: '500px', width: '100%', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
        <h1 style={{ color: '#0b1d42', marginBottom: '10px', fontSize: '2.5rem', fontFamily: "'Playfair Display', serif" }}>Thank You!</h1>
        <p style={{ color: '#555', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Your subscription was successful. You're now on the list to receive our latest financial insights and exclusive updates!
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '15px 35px', background: '#c9a84c', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: '700', transition: 'background 0.2s' }}
          onMouseOver={(e) => e.target.style.background = '#b5953e'}
          onMouseOut={(e) => e.target.style.background = '#c9a84c'}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
