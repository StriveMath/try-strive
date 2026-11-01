import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

// DRAFT: noindex, not linked from /courses/holiday-bootcamps or the sitemap yet.
// Intended to replace math-confidence-bootcamp.tsx once approved.
// Swap signUpUrl for the Stripe payment link before launch.
const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const signUpUrl = 'mailto:hello@strivemath.com?subject=Math%20Confidence%20Bootcamp'
const gradeRange = 'Grades 3–12'
const pageTitle = 'Math Confidence Bootcamp: Catch Up and Support — Strive'
const pageDescription = '8-session 1-on-1 holiday math bootcamp for students who are behind or have lost confidence. A gap-finder diagnostic, targeted catch-up and a parent report. SGD 640.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/math-confidence-catch-up-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Math Confidence Bootcamp: Catch Up and Support',
  description: "An 8-hour, 1-on-1 online holiday bootcamp for students who are behind, anxious or have lost confidence in math. A low-stakes gap-finder diagnostic identifies gaps from earlier years, and sessions close the 2–3 biggest ones before the new term.",
  provider: {
    '@type': 'EducationalOrganization',
    '@id': 'https://www.strivemath.com/#organization',
    name: 'Strive Math',
    url: 'https://www.strivemath.com',
  },
  url: pageUrl,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: '8 hours total, scheduled flexibly',
  },
}

const faqs = [
  {
    question: 'What is the diagnostic?',
    answer: 'A low-stakes "find your starting point" activity your child completes at home before the first class. It isn\'t a test. It finds gaps from earlier years (for example place value, fractions, negative numbers or early algebra), so no paid class time is spent on testing.',
  },
  {
    question: 'My child says they hate math. Will this help?',
    answer: 'That\'s exactly who this bootcamp is for. Teachers are patient and encouraging, and every session is built around small wins so your child starts to feel able to do math again.',
  },
  {
    question: 'Is this bootcamp for IB Diploma students?',
    answer: "No. This bootcamp is for grades 3 to 12 on any curriculum except the IB Diploma Programme (DP). IB Diploma students have their own bootcamp, 100 Most Common IB Math Exam Questions, at SGD 85/hr.",
  },
  {
    question: 'Are the classes 1-on-1?',
    answer: 'Yes, every class is 1-on-1 and fully online.',
  },
  {
    question: 'Do the classes expire?',
    answer: "No, the classes don't expire. We do recommend finishing within the holiday so your child starts the new term caught up.",
  },
  {
    question: 'How much does it cost?',
    answer: 'SGD 640 for 8 hours of 1-on-1 classes (SGD 80/hr). This includes the diagnostic, all materials, and a parent report at the end.',
  },
  {
    question: 'Can parents join classes?',
    answer: 'Parents are always welcome to join, and especially for goal-setting at the start.',
  },
]

export default function MathConfidenceCatchUpBootcamp() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      </Head>
      <OrganizationSchema />

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · {gradeRange} · Online</div>
          <h1>
            Math<br />
            <span className="gradient-text">Confidence</span>
          </h1>
          <p className="hero-sub">
            Help your child fall back in love with math, and catch up before the new term. Patient 1:1 coaching that closes the gaps holding them back.
          </p>
          <div className="hero-actions">
            <a href={signUpUrl} className="btn-primary">Sign Up Now</a>
            <a href="#how-it-works" className="btn-outline-dark">How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">Hours 1-on-1</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🔍</span>
              <span className="hero-stat-label">Gap-Finder Diagnostic</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🌱</span>
              <span className="hero-stat-label">Small Wins</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📊</span>
              <span className="hero-stat-label">Parent Report</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* PROBLEM NARRATIVE */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Sound familiar?</span>
              <h2 className="section-title">
                &ldquo;They&apos;ve fallen behind,<br />
                and now they<br />
                hate math.&rdquo;
              </h2>
              <p className="section-lead">
                One topic didn&apos;t click, then the next one built on it. Now homework is a battle and your child says &ldquo;I can&apos;t do this&rdquo; before reading the question.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Most of the time it comes down to <span className="em">two or three gaps from earlier years.</span></p>
              <p>Close those, and the schoolwork they&apos;re doing now starts to make sense again.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                You&apos;re not alone. And it&apos;s fixable.
              </p>
            </aside>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">How it works</span>
            <h2 className="section-title">Every hour targets your child</h2>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>Find the starting point</h3>
                <p>A low-stakes diagnostic at home, framed as finding where to start rather than a test. The teacher reviews it before session 1.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <h3>Close the biggest gaps</h3>
                <p>Patient 1:1 teaching on the 2–3 gaps that matter most for current schoolwork, with short homework after each class.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <h3>See the progress</h3>
                <p>A re-check on the same skills and a parent report showing what&apos;s fixed and what&apos;s next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR + OUTCOMES */}
        <section style={{ background: 'white' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Who this is for</span>
              <h2 className="section-title">Is this right for your child?</h2>
              <ul className="track-list box-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>{gradeRange} students, any curriculum except the IB Diploma</li>
                <li>Kids who have fallen behind in math</li>
                <li>Children who get anxious about math</li>
                <li>Students who say they don&apos;t like math (anymore)</li>
              </ul>
            </div>
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>The 2–3 biggest gaps closed</li>
                <li>Schoolwork that makes sense again</li>
                <li>Visible progress you can see in the report</li>
                <li>A child who feels able to do math again</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">What we offer</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Everything included for SGD 640</h2>
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              One fixed price. No hidden extras.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <article className="pricing-card featured" style={{ maxWidth: '520px', width: '100%' }}>
                <span className="pricing-hours">Math Confidence Bootcamp</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching · SGD 80/hr</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>Gap-finder diagnostic (complete at home)</li>
                  <li>8 hours of 1:1 online coaching</li>
                  <li>Aligned to your child&apos;s school curriculum</li>
                  <li>Homework after each class</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Parent report showing what&apos;s fixed and what&apos;s next</li>
                </ul>
                <a href={signUpUrl} className="btn-primary">Sign Up Now</a>
                <p className="pricing-note">{gradeRange} · Not for IB Diploma · Fully online</p>
              </article>
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
                <p>Travelling? Visiting family? Sessions fit around your holiday plans, not the other way around. Book your 8 classes at any time during the holidays.</p>
              </div>
              <div className="scheduling-card">
                <h3>Classes never expire</h3>
                <p>If some classes remain unscheduled after the holidays, they can still be used throughout the school year.</p>
              </div>
            </div>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={signUpUrl} className="btn-primary">Sign Up Now</a>
              <a href={trialUrl} className="btn-outline-dark">Try a Free Math Class</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <section className="cta-section">
          <h2>Start the new term caught up</h2>
          <p>8 flexible 1-on-1 sessions, the biggest gaps closed, and a parent report, all for SGD 640.</p>
          <a href={signUpUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Sign Up Now
          </a>
          <p className="cta-note">8 Classes · 1-on-1 · {gradeRange} · Online</p>
        </section>
      </main>

      <Footer />
    </>
  )
}
