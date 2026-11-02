import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

// DRAFT: noindex, not linked from /courses/holiday-bootcamps or the sitemap yet.
// Swap signUpUrl for the Stripe payment link before launch.
const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const signUpUrl = 'mailto:hello@strivemath.com?subject=100%20Most%20Difficult%20Math%20Questions%20Bootcamp'
const gradeRange = 'Grades 3–12'
const pageTitle = '100 Most Difficult Math Questions Bootcamp — Strive'
const pageDescription = '8-session 1-on-1 holiday math bootcamp for strong students who want a real challenge. Work through 100 hard problems and the strategies behind them. SGD 640.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/100-most-difficult-math-questions-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '100 Most Difficult Math Questions Bootcamp',
  description: 'An 8-hour, 1-on-1 online holiday bootcamp for strong or ambitious students. A curated bank of 100 hard problems, grouped by topic and problem-solving strategy, with a placement diagnostic, a progress tracker and a parent report.',
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
    question: 'What is the placement diagnostic?',
    answer: 'A short set of challenge problems your child completes at home before the first class. It places them at the right starting level so no paid class time is spent on testing.',
  },
  {
    question: 'Does my child need to finish all 100 questions?',
    answer: 'No. In class, the student and teacher work through the hardest ones and learn the strategies behind them. The rest become homework and stretch work, tracked on a "conquered X of 100" progress tracker.',
  },
  {
    question: 'Is this competition or Olympiad preparation?',
    answer: "It's a strong foundation for both. The problem-solving strategies are the same ones used in competition math, and many students go on to Olympiad tutoring or Strive's math competition afterwards.",
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
    answer: "No, the classes don't expire. We do recommend finishing within the holiday for the best outcomes.",
  },
  {
    question: 'How much does it cost?',
    answer: 'SGD 640 for 8 hours of 1-on-1 classes (SGD 80/hr). This includes the placement diagnostic, the full 100-question bank, and a parent report at the end.',
  },
]

export default function MostDifficultMathQuestionsBootcamp() {
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
            100 Most Difficult<br />
            <span className="gradient-text">Math Questions</span>
          </h1>
          <p className="hero-sub">
            Can your child crack the 100 hardest math questions? 8 hours of 1:1 coaching for kids who find school math too easy and are ready for a real challenge.
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
              <span className="hero-stat-value">100</span>
              <span className="hero-stat-label">Hard Problems</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🧠</span>
              <span className="hero-stat-label">Problem-Solving Strategies</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏆</span>
              <span className="hero-stat-label">Progress Tracker</span>
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
                &ldquo;School math<br />
                is too easy.&rdquo;
              </h2>
              <p className="section-lead">
                Your child finishes the worksheet first and is bored by the rest. They&apos;re ready for problems that make them stop and think.
              </p>
              <p className="section-lead" style={{ marginTop: '16px' }}>
                Challenges can go beyond grade level, using ideas your child already knows.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Hard problems aren&apos;t about speed. <span className="em">They&apos;re about knowing what to try when you&apos;re stuck.</span></p>
              <p>We teach the method behind each problem, so your child can tackle questions they&apos;ve never seen before.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                The aim is the joy of cracking something hard, not more drilling.
              </p>
            </aside>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">How it works</span>
            <h2 className="section-title">Every hour at the right level</h2>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>Placement at home</h3>
                <p>A short set of challenge problems before the first class places your child at the right starting level.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <h3>Crack the hardest ones together</h3>
                <p>In class, your child and their teacher tackle the toughest problems. Your child explains their method back to the teacher. The rest become homework and stretch work.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <h3>Boss round and report</h3>
                <p>A final round of the hardest questions, a &ldquo;conquered X of 100&rdquo; tracker, and a parent report with a next step.</p>
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
                <li>Strong or ambitious students who want to be stretched</li>
                <li>Kids who are bored by school math</li>
                <li>Future Olympiad and competition students</li>
              </ul>
            </div>
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>Stronger problem-solving when there&apos;s no obvious method</li>
                <li>A toolkit of strategies to try when stuck: draw it, try a simpler version first, test some numbers, look for a pattern (write out the differences), and work backwards</li>
                <li>A &ldquo;conquered X of 100&rdquo; progress tracker</li>
                <li>A natural next step into Olympiad tutoring or competitions</li>
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
                <span className="pricing-hours">100 Most Difficult Math Questions</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching · SGD 80/hr</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>Placement diagnostic (complete at home)</li>
                  <li>8 hours of 1:1 online coaching</li>
                  <li>The full bank of 100 hard problems</li>
                  <li>Homework and stretch work after each class</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Progress tracker and parent report</li>
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
          <h2>How many of the 100 can your child crack?</h2>
          <p>8 flexible 1-on-1 sessions, 100 hard problems, and a progress tracker, all for SGD 640.</p>
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
