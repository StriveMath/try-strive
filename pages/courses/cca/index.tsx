import Head from 'next/head'
import Nav from '@/components/Nav'

const contactEmail = 'CCA@strivemath.com'

export default function CCAIndex() {
  return (
    <>
      <Head>
        <title>Coding &amp; Math CCA for International Schools | Strive</title>
        <meta name="description" content="Weekly coding and math CCA programmes for international schools in Singapore. Strive supplies the teacher, curriculum, laptops and platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coding &amp; Math CCA for International Schools | Strive" />
        <meta property="og:description" content="Weekly coding and math CCA programmes for international schools in Singapore. Strive supplies the teacher, curriculum, laptops and platform." />
      </Head>

      <Nav />

      <main className="cca2">
        {/* HERO */}
        <section className="wrap cca-hero">
          <div>
            <p className="eyebrow">CCA · ECA · ASA · International Schools · Singapore</p>
            <h1><span className="grad-text">Coding &amp; Math CCA</span><br />for International Schools</h1>
            <p className="lead">Weekly coding and math classes at your school. Strive supplies the teacher, curriculum, and platform.</p>
          </div>
          <div className="photo">
            <img src="/images/cca/tamir-student.webp" alt="Strive teacher Tamir coding with a student on a laptop" />
          </div>
        </section>

        {/* ABOUT */}
        <section className="wrap section about-strive" id="about-strive">
          <div className="about-card">
            <p className="eyebrow">About Strive</p>
            <h2>Built for schools that want meaningful STEM learning</h2>
            <p>Strive Math is a Singapore-based coding and math education provider for students aged 8 to 16. Founded by Stanford alumnus and Forbes 30 Under 30 lister Pulkit Agarwal, Strive is backed by Y Combinator and builds its own learning platform to support engaging, project-based lessons. We partner with international schools to make STEM enrichment easy to run, with expert teachers, curriculum, classroom setup, and student progress handled by our team.</p>
          </div>
          <div className="center mt28">
            <a href="/images/cca/strive-cca-information-pack.pdf" download className="btn btn-primary"><i className="ti ti-download"></i> Download our CCA Information Pack</a>
          </div>
        </section>

        {/* COURSES */}
        <section className="wrap section" id="courses">
          <div className="section-head">
            <p className="eyebrow">Our courses</p>
            <h2>Three programmes, tailored to your students</h2>
          </div>
          <div className="courses">
            <div className="course-card popular">
              <div className="photo"><span className="pop-tag">Most popular</span><img src="/images/cca/coding-class.webp" alt="Students in a Strive coding class" /></div>
              <div className="course-body">
                <h3>Coding Fundamentals</h3>
                <p className="desc">Build real apps and projects in Python.</p>
                <div className="course-meta"><i className="ti ti-clock"></i> 1 hour</div>
                <div className="course-meta"><i className="ti ti-calendar"></i> 11 weeks</div>
                <div className="course-meta"><i className="ti ti-mood-smile"></i> Ages 8&ndash;16</div>
                <div className="course-meta"><i className="ti ti-coin"></i> S$30&ndash;35 per student, per hour</div>
              </div>
            </div>
            <div className="course-card">
              <div className="photo"><img src="/images/cca/game-dev-class.webp" alt="Students building a game in a Strive class" /></div>
              <div className="course-body">
                <h3>Game Development</h3>
                <p className="desc">Design and build playable games from scratch.</p>
                <div className="course-meta"><i className="ti ti-clock"></i> 1 hour</div>
                <div className="course-meta"><i className="ti ti-calendar"></i> 11 weeks</div>
                <div className="course-meta"><i className="ti ti-mood-smile"></i> Ages 8&ndash;16</div>
                <div className="course-meta"><i className="ti ti-coin"></i> S$30&ndash;35 per student, per hour</div>
              </div>
            </div>
            <div className="course-card">
              <div className="photo"><img src="/images/cca/math-class.webp" alt="Students in a Strive math class" /></div>
              <div className="course-body">
                <h3>Mathematics</h3>
                <p className="desc">Strengthen school maths and competition skills.</p>
                <div className="course-meta"><i className="ti ti-clock"></i> 1 hour</div>
                <div className="course-meta"><i className="ti ti-calendar"></i> 11 weeks</div>
                <div className="course-meta"><i className="ti ti-mood-smile"></i> Ages 8&ndash;16</div>
                <div className="course-meta"><i className="ti ti-coin"></i> S$30&ndash;35 per student, per hour</div>
              </div>
            </div>
          </div>
          <div className="center mt28">
            {/* Update href once the PDF is added to /public, e.g. /strive-cca-information-pack.pdf */}
            <a href="/images/cca/strive-cca-information-pack.pdf" download className="btn btn-primary"><i className="ti ti-download"></i> Download our CCA Information Pack</a>
          </div>
        </section>

        {/* TRUST */}
        <section className="wrap section" id="trust">
          <div className="trust">
            <div className="section-head">
              <h2>Why 14+ international schools trust us</h2>
            </div>
            <div className="proof">
              <div className="photo"><img src="/images/cca/portfolio.webp" alt="A student's Strive coding portfolio" /></div>
              <div className="photo"><img src="/images/cca/certificate.webp" alt="Strive course completion certificate" /></div>
              <div className="photo"><img src="/images/cca/uwc-competition.webp" alt="Students at the UWC math competition" /></div>
            </div>
            <div className="badges">
              <span className="badge"><i className="ti ti-shield-check"></i> Child-safety certified teachers</span>
              <span className="badge"><i className="ti ti-device-laptop"></i> Laptops &amp; setup included</span>
              <span className="badge"><i className="ti ti-certificate"></i> Certificate + portfolio</span>
              <span className="badge"><i className="ti ti-trophy"></i> Host inter-school competitions</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap section faq" id="faq">
          <div className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
          </div>

          <details>
            <summary>How much does it cost? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Every school is different, so we work with you directly to find a structure and price that fits your students, typically in the range of S$30&ndash;35 per student per hour, depending on group size, session length and frequency.</div>
          </details>
          <details>
            <summary>Are your teachers vetted for child safety? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Yes. All our teachers complete child safeguarding training through childsafeguarding.com. If your school requires a specific safeguarding provider or certification, just let us know and we&rsquo;ll arrange it.</div>
          </details>
          <details>
            <summary>Do students need any prior experience? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">No prior experience is needed. Our programmes are designed for students starting from zero, and the self-paced format lets each student progress at a comfortable level, so new and returning students can share the same classroom.</div>
          </details>
          <details>
            <summary>What equipment do students need? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Nothing. We bring everything required, including laptops. Students can also use their own laptop if they prefer; the platform runs in any browser.</div>
          </details>
          <details>
            <summary>What platform do students use? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Students learn on Strive&rsquo;s own coding and math platform, the same one used in our private 1-on-1 sessions, built by us rather than licensed from a third party.</div>
          </details>
          <details>
            <summary>What will students have to show for it? <i className="ti ti-chevron-down"></i></summary>
            <div className="answer">Every student builds a portfolio of real projects and earns a personalised Strive certificate on completion, useful for university applications and beyond.</div>
          </details>
        </section>

        {/* FINAL CTA */}
        <section className="wrap section">
          <div className="cta">
            <h2>Bring a Strive CCA to your school</h2>
            <p>Reach out to discuss adding a coding or math programme to your next CCA cycle.</p>
            <a href={`mailto:${contactEmail}?subject=Strive%20CCA%20sign-up`} className="btn btn-primary">Sign up</a>
          </div>
        </section>
      </main>

      <footer className="cca2-footer">
        For international schools in Singapore · Ages 8&ndash;16 · Laptops provided · No setup required<br />
        &copy; Strive · {contactEmail.toLowerCase()}
      </footer>
    </>
  )
}
