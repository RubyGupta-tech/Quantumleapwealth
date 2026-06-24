const fs = require('fs');
const file = 'c:\\Users\\ruby4\\New folder\\Quantumleapwealth\\qlw-app\\src\\app\\page.js';
let content = fs.readFileSync(file, 'utf8');

const cssStart = content.indexOf('/* New Hero CSS */');
const cssEnd   = content.indexOf('`}} />', cssStart) + 6;

const newCss = `/* New Hero CSS */
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 5% 60px 5%;
          box-sizing: border-box;
          background: linear-gradient(105deg, #030a16 0%, #0a1930 60%, #0d2040 100%);
          overflow: hidden;
        }

        /* Growth arrow background */
        .hero-bg-arrow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url('/images/growth-arrow.svg');
          background-size: cover;
          background-position: center;
          opacity: 0.10;
          pointer-events: none;
          z-index: 0;
        }

        /* Gold flare – bottom left corner ONLY */
        .hero-gold-flare {
          position: absolute;
          bottom: 0; left: 0;
          width: 700px; height: 450px;
          background-image: url('/images/gold-flare.svg');
          background-size: contain;
          background-position: bottom left;
          background-repeat: no-repeat;
          mix-blend-mode: screen;
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 60px;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1.1;
          font-weight: 700;
          margin: 0 0 20px 0;
          color: #fff;
        }

        .hero-divider {
          width: 60px;
          height: 3px;
          background: #e8c678;
          margin-bottom: 25px;
        }

        .sub-headline {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .paragraph {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 40px 0;
          font-weight: 300;
          max-width: 480px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary-hero {
          background: linear-gradient(135deg, #e8c678, #c9a84c);
          color: #030a16;
          padding: 14px 28px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: none;
          cursor: pointer;
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(232, 198, 120, 0.3);
        }

        .btn-outline-hero {
          background: transparent;
          color: #fff;
          padding: 13px 28px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }

        .btn-outline-hero:hover {
          border-color: #e8c678;
          color: #e8c678;
        }

        .play-icon { color: #e8c678; }

        /* RIGHT COLUMN */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 100%;
          min-height: 520px;
        }

        /* Bright office background on right side only */
        .office-bg-layer {
          position: absolute;
          top: -120px; bottom: -60px;
          right: -15%; left: 10%;
          background-image: url('/images/office-bg.png');
          background-size: cover;
          background-position: center top;
          mask-image: linear-gradient(to right, transparent 0%, black 35%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 35%);
          z-index: 0;
          opacity: 0.9;
        }

        /* Profile image */
        .profile-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .main-profile-img {
          width: 100%;
          max-width: 460px;
          height: auto;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        /* Logo overlay positioned on her laptop */
        .laptop-logo-overlay {
          position: absolute;
          bottom: 18%;
          right: 3%;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .laptop-logo-overlay img {
          width: 90px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .laptop-logo-overlay span {
          font-size: 6px;
          color: #0a1930;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-align: center;
        }

        /* Name card */
        .name-card {
          background: rgba(3, 10, 22, 0.88);
          border: 1px solid rgba(232, 198, 120, 0.4);
          border-radius: 6px;
          padding: 12px 28px;
          text-align: center;
          position: absolute;
          bottom: 30px;
          left: 10%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          z-index: 5;
        }

        .signature-font {
          font-family: var(--font-great-vibes), 'Great Vibes', cursive;
          font-size: 1.9rem;
          color: #e8c678;
          margin: 0 0 4px 0;
          line-height: 1;
        }

        .name-card p {
          font-size: 0.75rem;
          color: #fff;
          margin: 0;
          letter-spacing: 1px;
        }

        /* PARTNER CARD – transparent, right side */
        .partner-card {
          position: absolute;
          right: -50px;
          top: 8%;
          background: transparent;
          width: 270px;
          z-index: 6;
        }

        .partner-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #e8c678;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .partner-eyebrow-bar {
          width: 3px;
          height: 18px;
          background: #e8c678;
          display: inline-block;
          border-radius: 2px;
        }

        .partner-main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: #fff;
          line-height: 1.1;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .partner-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          margin: 0;
        }

        /* BOTTOM BANNER */
        .bottom-banner {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(3, 10, 22, 0.92);
          border-top: 1px solid rgba(232, 198, 120, 0.25);
          padding: 14px 30px;
          color: #e8c678;
          font-size: 1.05rem;
          font-family: 'Playfair Display', serif;
          letter-spacing: 2px;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .banner-line {
          flex: 1; max-width: 100px; height: 1px;
          background: linear-gradient(to right, transparent, #e8c678);
        }
        .banner-line.right {
          background: linear-gradient(to left, transparent, #e8c678);
        }

        .bottom-banner .dot { font-size: 0.5rem; opacity: 0.7; }

        #services {
          background: #ffffff;
          padding-top: 80px;
          margin-top: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-left { align-items: center; }
          .partner-card { position: relative; right: 0; top: 0; margin-top: 20px; text-align: center; }
          #services { padding-top: 40px; }
        }

        @keyframes shineSweep {
          0% { left: -100%; } 50% { left: 100%; } 100% { left: 100%; }
        }

        .reveal {
          opacity: 0; transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
      \`}} />`;

