"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Quantum Leap Wealth</h4>
            <p className="footer-brand-desc">
              Your trusted partner for comprehensive financial planning,
              investment guidance, and wealth preservation across all stages of
              life.
            </p>
            <div className="footer-social">
              <a href="#" title="Facebook">
                f
              </a>
              <a href="#" title="Instagram">
                ig
              </a>
              <a href="#" title="LinkedIn">
                in
              </a>
              <a href="#" title="YouTube">
                ▶
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/who_we_are/about">About Us</Link>
              </li>
              <li>
                <Link href="/who_we_are/partners">Our Partners</Link>
              </li>
              <li>
                <Link href="/Entrepreneurship/6-steps-to-financial-freedom">
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/Activities/blogs">Blog Articles</Link>
              </li>
              <li>
                <Link href="/Activities/Photos">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/images/services/investment-planning">
                  Investment Planning
                </Link>
              </li>
              <li>
                <Link href="/images/services/retirement-planning">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/images/services/life-insurance">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/images/services/tax-saving">Tax Savings</Link>
              </li>
              <li>
                <Link href="/images/services/kids-college">
                  Kids College Fund
                </Link>
              </li>
              <li>
                <Link href="/images/services/living-will-trust">
                  Living Will &amp; Trust
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              📞 <a href="tel:+14082033877">(+1) 408-203-3877</a>
            </div>
            <div className="footer-contact-item">
              ✉{" "}
              <a href="mailto:quantumlfs@gmail.com">quantumlfs@gmail.com</a>
            </div>
            <div className="footer-contact-item">📍 California, USA</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Quantum Leap Wealth. All rights reserved.</span>
          <span>
            <Link href="/who_we_are/disclaimer">Disclaimer</Link> &nbsp;|&nbsp;
            <a href="#">Privacy Policy</a> &nbsp;|&nbsp;
            <a href="#">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
