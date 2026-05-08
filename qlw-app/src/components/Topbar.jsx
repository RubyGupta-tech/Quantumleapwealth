"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <div className="topbar" role="complementary" aria-label="Company Contact Info">
      <div className="topbar-inner">
        <div className="topbar-left">
          <a href="tel:+14082033877">📞 (+1) 408-203-3877</a>
          <div className="topbar-divider"></div>
          <a href="mailto:quantumlfs@gmail.com">✉ quantumlfs@gmail.com</a>
          <div className="topbar-divider"></div>
          <span>📍 California, USA</span>
        </div>
        <div className="topbar-right">
          <div className="social-links" role="list">
            <a href="#" title="Facebook" aria-label="Follow us on Facebook" role="listitem">
              f
            </a>
            <a href="#" title="Instagram" aria-label="Follow us on Instagram" role="listitem">
              ig
            </a>
            <a href="#" title="LinkedIn" aria-label="Follow us on LinkedIn" role="listitem">
              in
            </a>
            <a href="#" title="YouTube" aria-label="Follow us on YouTube" role="listitem">
              ▶
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
