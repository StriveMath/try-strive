import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://calendly.com/strive-trial-class/try-a-math-class'

export default function MathClasses() {
  return (
    <>
      <Head>
        <title>1-on-1 Math Classes for Kids in Singapore — Strive</title>
        <meta name="description" content="Live, 1-on-1 math tutoring for students in grades 4–9. Curriculum-aligned, fully online, SGD 80/hr. Serving UWCSEA, SAS, Dover Court and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="hero-tag">1-on-1 · Grades 4–9 · Online</div>
          <h1>
            Math Classes<br />
            <span className="gradient-text">Built Around Your Child</span>
          </h1>
          <p className="hero-sub">
            1-on-1 live classes that move at your child&apos;s pace, follow their school&apos;s curriculum, and build a real love for math.
          </p>
          <div className="hero-actions">
            <a href={trialUrl} className="btn-primary">Book a Free Trial</a>
            <a href="#how-it-works" className="btn-outline-white">How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">1-on-1</span>
              <span className="hero-stat-label">Personalised Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📋</span>
              <span className="hero-stat-label">Curriculum Aligned</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">📊</span>
              <span className="hero-stat-label">Progress Report Card</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">❤️</span>
              <span className="hero-stat-label">Love for Math</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* WHAT IS IT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">What is Strive Math?</span>
              <h2 className="section-title">
                One teacher.<br />
                One child.<br />
                One hour.
              </h2>
              <p className="section-lead">
                Strive Math is live, 1-on-1 math tutoring for students in grades 4 to 9. Your child works with a matched expert teacher on exactly what they need — nothing more, nothing less.
              </p>
            </div>
            <aside className="highlight-box">
              <p>No fixed syllabus your child has to keep up with. <span className="em">Every session is built around them.</span></p>
              <p>Whether your child finds math too easy, too hard, or just stopped caring — we meet them exactly where they are.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                Classes are fully online. Your child can join from Singapore or anywhere in the world.
              </p>
            </aside>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Who it&apos;s for</span>
            <h2 className="section-title">
              Every child is different.<br />
              So is every class.
            </h2>
            <p className="section-lead">
              Kids come to Strive Math with a wide range of abilities and development areas. Here&apos;s where we typically see the biggest difference.
            </p>
            <div className="tracks-grid">
              <article className="track-card extension">
                <span className="track-label">For kids who need more challenge</span>
                <h3>Your child finds school math too easy</h3>
                <p>School math moves too slowly for some kids. If yours is bored, making careless mistakes because they rush, or ready for something genuinely hard — this is where we start.</p>
                <ul className="track-list">
                  <li>Singapore Math and olympiad-style problem solving</li>
                  <li>Preparation for math competitions</li>
                  <li>Extension beyond the school curriculum</li>
                  <li>Building the rigour and working habits that matter in high school</li>
                </ul>
              </article>
              <article className="track-card foundation">
                <span className="track-label">For kids who need more confidence</span>
                <h3>Your child has switched off from math</h3>
                <p>Sometimes a bad year, a difficult teacher, or one topic that didn&apos;t click is enough. If your child used to be fine and now isn&apos;t — or never felt confident — we work from there.</p>
                <ul className="track-list">
                  <li>Targeted work on the specific gaps holding them back</li>
                  <li>Aligned to their school syllabus</li>
                  <li>A teacher who explains things differently than their class teacher</li>
                  <li>Quick wins that rebuild confidence fast</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">The platform</span>
            <h2 className="section-title">
              Built for math.
            </h2>
            <p className="section-lead">
              We built our own platform specifically for teaching math online.
            </p>
            <div className="platform-grid">
              <article className="platform-card">
                <div className="platform-icon">🤝</div>
                <h3>Feels like sitting side by side</h3>
                <p>Teacher and student work on the same adaptable worksheet at the same time. Either can annotate, edit, or draw on any part of the worksheet — so the session feels like sitting side by side, not staring at a shared screen. Worksheets include visual interactive examples to make learning fun, relevant and aligned to student interests.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">📊</div>
                <h3>Mastery tracking, not just marks</h3>
                <p>Your child types their working directly on screen so teachers can see every step, not just the final answer — catching exactly where a misconception starts. Every session feeds into a running record of what your child actually understands, giving you a detailed report card mapped to real learning outcomes, not just a percentage on a test.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">📋</div>
                <h3>Curriculum alignment and homework</h3>
                <p>Content is mapped to the curriculum your child actually studies. Teachers adapt worksheets on the fly — changing a question, adding an example, adjusting difficulty, by hand or with AI — and send homework after class that engages and reinforces the concepts taught.</p>
              </article>
            </div>
          </div>
        </section>

        {/* REPORT CARD */}
        <section style={{ background: 'var(--bg-purple-tint)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">The report card</span>
              <h2 className="section-title">
                Never-before-seen clarity<br />on your child&apos;s progress
              </h2>
              <p className="section-lead">
                Our state-of-the-art Report Card gives you never seen before clarity on your child&apos;s standing and progress.
              </p>
              <ul className="track-list check-list" style={{ marginTop: '24px' }}>
                <li>Teacher&apos;s remarks on your child&apos;s confidence and attitude towards math</li>
                <li>Cognitive development tracking: memory, focus, grit and self-sufficiency</li>
                <li>Academic mastery mapped topic by topic against the school curriculum</li>
                <li>Updated after every single session</li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/images/math/math-report-card.webp"
                alt="Strive Math Report Card showing Teacher's Remarks with confidence and emotional relationship with math, Cognitive Development scores for memory, focus, grit and self-sufficiency, and Academic Learning Outcomes by topic including mastery percentages"
                className="report-card-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* GRADE INCREASE */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <div className="grade-chart-layout">
              <div>
                <span className="section-tag">Proven results</span>
                <h2 className="section-title">
                  Our approach increases students&apos; grades by{' '}
                  <span style={{ color: 'var(--accent-pink)' }}>41% over 12 months.</span>
                </h2>
              </div>
              <div>
                <div className="grade-bars-row">
                  {[
                    { year: '2015', pass: 51, fail: 49 },
                    { year: '2016', pass: 72, fail: 28 },
                    { year: '2017', pass: 74, fail: 26 },
                    { year: '2018', pass: 77, fail: 23 },
                    { year: '2019', pass: 88, fail: 12 },
                  ].map(({ year, pass, fail }) => (
                    <div key={year} className="grade-bar-col">
                      <div className="grade-bar">
                        <div className="grade-bar-pass" style={{ flex: pass }}>
                          <span>{pass}%</span>
                        </div>
                        <div className="grade-bar-fail" style={{ flex: fail }}>
                          <span>{fail}%</span>
                        </div>
                      </div>
                      <span className="grade-bar-year">{year}</span>
                    </div>
                  ))}
                </div>
                <p className="grade-chart-caption">
                  Strive uses the C-STEM approach from UC Davis, which raised math scores from 51% to 72% in one year and 88% in four years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARENT SPOTLIGHT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Parent spotlight</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>
              When a math teacher chooses us for her own daughter
            </h2>
            <article className="spotlight-card">
              <div>
                <h3>From math anxiety to math curiosity</h3>
                <p>Maureen Miller teaches internationally. She sees quality math education from both sides — as a teacher and as a parent. When she chose Strive Math for her daughter, she wasn&apos;t looking for extra drilling. She was looking for something that would actually change how her daughter felt about math.</p>
                <blockquote>
                  &ldquo;What has impressed me most is how dramatically my daughter&apos;s attitude toward math has changed. The sessions provide a low-pressure, supportive environment where she can explore concepts and solve problems creatively, without the stress she used to feel.&rdquo;
                </blockquote>
                <blockquote>
                  &ldquo;I&apos;ve watched her confidence grow as she&apos;s begun to see math as something she can play with, question, and enjoy. She&apos;s developed not only stronger problem-solving skills but a genuine curiosity and resilience that extend beyond the classroom.&rdquo;
                </blockquote>
                <div className="spotlight-tags">
                  <span className="tag">Confidence building</span>
                  <span className="tag">Math anxiety</span>
                  <span className="tag">Parent is a teacher</span>
                  <span className="tag">Attitude shift</span>
                </div>
              </div>
              <aside className="spotlight-visual">
                <div className="spotlight-avatar">M</div>
                <p className="spotlight-name">Maureen Miller</p>
                <p className="spotlight-detail">International educator<br />Parent of a Strive student</p>
              </aside>
            </article>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Pricing</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Simple, flexible plans</h2>
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto' }}>
              Both plans auto-renew so your child never loses momentum. Cancel any time.
            </p>
            <div className="pricing-grid">
              <article className="pricing-card">
                <span className="pricing-hours">4 hours</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>320</p>
                <span className="pricing-per">per month · SGD 80/hr</span>
                <p className="pricing-detail">One session a week. Good for families who want a steady rhythm without overcommitting.</p>
                <a href={trialUrl} className="btn-outline-dark">Get started</a>
                <p className="pricing-note">Auto-renews monthly</p>
              </article>
              <article className="pricing-card featured">
                <span className="pricing-hours">8 hours</span>
                <p className="pricing-amount"><span className="pricing-currency">SGD </span>640</p>
                <span className="pricing-per">per month · SGD 80/hr</span>
                <p className="pricing-detail">Two sessions a week. Better for kids who need to move faster — catching up or pushing ahead.</p>
                <a href={trialUrl} className="btn-primary">Get started</a>
                <p className="pricing-note">Auto-renews monthly</p>
              </article>
            </div>
            <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '14px', color: 'var(--text-muted)' }}>
              Not sure which plan is right? Book a free trial first and we&apos;ll recommend one after.
            </p>
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">How it compares</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>Strive vs group tutoring</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Group Tutoring</th>
                    <th className="highlight-col" style={{ background: 'var(--accent-purple)' }}>Strive Math</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Class size</td>
                    <td>10+ students per teacher</td>
                    <td className="highlight-col">1 student, 1 teacher. Every minute.</td>
                  </tr>
                  <tr>
                    <td>Pace</td>
                    <td>Fixed — your child keeps up or falls behind</td>
                    <td className="highlight-col">Set by your child, adjusted every session</td>
                  </tr>
                  <tr>
                    <td>Misconception tracking</td>
                    <td>Hard to catch in a group</td>
                    <td className="highlight-col">Visible in every step of working, every session</td>
                  </tr>
                  <tr>
                    <td>Scheduling</td>
                    <td>Fixed slots — works around the timetable</td>
                    <td className="highlight-col">Flexible online sessions that fit your family</td>
                  </tr>
                  <tr>
                    <td>Reporting</td>
                    <td>Term reports, if any</td>
                    <td className="highlight-col">Detailed mastery reports after every session</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>SGD 100–150/hr for comparable 1-on-1</td>
                    <td className="highlight-col">SGD 80/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">How it works</span>
            <h2 className="section-title">Up and running in three steps</h2>
            <p className="section-lead">
              Before your child&apos;s first class, we take the time to understand exactly where they are — so every session is built around them from day one.
            </p>
            <div style={{ textAlign: 'center', margin: '40px 0 0' }}>
              <img
                src="/images/math/math-how%20it%20works.webp"
                alt="Three-step onboarding: photos of past work via WhatsApp, expert topic-by-topic assessment, tailored lesson plan"
                style={{ maxWidth: '600px', width: '100%' }}
                loading="lazy"
              />
            </div>
            <div className="how-steps-grid">
              <div className="how-step">
                <div className="how-step-num">1</div>
                <h3>Share past work</h3>
                <p>We collect photos of your child&apos;s past tests and homework via WhatsApp, so we understand exactly where they are.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">2</div>
                <h3>Expert assessment</h3>
                <p>Our teachers assess your child&apos;s understanding topic by topic and build a complete picture of their strengths and gaps.</p>
              </div>
              <div className="how-step">
                <div className="how-step-num">3</div>
                <h3>Tailored lesson plan</h3>
                <p>We create a personalised Lesson Plan built around your child&apos;s specific needs, then classes begin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-grid">
              <article className="faq-item">
                <h3>What grades do you teach?</h3>
                <p>We primarily teach grades 4 to 9, but we work with younger students who are ready for it and older students who need to consolidate foundations. If you&apos;re unsure, book a trial and we&apos;ll assess where your child is.</p>
              </article>
              <article className="faq-item">
                <h3>Do you follow my child&apos;s school curriculum?</h3>
                <p>Yes. We align content to what your child&apos;s school actually teaches. We work with students at UWCSEA, SAS, Dover Court, and other international schools in Singapore, and we know their curricula well.</p>
              </article>
              <article className="faq-item">
                <h3>How does the teacher matching work?</h3>
                <p>We match based on your child&apos;s level, goals, and personality. It&apos;s not random. If the first match isn&apos;t right, we find another — at no cost to you.</p>
              </article>
              <article className="faq-item">
                <h3>My child doesn&apos;t need tutoring. Can you still challenge them?</h3>
                <p>Absolutely. A lot of our students are doing fine at school and bored. We work well above the school syllabus for kids who need it — Singapore Math methods, olympiad-style problems, competition prep.</p>
              </article>
              <article className="faq-item">
                <h3>How do I know if it&apos;s working?</h3>
                <p>You get a detailed report after each session, mapped to specific learning outcomes. You can see exactly what your child understands, what they&apos;re working on, and where they still have gaps.</p>
              </article>
              <article className="faq-item">
                <h3>What happens if we want to cancel?</h3>
                <p>Both plans auto-renew monthly and you can cancel at any time. There&apos;s no lock-in contract. We&apos;d rather earn your child&apos;s continued attendance than hold you to one.</p>
              </article>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: 'var(--bg-purple-tint)' }}>
          <div className="section-inner">
            <span className="section-tag">What parents say</span>
            <h2 className="section-title">What parents tell us</h2>
            <div className="testimonials-grid">
              <article className="testimonial-card wide">
                <blockquote className="testimonial-text">
                  What has impressed me most about Strive Math is how dramatically my daughter&apos;s attitude toward math has changed since joining. These experiences have helped her develop not only stronger problem-solving skills but also a genuine curiosity and resilience that extend beyond the classroom.
                </blockquote>
                <p className="testimonial-author">Maureen Miller</p>
                <p className="testimonial-role">International educator and Strive parent</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">It&apos;s the only class where my kid is asking for more classes.</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
                <p className="testimonial-role">Singapore</p>
              </article>
              <article className="testimonial-card">
                <blockquote className="testimonial-text">The teachers are fantastic. They&apos;re more like mentors and friends than lecturers.</blockquote>
                <p className="testimonial-author">Parent of a Strive student</p>
                <p className="testimonial-role">Singapore</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="trial">
          <h2>Start with a free trial class</h2>
          <p>Your child&apos;s first class is free. After the session, you speak with us about whether to continue. No pressure.</p>
          <a href={trialUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>
            Book a Free Trial Class
          </a>
          <p className="cta-note">1-on-1 · Online · Grades 4–9 · SGD 80/hr</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Online math tutoring for students in grades 4 to 9.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
          <p style={{ marginTop: '20px', fontSize: '12px' }}>
            Strong community of students in Singapore, including families at UWCSEA, SAS, and Dover Court.
          </p>
        </div>
      </footer>
    </>
  )
}
