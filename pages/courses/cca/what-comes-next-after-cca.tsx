import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useCcaPersonalization } from '@/hooks/useCcaPersonalization'

// gift=card + promoCode=freeECAtrial: sales-confirmed combination that both
// waives the usual Stripe trial deposit and tags the lead as an ECA/CCA
// continuation candidate for the $65/hr 15-hour package.
const trialUrl = 'https://www.strivemath.com/?show_form=true&gift=card&promoCode=freeECAtrial'

export default function WhatComesNextAfterCCA() {
  const { name, school, term, recognizedTerm } = useCcaPersonalization()

  const eyebrowText = recognizedTerm ? `For ${term} Graduates` : 'For CCA & ECA Graduates'
  const greeting = name ? `Hi ${name}! ` : ''
  const schoolPhrase = school ? `${school}'s` : 'your school’s'

  return (
    <>
      <Head>
        <title>What Comes Next After Your CCA? | Strive</title>
        <meta name="description" content="Finished your school's Strive CCA coding programme? Keep going with a free 1-on-1 trial class and a special continuation rate for CCA students." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="What Comes Next After Your CCA? | Strive" />
        <meta property="og:description" content="Finished your school's Strive CCA coding programme? Keep going with a free 1-on-1 trial class and a special continuation rate for CCA students." />
      </Head>

      <Nav />

      <main className="cca2">
        {/* HERO */}
        <section className="wrap cca-hero" style={{ gridTemplateColumns: '1fr', textAlign: 'center', paddingBottom: '8px' }}>
          <div>
            <p className="eyebrow">{eyebrowText}</p>
            <h1>You&rsquo;ve built the <span className="grad-text">foundations</span>.<br />Let&rsquo;s keep building.</h1>
            <p className="lead" style={{ maxWidth: '640px', margin: '16px auto 0' }}>{greeting}You&rsquo;ve completed {schoolPhrase} Strive coding {term} &mdash; nice work! Ready to keep levelling up? Continue with 1-on-1 classes, personalised to your pace, starting with a free trial class.</p>
            <div className="center mt28">
              <a href={trialUrl} className="btn btn-primary">Book your free trial class</a>
              <p style={{ fontSize: '14px', color: 'var(--c-muted)', marginTop: '10px' }}>No cost, no obligation &mdash; just an hour with one of our expert teachers.</p>
            </div>
          </div>
        </section>

        {/* PROGRESS */}
        <section className="wrap section" id="progress">
          <div className="section-head">
            <p className="eyebrow">Your progress so far</p>
            <h2>You&rsquo;re partway through Foundations</h2>
          </div>
          <div className="about-card">
            <p>In your {term} classes, you completed Headstart and made real progress through Foundations &mdash; including Variables and the start of Logic (if-statements and comparison operators). Fluency comes next: Loops, Functions, and Objects.</p>
            <div className="levels">
              <span className="level-pill done">Headstart</span>
              <span className="level-pill current">Foundations</span>
              <span className="level-pill locked">Fluency</span>
              <span className="level-pill locked">Mastery</span>
              <span className="level-pill locked">Advanced</span>
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--c-muted)', marginTop: '4px' }}>Complete all 5 levels and you&rsquo;ll be coding at a first-year university level.</p>
          </div>
        </section>

        {/* WHY 1:1 */}
        <section className="wrap section" id="why-1-1">
          <div className="section-head">
            <p className="eyebrow">Why go 1-on-1</p>
            <h2>Personalised pace, real progress</h2>
          </div>
          <div className="badges">
            <span className="badge"><i className="ti ti-user-check"></i> Same teacher every class</span>
            <span className="badge"><i className="ti ti-clock"></i> Hours never expire</span>
            <span className="badge"><i className="ti ti-calendar-event"></i> Free reschedule with 4hr notice</span>
            <span className="badge"><i className="ti ti-code"></i> 100+ practice projects</span>
          </div>
        </section>

        {/* INVESTMENT PACKAGE */}
        <section className="wrap section" id="package">
          <div className="section-head">
            <p className="eyebrow">After your trial</p>
            <h2>A special rate for {term} students</h2>
          </div>
          <div className="price-card">
            <div className="price-figure">
              <div className="price-was">$90/hour</div>
              <div className="price-now">$65/hour</div>
              <div className="price-total">15 hours &middot; $975 total</div>
            </div>
            <ul>
              <li>Flexible scheduling &mdash; cancel or reschedule anytime</li>
              <li>Access to 100+ practice projects and tutorials</li>
              <li>Attentive support from our team, 7 days a week</li>
            </ul>
          </div>
          <p className="price-note">This rate is exclusively for {term} students and cannot be renewed once used. Standard 1-on-1 pricing applies afterward.</p>
        </section>

        {/* FAQ */}
        <section className="wrap section faq" id="faq">
          <div className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
          </div>

          <details>
            <summary>Do the hours of a package expire? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">No, your hours never expire. Use them at your own pace.</div>
          </details>
          <details>
            <summary>What if I have to miss a lesson? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Let us know at least 4 hours before your class to reschedule free of charge. Without 4 hours&rsquo; notice, 30 minutes of the class will be charged.</div>
          </details>
          <details>
            <summary>Does the teacher stay the same for all lessons? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes, your teacher remains the same throughout. We do suggest considering a change every five months so students experience different teaching styles and perspectives.</div>
          </details>
          <details>
            <summary>Which level will I start at? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Your free trial class is where we assess your progress from the CCA programme. Your teacher will then recommend where to continue, and personalise your curriculum to match your level and pace.</div>
          </details>
          <details>
            <summary>What is your refund policy? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">You can cancel your subscription at any time, and we refund any unused hours.</div>
          </details>
          <details>
            <summary>Do you only teach online classes? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes, all our 1-on-1 classes are conducted online &mdash; all you need is a computer with internet access, audio, microphone, and camera.</div>
          </details>
        </section>

        {/* FINAL CTA */}
        <section className="wrap section">
          <div className="cta">
            <h2>Ready to pick up where you left off?</h2>
            <p>Book a free 1-hour trial class with one of our expert teachers &mdash; no cost, no obligation.</p>
            <a href={trialUrl} className="btn btn-primary">Book your free trial class</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
