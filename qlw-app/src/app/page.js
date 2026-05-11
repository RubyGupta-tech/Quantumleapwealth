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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simulating the handleSubmit from legacy script
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Form error:", error);
    }
  };

  return (
    <>
      {alertVisible && (
        <div className="event-alert-banner" id="eventAlertBanner">
          <span>🎉 <strong>Upcoming Event:</strong> Free Retirement Planning Webinar on Mar 15th!</span>
          <a href="#events" className="event-alert-btn">View Details</a>
          <button className="event-alert-close" aria-label="Dismiss Alert" onClick={() => {
            setAlertVisible(false);
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.style.top = '0px';
          }}>×</button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="hero-split-section" id="home">
        <div className="hero-ambient-orb orb-1"></div>
        <div className="hero-ambient-orb orb-2"></div>
        <div className="hero-bg-design-left"></div>

        <div className="hero-split-left">
          <div className="hero-split-left-content hero-glass-card">
            <h1 className="hero-split-title">
              <div className="hero-title-line">
                <span className="reveal-inner">Built on <span className="shimmer-text">Strategy.</span></span>
              </div>
              <div className="hero-title-line">
                <span className="reveal-inner">Driven by <span className="shimmer-text">Purpose.</span></span>
              </div>
            </h1>
            <p className="hero-split-desc">
              At Quantum Leap Wealth, we believe financial planning should be intentional, structured, and built for
              long-term security — not driven by trends or guesswork.
            </p>
            <div className="hero-split-highlights">
              <div className="hero-split-hl" style={{ animationDelay: "1.8s" }}>
                <div className="hero-split-hl-icon">💰</div>Tax-Efficient
              </div>
              <div className="hero-split-hl" style={{ animationDelay: "1.9s" }}>
                <div className="hero-split-hl-icon">🏖️</div>Retirement
              </div>
              <div className="hero-split-hl" style={{ animationDelay: "2.0s" }}>
                <div className="hero-split-hl-icon">🛡️</div>Life Protection
              </div>
              <div className="hero-split-hl" style={{ animationDelay: "2.1s" }}>
                <div className="hero-split-hl-icon">🎓</div>College Funding
              </div>
            </div>
            <div className="hero-split-buttons">
              <a href="/who_we_are/about" className="btn btn-primary" style={{ boxShadow: "0 10px 20px rgba(201,168,76,0.2)", whiteSpace: "nowrap" }}>Our Story</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/webserviesbygupta/30min' });
              }} className="btn btn-light-gold" style={{ whiteSpace: "nowrap", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}>Consultation</a>
            </div>
          </div>
        </div>

        <div className="hero-split-right">
          <div className="dynamic-slider" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {/* Slide 1 */}
            <div className={`slide ${slideIndex === 0 ? 'active' : ''}`} style={{ height: '100%' }}>
              <div className="slide-content" style={{ background: 'white', flexDirection: 'column', padding: '20px', height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Image 
                  src="/images/QWL_logo_original.png" 
                  alt="Quantum Leap Wealth" 
                  width={260} 
                  height={260} 
                  className="slide-logo" 
                  priority
                  style={{ marginBottom: '20px', maxWidth: '260px', height: 'auto' }} 
                />
                <p style={{ color: 'var(--primary)', fontSize: '1.15rem', fontWeight: 600, textAlign: 'center', maxWidth: '80%', margin: '0 auto' }}>
                  Comprehensive Wealth Management & Real Estate Investment Strategies
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className={`slide ${slideIndex === 1 ? 'active' : ''}`} style={{ height: '100%' }}>
              <div className="slide-content" style={{ height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/Anu_profile_pic.png" 
                  alt="Expert Leadership" 
                  fill
                  style={{ objectPosition: 'top center', objectFit: 'cover' }} 
                  className="slide-bg"
                />
                <div className="slide-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)', bottom: 0, paddingBottom: '40px', position: 'absolute', width: '100%', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>Expert Leadership You Can Trust</h2>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className={`slide ${slideIndex === 2 ? 'active' : ''}`} style={{ height: '100%' }}>
              <div className="slide-content" style={{ height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/Anu_Homepage_pic.png" 
                  alt="Secure Your Family" 
                  fill
                  style={{ objectPosition: 'top center', objectFit: 'cover' }} 
                  className="slide-bg"
                />
                <div className="slide-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)', bottom: 0, paddingBottom: '40px', position: 'absolute', width: '100%', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>Securing Your Family's Legacy</h2>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className={`slide ${slideIndex === 3 ? 'active' : ''}`} style={{ height: '100%' }}>
              <div className="slide-content" style={{ background: 'linear-gradient(135deg, #f8f9fa, #e2e8f0)', height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <div className="slide-services-container" style={{ width: '100%', padding: '0 5%' }}>
                  <h3 style={{ color: 'var(--primary)', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px' }}>Our Expertise</h3>
                  <div className="slide-services-grid">
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>📈 Investment Planning</div>
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>🏖️ Retirement</div>
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>🛡️ Life Insurance</div>
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>💰 Tax Savings</div>
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>🎓 Kids College</div>
                    <div className="slide-service-box" style={{ padding: '12px', fontSize: '0.9rem' }}>📜 Will & Trust</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider-dots" style={{ bottom: '30px', z-index: 20 }}>
              {[0, 1, 2, 3].map(i => (
                <span key={i} className={`dot ${slideIndex === i ? 'active' : ''}`} onClick={() => goToHeroSlide(i)}></span>
              ))}
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
            <ServiceCard href="/images/services/investment-planning" img="/images/financial_pics.png" title="Investment Planning" delay="1" 
              desc="Strategic portfolio management aligned with your risk tolerance and long-term financial goals for maximum growth." />
            <ServiceCard href="/images/services/living-will-trust" img="/images/will&Trust_pics.png" title="Living Will & Trust" delay="2" 
              desc="Protect your legacy and ensure your assets are distributed exactly as you intend, with confidence and clarity." />
            <ServiceCard href="/images/services/tax-saving" img="/images/LifeProtection_pics.png" title="Tax Savings" delay="3" 
              desc="Maximize your wealth with smart, proactive tax strategies that keep more money in your pocket legally." />
            <ServiceCard href="/images/services/retirement-planning" img="/images/ritermentplanning_pics.png" title="Retirement Planning" delay="1" 
              desc="Plan the retirement you deserve — comfortable, secure, and financially independent from day one." />
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
            <WhyChooseItem icon="📋" title="Comprehensive Solutions" desc="From insurance to real estate — all your financial needs under one trusted roof." />
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
                <TickerLogo src="/images/product_images/American_product.png" alt="American Product" />
                <TickerLogo src="/images/product_images/annexus_product.png" alt="Annexus Product" />
                <TickerLogo src="/images/product_images/corebridge_product.png" alt="Corebridge Product" />
                <TickerLogo src="/images/product_images/Fidelity_product.png" alt="Fidelity Product" />
                <TickerLogo src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide Product" />
                <TickerLogo src="/images/product_images/northamerican_product.png" alt="North American Product" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="events-section" id="events">
        <div className="container">
          <div className="events-header reveal">
            <span className="section-label">Events</span>
            <h2 className="section-title">Stay Connected With Us</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Join our financial workshops, webinars, and community events to take the next step in your financial journey.</p>
            <div className="events-tabs">
              <button className={`events-tab ${eventTab === 'upcoming' ? 'active' : ''}`} onClick={() => { setEventTab('upcoming'); setEventSlideIndex(0); }}>📅 Upcoming Events ({upcomingEvents.length})</button>
              <button className={`events-tab ${eventTab === 'past' ? 'active' : ''}`} onClick={() => { setEventTab('past'); setEventSlideIndex(0); }}>📋 Past Events ({pastEvents.length})</button>
            </div>
          </div>
          
          <div className="events-panel active">
            {activeEvents.length > 0 ? (
              <div className="events-slider-wrap">
                <div className="events-slider" style={{ transform: `translateX(-${(100 / visibleEventCount) * eventSlideIndex}%)` }}>
                  {activeEvents.map((ev, i) => (
                    <EventCard key={i} event={ev} isPast={eventTab === 'past'} />
                  ))}
                </div>
                <div className="events-nav-arrows">
                  <button className="events-arrow" onClick={() => slideEvents(-1)}>‹</button>
                  <button className="events-arrow" onClick={() => slideEvents(1)}>›</button>
                </div>
              </div>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0', fontSize: '0.95rem' }}>No events to display in this category yet.</p>
            )}
            {activeEvents.length > 0 && (
              <div className="events-dots">
                {Array.from({ length: maxEventIndex + 1 }).map((_, i) => (
                  <button key={i} className={`events-dot ${eventSlideIndex === i ? 'active' : ''}`} onClick={() => setEventSlideIndex(i)}></button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OPPORTUNITY SECTION */}
      <section className="opp-section" id="opportunity">
        <div className="container">
          <div className="opp-inner">
            <div className="opp-text reveal">
              <span className="section-label">Opportunity</span>
              <h2>Looking for a Business & Career Opportunity?</h2>
              <p>Join our growing network of financial professionals. We provide world-class training, proven systems, and a proven path to financial independence.</p>
              <div className="opp-perks">
                <OppPerk text="Full training & licensing support" />
                <OppPerk text="Flexible part-time or full-time" />
                <OppPerk text="Competitive commissions & bonuses" />
                <OppPerk text="Work from anywhere in the USA" />
                <OppPerk text="Mentorship from top producers" />
              </div>
              <a href="/Entrepreneurship/6-steps-to-financial-freedom" className="btn btn-primary">Learn About the 6 Steps →</a>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="opp-card">
                <h3>Get In Touch Today</h3>
                <form id="contact-form" onSubmit={handleFormSubmit}>
                  <div className="opp-form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label>First Name *</label>
                      <input type="text" name="first_name" required placeholder="First name" />
                    </div>
                    <div>
                      <label>Last Name *</label>
                      <input type="text" name="last_name" required placeholder="Last name" />
                    </div>
                  </div>
                  <div className="opp-form-group">
                    <label>Email Address *</label>
                    <input type="email" name="user_email" required placeholder="your@email.com" />
                  </div>
                  <div className="opp-form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" />
                  </div>
                  <div className="opp-form-group">
                    <label>Service of Interest</label>
                    <select name="service">
                      <option value="">— Select a service —</option>
                      <option>Investment Planning</option>
                      <option>Living Will & Trust</option>
                      <option>Tax Savings</option>
                      <option>Retirement Planning</option>
                      <option>Kids College Fund</option>
                      <option>Life Insurance</option>
                      <option>6 Steps to Financial Freedom</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="opp-form-group">
                    <label>Your Message *</label>
                    <textarea name="message" required placeholder="Tell us about your goals..." style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--bg-light)', color: 'var(--text-dark)', outline: 'none', transition: '0.2s', fontFamily: "'Inter', sans-serif", resize: 'vertical', minHeight: '100px' }}></textarea>
                  </div>
                  <button type="submit" className="opp-submit form-submit">Send Message →</button>
                </form>
                {formSubmitted && (
                  <div className="form-success" id="form-success" style={{ display: 'block', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: '#166534', fontWeight: '600', marginTop: '15px' }}>
                    ✅ Thank you! Your message has been sent. We'll reach out within 24 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimator />
    </>
  );
}

// Sub-components for cleaner structure
function ServiceCard({ href, img, title, desc, delay }) {
  return (
    <a href={href} className={`flip-card reveal reveal-delay-${delay}`} style={{ textDecoration: 'none' }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={img} alt={title} width={375} height={320} style={{ objectFit: 'cover' }} />
          <div className="front-content"><h3>{title}</h3></div>
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
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
              if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/webserviesbygupta/30min' });
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
