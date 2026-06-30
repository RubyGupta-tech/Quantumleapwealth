"use client";
import { useEffect } from "react";
import "../resources.css";

export default function Page() {
  useEffect(() => {
    // Load Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="resources-page">
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '15px' }}>
            <a href="/" style={{ color: 'var(--text-muted)' }}>Home</a><span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--text-muted)' }}>Resources</span><span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Strategic Partners</span>
          </div>
          <h1>Strategic <span style={{ color: "#c9a84c" }}>Partners</span></h1>
          <p>We collaborate with industry-leading financial institutions to bring you best-in-class products and solutions.</p>
        </div>
      </section>

      {/* ── RESOURCES CONTENT ── */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-layout">

            {/* FULL COLUMN: Partners */}
            <div className="resources-right" style={{ flex: "1 1 100%", maxWidth: "100%", background: "transparent", padding: 0 }}>
              <div className="partners-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>

                {/* Partner 1 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.american-equity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/American_product.png" alt="American Equity/National" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>American</h4>
                  <p>Access top-tier annuities and life insurance products to secure your retirement income.</p>
                  <a href="https://www.american-equity.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Partner 2 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.annexus.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/annexus_product.png" alt="Annexus" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Annexus</h4>
                  <p>Explore innovative retirement solutions designed to protect and aggressively grow your wealth.</p>
                  <a href="https://www.annexus.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Partner 3 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/corebridge_product.png" alt="Corebridge Financial" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Corebridge</h4>
                  <p>Benefit from retirement and insurance solutions tailored for long-term stability.</p>
                  <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Partner 4 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/Fidelity_product.png" alt="Fidelity Investments" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Fidelity</h4>
                  <p>Manage your investments with world-class brokerage and holistic wealth management.</p>
                  <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Partner 5 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.nationwidenewheights.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Nationwide</h4>
                  <p>Protect your family and assets with industry-leading insurance and diverse planning products.</p>
                  <a href="https://www.nationwidenewheights.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Partner 6 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/northamerican_product.png" alt="North American" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>North American</h4>
                  <p>Secure your legacy with reliable life insurance and annuity products from a trusted provider.</p>
                  <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.fglife.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/fg-life.png" alt="F&G Life" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>F&G Life</h4>
                  <p>Innovative annuities and life insurance for retirement protection and growth.</p>
                  <a href="https://www.fglife.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.lincolnfinancial.com/public/individuals" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/lincoln-financial.png" alt="Lincoln Financial" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Lincoln Financial</h4>
                  <p>Comprehensive planning, life insurance, and retirement solutions.</p>
                  <a href="https://www.lincolnfinancial.com/public/individuals" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.athene.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/athene.jpg" alt="Athene" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Athene</h4>
                  <p>Industry-leading annuities designed to help you retire with confidence.</p>
                  <a href="https://www.athene.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.allianz.com/en.html" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/allianz.png" alt="Allianz" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Allianz</h4>
                  <p>Global leader in insurance and asset management solutions.</p>
                  <a href="https://www.allianz.com/en.html" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.ameritas.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/ameritas.png" alt="Ameritas" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Ameritas</h4>
                  <p>Fulfilling life through insurance, retirement, and investment products.</p>
                  <a href="https://www.ameritas.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.ethos.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/ethos.png" alt="Ethos" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Ethos</h4>
                  <p>Fast, easy, and affordable life insurance for everyone.</p>
                  <a href="https://www.ethos.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.americanamicable.com/v4/index.php" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/american-amicable.png" alt="American Amicable" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>American Amicable</h4>
                  <p>Providing financial security and peace of mind through life insurance.</p>
                  <a href="https://www.americanamicable.com/v4/index.php" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.mutualofomaha.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/mutual-of-omaha.png" alt="Mutual of Omaha" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Mutual of Omaha</h4>
                  <p>Trusted insurance and financial services for over a century.</p>
                  <a href="https://www.mutualofomaha.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.netlaw.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/netlaw.png" alt="NetLaw" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>NetLaw</h4>
                  <p>Comprehensive estate planning platform for your family's future.</p>
                  <a href="https://www.netlaw.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.agentpipeline.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/agent-pipeline.png" alt="Agent Pipeline" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Agent Pipeline</h4>
                  <p>Empowering agents with top-tier insurance products and resources.</p>
                  <a href="https://www.agentpipeline.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://neishloss.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/neishloss.png" alt="Neishloss & Fleming" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Neishloss & Fleming</h4>
                  <p>Premier distributor of Medicare and senior health products.</p>
                  <a href="https://neishloss.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>
                
                {/* Canada Title */}
                <div style={{ gridColumn: "1 / -1", width: "100%", borderTop: "1px solid #e1e8ed", margin: "30px 0 10px 0", paddingTop: "30px", textAlign: "center" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--primary)" }}>Available in Canada</h2>
                </div>

                {/* Canada 1 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.foresters.com/en-ca" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/forester-canada.svg" alt="Foresters" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Foresters</h4>
                  <p>Life insurance and financial solutions focused on family well-being.</p>
                  <a href="https://www.foresters.com/en-ca" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Canada 2 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.cpp.ca" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/canada-protection-plan.png" alt="Canada Protection Plan" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Canada Protection Plan</h4>
                  <p>No-medical & simplified issue life insurance for Canadians.</p>
                  <a href="https://www.cpp.ca" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Canada 3 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/ia.png" alt="iA Financial Group" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>iA Financial Group</h4>
                  <p>Comprehensive insurance and wealth management solutions.</p>
                  <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Canada 4 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.beneva.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/beneva.png" alt="Beneva" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Beneva</h4>
                  <p>Mutual insurance company dedicated to people-first solutions.</p>
                  <a href="https://www.beneva.ca/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Canada 5 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.serenialife.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/serenia-life.jpg" alt="Serenia Life" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>Serenia Life</h4>
                  <p>Life insurance that gives back to you and your community.</p>
                  <a href="https://www.serenialife.ca/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>

                {/* Canada 6 */}
                <div className="partner-card">
                  <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <a href="https://www.bmo.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                      <img src="/images/product_images/bmo.png" alt="BMO" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                    </a>
                  </div>
                  <h4>BMO</h4>
                  <p>Trusted financial services and banking solutions for Canadians.</p>
                  <a href="https://www.bmo.com/" target="_blank" rel="noopener noreferrer">Explore Solutions →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="calc-cta">
        <div className="container">
          <h2>Need Personalized Financial <span style={{ color: "#c9a84c" }}>Guidance</span>?</h2>
          <p>Our licensed advisors can create a customized plan based on your unique goals and timeline.</p>
          <a href="#"
            onClick={(e) => {
              e.preventDefault();
              if (window.Calendly) {
                window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
              }
            }}
            className="cta-btn">📅 Book a Free Consultation</a>
        </div>
      </section>
    </div>
  );
}
