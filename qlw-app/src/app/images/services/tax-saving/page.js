import "../service.css";
export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

        <section class="page-hero hero-tax">

            <div class="container">

                <div class="page-hero-inner">

                    <div>

                        <div class="breadcrumb"><a href="/">Home</a><span>›</span><a
                                href="/#services">Services</a><span>›</span><span
                                style="color:var(--accent-light)">Tax Savings</span></div>

                        <h1>Tax Savings</h1>

                        <p>Maximize your wealth by keeping more of what you earn. Our proactive, personalized tax

                            strategies are designed to legally minimize your tax burden year after year.</p>

                        <a href="/contact" class="btn btn-primary" style="margin-top:22px">Book a Free

                            Consultation</a>

                    </div>

                </div>
            </div>

        </section>



        <div class="container">

            <div class="service-layout">

                <div class="service-content">

                    <!-- Block 1: Wealth Introduction -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h2>Keep More of Your Hard-Earned Money</h2>
                            <p>At Quantum Leap Wealth, we believe every dollar matters. The difference between a good financial plan and a great one often comes down to tax efficiency. Our advisors work year-round — not just at tax season — to identify every legal opportunity to reduce your tax liability and accelerate your wealth-building journey.</p>
                            <p>Whether you're a salaried employee, a business owner, or an investor, we design tax strategies uniquely tailored to your income structure, goals, and life stage.</p>
                        </div>
                        <div class="content-img-wrap">
                            <img src="/images/tax_wealth_light.png" alt="Wealth Preservation and Growth" />
                        </div>
                    </div>

                    <!-- Block 2: Strategies -->
                    <div class="content-split">
                        <div class="content-img-wrap">
                            <img src="/images/tax_strategies_light.png" alt="Tax Strategy Architecture" />
                        </div>
                        <div class="content-split-text">
                            <h3>Our Tax Savings Strategies</h3>
                            <div class="tax-strategies" style="display: flex; flex-direction: column; gap: 15px;">
                                <div class="strategy-item">
                                    <div class="strategy-icon">🏦</div>
                                    <div>
                                        <h4>Tax-Advantaged Account Optimization</h4>
                                        <p>We maximize contributions to 401(k), IRA, HSA, and other tax-advantaged accounts to reduce your taxable income while simultaneously accelerating wealth growth.</p>
                                    </div>
                                </div>
                                <div class="strategy-item">
                                    <div class="strategy-icon">📉</div>
                                    <div>
                                        <h4>Tax-Loss Harvesting</h4>
                                        <p>We strategically sell underperforming investments to offset capital gains, reducing your overall tax bill while maintaining a balanced, goal-aligned portfolio.</p>
                                    </div>
                                </div>
                                <div class="strategy-item">
                                    <div class="strategy-icon">🏠</div>
                                    <div>
                                        <h4>Real Estate &amp; Deduction Planning</h4>
                                        <p>From mortgage interest to depreciation and home office deductions, we identify every property-related tax benefit available to you.</p>
                                    </div>
                                </div>
                                <div class="strategy-item">
                                    <div class="strategy-icon">💼</div>
                                    <div>
                                        <h4>Business &amp; Self-Employment Tax Planning</h4>
                                        <p>Business owners and the self-employed have unique tax advantages. We structure your business entity, expenses, and income timing to minimize self-employment tax and maximize deductions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Block 3: Key Benefits -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h3>Key Benefits</h3>
                            <div class="feature-list" style="grid-template-columns: 1fr; margin-bottom: 0;">
                                <div class="feature-item"><div class="feature-check">✓</div><span>Year-Round Proactive Tax Planning</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Maximize All Legal Deductions</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Reduce Capital Gains Tax</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Retirement Account Optimization</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Estate &amp; Inheritance Tax Planning</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Business Tax Structure Advice</span></div>
                            </div>
                        </div>
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/tax_benefits_light.png" alt="Tax Saving Benefits and Precision Compass" style="aspect-ratio: 3/4;" />
                        </div>
                    </div>

                    <div class="info-box">

                        <div style="font-size:1.4rem;flex-shrink:0">💡</div>

                        <p><strong>Did you know?</strong> The average American overpays their taxes by <strong>\$1,249

                                per year</strong> due to missed deductions and poor planning. Our clients typically save

                            2–4x the cost of our advisory fee in tax savings alone.</p>

                    </div>

                    <div class="content-cta">

                        <div>

                            <h3>Stop Overpaying — Start Saving Smarter</h3>

                            <p>Let our tax planning specialists build a year-round strategy tailored to your income and

                                goals.</p>

                        </div>

                        <a href="/contact" class="btn btn-primary"
                            style="white-space:nowrap;flex-shrink:0">Book

                            Appointment Now →</a>

                    </div>

                </div>

                <aside class="sidebar">

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>📅 Book a Free Consultation</h4>

                        </div>

                        <div class="sidebar-card-body">

                            <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;line-height:1.6">
                                Schedule your complimentary tax strategy session today.</p>
