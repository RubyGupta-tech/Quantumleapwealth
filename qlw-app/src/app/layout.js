import { Inter, Playfair_Display, Dancing_Script, Great_Vibes } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingContact from "@/components/FloatingContact";

// Global CSS Imports - Consolidated into style.css for better performance
import "./globals.css";
import "../../public/css/navbar.css";
import "../../public/css/style.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  title: "Quantum Leap Wealth - Your Trusted Financial Partner",
  description: "Quantum Leap Wealth offers expert financial services: investment planning, retirement, life insurance, tax savings, and business opportunities in California USA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics (GA4) - Loaded after page is interactive */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3RWBTCCG9V" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RWBTCCG9V');
          `}
        </Script>
        
        {/* Calendly - Restored to afterInteractive for functional popup widget */}
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <Script id="calendly-back-fix" strategy="afterInteractive">
          {`
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
          `}
        </Script>



      </head>
      <body suppressHydrationWarning={true}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" role="main">
          <ScrollAnimator />
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
