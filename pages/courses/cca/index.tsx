import Head from 'next/head'
import Nav from '@/components/Nav'

const contactEmail = 'pulkit@strivemath.com'

const curriculum = [
  { week: 1,  theme: 'Starting Our Coding Adventure',    learn: 'Discover the fun of making our own app.',                                              tech: 'Introduction to Python and basic algorithmic structures.' },
  { week: 2,  theme: 'Making Art with Code',             learn: 'Learn to draw cool stuff on the computer.',                                            tech: 'Utilising graphics libraries for dynamic rendering and animations.' },
  { week: 3,  theme: 'Finding Our Way on the Screen',    learn: 'Understand how to place our drawings.',                                                tech: 'Co-ordinate geometry and screen plotting.' },
  { week: 4,  theme: 'Storing Our Secrets',              learn: 'Learn about "storage boxes" in coding and organise your code.',                        tech: 'Introduction to variables and data encapsulation.' },
  { week: 5,  theme: 'Using Ready-Made Tools',           learn: 'Explore tools that coding gives us.',                                                  tech: "Exploration of Python's built-in functions and modules." },
  { week: 6,  theme: 'Practice Makes Perfect!',          learn: 'Get better with fun coding exercises.',                                                tech: 'Consolidating knowledge through code optimisation and debugging.' },
  { week: 7,  theme: 'Mixing and Matching Our Tools',    learn: 'Learn to combine our "storage boxes" and create new, fun results.',                    tech: 'Advanced variable operations and data structuring.' },
  { week: 8,  theme: 'Making Choices in Code',           learn: 'Uncover how to make our app decide things.',                                           tech: 'Introduction to logical operations and flow control mechanisms.' },
  { week: 9,  theme: 'What If? Making Code Decisions',   learn: 'Learn more about making decisions in your app and see it respond to different things.', tech: 'Conditional statements and if-else constructs.' },
  { week: 10, theme: 'Smart Choices with Code',          learn: 'Dive deeper into smart decision-making.',                                              tech: 'Advanced logical algorithms and complex decision-making structures.' },
  { week: 11, theme: 'Our Big Project',                  learn: 'Put everything we\'ve learned into one project.',                                      tech: 'Project management, algorithmic design, and code implementation.' },
]

