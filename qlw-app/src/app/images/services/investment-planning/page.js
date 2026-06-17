import "../service.css";
export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `



        <!-- ── PAGE HERO ── -->

        <section class="page-hero hero-investment">

            <div class="container">

                <div class="page-hero-inner">

                    <div>

                        <div class="breadcrumb">

                            <a href="/">Home</a>

                            <span>›</span>

                            <a href="/#services">Services</a>

                            <span>›</span>

                            <span style="color:var(--accent-light)">Financial Needs Analysis</span>

                        </div>

                        <h1>Financial Needs Analysis</h1>

                        <p>We empower individuals and families with strategic investment solutions designed to maximize

                            growth, minimize risk, and secure long-term financial independence.</p>

                        <a href="/contact" class="btn btn-primary" style="margin-top:22px">Book a Free

                            Consultation</a>

                    </div>

                </div>
            </div>

        </section>



        <!-- ── MAIN CONTENT + SIDEBAR ── -->

        <div class="container">

            <div class="service-layout">



                <!-- LEFT: Main Content -->
                <div class="service-content">

                    <!-- Block 1: Wealth Growth -->
                    <div class="content-split">
                        <div class="content-split-text">
                            <h2>Smart Financial Needs Analysis for a Prosperous Future</h2>
                            <p>At Quantum Leap Wealth, we believe that investing is not just about picking the right stocks - it's about building a comprehensive, personalized strategy that aligns every dollar you invest with your life goals. Whether you're just starting out or looking to optimize an existing portfolio, our expert advisors are here to guide you every step of the way.</p>
                            <p>From securing your retirement to funding your children's education, we design investment plans that grow with you, adapt to market changes, and always keep your long-term vision at the center of every decision.</p>
                        </div>
                        <div class="content-img-wrap">
                            <img src="/images/invest_growth_light.png" alt="Wealth Growth Chart" />
                        </div>
                    </div>

                    <!-- Block 2: Strategic Goal Planning -->
                    <div class="content-split">
                        <div class="content-img-wrap">
                            <img src="/images/invest_strategy_light.png" alt="Strategic Investment Chess Piece" />
                        </div>
                        <div class="content-split-text">
                            <h3>Why Choose Financial Needs Analysis?</h3>
                            <p>Investment planning goes beyond simply selecting assets. It creates a structured path to financial independence by aligning each investment with your short- and long-term objectives - protecting what you've built while growing what you need for the future.</p>

                            <div class="feature-list" style="grid-template-columns: 1fr; margin-bottom: 0;">
                                <div class="feature-item"><div class="feature-check">✓</div><span>Personalized Goal Setting</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Comprehensive Risk Assessment</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Tailored Portfolio Creation</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Tax-Efficient Investment Strategies</span></div>
                                <div class="feature-item"><div class="feature-check">✓</div><span>Retirement &amp; Legacy Integration</span></div>
                            </div>
                        </div>
                    </div>



                    <!-- Block 3: The Process Roadmap -->
                    <div class="content-split" style="align-items: flex-start;">
                        <div class="content-split-text">
                            <h3>Our Financial Needs Analysis Process</h3>
                            <p>We follow a proven, structured approach to help you build wealth confidently and consistently - no guesswork, no cookie-cutter solutions.</p>

                            <div class="process-inline">
                                <div class="process-inline-step">
                                    <div class="pstep-num">01</div>
                                    <div class="pstep-body">
                                        <h4>Schedule Your Free Consultation</h4>
                                        <p>We start with a no-obligation conversation to understand your current financial situation, income, expenses, existing assets, and your big-picture goals.</p>
                                    </div>
                                </div>
                                <div class="process-inline-step">
                                    <div class="pstep-num">02</div>
                                    <div class="pstep-body">
                                        <h4>One-on-One Deep Dive</h4>
                                        <p>Our advisor sits with you in a focused session to map out a complete picture of your financial life - risk tolerance, time horizon, tax situation, and growth expectations.</p>
                                    </div>
                                </div>
                                <div class="process-inline-step">
                                    <div class="pstep-num">03</div>
                                    <div class="pstep-body">
                                        <h4>Choose Your Best Plan</h4>
                                        <p>We present a customized investment strategy - a diversified, tax-efficient portfolio plan designed specifically for your goals, timeline, and risk profile.</p>
                                    </div>
                                </div>
                                <div class="process-inline-step" style="padding-bottom: 0px;">
                                    <div class="pstep-num">04</div>
                                    <div class="pstep-body">
                                        <h4>Ongoing Monitoring &amp; Rebalancing</h4>
                                        <p>Markets change, life changes. We continuously monitor your portfolio, rebalance when needed, and adjust your strategy as your circumstances evolve.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-img-wrap" style="position: sticky; top: 120px;">
                            <img src="/images/invest_process_light.png" alt="Investment Process Roadmap" style="aspect-ratio: 3/4;" />
                        </div>
                    </div>



                    <div class="info-box" style="margin-bottom:32px;">

                        <div class="info-box-icon">💡</div>

                        <p><strong>Did you know?</strong> Investors who work with a certified financial advisor

                            accumulate an average of <strong>3.9x more wealth</strong> over 15 years compared to those

                            who invest without professional guidance. Start today - every month counts.</p>

                    </div>



                    <div class="content-cta">

                        <div>

                            <h3>Take the First Step Toward Financial Independence</h3>

                            <p>Partner with Quantum Leap Wealth to turn your financial goals into reality.
                                Connect with

                                us today.</p>

                        </div>

                        <a href="/contact" class="btn btn-primary"
                            style="white-space:nowrap;flex-shrink:0;">Book

                            Appointment Now →</a>

                    </div>



                </div><!-- /service-content -->



                <!-- RIGHT: Sidebar -->

                <aside class="sidebar">



                    <!-- Quick Contact Form -->

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>📅 Book a Free Consultation</h4>

                        </div>

                        <div class="sidebar-card-body">

                            <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;line-height:1.6;">
                            <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:16px;line-height:1.6;">
                                Schedule a complimentary session to align your financial plans with your life goals.</p>
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



                    <!-- Our Services Nav -->

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>Our Other Services</h4>

                        </div>

                        <div class="sidebar-card-body" style="padding:10px 22px;">

                            <ul class="services-nav">

                                <li><a href="/images/services/investment-planning" class="active"><span>📈 Financial Needs Analysis</span><span class="nav-icon">›</span></a></li>

                                <li><a href="/images/services/living-will-trust"><span>📜 Living Will &amp; Trust</span><span
                                            class="nav-icon">›</span></a></li>

                                <li><a href="/images/services/tax-saving"><span>💰 Tax Savings</span><span
                                            class="nav-icon">›</span></a></li>

                                <li><a href="/images/services/retirement-planning"><span>🏖️ Retirement Planning</span><span
                                            class="nav-icon">›</span></a></li>

                                <li><a href="/images/services/kids-college"><span>🎓 Kids College Fund</span><span
                                            class="nav-icon">›</span></a></li>

                                <li><a href="/images/services/life-insurance"><span>🛡️ Life Insurance</span><span
                                            class="nav-icon">›</span></a></li>

                            </ul>

                        </div>

                    </div>



                    <!-- Contact Info Card -->

                    <div class="sidebar-card">

                        <div class="sidebar-card-header">

                            <h4>📞 Reach Us Directly</h4>

                        </div>

                        <div class="sidebar-card-body">

                            <div
                                style="display:flex;flex-direction:column;gap:12px;font-size:0.85rem;color:var(--text-muted);">

                                <div>📞 <a href="tel:+12182777773" style="color:var(--primary);font-weight:600;">(+1)
                                        218-277-7773 (PIN: 41966)</a></div>

                                <div>✉ <a href="mailto:connect@quantumleapwealth.com"
                                        style="color:var(--primary);font-weight:600;">connect@quantumleapwealth.com</a>

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



