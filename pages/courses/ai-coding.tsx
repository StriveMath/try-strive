import { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

const stories = [
  {
    id: 'matias',
    title: 'The Dark Ages',
    body: [
      'Matias spent two years as a Strive student. He loved video games and started coding because he wanted to make his own. By the end of his time with Strive, he had built The Dark Ages: a Minecraft-inspired, AI-assisted browser game built with JavaScript, React, and Next.js.',
      'He designed the game logic, used AI to develop the visuals and test new ideas, and deployed it live to the internet. Matias went from spending hours playing games to spending hours building them.',
    ],
    tags: ['JavaScript', 'React', 'Next.js', 'AI-assisted', 'Live on the internet'],
    avatar: 'M',
    name: 'Matias',
    detail: 'Strive student · 2 years',
    blogUrl: '/blog/from-gamer-to-game-creator-how-matias-built-his-own-ai-powered-world',
    gameUrl: 'https://v0-dark-ages-game.vercel.app/' as string | null,
    githubUrl: null as string | null,
  },
  {
    id: 'ethan',
    title: 'A Browser from Scratch',
    body: [
      'Ethan was 13 when he built a working web browser from scratch. Not a school project: a real browser built in Java using JCEF (Java Chromium Embedded Framework), Swing, and JavaFX, the same technology stack used in professional desktop applications.',
      'He planned the architecture first, used AI to generate code for the complex parts, and read every line before running it. The result is a fully themed, agentic browser with its own rendering engine.',
    ],
    tags: ['Java', 'JCEF', 'JavaFX', 'AI-assisted', 'Desktop app'],
    avatar: 'E',
    name: 'Ethan',
    detail: 'Strive student · Age 13',
    blogUrl: '/blog/ethan-built-a-browser-at-13',
    gameUrl: null as string | null,
    githubUrl: 'https://github.com/ingStudiosOfficial' as string | null,
  },
]

export default function AiFirstCoding() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -50) setActiveIndex(i => Math.min(stories.length - 1, i + 1))
    else if (dx > 50) setActiveIndex(i => Math.max(0, i - 1))
    touchStartX.current = null
  }

  return (
    <>
      <Head>
        <title>AI Coding for Kids | Strive Math</title>
        <meta name="description" content="Build real apps with professional AI tools. Strive's advanced AI coding course for students aged 10–16. 1-on-1, live, online. Deploy a full-stack product by the end." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="hero-tag">Advanced Track · Ages 10–16</div>
          <h1>
            AI <span className="gradient-text">Coding</span>
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
                AI Coding is Strive&apos;s advanced course for students aged 10 to 16. Students don&apos;t just write code with AI. They tackle the full challenges of software development: designing architecture, understanding security, debugging complex systems, and making real product decisions about what to build and why.
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
                <p>We don&apos;t teach children math so they can compete with calculators. We teach it because the thinking it builds makes them more capable in every area of life. We recommend learning the coding fundamentals first, before Coding with AI for the same reason.</p>
                <p>Coding with AI goes by different names: AI-first software development, AI-assisted coding, and others. The terminology is still settling because the field itself is moving fast. The tools students use in these classes evolve as the tools professionals use evolve: when a better AI coding assistant becomes available, we adopt it. What we teach isn&apos;t how to use one specific tool. It&apos;s how to evaluate, direct, and build on what AI produces, which transfers as the landscape changes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT SPOTLIGHT — carousel */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Student spotlight</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>What students actually build</h2>
            <div className="spotlight-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div className="spotlight-slide-wrap">
                <div className="spotlight-track-outer">
                  <div className="spotlight-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {stories.map((story) => (
                      <article className="spotlight-card" key={story.id}>
                        <div>
                          <h3>{story.title}</h3>
                          {story.body.map((para, i) => <p key={i}>{para}</p>)}
                          <div className="spotlight-tags">
                            {story.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                          </div>
                          <div className="spotlight-actions">
                            {story.gameUrl && (
                              <a href={story.gameUrl} target="_blank" rel="noopener noreferrer" className="play-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                                  <path d="M3 2L13 8L3 14V2Z" fill="currentColor" />
                                </svg>
                                Play the game
                              </a>
                            )}
                            {story.githubUrl && (
                              <a href={story.githubUrl} target="_blank" rel="noopener noreferrer" className="play-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                View GitHub
                              </a>
                            )}
                            <Link href={story.blogUrl} className="story-link">Read the full story →</Link>
                          </div>
                        </div>
                        <aside className="spotlight-visual">
                          <div className="spotlight-avatar">{story.avatar}</div>
                          <p className="spotlight-name">{story.name}</p>
                          <p className="spotlight-detail">{story.detail}</p>
                        </aside>
                      </article>
                    ))}
                  </div>
                </div>
                <button
                  className="carousel-nav-btn carousel-prev"
                  onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous story"
                >‹</button>
                <button
                  className="carousel-nav-btn carousel-next"
                  onClick={() => setActiveIndex(i => Math.min(stories.length - 1, i + 1))}
                  disabled={activeIndex === stories.length - 1}
                  aria-label="Next story"
                >›</button>
              </div>
              <div className="carousel-dots" role="tablist">
                {stories.map((story, i) => (
                  <button
                    key={story.id}
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`${story.name}'s story`}
                    className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>
            <p style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-dark)', textAlign: 'center' }}>
              Students in AI Coding Unit 7 work toward the same outcome: a fully deployed product of their own, built around a real idea, with user accounts and payment integration.
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
              <span className="gs-label">Getting Started: 3 Sessions</span>
              <div className="getting-started">
                <article className="gs-card">
                  <h3>Session A</h3>
                  <p className="session-name">Launch</p>
                  <p>Students build and deploy a live website in their very first class. It goes live on the internet. From the start, students learn to read what AI produces and question it, not just accept it.</p>
                </article>
                <article className="gs-card">
                  <h3>Session B</h3>
                  <p className="session-name">Debug</p>
                  <p>Students open real AI-generated code, read through it, and make targeted edits by hand. Students who can read and fix code become far more effective with AI than those who can only prompt it.</p>
                </article>
                <article className="gs-card">
                  <h3>Session C</h3>
                  <p className="session-name">Professional Tools</p>
                  <p>Students set up the same tools professional developers use: a local development environment, AI coding extensions, and the terminal commands used in real software teams.</p>
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
                <p>Students learn version control and how to connect their apps to external services, integrating real data sources like weather feeds and deploying updates to live websites.</p>
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
                <p>Students build apps that store real user data and manage accounts. This is where complexity increases significantly. Students with coding foundations have a clear advantage.</p>
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
            <h2 className="section-title" style={{ marginBottom: '36px' }}>AI Coding vs Traditional Coding</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Traditional Coding</th>
                    <th className="highlight-col" style={{ background: 'var(--accent-purple)' }}>AI Coding</th>
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
              Both tracks are available at Strive. Most students complete the coding fundamentals track before moving to AI Coding.
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
                <p>We strongly recommend completing Strive&apos;s coding fundamentals track (Units 1 to 7) before starting AI Coding. Students with equivalent experience from other courses can join directly. If you&apos;re unsure, book a trial class and we&apos;ll assess their level together.</p>
              </article>
              <article className="faq-item">
                <h3>What age group is this course for?</h3>
                <p>Students aged 10 to 16. Classes are online, so your child can join from anywhere in the world. We have a strong community of students in Singapore.</p>
              </article>
              <article className="faq-item">
                <h3>How are classes structured?</h3>
                <p>All classes are 1-on-1 with a Strive teacher. Each class is one hour. The teacher adjusts the pace to your child. There&apos;s no class to keep up with.</p>
              </article>
              <article className="faq-item">
                <h3>What does my child actually end up with?</h3>
                <p>A live, deployed web application they built themselves, with user accounts, a real database, and payment integration. They also receive a Strive certificate they can attach to school or university applications.</p>
              </article>
              <article className="faq-item">
                <h3>How is this different from other coding courses for kids?</h3>
                <p>Most coding courses for kids use simplified tools and stop at writing code. Strive&apos;s AI Coding course uses the same tools professional developers use (Next.js, React, GitHub, Vercel, real AI coding assistants) and covers the challenges that go beyond code: architecture decisions, security, debugging, and product thinking. Those tools also get updated as better ones emerge, so students are always working with what&apos;s current.</p>
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
            Your child&apos;s first class is free. They&apos;ll build something in the session, not just talk about coding. After the class, you speak with us about next steps. No pressure to continue.
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
          <p>1-on-1 classes in coding fundamentals and AI-assisted coding, taught live by experienced teachers.</p>
          <p style={{ marginTop: '20px', fontSize: '12px' }}>
            Classes are online and open to students worldwide. Strong community in Singapore.
          </p>
        </div>
      </footer>
    </>
  )
}
