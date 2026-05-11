import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Script from "next/script";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingContact from "@/components/FloatingContact";

// Global CSS Imports - Next.js will bundle and optimize these
import "./globals.css";
import "../../public/css/style.css";
import "../../public/css/navbar-v3.css";
import "../../public/css/ticker-fix.css";

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

export const metadata = {
  title: "Quantum Leap Wealth — Your Trusted Financial Partner",
  description: "Quantum Leap Wealth offers expert financial services: investment planning, retirement, life insurance, tax savings, and business opportunities in California USA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <head>
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
        
        {/* Calendly - Loaded only when needed or deferred */}
        <link 
          rel="stylesheet" 
          href="https://assets.calendly.com/assets/external/widget.css" 
          media="print" 
          onLoad="this.media='all'" 
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Topbar />
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
