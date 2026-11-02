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
const pageDescription = '8-session 1-on-1 holiday math bootcamp for kids who know the work but still lose marks. A timed diagnostic, methods that don\'t go wrong, and a before-and-after parent report. SGD 640.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/silly-mistakes-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Silly Mistakes Math Bootcamp',
  description: 'An 8-hour, 1-on-1 online holiday bootcamp for students who understand the work but lose marks on silly mistakes. Starts with a timed diagnostic paper, teaches safe methods and clear written working, and ends with a before-and-after parent report.',
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
    answer: "A short timed paper your child completes at home, in their own time, before the first class. The teacher sorts every lost mark into three types: misread the question, risky method, or forgotten basics. That tells us exactly where to focus, and no paid class time is spent on testing.",
  },
  {
    question: 'Is every child taught the same 8 sessions?',
    answer: "No. Session 1 always goes through the diagnostic together and sets goals, and session 8 is always a re-check paper and parent report. Sessions 2–7 are fully personalised to what your child's diagnostic finds.",
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
    answer: "No, the classes don't expire. We do recommend finishing within the holiday so your child goes into the new term with their new methods in place.",
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
          <div className="hero-tag">Silly Mistakes Bootcamp · {gradeRange} · Online</div>
          <h1>
            Knows the work, still loses marks?<br />
            <span className="gradient-text">Let&apos;s fix that.</span>
          </h1>
          <p className="hero-sub">
            Silly mistakes aren&apos;t carelessness. We teach the methods that don&apos;t go wrong.
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
              <span className="hero-stat-label">Mistake Diagnostic</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">✏️</span>
              <span className="hero-stat-label">Methods That Don&apos;t Go Wrong</span>
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
                &ldquo;My child understands the work but keeps losing marks on careless errors.&rdquo; A dropped negative, a misread question, a missing unit.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Silly mistakes aren&apos;t carelessness. <span className="em">They come from misreading the question, a risky method, or a forgotten basic.</span></p>
              <p>We find which ones your child makes, then teach methods that don&apos;t go wrong.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                When the method is safe, math feels calm and fun again, and the marks follow.
              </p>
            </aside>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">How it works</span>
            <h2 className="section-title">How the 8 sessions work</h2>
            <p className="section-lead">
              Before the first class, your child does a short timed paper in their own time. The teacher sorts every lost mark into three types: misread the question, risky method, or forgotten basics. That tells us exactly where to focus.
            </p>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>Diagnostic review and goals</h3>
                <p>We go through the diagnostic together and set goals. Your child finds their own mistakes first.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2–7</div>
                <h3>Focused on your child</h3>
                <p>Sessions focus on what the diagnostic found. Your child&apos;s sessions are fully personalised to their needs.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">8</div>
                <h3>Re-check and report</h3>
                <p>A re-check paper and a parent report showing the before and after.</p>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary)', margin: '48px 0 8px' }}>What sessions 2–7 might cover</h3>
            <p style={{ fontSize: '15px', color: 'var(--text-dark)', marginBottom: '16px' }}>
              This is an example. Your child&apos;s sessions are fully personalised to their needs after the diagnostic.
            </p>
            <ul className="track-list check-list" style={{ maxWidth: '640px', fontSize: '15px', lineHeight: 1.7 }}>
              <li>Reading the question: draw it, key words, try a simpler version</li>
              <li>Safe methods with decimals and fractions</li>
              <li>Simplifying first and using fewer steps</li>
              <li>Writing it out: the plan line and every step</li>
              <li>Units and conversions (including squared and cubed units)</li>
              <li>Spot-the-mistake practice; for grades 7 and up, timed past-paper practice</li>
            </ul>
            <p style={{ fontSize: '15px', color: 'var(--text-dark)', marginTop: '16px' }}>
              Homework: short practice after each class.
            </p>
          </div>
        </section>

        {/* HOW WE TEACH IT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">How we teach it</span>
            <h2 className="section-title">Methods that don&apos;t go wrong</h2>
            <div className="outcome-grid">
              <article className="platform-card">
                <div className="platform-icon">📖</div>
                <h3>Read it right</h3>
                <p>Draw the problem, translate the key words (&ldquo;of&rdquo; means multiply, &ldquo;remaining&rdquo;, &ldquo;total&rdquo;), and try a simpler version first.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🛡️</div>
                <h3>Use safe methods</h3>
                <p>Fractions instead of messy decimals, simplify before calculating, and units that cancel out.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">✍️</div>
                <h3>Write it out</h3>
                <p>A plan line first, then every step and every unit, so working is clear and earns method marks.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🔎</div>
                <h3>Find your own mistakes</h3>
                <p>The teacher points to where a mistake is, and your child finds and fixes it.</p>
              </article>
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
                <li>Students who rush, misread questions or skip steps</li>
                <li>Parents tired of hearing &ldquo;it was just a silly mistake&rdquo;</li>
              </ul>
            </div>
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>Fewer marks lost to silly mistakes</li>
                <li>A before-and-after count by mistake type in the parent report</li>
                <li>Methods your child keeps using in school tests</li>
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
                  <li>Every lost mark sorted by mistake type</li>
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
          <p>8 flexible 1-on-1 sessions, methods that don&apos;t go wrong, and a before-and-after report, all for SGD 640.</p>
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
