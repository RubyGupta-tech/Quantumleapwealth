import "../service.css";
export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

        <section class="page-hero hero-retirement">

            <div class="container">

                <div class="page-hero-inner">

                    <div>

                        <div class="breadcrumb"><a href="/">Home</a><span>›</span><a
                                href="/#services">Services</a><span>›</span><span
                                style="color:var(--accent-light)">Retirement Planning</span></div>

                        <h1>Retirement Planning</h1>

                        <p>Your retirement should be your reward — not a worry. We help you build a bulletproof

                            retirement plan so you can live the life you've always envisioned, on your terms.</p>

                        <a href="/contact" class="btn btn-primary" style="margin-top:22px">Book a Free

                            Consultation</a>

                    </div>

                </div>
            </div>

        </section>



        <div class="container">

            <div class="service-layout">

                <div class="service-content">

                    <!-- Block 1: Future Comfort -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h2>Build a Future You Can Count On</h2>
                            <p>At Quantum Leap Wealth, retirement planning is not a one-size-fits-all formula. It's a deeply personal process that considers your desired lifestyle, income needs, health, family, and long-term legacy. We start building your retirement roadmap from wherever you are today — whether you're 30 years away or 3 years away from your retirement date.</p>
                            <p>Our advisors help you navigate 401(k)s, IRAs, Social Security optimization, pension integration, and income drawdown strategies to ensure your money lasts as long as you do.</p>
                        </div>
                        <div class="content-img-wrap">
                            <img src="/images/retire_future_light.png" alt="Retirement Future Wealth and Comfort" />
                        </div>
                    </div>



                    <!-- Block 2: Planning Phases -->
                    <div class="content-split" style="align-items: flex-start;">
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/retire_phases_light.png" alt="Retirement Strategy Roadmap Target" style="aspect-ratio: 3/4;" />
                        </div>
                        <div class="content-split-text">
                            <h3>Retirement Planning Phases</h3>
                            <div class="retire-phases" style="grid-template-columns: 1fr;">
                                <div class="phase-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="phase-icon" style="margin-bottom: 0;">🌱</div>
                                    <div>
                                        <h4>Accumulation Phase</h4>
                                        <p>Building your retirement nest egg through disciplined saving, smart investing, and tax-advantaged accounts during your working years.</p>
                                    </div>
                                </div>
                                <div class="phase-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="phase-icon" style="margin-bottom: 0;">⚖️</div>
                                    <div>
                                        <h4>Preservation Phase</h4>
                                        <p>As retirement nears, we shift focus to protecting what you've built, reducing risk exposure, and locking in gains.</p>
                                    </div>
                                </div>
                                <div class="phase-card" style="text-align: left; display: flex; gap: 15px; align-items: flex-start;">
                                    <div class="phase-icon" style="margin-bottom: 0;">💸</div>
                                    <div>
                                        <h4>Distribution Phase</h4>
                                        <p>A smart income drawdown plan ensures your money flows to you tax-efficiently for decades without running out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Block 3: Coverage -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h3>What We Cover</h3>
                            <div class="feature-list" style="grid-template-columns: 1fr; margin-bottom: 0;">
                                <div class="feature-item"><div class="feature-check">✓</div><span>401(k) &amp; IRA Optimization</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Social Security Timing Strategy</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Pension &amp; Annuity Integration</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Healthcare &amp; Long-Term Care Planning</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Inflation-Proof Income Strategies</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Legacy &amp; Estate Planning Integration</span></div>
                            </div>
                        </div>
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/retire_coverage_light.png" alt="Comprehensive Retirement Shield" style="aspect-ratio: 3/4;" />
                        </div>
                    </div>

                    <div class="info-box">

                        <div style="font-size:1.4rem;flex-shrink:0">💡</div>

                        <p><strong>Key insight:</strong> Retiring at 65 today means you may need your money to last

                            <strong>25–30 years</strong>. A well-structured retirement plan is the single most important

                            investment you can make. Start now — the earlier you begin, the more your money works for

                            you.
                        </p>

                    </div>

                    <div class="content-cta">

                        <div>

                            <h3>Your Dream Retirement Starts with One Conversation</h3>

                            <p>Let us map out exactly how you get from today to your ideal retirement — stress-free and

                                on schedule.</p>

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
                                Let's start building your retirement roadmap today.</p>
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

                                <li><a href="/images/services/tax-saving"><span>💰 Tax Savings</span><span>›</span></a></li>

                                <li><a href="/images/services/retirement-planning" class="active"><span>🏖️ Retirement

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



