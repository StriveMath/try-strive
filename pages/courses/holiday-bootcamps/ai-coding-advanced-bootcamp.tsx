import { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FaqSection from '@/components/FaqSection'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'
const stripeUrl = 'https://book.stripe.com/eVa5nd4au0CX2mQ14T'

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
    answer: 'The price of this course is SGD 680. This includes: 8 Classes (1 on 1), Completion Certificate, and Continuous Support.',
  },
  {
    question: 'Can parents join classes?',
    answer: 'Parents are absolutely welcome to join classes and experience the journey.',
  },
]

const stories = [
  {
    id: 'neil',
    title: 'Nearby Notary',
    body: [
      "Neil was 16 when he rebuilt Singapore's official notary directory — because his dad couldn't use it. The SAL Directory had the data but was clunky and couldn't search by location, so Neil set out to fix it.",
      'Using AI-assisted coding, he built a full-stack location-based search tool with Google Maps integration in just 5 hours. The result, nearbynotary.sg, makes public data actually usable. Neil is now approaching the government to see if they\'d like to adopt his design.',
    ],
    tags: ['Full-stack', 'Google Maps API', 'Location search', 'AI-assisted', 'Live on the internet'],
    avatar: 'N',
    screenshot: '/images/courses/spotlight/neil-nearby-notary.webp' as string | null,
    name: 'Neil',
    detail: 'Age 16',
    blogUrl: '/blog/how-a-16-year-old-used-ai-to-rebuild-a-government-website',
    gameUrl: 'https://www.nearbynotary.sg/' as string | null,
    gameUrlLabel: 'Visit the website',
    githubUrl: null as string | null,
  },
  {
    id: 'matias',
    title: 'The Dark Ages',
    body: [
      'Matias loved video games and started coding because he wanted to make his own. By the end of his time with Strive, he had built The Dark Ages: a Minecraft-inspired, AI-assisted browser game built with JavaScript, React, and Next.js.',
      'He designed the game logic, used AI to develop the visuals and test new ideas, and deployed it live to the internet. Matias went from spending hours playing games to spending hours building them.',
    ],
    tags: ['JavaScript', 'React', 'Next.js', 'AI-assisted', 'Live on the internet'],
    avatar: 'M',
    screenshot: '/images/courses/spotlight/matias-dark-ages.webp' as string | null,
    name: 'Matias',
    detail: 'Age 13',
    blogUrl: '/blog/from-gamer-to-game-creator-how-matias-built-his-own-ai-powered-world',
    gameUrl: 'https://v0-dark-ages-game.vercel.app/' as string | null,
    gameUrlLabel: 'Play the game',
    githubUrl: null as string | null,
  },
  {
    id: 'ethan',
    title: 'A Browser from Scratch',
    body: [
      'Ethan was 13 when he built a working web browser from scratch. Not a school project: a real browser built in Java using JCEF (Java Chromium Embedded Framework), Swing, and JavaFX, the same technology stack used in professional desktop applications.',
      'He planned the architecture first, used AI to generate code for the complex parts, and read every line before running it. The result is a fully themed, agentic browser with its own rendering engine.',
    ],
    tags: ['Java', 'JCEF', 'JavaFX', 'AI-assisted', 'Desktop app'],
    avatar: 'E',
    screenshot: '/images/courses/spotlight/ethan-browser.webp' as string | null,
    name: 'Ethan',
    detail: 'Age 13',
    blogUrl: '/blog/ethan-built-a-browser-at-13' as string | null,
    gameUrl: null as string | null,
    gameUrlLabel: '',
    githubUrl: 'https://github.com/ingStudiosOfficial' as string | null,
  },
  {
    id: 'vasco',
    title: 'Sustainable Squad',
    body: [
      'Vasco, Grade 10, built "Sustainable Squad", a platform game about ocean clean-up and coral restoration. It\'s grown to 8 levels with full controller support, and he\'s built versions for iPhone, iPad, Mac and Apple TV.',
      'By the final stretch, he was working like a real studio: recording a professional trailer, checking frame rates and file sizes, and prepping for an App Store submission.',
    ],
    tags: ['Platform game', 'iOS · macOS · tvOS', 'App Store', 'AI-assisted', 'Controller support'],
    avatar: 'V',
    screenshot: '/images/courses/spotlight/vasco-sustainable-squad.webp' as string | null,
    name: 'Vasco',
    detail: 'Age 14',
    blogUrl: null as string | null,
    gameUrl: 'https://www.thesustainablesquad.com/' as string | null,
    gameUrlLabel: 'Play the game',
    githubUrl: null as string | null,
  },
]

