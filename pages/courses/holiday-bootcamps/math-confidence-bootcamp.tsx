import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'
const stripeUrl = 'https://buy.stripe.com/3cIdR899Zg3r3Ay6mG93y1v'

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
    answer: 'The price of this course is SGD 640. This includes: Diagnostic assessment, 8 Classes (1 on 1), Completion Certificate, and Continuous Support.',
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

export default function MathConfidence() {
  return (
    <>
      <Head>
        <title>Math Confidence Bootcamp — Strive</title>
        <meta name="description" content="8-session 1-on-1 Math Confidence bootcamp for grades 4–9. Diagnostic assessment, curriculum-aligned coaching, and a detailed progress report. SGD 640." />
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
          <div className="hero-tag">8 Classes · Ages 10+ · Online</div>
          <h1>
            Math<br />
            <span className="gradient-text">Confidence</span>
          </h1>
          <p className="hero-sub">
            Patient 1:1 coaching that makes math finally make sense, aligned to your child&apos;s school curriculum, with a full diagnostic assessment and a detailed progress report.
          </p>
          <div className="hero-actions">
            <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            <a href="#how-it-works" className="btn-outline-dark">How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">Hours 1-on-1</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏅</span>
              <span className="hero-stat-label">Completion Certificate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📋</span>
              <span className="hero-stat-label">Curriculum Aligned</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📊</span>
              <span className="hero-stat-label">Diagnostic Report Card</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* WHY CONFIDENCE TRACK */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Why Confidence Track?</span>
            <h2 className="section-title">Built for kids who&apos;ve switched off from math</h2>
            <div className="platform-grid">
              <article className="platform-card">
                <div className="platform-icon">📋</div>
                <h3>Aligned with your School Curriculum</h3>
                <p>Designed for international school students — we work with students from UWCSEA, SAS, Dover Court, and more. Content matches exactly what your child&apos;s school teaches.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🤝</div>
                <h3>Expert 1:1 Instruction that Makes Math Engaging</h3>
                <p>Instructors trained in helping students overcome fear and build positive relationships with math. They share progress updates after each session so you always know how your child is doing.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">📊</div>
                <h3>Customised Report Card for Instant Clarity</h3>
                <p>Through 1:1 diagnostic assessment, our state-of-the-art Report Card gives you never-before-seen clarity on your child&apos;s standing and progress — not just &ldquo;needs improvement.&rdquo;</p>
              </article>
            </div>
          </div>
        </section>

        {/* PROBLEM NARRATIVE */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Sound familiar?</span>
              <h2 className="section-title">
                My Child Used to<br />
                Love Math...<br />
                What Happened?
              </h2>
              <p className="section-lead">
                They were curious, confident, engaged. Then suddenly math became the enemy. Homework is a battle. Test anxiety kicks in. They say &ldquo;I can&apos;t do this&rdquo; before even reading the question.
              </p>
              <p className="section-lead" style={{ marginTop: '16px' }}>
                You&apos;re not alone. And it&apos;s fixable.
              </p>
            </div>
            <aside className="highlight-box">
              <p>The confidence gap starts small. <span className="em">One topic that didn&apos;t click. One bad test. One year of falling behind.</span></p>
              <p>Left unchecked, it compounds. Math becomes something they dread instead of something they can do.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                The Confidence Track is designed specifically to break that cycle.
              </p>
            </aside>
          </div>
        </section>

        {/* THE REAL PROBLEM + PARENT QUOTES */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">The root cause</span>
            <h2 className="section-title">The Real Problem<br />(It&apos;s Not What You Think)</h2>
            <ul className="track-list" style={{ maxWidth: '640px', marginBottom: '48px', fontSize: '16px', lineHeight: 1.7 }}>
              <li>School report cards say &ldquo;needs improvement&rdquo; but don&apos;t tell you what specifically to fix.</li>
              <li>You try to help at home, but they won&apos;t listen to you.</li>
              <li>Group tutoring just re-teaches the same school content the same way — which didn&apos;t work the first time.</li>
              <li>Meanwhile, the gap grows. Confidence shrinks. And math becomes something they dread.</li>
            </ul>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary)', marginBottom: '24px' }}>What parents tell us</h3>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;She used to enjoy math in primary school. Now she shuts down completely.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;When I try to explain, we both end up frustrated. He learns better from someone else.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;He&apos;s actually capable, he just doesn&apos;t apply himself. I don&apos;t know how to reach him.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;I don&apos;t even know what the actual problem is. The school report just says &apos;below expectations.&apos;&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section style={{ background: 'white' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Who this is for</span>
              <h2 className="section-title">Is this right for your child?</h2>
              <ul className="track-list box-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>Grades 4–9 students at international schools</li>
                <li>Kids who say they don&apos;t like math (anymore)</li>
                <li>Students who are capable but don&apos;t engage</li>
                <li>Children who get anxious or distracted during math</li>
                <li>Families frustrated with generic tutoring that doesn&apos;t work</li>
                <li>Parents who want to understand specifically what their child needs</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/holidaycamps/Child+struggling+with+math.webp"
                alt="Child struggling with math"
                style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* WHAT THEY GAIN */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">What your child gains</span>
              <h2 className="section-title">What changes after 8 sessions</h2>
              <ul className="track-list check-list" style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                <li>Specific diagnosis of their learning gaps</li>
                <li>Rebuilt foundations using proven Singapore Math methods</li>
                <li>Real understanding (not memorised formulas they forget)</li>
                <li>Confidence from finally &ldquo;getting it&rdquo;</li>
                <li>Independence and focus strategies for homework</li>
                <li>A fresh relationship with math — working with someone who isn&apos;t you!</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/holidaycamps/Math+symbols+v2.webp"
                alt="Math symbols"
                style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">What we offer</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Everything included for SGD 640</h2>
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              One fixed price. No hidden extras. We cap enrolment to ensure every child gets an instructor who truly fits.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <article className="pricing-card featured" style={{ maxWidth: '520px', width: '100%' }}>
                <span className="pricing-hours">Math Confidence Bootcamp</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>Diagnostic assessment to pinpoint specific gaps (complete at home)</li>
                  <li>8 hours of 1:1 personalised online coaching</li>
                  <li>All learning materials &amp; visual aids</li>
                  <li>Alignment with your school&apos;s curriculum</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Detailed progress report showing exactly what improved</li>
                  <li>Certificate of completion</li>
                  <li>30-min parent consultation on how to support at home</li>
                </ul>
                <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
                <p className="pricing-note">Ages 10+ · Fully online</p>
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
                <p>Traveling? Visiting family? Sessions fit around your holiday plans — not the other way around. You can book your 8 classes at any time during the holidays.</p>
              </div>
              <div className="scheduling-card">
                <h3>Classes never expire</h3>
                <p>If some classes remain unscheduled after the holidays, they can still be used throughout the school year.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY THIS HOLIDAY */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Why now?</span>
              <h2 className="section-title">Why This Holiday<br />is the Right Time</h2>
              <p className="section-lead">
                Each new term brings new term anxiety. New content. More pressure.
              </p>
              <p className="section-lead" style={{ marginTop: '16px' }}>
                Give your child 8 hours to rebuild their foundation before the stakes get higher.
              </p>
              <div style={{ marginTop: '32px' }}>
                <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
              </div>
            </div>
            <aside className="highlight-box">
              <p>No homework battles. No group classes where they feel behind.</p>
              <p><span className="em">Just focused, personalised attention on fixing what&apos;s broken</span> — so they can succeed when school starts again.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                8 hours is enough to move the needle. But only if you start before the next term does.
              </p>
            </aside>
          </div>
        </section>

        {/* REQUIREMENTS + SIGN UP */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">What you need to get started</h2>
            <ul className="track-list" style={{ fontSize: '15px', lineHeight: 1.7, marginTop: '24px' }}>
              <li>Ages 10+</li>
              <li>Comfortable with using a mouse and keyboard</li>
            </ul>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
              <a href={trialUrl} className="btn-outline-dark">Try a Free Math Class</a>
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
          <h2>Ready to rebuild your child&apos;s math confidence?</h2>
          <p>8 flexible 1-on-1 sessions, a diagnostic report card, and a certificate — all for SGD 640.</p>
          <a href={stripeUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }} target="_blank" rel="noopener noreferrer">
            Sign Up Now
          </a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 10+ · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Math Confidence bootcamp for students aged 10+ at international schools.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
