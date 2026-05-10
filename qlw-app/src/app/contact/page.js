"use client";
import { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        const err = await response.json();
        setError(err.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span>
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>Contact</span>
            </div>
            <h1>Get in Touch</h1>
            <p>
              We offer free consultations. Whether you have a quick question or are ready to start your
              financial journey — our team is here, ready to help.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-30px", position: "relative", zIndex: 2 }}>
        <div className="contact-cards">
          <div className="contact-info-card">
            <div className="ci-icon">📞</div>
            <h4>Call Us</h4>
            <p>
              <a href="tel:+14082033877">(+1) 408-203-3877</a>
            </p>
          </div>
          <div className="contact-info-card">
            <div className="ci-icon">✉</div>
            <h4>Email Us</h4>
            <p>
              <a href="mailto:quantumlfs@gmail.com">quantumlfs@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-card">
            <div className="ci-icon">📍</div>
            <h4>Location</h4>
            <p>
              California, USA<br />
              <span style={{ fontSize: "0.8rem" }}>Serving clients nationwide</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-main">
          {/* FORM SIDE */}
          <div className="contact-form-side">
            <h2>Book a Free Consultation</h2>
            <p>
              Fill out the form below and one of our expert advisors will get back to you within 24 hours. No
              obligations — just a genuine conversation about your financial future.
            </p>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="first_name" required placeholder="First name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="last_name" required placeholder="Last name" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="user_email" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" />
                </div>
                <div className="form-group">
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
                    <option>Blog Updates Subscription</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea required name="message" placeholder="Tell us about your financial goals..."></textarea>
                </div>
                
                {error && <p style={{ color: "#ef4444", marginBottom: "16px", fontSize: "0.9rem" }}>{error}</p>}
                
                <button type="submit" className="form-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message — It's Free →"}
                </button>
              </form>
            ) : (
              <div className="form-success" style={{ display: "block" }}>
                ✅ Thank you! Your message has been sent. We'll reach out within 24 hours.
                <button 
                  onClick={() => setIsSuccess(false)}
                  style={{ display: 'block', margin: '20px auto 0', background: 'rgba(255,255,255,0.2)', border: '1px solid #fff', color: '#fff', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* INFO SIDE */}
          <div className="contact-info-side">
            <h2>We're Here to Help</h2>
            <p>Our advisors are committed to guiding you toward financial clarity and confidence. Reach out through any of the channels below.</p>

            <div className="info-detail">
              <div className="info-detail-icon">📞</div>
              <div className="info-detail-text">
                <h4>Phone</h4>
                <p><a href="tel:+14082033877">(+1) 408-203-3877</a></p>
              </div>
            </div>

            <div className="info-detail">
              <div className="info-detail-icon">✉</div>
              <div className="info-detail-text">
                <h4>Email</h4>
                <p><a href="mailto:quantumlfs@gmail.com">quantumlfs@gmail.com</a></p>
              </div>
            </div>

            <div className="info-detail">
              <div className="info-detail-icon">📍</div>
              <div className="info-detail-text">
                <h4>Office Location</h4>
                <p>California, USA<br />Serving clients nationwide</p>
              </div>
            </div>

            <div className="hours-table">
              <h4>📅 Office Hours</h4>
              <div className="hours-row"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM EST</span></div>
              <div className="hours-row"><span>Saturday</span><span>10:00 AM – 4:00 PM EST</span></div>
              <div className="hours-row"><span>Sunday</span><span>By Appointment Only</span></div>
            </div>

            <div style={{ marginTop: "28px", padding: "20px", background: "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.04))", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px" }}>
              <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: "var(--primary)" }}>🎁 Free Consultation Promise:</strong> Your first consultation is always completely free. No pressure, no obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
