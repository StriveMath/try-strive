import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'
const pageTitle = 'Holiday Bootcamps for Kids — Strive'
const pageDescription = '8-class holiday bootcamps in Math and Coding for students aged 8–18. 1-on-1 online sessions, flexible scheduling, and a completion certificate.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps'

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
    answer: 'Yes, all of our online classes are 1 on 1.',
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

export default function HolidayCamps() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <OrganizationSchema />

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · Ages 8–18 · Online</div>
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
              <span className="hero-stat-value">8–18</span>
              <span className="hero-stat-label">Ages</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🗓️</span>
              <span className="hero-stat-label">Flexible Scheduling</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* MATH BOOTCAMPS — linkable as /courses/holiday-bootcamps#math */}
        <section id="math" style={{ background: 'white' }}>
          <div className="section-inner">
            <h2 className="section-title">Math Bootcamps</h2>
            <p className="bootcamp-section-sub">Choose the track that matches your child&apos;s goals and learning style</p>
            <div className="bootcamp-grid bootcamp-grid-2">
              <Link href="/courses/holiday-bootcamps/silly-mistakes-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-silly-mistakes">
                    <span className="bootcamp-card-header-icon">✏️</span>
                    <p className="bootcamp-card-header-name">Silly Mistakes</p>
                    <span className="bootcamp-card-header-tag">Mathematics</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>Silly Mistakes</h3>
                    <p className="bootcamp-card-tagline">Knows the work, still loses marks? Let&apos;s fix that.</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Grades 3–12</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 640</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/courses/holiday-bootcamps/ib-math-exam-questions-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-ib-math">
                    <span className="bootcamp-card-header-icon">🎓</span>
                    <p className="bootcamp-card-header-name">IB Math Exam Questions</p>
                    <span className="bootcamp-card-header-tag">Mathematics</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>100 Most Common IB Math Exam Questions</h3>
                    <p className="bootcamp-card-tagline">The IB math questions that come up again and again</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Grades 11–12 (IB DP)</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/courses/holiday-bootcamps/math-confidence-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
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
                      <span className="bootcamp-meta-chip">👥 Grades 3–12</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 640</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/courses/holiday-bootcamps/100-most-difficult-math-questions-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <article className="bootcamp-card">
                  <div className="bootcamp-card-header bh-most-difficult">
                    <span className="bootcamp-card-header-icon">🧠</span>
                    <p className="bootcamp-card-header-name">100 Most Difficult</p>
                    <span className="bootcamp-card-header-tag">Mathematics</span>
                  </div>
                  <div className="bootcamp-card-body">
                    <h3>100 Most Difficult Math Questions</h3>
                    <p className="bootcamp-card-tagline">For kids who find school math too easy and want a real challenge</p>
                    <div className="bootcamp-card-meta">
                      <span className="bootcamp-meta-chip">👥 Grades 3–12</span>
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

        {/* CODING BOOTCAMPS — linkable as /courses/holiday-bootcamps#coding */}
        <section id="coding" style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <h2 className="section-title">Coding Bootcamps</h2>
            <p className="bootcamp-section-sub">Build real projects and develop in-demand programming skills</p>
            <div className="bootcamp-grid bootcamp-grid-3">
              <Link href="/courses/holiday-bootcamps/ai-coding-intro-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
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
                      <span className="bootcamp-meta-chip">👥 Ages 10–18</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/courses/holiday-bootcamps/python-apps-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
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
                      <span className="bootcamp-meta-chip">👥 Ages 8–18</span>
                      <span className="bootcamp-meta-chip">⏱ 8 Hours</span>
                      <span className="bootcamp-meta-chip">🌐 Fully Online</span>
                      <span className="bootcamp-meta-chip">💰 SGD 680</span>
                    </div>
                    <p className="bootcamp-curriculum">Lessons and content brought to you by a team from NUS and Stanford University</p>
                  </div>
                </article>
              </Link>
              <Link href="/courses/holiday-bootcamps/ai-coding-advanced-bootcamp" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
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
            <p className="section-lead">
              Tell us about your child&apos;s interests, learning style and goals. We&apos;ll match them with a teacher they&apos;ll click with, then build a schedule around your family, wherever you are in the world.
            </p>
            <div className="scheduling-cards">
              <div className="scheduling-card">
                <h3>Fits around your holiday plans</h3>
                <p>Travelling? Visiting family? Sessions fit around your holiday plans, not the other way around. Book your 8 classes at any time during the holidays.</p>
              </div>
              <div className="scheduling-card">
                <h3>Classes never expire</h3>
                <p>If some classes remain unscheduled after the holidays, they can still be used throughout the school year.</p>
              </div>
            </div>
            <div style={{ marginTop: '36px' }}>
              <a href={trialUrl} className="btn-primary">Get in Touch</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to book a bootcamp?</h2>
          <p>8 flexible 1-on-1 sessions, a completion certificate, and a curriculum built around your child.</p>
          <a href={trialUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Book Now
          </a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 8–18 · Online</p>
        </section>
      </main>

      <Footer />
    </>
  )
}
