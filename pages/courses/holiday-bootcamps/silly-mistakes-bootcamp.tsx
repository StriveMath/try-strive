import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

// DRAFT: noindex, not linked from /courses/holiday-bootcamps or the sitemap yet.
// Swap signUpUrl for the Stripe payment link before launch.
const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const signUpUrl = 'mailto:hello@strivemath.com?subject=Silly%20Mistakes%20Bootcamp'
const gradeRange = 'Grades 3–12'
const pageTitle = 'Silly Mistakes Math Bootcamp — Strive'
const pageDescription = '8-session 1-on-1 holiday math bootcamp that fixes careless errors. Diagnostic paper, personal mistake log, checking routine and a before-and-after parent report. SGD 640.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/silly-mistakes-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Silly Mistakes Math Bootcamp',
  description: 'An 8-hour, 1-on-1 online holiday bootcamp for students who understand the work but lose marks on careless errors. Starts with a timed diagnostic paper, builds a personal mistake log and checking routine, and ends with a before-and-after parent report.',
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
    answer: "A short timed paper your child completes at home before the first class. The teacher sorts every error by type (misreading, signs, copying, units, arithmetic slips, skipped steps, running out of time), so no paid class time is spent on testing.",
  },
  {
    question: 'How and when do I schedule the classes?',
    answer: 'Once you sign up, our team gets in touch. On that call we learn more about your child, pair them with the right teacher, and build a schedule around your holiday plans.',
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
    answer: "No, the classes don't expire. We do recommend finishing within the holiday so your child goes into the new term with their checking routine in place.",
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

export default function SillyMistakesBootcamp() {
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
            Silly Mistakes<br />
            <span className="gradient-text">Bootcamp</span>
          </h1>
          <p className="hero-sub">
            Silly mistakes costing marks? Fix them this silly season. 8 hours of 1:1 coaching that turns careless errors into a checking routine your child keeps using at school.
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
              <span className="hero-stat-value">📝</span>
              <span className="hero-stat-label">Personal Mistake Log</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">✅</span>
              <span className="hero-stat-label">Checking Routine</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📊</span>
              <span className="hero-stat-label">Before &amp; After Report</span>
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
                &ldquo;They know it.<br />
                They just keep<br />
                losing marks.&rdquo;
              </h2>
              <p className="section-lead">
                Your child understands the work. Then the test comes back with marks lost to a dropped negative, a misread question, or a missing unit.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Silly mistakes aren&apos;t random. <span className="em">Every child has a pattern, and patterns can be fixed.</span></p>
              <p>We find your child&apos;s top mistake types, then build habits that catch them before the marks are lost.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                It&apos;s less about more practice and more about how they check.
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
                <h3>Diagnostic at home</h3>
                <p>A short timed paper before the first class. The teacher sorts every error by type, so no paid hours go on testing.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <h3>Targeted coaching</h3>
                <p>1:1 sessions aimed at the mistake types your child actually makes, with short homework after each class.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <h3>Before and after</h3>
                <p>A final timed paper and a parent report comparing the mistake count, with a recommended next step.</p>
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
                <li>Kids who &ldquo;know it but lose marks anyway&rdquo;</li>
                <li>Students who rush, skip steps or run out of time</li>
                <li>Parents tired of hearing &ldquo;it was just a silly mistake&rdquo;</li>
              </ul>
            </div>
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>Fewer careless errors in school tests</li>
                <li>A personal checklist they keep using</li>
                <li>Calmer, better-paced exam technique</li>
                <li>A visible before-and-after mistake count</li>
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
                <span className="pricing-hours">Silly Mistakes Bootcamp</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching · SGD 80/hr</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>Timed diagnostic paper (complete at home)</li>
                  <li>8 hours of 1:1 online coaching</li>
                  <li>Personal mistake log and checking routine</li>
                  <li>Homework after each class</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Before-and-after parent report</li>
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
          <h2>Make this the last term of silly mistakes</h2>
          <p>8 flexible 1-on-1 sessions, a personal checking routine, and a before-and-after report, all for SGD 640.</p>
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
