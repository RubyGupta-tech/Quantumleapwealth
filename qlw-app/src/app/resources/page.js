"use client";
import { useState, useEffect } from "react";
import "./resources.css";

export default function Page() {
  const [activeCalc, setActiveCalc] = useState(null);

  const toggleCalc = (index) => {
    setActiveCalc(activeCalc === index ? null : index);
  };

  useEffect(() => {
    // Format currency
    window.fmt = (n) => {
      return '$' + Math.round(n).toLocaleString('en-US');
    };

    // Term Insurance Calculator
    window.calcTermInsurance = () => {
      const ageInput = document.getElementById('ti-age');
      const incomeInput = document.getElementById('ti-income');
      const age = parseInt(ageInput.value);
      const income = parseFloat(incomeInput.value);
      const term = parseInt(document.getElementById('ti-term').value);
      const mult = parseInt(document.getElementById('ti-multiplier').value);
      
      if (!age || !income) return alert('Please fill in all fields.');
      
      const coverage = income * mult;
      const baseRate = 0.15 + (age - 25) * 0.008;
      const monthlyPremium = (coverage / 1000) * baseRate;
      
      document.getElementById('ti-coverage').textContent = window.fmt(coverage);
      document.getElementById('ti-monthly').textContent = 'Estimated Monthly Premium: ' + window.fmt(monthlyPremium);
      document.getElementById('ti-result').classList.add('show');
    };

    // Retirement Calculator
    window.calcRetirement = () => {
      const age = parseInt(document.getElementById('ret-age').value);
      const retire = parseInt(document.getElementById('ret-retire').value);
      const monthly = parseFloat(document.getElementById('ret-monthly').value);
      const rate = parseFloat(document.getElementById('ret-rate').value) / 100;
      
      if (!age || !retire || !monthly) return alert('Please fill in all fields.');
      
      const years = retire - age;
      const monthlyRate = rate / 12;
      const months = years * 12;
      const fv = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      const totalInvested = monthly * months;
      
      document.getElementById('ret-total').textContent = window.fmt(fv);
      document.getElementById('ret-invested').textContent = 'Total Invested: ' + window.fmt(totalInvested) + '  |  Growth: ' + window.fmt(fv - totalInvested);
      document.getElementById('ret-result').classList.add('show');
    };

    // College Fund Calculator
    window.calcCollege = () => {
      const childAge = parseInt(document.getElementById('col-age').value);
      const startAge = parseInt(document.getElementById('col-start').value);
      const annualCost = parseFloat(document.getElementById('col-cost').value);
      const years = parseInt(document.getElementById('col-years').value);
      
      if (isNaN(childAge) || !annualCost) return alert('Please fill in all fields.');
      
      const yearsToSave = startAge - childAge;
      const inflation = 0.04; 
      const futureCost = annualCost * Math.pow(1 + inflation, yearsToSave);
      const totalNeeded = futureCost * years;
      const rate = 0.06 / 12; 
      const months = yearsToSave * 12;
      const monthlySave = totalNeeded * rate / (Math.pow(1 + rate, months) - 1);
      
      document.getElementById('col-total').textContent = window.fmt(totalNeeded);
      document.getElementById('col-monthly-save').textContent = 'Monthly Savings Needed: ' + window.fmt(monthlySave);
      document.getElementById('col-result').classList.add('show');
    };

    // Investment Growth Calculator
    window.calcInvestment = () => {
      const initial = parseFloat(document.getElementById('inv-initial').value) || 0;
      const monthly = parseFloat(document.getElementById('inv-monthly').value) || 0;
      const years = parseInt(document.getElementById('inv-years').value);
      const rate = parseFloat(document.getElementById('inv-rate').value) / 100;
      
      if (!years) return alert('Please fill in all fields.');
      
      const monthlyRate = rate / 12;
      const months = years * 12;
      const fvInitial = initial * Math.pow(1 + monthlyRate, months);
      const fvMonthly = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      const total = fvInitial + fvMonthly;
      const totalInvested = initial + (monthly * months);
      
      document.getElementById('inv-total').textContent = window.fmt(total);
      document.getElementById('inv-gain').textContent = 'Total Invested: ' + window.fmt(totalInvested) + '  |  Gain: ' + window.fmt(total - totalInvested);
      document.getElementById('inv-result').classList.add('show');
    };

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
          <h1>Financial <span style={{ color: "#c9a84c" }}>Resources</span></h1>
          <p>Explore our free financial tools and connect with our strategic partners.</p>
        </div>
      </section>

      {/* ── RESOURCES CONTENT ── */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-layout">

            {/* LEFT COLUMN: Calculators */}
            <div className="resources-left">
              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--primary)" }}>
                  Financial Resource <span style={{ color: "#c9a84c" }}>Center</span>
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "6px" }}>
                  Calculate your retirement, insurance, and investment needs.
                </p>
              </div>
              <div className="calc-list">

                {/* Abacus Wizard Login Card */}
                <div className="calc-card" style={{ border: "1.5px solid #c9a84c", marginBottom: "8px" }}>
                  <div className="calc-card-header-static" style={{ padding: "12px 20px", background: "linear-gradient(135deg, #0a2540, #1a4a7a)", color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: "1.02rem", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="calc-header-left">
                      <span className="icon" style={{ fontSize: "1.3rem", marginRight: "10px" }}>🔮</span> FNA (Financial Need Analysis)
                    </div>
                  </div>
                  <div className="calc-card-body-static">
                    <p style={{ fontSize: "0.82rem", color: "#6b7c8d", marginBottom: "12px", lineHeight: "1.45" }}>
                      Access your custom financial planning dashboard, run advanced scenarios, and manage your wealth forecasts.
                    </p>
                    <a href="https://abacuswizard.com/login" target="_blank" rel="noopener" className="calc-btn" style={{ textDecoration: "none", textAlign: "center", display: "inline-block", width: "auto", padding: "10px 20px", fontSize: "0.8rem", borderRadius: "6px" }}>
                      Access FNA
                    </a>
                  </div>
                </div>

                {/* Term Insurance Calculator */}
                <div className={`calc-card ${activeCalc === 0 ? 'active' : ''}`}>
                  <div className="calc-card-header" onClick={() => toggleCalc(0)}>
                    <div className="calc-header-left">
                      <span className="icon">🛡️</span> Term Insurance Calculator
                    </div>
                    <span className="chevron">▼</span>
                  </div>
                  <div className="calc-card-body">
                    <div className="calc-field">
                      <label>Your Current Age</label>
                      <input type="number" id="ti-age" placeholder="e.g. 30" min="18" max="70" />
                    </div>
                    <div className="calc-field">
                      <label>Annual Income ($)</label>
                      <input type="number" id="ti-income" placeholder="e.g. 75000" />
                    </div>
                    <div className="calc-field">
                      <label>Coverage Term (Years)</label>
                      <select id="ti-term">
                        <option value="10">10 Years</option>
                        <option value="15">15 Years</option>
                        <option value="20" defaultValue>20 Years</option>
                        <option value="25">25 Years</option>
                        <option value="30">30 Years</option>
                      </select>
                    </div>
                    <div className="calc-field">
                      <label>Coverage Multiplier</label>
                      <select id="ti-multiplier">
                        <option value="8">8x Income</option>
                        <option value="10" defaultValue>10x Income</option>
                        <option value="12">12x Income</option>
                        <option value="15">15x Income</option>
                      </select>
                    </div>
                    <button className="calc-btn" onClick={() => window.calcTermInsurance()}>Calculate Coverage</button>
                    <div className="calc-result" id="ti-result">
                      <div className="calc-result-label">Recommended Coverage</div>
                      <div className="calc-result-value" id="ti-coverage">$0</div>
                      <div className="calc-result-sub" id="ti-monthly">Estimated Monthly Premium: $0</div>
                    </div>
                  </div>
                </div>

                {/* Retirement Calculator */}
                <div className={`calc-card ${activeCalc === 1 ? 'active' : ''}`}>
                  <div className="calc-card-header" onClick={() => toggleCalc(1)}>
                    <div className="calc-header-left">
                      <span className="icon">🏖️</span> Retirement Savings Calculator
                    </div>
                    <span className="chevron">▼</span>
                  </div>
                  <div className="calc-card-body">
                    <div className="calc-field">
                      <label>Current Age</label>
                      <input type="number" id="ret-age" placeholder="e.g. 30" min="18" max="70" />
                    </div>
                    <div className="calc-field">
                      <label>Desired Retirement Age</label>
                      <input type="number" id="ret-retire" placeholder="e.g. 65" min="50" max="80" />
                    </div>
                    <div className="calc-field">
                      <label>Monthly Savings ($)</label>
                      <input type="number" id="ret-monthly" placeholder="e.g. 500" />
                    </div>
                    <div className="calc-field">
                      <label>Expected Annual Return (%)</label>
                      <select id="ret-rate">
                        <option value="5">5% (Conservative)</option>
                        <option value="7" defaultValue>7% (Moderate)</option>
                        <option value="9">9% (Aggressive)</option>
                        <option value="11">11% (High Growth)</option>
                      </select>
                    </div>
                    <button className="calc-btn" onClick={() => window.calcRetirement()}>Calculate Savings</button>
                    <div className="calc-result" id="ret-result">
                      <div className="calc-result-label">Estimated Retirement Fund</div>
                      <div className="calc-result-value" id="ret-total">$0</div>
                      <div className="calc-result-sub" id="ret-invested">Total Invested: $0</div>
                    </div>
                  </div>
                </div>

                {/* College Fund Calculator */}
                <div className={`calc-card ${activeCalc === 2 ? 'active' : ''}`}>
                  <div className="calc-card-header" onClick={() => toggleCalc(2)}>
                    <div className="calc-header-left">
                      <span className="icon">🎓</span> College Fund Calculator
                    </div>
                    <span className="chevron">▼</span>
                  </div>
                  <div className="calc-card-body">
                    <div className="calc-field">
                      <label>Child&apos;s Current Age</label>
                      <input type="number" id="col-age" placeholder="e.g. 5" min="0" max="17" />
                    </div>
                    <div className="calc-field">
                      <label>College Start Age</label>
                      <input type="number" id="col-start" placeholder="e.g. 18" min="16" max="22" defaultValue="18" />
                    </div>
                    <div className="calc-field">
                      <label>Estimated Annual College Cost ($)</label>
                      <input type="number" id="col-cost" placeholder="e.g. 30000" defaultValue="30000" />
                    </div>
                    <div className="calc-field">
                      <label>Years of College</label>
                      <select id="col-years">
                        <option value="2">2 Years</option>
                        <option value="4" defaultValue>4 Years</option>
                        <option value="5">5 Years</option>
                        <option value="6">6 Years (Graduate)</option>
                      </select>
                    </div>
                    <button className="calc-btn" onClick={() => window.calcCollege()}>Calculate Fund Needed</button>
                    <div className="calc-result" id="col-result">
                      <div className="calc-result-label">Total Fund Needed</div>
                      <div className="calc-result-value" id="col-total">$0</div>
                      <div className="calc-result-sub" id="col-monthly-save">Monthly Savings Needed: $0</div>
                    </div>
                  </div>
                </div>

                {/* Investment Growth Calculator */}
                <div className={`calc-card ${activeCalc === 3 ? 'active' : ''}`}>
                  <div className="calc-card-header" onClick={() => toggleCalc(3)}>
                    <div className="calc-header-left">
                      <span className="icon">📈</span> Investment Growth Calculator
                    </div>
                    <span className="chevron">▼</span>
                  </div>
                  <div className="calc-card-body">
                    <div className="calc-field">
                      <label>Initial Investment ($)</label>
                      <input type="number" id="inv-initial" placeholder="e.g. 10000" />
                    </div>
                    <div className="calc-field">
                      <label>Monthly Contribution ($)</label>
                      <input type="number" id="inv-monthly" placeholder="e.g. 200" />
                    </div>
                    <div className="calc-field">
                      <label>Investment Period (Years)</label>
                      <input type="number" id="inv-years" placeholder="e.g. 20" min="1" max="50" />
                    </div>
                    <div className="calc-field">
                      <label>Expected Annual Return (%)</label>
                      <select id="inv-rate">
                        <option value="4">4% (Bonds)</option>
                        <option value="7" defaultValue>7% (Balanced)</option>
                        <option value="10">10% (Growth Stocks)</option>
                        <option value="12">12% (Aggressive)</option>
                      </select>
                    </div>
                    <button className="calc-btn" onClick={() => window.calcInvestment()}>Calculate Growth</button>
                    <div className="calc-result" id="inv-result">
                      <div className="calc-result-label">Future Value</div>
                      <div className="calc-result-value" id="inv-total">$0</div>
                      <div className="calc-result-sub" id="inv-gain">Total Gain: $0</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="calc-disclaimer" style={{ marginTop: "24px", textAlign: "left" }}>
                <strong>Disclaimer:</strong> These calculators provide estimates for educational purposes only and should not be considered financial advice. Actual returns may vary. Consult with a licensed financial advisor at Quantum Leap Wealth for personalized planning.
              </div>
            </div>

            {/* RIGHT COLUMN: Partners */}
            <div className="resources-right">
              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--primary)" }}>
                  Strategic <span style={{ color: "#c9a84c" }}>Partners</span>
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "6px" }}>
                  We collaborate with industry-leading financial institutions to bring you best-in-class products and solutions.
                </p>
              </div>

              <div className="partners-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "20px" }}>

                {/* Partner 1 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/American_product.png" alt="American Equity/National" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>American</h4>
                  <p>Access top-tier annuities and life insurance products to secure your retirement income.</p>
                  <a href="https://www.american-equity.com/" target="_blank" rel="noopener">Learn More →</a>
                </div>

                {/* Partner 2 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/annexus_product.png" alt="Annexus" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>Annexus</h4>
                  <p>Explore innovative retirement solutions designed to protect and aggressively grow your wealth.</p>
                  <a href="https://www.annexus.com/" target="_blank" rel="noopener">Learn More →</a>
                </div>

                {/* Partner 3 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/corebridge_product.png" alt="Corebridge Financial" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>Corebridge</h4>
                  <p>Benefit from retirement and insurance solutions tailored for long-term stability.</p>
                  <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener">Learn More →</a>
                </div>

                {/* Partner 4 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/Fidelity_product.png" alt="Fidelity Investments" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>Fidelity</h4>
                  <p>Manage your investments with world-class brokerage and holistic wealth management.</p>
                  <a href="https://www.fidelity.com/" target="_blank" rel="noopener">Learn More →</a>
                </div>

                {/* Partner 5 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>Nationwide</h4>
                  <p>Protect your family and assets with industry-leading insurance and diverse planning products.</p>
                  <a href="https://www.nationwidenewheights.com/" target="_blank" rel="noopener">Learn More →</a>
                </div>

                {/* Partner 6 */}
                <div className="partner-card">
                  <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <img src="/images/product_images/northamerican_product.png" alt="North American" style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain" }} />
                  </div>
                  <h4>North American</h4>
                  <p>Secure your legacy with reliable life insurance and annuity products from a trusted provider.</p>
                  <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener">Learn More →</a>
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
              window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
            }}
            className="cta-btn">📅 Book a Free Consultation</a>
        </div>
      </section>
    </div>
  );
}
