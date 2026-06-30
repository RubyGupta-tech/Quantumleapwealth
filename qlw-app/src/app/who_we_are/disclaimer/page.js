import "./disclaimer.css";

export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `



        <!-- HERO -->

        <section class="page-hero">

            <div class="container">

                <div class="page-hero-inner">

                    <div class="breadcrumb"><a href="/">Home</a><span>›</span><span
                            style="color:var(--text-muted)">Who We Are</span><span>›</span><span
                            style="color:var(--primary)">Our Disclaimer</span></div>

                    <div class="page-hero-badge">📋 Legal</div>

                    <h1>Our <span class="highlight">Disclaimer</span></h1>

                    <p class="page-hero-sub">Please read this disclaimer carefully before using our services or relying

                        on any information provided by Quantum Leap Wealth.</p>

                </div>

            </div>

        </section>



        <!-- DISCLAIMER CONTENT -->

        <section class="disclaimer-section">

            <div class="container">

                <div class="disclaimer-layout">



                    <!-- Main Content -->

                    <div class="disclaimer-content">



                        <!-- Alert box -->

                        <div class="disclaimer-alert">

                            <p><strong>Important Notice:</strong> Quantum Leap Wealth is a marketing company
                                offering a

                                vast array of products and services through a network of independent affiliates. We

                                facilitate connections between affiliates and consumers, but we do not directly provide

                                insurance products, legal advice, or tax advice.</p>

                        </div>



                        <div class="disclaimer-block" id="informational">

                            <h2><span class="block-icon">ℹ️</span>Informational Purposes Only</h2>

                            <p>The information provided on our website, platforms, and communications is for

                                informational purposes only and should not be construed as insurance, legal, or tax

                                advice.</p>

                            <p>We encourage all consumers to consult with qualified professionals for advice tailored to

                                their specific needs and individual circumstances before making any financial decisions.

                            </p>

                        </div>



                        <div class="disclaimer-block" id="affiliates">

                            <h2><span class="block-icon">🤝</span>Affiliate Products &amp; Services</h2>

                            <p>Quantum Leap Wealth does not endorse or guarantee the products or services
                                offered by our

                                affiliates. Consumers are encouraged to conduct their own due diligence and thorough

                                research before making any purchasing decisions.</p>

                            <p>While we carefully vet our affiliate partners, we cannot guarantee the quality, accuracy,

                                or completeness of information provided by third-party affiliates.</p>

                        </div>



                        <div class="disclaimer-block" id="liability">

                            <h2><span class="block-icon">⚖️</span>Limitation of Liability</h2>

                            <p>Quantum Leap Wealth is not liable for any loss or damage arising from the use
                                of products

                                or services provided by our affiliates. Any transactions conducted with affiliates are

                                solely between the consumer and the affiliate.</p>

                            <p>Quantum Leap Wealth is not responsible for any disputes, issues, or damages
                                that may arise

                                from affiliate transactions or relationships. All financial decisions made based on

                                information from our website are made at the consumer's own risk.</p>

                        </div>



                        <div class="disclaimer-block" id="modifications">

                            <h2><span class="block-icon">🔄</span>Right to Modify</h2>

                            <p>We reserve the right to modify, suspend, or discontinue any aspect of our affiliate

                                marketing program at any time without prior notice.</p>

                            <p>Additionally, we reserve the right to update or change this disclaimer at any time.

                                Continued use of our website and services following any such changes constitutes your

                                acceptance of the revised disclaimer.</p>

                        </div>



                        <div class="disclaimer-block" id="terms">

                            <h2><span class="block-icon">📄</span>Terms &amp; Conditions Review</h2>

                            <p>Consumers should carefully review the terms and conditions of any products or services

                                offered by Quantum Leap Wealth affiliates before making a purchase or
                                entering into any

                                agreement.</p>

                            <p>If you have any questions about the terms, products, or services offered by our

                                affiliates, please contact us directly before proceeding.</p>

                        </div>



                        <div class="disclaimer-block" id="free-consultation">

                            <h2><span class="block-icon">🎯</span>Free Consultation Available</h2>

                            <p>We offer FREE consultation and provide personalized financial solutions to help you make

                                smart financial decisions around Investments, Insurance, Estate Planning, College

                                Planning, Retirement Planning, and more.</p>

                            <p>Our Licensed Financial Professionals are available 24/7 to answer your questions. We

                                believe every family deserves access to expert financial guidance - no cost, no

                                commitment for your first consultation.</p>

                            <div style="margin-top:20px">

                                <a href="#"
                                    onclick="Calendly.initPopupWidget({url:'https://calendly.com/quantumleapwealth/30min'});return false;"
                                    class="btn btn-primary">📅 Book a Free Consultation</a>

                            </div>

                        </div>



                        <div class="disclaimer-block" id="contact">

                            <h2><span class="block-icon">📬</span>Questions About This Disclaimer?</h2>

                            <p>If you have any questions, concerns, or require clarification about this disclaimer or

                                our services, please do not hesitate to reach out to us.</p>

                            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">

                                <div
                                    style="display:flex;align-items:center;gap:10px;background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:12px 16px">

                                    <span style="font-size:1.2rem">📞</span>

                                    <a href="tel:+12182777773"
                                        style="color:var(--primary);font-weight:600;text-decoration:none;font-size:0.9rem">(+1)

                                        218-277-7773 (PIN: 41966)</a>

                                </div>

                                <div
                                    style="display:flex;align-items:center;gap:10px;background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:12px 16px">

                                    <span style="font-size:1.2rem">✉</span>

                                    <a href="mailto:connect@quantumleapwealth.com"
                                        style="color:var(--primary);font-weight:600;text-decoration:none;font-size:0.9rem">connect@quantumleapwealth.com</a>

                                </div>

                            </div>

                        </div>



                    </div><!-- /disclaimer-content -->



                    <!-- Sidebar -->

                    <aside class="disclaimer-sidebar">



                        <!-- Quick Nav -->

                        <div class="sidebar-card">

                            <h3>📋 On This Page</h3>

                            <ul class="sidebar-nav-list">

                                <li><a href="#informational"><span class="sn-icon">ℹ️</span>Informational Purposes</a>

                                </li>

                                <li><a href="#affiliates"><span class="sn-icon">🤝</span>Affiliate Services</a></li>

                                <li><a href="#liability"><span class="sn-icon">⚖️</span>Limitation of Liability</a></li>

                                <li><a href="#modifications"><span class="sn-icon">🔄</span>Right to Modify</a></li>

                                <li><a href="#terms"><span class="sn-icon">📄</span>Terms &amp; Conditions</a></li>

                                <li><a href="#free-consultation"><span class="sn-icon">🎯</span>Free Consultation</a>

                                </li>

                                <li><a href="#contact"><span class="sn-icon">📬</span>Questions?</a></li>

                            </ul>

                        </div>



                        <!-- CTA card -->

                        <div class="sidebar-cta">

                            <h3>📅 24/7 Hour Available</h3>

                            <p>We offer FREE consultation and provide personalized financial solutions to help you make

                                smart decisions.</p>

                            <a href="#"
                                onclick="Calendly.initPopupWidget({url:'https://calendly.com/quantumleapwealth/30min'});return false;"
                                class="btn-sm">Book an Appointment</a>

                        </div>



                        <!-- Related pages -->

                        <div class="sidebar-card">

                            <h3>🔗 Related Pages</h3>

                            <ul class="sidebar-nav-list">

                                <li><a href="/who_we_are/about"><span class="sn-icon">👤</span>About Us</a></li>

                                <li><a href="/who_we_are/partners"><span class="sn-icon">🤝</span>Our Partners</a></li>

                                <li><a href="/contact"><span class="sn-icon">📞</span>Contact Us</a></li>

                                <li><a href="/images/services/investment-planning"><span
                                            class="sn-icon">📈</span>Our Services</a></li>

                            </ul>

                        </div>



                    </aside>



                </div><!-- /disclaimer-layout -->

            </div>

        </section>


    ` }} />
  );
}