export default function AIFirstCodingBootcamp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -50) setActiveIndex(i => Math.min(stories.length - 1, i + 1))
    else if (dx > 50) setActiveIndex(i => Math.max(0, i - 1))
    touchStartX.current = null
  }

  return (
    <>
      <Head>
        <title>AI Web Development Bootcamp — Strive</title>
        <meta name="description" content="8-session 1-on-1 AI web development bootcamp for ages 13+. Ship real full-stack apps with React, Tailwind, and AI tools. Python familiarity required. SGD 680." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero hero-bootcamp">
          <div className="hero-tag">8 Classes · Ages 13+ · Online · Advanced</div>
          <h1>
            AI Web<br />
            <span className="gradient-text">Development</span>
          </h1>
          <p className="hero-sub">
            Students aged 13–18 master real-world software engineering by collaborating with AI tools — building and deploying full-stack web apps guided by an experienced teacher.
          </p>
          <div className="hero-actions">
            <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            <a href="#curriculum" className="btn-outline-dark">See Curriculum</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">8</span>
              <span className="hero-stat-label">1-on-1 Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🚀</span>
              <span className="hero-stat-label">Ship Real Apps</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">13+</span>
              <span className="hero-stat-label">Ages</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🏅</span>
              <span className="hero-stat-label">Certificate</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* ABOUT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">About the course</span>
            <h2 className="section-title">AI Coding</h2>
            <p className="section-lead" style={{ maxWidth: '720px' }}>
              An engaging course for students aged 13–18 to master real-world software engineering by collaborating with AI tools, guided by an experienced teacher. Students build and deploy full-stack web apps — websites, games, and apps — using AI as a professional development tool, not a shortcut.
            </p>
            <div className="course-info-strip">
              <span className="course-info-chip">🐍 Python Familiarity Required</span>
              <span className="course-info-chip">👥 Ages 13–18</span>
              <span className="course-info-chip">🧑‍🏫 1 Student · 1 Teacher</span>
              <span className="course-info-chip">🌐 Fully Online</span>
              <span className="course-info-chip">💰 SGD 680</span>
            </div>
          </div>
        </section>

        {/* STUDENT SPOTLIGHT — carousel */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Student spotlight</span>
            <h2 className="section-title" style={{ marginBottom: '36px' }}>What students actually build</h2>
            <div className="spotlight-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div className="spotlight-slide-wrap">
                <div className="spotlight-track-outer">
                  <div className="spotlight-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {stories.map((story) => (
                      <article className="spotlight-card" key={story.id}>
                        <div>
                          <h3>{story.title}</h3>
                          {story.body.map((para, i) => <p key={i}>{para}</p>)}
                          <div className="spotlight-tags">
                            {story.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                          </div>
                          <div className="spotlight-actions">
                            {story.gameUrl && (
                              <a href={story.gameUrl} target="_blank" rel="noopener noreferrer" className="play-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                                  <path d="M3 2L13 8L3 14V2Z" fill="currentColor" />
                                </svg>
                                {story.gameUrlLabel}
                              </a>
                            )}
                            {story.githubUrl && (
                              <a href={story.githubUrl} target="_blank" rel="noopener noreferrer" className="play-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                View GitHub
                              </a>
                            )}
                            {story.blogUrl && <Link href={story.blogUrl} className="story-link">Read the full story →</Link>}
                          </div>
                        </div>
                        <aside className="spotlight-visual">
                          {story.screenshot ? (
                            <img
                              src={story.screenshot}
                              alt={`${story.name}'s ${story.title} project`}
                              className="spotlight-screenshot"
                            />
                          ) : (
                            <div className="spotlight-avatar">{story.avatar}</div>
                          )}
                          <p className="spotlight-built-by">Built by</p>
                          <p className="spotlight-label">{story.name} · {story.detail}</p>
                        </aside>
                      </article>
                    ))}
                  </div>
                </div>
                <button
                  className="carousel-nav-btn carousel-prev"
                  onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous story"
                >‹</button>
                <button
                  className="carousel-nav-btn carousel-next"
                  onClick={() => setActiveIndex(i => Math.min(stories.length - 1, i + 1))}
                  disabled={activeIndex === stories.length - 1}
                  aria-label="Next story"
                >›</button>
              </div>
              <div className="carousel-dots" role="tablist">
                {stories.map((story, i) => (
                  <button
                    key={story.id}
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`${story.name}'s story`}
                    className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>
            <p style={{ marginTop: '24px', fontSize: '15px', color: 'var(--text-dark)', textAlign: 'center' }}>
              These are just a few examples of projects built by AI coding students, with user accounts, APIs and payment integration.
            </p>
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">What your child achieves</span>
            <h2 className="section-title">Tangible outcomes, every time</h2>
            <div className="outcome-grid">
              <article className="platform-card">
                <div className="platform-icon">💼</div>
                <h3>Coding Portfolio</h3>
                <p>A professional coding portfolio ready for college or internship applications — built from real deployed projects.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🌐</div>
                <h3>Deployed Full-Stack App</h3>
                <p>A real web application built with React and Tailwind, connected to a database — live on the internet from day one.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🏅</div>
                <h3>Completion Certificate</h3>
                <p>A course completion certificate recognising their achievement at the end of the bootcamp.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🤖</div>
                <h3>AI Development Mastery</h3>
                <p>Mastery of using AI as a professional development tool — the way engineers at top companies use it today.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">The full programme</span>
            <h2 className="section-title">8-Day Curriculum</h2>
            <p className="section-lead" style={{ maxWidth: '640px' }}>
              Students ship a live website on Day 1. Each subsequent session layers in real engineering skills — components, styling, databases, and authentication.
            </p>
            <div className="curriculum-grid">
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 1–2</span>
                <h3>Ship a Site Today</h3>
                <ul>
                  <li>Generate a personalised website or app from a prompt</li>
                  <li>Modify the site through follow-up prompts</li>
                  <li>Deploy to the web — live URL on day one</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 3–4</span>
                <h3>Set Up Your Dev Environment</h3>
                <ul>
                  <li>Install professional web development tools</li>
                  <li>Run a local development server</li>
                  <li>Modify and verify code changes in the browser</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 5–6</span>
                <h3>Think in Components &amp; Styling</h3>
                <ul>
                  <li>Navigate a React components folder structure</li>
                  <li>Create and import React components</li>
                  <li>Pass data between components</li>
                  <li>Apply Tailwind CSS styling</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Day 7–8</span>
                <h3>Database Integration &amp; Authentication</h3>
                <ul>
                  <li>Configure a database with sign-up, login, and logout</li>
                  <li>Generate and refine database queries</li>
                  <li>Build data retrieval and update features</li>
                </ul>
              </div>
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

        {/* REQUIREMENTS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">What you need to get started</h2>
            <ul className="track-list" style={{ fontSize: '15px', lineHeight: 1.7, marginTop: '24px' }}>
              <li>Ages 13+</li>
              <li>Comfortable with using a mouse and keyboard</li>
              <li>Familiarity with Python coding</li>
            </ul>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={stripeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Sign Up Now</a>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
              We are here for your questions. <a href="mailto:hello@strivemath.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact us</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to ship something real?</h2>
          <p>8 flexible 1-on-1 sessions, a deployed full-stack app, and a certificate — for SGD 680.</p>
          <a href={stripeUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }} target="_blank" rel="noopener noreferrer">Sign Up Now</a>
          <p className="cta-note">8 Classes · 1-on-1 · Ages 13+ · React · Tailwind · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>AI Web Development bootcamp for students aged 13–18.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
