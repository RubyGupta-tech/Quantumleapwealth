import "../service.css";
export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

        <section class="page-hero hero-college">

            <div class="container">

                <div class="page-hero-inner">

                    <div>

                        <div class="breadcrumb"><a href="/">Home</a><span>›</span><a
                                href="/#services">Services</a><span>›</span><span
                                style="color:var(--accent-light)">Kids College Fund</span></div>

                        <h1>Kids College Fund</h1>

                        <p>Give your child the ultimate head start. Start planning for their college education today -

                            so you can say yes when the moment arrives, without financial stress.</p>

                        <a href="/contact" class="btn btn-primary" style="margin-top:22px">Book a Free

                            Consultation</a>

                    </div>

                </div>
            </div>

        </section>



        <div class="container">

            <div class="service-layout">

                <div class="service-content">

                    <!-- Block 1: The Future -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h2>Invest in Your Child's Brightest Future</h2>
                            <p>College costs are rising every year - but with the right plan in place, you can fund your child's education without dipping into retirement savings, taking on debt, or compromising your financial goals. At Quantum Leap Wealth, we help families build college savings plans that are smart, tax-efficient, and flexible.</p>
                            <p>Whether your child is a newborn or a teenager, it's never too early - or too late - to start planning.</p>
                        </div>
                        <div class="content-img-wrap">
                            <img src="/images/college_future_light.png" alt="Children Educational Future Options" />
                        </div>
                    </div>



                    <!-- Block 2: Savings Options -->
                    <div class="content-split" style="align-items: flex-start;">
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/college_savings_plan_light.png" alt="Children's College Savings Plans Portfolio" style="aspect-ratio: 3/4;" />
                        </div>
                        <div class="content-split-text">
                            <h3>College Savings Options We Help You Navigate</h3>
                            <div class="plan-options" style="grid-template-columns: 1fr;">
                                <div class="plan-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="plan-icon" style="margin-bottom: 0;">🏫</div>
                                    <div>
                                        <h4>529 College Savings Plan</h4>
                                        <p>The most popular college savings vehicle. Tax-free growth and withdrawals when used for qualified educational expenses - and available in every state.</p>
                                    </div>
                                </div>
                                <div class="plan-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="plan-icon" style="margin-bottom: 0;">📊</div>
                                    <div>
                                        <h4>Coverdell ESA</h4>
                                        <p>Education Savings Accounts offer tax-free growth with more flexible investment options, including K-12 educational expenses.</p>
                                    </div>
                                </div>
                                <div class="plan-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="plan-icon" style="margin-bottom: 0;">💼</div>
                                    <div>
                                        <h4>UGMA / UTMA Custodial Accounts</h4>
                                        <p>Flexible investment accounts held in trust for your child. No contribution limits and broad investment options beyond education.</p>
                                    </div>
                                </div>
                                <div class="plan-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="plan-icon" style="margin-bottom: 0;">🛡️</div>
                                    <div>
                                        <h4>Life Insurance with Cash Value</h4>
                                        <p>Certain permanent life insurance policies can serve as a supplemental education funding vehicle with added protection benefits.</p>
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
                                <div class="feature-item"><div class="feature-check">✓</div><span>Tax-Free Growth &amp; Withdrawals</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Start Small - Grow Over Time</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Flexible Beneficiary Options</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>State Tax Deductions Available</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Financial Aid Impact Guidance</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Covers Tuition, Room &amp; Board, More</span></div>
                            </div>
                        </div>
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/college_benefits_light.png" alt="Graduation Diploma and Benefits" style="aspect-ratio: 3/4;" />
                        </div>
                    </div>

                    <div class="info-box">

                        <div style="font-size:1.4rem;flex-shrink:0">📊</div>

                        <p><strong>By the numbers:</strong> The average cost of a 4-year college education is projected

                            to reach <strong>\$200,000-\$300,000</strong> by 2035. A family that starts saving \$300/month

                            when their child is born can accumulate over <strong>\$120,000</strong> tax-free by age 18.

                        </p>

                    </div>

                    <div class="content-cta">

                        <div>

                            <h3>Plant the Seed Today - Watch It Grow</h3>

                            <p>Every day you wait is a compound interest day lost. Let's start building your child's

                                college fund now.</p>

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
                                Start building your child's college fund today - it's never too early.</p>
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
                                    <option value="">- Select a service -</option>
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

                                <li><a href="/images/services/tax-saving"><span>💰 Tax Savings</span><span>›</span></a></li>

                                <li><a href="/images/services/retirement-planning"><span>🏖️ Retirement

                                            Planning</span><span>›</span></a></li>

                                <li><a href="/images/services/kids-college" class="active"><span>🎓 Kids College

                                            Fund</span><span>›</span></a></li>

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



