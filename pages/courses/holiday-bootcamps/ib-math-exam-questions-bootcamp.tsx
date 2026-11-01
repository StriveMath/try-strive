import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

// DRAFT: noindex, not linked from /courses/holiday-bootcamps or the sitemap yet.
// Swap signUpUrl for the Stripe payment link before launch.
// Use our own IB-style questions only; IB past papers are IB copyright.
const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const signUpUrl = 'mailto:hello@strivemath.com?subject=IB%20Math%20Exam%20Questions%20Bootcamp'
const gradeRange = 'Grades 11–12 (IB DP)'
const pageTitle = '100 Most Common IB Math Exam Questions Bootcamp — Strive'
const pageDescription = '8-session 1-on-1 holiday bootcamp for IB Diploma math students. The 100 most common IB exam question types, markscheme technique and GDC skills. SGD 680.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/ib-math-exam-questions-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '100 Most Common IB Math Exam Questions Bootcamp',
  description: 'An 8-hour, 1-on-1 online holiday bootcamp for IB Diploma math students preparing for school tests, mocks and final exams. Covers the 100 most common IB exam question types across all five IB math topics, with markscheme technique and GDC skills.',
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
    answer: "A short IB-style paper covering the main topics, completed at home before the first class. It shows your child's weakest question types so every hour targets them, and no paid class time is spent on testing.",
  },
  {
    question: 'Is this for Analysis and Approaches or Applications and Interpretation?',
    answer: "The bootcamp adjusts to your child's course and level, both AA and AI, at SL or HL. Let us know which one they take when you sign up.",
  },
  {
    question: 'Do you use IB past papers?',
    answer: "We use our own IB-style questions written to the syllabus, grouped into the 100 question types that come up most often. Your child also learns how markschemes award marks, so they know exactly what examiners look for.",
  },
  {
    question: 'Are the classes 1-on-1?',
    answer: 'Yes, every class is 1-on-1 and fully online.',
  },
  {
    question: 'Do the classes expire?',
    answer: "No, the classes don't expire. We do recommend finishing within the holiday so your child goes into mocks with a clear revision plan.",
  },
  {
    question: 'How much does it cost?',
    answer: 'SGD 680 for 8 hours of 1-on-1 classes (SGD 85/hr). This includes the diagnostic, all materials, a personal question-type tracker, and a parent report at the end.',
  },
]

export default function IbMathExamQuestionsBootcamp() {
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
            100 Most Common<br />
            <span className="gradient-text">IB Math Exam Questions</span>
          </h1>
          <p className="hero-sub">
            The 100 IB math questions that come up again and again. 8 hours of 1:1 coaching to get your child exam-ready for school tests, mocks and finals.
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
              <span className="hero-stat-label">Question Types</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🎓</span>
              <span className="hero-stat-label">All 5 IB Topics</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📈</span>
              <span className="hero-stat-label">Revision Plan</span>
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
                &ldquo;They need to be<br />
                exam-ready.&rdquo;
              </h2>
              <p className="section-lead">
                IB math is a big step up. Your child may understand the content but still lose marks on command terms, method marks or calculator use.
              </p>
            </div>
            <aside className="highlight-box">
              <p>IB exams reward technique as much as knowledge. <span className="em">The same question types come up again and again.</span></p>
              <p>We find the types your child finds hardest and teach them until they&apos;re routine.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                Mocks and finals feel very different when you&apos;ve seen the question before.
              </p>
            </aside>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">How it works</span>
            <h2 className="section-title">Every hour on the weakest question types</h2>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>IB-style diagnostic</h3>
                <p>A short paper at home covering the main topics, which shows your child&apos;s weakest question types before session 1.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <h3>Topic-by-topic coaching</h3>
                <p>1:1 teaching focused on the topics and question types that matter most for your child, with homework after each class.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <h3>Mock and revision plan</h3>
                <p>A timed mini-paper with markscheme review, a parent report, and a revision plan for after the bootcamp.</p>
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
                <li>IB Diploma math students (AA or AI, SL or HL)</li>
                <li>Students preparing for school tests, mocks or final exams</li>
                <li>Students who understand the content but lose marks in exams</li>
              </ul>
            </div>
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>A personal question-type tracker</li>
                <li>More confident exam technique and GDC use</li>
                <li>A clear understanding of how marks are awarded</li>
                <li>A revision plan for after the bootcamp</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">What we offer</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Everything included for SGD 680</h2>
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              One fixed price. No hidden extras.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <article className="pricing-card featured" style={{ maxWidth: '520px', width: '100%' }}>
                <span className="pricing-hours">IB Math Exam Questions Bootcamp</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>680</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching · SGD 85/hr</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>IB-style diagnostic paper (complete at home)</li>
                  <li>8 hours of 1:1 online coaching</li>
                  <li>The 100 most common IB question types</li>
                  <li>Markscheme technique and GDC skills</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Parent report and revision plan</li>
                </ul>
                <a href={signUpUrl} className="btn-primary">Sign Up Now</a>
                <p className="pricing-note">{gradeRange} · Fully online</p>
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
                <p>If some classes remain unscheduled after the holidays, they can still be used in the run-up to mocks and finals.</p>
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
          <h2>Go into mocks having seen it before</h2>
          <p>8 flexible 1-on-1 sessions, the 100 most common IB question types, and a revision plan, all for SGD 680.</p>
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
