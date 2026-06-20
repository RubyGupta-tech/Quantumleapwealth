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
        /* New Hero CSS */
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 5% 120px 5%;
          box-sizing: border-box;
          background-color: #0a1930;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg, rgba(10, 25, 48, 0.85) 0%, rgba(10, 25, 48, 0.95) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
        }

        .eyebrow {
          color: #e8c678;
          font-size: 0.85rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .eyebrow::before, .eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: #e8c678;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem); 
          line-height: 1.15;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #fff;
        }

        .headline span {
          color: #e8c678;
          font-style: italic;
          font-weight: 400;
        }

        .paragraph {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 auto 20px auto;
          font-weight: 300;
          max-width: 700px;
        }

        .mini-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 0 auto 25px auto;
          max-width: 800px;
        }

        .mini-tag {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .tag-title {
          font-size: 0.8rem;
          color: #e8c678;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tag-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          color: #fff !important;
          padding: 14px 32px;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.3);
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.8), 0 0 40px rgba(201, 168, 76, 0.4);
        }

        .btn-primary-hero svg {
          transition: transform 0.3s ease;
        }
        
        .btn-primary-hero:hover svg {
          transform: translateX(4px);
        }

        .overlap-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: -140px auto 10px auto; 
          padding: 0 5%;
          display: flex;
          justify-content: flex-start;
        }

        .profile-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          border-bottom: 4px solid #e8c678;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 15px;
          width: 100%;
          max-width: 280px;
        }

        .profile-box-image {
          width: 100%;
          height: 250px;
          border-radius: 8px;
          object-fit: cover;
          object-position: top center;
          background: #0a1930;
        }

        .profile-box-text h3 {
          font-family: var(--font-great-vibes), 'Great Vibes', cursive;
          font-size: 2.2rem;
          color: #a07a28;
          margin: 0 0 5px 0;
          line-height: 1;
        }

        .profile-box-text p {
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          color: #0a1930;
          margin: 0;
          text-transform: uppercase;
          font-weight: 600;
        }

        #services {
          background: #ffffff;
          padding-top: 0px;
          margin-top: -40px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-container {
            background-attachment: scroll; /* Fix for missing background on mobile/iOS */
          }
          .headline { font-size: 2.5rem; }
          .mini-tags { gap: 20px; flex-direction: column; }
          .overlap-container { justify-content: center; margin-top: 20px; margin-bottom: 40px; }
          #services {
            margin-top: 0;
            padding-top: 40px;
          }
        }
      `}} />


      {/* HERO SECTION */}
      <section className="hero-container" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="eyebrow">Quantum Leap Wealth</div>
          <h1 className="headline">Navigating Your Financial Future <span>With Clarity</span></h1>
          <p className="paragraph">
            At Quantum Leap Wealth, we empower individuals, families, and entrepreneurs with education-first financial strategies designed to help create long-term security, tax-efficient retirement income, and a lasting legacy.
          </p>

          <div className="mini-tags">
            <div className="mini-tag">
              <div className="tag-title">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
                Educate Today
              </div>
              <p className="tag-desc">Build Knowledge</p>
            </div>
            <div className="mini-tag">
              <div className="tag-title">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
                Elevate Tomorrow
              </div>
              <p className="tag-desc">Create Opportunities</p>
            </div>
            <div className="mini-tag">
              <div className="tag-title">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                Empower Forever
              </div>
              <p className="tag-desc">Leave a Lasting Impact</p>
            </div>
          </div>

          <button onClick={(e) => {
            e.preventDefault();
            if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
          }} className="btn-primary-hero">
            BOOK DISCOVERY CALL
          </button>
        </div>
      </section>

      {/* The Single Overlapping Box on the Left with Anu's Image */}
      <div className="overlap-container">
        <div className="profile-box">
          <img src="/images/Anu-Cutout.png" alt="Anuradha" className="profile-box-image" />
          <div className="profile-box-text">
            <h3>Anuradha</h3>
            <p>Founder | Financial Strategist</p>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="section" id="services">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
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
            }}>BOOK DISCOVERY CALL →</a>
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
