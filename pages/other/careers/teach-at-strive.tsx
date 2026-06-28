import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import YouTubeEmbed from '@/components/blog/YouTubeEmbed'

const testimonials = [
  { icon: '🤩', text: "I am learning while I teach. During class, the way a student thinks always amazes me. And the way they approach a problem would make me think like, wait why didn't I think of that? So, it's learning while teaching." },
  { icon: '🤿', text: "The fulfilment and sense of pride after every lesson of teaching a student." },
  { icon: '🏆', text: "Seeing the feeling of accomplishment a student has after solving problems." },
  { icon: '🚙', text: "Enjoying new ways of coding and thinking about how to better teach it (in the process, further deepening my understanding of some concepts)." },
  { icon: '🚙', text: "I want to push myself by taking on new, more difficult opportunities. With Strive, I want to increase my knowledge since I want to take on problems and learn from them in order to see myself as a responsible person." },
  { icon: '🔑', text: "Motivation to learn new things about coding and find creative ways to explain it to others." },
  { icon: '😊', text: "Getting to know my students and interacting with them is honestly quite fun for me too." },
  { icon: '👩🏼‍🏫', text: "I look forward to teaching and this is helping prepare for some sort of teaching career in my future." },
  { icon: '🤣', text: "I gain immense pleasure from teaching the students, we always have great laughs and learn new things!" },
]

export default function TeachAtStrive() {
  return (
    <>
      <Head>
        <title>Teach at Strive — Strive Careers</title>
        <meta name="description" content="Join Strive as a coding and math teacher. Full-time and part-time roles available, fully remote. Help kids fall in love with coding and math." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className="teach-page">
        <div className="teach-hero">
          <Link href="/other/careers" className="role-back">← All open roles</Link>
          <h1>Teach at Strive</h1>
        </div>

        <div className="teach-callout teach-callout--yellow">
          <span className="teach-callout-icon">🌍</span>
          <div>
            <strong>Online:</strong> Strive is currently hiring one part-time coding and math teacher who is open to US teaching hours, and a full time teacher who is open to teaching in Singapore afternoons-evenings and later.
          </div>
        </div>

        <div className="teach-callout teach-callout--gray">
          <span className="teach-callout-icon">🤩</span>
          <div>
            Teaching is one of the most rewarding jobs out there — you'll feel amazing empowering students with real world coding skills and putting a smile on their faces.
          </div>
        </div>

        <div className="teach-role-intro">
          <h2>Role | Teaching kids coding and math online</h2>
          <p>Many kids find coding boring, many more are afraid, and even more think they are not &ldquo;smart enough&rdquo; to learn it. These kids will be left behind in an increasingly tech-driven world.</p>
          <p>You will have the opportunity to transform kids&rsquo; lives by fundamentally reframing their confidence and perception of coding or math. You&rsquo;ll give these kids 1&ndash;2 joyful hours a week, where they will learn not only that they are smart enough to learn to code but that the process itself is incredibly fun.</p>
        </div>

        <div className="teach-roles-grid">
          <div className="teach-role-card teach-role-card--full">
            <h3>Full Time</h3>
            <p className="teach-role-card-sub">Suitable for graduates and experienced teachers who want to dedicate their careers to joyful coding and math education</p>
            <ul>
              <li><strong>40 hours of work per week</strong></li>
              <li>Availability on weekends is a must</li>
              <li>Must be available during Singapore timezone afternoons/evenings during the week, and all day on weekends</li>
              <li>Fully remote</li>
            </ul>
            <div className="teach-role-card-actions">
              <a
                href="https://airtable.com/appNOVnOqMxSd9M6W/shrAgI9x2xW2uxLAB?prefill_Position=Math%20%2B%20Code%20Teacher%20%28Full-Time%29"
                target="_blank"
                rel="noopener noreferrer"
                className="teach-apply-btn teach-apply-btn--full"
              >
                Apply for Full Time →
              </a>
              <Link href="/other/careers/teacher-full-time" className="teach-learn-more">
                Learn more about full time
              </Link>
            </div>
          </div>

          <div className="teach-role-card teach-role-card--part">
            <h3>Part Time</h3>
            <p className="teach-role-card-sub">Suitable for students and professionals who want to teach kids coding and/or math in their spare time</p>
            <ul>
              <li><strong>1&ndash;5 hours per week</strong></li>
              <li>Must be available weekends and weekday afternoons/evenings in either:
                <ul>
                  <li>US (Eastern/Pacific)</li>
                  <li>Singapore</li>
                </ul>
              </li>
            </ul>
            <div className="teach-role-card-actions">
              <a
                href="https://airtable.com/shrAgI9x2xW2uxLAB?prefill_Position=Math%20%2B%20Code%20Teacher%20%28Part-Time%29"
                target="_blank"
                rel="noopener noreferrer"
                className="teach-apply-btn teach-apply-btn--part"
              >
                Apply for Part Time →
              </a>
              <Link href="/other/careers/teacher-part-time" className="teach-learn-more">
                Learn more about part time
              </Link>
            </div>
          </div>
        </div>

        <div className="teach-videos-section">
          <div className="teach-videos-grid">
            <div className="teach-video">
              <h3>What&rsquo;s it like to teach at Strive?</h3>
              <YouTubeEmbed id="HjKIv8c5MTo" title="What's it like to teach at Strive?" />
            </div>
            <div className="teach-video">
              <h3>What&rsquo;s teacher training like?</h3>
              <YouTubeEmbed id="KM_S8oWV_ig" title="What's teacher training like?" />
            </div>
          </div>
        </div>

        <div className="teach-testimonials-section">
          <h2>What do our teachers say is the main benefit of teaching at Strive?</h2>
          <div className="teach-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="teach-testimonial">
                <span className="teach-testimonial-icon">{t.icon}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="teach-testimonial teach-testimonial--featured">
            <span className="teach-testimonial-icon">🦕</span>
            <p>Strive is super beneficial for my mental health. Dedicating time towards the students and seeing them progress allows me to take a step back and live in their shoes for a bit, which is always so interesting and refreshing, and really helps me to contextualise my own struggles and endeavours from time to time. Not to mention how rewarding it is to see the impact of our work so directly in the development of our students.</p>
          </div>
        </div>
      </main>
    </>
  )
}