<form id="contact-form" onsubmit="handleSubmit(event)">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                                <div><label style="font-size:0.8rem; font-weight:700;">First Name *</label><input type="text" name="first_name" required placeholder="First name" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;" /></div>
                                <div><label style="font-size:0.8rem; font-weight:700;">Last Name *</label><input type="text" name="last_name" required placeholder="Last name" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;" /></div>
                            </div>
                            <div style="margin-bottom: 12px;">
                                <label style="font-size:0.8rem; font-weight:700;">Email Address *</label>
                                <input type="email" name="user_email" required placeholder="your@email.com" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;" />
                            </div>
                            <div style="margin-bottom: 12px;">
                                <label style="font-size:0.8rem; font-weight:700;">Phone Number</label>
                                <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;" />
                            </div>
                            <div style="margin-bottom: 12px;">
                                <label style="font-size:0.8rem; font-weight:700;">Service of Interest</label>
                                <select name="service" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;">
                                    <option value="">— Select a service —</option>
                                    <option>Financial Needs Analysis</option>
                                    <option>Living Will & Trust</option>
                                    <option>Tax Savings</option>
                                    <option>Retirement Planning</option>
                                    <option>Kids College Fund</option>
                                    <option>Life Insurance</option>
                                    <option>Blog Updates Subscription</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div style="margin-bottom: 16px;">
                                <label style="font-size:0.8rem; font-weight:700;">Your Message *</label>
                                <textarea name="message" required placeholder="Tell us about your goals..." style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd; margin-top:4px; min-height: 80px;"></textarea>
                            </div>
                            <button type="submit" class="form-submit" style="width: 100%; padding: 14px; background: #c9a84c; color: white; border: none; border-radius: 50px; font-weight: 700; cursor: pointer;">Secure Your Future →</button>
                        </form>
                        <div class="form-success" id="form-success" style="display: none; background: #e0faea; color: #166534; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: center; border: 1px solid #166534;">✅ Message Sent! We'll contact you shortly.</div>
</div>

                    </div>

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>Our Other Services</h4>

                        </div>

                        <div class="sidebar-card-body" style="padding:10px 22px">

                            <ul class="services-nav">

                                <li><a href="/images/services/investment-planning"><span>📈 Financial Needs Analysis</span><span>›</span></a></li>

                                <li><a href="/images/services/living-will-trust"><span>📜 Living Will &amp;

                                            Trust</span><span>›</span></a></li>

                                <li><a href="/images/services/tax-saving" class="active"><span>💰 Tax

                                            Savings</span><span>›</span></a></li>

                                <li><a href="/images/services/retirement-planning"><span>🏖️ Retirement

                                            Planning</span><span>›</span></a></li>

                                <li><a href="/images/services/kids-college"><span>🎓 Kids College Fund</span><span>›</span></a></li>

                                <li><a href="/images/services/life-insurance"><span>🛡️ Life Insurance</span><span>›</span></a></li>

                            </ul>

                        </div>

                    </div>

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>📞 Reach Us Directly</h4>

                        </div>

                        <div class="sidebar-card-body">

                            <div
                                style="display:flex;flex-direction:column;gap:12px;font-size:0.85rem;color:var(--text-muted)">

                                <div>📞 <a href="tel:+12182777773" style="color:var(--primary);font-weight:600">(+1)
                                        218-277-7773 (PIN: 41966)</a></div>

                                <div>📞 <a href="tel:+12182777773" style="color:var(--primary);font-weight:600">(+1)
                                        218-277-7773 (PIN: 41966)</a></div>

                                <div>✉ <a href="mailto:connect@quantumleapwealth.com"
                                        style="color:var(--primary);font-weight:600">connect@quantumleapwealth.com</a>

                                </div>

                                <div>📍 California, USA</div>

                            </div>

                        </div>

                    </div>

                </aside>

            </div>

        </div>

    ` }} />
  );
}



