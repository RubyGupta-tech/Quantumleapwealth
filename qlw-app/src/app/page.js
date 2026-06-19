"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import "./home.css";

const eventsData = [
  { title: "Free Retirement Planning Webinar", date: "2025-03-15", time: "6:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Learn how to build a secure retirement plan with tax-efficient strategies and smart investment allocation for long-term growth." },
  { title: "Tax-Saving Strategies Workshop", date: "2025-04-02", time: "7:00 PM PST", location: "San Jose, CA", price: "Free", description: "Discover proven methods to reduce tax liability, maximize deductions, and keep more of your hard-earned money legally." },
  { title: "College Funding Seminar for Parents", date: "2025-04-20", time: "5:30 PM PST", location: "Online (Zoom)", price: "Free", description: "Plan ahead for your child's education with 529 plans, scholarships, and smart savings strategies that grow over time." },
  { title: "Life Insurance Awareness Session", date: "2025-02-10", time: "6:30 PM PST", location: "Fremont, CA", price: "Free", description: "An interactive session covering term vs. permanent life insurance, how to choose the right coverage, and building wealth through insurance.", attendees: "85+", recapLink: "#" },
  { title: "2025 Financial Planning Kickoff", date: "2025-01-22", time: "7:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Started the year strong with a comprehensive look at market trends, investment opportunities, and goal-setting frameworks for 2025.", attendees: "120+", recapLink: "#" },
  { title: "Year-End Tax Optimization Workshop", date: "2024-12-05", time: "6:00 PM PST", location: "San Jose, CA", price: "Free", description: "Helped families optimize their year-end tax positions with last-minute strategies for deductions, contributions, and charitable giving.", attendees: "95+", recapLink: "#" }
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [eventTab, setEventTab] = useState('upcoming');
  const [eventSlideIndex, setEventSlideIndex] = useState(0);
  const [alertVisible, setAlertVisible] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const slideInterval = useRef(null);
  const eventInterval = useRef(null);

  // Hero Slider Logic
  useEffect(() => {
    const nextSlide = () => {
      setSlideIndex(prev => (prev + 1) % 4);
    };
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const goToHeroSlide = (n) => {
    setSlideIndex(n);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => setSlideIndex(prev => (prev + 1) % 4), 4000);
  };

  // Events Logic
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingEvents = eventsData.filter(e => new Date(e.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
  const pastEvents = eventsData.filter(e => new Date(e.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));
  const activeEvents = eventTab === 'upcoming' ? upcomingEvents : pastEvents;

  const [visibleEventCount, setVisibleEventCount] = useState(3);
  useEffect(() => {
    const updateCount = () => {
      setVisibleEventCount(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxEventIndex = Math.max(0, activeEvents.length - visibleEventCount);

  useEffect(() => {
    const nextEvent = () => {
      setEventSlideIndex(prev => (prev >= maxEventIndex ? 0 : prev + 1));
    };
    eventInterval.current = setInterval(nextEvent, 4000);
    return () => clearInterval(eventInterval.current);
  }, [maxEventIndex, eventTab]);

  const slideEvents = (dir) => {
    setEventSlideIndex(prev => {
      let ni = prev + dir;
      if (ni > maxEventIndex) return 0;
      if (ni < 0) return maxEventIndex;
      return ni;
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      } else {
        const err = await response.json();
        console.error("Form submission error:", err);
        setError("Technical issue. Please try again or click the link below.");
      }
    } catch (error) {
      console.error("Form network error:", error);
      setError("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [error, setError] = useState("");

  return (
    <div className="home-container">
      {/* Critical CSS for LCP Optimization */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-split-section { display: flex; height: auto; min-height: auto; width: 100%; background: radial-gradient(circle at 20% 50%, #061020 0%, #030810 100%); position: relative; overflow: hidden; padding: 60px 0 20px 0; }
        .hero-split-left { flex: 1 1 50%; display: flex; align-items: center; justify-content: center; padding: 4% 8%; position: relative; z-index: 2; }
        @media(max-width: 1200px) {
          .hero-split-section { flex-direction: column; }
          .hero-split-left { padding: 40px 20px !important; width: 100%; }
          .hero-split-right { padding: 40px 20px !important; width: 100%; }
          .hero-split-right > div { flex-direction: column; max-width: 500px !important; }
          .hero-split-right > div > div { width: 100% !important; }
        }
        .hero-glass-card { background: #0a2540; border-radius: 20px; padding: 40px; position: relative; overflow: hidden; backdrop-filter: blur(16px); }
        .hero-split-title { font-size: clamp(2.2rem, 4vw, 3.5rem); line-height: 1.1; color: white; font-family: var(--font-playfair); font-weight: 800; }
        .hero-split-left-content { max-width: 600px; width: 100%; animation: fadeUpIn 0.3s ease-out forwards; }
        @keyframes fadeUpIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @media(max-width: 992px) { .hero-split-section { flex-direction: column; height: auto; } .hero-split-left { padding: 40px 20px; width: 100%; } }
      `}} />


      {/* HERO SECTION */}
      <section className="hero-split-section" id="home">
        <div className="hero-split-left" style={{ alignItems: 'center', textAlign: 'left', padding: '0 5% 0 8%' }}>
          <div className="hero-split-left-content" style={{ background: 'transparent', padding: '0', boxShadow: 'none', backdropFilter: 'none', maxWidth: '700px', width: '100%' }}>
            <p style={{ color: '#e8c678', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontSize: '0.8rem' }}>
              WELCOME TO QUANTUM LEAP WEALTH
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: '800', lineHeight: '1.1', marginBottom: '15px' }}>
              Helping Families Build,<br /> Protect & Preserve <span style={{ color: '#e8c678' }}>Wealth</span>
            </h1>
            <p style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem', marginBottom: '15px', wordSpacing: '2px' }}>
              Retirement Planning <span style={{ color: '#e8c678', margin: '0 5px' }}>•</span> Wealth Strategies <span style={{ color: '#e8c678', margin: '0 5px' }}>•</span> Financial Education
            </p>
            <div style={{ width: '60px', height: '2px', background: '#e8c678', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '25px', maxWidth: '600px' }}>
              At Quantum Leap Wealth, we empower individuals, families, and entrepreneurs with education-first financial strategies designed to help create long-term security, tax-efficient retirement income, and a lasting legacy.
            </p>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
              }} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #e8c678, #c9a84c)', color: '#0a2540', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', border: 'none', padding: '12px 24px', fontSize: '0.85rem' }}>
                <span style={{ fontSize: '1.1rem' }}>📅</span> BOOK DISCOVERY CALL
              </a>
              <a href="/who_we_are/about" className="btn btn-primary" style={{ background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 24px', fontSize: '0.85rem' }}>
                <span style={{ fontSize: '1.1rem', color: '#e8c678' }}>▷</span> EXPLORE OUR SERVICES
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '10px' }}>
                <span style={{ display: 'block', marginBottom: '8px' }}>
                  <svg width="26" height="26" fill="none" stroke="#e8c678" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                  </svg>
                </span>
                <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: '700', marginBottom: '3px' }}>EDUCATE TODAY</h4>
                <p style={{ color: '#e8c678', fontSize: '0.75rem', margin: '0' }}>Build Knowledge</p>
              </div>
              <div style={{ textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '10px' }}>
                <span style={{ display: 'block', marginBottom: '8px' }}>
                  <svg width="26" height="26" fill="none" stroke="#e8c678" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
                  </svg>
                </span>
                <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: '700', marginBottom: '3px' }}>ELEVATE TOMORROW</h4>
                <p style={{ color: '#e8c678', fontSize: '0.75rem', margin: '0' }}>Create Opportunities</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ display: 'block', marginBottom: '8px' }}>
                  <svg width="26" height="26" fill="none" stroke="#e8c678" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                  </svg>
                </span>
                <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: '700', marginBottom: '3px' }}>EMPOWER FOREVER</h4>
                <p style={{ color: '#e8c678', fontSize: '0.75rem', margin: '0' }}>Leave a Lasting Impact</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ height: '2px', width: '60px', background: 'linear-gradient(to right, rgba(232,198,120,0), rgba(232,198,120,1))' }}></div>
              <p style={{ fontFamily: "'Great Vibes', 'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.8rem', color: '#e8c678', margin: '0' }}>
                Where Vision Becomes Wealth
              </p>
              <div style={{ height: '2px', width: '60px', background: 'linear-gradient(to right, rgba(232,198,120,1), rgba(232,198,120,0))' }}></div>
            </div>
          </div>
        </div>

        <div className="hero-split-right" style={{ padding: '0 5% 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#061020', borderRadius: '16px', overflow: 'hidden', display: 'flex', width: '100%', maxWidth: '600px', height: '550px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '45%', position: 'relative', background: '#e2e8f0' }}>
              <img src="/images/Anu-Profile-Pic2.png" alt="Anu Prasad" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            </div>
            <div style={{ width: '55%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ width: '3px', height: '40px', background: '#e8c678', marginRight: '12px', marginTop: '4px' }}></div>
                  <div>
                    <p style={{ color: '#e8c678', fontWeight: '700', letterSpacing: '1.5px', fontSize: '0.75rem', margin: '0 0 2px 0' }}>
                      MEET YOUR
                    </p>
                    <h3 style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', lineHeight: '1.1', margin: '0 0 8px 0' }}>
                      FINANCIAL<br />PARTNER
                    </h3>
                  </div>
                </div>
                <div style={{ width: '40px', height: '2px', background: '#e8c678', marginLeft: '15px' }}></div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '15px', fontWeight: '500' }}>
                Helping families navigate financial decisions with clarity, confidence, and purpose.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '20px' }}>
                Whether you&apos;re preparing for retirement, seeking tax-efficient strategies, protecting your assets, or building a legacy for future generations, Quantum Leap Wealth is committed to helping you make informed financial choices through education and personalized guidance.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <p style={{ fontFamily: "'Great Vibes', 'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.8rem', color: '#e8c678', marginBottom: '2px' }}>
                  Anuradha
                </p>
                <p style={{ color: 'white', fontWeight: '700', fontSize: '0.7rem', letterSpacing: '1px', margin: '0' }}>
                  FOUNDER | FINANCIAL STRATEGIST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section section-light" id="services">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Best Services</h2>
            <p className="section-sub">Comprehensive financial solutions designed to protect, grow, and sustain your wealth at every stage of life.</p>
          </div>
          <div className="services-grid">
            <ServiceCard href="/images/services/investment-planning" img="/images/financial_pics.png" title="Financial Needs Analysis" backTitle="Comprehensive Financial Needs Analysis" delay="1"
              desc="Strategic portfolio management aligned with your risk tolerance and long-term financial goals for maximum growth." />
            <ServiceCard href="/images/services/living-will-trust" img="/images/will&Trust_pics.png" title="Living Will &amp; Trust" delay="2"
              desc="Protect your legacy and ensure your assets are distributed exactly as you intend, with confidence and clarity." />
            <ServiceCard href="/images/services/tax-saving" img="/images/LifeProtection_pics.png" title="Tax Savings" delay="3"
              desc="Maximize your wealth with smart, proactive tax strategies that keep more money in your pocket legally." />
            <ServiceCard href="/images/services/retirement-planning" img="/images/ritermentplanning_pics.png" title="Retirement Planning" delay="1"
              desc="Plan the retirement you deserve - comfortable, secure, and financially independent from day one." />
            <ServiceCard href="/images/services/kids-college" img="/images/kids_college_planning.png" title="Kids College Fund" delay="2"
              desc="Invest in your child's future today with education savings plans tailored to your family's timeline and goals." />
            <ServiceCard href="/images/services/life-insurance" img="/images/LifeProtection_PermanentInsurance_pics.png" title="Life Insurance" delay="3"
              desc="Comprehensive coverage that protects your loved ones financially while building long-term asset value." />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="why-choose-title">Why Choose Us?</h2>
          <div className="why-choose-grid">
            <WhyChooseItem icon="🎯" title="Expert Guidance" desc="Licensed professionals providing personalized financial strategies tailored to your goals." />
            <WhyChooseItem icon="📋" title="Comprehensive Solutions" desc="From insurance to real estate - all your financial needs under one trusted roof." />
            <WhyChooseItem icon="📈" title="Proven Results" desc="Trusted by hundreds of families to build, protect, and grow their wealth for generations." />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section section-light" id="process">
        <div className="container">
          <div className="text-center reveal">
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">Our Process</span>
              <div className="divider-line"></div>
            </div>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-sub">A simple, 4-step journey to financial security and wealth growth.</p>
          </div>
          <div className="process-timeline">
            <div className="timeline-line"></div>
            <TimelineItem title="Free Consultation" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>} desc="We start with a no-obligation conversation to understand your current financial situation, challenges, and long-term goals." />
            <TimelineItem title="Financial Analysis" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"></path></svg>} desc="We analyze your assets, income, risk tolerance, and future needs using proprietary tools to build a complete, transparent picture." />
            <TimelineItem title="Custom Strategy" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>} desc="We craft a personalized financial plan covering multi-asset investments, life insurance protection, retirement, and tax optimization." />
            <TimelineItem title="Ongoing Support" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>} desc="Your life changes, and so should your strategy. We monitor, adjust, and stay by your side as your family and wealth evolve over time." />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section section-light" id="products">
        <div className="container">
          <div className="text-center reveal">
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">Our Product</span>
              <div className="divider-line"></div>
            </div>
            <h2 className="section-title">Strategic Partner <span className="highlight">Network</span></h2>
            <p className="section-sub">We collaborate with industry-leading financial institutions to bring you the best-in-class products and solutions.</p>
          </div>
        </div>
        <div className="logo-ticker-container">
          <div className="logo-ticker-track">
            {[1, 2].map(set => (
              <div key={set} style={{ display: 'contents' }}>
                <a href="https://www.american-equity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/American_product.png" alt="American Product" /></a>
                <a href="https://www.annexus.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/annexus_product.png" alt="Annexus Product" /></a>
                <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/corebridge_product.png" alt="Corebridge Product" /></a>
                <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/Fidelity_product.png" alt="Fidelity Product" /></a>
                <a href="https://www.nationwidenewheights.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide Product" /></a>
                <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/northamerican_product.png" alt="North American Product" /></a>
                <a href="https://www.fglife.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/fg-life.png" alt="F&G Life" /></a>
                <a href="https://www.lincolnfinancial.com/public/individuals" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/lincoln-financial.png" alt="Lincoln Financial" /></a>
                <a href="https://www.athene.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/athene.jpg" alt="Athene" /></a>
                <a href="https://www.allianz.com/en.html" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/allianz.png" alt="Allianz" /></a>
                <a href="https://www.ameritas.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ameritas.png" alt="Ameritas" /></a>
                <a href="https://www.ethos.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ethos.png" alt="Ethos" /></a>
                <a href="https://www.americanamicable.com/v4/index.php" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/american-amicable.png" alt="American Amicable" /></a>
                <a href="https://www.mutualofomaha.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/mutual-of-omaha.png" alt="Mutual of Omaha" /></a>
                <a href="https://www.netlaw.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/netlaw.png" alt="NetLaw" /></a>
                <a href="https://www.agentpipeline.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/agent-pipeline.png" alt="Agent Pipeline" /></a>
                <a href="https://neishloss.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/neishloss.png" alt="Neishloss & Fleming" /></a>
                <a href="https://www.foresters.com/en-ca" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/forester-canada.svg" alt="Foresters" /></a>
                <a href="https://www.cpp.ca" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/canada-protection-plan.png" alt="Canada Protection Plan" /></a>
                <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ia.png" alt="iA Financial Group" /></a>
                <a href="https://www.beneva.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/beneva.png" alt="Beneva" /></a>
                <a href="https://www.serenialife.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/serenia-life.jpg" alt="Serenia Life" /></a>
                <a href="https://www.bmo.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/bmo.png" alt="BMO" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="events-section" id="newsletter" style={{ padding: '50px 0', textAlign: 'center', background: '#ffffff', color: '#0b1d42' }}>
        <div className="container">
          <div className="events-header reveal" style={{ marginBottom: '25px' }}>
            <span className="section-label" style={{ color: '#c9a84c', fontWeight: '800' }}>Newsletter</span>
            <h2 className="section-title" style={{ color: '#0b1d42' }}>Stay Connected With Us</h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px', color: '#555' }}>Subscribe to our weekly newsletter.</p>
          </div>
          <div className="reveal">
            <form onSubmit={async (e) => {
              e.preventDefault();
              const firstName = e.target.firstName.value;
              const email = e.target.email.value;
              try {
                const res = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ firstName, email })
                });
                if (res.ok) {
                  window.location.href = '/newsletter/success';
                } else {
                  alert('Something went wrong. Please try again.');
                }
              } catch (err) {
                alert('Something went wrong. Please try again.');
              }
            }} style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '700px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="text" name="firstName" required placeholder="First Name" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, minWidth: '200px', fontSize: '1rem', fontFamily: 'inherit' }} />
              <input type="email" name="email" required placeholder="Email Address" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, minWidth: '200px', fontSize: '1rem', fontFamily: 'inherit' }} />
              <button type="submit" className="btn-primary" style={{ padding: '15px 30px', borderRadius: '4px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#c9a84c', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(201,168,76,0.3)' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY SECTION */}
      <section className="opp-section" id="opportunity">
        <div className="container">
          <div className="opp-inner" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
            <div className="reveal">
              <div className="opp-card">
                <h3>Get In Touch Today</h3>
                <form id="contact-form" className="contact-form-grid" onSubmit={handleFormSubmit}>
                  <div className="opp-form-group">
                    <label>First Name *</label>
                    <input type="text" name="first_name" required placeholder="First name" />
                  </div>
                  <div className="opp-form-group">
                    <label>Last Name *</label>
                    <input type="text" name="last_name" required placeholder="Last name" />
                  </div>
                  <div className="opp-form-group">
                    <label>Email Address *</label>
                    <input type="email" name="user_email" required placeholder="your@email.com" />
                  </div>
                  <div className="opp-form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" />
                  </div>
                  <div className="opp-form-group grid-span-2">
                    <label>Service of Interest</label>
                    <select name="service">
                      <option value="">- Select a service -</option>
                      <option>Financial Needs Analysis</option>
                      <option>Living Will &amp; Trust</option>
                      <option>Tax Savings</option>
                      <option>Retirement Planning</option>
                      <option>Kids College Fund</option>
                      <option>Life Insurance</option>
                      <option>6 Steps to Financial Freedom</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="opp-form-group grid-span-2">
                    <label>Your Message *</label>
                    <textarea name="message" required placeholder="Tell us about your goals..." style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--bg-light)', color: 'var(--text-dark)', outline: 'none', transition: '0.2s', fontFamily: "var(--font-inter)", resize: 'vertical', minHeight: '100px' }}></textarea>
                  </div>
                  <div className="grid-span-2">
                    <button
                      type="submit"
                      className="opp-submit form-submit"
                      disabled={isSubmitting}
                      style={{ marginTop: 0 }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </button>
                  </div>
                </form>
                {error && (
                  <div style={{ marginTop: "15px", textAlign: "center" }}>
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginBottom: "5px" }}>{error}</p>
                    <a
                      href="mailto:connect@quantumleapwealth.com?subject=Contact Inquiry&body=Hi Quantum Leap Wealth team, I'm reaching out via the website fallback."
                      style={{ color: "#fff", fontSize: "0.8rem", textDecoration: "underline", opacity: 0.8 }}
                    >
                      Email us directly instead →
                    </a>
                  </div>
                )}
                {formSubmitted && (
                  <div className="form-success" id="form-success" style={{ display: 'block', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: '#166534', fontWeight: '600', marginTop: '15px' }}>
                    ✅ Thank you! Your message has been sent. We&apos;ll reach out within 24 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>



      <ScrollAnimator />
    </div>
  );
}

// Sub-components for cleaner structure
function ServiceCard({ href, img, title, backTitle, desc, delay }) {
  return (
    <a href={href} className={`flip-card reveal reveal-delay-${delay}`} style={{ textDecoration: 'none' }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={img} alt={title} width={375} height={320} style={{ objectFit: 'cover' }} />
          <div className="front-content"><h3>{title}</h3></div>
        </div>
        <div className="flip-card-back">
          <h3>{backTitle || title}</h3>
          <p>{desc}</p>
          <span className="card-arrow">Learn more →</span>
        </div>
      </div>
    </a>
  );
}

function WhyChooseItem({ icon, title, desc }) {
  return (
    <div>
      <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{icon}</div>
      <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px', fontWeight: '700' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}

function TimelineItem({ title, icon, desc }) {
  const itemRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }, { threshold: 0.2 });
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-item" ref={itemRef}>
      <div className="timeline-left"><h3 className="tl-title">{title}</h3></div>
      <div className="timeline-center">{icon}</div>
      <div className="timeline-right"><p className="tl-desc">{desc}</p></div>
    </div>
  );
}

function TickerLogo({ src, alt }) {
  return (
    <div className="logo-item">
      <Image src={src} alt={alt} width={150} height={50} style={{ objectFit: 'contain' }} />
    </div>
  );
}

function EventCard({ event, isPast }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date(event.date);
  const day = String(d.getDate()).padStart(2, '0');
  const mon = months[d.getMonth()];

  return (
    <div className="events-slide">
      <div className="event-card">
        <div className="event-card-top">
          <div className="event-date-badge"><span className="eday">{day}</span><span className="emonth">{mon}</span></div>
          <h4>{event.title}</h4>
        </div>
        <div className="event-card-body">
          <span className={`event-badge-status ${isPast ? 'badge-completed' : 'badge-upcoming'}`}>
            {isPast ? '✓ Completed' : '● Upcoming'}
          </span>
          <p>{event.description}</p>
          <div className="event-meta">
            {isPast ? (
              <><span>👥 {event.attendees || 'N/A'} Attendees</span><span>📍 {event.location}</span></>
            ) : (
              <><span>🕐 {event.time}</span><span>📍 {event.location}</span><span>🎟️ {event.price || 'Free'}</span></>
            )}
          </div>
          {isPast ? (
            <a href={event.recapLink || '#'} className="event-btn event-btn-recap">View Recap →</a>
          ) : (
            <a href="#" className="event-btn event-btn-register" onClick={(e) => {
              e.preventDefault();
              if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
            }}>Register Now →</a>
          )}
        </div>
      </div>
    </div>
  );
}

function OppPerk({ text }) {
  return (
    <div className="opp-perk"><div className="opp-perk-icon">✓</div>{text}</div>
  );
}
