export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `



        <section class="page-hero">
            <div class="container">
                <div class="page-hero-inner">
                    <div class="breadcrumb"><a href="../index.html">Home</a><span>›</span><span
                            style="color:var(--primary); font-weight:600">Contact</span></div>
                    <h1>Get in Touch</h1>
                    <p>We offer free consultations. Whether you have a quick question or are ready to start your
                        financial journey — our team is here, ready to help.</p>
                </div>
            </div>
        </section>



        <div class="container" style="margin-top:-30px;position:relative;z-index:2">

            <div class="contact-cards">

                <div class="contact-info-card">

                    <div class="ci-icon">📞</div>

                    <h4>Call Us</h4>

                    <p><a href="tel:+14082033877">(+1) 408-203-3877</a><br /><a href="tel:+14082033877">(+1)
                            408-203-3877</a></p>

                </div>

                <div class="contact-info-card">

                    <div class="ci-icon">✉</div>

                    <h4>Email Us</h4>

                    <p><a href="mailto:quantumlfs@gmail.com">quantumlfs@gmail.com</a></p>

                </div>

                <div class="contact-info-card">

                    <div class="ci-icon">📍</div>

                    <h4>Location</h4>

                    <p>California, USA<br /><span style="font-size:0.8rem">Serving clients nationwide</span></p>

                </div>

            </div>

        </div>



        <div class="container">

            <div class="contact-main">



                <!-- FORM -->

                <div class="contact-form-side">

                    <h2>Book a Free Consultation</h2>

                    <p>Fill out the form below and one of our expert advisors will get back to you within 24 hours. No

                        obligations — just a genuine conversation about your financial future.</p>

                    <form id="contact-form" onsubmit="handleSubmit(event)">

                        <div class="form-row">

                            <div class="form-group"><label>First Name *</label><input type="text" name="first_name"
                                    required placeholder="First name" /></div>

                            <div class="form-group"><label>Last Name *</label><input type="text" name="last_name"
                                    required placeholder="Last name" /></div>

                        </div>

                        <div class="form-group"><label>Email Address *</label><input type="email" name="user_email"
                                required placeholder="your@email.com" /></div>

                        <div class="form-group"><label>Phone Number</label><input type="tel" name="user_phone"
                                placeholder="(+1) 000-000-0000" /></div>

                        <div class="form-group"><label>Service of Interest</label>

                            <select name="service">

                                <option value="">— Select a service —</option>

                                <option>Investment Planning</option>

                                <option>Living Will &amp; Trust</option>

                                <option>Tax Savings</option>

                                <option>Retirement Planning</option>

                                <option>Kids College Fund</option>

                                <option>Life Insurance</option>

                                <option>6 Steps to Financial Freedom</option>

                                <option>Blog Updates Subscription</option>

                                <option>General Inquiry</option>

                            </select>

                        </div>

                        <div class="form-group"><label>Your Message *</label><textarea required name="message"
                                placeholder="Tell us about your financial goals, questions, or anything else we should know..."></textarea>

                        </div>

                        <button type="submit" class="form-submit">Send Message — It's Free →</button>

                    </form>

                    <div class="form-success" id="form-success">✅ Thank you! Your message has been sent. We'll reach out

                        within 24 hours.</div>

                </div>



                <!-- INFO SIDE -->

                <div class="contact-info-side">

                    <h2>We're Here to Help</h2>

                    <p>Our advisors are committed to guiding you toward financial clarity and confidence. Reach out

                        through any of the channels below — we'd love to connect.</p>



                    <div class="info-detail">

                        <div class="info-detail-icon">📞</div>

                        <div class="info-detail-text">

                            <h4>Phone</h4>

                            <p><a href="tel:+14082033877">(+1) 408-203-3877</a><br /><a href="tel:+14082033877">(+1)
                                    408-203-3877</a></p>

                        </div>

                    </div>

                    <div class="info-detail">

                        <div class="info-detail-icon">✉</div>

                        <div class="info-detail-text">

                            <h4>Email</h4><a href="mailto:quantumlfs@gmail.com">quantumlfs@gmail.com</a>

                        </div>

                    </div>

                    <div class="info-detail">

                        <div class="info-detail-icon">📍</div>

                        <div class="info-detail-text">

                            <h4>Office Location</h4>

                            <p>California, USA<br />Serving clients nationwide</p>

                        </div>

                    </div>

                    <div class="info-detail">

                        <div class="info-detail-icon">💬</div>

                        <div class="info-detail-text">

                            <h4>Response Time</h4>

                            <p>We typically respond within 24 hours of receiving your inquiry. Consultations available 7

                                days a week.</p>

                        </div>

                    </div>



                    <div class="hours-table">

                        <h4>📅 Office Hours</h4>

                        <div class="hours-row"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM EST</span></div>

                        <div class="hours-row"><span>Saturday</span><span>10:00 AM – 4:00 PM EST</span></div>

                        <div class="hours-row"><span>Sunday</span><span>By Appointment Only</span></div>

                    </div>



                    <div
                        style="margin-top:28px;padding:20px;background:linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.04));border:1px solid rgba(201,168,76,0.2);border-radius:12px">

                        <p style="font-size:0.84rem;color:var(--text-muted);line-height:1.65;margin:0"><strong
                                style="color:var(--primary)">🎁 Free Consultation Promise:</strong> Your first

                            consultation is always completely free. No pressure, no obligations — just personalized

                            financial guidance from a certified expert.</p>

                    </div>

                </div>



            </div>

        </div>

    ` }} />
  );
}
