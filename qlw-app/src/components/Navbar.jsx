"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    // Close mobile menu on route change
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');
    
    hamburger?.classList.remove('open');
    navMenu?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name, e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1100) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  if (pathname?.startsWith("/admin")) return null;
  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand">
            <img
              src="/images/QWL_logo_original.png?v=1.0"
              alt="Quantum Leap Wealth Logo"
              className="brand-logo"
            />
            <span className="brand-text">
              Quantum Leap <span className="brand-wealth">Wealth</span>
            </span>
          </Link>
          <ul className="nav-menu" id="nav-menu">
            <li className="mobile-brand-container">
              <Link href="/" className="mobile-brand-link">
                <img
                  src="/images/QWL_logo_original.png?v=1.0"
                  alt="Quantum Leap Wealth Logo"
                  className="brand-logo"
                />
                <span className="brand-text">
                  Quantum Leap <span className="brand-wealth">Wealth</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item has-dropdown ${activeDropdown === 'about' ? 'open' : ''}`}>
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown('about', e)}>
                About{" "}
                <svg
                  className="dd-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="dropdown" role="menu">
                <li role="none">
                  <Link
                    href="/who_we_are/about"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      👤
                    </span>
                    About Us
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/who_we_are/partners"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🤝
                    </span>
                    Our Partners
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/who_we_are/disclaimer"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      📋
                    </span>
                    Our Disclaimer
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`nav-item has-dropdown ${activeDropdown === 'services' ? 'open' : ''}`}>
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown('services', e)}>
                Services{" "}
                <svg
                  className="dd-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="dropdown wide" role="menu">
                <li role="none">
                  <Link
                    href="/images/services/investment-planning"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      📈
                    </span>
                    Investment Planning
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/images/services/living-will-trust"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      📜
                    </span>
                    Living Will &amp; Trust
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/images/services/tax-saving"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      💰
                    </span>
                    Tax Savings
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/images/services/retirement-planning"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🏖️
                    </span>
                    Retirement Planning
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/images/services/kids-college"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🎓
                    </span>
                    Kids College
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/images/services/life-insurance"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🛡️
                    </span>
                    Life Insurance
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`nav-item has-dropdown ${activeDropdown === 'entrepreneurship' ? 'open' : ''}`}>
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown('entrepreneurship', e)}>
                Entrepreneurship{" "}
                <svg
                  className="dd-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="dropdown" role="menu">
                <li role="none">
                  <Link
                    href="/Entrepreneurship/6-steps-to-financial-freedom"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🚀
                    </span>
                    6 Steps to Financial Freedom
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`nav-item has-dropdown ${activeDropdown === 'media' ? 'open' : ''}`}>
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown('media', e)}>
                Media{" "}
                <svg
                  className="dd-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <ul className="dropdown" role="menu">
                <li role="none">
                  <Link
                    href="/Activities/blogs"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      ✍️
                    </span>
                    Blog Articles
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/Activities/videos"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      🎥
                    </span>
                    Video Gallery
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/Activities/Photos"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <span className="dd-icon" aria-hidden="true">
                      📸
                    </span>
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/resources" className="nav-link">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined" && window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: "https://calendly.com/webserviesbygupta/30min",
                    });
                  }
                }}
                className="btn-nav-cta"
              >
                Book Consultation{" "}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </li>
          </ul>
          <button
            className="hamburger"
            id="hamburger"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="nav-menu"
            onClick={(e) => {
              const hamburger = e.currentTarget;
              const navMenu = document.getElementById('nav-menu');
              const overlay = document.getElementById('nav-overlay');
              const isOpen = hamburger.classList.toggle('open');
              navMenu?.classList.toggle('open', isOpen);
              overlay?.classList.toggle('active', isOpen);
              document.body.style.overflow = isOpen ? 'hidden' : '';
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div 
        className="nav-overlay" 
        id="nav-overlay"
        onClick={() => {
          const hamburger = document.getElementById('hamburger');
          const navMenu = document.getElementById('nav-menu');
          const overlay = document.getElementById('nav-overlay');
          hamburger?.classList.remove('open');
          navMenu?.classList.remove('open');
          overlay?.classList.remove('active');
          document.body.style.overflow = '';
        }}
      ></div>
    </>
  );
}