content = content.substring(0, cssStart) + newCss + content.substring(cssEnd);

// Replace HTML
const htmlStart = content.indexOf('{/* HERO SECTION */}');
const htmlEnd   = content.indexOf('{/* SERVICES SECTION */}');

const newHtml = `{/* HERO SECTION */}
      <section className="hero-container" id="home">

        <div className="hero-bg-arrow"></div>
        <div className="hero-gold-flare"></div>

        <div className="hero-content">

          {/* LEFT: Headline + Text + Buttons */}
          <div className="hero-left">
            <h1 className="headline">
              <span style={{ color: 'white' }}>Built on Strategy.</span><br />
              <span style={{ color: '#e8c678' }}>Driven by Purpose.</span>
            </h1>
            <div className="hero-divider"></div>
            <h2 className="sub-headline">
              Take a Quantum Leap Toward Financial Confidence
            </h2>
            <p className="paragraph">
              Empowering families through education-first financial strategies designed for retirement confidence, wealth preservation, and lasting legacy.
            </p>
            <div className="hero-btns">
              <button onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
              }} className="btn-primary-hero">
                <span>🗓️</span> BOOK DISCOVERY CALL
              </button>
              <a href="#services" className="btn-outline-hero">
                <span className="play-icon">▷</span> EXPLORE OUR SERVICES
              </a>
            </div>
          </div>

          {/* RIGHT: Image + overlays */}
          <div className="hero-right">
            <div className="office-bg-layer"></div>

            <div className="profile-wrapper">
              <img
                src="/images/Anu-Profile-Pic2.png"
                alt="Anuradha Pasupuleti"
                className="main-profile-img"
              />

              {/* Logo on laptop */}
              <div className="laptop-logo-overlay">
                <img src="/images/Logo1_transparent.png" alt="Quantum Leap Wealth" />
                <span>Where Vision Becomes Wealth</span>
              </div>

              {/* Name card bottom-left */}
              <div className="name-card">
                <h3 className="signature-font">Anuradha Pasupuleti</h3>
                <p>Founder | Financial Strategist</p>
              </div>
            </div>

            {/* Partner text – top right, transparent */}
            <div className="partner-card">
              <div className="partner-eyebrow">
                <span className="partner-eyebrow-bar"></span> MEET YOUR
              </div>
              <h2 className="partner-main-title">FINANCIAL<br/>PARTNER</h2>
              <p className="partner-desc">
                Providing thoughtful guidance and personalized strategies to help families make informed financial decisions and build a more confident future.
              </p>
            </div>
          </div>

        </div>

        <div className="bottom-banner">
          <span className="banner-line"></span>
          <span>Educate Today.</span>
          <span className="dot">♦</span>
          <span>Elevate Tomorrow.</span>
          <span className="dot">♦</span>
          <span>Empower Forever.</span>
          <span className="banner-line right"></span>
        </div>
      </section>

      `;

content = content.substring(0, htmlStart) + newHtml + content.substring(htmlEnd);
fs.writeFileSync(file, content, 'utf8');
console.log('SUCCESS');
