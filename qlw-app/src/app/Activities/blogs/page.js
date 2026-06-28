"use client";
import { useEffect } from "react";
import "./blogs.css";

export default function Page() {
  useEffect(() => {
    // Scroll reveals
    const reveals = document.querySelectorAll('.reveal');
    
    // Safety check: if IntersectionObserver is not supported or slow, just show everything
    if (!window.IntersectionObserver) {
      reveals.forEach(el => el.classList.add('active'));
    } else {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      reveals.forEach(el => revealObserver.observe(el));
      
      // Fallback: Show all after 3 seconds if still not revealed
      setTimeout(() => {
        reveals.forEach(el => el.classList.add('active'));
      }, 3000);
    }

    // Calendly script loading
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

        <!-- HERO -->

        <section class="page-hero">
            <div class="container">
                <div class="page-hero-inner">
                    <div class="breadcrumb"><a href="/">Home</a><span>›</span><span style="color:var(--primary)">Media & Blog</span></div>
                    <div class="page-hero-badge">Media Insights</div>
                    <h1>Financial <span class="highlight">Insights</span></h1>
                    <p class="page-hero-sub">Read our latest wealth-building strategies, actionable financial tips, and community media updates from the experts.</p>
                </div>
            </div>
        </section>

        <!-- ACTIVITY TABS -->
        <nav class="activities-tabs">
            <div class="activities-tabs-inner">
                <a href="/Activities/Photos" class="act-tab">Photos</a>
                <a href="/Activities/videos" class="act-tab" style="display: none;">Videos</a>
                <a href="/Activities/blogs" class="act-tab active">Blog</a>
            </div>
        </nav>

        <!-- BLOG CONTENT -->
        <section class="blog-section">

                        <div class="container">

                            <div class="blog-layout">

                                <!-- Main Column -->

                                <div>

                                    <!-- Featured placeholder -->

                                    <div class="blog-featured reveal">
                                        <div class="blog-featured-img">
                                            <a href="/Activities/life-insurance-safety-net" style="width:100%; height:100%; display:block;">
                                                <img src="/images/life_insurance_hero.png" alt="Why Life Insurance Is Your Family's Safety Net" style="width:100%; height:450px; object-fit:cover;" />
                                            </a>
                                        </div>
                                        <div class="blog-featured-content">
                                            <div class="blog-tag">Featured Post</div>
                                            <h2 class="blog-featured-title">Why Life Insurance Is Your Family's Safety Net</h2>
                                            <p class="blog-featured-excerpt">Discover why life insurance is one of the most important financial foundations for your family's future, providing immediate protection and long-term peace of mind.</p>
                                            <div class="blog-featured-cta">
                                                <a href="/Activities/life-insurance-safety-net" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Coming soon strip -->

                                    <div class="blog-coming-strip">

                                        <div class="blog-coming-strip-icon" style="display: none;"></div>

                                        <h3>Articles Coming Soon!</h3>

                                        <p>Our team is working on insightful financial articles on investments,
                                            retirement planning,

                                            tax strategies, and more. Check back soon!</p>

                                        <button id="openModalBtn" class="btn btn-primary" style="border:none; cursor:pointer">Get Notified When We Post</button>

                                    </div>

                                    <!-- Placeholder post grid -->
                                    <div class="blog-grid" id="blogGrid">
                                        <div class="blog-card reveal" style="display:flex; flex-direction:column;">
                                            <div class="blog-card-img">
                                                <a href="/Activities/life-insurance-safety-net">
                                                    <img src="/images/life_insurance_hero.png" alt="Why Life Insurance Is Your Family's Safety Net - Quantum Leap Wealth" style="object-fit:cover; height:200px; width:100%;" />
                                                </a>
                                            </div>
                                            <div class="blog-card-content" style="flex-grow:1; display:flex; flex-direction:column; padding: 24px 24px 32px;">
                                                <div class="blog-card-meta" style="margin-bottom: 10px; font-size: 0.85rem; color: #666;">
                                                    <span>Mar 19, 2026</span>
                                                    <span>•</span>
                                                    <span>2 min read</span>
                                                </div>
                                                <h3 class="blog-card-title" style="margin-bottom: 12px; font-size: 1.25rem;">
                                                    <a href="/Activities/life-insurance-safety-net" style="text-decoration: none; color: inherit;">Why Life Insurance Is Your Family's Safety Net - Quantum Leap Wealth</a>
                                                </h3>
                                                <p class="blog-card-excerpt" style="margin-bottom: 20px; color: #555; line-height: 1.6;">Latest post from Quantum Leap Wealth.</p>
                                                <div style="margin-top:auto">
                                                    <a href="/Activities/life-insurance-safety-net" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-card reveal" style="display:flex; flex-direction:column;">
                                            <div class="blog-card-img">
                                                <a href="/Activities/retire-comfortably-before-60">
                                                    <img src="/images/retirement_hero.png" alt="How to Retire Comfortably Before 60 - Quantum Leap Wealth" style="object-fit:cover; height:200px; width:100%;" />
                                                </a>
                                            </div>
                                            <div class="blog-card-content" style="flex-grow:1; display:flex; flex-direction:column; padding: 24px 24px 32px;">
                                                <div class="blog-card-meta" style="margin-bottom: 10px; font-size: 0.85rem; color: #666;">
                                                    <span>Mar 19, 2026</span>
                                                    <span>•</span>
                                                    <span>2 min read</span>
                                                </div>
                                                <h3 class="blog-card-title" style="margin-bottom: 12px; font-size: 1.25rem;">
                                                    <a href="/Activities/retire-comfortably-before-60" style="text-decoration: none; color: inherit;">How to Retire Comfortably Before 60 - Quantum Leap Wealth</a>
                                                </h3>
                                                <p class="blog-card-excerpt" style="margin-bottom: 20px; color: #555; line-height: 1.6;">Here are three essential steps to position yourself for a comfortable early retirement....</p>
                                                <div style="margin-top:auto">
                                                    <a href="/Activities/retire-comfortably-before-60" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-card reveal" style="display:flex; flex-direction:column;">
                                            <div class="blog-card-img">
                                                <a href="/Activities/start-saving-college">
                                                    <img src="/images/college_saving_hero.png" alt="Start Saving for College When Your Child Is Born - Quantum Leap Wealth" style="object-fit:cover; height:200px; width:100%;" />
                                                </a>
                                            </div>
                                            <div class="blog-card-content" style="flex-grow:1; display:flex; flex-direction:column; padding: 24px 24px 32px;">
                                                <div class="blog-card-meta" style="margin-bottom: 10px; font-size: 0.85rem; color: #666;">
                                                    <span>Mar 19, 2026</span>
                                                    <span>•</span>
                                                    <span>2 min read</span>
                                                </div>
                                                <h3 class="blog-card-title" style="margin-bottom: 12px; font-size: 1.25rem;">
                                                    <a href="/Activities/start-saving-college" style="text-decoration: none; color: inherit;">Start Saving for College When Your Child Is Born - Quantum Leap Wealth</a>
                                                </h3>
                                                <p class="blog-card-excerpt" style="margin-bottom: 20px; color: #555; line-height: 1.6;">Latest post from Quantum Leap Wealth.</p>
                                                <div style="margin-top:auto">
                                                    <a href="/Activities/start-saving-college" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-card reveal" style="display:flex; flex-direction:column;">
                                            <div class="blog-card-img">
                                                <a href="/Activities/will-vs-trust">
                                                    <img src="/images/will_vs_trust_hero.png" alt="Will vs. Trust: What Do I Need? - Quantum Leap Wealth" style="object-fit:cover; height:200px; width:100%;" />
                                                </a>
                                            </div>
                                            <div class="blog-card-content" style="flex-grow:1; display:flex; flex-direction:column; padding: 24px 24px 32px;">
                                                <div class="blog-card-meta" style="margin-bottom: 10px; font-size: 0.85rem; color: #666;">
                                                    <span>Mar 19, 2026</span>
                                                    <span>•</span>
                                                    <span>2 min read</span>
                                                </div>
                                                <h3 class="blog-card-title" style="margin-bottom: 12px; font-size: 1.25rem;">
                                                    <a href="/Activities/will-vs-trust" style="text-decoration: none; color: inherit;">Will vs. Trust: What Do I Need? - Quantum Leap Wealth</a>
                                                </h3>
                                                <p class="blog-card-excerpt" style="margin-bottom: 20px; color: #555; line-height: 1.6;">Latest post from Quantum Leap Wealth.</p>
                                                <div style="margin-top:auto">
                                                    <a href="/Activities/will-vs-trust" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div><!-- /main col -->

                                <!-- Sidebar -->

                                <aside class="blog-sidebar">

                                    <!-- Search -->

                                    <div class="sidebar-card">

                                        <h3>Search Articles</h3>

                                        <div style="display:flex;gap:8px">

                                            <input type="text" id="blogSearchInput" placeholder="Search blog..."
                                                style="flex:1;padding:9px 12px;border:1px solid var(--border);border-radius:8px;font-size:0.83rem;outline:none" />

                                            <button id="blogSearchBtn"
                                                style="background:var(--accent);color:#fff;border:none;border-radius:8px;padding:9px 14px;cursor:pointer;font-weight:700">→</button>

                                        </div>

                                    </div>

                                    <!-- Topics -->

                                    <div class="sidebar-card">

                                        <h3>Topics</h3>

                                        <div class="sidebar-topics">

                                            <span class="topic-tag">Investment</span>

                                            <span class="topic-tag">Retirement</span>

                                            <span class="topic-tag">Insurance</span>

                                            <span class="topic-tag">Tax Strategy</span>

                                            <span class="topic-tag">Estate Planning</span>

                                            <span class="topic-tag">College Fund</span>

                                            <span class="topic-tag">Entrepreneurship</span>

                                            <span class="topic-tag">Wealth Building</span>

                                        </div>

                                    </div>

                                    <!-- CTA -->

                                    <div class="sidebar-cta">

                                        <h3>Free Consultation</h3>

                                        <p>Have questions? Our team is available 24/7 to guide your financial journey.
                                        </p>

                                        <a href="#"
                                            onclick="Calendly.initPopupWidget({url:'https://calendly.com/quantumleapwealth/30min'});return false;"
                                            class="btn-sm">Book Appointment</a>

                                    </div>

                                    <!-- Recent (placeholder) -->

                                    <div class="sidebar-card">
                                        <h3>Recent Posts</h3>
                                        <ul class="sidebar-recent" style="padding:0;margin:0">
                                            <li><a href="/Activities/life-insurance-safety-net">Why Life Insurance Is Your Family's Safety Net - Quantum Leap Wealth</a></li>
                                            <li><a href="/Activities/retire-comfortably-before-60">How to Retire Comfortably Before 60 - Quantum Leap Wealth</a></li>
                                            <li><a href="/Activities/start-saving-college">Start Saving for College When Your Child Is Born - Quantum Leap Wealth</a></li>
                                            <li><a href="/Activities/will-vs-trust">Will vs. Trust: What Do I Need? - Quantum Leap Wealth</a></li>
                                        </ul>
                                    </div>

                                </aside>

                            </div><!-- /blog-layout -->

                        </div>

                    </section>

                    <!-- CTA -->

                    <section class="blog-cta">

                        <div class="container">

                            <div class="blog-cta-inner">

                                <h2>Start Your Financial Freedom Journey Today</h2>

                                <p>Don't wait - book a FREE 30-minute consultation with one of our Licensed Financial
                                    Professionals
                                    now.</p>

                                <div class="blog-cta-btns">

                                    <a href="#"
                                        onclick="Calendly.initPopupWidget({url:'https://calendly.com/quantumleapwealth/30min'});return false;"
                                        class="btn btn-primary">Book Free Appointment</a>

                                    <a href="/contact" class="btn btn-outline-white">Contact Us</a>

                                </div>

                            </div>

                        </div>

                    </section>

    ` }} />
  );
}
