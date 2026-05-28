import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

const sectionHeadingStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--accent-purple)',
  marginBottom: '28px',
}

export default function CoursesIndex() {
  return (
    <>
      <Head>
        <title>Courses — Strive</title>
        <meta name="description" content="Strive offers 1-on-1 online courses in Mathematics and AI-First Software Development for students in Singapore and worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />

        <main className="courses-section">
          <div>
            <h1 style={sectionHeadingStyle}>Our Courses</h1>
            <div className="courses-grid">
              <a href="https://www.strivemath.com/" target="_blank" rel="noopener noreferrer" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">🧑‍💻</div>
                  <h2 className="course-title">Coding</h2>
                  <p className="course-subtitle">Code real projects with JavaScript, Python &amp; AI</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </a>

              <Link href="/math" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">📐</div>
                  <h2 className="course-title">Mathematics</h2>
                  <p className="course-subtitle">1-on-1 tuition for school &amp; beyond</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>

              <Link href="/ai-first-software-development" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">💻</div>
                  <h2 className="course-title">AI-First Software Development</h2>
                  <p className="course-subtitle">Build real products with AI tools</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>

              <Link href="/holidaycamps" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">🏕️</div>
                  <h2 className="course-title">Holiday Bootcamps</h2>
                  <p className="course-subtitle">Intensive camps during school holidays</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>
            </div>

            <h2 style={{ ...sectionHeadingStyle, marginTop: '48px' }}>Everything Else</h2>
            <div className="courses-grid">
              <Link href="/blog" className="course-card" style={{ gridColumn: '1 / -1' }}>
                <div className="course-card-left">
                  <div className="course-icon">✍️</div>
                  <h2 className="course-title">Blog</h2>
                  <p className="course-subtitle">Tips, guides &amp; learning resources</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
