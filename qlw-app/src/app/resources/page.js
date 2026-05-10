import "./resources.css";

export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

    <!-- ── HERO ── -->
    <section class="page-hero">
        <div>
            <h1>Financial <span style="color:#c9a84c;">Resources</span></h1>
            <p>Explore our free financial tools and connect with our strategic partners.</p>
        </div>
    </section>

    <!-- ── RESOURCES CONTENT ── -->
    <section class="resources-section">
        <div class="container">
            <div class="resources-layout">

                <!-- LEFT COLUMN: Calculators -->
                <div class="resources-left">
                    <div style="margin-bottom: 24px;">
                        <h2
                            style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--primary, #0a2540);">
                            Financial Resource <span style="color: #c9a84c;">Center</span></h2>
                        <p style="color: var(--text-muted, #6b7c8d); font-size: 0.9rem; margin-top: 6px;">Calculate your
                            retirement, insurance, and investment needs.</p>
                    </div>
                    <div class="calc-list">

                        <!-- Term Insurance Calculator -->
                        <div class="calc-card">
                            <div class="calc-card-header">
                                <div class="calc-header-left">
                                    <span class="icon">🛡️</span> Term Insurance Calculator
                                </div>
                                <span class="chevron">▼</span>
                            </div>
                            <div class="calc-card-body">
                                <div class="calc-field">
                                    <label>Your Current Age</label>
                                    <input type="number" id="ti-age" placeholder="e.g. 30" min="18" max="70">
                                </div>
                                <div class="calc-field">
                                    <label>Annual Income (\$)</label>
                                    <input type="number" id="ti-income" placeholder="e.g. 75000">
                                </div>
                                <div class="calc-field">
                                    <label>Coverage Term (Years)</label>
                                    <select id="ti-term">
                                        <option value="10">10 Years</option>
                                        <option value="15">15 Years</option>
                                        <option value="20" selected>20 Years</option>
                                        <option value="25">25 Years</option>
                                        <option value="30">30 Years</option>
                                    </select>
                                </div>
                                <div class="calc-field">
                                    <label>Coverage Multiplier</label>
                                    <select id="ti-multiplier">
                                        <option value="8">8x Income</option>
                                        <option value="10" selected>10x Income</option>
                                        <option value="12">12x Income</option>
                                        <option value="15">15x Income</option>
                                    </select>
                                </div>
                                <button class="calc-btn" onclick="calcTermInsurance()">Calculate Coverage</button>
                                <div class="calc-result" id="ti-result">
                                    <div class="calc-result-label">Recommended Coverage</div>
                                    <div class="calc-result-value" id="ti-coverage">\$0</div>
                                    <div class="calc-result-sub" id="ti-monthly">Estimated Monthly Premium: \$0</div>
                                </div>
                            </div>
                        </div>

                        <!-- Retirement Calculator -->
                        <div class="calc-card">
                            <div class="calc-card-header">
                                <div class="calc-header-left">
                                    <span class="icon">🏖️</span> Retirement Savings Calculator
                                </div>
                                <span class="chevron">▼</span>
                            </div>
                            <div class="calc-card-body">
                                <div class="calc-field">
                                    <label>Current Age</label>
                                    <input type="number" id="ret-age" placeholder="e.g. 30" min="18" max="70">
                                </div>
                                <div class="calc-field">
                                    <label>Desired Retirement Age</label>
                                    <input type="number" id="ret-retire" placeholder="e.g. 65" min="50" max="80">
                                </div>
                                <div class="calc-field">
                                    <label>Monthly Savings (\$)</label>
                                    <input type="number" id="ret-monthly" placeholder="e.g. 500">
                                </div>
                                <div class="calc-field">
                                    <label>Expected Annual Return (%)</label>
                                    <select id="ret-rate">
                                        <option value="5">5% (Conservative)</option>
                                        <option value="7" selected>7% (Moderate)</option>
                                        <option value="9">9% (Aggressive)</option>
                                        <option value="11">11% (High Growth)</option>
                                    </select>
                                </div>
                                <button class="calc-btn" onclick="calcRetirement()">Calculate Savings</button>
                                <div class="calc-result" id="ret-result">
                                    <div class="calc-result-label">Estimated Retirement Fund</div>
                                    <div class="calc-result-value" id="ret-total">\$0</div>
                                    <div class="calc-result-sub" id="ret-invested">Total Invested: \$0</div>
                                </div>
                            </div>
                        </div>

                        <!-- College Fund Calculator -->
                        <div class="calc-card">
                            <div class="calc-card-header">
                                <div class="calc-header-left">
                                    <span class="icon">🎓</span> College Fund Calculator
                                </div>
                                <span class="chevron">▼</span>
                            </div>
                            <div class="calc-card-body">
                                <div class="calc-field">
                                    <label>Child's Current Age</label>
                                    <input type="number" id="col-age" placeholder="e.g. 5" min="0" max="17">
                                </div>
                                <div class="calc-field">
                                    <label>College Start Age</label>
                                    <input type="number" id="col-start" placeholder="e.g. 18" min="16" max="22"
                                        value="18">
                                </div>
                                <div class="calc-field">
                                    <label>Estimated Annual College Cost (\$)</label>
                                    <input type="number" id="col-cost" placeholder="e.g. 30000" value="30000">
                                </div>
                                <div class="calc-field">
                                    <label>Years of College</label>
                                    <select id="col-years">
                                        <option value="2">2 Years</option>
                                        <option value="4" selected>4 Years</option>
                                        <option value="5">5 Years</option>
                                        <option value="6">6 Years (Graduate)</option>
                                    </select>
                                </div>
                                <button class="calc-btn" onclick="calcCollege()">Calculate Fund Needed</button>
                                <div class="calc-result" id="col-result">
                                    <div class="calc-result-label">Total Fund Needed</div>
                                    <div class="calc-result-value" id="col-total">\$0</div>
                                    <div class="calc-result-sub" id="col-monthly-save">Monthly Savings Needed: \$0</div>
                                </div>
                            </div>
                        </div>

                        <!-- Investment Growth Calculator -->
                        <div class="calc-card">
                            <div class="calc-card-header">
                                <div class="calc-header-left">
                                    <span class="icon">📈</span> Investment Growth Calculator
                                </div>
                                <span class="chevron">▼</span>
                            </div>
                            <div class="calc-card-body">
                                <div class="calc-field">
                                    <label>Initial Investment (\$)</label>
                                    <input type="number" id="inv-initial" placeholder="e.g. 10000">
                                </div>
                                <div class="calc-field">
                                    <label>Monthly Contribution (\$)</label>
                                    <input type="number" id="inv-monthly" placeholder="e.g. 200">
                                </div>
                                <div class="calc-field">
                                    <label>Investment Period (Years)</label>
                                    <input type="number" id="inv-years" placeholder="e.g. 20" min="1" max="50">
                                </div>
                                <div class="calc-field">
                                    <label>Expected Annual Return (%)</label>
                                    <select id="inv-rate">
                                        <option value="4">4% (Bonds)</option>
                                        <option value="7" selected>7% (Balanced)</option>
                                        <option value="10">10% (Growth Stocks)</option>
                                        <option value="12">12% (Aggressive)</option>
                                    </select>
                                </div>
                                <button class="calc-btn" onclick="calcInvestment()">Calculate Growth</button>
                                <div class="calc-result" id="inv-result">
                                    <div class="calc-result-label">Future Value</div>
                                    <div class="calc-result-value" id="inv-total">\$0</div>
                                    <div class="calc-result-sub" id="inv-gain">Total Gain: \$0</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="calc-disclaimer" style="margin-top: 24px; text-align: left;">
                        <strong>Disclaimer:</strong> These calculators provide estimates for educational purposes only
                        and
                        should not be
                        considered financial advice. Actual returns may vary. Consult with a licensed financial advisor
                        at
                        Quantum Leap Wealth
                        for personalized planning.
                    </div>
                </div>

                <!-- RIGHT COLUMN: Partners -->
                <div class="resources-right">
                    <div style="margin-bottom: 24px;">
                        <h2
                            style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--primary, #0a2540);">
                            Strategic <span style="color: #c9a84c;">Partners</span></h2>
                        <p style="color: var(--text-muted, #6b7c8d); font-size: 0.9rem; margin-top: 6px;">We collaborate
                            with
                            industry-leading financial institutions to bring you best-in-class products and solutions.
                        </p>
                    </div>

                    <div class="partners-grid"
                        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 20px;">

                        <!-- Partner 1 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/American_product.png" alt="American Equity/National"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>American</h4>
                            <p>Access top-tier annuities and life insurance products to secure your retirement income.</p>
                            <a href="https://www.american-equity.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>

                        <!-- Partner 2 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/annexus_product.png" alt="Annexus"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>Annexus</h4>
                            <p>Explore innovative retirement solutions designed to protect and aggressively grow your wealth.</p>
                            <a href="https://www.annexus.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>

                        <!-- Partner 3 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/corebridge_product.png" alt="Corebridge Financial"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>Corebridge</h4>
                            <p>Benefit from retirement and insurance solutions tailored for long-term stability.</p>
                            <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>

                        <!-- Partner 4 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/Fidelity_product.png" alt="Fidelity Investments"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>Fidelity</h4>
                            <p>Manage your investments with world-class brokerage and holistic wealth management.</p>
                            <a href="https://www.fidelity.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>

                        <!-- Partner 5 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>Nationwide</h4>
                            <p>Protect your family and assets with industry-leading insurance and diverse planning products.</p>
                            <a href="https://www.nationwide.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>

                        <!-- Partner 6 -->
                        <div class="partner-card">
                            <div
                                style="height: 45px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                                <img src="/images/product_images/northamerican_product.png" alt="North American"
                                    style="max-height: 100%; max-width: 80%; object-fit: contain;">
                            </div>
                            <h4>North American</h4>
                            <p>Secure your legacy with reliable life insurance and annuity products from a trusted provider.</p>
                            <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener">Learn More →</a>
                        </div>
                        </div>

                    </div>
                </div> <!-- end resources-right -->

            </div> <!-- end resources-layout -->
        </div> <!-- end container -->
    </section>

    <!-- ── CTA ── -->
    <section class="calc-cta">
        <h2>Need Personalized Financial <span style="color:#c9a84c;">Guidance</span>?</h2>
        <p>Our licensed advisors can create a customized plan based on your unique goals and timeline.</p>
        <a href="#"
            onclick="Calendly.initPopupWidget({url:'https://calendly.com/webserviesbygupta/30min'});return false;"
            class="cta-btn">📅 Book a Free Consultation</a>
    </section>

    <!-- ── FOOTER ── -->
    <script>
        // Accordion Toggle for Calculators
        document.querySelectorAll('.calc-card-header').forEach(header => {
            header.addEventListener('click', () => {
                const card = header.parentElement;
                // Toggle clicked card
                card.classList.toggle('active');
            });
        });

        // Format currency
        function fmt(n) {
            return '$' + Math.round(n).toLocaleString('en-US');
        }

        // Term Insurance Calculator
        function calcTermInsurance() {
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
            
            document.getElementById('ti-coverage').textContent = fmt(coverage);
            document.getElementById('ti-monthly').textContent = 'Estimated Monthly Premium: ' + fmt(monthlyPremium);
            document.getElementById('ti-result').classList.add('show');
        }

        // Retirement Calculator
        function calcRetirement() {
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
            
            document.getElementById('ret-total').textContent = fmt(fv);
            document.getElementById('ret-invested').textContent = 'Total Invested: ' + fmt(totalInvested) + '  |  Growth: ' + fmt(fv - totalInvested);
            document.getElementById('ret-result').classList.add('show');
        }

        // College Fund Calculator
        function calcCollege() {
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
            
            document.getElementById('col-total').textContent = fmt(totalNeeded);
            document.getElementById('col-monthly-save').textContent = 'Monthly Savings Needed: ' + fmt(monthlySave);
            document.getElementById('col-result').classList.add('show');
        }

        // Investment Growth Calculator
        function calcInvestment() {
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
            
            document.getElementById('inv-total').textContent = fmt(total);
            document.getElementById('inv-gain').textContent = 'Total Invested: ' + fmt(totalInvested) + '  |  Gain: ' + fmt(total - totalInvested);
            document.getElementById('inv-result').classList.add('show');
        }
    </script>
    ` }} />
  );
}