export default function CCAIndex() {
  return (
    <>
      <Head>
        <title>STEM ECA for International Schools — Strive Math</title>
        <meta name="description" content="Weekly coding and math ECA programmes for international schools in Singapore. Strive supplies the teacher, curriculum, and platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="hero-tag">ECA · CCA · ASA · International Schools · Singapore</div>
          <h1>
            STEM ECA<br />
            <span className="gradient-text">for International Schools</span>
          </h1>
          <p className="hero-sub">
            Weekly coding and math classes at your school. Strive supplies the teacher, curriculum, and platform.
          </p>
          <div className="hero-actions">
            <a href={`mailto:${contactEmail}`} className="btn-primary">Get in Touch</a>
            <a href="#courses" className="btn-outline-white">See Courses</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Sign-up rate at partner schools</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">11</span>
              <span className="hero-stat-label">Schools running Strive programmes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">Ages 8–16</span>
              <span className="hero-stat-label">Students served</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">6</span>
              <span className="hero-stat-label">Course types available</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* WHAT IS IT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">What is it?</span>
              <h2 className="section-title">
                In-person coding classes.<br />
                At your school.
              </h2>
              <p className="section-lead">
                After-school enrichment coding and math programmes that run on-site as CCAs, ECAs, or ASAs. We supply the teacher, curriculum, and platform. Your school markets the programme and manages enrolment.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Classes are <span className="em">group-based</span> and follow a structured curriculum suited to the age groups your school serves.</p>
              <p>Students use our proprietary coding or math platform — the same one used in our private 1-on-1 sessions.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                We currently run programmes at schools including Dover Court International School and Middleton International School.
              </p>
            </aside>
          </div>
        </section>

        {/* PARTNER SCHOOLS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Our partner schools</span>
            <h2 className="section-title">Trusted by 11 international schools</h2>
            <p className="section-lead">
              Including Nexus International School, Dover Court International School, North London Collegiate School, Swiss School, and Middleton International School — with programmes consistently reaching full enrolment.
            </p>
            <div className="cca-school-stats">
              <div className="cca-school-stat">
                <div className="cca-school-stat-value">Popular</div>
                <div className="cca-school-stat-label">High sign-up rate at international schools like Dover Court, Middleton and other international schools</div>
              </div>
              <div className="cca-school-stat">
                <div className="cca-school-stat-value">Competitions</div>
                <div className="cca-school-stat-label">We host math and coding competitions with UWCSEA, ACS International &amp; more</div>
              </div>
              <div className="cca-school-stat">
                <div className="cca-school-stat-value">Zero setup</div>
                <div className="cca-school-stat-label">We bring the teacher, curriculum, and laptops</div>
              </div>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Courses</span>
            <h2 className="section-title">Six courses, each customisable<br />for your school&apos;s needs</h2>
            <p className="section-lead">Each course can be tailored to the age groups and interests of your students. No prior experience required.</p>
            <div className="cca-courses-grid">
              <div className="cca-course-card cca-course-featured">
                <div className="cca-course-icon">🤖</div>
                <span className="cca-popular-badge">★ Most Popular</span>
                <h3>Coding Fundamentals</h3>
                <p>Build real apps and projects using Python to build foundational skills for AI-Coding.</p>
              </div>
              <div className="cca-course-card">
                <div className="cca-course-icon">🎮</div>
                <h3>Game Development</h3>
                <p>Design and build playable games from scratch.</p>
              </div>
              <div className="cca-course-card">
                <div className="cca-course-icon">📏</div>
                <h3>Mathematics</h3>
                <p>Strengthen school maths with weekly sessions on curriculum topics, problem-solving strategies, and competition techniques.</p>
              </div>
              <div className="cca-course-card">
                <div className="cca-course-icon">🧠</div>
                <h3>AI Coding</h3>
                <p>Use AI tools and prompting to build smarter apps and automate real-world problems.</p>
              </div>
              <div className="cca-course-card">
                <div className="cca-course-icon">📐</div>
                <h3>Math through Code</h3>
                <p>Bring mathematical concepts to life through coding.</p>
              </div>
              <div className="cca-course-card">
                <div className="cca-course-icon">📊</div>
                <h3>Data Science</h3>
                <p>Analyse real datasets and build visualisations with Python.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Sample curriculum</span>
            <h2 className="section-title">An 11-week structured programme</h2>
            <p className="section-lead">Every course follows a clear week-by-week structure, building from fundamentals to a final student project.</p>
            <div className="table-wrap" style={{ marginTop: '40px' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '70px' }}>Week</th>
                    <th>Theme</th>
                    <th>What Students Learn</th>
                    <th>Technical Mastery</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.map(({ week, theme, learn, tech }) => (
                    <tr key={week}>
                      <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-purple)' }}>W{week}</td>
                      <td style={{ fontWeight: 600 }}>{theme}</td>
                      <td>{learn}</td>
                      <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={{ background: 'var(--bg-purple-tint)' }}>
          <div className="section-inner">
            <span className="section-tag">Tangible outcomes</span>
            <h2 className="section-title">Every student leaves with something real</h2>
            <p className="section-lead">Students build a portfolio of work and earn a certificate — useful for university applications and beyond.</p>
            <div className="platform-grid" style={{ marginTop: '40px' }}>
              <article className="platform-card">
                <div className="platform-icon">🎓</div>
                <h3>Course Completion Certificate</h3>
                <p>Every student who completes the programme receives a personalised Strive certificate, signed by our teaching team.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">💼</div>
                <h3>University-Ready Coding Portfolio</h3>
                <p>Students build a portfolio of real projects on our platform — visual, shareable, and valuable for university applications.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🏆</div>
                <h3>Biannual Competitions</h3>
                <p>Students can enter our inter-school coding competitions, with participation from UWCSEA East, ACS International, and more.</p>
              </article>
            </div>
          </div>
        </section>

        {/* LOGISTICS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Logistics</span>
            <h2 className="section-title">Simple to set up, easy to run</h2>
            <p className="section-lead">We handle the hard parts. Your school markets the programme to families and manages sign-ups.</p>
            <div className="platform-grid" style={{ marginTop: '40px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <article className="platform-card">
                <div className="platform-icon">📅</div>
                <h3>Once a week, after school</h3>
                <p>Weekly sessions hosted at your school. Day and time are flexible to fit your timetable.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">💻</div>
                <h3>Laptops provided</h3>
                <p>No equipment needed. We bring everything required for students to code from day one.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">👩‍🏫</div>
                <h3>8–16 students per teacher</h3>
                <p>Small group sizes ensure every student gets attention and no one gets left behind.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">💰</div>
                <h3>Priced per student per hour</h3>
                <p>Pricing is agreed directly with each school based on group size and session frequency.</p>
              </article>
            </div>
          </div>
        </section>

        {/* WHY STRIVE */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Why Strive</span>
              <h2 className="section-title">
                Our own curriculum<br />
                and platform.
              </h2>
              <p className="section-lead">
                We bring the same philosophy to in-school programmes that we apply online: students build real, visual projects rather than following a generic coding workbook.
              </p>
            </div>
            <aside className="highlight-box">
              <p>The teaching platform is the <span className="em">same one used in private sessions</span> — built by Strive, not licensed from a third party.</p>
              <p>Schools get a provider who has built their own curriculum and tools, not one reselling someone else&apos;s programme.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                No prior coding experience needed. We design for students starting from zero.
              </p>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Bring a Coding ECA to your school</h2>
          <p>Reach out to discuss adding a Strive programme to your next CCA cycle.</p>
          <a href={`mailto:${contactEmail}`} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Email pulkit@strivemath.com
          </a>
          <p className="cta-note">For international schools in Singapore · Ages 8–16 · Laptops provided · No setup required</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Coding ECA programmes for international schools in Singapore.</p>
          <p>We also offer 1-on-1 online tutoring in Mathematics and AI-First Software Development.</p>
        </div>
      </footer>
    </>
  )
}
