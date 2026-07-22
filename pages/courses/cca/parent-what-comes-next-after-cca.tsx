import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useCcaPersonalization } from '@/hooks/useCcaPersonalization'

// gift=card + promoCode=freeECAtrial: sales-confirmed combination that both
// waives the usual Stripe trial deposit and tags the lead as an ECA/CCA
// continuation candidate for the $65/hr 15-hour package.
const trialUrl = 'https://www.strivemath.com/?show_form=true&gift=card&promoCode=freeECAtrial'

export default function ParentWhatComesNextAfterCCA() {
  const { name, school, term, recognizedTerm } = useCcaPersonalization()

  const eyebrowText = recognizedTerm ? `For Parents of ${term} Graduates` : 'For Parents of CCA & ECA Graduates'
  const schoolPhrase = school ? `${school}'s` : 'their school’s'
  const leadIntro = name
    ? `Hi, ${name} just completed ${schoolPhrase} Strive coding ${term}. Great progress!`
    : `Your child just completed ${schoolPhrase} Strive coding ${term}. Great progress!`
  const childLabel = name || 'your child'

  return (
    <>
      <Head>
        <title>What Comes Next After Your Child&rsquo;s CCA? | Strive</title>
        <meta name="description" content="Your child finished their school's Strive CCA coding programme? Here's how to keep their momentum going with a free 1-on-1 trial class and a special continuation rate." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="What Comes Next After Your Child&rsquo;s CCA? | Strive" />
        <meta property="og:description" content="Your child finished their school's Strive CCA coding programme? Here's how to keep their momentum going with a free 1-on-1 trial class and a special continuation rate." />
      </Head>

      <Nav />

      <main className="cca2">
        {/* HERO */}
        <section className="wrap cca-hero" style={{ gridTemplateColumns: '1fr', textAlign: 'center', paddingBottom: '8px' }}>
          <div>
            <p className="eyebrow">{eyebrowText}</p>
            <h1>Your child has built the <span className="grad-text">foundations</span>.<br />Let&rsquo;s help them keep building.</h1>
            <p className="lead" style={{ maxWidth: '640px', margin: '16px auto 0' }}>{leadIntro} Ready to help them keep levelling up? Continue with 1-on-1 classes tailored to their pace, starting with a free trial class.</p>
            <div className="center mt28">
              <a href={trialUrl} className="btn btn-primary">Book your child&rsquo;s free trial class</a>
              <p style={{ fontSize: '14px', color: 'var(--c-muted)', marginTop: '10px' }}>No cost, no obligation. Just an hour with one of our expert teachers.</p>
            </div>
          </div>
        </section>

        {/* PROGRESS */}
        <section className="wrap section" id="progress">
          <div className="section-head">
            <p className="eyebrow">Their progress so far</p>
            <h2>Partway through Foundations already</h2>
          </div>
          <div className="about-card">
            <p>In their {term} classes, {childLabel} completed Headstart and made real progress through Foundations, including Variables and the start of Logic (if-statements and comparison operators). Fluency comes next: Loops, Functions, and Objects.</p>
            <div className="levels">
              <span className="level-pill done">Headstart</span>
              <span className="level-pill current">Foundations</span>
              <span className="level-pill locked">Fluency</span>
              <span className="level-pill locked">Mastery</span>
              <span className="level-pill locked">Advanced</span>
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--c-muted)', marginTop: '4px' }}>Complete all 5 levels and they&rsquo;ll be coding at a first-year university level.</p>
          </div>
        </section>

        {/* WHY 1:1 */}
        <section className="wrap section" id="why-1-1">
          <div className="section-head">
            <p className="eyebrow">Why go 1-on-1</p>
            <h2>Personalised pace, real progress</h2>
          </div>
          <div className="badges">
            <span className="badge"><i className="ti ti-shield-check"></i> Child-safety certified teachers</span>
            <span className="badge"><i className="ti ti-user-check"></i> Same teacher every class</span>
            <span className="badge"><i className="ti ti-clock"></i> Hours never expire</span>
            <span className="badge"><i className="ti ti-calendar-event"></i> Free reschedule with 4hr notice</span>
            <span className="badge"><i className="ti ti-code"></i> 100+ practice projects</span>
          </div>
        </section>

        {/* INVESTMENT PACKAGE */}
        <section className="wrap section" id="package">
          <div className="section-head">
            <p className="eyebrow">After the trial</p>
            <h2>A special rate for {term} families</h2>
          </div>
          <div className="price-card">
            <div className="price-figure">
              <div className="price-was">$90/hour</div>
              <div className="price-now">$65/hour</div>
              <div className="price-total">15 hours &middot; $975 total</div>
            </div>
            <ul>
              <li>Flexible scheduling, so you can cancel or reschedule anytime</li>
              <li>Access to 100+ practice projects and tutorials</li>
              <li>Attentive support from our team, 7 days a week</li>
            </ul>
          </div>
          <p className="price-note">This rate is exclusively for {term} families and cannot be renewed once used. Standard 1-on-1 pricing applies afterward.</p>
        </section>

        {/* FAQ */}
        <section className="wrap section faq" id="faq">
          <div className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
          </div>

          <details>
            <summary>Are your teachers vetted for child safety? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes. All our teachers complete child safeguarding training through childsafeguarding.com. If your school requires a specific safeguarding provider or certification, just let us know and we&rsquo;ll arrange it.</div>
          </details>
          <details>
            <summary>Which level will my child start at? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Their free trial class is where we assess their progress from their {term} classes. Their teacher will then recommend where to continue, and personalise their curriculum to match their level and pace.</div>
          </details>
          <details>
            <summary>Does the teacher stay the same for all lessons? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes, their teacher remains the same throughout. We do suggest considering a change every five months so your child experiences different teaching styles and perspectives.</div>
          </details>
          <details>
            <summary>Do the hours of a package expire? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">No, your hours never expire. Use them at your own pace.</div>
          </details>
          <details>
            <summary>What if we have to miss a lesson? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Let us know at least 4 hours before the class to reschedule free of charge. Without 4 hours&rsquo; notice, 30 minutes of the class will be charged.</div>
          </details>
          <details>
            <summary>What is your refund policy? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">You can cancel your subscription at any time, and we refund any unused hours.</div>
          </details>
          <details>
            <summary>Do you only teach online classes? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes, all our 1-on-1 classes are conducted online. All your child needs is a computer with internet access, audio, microphone, and camera.</div>
          </details>
        </section>

        {/* FINAL CTA */}
        <section className="wrap section">
          <div className="cta">
            <h2>Ready for them to pick up where they left off?</h2>
            <p>Book a free 1-hour trial class with one of our expert teachers. No cost, no obligation.</p>
            <a href={trialUrl} className="btn btn-primary">Book your child&rsquo;s free trial class</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
