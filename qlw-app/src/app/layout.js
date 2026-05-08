import Script from "next/script";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Quantum Leap Wealth — Your Trusted Financial Partner",
  description: "Quantum Leap Wealth offers expert financial services: investment planning, retirement, life insurance, tax savings, and business opportunities in California USA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3RWBTCCG9V" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RWBTCCG9V');
          `}
        </Script>

        {/* Global Styles */}
        <link rel="stylesheet" href="/css/style.css" precedence="default" />
        <link rel="stylesheet" href="/css/navbar-v3.css" precedence="default" />
        <link rel="stylesheet" href="/css/ticker-fix.css" precedence="default" />
        
        {/* Calendly */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" precedence="default" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Topbar />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
