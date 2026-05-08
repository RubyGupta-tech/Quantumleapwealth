export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `



        <!-- HERO -->

        <section class="page-hero">

            <div class="container">

                <div class="page-hero-inner">

                    <div class="breadcrumb"><a href="../../index.html">Home</a><span>›</span><span
                            style="color:rgba(255,255,255,0.45)">Activities</span><span>›</span><span
                            style="color:var(--accent-light)">Videos</span></div>

                    <div class="page-hero-badge">🎥 Video Gallery</div>

                    <h1>Watch Our <span class="highlight">Videos</span></h1>

                    <p class="page-hero-sub">Event highlights, financial tips, seminar recordings, and team updates from

                        Quantum Leap Wealth California.</p>

                </div>

            </div>

        </section>



        <!-- ACTIVITY TABS -->

        <nav class="activities-tabs">

            <div class="activities-tabs-inner">

                <a href="Photos.html" class="act-tab">📸 Photos</a>

                <a href="videos.html" class="act-tab active">🎥 Videos</a>

                <a href="blogs.html" class="act-tab">✍️ Blog</a>

            </div>

        </nav>



        <!-- FILTER -->

        <div class="filter-bar">

            <div class="container">

                <div class="filter-bar-inner">

                    <span class="filter-label">Filter:</span>

                    <div class="filter-tabs">

                        <button class="filter-btn active" onclick="filterVideos('all',this)">All Videos</button>

                        <button class="filter-btn" onclick="filterVideos('events',this)">Events</button>

                        <button class="filter-btn" onclick="filterVideos('seminars',this)">Seminars</button>

                        <button class="filter-btn" onclick="filterVideos('tips',this)">Financial Tips</button>

                        <button class="filter-btn" onclick="filterVideos('team',this)">Team</button>

                    </div>

                </div>

            </div>

        </div>



        <!-- VIDEOS -->

        <section class="videos-section">

            <div class="container">



                <!-- Featured video placeholder -->

                <!-- To embed a real YouTube video, replace the .video-featured-thumb div with:

         <div class="yt-embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe></div> -->

                <div class="video-featured reveal" data-category="events">

                    <div class="video-featured-thumb">

                        <div class="play-btn">▶</div>

                        <span class="coming-badge">Coming Soon</span>

                    </div>

                    <div class="video-featured-body">

                        <div class="video-featured-info">

                            <span class="video-tag">Featured · Event Highlight</span>

                            <div class="video-featured-title">Quantum Leap Wealth Annual Community Seminar 2025</div>

                            <p class="video-featured-desc">A full recording of our flagship financial planning seminar —

                                covering investment strategies, retirement planning, and wealth-building frameworks for

                                California families.</p>

                            <div class="video-meta"><span>📅 Coming soon</span><span>⏱ ~45 min</span><span>🎥 HD</span>

                            </div>

                        </div>

                    </div>

                </div>



                <!-- Video Grid -->

                <div class="video-grid" id="video-grid">



                    <div class="video-card reveal" data-category="tips">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Financial Tip</span>

                            <div class="video-card-title">5 Money Habits That Build Real Wealth</div>

                            <p class="video-card-desc">Simple daily habits that compound into massive long-term

                                financial gains.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~10

                                    min</span></div>

                        </div>

                    </div>



                    <div class="video-card reveal reveal-delay-1" data-category="seminars">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Seminar</span>

                            <div class="video-card-title">Understanding Life Insurance — Full Seminar</div>

                            <p class="video-card-desc">A complete breakdown of term vs. whole life insurance for

                                families.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~30

                                    min</span></div>

                        </div>

                    </div>



                    <div class="video-card reveal reveal-delay-2" data-category="tips">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Financial Tip</span>

                            <div class="video-card-title">How to Start Investing With \$500</div>

                            <p class="video-card-desc">Beginner-friendly guide to getting started in the stock market on

                                a budget.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~8

                                    min</span></div>

                        </div>

                    </div>



                    <div class="video-card reveal" data-category="events">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Event</span>

                            <div class="video-card-title">Community Financial Freedom Workshop Recap</div>

                            <p class="video-card-desc">Highlights from our community wealth-building workshop in San

                                Jose.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~15

                                    min</span></div>

                        </div>

                    </div>



                    <div class="video-card reveal reveal-delay-1" data-category="seminars">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Seminar</span>

                            <div class="video-card-title">Retirement Planning at Every Age</div>

                            <p class="video-card-desc">What to do in your 30s, 40s, and 50s to ensure a comfortable

                                retirement.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~25

                                    min</span></div>

                        </div>

                    </div>



                    <div class="video-card reveal reveal-delay-2" data-category="team">

                        <div class="video-card-thumb">

                            <div class="play-btn-sm">▶</div>

                            <span class="coming-badge">Soon</span>

                        </div>

                        <div class="video-card-body">

                            <span class="video-tag">Team</span>

                            <div class="video-card-title">Meet Our Team — Who We Are &amp; Why We Do This</div>

                            <p class="video-card-desc">Prasad and the Quantum Leap Wealth team share their mission and

                                story.</p>

                            <div class="video-card-meta"><span>📅 Coming soon</span><span class="video-duration">~6

                                    min</span></div>

                        </div>

                    </div>



                </div><!-- /video-grid -->



                <!-- Coming strip -->

                <div class="videos-coming-strip">

                    <div class="videos-coming-strip-icon">🎬</div>

                    <h3>Videos Coming Soon!</h3>

                    <p>We're preparing event recordings, financial tips, and seminar content. Share your YouTube or

                        video link with us and we'll add it to the gallery instantly!</p>

                    <a href="../../contact/contact.html" class="btn btn-primary">Share a Video Link</a>

                </div>



            </div>

        </section>



        <!-- CTA -->

        <section class="videos-cta">

            <div class="container">

                <div class="videos-cta-inner">

                    <h2>Ready to Learn More? Let's Talk!</h2>

                    <p>Our Licensed Financial Professionals are available 24/7. Book a FREE 30-minute consultation

                        today.</p>

                    <div class="videos-cta-btns">

                        <a href="#"
                            onclick="Calendly.initPopupWidget({url:'https://calendly.com/webserviesbygupta/30min'});return false;"
                            class="btn btn-primary">📅 Book Free Appointment</a>

                        <a href="../../contact/contact.html" class="btn btn-outline-white">Contact Us</a>

                    </div>

                </div>

            </div>

        </section>



    ` }} />
  );
}
