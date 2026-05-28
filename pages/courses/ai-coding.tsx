import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

export default function AiFirstCoding() {
  return (
    <>
      <Head>
        <title>AI-First Software Development for Kids — Strive</title>
        <meta name="description" content="Build real apps with professional AI tools. Strive's advanced coding course for students aged 10–16 — 1-on-1, live, online. Deploy a full-stack product by the end." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="hero-tag">Advanced Track · Ages 10–16</div>
          <h1>
            AI-First<br />
            <span className="gradient-text">Software Development</span>
          </h1>
          <p className="hero-sub">Build real apps the way professional developers do. AI-Assisted.</p>
          <div className="hero-actions">
            <a href="#trial" className="btn-primary">Book a Free Trial</a>
            <a href="#curriculum" className="btn-outline-white">See the Curriculum</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">7</span>
              <span className="hero-stat-label">Course Units</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">1-on-1</span>
              <span className="hero-stat-label">Live Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">10–16</span>
              <span className="hero-stat-label">Age Range</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">Live</span>
              <span className="hero-stat-label">Deployed Product</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* WHAT IS IT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">What is this course?</span>
              <h2 className="section-title">
                Industry-leading tools.<br />
                Real software.<br />
                AI assistance.
              </h2>
              <p className="section-lead">
                AI-First Software Development is Strive&apos;s advanced course for students aged 10 to 16. Students learn to build real websites and web apps by working with AI tools the way professional software engineers do today.
              </p>
            </div>
            <aside className="highlight-box">
              <p>This is not <span className="em">a course about typing prompts into ChatGPT.</span></p>
              <p>Students read and edit code, set up professional developer tools, connect to real databases, and ship working products to the internet.</p>
              <p>AI is the assistant. <span className="em">The student is the engineer.</span></p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                By the end of the course, your child will have built and deployed a complete web application that can accept real users and payments.
              </p>
            </aside>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Who it&apos;s for</span>
            <h2 className="section-title">Is this the right course for my child?</h2>
            <div className="fit-grid">
              <article className="fit-card good">
                <h3>Good fit if your child...</h3>
                <ul className="fit-list">
                  <li>Has completed Strive&apos;s coding fundamentals track, or has prior coding experience</li>
                  <li>Is aged 10 to 16</li>
                  <li>Wants to build real products, not just learn theory</li>
                  <li>Is interested in how apps, websites, and AI tools actually work underneath</li>
                </ul>
              </article>
              <article className="fit-card bad">
                <h3>Consider starting elsewhere if...</h3>
                <ul className="fit-list">
                  <li>Your child is completely new to coding</li>
                  <li>They haven&apos;t completed Strive&apos;s coding fundamentals track (Units 1–7)</li>
                  <li>They&apos;re not yet comfortable reading code</li>
                </ul>
                <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-dark)' }}>
                  New to coding?{' '}
                  <a href="#" style={{ color: 'var(--orange-100)', fontWeight: 600, textDecoration: 'none' }}>
                    Start with our fundamentals track →
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHY CODE */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">The bigger picture</span>
              <h2 className="section-title">Why learn to code in an AI world?</h2>
              <p className="section-lead">This is the question every parent is asking right now.</p>
            </div>
            <div>
              <div className="why-body">
                <p>The honest answer: coding is not about memorising syntax. It&apos;s about learning to think precisely, break problems into steps, and understand how systems work.</p>
                <blockquote className="callout">
                  &ldquo;AI can write code. It cannot yet decide what to build, catch its own mistakes, or know when the output is wrong.&rdquo;
                </blockquote>
                <p>Students who understand what&apos;s happening underneath AI get dramatically better results from it. They write better prompts because they understand what they&apos;re asking for. They spot errors because they can read the output. They build things that actually work because they understand the structure.</p>
                <p>We don&apos;t teach children math so they can compete with calculators. We teach it because the thinking it builds makes them more capable in every area of life. Coding with AI works the same way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT SPOTLIGHT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Student spotlight</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>What students actually build</h2>
            <article className="spotlight-card">
              <div>
                <h3>The Dark Ages</h3>
                <p>
                  Matias spent two years as a Strive student. He loved video games and started coding because he wanted to make his own. By the end of his time with Strive, he had built{' '}
                  <strong style={{ color: 'white' }}>The Dark Ages</strong>{' '}
                  — a Minecraft-inspired, AI-assisted browser game built with JavaScript, React, and Next.js.
                </p>
                <p>
                  He designed the game logic, used AI to develop the visuals and test new ideas, and deployed it live to the internet. Matias went from spending hours{' '}
                  <em>playing</em> games to spending hours <em>building</em> them.
                </p>
                <div className="spotlight-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">AI-assisted</span>
                  <span className="tag">Live on the internet</span>
                </div>
                <a
                  href="https://v0-dark-ages-game.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                    <path d="M3 2L13 8L3 14V2Z" fill="currentColor" />
                  </svg>
                  Play the game
                </a>
              </div>
              <aside className="spotlight-visual">
                <div className="spotlight-avatar">M</div>
                <p className="spotlight-name">Matias</p>
                <p className="spotlight-detail">Strive student<br />2 years</p>
              </aside>
            </article>
            <p style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-dark)', textAlign: 'center' }}>
              Students in AI Coding Unit 7 work toward the same outcome — a fully deployed product of their own, built around a real idea, with user accounts and payment integration.
            </p>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" style={{ background: 'white' }}>
          <div className="section-inner">
            <div className="curriculum-intro">
              <div>
                <span className="section-tag">The curriculum</span>
                <h2 className="section-title">The full course breakdown</h2>
                <p className="section-lead">Three introductory sessions and seven units. Each session builds on the last.</p>
              </div>
            </div>

            {/* Getting Started */}
            <div style={{ marginBottom: '32px' }}>
              <span className="gs-label">Getting Started — 3 Sessions</span>
              <div className="getting-started">
                <article className="gs-card">
                  <h3>Session A</h3>
                  <p className="session-name">Launch</p>
                  <p>Students build and deploy a live website in their very first class. It goes live on the internet. From the start, students learn to read what AI produces and question it — not just accept it.</p>
                </article>
                <article className="gs-card">
                  <h3>Session B</h3>
                  <p className="session-name">Debug</p>
                  <p>Students open real AI-generated code, read through it, and make targeted edits by hand. Students who can read and fix code become far more effective with AI than those who can only prompt it.</p>
                </article>
                <article className="gs-card">
                  <h3>Session C</h3>
                  <p className="session-name">Professional Tools</p>
                  <p>Students set up the same tools professional developers use — a local development environment, AI coding extensions, and the terminal commands used in real software teams.</p>
                </article>
              </div>
            </div>

            {/* Units */}
            <span className="gs-label">Units 1–7</span>
            <div className="units-grid">
              <article className="unit-card">
                <div className="unit-number">1</div>
                <h3>UI / UX Design</h3>
                <p>Students build reusable interface components and learn professional design frameworks. Understanding design terminology gives them precise control over AI output.</p>
                <div className="unit-skills">
                  <span className="skill-chip">React</span>
                  <span className="skill-chip">Tailwind CSS</span>
                  <span className="skill-chip">HTML</span>
                  <span className="skill-chip">UI Libraries</span>
                </div>
              </article>
              <article className="unit-card">
                <div className="unit-number">2</div>
                <h3>GitHub and APIs</h3>
                <p>Students learn version control and how to connect their apps to external services — integrating real data sources like weather feeds and deploying updates to live websites.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Git</span>
                  <span className="skill-chip">GitHub</span>
                  <span className="skill-chip">APIs</span>
                  <span className="skill-chip">Vercel</span>
                </div>
              </article>
              <article className="unit-card">
                <div className="unit-number">3</div>
                <h3>Databases</h3>
                <p>Students build apps that store real user data and manage accounts. This is where complexity increases significantly — and where students with coding foundations have a clear advantage.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Next.js DB</span>
                  <span className="skill-chip">Auth</span>
                  <span className="skill-chip">Backend</span>
                  <span className="skill-chip">Data I/O</span>
                </div>
              </article>
              <article className="unit-card">
                <div className="unit-number">4</div>
                <h3>Prompt Engineering</h3>
                <p>Students learn to use four different AI tools strategically, practice planning an application before building it, and set up automated tests to evaluate AI suggestions before using them.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Multi-tool AI</span>
                  <span className="skill-chip">Planning</span>
                  <span className="skill-chip">Testing</span>
                </div>
              </article>
              <article className="unit-card">
                <div className="unit-number">5</div>
                <h3>User Feedback</h3>
                <p>Students add real analytics to their products and use actual user behaviour data to improve them. They deploy to mobile and see how their design decisions affect real people.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Google Analytics</span>
                  <span className="skill-chip">PostHog</span>
                  <span className="skill-chip">Mobile</span>
                </div>
              </article>
              <article className="unit-card">
                <div className="unit-number">6</div>
                <h3>Critical Evaluation</h3>
                <p>Students learn to recognise when AI suggestions are wrong, insecure, or solving the wrong problem entirely. This unit covers security vulnerabilities AI commonly introduces and how to catch them.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Security</span>
                  <span className="skill-chip">Debugging</span>
                  <span className="skill-chip">Code Quality</span>
                </div>
              </article>
              <article className="unit-card unit-7">
                <div className="unit-number">7</div>
                <h3>Startup Project</h3>
                <p>Students build a complete, monetizable web product from their own idea. They conduct basic user research, design the product, build it, and create a simple launch plan. Stripe payment integration is included.</p>
                <div className="unit-skills">
                  <span className="skill-chip">Stripe</span>
                  <span className="skill-chip">User Research</span>
                  <span className="skill-chip">Full-Stack</span>
                  <span className="skill-chip">Launch</span>
                </div>
                <div className="unit-outcome">
                  What they build: A live, deployed web application with user accounts, a database, and payment processing. Portfolio-ready. University application-ready.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">How it compares</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>AI-First vs Traditional Coding</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Traditional Coding</th>
                    <th className="highlight-col" style={{ background: 'var(--accent-purple)' }}>AI-First Coding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Approach</td>
                    <td>Write every line from scratch</td>
                    <td className="highlight-col">Build with AI tools, read and edit the output</td>
                  </tr>
                  <tr>
                    <td>Pace</td>
                    <td>Slower, focused on deep fundamentals</td>
                    <td className="highlight-col">Faster to working products, still requires real understanding</td>
                  </tr>
                  <tr>
                    <td>What students ship</td>
                    <td>Smaller projects, strong technical foundations</td>
                    <td className="highlight-col">Full-stack web apps with databases and payments</td>
                  </tr>
                  <tr>
                    <td>Best for</td>
                    <td>Complete beginners building core skills</td>
                    <td className="highlight-col">Students with some experience who want to build real products</td>
                  </tr>
                  <tr>
                    <td>AI tools used</td>
                    <td>None</td>
                    <td className="highlight-col">4 professional AI coding assistants</td>
                  </tr>
                  <tr>
                    <td>End result</td>
                    <td>Strong foundation for any coding path</td>
                    <td className="highlight-col">A deployed product ready for portfolio or university application</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center' }}>
              Both tracks are available at Strive. Most students complete the coding fundamentals track before moving to AI-First.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-grid">
              <article className="faq-item">
                <h3>Does my child need to know how to code already?</h3>
                <p>We strongly recommend completing Strive&apos;s coding fundamentals track (Units 1 to 7) before starting AI-First. Students with equivalent experience from other courses can join directly. If you&apos;re unsure, book a trial class and we&apos;ll assess their level together.</p>
              </article>
              <article className="faq-item">
                <h3>What age group is this course for?</h3>
                <p>Students aged 10 to 16. Classes are online, so your child can join from anywhere in the world. We have a strong community of students in Singapore.</p>
              </article>
              <article className="faq-item">
                <h3>How are classes structured?</h3>
                <p>All classes are 1-on-1 with a Strive teacher. Each class is one hour. The teacher adjusts the pace to your child — there&apos;s no class to keep up with.</p>
              </article>
              <article className="faq-item">
                <h3>What does my child actually end up with?</h3>
                <p>A live, deployed web application they built themselves — with user accounts, a real database, and payment integration. They also receive a Strive certificate they can attach to school or university applications.</p>
              </article>
              <article className="faq-item">
                <h3>How is this different from other coding courses for kids?</h3>
                <p>Most coding courses for kids use simplified tools. Strive&apos;s AI-First course uses the same tools professional developers use: Next.js, React, GitHub, Vercel, and real AI coding assistants. Students finish with something they can actually show the world.</p>
              </article>
              <article className="faq-item">
                <h3>Can my child add this to their university application?</h3>
                <p>Yes. The certificate and the deployed project are both designed for this purpose. A working web application with real users is a stronger portfolio piece than most students applying to university can show.</p>
              </article>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: 'var(--bg-purple-tint)' }}>
          <div className="section-inner">
            <span className="section-tag">What parents say</span>
            <h2 className="section-title">Families who&apos;ve seen the difference</h2>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <blockquote className="testimonial-text">It&apos;s the only class where my kid is asking for more classes.</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
                <p className="testimonial-role">Singapore</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">The teachers are fantastic. They&apos;re more like mentors and friends than lecturers.</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
                <p className="testimonial-role">Singapore</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="trial">
          <h2>Start with a free trial class</h2>
          <p>
            Your child&apos;s first class is free. They&apos;ll build something in the session — not just talk about coding. After the class, you speak with us about next steps. No pressure to continue.
          </p>
          <a href={trialUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Book a Free Trial Class
          </a>
          <p className="cta-note">1-on-1 · Online · Ages 10–16</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Online coding school for students aged 8 to 16.</p>
          <p>1-on-1 classes in coding fundamentals and AI-First software development, taught live by experienced teachers.</p>
          <p style={{ marginTop: '20px', fontSize: '12px' }}>
            Classes are online and open to students worldwide. Strong community in Singapore.
          </p>
        </div>
      </footer>
    </>
  )
}
