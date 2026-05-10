import "./6steps.css";

export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `



        <!-- PAGE HERO -->

        <section class="page-hero">

            <div class="page-hero-glow"></div>

            <div class="container">

                <div class="page-hero-inner">

                    <div class="breadcrumb"><a href="/">Home</a><span>›</span><span
                            style="color:var(--text-muted)">Entrepreneurship</span><span>›</span><span
                            style="color:var(--primary)">6 Steps to Financial Freedom</span></div>

                    <div class="page-hero-badge">🚀 Entrepreneurship</div>

                    <h1>6 Steps to <span class="highlight">Financial Freedom</span></h1>

                    <p class="page-hero-sub">A proven, step-by-step framework to move from financial stress to total

                        financial independence — used by hundreds of Quantum Leap Wealth clients across California.</p>

                    <div style="display:flex;gap:16px;justify-content:flex-start;flex-wrap:wrap">

                        <a href="/contact" class="btn btn-primary">Book a Free Consultation</a>

                        <a href="#step-1" class="btn btn-outline" style="border-color: var(--primary); color: var(--primary);">Explore the Steps ↓</a>

                    </div>

                </div>

            </div>

        </section>



        <!-- INTRO STATS -->

        <!--<div class="intro-stats">

            <div class="intro-stat"><strong>500+</strong><span>Clients Served</span></div>

            <div class="intro-stat"><strong>6</strong><span>Proven Steps</span></div>

            <div class="intro-stat"><strong>15+</strong><span>Years Experience</span></div>

            <div class="intro-stat"><strong>FREE</strong><span>First Consultation</span></div>

        </div>-->



        <!-- STEPS SECTION -->

        <section class="steps-section">

            <div class="container">

                <div class="steps-intro">

                    <span class="section-label">The Framework</span>

                    <h2 class="section-title">Your Complete Roadmap to Financial Independence</h2>

                    <p>At Quantum Leap Wealth, we've refined a 6-step financial planning framework designed specifically

                        for working families who want to stop living paycheck to paycheck and start building real,

                        lasting wealth. Follow these steps in order — every one matters.</p>

                </div>



                <!-- STEP 1: INCREASE CASH FLOW -->

                <div class="step-block" id="step-1">

                    <div class="step-visual">
                        <img src="/images/6-Steps/cashflow.png" alt="Increase Cash Flow"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                    <div class="step-text">

                        <span class="step-tag">Step 01</span>

                        <h2>Increase Cash Flow</h2>

                        <p>Improving cash flow is an essential part of financial planning. We start by identifying

                            expenses that can be reduced, eliminated, or optimized — then we identify opportunities to

                            increase your revenue.</p>

                        <p>Most families are surprised to find hundreds of dollars per month that can be redirected from

                            wasteful spending toward wealth-building goals.</p>

                        <ul class="step-bullets">

                            <li>Identify and eliminate unnecessary recurring expenses</li>

                            <li>Optimize insurance, subscriptions, and service contracts</li>

                            <li>Find opportunities to increase household income</li>

                            <li>Create a monthly cash flow plan you can actually follow</li>

                        </ul>

                        <a href="/contact" class="step-link">Start your cash flow analysis →</a>

                    </div>

                </div>



                <div class="step-divider"></div>



                <!-- STEP 2: DEBT MANAGEMENT -->

                <div class="step-block reverse" id="step-2">

                    <div class="step-text">

                        <span class="step-tag">Step 02</span>

                        <h2>Debt Management</h2>

                        <p>High-interest debt is the single biggest obstacle to financial freedom. We work with you to

                            create a structured, sustainable plan to eliminate debt — starting with the most damaging

                            and ending with the last dollar owed.</p>

                        <p>We use proven methods (avalanche and snowball) to accelerate your debt payoff while

                            protecting your credit score and freeing up cash for the future.</p>

                        <ul class="step-bullets">

                            <li>Map out all debts: credit cards, auto loans, student loans, mortgages</li>

                            <li>Build a prioritized payoff strategy that saves you money on interest</li>

                            <li>Explore consolidation and refinancing options</li>

                            <li>Protect your credit score throughout the process</li>

                        </ul>

                        <a href="/contact" class="step-link">Create your debt elimination plan →</a>

                    </div>

                    <div class="step-visual">
                        <img src="/images/6-Steps/Debt.png" alt="Debt Management"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                </div>



                <div class="step-divider"></div>



                <!-- STEP 3: EMERGENCY FUND -->

                <div class="step-block" id="step-3">

                    <div class="step-visual">
                        <img src="/images/6-Steps/EmergencyFund.png" alt="Emergency Fund"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                    <div class="step-text">

                        <span class="step-tag">Step 03</span>

                        <h2>Emergency Fund</h2>

                        <p>To properly plan and be prepared for emergencies, 3–6 months of net income should be in

                            reserve and accessible in a bank account. Unfortunately, the only savings most people have

                            is in their 401(k) or IRA — which is subject to restrictions and early withdrawal penalties.

                        </p>

                        <p>A proper emergency fund is your first line of defense. It prevents a single crisis from

                            derailing your entire financial plan.</p>

                        <ul class="step-bullets">

                            <li>Target 3 months of expenses minimum (6 for self-employed)</li>

                            <li>Keep funds liquid — high-yield savings account, not retirement accounts</li>

                            <li>Automate contributions until the goal is reached</li>

                            <li>Replenish immediately after any emergency use</li>

                        </ul>

                        <a href="/contact" class="step-link">Build your safety net today →</a>

                    </div>

                </div>



                <div class="step-divider"></div>



                <!-- STEP 4: PROPER PROTECTION -->

                <div class="step-block reverse" id="step-4">

                    <div class="step-text">

                        <span class="step-tag">Step 04</span>

                        <h2>Proper Protection</h2>

                        <p>The majority of Americans do not have enough life insurance — nor do they have the right type

                            for their family's needs. Furthermore, as the cost of healthcare rises and we are living

                            longer, most people are not prepared for the costs associated with chronic, critical, or

                            terminal illness.</p>

                        <p>Proper protection means your family's financial future is secure no matter what happens —

                            illness, disability, or death.</p>

                        <ul class="step-bullets">

                            <li>Right-size your life insurance: term, whole, or universal</li>

                            <li>Plan for critical illness and disability income protection</li>

                            <li>Protect against long-term care costs in retirement</li>

                            <li>Review and update beneficiaries across all policies</li>

                        </ul>

                        <a href="/images/services//images/services/life-insurance" class="step-link">Explore life insurance

                            options →</a>

                    </div>

                    <div class="step-visual">
                        <img src="/images/6-Steps/proctation.png" alt="Proper Protection"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                </div>



                <div class="step-divider"></div>



                <!-- STEP 5: BUILD WEALTH -->

                <div class="step-block" id="step-5">

                    <div class="step-visual">
                        <img src="/images/6-Steps/BuildWealth.png" alt="Build Wealth"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                    <div class="step-text">

                        <span class="step-tag">Step 05</span>

                        <h2>Build Wealth</h2>

                        <p>Long-term savings must outpace inflation and minimize taxation in order to achieve financial

                            success. We educate clients on the many options available — and help them select the right

                            vehicles for their situation.</p>

                        <p>This is where compound interest becomes your greatest ally. Consistent, tax-smart investing

                            over time creates wealth that lasts generations.</p>

                        <ul class="step-bullets">

                            <li>Maximize tax-advantaged accounts (401k, IRA, Roth)</li>

                            <li>Build a diversified investment portfolio aligned to your goals</li>

                            <li>Create passive income streams through dividends and real estate</li>

                            <li>Use Indexed Universal Life (IUL) as a supplemental wealth tool</li>

                        </ul>

                        <a href="/images/services//images/services/investment-planning" class="step-link">Explore investment

                            planning →</a>

                    </div>

                </div>



                <div class="step-divider"></div>



                <!-- STEP 6: PRESERVE WEALTH -->

                <div class="step-block reverse" id="step-6">

                    <div class="step-text">

                        <span class="step-tag">Step 06</span>

                        <h2>Preserve Wealth</h2>

                        <p>A successful financial plan includes a strategy to reduce or eliminate estate taxes upon the

                            transfer of wealth from one generation to another. We use the tools and strategies of the

                            wealthy to help our clients keep their hard-earned money in the family.</p>

                        <p>Wealth preservation means your legacy outlasts you — that the assets you built benefit your

                            children, grandchildren, and causes you care about.</p>

                        <ul class="step-bullets">

                            <li>Create a Living Will and Trust to avoid probate</li>

                            <li>Minimize estate taxes through strategic gifting and trusts</li>

                            <li>Set up proper beneficiary designations across all accounts</li>

                            <li>Use life insurance as a tax-free wealth transfer vehicle</li>

                        </ul>

                        <a href="/images/services//images/services/living-will-trust" class="step-link">Explore Living Will &amp;

                            Trust planning →</a>

                    </div>

                    <div class="step-visual">
                        <img src="/images/6-Steps/Preserwealth.png" alt="Preserve Wealth"
                            style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
                    </div>

                </div>



            </div>

        </section>



        <!-- PARTNER CTA -->

        <section class="partner-cta">

            <div class="container">

                <div class="partner-cta-inner">

                    <h2>Partner with Quantum Leap Wealth. Build Your Future.</h2>

                    <p>Join a community of dedicated professionals making a difference in the world of finance. Start

                        building your future today — your first consultation is always free.</p>

                    <div class="partner-cta-btns">

                        <a href="/contact" class="btn btn-primary">Book an Appointment</a>

                        <a href="/contact" class="btn btn-outline-white">Explore Business
                            Opportunities</a>

                    </div>

                </div>

            </div>

        </section>



    ` }} />
  );
}
