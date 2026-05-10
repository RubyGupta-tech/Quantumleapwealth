import ScrollAnimator from "@/components/ScrollAnimator";

export default function HomePage() {
  return (
    <>
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

    <!-- ══════════════════════════════
     UPCOMING EVENT ALERT
══════════════════════════════ -->
    <style>
      @keyframes slideDownAlert {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }

        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes pulseAlertBtn {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }

        70% {
          box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
        }

        100% {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
      }

      .event-alert-banner {
        background: linear-gradient(90deg, var(--accent), var(--accent-dark));
        color: #fff;
        padding: 10px 20px;
        text-align: center;
        font-size: 0.9rem;
        font-weight: 600;
        position: sticky;
        top: 0;
        z-index: 1001;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        animation: slideDownAlert 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .event-alert-btn {
        background: #fff;
        color: var(--primary);
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s;
        animation: pulseAlertBtn 2s infinite;
      }

      .event-alert-btn:hover {
        background: var(--bg-light);
        text-decoration: none;
        color: var(--primary-mid);
        animation: none;
      }

      .event-alert-close {
        position: absolute;
        right: 15px;
        cursor: pointer;
        opacity: 0.7;
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
      }

      .event-alert-close:hover {
        opacity: 1;
      }

      /* Adjust navbar when alert is visible */
      .navbar {
        top: 40px !important;
      }

      @media (max-width: 600px) {
        .event-alert-banner {
          flex-direction: column;
          font-size: 0.8rem;
          padding: 15px 35px 15px 15px;
          gap: 10px;
        }

        .event-alert-btn {
          width: fit-content;
          text-align: center;
          padding: 6px 24px;
        }

        .event-alert-close {
          top: 10px;
          right: 10px;
        }

        .navbar {
          top: 90px !important;
        }

        .hero {
          padding-top: 220px !important;
        }
      }
    </style>
    <div class="event-alert-banner" id="eventAlertBanner">
      <span>🎉 <strong>Upcoming Event:</strong> Free Retirement Planning Webinar on Mar 15th!</span>
      <a href="#events" class="event-alert-btn">View Details</a>
      <button class="event-alert-close" aria-label="Dismiss Alert"
        onclick="document.getElementById('eventAlertBanner').style.display='none'; document.querySelector('.navbar').style.top='0px';">&times;</button>
    </div>

    <!-- ══════════════════════════════
     HERO
══════════════════════════════ -->
    <style>
      .hero-split-section {
        display: flex;
        height: calc(100vh - 180px);
        /* Strictly lock to one screen minus navbar height */
        min-height: 600px;
        /* Safety floor for very small screens */
        width: 100%;
        background: radial-gradient(circle at 20% 50%, #1e293b 0%, #0f172a 100%);
        position: relative;
        padding-top: 0;
        overflow: hidden;
      }

      /* Fintech Grid Background Overlay */
      .hero-split-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(232, 198, 120, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232, 198, 120, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
        z-index: 1;
        pointer-events: none;
        mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
      }

      /* Ambient Background Orbs */
      .hero-ambient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.4;
        animation: floatOrb 15s ease-in-out infinite alternate;
        z-index: 0;
        pointer-events: none;
      }

      .orb-1 {
        width: 500px;
        height: 500px;
        background: rgba(201, 168, 76, 0.15);
        top: 10%;
        right: 40%;
      }

      .orb-2 {
        width: 600px;
        height: 600px;
        background: rgba(56, 189, 248, 0.1);
        bottom: -10%;
        left: 30%;
        animation-delay: 2s;
      }

      @keyframes floatOrb {
        0% {
          transform: translate(0, 0) scale(1);
        }

        100% {
          transform: translate(40px, -40px) scale(1.1);
        }
      }

      /* Premium Glassmorphism Data Card */
      .hero-glass-card {
        background:
          linear-gradient(rgba(10, 37, 64, 0.75), rgba(10, 37, 64, 0.85)),
          url('images/hero_prosperity.png') center/cover no-repeat;
        background-blend-mode: multiply;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-top: 1px solid rgba(201, 168, 76, 0.2);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        padding: 40px;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
      }

      .hero-glass-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.03), transparent);
        transform: skewX(-20deg);
        animation: glassShine 8s linear infinite 3s;
      }

      @keyframes glassShine {
        0% {
          left: -100%;
        }

        20% {
          left: 200%;
        }

        100% {
          left: 200%;
        }
      }

      /* Left Side Visual Design - Prosperity & Growth (Option 1) */
      .hero-bg-design-left {
        position: absolute;
        width: 850px;
        height: 850px;
        top: 50%;
        left: 0;
        transform: translate(-35%, -50%);
        background:
          radial-gradient(circle, rgba(15, 23, 42, 0) 0%, #0f172a 85%),
          url('images/hero_prosperity.png') center/cover no-repeat;
        z-index: 2;
        /* Put it above the background pattern */
        pointer-events: none;
        opacity: 0.9;
        /* Made more vibrant */
        border-radius: 50%;
        box-shadow: 0 0 100px 50px #0f172a inset;
        mix-blend-mode: screen;
        /* Enhance brightness/visibility */
        animation: rotateDesign 60s linear infinite;
        /* Add missing animation */
      }

      /* Left Side Visual Design - Prosperity & Growth (Option 1) */
      .hero-bg-design-left {
        position: absolute;
        width: 850px;
        height: 850px;
        top: 50%;
        left: 0;
        transform: translate(-35%, -50%);
        background:
          radial-gradient(circle, rgba(15, 23, 42, 0) 0%, #0f172a 85%),
          url('images/hero_prosperity.png') center/cover no-repeat;
        z-index: 2;
        /* Put it above the background pattern */
        pointer-events: none;
        opacity: 0.9;
        /* Made more vibrant */
        border-radius: 50%;
        box-shadow: 0 0 100px 50px #0f172a inset;
        mix-blend-mode: screen;
        /* Enhance brightness/visibility */
        animation: rotateDesign 60s linear infinite;
        /* Add missing animation */
      }

      @keyframes rotateDesign {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      @media(max-width: 992px) {
        .hero-split-section {
          flex-direction: column;
          height: auto;
          min-height: auto;
        }
      }

      .hero-split-left {
        flex: 1 1 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4% 8%;
        position: relative;
        z-index: 2;
      }

      @media(max-width: 992px) {
        .hero-split-left {
          padding: 40px 20px;
          width: 100%;
        }
      }

      .hero-split-left-content {
        max-width: 600px;
        width: 100%;
        animation: fadeUpIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        position: relative;
        z-index: 5;
      }

      .hero-split-right {
        flex: 1 1 50%;
        position: relative;
        min-height: 50vh;
        z-index: 1;
      }

      @media(max-width: 992px) {
        .hero-split-right {
          min-height: 400px;
          width: 100%;
        }
      }

      /* Gradient blending */
      .hero-split-right::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, #0f172a 0%, transparent 15%);
        pointer-events: none;
        z-index: 10;
      }

      @media(max-width: 992px) {
        .hero-split-right::after {
          background: linear-gradient(to bottom, #0f172a 0%, transparent 20%);
        }
      }

      .hero-split-title {
        font-size: clamp(2.2rem, 4vw, 3.5rem);
        line-height: 1.1;
        margin-bottom: 20px;
        color: white;
        font-family: 'Playfair Display', serif;
        font-weight: 800;
        letter-spacing: -1px;
      }

      /* Masked Line Reveal */
      .hero-title-line {
        display: block;
        overflow: hidden;
        margin-bottom: 4px;
        width: 100%;
        /* Ensure full width availability */
      }

      @keyframes textReveal {
        to {
          transform: translateY(0);
        }
      }

      /* Premium Typing Animation */
      .hero-title-line .reveal-inner {
        display: inline-block;
        /* Changed to inline-block for width animation */
        overflow: hidden;
        white-space: nowrap;
        border-right: 3px solid transparent;
        /* The Cursor */
        width: 0;
        animation:
          typing 1.5s steps(30, end) forwards,
          cursor-blink 0.8s step-end infinite;
      }

      .hero-title-line:nth-child(2) .reveal-inner {
        animation-delay: 1.8s;
        /* Wait for Line 1 to finish */
      }

      @keyframes typing {
        from {
          width: 0;
        }

        to {
          width: 100%;
          border-color: transparent;
        }

        /* Remove cursor at end */
      }

      @keyframes cursor-blink {

        0%,
        100% {
          border-color: transparent;
        }

        50% {
          border-color: #e8c678;
        }
      }

      /* Active typing state to handle cursor color while typing */
      .hero-title-line .reveal-inner[data-typing="active"] {
        border-color: #e8c678;
      }

      @keyframes fadeUpIn {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Golden Shimmer Effect */
      .shimmer-text {
        background: linear-gradient(to right,
            #e8c678 20%,
            #fff 40%,
            #fff 60%,
            #e8c678 80%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmerGold 4s linear infinite;
        font-weight: 900;
        display: inline;
      }

      .hero-title-line:nth-child(1) .reveal-inner {
        animation: typing 0.8s steps(30, end) forwards, cursor-blink 0.4s step-end 2;
      }

      .hero-title-line:nth-child(2) .reveal-inner {
        animation: typing 0.8s steps(30, end) 0.6s forwards, cursor-blink 0.4s step-end 3;
      }

      @keyframes shimmerGold {
        to {
          background-position: 200% center;
        }
      }

      .hero-split-desc {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.85);
        margin-bottom: 25px;
        line-height: 1.6;
        max-width: 540px;
        animation: fadeUpIn 0.8s ease 1.2s forwards;
        /* Much faster entrance */
        opacity: 0;
      }

      .hero-split-highlights {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 25px;
      }

      /* Highlights Staggered Entrance & Hover */
      .hero-split-hl {
        display: flex;
        align-items: center;
        gap: 12px;
        color: white;
        font-weight: 600;
        font-size: 0.95rem;
        background: rgba(255, 255, 255, 0.03);
        padding: 12px 16px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        opacity: 0;
        /* Star hidden for animation */
        animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        cursor: pointer;
        will-change: transform, opacity;
      }

      .hero-split-hl:hover {
        transform: translateY(-5px) scale(1.05);
        background: rgba(201, 168, 76, 0.12);
        border-color: rgba(201, 168, 76, 0.5);
        box-shadow: 0 10px 25px rgba(201, 168, 76, 0.2);
        color: #e8c678;
      }

      @keyframes fadeSlideIn {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media(max-width: 600px) {
        .hero-split-hl {
          font-size: 0.85rem;
          padding: 10px;
        }
      }

      .hero-split-hl-icon {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      .hero-split-hl:hover .hero-split-hl-icon {
        transform: scale(1.2) rotate(10deg);
      }

      .hero-split-buttons {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        margin-top: 10px;
        animation: fadeUpIn 0.8s ease 2.5s forwards;
        /* Buttons appear by 2.5s */
        opacity: 0;
      }

      .hero-split-buttons .btn {
        padding: 16px 36px;
        font-size: 1.05rem;
        border-radius: 50px;
      }
    </style>

    <section class="hero-split-section" id="home">
      <!-- Premium Ambient Elements -->
      <div class="hero-ambient-orb orb-1"></div>
      <div class="hero-ambient-orb orb-2"></div>

      <!-- Background Design Element -->
      <div class="hero-bg-design-left"></div>

      <!-- 50% LEFT TEXT COLUMN -->
      <div class="hero-split-left" style="align-items: center;">
        <div class="hero-split-left-content hero-glass-card">
          <h1 class="hero-split-title">
            <div class="hero-title-line">
              <span class="reveal-inner">Built on <span class="shimmer-text">Strategy.</span></span>
            </div>
            <div class="hero-title-line">
              <span class="reveal-inner">Driven by <span class="shimmer-text">Purpose.</span></span>
            </div>
          </h1>

          <p class="hero-split-desc">
            At Quantum Leap Wealth, we believe financial planning should be intentional, structured, and built for
            long-term security — not driven by trends or guesswork.
          </p>

          <div class="hero-split-highlights">
            <div class="hero-split-hl" style="animation-delay: 1.8s;">
              <div class="hero-split-hl-icon">💰</div>Tax-Efficient
            </div>
            <div class="hero-split-hl" style="animation-delay: 1.9s;">
              <div class="hero-split-hl-icon">🏖️</div>Retirement
            </div>
            <div class="hero-split-hl" style="animation-delay: 2.0s;">
              <div class="hero-split-hl-icon">🛡️</div>Life Protection
            </div>
            <div class="hero-split-hl" style="animation-delay: 2.1s;">
              <div class="hero-split-hl-icon">🎓</div>College Funding
            </div>
          </div>

          <div class="hero-split-buttons">
            <a href="/who_we_are/about" class="btn btn-primary"
              style="box-shadow:0 10px 20px rgba(201,168,76,0.2); white-space:nowrap;">Our Story</a>
            <a href="#"
              onclick="Calendly.initPopupWidget({url:'https://calendly.com/webserviesbygupta/30min'});return false;"
              class="btn btn-light-gold"
              style="white-space:nowrap; background:transparent; color:white; border:1px solid rgba(255,255,255,0.4);">Consultation</a>
          </div>
        </div>
      </div>

      <!-- 50% RIGHT SLIDER COLUMN (EDGE-TO-EDGE) -->
      <div class="hero-split-right">
        <!-- Legacy slider structural container injected & expanded -->
        <div class="dynamic-slider"
          style="width: 100%; height: 100%; position: absolute; inset: 0; overflow: hidden; border-radius: 0; border: none; box-shadow: none;">

          <!-- Slide 1 -->
          <div class="slide active" style="height: 100%;">
            <div class="slide-content"
              style="background: white; flex-direction: column; padding: 20px; height: 100%; justify-content: center;">
              <img src="images/QWL_logo_original.png" alt="Quantum Leap Wealth" class="slide-logo"
                style="margin-bottom: 20px; max-width: 260px;" />
              <p
                style="color: var(--primary); font-size: 1.15rem; font-weight: 600; text-align: center; max-width: 80%; margin: 0 auto;">
                Comprehensive Wealth Management & Real Estate Investment Strategies
              </p>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide" style="height: 100%;">
            <div class="slide-content" style="height: 100%;">
              <img src="images/Anu_profile_pic.png" alt="Expert Leadership" class="slide-bg"
                style="object-position: top center; width: 100%; height: 100%; object-fit: cover;" />
              <div class="slide-overlay"
                style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%); bottom: 0; padding-bottom: 40px;">
                <h3 style="font-size: 1.5rem; color: white;">Expert Leadership You Can Trust</h3>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="slide" style="height: 100%;">
            <div class="slide-content" style="height: 100%;">
              <img src="images/Anu_Homepage_pic.png" alt="Secure Your Family" class="slide-bg"
                style="object-position: top center; width: 100%; height: 100%; object-fit: cover;" />
              <div class="slide-overlay"
                style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%); bottom: 0; padding-bottom: 40px;">
                <h3 style="font-size: 1.5rem; color: white;">Securing Your Family's Legacy</h3>
              </div>
            </div>
          </div>

          <!-- Slide 4: Services Grid -->
          <div class="slide" style="height: 100%;">
            <div class="slide-content"
              style="background: linear-gradient(135deg, #f8f9fa, #e2e8f0); height: 100%; justify-content: center;">
              <div class="slide-services-container" style="width: 100%; padding: 0 5%;">
                <h3
                  style="color:var(--primary); text-align:center; font-size:1.5rem; font-weight: 800; margin-bottom:15px;">
                  Our Expertise</h3>
                <div class="slide-services-grid" style="grid-template-columns: 1fr 1fr; gap: 12px; display: grid;">
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">📈 Investment Planning</div>
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">🏖️ Retirement</div>
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">🛡️ Life Insurance</div>
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">💰 Tax Savings</div>
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">🎓 Kids College</div>
                  <div class="slide-service-box" style="padding: 12px; font-size: 0.9rem;">📜 Will & Trust</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slider Controls -->
          <div class="slider-dots" style="bottom: 30px; z-index: 20;">
            <span class="dot active" onclick="currentSlide(0)"></span>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
     SERVICE PILLARS
══════════════════════════════ -->
    <style>
      .service-pillars {
        display: flex;
        justify-content: center;
        gap: 28px;
        margin-top: 40px;
        position: relative;
        z-index: 5;
        padding: 0 24px;
        flex-wrap: wrap;
      }

      .pillar-card {
        background: #fff;
        border-radius: 16px;
        padding: 30px 28px;
        text-align: center;
        box-shadow: 0 12px 40px rgba(10, 37, 64, 0.12);
        border: 1px solid var(--border);
        flex: 1;
        max-width: 300px;
        min-width: 220px;
        transition: all 0.3s;
      }

      .pillar-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(10, 37, 64, 0.18);
        border-color: var(--accent);
      }

      .pillar-icon {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(201, 168, 76, 0.12), rgba(201, 168, 76, 0.22));
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        margin: 0 auto 16px;
        border: 2px solid rgba(201, 168, 76, 0.2);
      }

      .pillar-card h4 {
        font-size: 1rem;
        color: var(--primary);
        margin-bottom: 6px;
      }

      .pillar-card p {
        font-size: 0.78rem;
        color: var(--text-muted);
        line-height: 1.5;
      }

      .dual-branch {
        padding: 40px 0;
        background: var(--bg-light);
      }

      /* Tree Diagram */
      .tree-top {
        text-align: center;
        margin-bottom: 0;
      }

      .tree-logo-box {
        display: inline-block;
        background: linear-gradient(135deg, #f8f5ee, #fff);
        border: 2px solid var(--accent);
        border-radius: 50px;
        padding: 14px 40px;
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        box-shadow: 0 6px 24px rgba(201, 168, 76, 0.18);
      }

      .tree-logo-box .tree-italic {
        font-style: italic;
        font-weight: 400;
        color: var(--accent);
        font-size: 0.85em;
      }

      .tree-connector {
        display: flex;
        justify-content: center;
        position: relative;
        height: 60px;
      }

      .tree-connector::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 30px;
        background: var(--accent);
      }

      .tree-connector::after {
        content: '';
        position: absolute;
        top: 30px;
        left: 25%;
        width: 50%;
        height: 2px;
        background: var(--accent);
      }

      .tree-branch-left,
      .tree-branch-right {
        position: absolute;
        top: 30px;
        width: 2px;
        height: 30px;
        background: var(--accent);
      }

      .tree-branch-left {
        left: 25%;
      }

      .tree-branch-right {
        right: 25%;
      }

      .tree-dot {
        position: absolute;
        top: 55px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent);
        border: 2px solid #fff;
      }

      .tree-dot-left {
        left: calc(25% - 5px);
      }

      .tree-dot-right {
        right: calc(25% - 5px);
      }

      .dual-branch-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2px;
        max-width: 950px;
        margin: 0 auto;
        background: linear-gradient(135deg, rgba(10, 25, 50, 0.45), rgba(10, 25, 50, 0.4)), url('images/Home_page_QLW2.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(10, 37, 64, 0.18);
      }

      .branch-card {
        background: rgba(10, 25, 50, 0.3);
        padding: 30px 28px;
        transition: all 0.3s;
      }

      .branch-card:hover {
        background: rgba(255, 255, 255, 0.14);
      }

      .branch-card-header {
        display: none;
      }

      .branch-card-body {
        padding: 0;
      }

      .branch-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.15rem;
        color: #fff;
        margin-bottom: 16px;
        font-weight: 700;
        padding-bottom: 10px;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(to right, transparent, var(--accent), transparent) 1;
      }

      .branch-card-title .italic-part {
        font-style: italic;
        font-weight: 400;
      }

      .branch-list {
        list-style: none;
        padding: 0;
        margin: 0 0 18px;
      }

      .branch-list li {
        padding: 5px 0;
        font-size: 0.88rem;
        color: rgba(255, 255, 255, 0.85);
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .branch-list li::before {
        content: '◆';
        font-size: 0.5rem;
        color: var(--accent);
      }

      .branch-btn {
        display: inline-block;
        padding: 10px 28px;
        border-radius: 6px;
        font-size: 0.82rem;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s;
      }

      .branch-btn-gold {
        background: var(--accent);
        color: #fff;
      }

      .branch-btn-gold:hover {
        background: var(--accent-dark);
        color: #fff;
      }

      .branch-btn-navy {
        background: var(--primary);
        color: #fff;
      }

      .branch-btn-navy:hover {
        background: var(--primary-mid);
        color: #fff;
      }

      @media (max-width: 700px) {
        .dual-branch-grid {
          grid-template-columns: 1fr;
        }

        .service-pillars {
          flex-direction: column;
          align-items: center;
        }

        .tree-connector {
          display: none;
        }
      }
    </style>
    <!--<div class="container">
      <div class="service-pillars">
        <a href="Entrepreneurship//Entrepreneurship/6-steps-to-financial-freedom" class="pillar-card reveal reveal-delay-1"
          style="text-decoration:none; color:inherit; display:flex; flex-direction:column; align-items:center;">
          <div class="pillar-icon">🚀</div>
          <h4>Entrepreneurship</h4>
          <p>6 Steps to Financial Freedom</p>
        </a>
        <div class="pillar-card reveal reveal-delay-2">
          <div class="pillar-icon">📊</div>
          <h4>Financial Services</h4>
          <p>Insurance & Retirement Planning</p>
        </div>
        <div class="pillar-card reveal reveal-delay-3">
          <div class="pillar-icon">🏠</div>
          <h4>Real Estate Solutions</h4>
          <p>Buy • Sell • Invest</p>
        </div>
      </div>
    </div>

    <section class="dual-branch">
      <div class="container" style="max-width:950px;">
        <div class="dual-branch-grid">
          <div class="branch-card">
            <div class="branch-card-body">
              <div class="branch-card-title"><span class="italic-part">Quantum Leap</span> Financial Services</div>
              <ul class="branch-list">
                <li>Financial Planning & Insurance Solutions</li>
                <li>Wealth Management</li>
              </ul>
              <a href="#services" class="branch-btn branch-btn-gold">Learn More</a>
            </div>
          </div>
          <div class="branch-card">
            <div class="branch-card-body">
              <div class="branch-card-title"><span class="italic-part">Quantum Leap</span> Realty</div>
              <ul class="branch-list">
                <li>Residential Sales</li>
                <li>Property Investments</li>
              </ul>
              <a href="#" class="branch-btn branch-btn-navy">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>-->



    <!-- ══════════════════════════════
     SERVICES
══════════════════════════════ -->
    <section class="section section-light" id="services">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">What We Offer</span>
          <h2 class="section-title">Our Best Services</h2>
          <p class="section-sub">Comprehensive financial solutions designed to protect, grow, and sustain your wealth at
            every stage of life.</p>
        </div>
        <div class="services-grid">
          <a href="images/services//images/services/investment-planning" class="flip-card reveal reveal-delay-1"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/financial_pics.png" alt="Investment Planning" />
                <div class="front-content">
                  <h3>Investment Planning</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Investment Planning</h3>
                <p>Strategic portfolio management aligned with your risk tolerance and long-term financial goals for
                  maximum growth.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>

          <a href="images/services//images/services/living-will-trust" class="flip-card reveal reveal-delay-2"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/will&Trust_pics.png" alt="Living Will &amp; Trust" />
                <div class="front-content">
                  <h3>Living Will &amp; Trust</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Living Will &amp; Trust</h3>
                <p>Protect your legacy and ensure your assets are distributed exactly as you intend, with confidence and
                  clarity.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>

          <a href="images/services//images/services/tax-saving" class="flip-card reveal reveal-delay-3"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/LifeProtection_pics.png" alt="Tax Savings" />
                <div class="front-content">
                  <h3>Tax Savings</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Tax Savings</h3>
                <p>Maximize your wealth with smart, proactive tax strategies that keep more money in your pocket
                  legally.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>

          <a href="images/services//images/services/retirement-planning" class="flip-card reveal reveal-delay-1"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/ritermentplanning_pics.png" alt="Retirement Planning" />
                <div class="front-content">
                  <h3>Retirement Planning</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Retirement Planning</h3>
                <p>Plan the retirement you deserve — comfortable, secure, and financially independent from day one.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>

          <a href="images/services//images/services/kids-college" class="flip-card reveal reveal-delay-2"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/kids_college_planning.png" alt="Kids College Fund" />
                <div class="front-content">
                  <h3>Kids College Fund</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Kids College Fund</h3>
                <p>Invest in your child's future today with education savings plans tailored to your family's timeline
                  and goals.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>

          <a href="images/services//images/services/life-insurance" class="flip-card reveal reveal-delay-3"
            style="text-decoration:none;">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="images/LifeProtection_PermanentInsurance_pics.png" alt="Life Insurance" />
                <div class="front-content">
                  <h3>Life Insurance</h3>
                </div>
              </div>
              <div class="flip-card-back">
                <h3>Life Insurance</h3>
                <p>Comprehensive coverage that protects your loved ones financially while building long-term asset
                  value.</p>
                <span class="card-arrow">Learn more →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>



    <!-- ══════════════════════════════
     WHY CHOOSE US — BLUE BAR
══════════════════════════════ -->
    <section style="background: linear-gradient(135deg, #0a2540, #1a4a7a); padding: 50px 0;">
      <div class="container" style="max-width: 1000px;">
        <h2
          style="text-align:center; color:#fff; font-family:'Playfair Display',serif; font-size:1.8rem; margin-bottom:36px; display:inline-block; padding-bottom:12px; border-bottom:2px solid transparent; border-image:linear-gradient(to right, transparent, var(--accent), transparent) 1; width:100%;">
          Why Choose Us?</h2>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:24px;">
          <div
            style="text-align:center; padding:28px 20px; background:rgba(255,255,255,0.08); border-radius:12px; backdrop-filter:blur(4px); transition:all 0.3s;">
            <div style="font-size:2.2rem; margin-bottom:14px;">🎯</div>
            <h4 style="color:#fff; font-size:1rem; margin-bottom:8px; font-weight:700;">Expert Guidance</h4>
            <p style="color:rgba(255,255,255,0.7); font-size:0.85rem; line-height:1.5;">Licensed professionals providing
              personalized financial strategies tailored to your goals.</p>
          </div>
          <div
            style="text-align:center; padding:28px 20px; background:rgba(255,255,255,0.08); border-radius:12px; backdrop-filter:blur(4px); transition:all 0.3s;">
            <div style="font-size:2.2rem; margin-bottom:14px;">📋</div>
            <h4 style="color:#fff; font-size:1rem; margin-bottom:8px; font-weight:700;">Comprehensive Solutions</h4>
            <p style="color:rgba(255,255,255,0.7); font-size:0.85rem; line-height:1.5;">From insurance to real estate —
              all your financial needs under one trusted roof.</p>
          </div>
          <div
            style="text-align:center; padding:28px 20px; background:rgba(255,255,255,0.08); border-radius:12px; backdrop-filter:blur(4px); transition:all 0.3s;">
            <div style="font-size:2.2rem; margin-bottom:14px;">📈</div>
            <h4 style="color:#fff; font-size:1rem; margin-bottom:8px; font-weight:700;">Proven Results</h4>
            <p style="color:rgba(255,255,255,0.7); font-size:0.85rem; line-height:1.5;">Trusted by hundreds of families
              to build, protect, and grow their wealth for generations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
     HOW IT WORKS
    ══════════════════════════════ -->
    <style>
      /* Premium Vertical Scroll Timeline */
      .process-timeline {
        position: relative;
        max-width: 1000px;
        margin: 60px auto 0;
        padding: 20px 0;
      }
      
      .timeline-line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(10, 37, 64, 0.1);
        transform: translateX(-50%);
      }
      
      .timeline-item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 80px;
        z-index: 2;
      }
      
      .timeline-left {
        flex: 1;
        text-align: right;
        padding-right: 60px;
        opacity: 0;
        transform: translateX(-80px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .timeline-right {
        flex: 1;
        text-align: left;
        padding-left: 60px;
        opacity: 0;
        transform: translateX(80px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
      }
      
      /* Active state when scrolling into view */
      .timeline-item.active .timeline-left {
        opacity: 1;
        transform: translateX(0);
      }
      
      .timeline-item.active .timeline-right {
        opacity: 1;
        transform: translateX(0);
      }
      
      .timeline-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 70px;
        background: white;
        border: 2px solid var(--navy);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        color: var(--navy);
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        font-weight: 800;
        z-index: 3;
        transition: all 0.8s ease;
      }
      
      .timeline-item.active .timeline-center {
        border-color: var(--gold);
        color: var(--gold);
        box-shadow: 0 8px 25px rgba(201, 168, 76, 0.3);
      }
      
      .tl-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        color: var(--navy);
        margin-bottom: 0;
      }
      
      .tl-desc {
        color: #555;
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 0;
      }
      
      /* Mobile Timeline Layout */
      @media (max-width: 768px) {
        .process-timeline {
          margin-top: 40px;
        }
        .timeline-line {
          left: 40px;
        }
        
        .timeline-item {
          flex-direction: column;
          align-items: flex-start;
          padding-left: 100px;
          margin-bottom: 50px;
        }
        
        .timeline-center {
          left: 40px;
        }
        
        .timeline-left {
          text-align: left;
          padding-right: 0;
          padding-bottom: 10px;
          transform: translateX(40px); /* Both slide from right on mobile */
        }
        
        .timeline-right {
          padding-left: 0;
          transform: translateX(40px); /* Both slide from right on mobile */
        }
        .tl-title {
          font-size: 1.8rem;
        }
      }
    </style>
    <section class="section section-light" id="process">
      <div class="container">
        <div class="text-center reveal">
          <div class="divider-container">
            <div class="divider-line"></div>
            <span class="divider-text">Our Process</span>
            <div class="divider-line"></div>
          </div>
          <h2 class="section-title">How We Work With You</h2>
          <p class="section-sub">A simple, 4-step journey to financial security and wealth growth.</p>
        </div>
        
        <div class="process-timeline">
          <div class="timeline-line"></div>
          
          <div class="timeline-item">
            <div class="timeline-left"><h3 class="tl-title">Free Consultation</h3></div>
            <div class="timeline-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div class="timeline-right">
              <p class="tl-desc">We start with a no-obligation conversation to understand your current financial situation, challenges, and long-term goals.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-left"><h3 class="tl-title">Financial Analysis</h3></div>
            <div class="timeline-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </div>
            <div class="timeline-right">
              <p class="tl-desc">We analyze your assets, income, risk tolerance, and future needs using proprietary tools to build a complete, transparent picture.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-left"><h3 class="tl-title">Custom Strategy</h3></div>
            <div class="timeline-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div class="timeline-right">
              <p class="tl-desc">We craft a personalized financial plan covering multi-asset investments, life insurance protection, retirement, and tax optimization.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-left"><h3 class="tl-title">Ongoing Support</h3></div>
            <div class="timeline-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div class="timeline-right">
              <p class="tl-desc">Your life changes, and so should your strategy. We monitor, adjust, and stay by your side as your family and wealth evolve over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ══════════════════════════════
     OUR PRODUCT (FAQs & Insights)
══════════════════════════════ -->
    <section class="section section-light" id="products">
      <div class="container">
        <div class="text-center reveal">
          <div class="divider-container">
            <div class="divider-line"></div>
            <span class="divider-text">Our Product</span>
            <div class="divider-line"></div>
          </div>
          <h2 class="section-title">Strategic Partner <span class="highlight">Network</span></h2>
          <p class="section-sub">We collaborate with industry-leading financial institutions to bring you the
            best-in-class products and solutions.</p>
        </div>
      </div>

      <div class="logo-ticker-container">
        <div class="logo-ticker-track">
          <!-- Set 1 -->
          <div class="logo-item"><img src="images/product_images/American_product.png" alt="American Product" /></div>
          <div class="logo-item"><img src="images/product_images/annexus_product.png" alt="Annexus Product" /></div>
          <div class="logo-item"><img src="images/product_images/corebridge_product.png" alt="Corebridge Product" />
          </div>
          <div class="logo-item"><img src="images/product_images/Fidelity_product.png" alt="Fidelity Product" /></div>
          <div class="logo-item"><img src="images/product_images/nationwide_product._pic.jpg"
              alt="Nationwide Product" /></div>
          <div class="logo-item"><img src="images/product_images/northamerican_product.png"
              alt="North American Product" /></div>
          <!-- Set 2 (Duplicate for smooth loop) -->
          <div class="logo-item"><img src="images/product_images/American_product.png" alt="American Product" /></div>
          <div class="logo-item"><img src="images/product_images/annexus_product.png" alt="Annexus Product" /></div>
          <div class="logo-item"><img src="images/product_images/corebridge_product.png" alt="Corebridge Product" />
          </div>
          <div class="logo-item"><img src="images/product_images/Fidelity_product.png" alt="Fidelity Product" /></div>
          <div class="logo-item"><img src="images/product_images/nationwide_product._pic.jpg"
              alt="Nationwide Product" /></div>
          <div class="logo-item"><img src="images/product_images/northamerican_product.png"
              alt="North American Product" /></div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════
     EVENTS
══════════════════════════════ -->
    <style>
      .events-section {
        padding: 80px 0 60px;
        background: #fff;
      }

      .events-header {
        text-align: center;
        margin-bottom: 40px;
      }

      .events-tabs {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 28px;
      }

      .events-tab {
        padding: 12px 32px;
        border-radius: 50px;
        border: 2px solid var(--border);
        background: #fff;
        color: var(--text-muted);
        font-weight: 700;
        font-size: 0.88rem;
        cursor: pointer;
        transition: all 0.3s;
        font-family: 'Inter', sans-serif;
      }

      .events-tab.active {
        background: linear-gradient(135deg, var(--accent), var(--accent-dark));
        color: #fff;
        border-color: var(--accent);
        box-shadow: 0 4px 16px rgba(201, 168, 76, 0.3);
      }

      .events-tab:hover:not(.active) {
        border-color: var(--accent);
        color: var(--accent);
      }

      .events-panel {
        display: none;
      }

      .events-panel.active {
        display: block;
      }

      .events-slider-wrap {
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #04111f 0%, #0a2540 55%, #0d3a6e 100%);
        border-radius: 20px;
        padding: 30px 16px;
      }

      .events-slider {
        display: flex;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .events-slide {
        min-width: 33.333%;
        padding: 0 12px;
        box-sizing: border-box;
      }

      .events-nav-arrows {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        pointer-events: none;
        z-index: 3;
        padding: 0 0;
      }

      .events-arrow {
        pointer-events: all;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.1rem;
        color: var(--primary);
        transition: all 0.3s;
        box-shadow: var(--shadow-sm);
      }

      .events-arrow:hover {
        background: var(--accent);
        color: #fff;
        border-color: var(--accent);
      }

      .events-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 28px;
      }

      .events-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--border);
        border: none;
        cursor: pointer;
        transition: all 0.3s;
        padding: 0;
      }

      .events-dot.active {
        background: var(--accent);
        transform: scale(1.3);
      }

      .event-card {
        background: #fff;
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
      }

      .event-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-md);
        border-color: var(--accent);
      }

      .event-card-top {
        background: linear-gradient(135deg, var(--primary), var(--primary-mid));
        padding: 20px 22px;
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .event-date-badge {
        background: var(--accent);
        border-radius: 12px;
        padding: 10px 14px;
        text-align: center;
        min-width: 60px;
        flex-shrink: 0;
      }

      .event-date-badge .eday {
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary);
        line-height: 1;
      }

      .event-date-badge .emonth {
        display: block;
        font-size: 0.65rem;
        font-weight: 700;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 2px;
      }

      .event-card-top h4 {
        color: #fff;
        font-size: 1rem;
        line-height: 1.3;
      }

      .event-card-body {
        padding: 20px 22px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .event-card-body p {
        font-size: 0.85rem;
        color: var(--text-muted);
        line-height: 1.65;
        margin-bottom: 16px;
        flex: 1;
      }

      .event-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-bottom: 18px;
        font-size: 0.78rem;
        color: var(--text-muted);
      }

      .event-meta span {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .event-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 22px;
        border-radius: 50px;
        font-size: 0.82rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.3s;
        align-self: flex-start;
      }

      .event-btn-register {
        background: linear-gradient(135deg, var(--accent), var(--accent-dark));
        color: #fff;
      }

      .event-btn-register:hover {
        box-shadow: 0 4px 14px rgba(201, 168, 76, 0.4);
        transform: translateY(-1px);
        color: #fff;
      }

      .event-btn-recap {
        background: var(--bg-light);
        color: var(--primary);
        border: 1.5px solid var(--border);
      }

      .event-btn-recap:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      .event-badge-status {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 50px;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
      }

      .badge-upcoming {
        background: rgba(74, 222, 128, 0.12);
        color: #16a34a;
      }

      .badge-completed {
        background: rgba(107, 114, 128, 0.1);
        color: #6b7280;
      }

      @media (max-width: 900px) {
        .events-slide {
          min-width: 50%;
        }
      }

      @media (max-width: 600px) {
        .events-slide {
          min-width: 100%;
        }

        .events-tabs {
          flex-direction: column;
          align-items: center;
        }
      }
    </style>
    <section class="events-section" id="events">
      <div class="container">
        <div class="events-header reveal">
          <span class="section-label">Events</span>
          <h2 class="section-title">Stay Connected With Us</h2>
          <p class="section-sub" style="margin: 0 auto;">Join our financial workshops, webinars, and community events to
            take the next step in your financial journey.</p>
          <div class="events-tabs">
            <button class="events-tab active" onclick="switchEventsTab('upcoming')">📅 Upcoming Events</button>
            <button class="events-tab" onclick="switchEventsTab('past')">📋 Past Events</button>
          </div>
        </div>
        <div id="events-upcoming" class="events-panel active"></div>
        <div id="events-past" class="events-panel"></div>
        <p id="events-empty"
          style="display:none;text-align:center;color:var(--text-muted);padding:40px 0;font-size:0.95rem;">No events to
          display in this category yet.</p>
      </div>
    </section>
    <script>
      const eventsData = [
        { title: "Free Retirement Planning Webinar", date: "2025-03-15", time: "6:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Learn how to build a secure retirement plan with tax-efficient strategies and smart investment allocation for long-term growth." },
        { title: "Tax-Saving Strategies Workshop", date: "2025-04-02", time: "7:00 PM PST", location: "San Jose, CA", price: "Free", description: "Discover proven methods to reduce tax liability, maximize deductions, and keep more of your hard-earned money legally." },
        { title: "College Funding Seminar for Parents", date: "2025-04-20", time: "5:30 PM PST", location: "Online (Zoom)", price: "Free", description: "Plan ahead for your child's education with 529 plans, scholarships, and smart savings strategies that grow over time." },
        { title: "Life Insurance Awareness Session", date: "2025-02-10", time: "6:30 PM PST", location: "Fremont, CA", price: "Free", description: "An interactive session covering term vs. permanent life insurance, how to choose the right coverage, and building wealth through insurance.", attendees: "85+", recapLink: "#" },
        { title: "2025 Financial Planning Kickoff", date: "2025-01-22", time: "7:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Started the year strong with a comprehensive look at market trends, investment opportunities, and goal-setting frameworks for 2025.", attendees: "120+", recapLink: "#" },
        { title: "Year-End Tax Optimization Workshop", date: "2024-12-05", time: "6:00 PM PST", location: "San Jose, CA", price: "Free", description: "Helped families optimize their year-end tax positions with last-minute strategies for deductions, contributions, and charitable giving.", attendees: "95+", recapLink: "#" }
      ];

      let sliderIntervals = {};
      function getVisibleCount() { return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3; }

      function buildCard(ev, isPast) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const d = new Date(ev.date), day = String(d.getDate()).padStart(2, '0'), mon = months[d.getMonth()];
        const meta = isPast ? \`<span>👥 \${ev.attendees || 'N/A'} Attendees</span><span>📍 \${ev.location}</span>\` : \`<span>🕐 \${ev.time}</span><span>📍 \${ev.location}</span><span>🎟️ \${ev.price || 'Free'}</span>\`;
        const btn = isPast ? \`<a href="\${ev.recapLink || '#'}" class="event-btn event-btn-recap">View Recap →</a>\` : \`<a href="#" class="event-btn event-btn-register" onclick="Calendly.initPopupWidget({url:'https://calendly.com/webserviesbygupta/30min'});return false;">Register Now →</a>\`;
        const badge = isPast ? \`<span class="event-badge-status badge-completed">✓ Completed</span>\` : \`<span class="event-badge-status badge-upcoming">● Upcoming</span>\`;
        return \`<div class="events-slide"><div class="event-card"><div class="event-card-top"><div class="event-date-badge"><span class="eday">\${day}</span><span class="emonth">\${mon}</span></div><h4>\${ev.title}</h4></div><div class="event-card-body">\${badge}<p>\${ev.description}</p><div class="event-meta">\${meta}</div>\${btn}</div></div></div>\`;
      }

      function buildSlider(panelId, events, isPast) {
        const panel = document.getElementById(panelId);
        if (!events.length) { panel.innerHTML = ''; return; }
        panel.innerHTML = \`<div class="events-slider-wrap"><div class="events-slider" data-index="0">\${events.map(e => buildCard(e, isPast)).join('')}</div><div class="events-nav-arrows"><button class="events-arrow" onclick="slideEvents('\${panelId}',-1)">‹</button><button class="events-arrow" onclick="slideEvents('\${panelId}',1)">›</button></div></div><div class="events-dots" id="\${panelId}-dots"></div>\`;
        updateDots(panelId); startAutoSlide(panelId);
        const wrap = panel.querySelector('.events-slider-wrap');
        wrap.addEventListener('mouseenter', () => clearInterval(sliderIntervals[panelId]));
        wrap.addEventListener('mouseleave', () => startAutoSlide(panelId));
      }

      function getState(id) {
        const s = document.querySelector('#' + id + ' .events-slider'); if (!s) return null;
        const v = getVisibleCount(), mx = Math.max(0, s.children.length - v);
        return { slider: s, max: mx, idx: parseInt(s.dataset.index || '0'), vis: v };
      }

      function slideEvents(id, dir) {
        const st = getState(id); if (!st) return;
        let ni = st.idx + dir;
        if (ni > st.max) ni = 0; if (ni < 0) ni = st.max;
        st.slider.dataset.index = ni;
        st.slider.style.transform = \`translateX(-\${(100 / st.vis) * ni}%)\`;
        updateDots(id);
      }

      function goToSlide(id, i) {
        const st = getState(id); if (!st) return;
        const ni = Math.min(i, st.max);
        st.slider.dataset.index = ni;
        st.slider.style.transform = \`translateX(-\${(100 / st.vis) * ni}%)\`;
        updateDots(id);
      }

      function updateDots(id) {
        const de = document.getElementById(id + '-dots'); if (!de) return;
        const st = getState(id); if (!st) return;
        const total = st.max + 1; let h = '';
        for (let i = 0; i < total; i++) h += \`<button class="events-dot\${i === st.idx ? ' active' : ''}" onclick="goToSlide('\${id}',\${i})"></button>\`;
        de.innerHTML = h;
      }

      function startAutoSlide(id) { clearInterval(sliderIntervals[id]); sliderIntervals[id] = setInterval(() => slideEvents(id, 1), 4000); }

      function renderEvents() {
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const up = eventsData.filter(e => new Date(e.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
        const past = eventsData.filter(e => new Date(e.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));
        buildSlider('events-upcoming', up, false);
        buildSlider('events-past', past, true);
        const tabs = document.querySelectorAll('.events-tab');
        tabs[0].textContent = \`📅 Upcoming Events (\${up.length})\`;
        tabs[0].textContent = \`📅 Upcoming Events (\${up.length})\`;
        tabs[1].textContent = \`📋 Past Events (\${past.length})\`;
      }

      function switchEventsTab(tab) {
        document.querySelectorAll('.events-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.events-panel').forEach(p => p.classList.remove('active'));
        Object.keys(sliderIntervals).forEach(k => clearInterval(sliderIntervals[k]));
        const empty = document.getElementById('events-empty');
        if (tab === 'upcoming') {
          document.querySelectorAll('.events-tab')[0].classList.add('active');
          const p = document.getElementById('events-upcoming'); p.classList.add('active');
          empty.style.display = p.children.length === 0 ? 'block' : 'none';
          startAutoSlide('events-upcoming');
        } else {
          document.querySelectorAll('.events-tab')[1].classList.add('active');
          const p = document.getElementById('events-past'); p.classList.add('active');
          empty.style.display = p.children.length === 0 ? 'block' : 'none';
          startAutoSlide('events-past');
        }
      }

      document.addEventListener('DOMContentLoaded', renderEvents);
      window.addEventListener('resize', () => {
        document.querySelectorAll('.events-slider').forEach(s => { s.dataset.index = '0'; s.style.transform = 'translateX(0)'; });
        ['events-upcoming', 'events-past'].forEach(id => updateDots(id));
      });
    </script>






    <!-- ══════════════════════════════
     BUSINESS OPPORTUNITY
══════════════════════════════ -->
    <section class="opp-section" id="opportunity">
      <div class="container">
        <div class="opp-inner">
          <div class="opp-text reveal">
            <span class="section-label">Opportunity</span>
            <h2>Looking for a Business &amp; Career Opportunity?</h2>
            <p>Join our growing network of financial professionals. We provide world-class training, proven systems, and
              a proven path to financial independence.</p>
            <div class="opp-perks">
              <div class="opp-perk">
                <div class="opp-perk-icon">✓</div>Full training &amp; licensing support
              </div>
              <div class="opp-perk">
                <div class="opp-perk-icon">✓</div>Flexible part-time or full-time
              </div>
              <div class="opp-perk">
                <div class="opp-perk-icon">✓</div>Competitive commissions &amp; bonuses
              </div>
              <div class="opp-perk">
                <div class="opp-perk-icon">✓</div>Work from anywhere in the USA
              </div>
              <div class="opp-perk">
                <div class="opp-perk-icon">✓</div>Mentorship from top producers
              </div>
            </div>
            <a href="/Entrepreneurship/6-steps-to-financial-freedom" class="btn btn-primary">Learn About the 6 Steps
              →</a>
          </div>
          <div class="reveal reveal-delay-2">
            <div class="opp-card">
              <h3>Get In Touch Today</h3>
              <form id="contact-form" onsubmit="handleSubmit(event)">
                <div class="opp-form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div>
                    <label>First Name *</label>
                    <input type="text" name="first_name" required placeholder="First name" />
                  </div>
                  <div>
                    <label>Last Name *</label>
                    <input type="text" name="last_name" required placeholder="Last name" />
                  </div>
                </div>
                <div class="opp-form-group">
                  <label>Email Address *</label>
                  <input type="email" name="user_email" required placeholder="your@email.com" />
                </div>
                <div class="opp-form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" />
                </div>
                <div class="opp-form-group">
                  <label>Service of Interest</label>
                  <select name="service">
                    <option value="">— Select a service —</option>
                    <option>Investment Planning</option>
                    <option>Living Will &amp; Trust</option>
                    <option>Tax Savings</option>
                    <option>Retirement Planning</option>
                    <option>Kids College Fund</option>
                    <option>Life Insurance</option>
                    <option>6 Steps to Financial Freedom</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div class="opp-form-group">
                  <label>Your Message *</label>
                  <textarea name="message" required placeholder="Tell us about your goals..."
                    style="width: 100%; padding: 12px; border-radius: 10px; border: 1.5px solid var(--border); background: var(--bg-light); color: var(--text-dark); outline: none; transition: 0.2s; font-family: 'Inter', sans-serif; resize: vertical; min-height: 100px;"></textarea>
                </div>
                <button type="submit" class="opp-submit form-submit">Send Message →</button>
              </form>
              <div class="form-success" id="form-success"
                style="display: none; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 10px; padding: 20px; text-align: center; color: #166534; font-weight: 600; margin-top: 15px;">
                ✅ Thank you! Your message has been sent. We'll reach out within 24 hours.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  ` }} />
    <ScrollAnimator />
    </>
  );
}
