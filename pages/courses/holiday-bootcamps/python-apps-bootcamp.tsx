import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'
const stripeUrl = 'https://book.stripe.com/9AQ02T22m2L57Ha9Bk'

const faqs = [
  {
    question: 'How and when do I schedule/book the classes?',
    answer: 'Once you make the payment, our team gets in contact with you. In this call we learn more about the student, pair them with the right teacher, and create a customised schedule for you.',
  },
  {
    question: 'What happens after payment?',
    answer: 'Once you make the payment, our team gets in contact with you. In this call we learn more about the student, pair them with the right teacher, and create a customised schedule for you.',
  },
  {
    question: 'Are the classes 1 on 1?',
    answer: 'Yes, all of our classes are 1:1.',
  },
  {
    question: 'Do the classes expire?',
    answer: "No, the classes don't expire and you can take them over any period of time you want to. However, it is recommended to complete this course within the holiday for the best outcomes.",
  },
  {
    question: 'How much does it cost?',
    answer: 'The price of this course is SGD 680. This includes: 8 Classes (1 on 1), Completion Certificate, and Continuous Support.',
  },
  {
    question: 'Can parents join classes?',
    answer: 'Parents are absolutely welcome to join classes and experience the journey.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function MakePythonApps() {
  return (
    <>
      <Head>
        <title>Python App &amp; Game Development Bootcamp — Strive</title>
        <meta name="description" content="8-session 1-on-1 Python bootcamp for ages 8+. Build real apps and games — Flappy Bird, puzzle apps, and more. SGD 680." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · Ages 8+ · Online · Most Popular</div>
          <h1>
            Python App &amp;<br />
            <span className="gradient-text">Game Dev</span>
          </h1>
          <p className="hero-sub">
            Your child will build real apps and games from scratch — and leave with a portfolio project they&apos;re proud to show off.
          </p>
          <div className="hero-actions">
            <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            <a href="#curriculum" className="btn-outline-dark">See Curriculum</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">1-on-1 Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🎮</span>
              <span className="hero-stat-label">Real Projects Built</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">8+</span>
              <span className="hero-stat-label">Ages</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏅</span>
              <span className="hero-stat-label">Certificate</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* ABOUT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">About the course</span>
            <h2 className="section-title">Python App &amp; Game Development</h2>
            <p className="section-lead" style={{ maxWidth: '720px' }}>
              Your child will cultivate problem-solving skills, enhance logical thinking, and unleash their creativity while transforming their app and game ideas into reality. By the end of the programme, they will have advanced Python knowledge and the skills to build more web apps and explore further into the world of programming.
            </p>
            <div className="course-info-strip">
              <span className="course-info-chip">📚 All Levels</span>
              <span className="course-info-chip">👥 Ages 8+</span>
              <span className="course-info-chip">🧑‍🏫 1 Student · 1 Teacher</span>
              <span className="course-info-chip">🌐 Fully Online</span>
              <span className="course-info-chip">💰 SGD 680</span>
            </div>
          </div>
        </section>

        {/* PROJECT SHOWCASE */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">See it to believe it</span>
            <h2 className="section-title">Real projects built by Strive students</h2>
            <p className="section-lead" style={{ maxWidth: '640px' }}>
              These aren&apos;t toy examples. Every project below was built by a real Strive student during the bootcamp.
            </p>
            <div className="project-showcase" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/block-breaker-game.gif" alt="Block Breaker" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Real project by Strive students</span>
                  <h3>Block Breaker</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/classic-platformer-game.gif" alt="Classic Platformer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Real project by Strive students</span>
                  <h3>Classic Platformer</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/colour-matching-app.gif" alt="Colour Matching App" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Real project by Strive students</span>
                  <h3>Colour Matching App</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/Puzzle-app.gif" alt="Puzzle App" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Real project by Strive students</span>
                  <h3>Puzzle App</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">What your child achieves</span>
            <h2 className="section-title">Tangible outcomes, every time</h2>
            <div className="outcome-grid">
              <article className="platform-card">
                <div className="platform-icon">💼</div>
                <h3>Coding Portfolio</h3>
                <p>An impressive coding portfolio ready for college or internship applications — built from real projects, not exercises.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🎮</div>
                <h3>2–3 Real Apps &amp; Games</h3>
                <p>Fully working web apps and games created in Python — projects your child will actually want to show their friends.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🏅</div>
                <h3>Completion Certificate</h3>
                <p>A course completion certificate recognising their achievement at the end of the bootcamp.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🤖</div>
                <h3>AI-Powered Independence</h3>
                <p>Proficiency in using AI tools for future independent game and app creation — a skill that compounds for life.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">The full programme</span>
            <h2 className="section-title">8-Day Curriculum</h2>
            <p className="section-lead" style={{ maxWidth: '640px' }}>
              Every day builds on the last. By Day 8 your child has a complete, working project — not just isolated exercises.
            </p>
            <div className="curriculum-grid">
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 1</span>
                <h3>Python Programming for App Development</h3>
                <ul>
                  <li>Upskill on Python depending on prior knowledge</li>
                  <li>Core concepts: variables, data types, and basic coding structure</li>
                  <li>Optional advanced concepts: conditionals, functions, loops</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 2–3</span>
                <h3>GUI Elements &amp; Keyboard/Mouse Interactions</h3>
                <ul>
                  <li>Buttons, entry fields, and other GUI elements</li>
                  <li>Collecting and storing values from UI interactions</li>
                  <li>Make the game interactive with mouse and keyboard events</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 4–5</span>
                <h3>Data Model &amp; Game Mechanics</h3>
                <ul>
                  <li>Introduction to data models and their importance in app development</li>
                  <li>Designing and implementing a data model in Python</li>
                  <li>Data management techniques without external databases</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 6–7</span>
                <h3>Navigation &amp; Interaction</h3>
                <ul>
                  <li>Implementing navigation between pages in the app</li>
                  <li>Methods for user interaction and flow control</li>
                  <li>Enhancing user experience through page transitions</li>
                </ul>
              </div>
              <div className="curriculum-day" style={{ gridColumn: '1 / -1' }}>
                <span className="curriculum-day-label">Day 8</span>
                <h3>Finalise Project &amp; Showcase</h3>
                <ul>
                  <li>Completion and finalisation of the app or game project</li>
                  <li>Testing and debugging for optimal performance</li>
                  <li>Showcase your final project</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULING */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Scheduling</span>
            <h2 className="section-title">How Scheduling Works</h2>
            <div className="scheduling-cards">
              <div className="scheduling-card">
                <h3>Fits around your holiday plans</h3>
                <p>Traveling? Visiting family? Sessions fit around your holiday plans — not the other way around. You can book your 8 classes at any time during the holidays.</p>
              </div>
              <div className="scheduling-card">
                <h3>Classes never expire</h3>
                <p>If some classes remain unscheduled after the holidays, they can still be used throughout the school year.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">What you need to get started</h2>
            <ul className="track-list" style={{ fontSize: '15px', lineHeight: 1.7, marginTop: '24px' }}>
              <li>Ages 8+</li>
              <li>Comfortable with using a mouse and trackpad</li>
            </ul>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
              We are here for your questions. <a href="mailto:hello@strivemath.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact us</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white' }} itemScope itemType="https://schema.org/FAQPage">
          <div className="section-inner">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <article key={i} className="faq-item" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h3 itemProp="name">{faq.question}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to build something real?</h2>
          <p>8 flexible 1-on-1 sessions, a portfolio project, and a certificate — for SGD 680.</p>
          <a href={stripeUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }} target="_blank" rel="noopener noreferrer">Sign Up Now</a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 8+ · Python · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Python App &amp; Game Development bootcamp for students aged 8+.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
