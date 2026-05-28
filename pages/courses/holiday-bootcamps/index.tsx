import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

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
    answer: 'Yes, all of our classes are 1 on 1.',
  },
  {
    question: 'Do the classes expire?',
    answer: "No, the classes don't expire and you can take them over any period of time you want to. However, it is recommended to complete this course within the holiday period for the best outcomes.",
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
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HolidayCamps() {
  return (
    <>
      <Head>
        <title>Holiday Bootcamps for Kids — Strive</title>
        <meta name="description" content="8-class holiday bootcamps in Math and Coding for students aged 8–16. 1-on-1 online sessions, flexible scheduling, and a completion certificate." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · Ages 8–16 · Online</div>
          <h1>
            Holiday<br />
            <span className="gradient-text">Bootcamps</span>
          </h1>
          <p className="hero-sub">
            Intensive online bootcamps that fit around your holiday plans, not the other way around. Choose Math or Coding and let your child build something real.
          </p>
          <div className="hero-actions">
            <a href={trialUrl} className="btn-primary">Book Now</a>
            <a href="#how-scheduling-works" className="btn-outline-dark">How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏅</span>
              <span className="hero-stat-label">Completion Certificate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">8–16</span>
              <span className="hero-stat-label">Ages</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🗓️</span>
              <span className="hero-stat-label">Flexible Scheduling</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* MATH BOOTCAMPS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <h2 className="section-title">Math Bootcamps</h2>
            <p className="bootcamp-section-sub">Choose the track that matches your child&apos;s goals and learning style</p>
            <div className="bootcamp-grid bootcamp-grid-2">
              <Link href="/math-confidence" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-math-confidence">
                    <span className="bootcamp-card-header-icon">📐</span>
                    <p className="bootcamp-card-header-name">Math Confidence</p>
                    <span className="bootcamp-card-header-tag">Mathematics</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>Math Confidence</h3>
                    <p className="bootcamp-card-tagline">Patient 1:1 coaching that makes math finally make sense</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Ages 8–16</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 640</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/math-performance" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-math-performance">
                    <span className="bootcamp-card-header-icon">🏆</span>
                    <p className="bootcamp-card-header-name">Math Performance</p>
                    <span className="bootcamp-card-header-tag">Mathematics</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>Math Performance</h3>
                    <p className="bootcamp-card-tagline">8 hours of elite math coaching</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Ages 8–16</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 640</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* CODING BOOTCAMPS */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <h2 className="section-title">Coding Bootcamps</h2>
            <p className="bootcamp-section-sub">Build real projects and develop in-demand programming skills</p>
            <div className="bootcamp-grid bootcamp-grid-3">
              <Link href="/codewithai" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-ai-intro">
                    <span className="bootcamp-card-header-icon">🤖</span>
                    <p className="bootcamp-card-header-name">Using AI to Code</p>
                    <span className="bootcamp-card-header-tag">AI Coding · Intro</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>Using AI to Code</h3>
                    <p className="bootcamp-card-tagline">An intro to coding using the power of AI tools</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Ages 10–16</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/makepythonapps" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-python">
                    <span className="bootcamp-popular-badge">Most Popular</span>
                    <span className="bootcamp-card-header-icon">🎮</span>
                    <p className="bootcamp-card-header-name">App + Game Dev</p>
                    <span className="bootcamp-card-header-tag">Coding · Python</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>App + Game Dev in Python</h3>
                    <p className="bootcamp-card-tagline">Build real apps and games using Python from scratch</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Ages 8–16</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/ai-first-coding-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-ai-advanced">
                    <span className="bootcamp-card-header-icon">🚀</span>
                    <p className="bootcamp-card-header-name">AI Web Development</p>
                    <span className="bootcamp-card-header-tag">AI Coding · Advanced</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>AI Web Development (Advanced)</h3>
                    <p className="bootcamp-card-tagline">Build and deploy full-stack web apps using AI-first development</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Ages 13–18</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW SCHEDULING WORKS */}
        <section id="how-scheduling-works" style={{ background: 'white' }}>
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

        {/* OUR SCHEDULE IS FLEXIBLE */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Flexible by design</span>
              <h2 className="section-title">Our Schedule<br />is Flexible</h2>
              <p className="section-lead">
                Contact us, and we&apos;ll pair your child with the ideal teacher based on their personality. We&apos;ll schedule classes on times and dates that work for you.
              </p>
              <div style={{ marginTop: '36px' }}>
                <a href={trialUrl} className="btn-primary">Get in Touch</a>
              </div>
            </div>
            <aside className="highlight-box">
              <p>We don&apos;t just assign a teacher. <span className="em">We find the right match for your child.</span></p>
              <p>Tell us about your child&apos;s interests, learning style, and goals — and we&apos;ll find someone they&apos;ll genuinely click with.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                Then we build a schedule around your family&apos;s availability, wherever you are in the world.
              </p>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white' }} itemScope itemType="https://schema.org/FAQPage">
          <div className="section-inner">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <article
                  key={i}
                  className="faq-item"
                  itemScope
                  itemType="https://schema.org/Question"
                  itemProp="mainEntity"
                >
                  <h3 itemProp="name">{faq.question}</h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to book a bootcamp?</h2>
          <p>8 flexible 1-on-1 sessions, a completion certificate, and a curriculum built around your child.</p>
          <a href={trialUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Book Now
          </a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 8–16 · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Holiday bootcamps in Math and Coding for students aged 8–16.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
