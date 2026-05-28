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

export default function MathPerformance() {
  return (
    <>
      <Head>
        <title>Math Performance Bootcamp — Strive</title>
        <meta name="description" content="8-session 1-on-1 Math Performance bootcamp for grades 4–9. Olympiad techniques, competition prep, and a global diagnostic benchmark. SGD 640." />
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
            <span className="gradient-text">Performance</span>
          </h1>
          <p className="hero-sub">
            Elite 1:1 coaching for high-achievers ready to go beyond the school curriculum — with Olympiad techniques, competition prep, and a global diagnostic benchmark.
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
              <span className="hero-stat-value">🏆</span>
              <span className="hero-stat-label">Competition Ready</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📊</span>
              <span className="hero-stat-label">Global Benchmark</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏅</span>
              <span className="hero-stat-label">Completion Certificate</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* WHY PERFORMANCE TRACK */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Why Performance Track?</span>
            <h2 className="section-title">Smart kids deserve math that makes them think</h2>
            <div className="platform-grid">
              <article className="platform-card">
                <div className="platform-icon">🏆</div>
                <h3>Advanced Challenges Beyond the School Curriculum</h3>
                <p>More challenging than the school curriculum — we prepare students from UWCSEA, SAS, Dover Court, and more for math competitions and Olympiad-level problem solving.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🎯</div>
                <h3>Expert 1:1 Instruction to Master Olympiad-Level Techniques</h3>
                <p>Hand-selected specialists who have coached math Olympiad winners and competition medalists. They know how to push high-performers without burning them out.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">📊</div>
                <h3>Customised Report Card for Instant Clarity</h3>
                <p>Through 1:1 diagnostic assessment, you&apos;ll receive insight into your child&apos;s global standing — not just how they&apos;re doing in class, but how they compare worldwide.</p>
              </article>
            </div>
          </div>
        </section>

        {/* PROBLEM NARRATIVE */}
        <section id="how-it-works" style={{ background: 'white' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">Is your child bored in math class?</span>
              <h2 className="section-title">
                Smart kids deserve<br />
                math that makes<br />
                them think
              </h2>
              <p className="section-lead">
                If your child breezes through school math but makes careless mistakes on tests... If they&apos;re capable of so much more but the classroom moves too slowly... This bootcamp is built for them.
              </p>
            </div>
            <aside className="highlight-box">
              <p>International school curricula often move at a pace <span className="em">designed for the average student</span> — leaving top performers unchallenged and disengaged.</p>
              <p>3–4 weeks of holiday. Zero math challenge. Your child&apos;s sharp problem-solving skills go dormant.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                Meanwhile, top students worldwide are training with Singapore Math and preparing for Olympiads. The gap widens every year.
              </p>
            </aside>
          </div>
        </section>

        {/* SOUND FAMILIAR */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Sound familiar?</span>
            <h2 className="section-title">The Problem with School Math</h2>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;Math homework takes 10 minutes. It&apos;s too easy.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;They work everything out in their head and lose marks for not showing working.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;I know they&apos;re capable of more, but school isn&apos;t pushing them.&rdquo;</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">&ldquo;They&apos;re interested in math competitions but we don&apos;t know how to prepare.&rdquo;</blockquote>
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
                <li>Grades 4–9 A/B students at international schools</li>
                <li>Students who find school math unchallenging</li>
                <li>Kids interested in math competitions (or parents interested for them!)</li>
                <li>Families who want to know where their child stands globally</li>
                <li>Students preparing for IB/A-Level math rigour</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/holidaycamps/Bored+math+whizz.webp"
                alt="Bored math whizz"
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
                <li>Advanced problem-solving techniques beyond school curriculum</li>
                <li>Competition confidence for upcoming competitions</li>
                <li>Disciplined working habits — no more mental math that costs marks</li>
                <li>Diagnostic benchmark for their abilities globally</li>
                <li>Genuine intellectual challenge that keeps them engaged</li>
                <li>Skills for high school success in IB and A-Level math</li>
              </ul>
              <p className="section-lead" style={{ marginTop: '24px', fontSize: '14px' }}>
                This isn&apos;t tutoring. This isn&apos;t homework help. This is <strong>elite-level problem-solving training</strong> personalised to your child&apos;s exact level.
              </p>
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
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">What we offer</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Everything included for SGD 640</h2>
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              One fixed price. No hidden extras. We cap enrolment to ensure every child is matched with an instructor who truly fits.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <article className="pricing-card featured" style={{ maxWidth: '520px', width: '100%' }}>
                <span className="pricing-hours">Math Performance Bootcamp</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">one-time · 8 hours of 1:1 coaching</span>
                <ul className="track-list" style={{ textAlign: 'left', marginTop: '20px', marginBottom: '24px' }}>
                  <li>Diagnostic assessment to pinpoint current level</li>
                  <li>8 hours of 1:1 personalised online coaching</li>
                  <li>All learning materials &amp; visual aids</li>
                  <li>Flexible scheduling throughout the holidays</li>
                  <li>Post-bootcamp competition</li>
                  <li>Detailed progress report</li>
                  <li>Certificate of completion</li>
                  <li>30-min parent consultation with a Stanford Graduate</li>
                </ul>
                <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
                <p className="pricing-note">Ages 10+ · Fully online</p>
              </article>
            </div>
          </div>
        </section>

        {/* SCHEDULING */}
        <section style={{ background: 'var(--bg-subtle)' }}>
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
          <h2>Students who excel globally don&apos;t take the holidays off.</h2>
          <p>Give your child 8 hours with an expert who understands what high-performers need.</p>
          <a href={stripeUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }} target="_blank" rel="noopener noreferrer">
            Sign Up Now
          </a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 10+ · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Math Performance bootcamp for high-achieving students aged 10+ at international schools.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
