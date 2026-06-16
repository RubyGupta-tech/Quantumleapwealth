import "./photos.css";

export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `



        <!-- HERO -->

        <section class="page-hero">

            <div class="container">

                <div class="page-hero-inner">

                    <div class="breadcrumb"><a href="/">Home</a><span>›</span><span
                            style="color:rgba(255,255,255,0.45)">Activities</span><span>›</span><span
                            style="color:var(--accent-light)">Photos</span></div>

                    <div class="page-hero-badge">📸 Activities</div>

                    <h1>Our <span class="highlight">Photo Gallery</span></h1>

                    <p class="page-hero-sub">Moments captured from our events, seminars, community activities, and

                        celebrations across California.</p>

                </div>

            </div>

        </section>



        <!-- ACTIVITY TABS -->

        <nav class="activities-tabs">

            <div class="activities-tabs-inner">

                <a href="/Activities/Photos" class="act-tab active">📸 Photos</a>

                <a href="/Activities/videos" class="act-tab">🎥 Videos</a>

                <a href="/Activities/blogs" class="act-tab">✍️ Blog</a>

            </div>

        </nav>



        <!-- FILTER BAR -->

        <div class="filter-bar">

            <div class="container">

                <div class="filter-bar-inner">

                    <span class="filter-label">Filter By:</span>

                    <div class="filter-tabs">

                        <button class="filter-btn active" onclick="filterGallery('all',this)">All Photos</button>

                        <button class="filter-btn" onclick="filterGallery('events',this)">Events</button>

                        <button class="filter-btn" onclick="filterGallery('seminars',this)">Seminars</button>

                        <button class="filter-btn" onclick="filterGallery('community',this)">Community</button>

                        <button class="filter-btn" onclick="filterGallery('team',this)">Team</button>

                        <button class="filter-btn" onclick="filterGallery('topgun',this)">Top Gun 2026</button>

                    </div>

                    <span class="filter-count" id="photo-count">216 Photos Found</span>

                </div>

            </div>

        </div>



        <!-- GALLERY -->

        <section class="gallery-section">

            <div class="container">



                <!-- Placeholder grid — replace each .gallery-card-inner with <img src="..."> when client sends photos -->

                                <div class="gallery-grid" id="gallery-grid">
                    <!-- Events -->
                    <div class="gallery-card tall" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0010.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Success Seminar</span></div>
                    </div>
                    <div class="gallery-card" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241018_202837875.RAW-01.COVER.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Financial Workshop</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/20250510_210602.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Community Wealth Building</span></div>
                    </div>
                    <div class="gallery-card" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_021255679.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Our Dedicated Team</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0027.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Networking Session</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241018_210126202.RAW-01.COVER.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Investing Basics</span></div>
                    </div>
                    <div class="gallery-card" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/20250511_144210.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Local Engagement</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0031.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Awards Night</span></div>
                    </div>
                    <div class="gallery-card" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_003604704.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Client Success Dinner</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241018_210752030.RAW-01.COVER.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Advanced Wealth Strategies</span></div>
                    </div>
                    <div class="gallery-card" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/20250511_144212.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Community Celebration</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0071.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Business Orientation</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241018_213058671.RAW-01.MP.COVER.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Wealth Mastery Series</span></div>
                    </div>
                    <div class="gallery-card" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_033750926.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Team Collaboration</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0090.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Annual Conference</span></div>
                    </div>
                    <div class="gallery-card" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241019_200342404.RAW-01.COVER.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Giving Back</span></div>
                    </div>
                    <div class="gallery-card" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241019_200406366.RAW-01.MP.COVER.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Retirement Planning 101</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0143.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Incentive Trip</span></div>
                    </div>
                    <div class="gallery-card" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_035039590.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Team Building</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241020_013826418.RAW-01.COVER.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Youth Financial Literacy</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0149.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Leadership Summit</span></div>
                    </div>
                    <div class="gallery-card" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241020_034006286.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Tax Efficiency Seminar</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_175327140.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Partner Appreciation</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241018-WA0167.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Gala Dinner</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="community">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241020_153014536.jpg" alt="Community"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Community Support</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241019-WA0015.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Morning briefing</span></div>
                    </div>
                    <div class="gallery-card" data-category="seminars">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20241021_015830976.MP.jpg" alt="Seminar"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Asset Protection Class</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="team">
                        <div class="gallery-card-inner"><img src="/images/gellery/PXL_20250511_175423137.jpg" alt="Team"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Our Success Family</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241019-WA0057.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Special Event</span></div>
                    </div>
                    <div class="gallery-card" data-category="events">
                        <div class="gallery-card-inner"><img src="/images/gellery/IMG-20241019-WA0097.jpg" alt="Event"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Final Farewell</span></div>
                    </div>
                
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1513.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1517.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1520.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1529.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1533.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1536.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1542.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1565.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1567.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1595.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/GC4A1703.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18154.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18166.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18167.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18198.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18203.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18204.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18206.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18208.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18210.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18213.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18215.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18218.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18219.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18222.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18231.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18243.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18255.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18296.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18299.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18306.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18341.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18343.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18346.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18348.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card tall" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW18352.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19211.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19276.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19282.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19284.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card wide" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19287.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                    <div class="gallery-card" data-category="topgun">
                        <div class="gallery-card-inner"><img src="/images/gellery/2026 Top Gun/LPW19292.jpg" alt="Top Gun 2026"></div>
                        <div class="gallery-card-overlay"><span class="gallery-overlay-text">Top Gun 2026</span></div>
                    </div>
                </div><!-- /gallery-grid -->



                <!-- Upload prompt -->

                <div class="upload-cta">

                    <div class="upload-cta-icon">🖼️</div>

                    <h3>More Photos Coming Soon!</h3>

                    <p>We're constantly adding new memories. Check back often — or share your own photos with us to

                        feature here!</p>

                    <a href="/contact" class="btn btn-primary">Share Your Photos With Us</a>

                </div>



            </div>

        </section>



        <!-- CTA -->

        <section class="photos-cta">

            <div class="container">

                <div class="photos-cta-inner">

                    <h2>Ready to Be Part of Our Community?</h2>

                    <p>Join hundreds of California families building wealth together. Book a FREE consultation and take

                        your first step today.</p>

                    <div class="photos-cta-btns">

                        <a href="#"
                            onclick="Calendly.initPopupWidget({url:'https://calendly.com/quantumleapwealth/30min'});return false;"
                            class="btn btn-primary">📅 Book Free Appointment</a>

                        <a href="/contact" class="btn btn-outline-white">Contact Us</a>

                    </div>

                </div>

            </div>

        </section>



        <script>
            function filterGallery(category, btn) {
                const items = document.querySelectorAll('.gallery-card');
                const buttons = document.querySelectorAll('.filter-btn');
                let count = 0;

                // Update buttons
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter items
                items.forEach(item => {
                    const itemCat = item.getAttribute('data-category');
                    if (category === 'all' || itemCat === category) {
                        item.style.display = 'block';
                        count++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Update count
                document.getElementById('photo-count').textContent = count + ' Photos Found';
            }
        </script>
    ` }} />
  );
}
