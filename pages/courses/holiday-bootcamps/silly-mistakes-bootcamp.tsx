import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import OrganizationSchema from '@/components/OrganizationSchema'

// Sign Up Now → Stripe; Ask a Question → WhatsApp to Lauren.
const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const WHATSAPP_NUMBER = '6589204220'
const askMessage = "Hi Lauren! I have a question about the Silly Mistakes Bootcamp."
const askUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(askMessage)}`
// Shared 'Strive Math Bootcamps' SGD 640 Stripe link (same as Math Confidence)
const signUpUrl = 'https://buy.stripe.com/3cIdR899Zg3r3Ay6mG93y1v'
const gradeRange = 'Grades 3–12'
const pageTitle = 'Silly Mistakes Math Bootcamp — Strive'
const pageDescription = '8-session 1-on-1 holiday math bootcamp for kids who know the work but still lose marks. A timed diagnostic, methods that don\'t go wrong, and a parent progress report. SGD 640.'
const pageUrl = 'https://www.strivemath.com/courses/holiday-bootcamps/silly-mistakes-bootcamp'

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Silly Mistakes Math Bootcamp',
  description: 'An 8-hour, 1-on-1 online holiday bootcamp for students who understand the work but lose marks on silly mistakes. Starts with a timed diagnostic paper, teaches safe methods and clear written working, and ends with a parent progress report.',
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
    answer: "A short timed paper your child completes at home, in their own time, before the first class. In session 1 the teacher goes through it with your child, who learns to spot their own mistakes. No paid class time is spent on testing.",
  },
  {
    question: 'Is every child taught the same 8 sessions?',
    answer: "No. Session 1 always goes through the diagnostic together and sets goals. Sessions 2–8 are fully personalised to your child.",
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
            Silly Mistakes?<br />
            <span className="gradient-text">Cured!</span>
          </h1>
          <p className="hero-sub">
            Practise not falling for traps in high-pressure situations.
          </p>
          <div className="hero-actions">
            <a href={signUpUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            <a href={askUrl} className="btn-outline-dark" target="_blank" rel="noopener noreferrer">Ask a Question</a>
            <a href="#how-it-works" className="btn-outline-dark">How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">Hours 1-on-1</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">100</span>
              <span className="hero-stat-label">Trick Questions</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📅</span>
              <span className="hero-stat-label">Daily Practice</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">✏️</span>
              <span className="hero-stat-label">Methods That Don&apos;t Go Wrong</span>
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
                &ldquo;They know it.<br />
                They just keep<br />
                losing marks.&rdquo;
              </h2>
              <p className="section-lead">
                &ldquo;My child understands the work but keeps losing marks on careless errors.&rdquo; A dropped negative, a misread question, a missing unit.
              </p>
            </div>
            <aside className="highlight-box">
              <p>Silly mistakes aren&apos;t carelessness. <span className="em">They usually have a cause your child can learn to spot.</span></p>
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
              Before the first class, your child does a short timed paper in their own time. The teacher uses it to see where marks are being lost.
            </p>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>Diagnostic review and goals</h3>
                <p>We go through the diagnostic together and set goals. Your child finds their own mistakes first.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2–8</div>
                <h3>Focused on your child</h3>
                <p>Sessions focus on what the diagnostic found, fully personalised to your child, with short homework after each class.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">✓</div>
                <h3>Parent report</h3>
                <p>At the end, a parent report on your child&apos;s progress and next steps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE TEACH IT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">How we teach it</span>
            <h2 className="section-title">How we cure silly mistakes</h2>
            <div className="outcome-grid">
              <article className="platform-card">
                <div className="platform-icon">⏱️</div>
                <h3>Simulate exam pressure</h3>
                <p>Practise in a high-pressure, exam-style setting, so traps don&apos;t catch your child out on the day.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">📝</div>
                <h3>Timed papers</h3>
                <p>Work through timed papers to build speed and accuracy together.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">✅</div>
                <h3>Double-check quickly</h3>
                <p>Learn fast ways to check answers before moving on.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🔎</div>
                <h3>Find mistake patterns</h3>
                <p>Spot your child&apos;s patterns: dropped negatives, misread questions or missed units.</p>
              </article>
            </div>
          </div>
        </section>

        {/* WHY DAILY PRACTICE */}
        <section style={{ background: 'var(--gradient-navy)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag" style={{ color: 'var(--accent-green)' }}>Why daily practice</span>
              <h2 className="section-title" style={{ color: 'white' }}>Short daily practice beats forgetting</h2>
              <p className="section-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
                New math skills fade fast. Forgetting is steepest in the first day or two after a lesson, a pattern first measured by Hermann Ebbinghaus. Each short practice session brings the skill back and slows how quickly it fades.
              </p>
              <p className="section-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
                That&apos;s why we ask for a few minutes of practice every day between classes, so safe methods become automatic.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginTop: '16px' }}>
                <Link href="/blog/why-daily-math-practice-works" style={{ color: 'white', textDecoration: 'underline' }}>Read the science behind daily practice →</Link>
              </p>
            </div>
            <figure style={{ margin: 0 }}>
              <img
                src="/images/blog/why-daily-math-practice-works/forgetting-curve.webp"
                alt="Forgetting curve chart: retention drops to about 60% a day after an online class. Each practice session (online practice on day 1, a worksheet on day 3, practice on day 6) resets retention to 100%, and after each one it fades more slowly."
                width={1600}
                height={1195}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
              />
            </figure>
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
                <li>A parent report on progress and next steps</li>
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
                  <li>Help spotting and fixing their own mistakes</li>
                  <li>Homework after each class</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Parent progress report</li>
                </ul>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={signUpUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
                  <a href={askUrl} className="btn-outline-white" target="_blank" rel="noopener noreferrer">Ask a Question</a>
                </div>
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
              <a href={signUpUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
              <a href={askUrl} className="btn-outline-dark" target="_blank" rel="noopener noreferrer">Ask a Question</a>
              <a href={trialUrl} className="btn-outline-dark">Try a Free Math Class</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <section className="cta-section">
          <h2>Make this the last term of silly mistakes</h2>
          <p>8 flexible 1-on-1 sessions, methods that don&apos;t go wrong, and a parent progress report, all for SGD 640.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={signUpUrl} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', padding: '18px 44px' }}>
              Sign Up Now
            </a>
            <a href={askUrl} className="btn-outline-white" style={{ fontSize: '18px', padding: '16px 40px' }} target="_blank" rel="noopener noreferrer">
              Ask a Question
            </a>
          </div>
          <p className="cta-note">8 Classes · 1-on-1 · {gradeRange} · Online</p>
        </section>
      </main>

      <Footer />
    </>
  )
}
