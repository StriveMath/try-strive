import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'
const stripeUrl = 'https://book.stripe.com/eVa5nd4au0CX2mQ14T'

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

export default function AIFirstCodingBootcamp() {
  return (
    <>
      <Head>
        <title>AI Web Development Bootcamp — Strive</title>
        <meta name="description" content="8-session 1-on-1 AI web development bootcamp for ages 13+. Ship real full-stack apps with React, Tailwind, and AI tools. Python familiarity required. SGD 680." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · Ages 13+ · Online · Advanced</div>
          <h1>
            AI Web<br />
            <span className="gradient-text">Development</span>
          </h1>
          <p className="hero-sub">
            Students aged 13–18 master real-world software engineering by collaborating with AI tools — building and deploying full-stack web apps guided by an experienced teacher.
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
              <span className="hero-stat-value">🚀</span>
              <span className="hero-stat-label">Ship Real Apps</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">13+</span>
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
            <h2 className="section-title">AI-First Software Development</h2>
            <p className="section-lead" style={{ maxWidth: '720px' }}>
              An engaging course for students aged 13–18 to master real-world software engineering by collaborating with AI tools, guided by an experienced teacher. Students build and deploy full-stack web apps — websites, games, and apps — using AI as a professional development tool, not a shortcut.
            </p>
            <div className="course-info-strip">
              <span className="course-info-chip">🐍 Python Familiarity Required</span>
              <span className="course-info-chip">👥 Ages 13–18</span>
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
              These projects were built using AI-first development techniques — by real Strive students during the bootcamp.
            </p>
            <div className="project-showcase" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/flappy-bird-ai.gif" alt="Flappy Bird" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Made with AI · Real project by Strive students</span>
                  <h3>Flappy Bird</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/angry-birds-ai.gif" alt="Angry Birds" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Made with AI · Real project by Strive students</span>
                  <h3>Angry Birds</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/vizualizer-ai.gif" alt="Visualizer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Made with AI · Real project by Strive students</span>
                  <h3>Visualizer</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-card-header" style={{ padding: 0 }}><img src="/images/holidaycamps/pixel-warrior-ai.gif" alt="Pixel Warrior" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                <div className="project-card-body">
                  <span className="project-card-badge">Made with AI · Real project by Strive students</span>
                  <h3>Pixel Warrior</h3>
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
                <p>A professional coding portfolio ready for college or internship applications — built from real deployed projects.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🌐</div>
                <h3>Deployed Full-Stack App</h3>
                <p>A real web application built with React and Tailwind, connected to a database — live on the internet from day one.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🏅</div>
                <h3>Completion Certificate</h3>
                <p>A course completion certificate recognising their achievement at the end of the bootcamp.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🤖</div>
                <h3>AI Development Mastery</h3>
                <p>Mastery of using AI as a professional development tool — the way engineers at top companies use it today.</p>
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
              Students ship a live website on Day 1. Each subsequent session layers in real engineering skills — components, styling, databases, and authentication.
            </p>
            <div className="curriculum-grid">
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 1–2</span>
                <h3>Ship a Site Today</h3>
                <ul>
                  <li>Generate a personalised website or app from a prompt</li>
                  <li>Modify the site through follow-up prompts</li>
                  <li>Deploy to the web — live URL on day one</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 3–4</span>
                <h3>Set Up Your Dev Environment</h3>
                <ul>
                  <li>Install professional web development tools</li>
                  <li>Run a local development server</li>
                  <li>Modify and verify code changes in the browser</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 5–6</span>
                <h3>Think in Components &amp; Styling</h3>
                <ul>
                  <li>Navigate a React components folder structure</li>
                  <li>Create and import React components</li>
                  <li>Pass data between components</li>
                  <li>Apply Tailwind CSS styling</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 7–8</span>
                <h3>Database Integration &amp; Authentication</h3>
                <ul>
                  <li>Configure a database with sign-up, login, and logout</li>
                  <li>Generate and refine database queries</li>
                  <li>Build data retrieval and update features</li>
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
              <li>Ages 13+</li>
              <li>Comfortable with using a mouse and keyboard</li>
              <li>Familiarity with Python coding</li>
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
          <h2>Ready to ship something real?</h2>
          <p>8 flexible 1-on-1 sessions, a deployed full-stack app, and a certificate — for SGD 680.</p>
          <a href={stripeUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }} target="_blank" rel="noopener noreferrer">Sign Up Now</a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 13+ · React · Tailwind · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>AI Web Development bootcamp for students aged 13–18.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
