import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '@/styles/MathCompetitionStudents.module.css'

const REGISTER_URL = 'https://airtable.com/appaYCParRb93bseW/pagj0osHIZNfSOXj9/form?prefill_Competition=Strive%27s%20Interschools%20Mathematics%20Competition%20-%20September%202026'

const processSteps = [
  ['Sign up', 'Complete the student entry form via the “Register” button.'],
  ['Confirmation call', 'The Strive team calls to confirm your entry, set up your competition profile, and schedule your results feedback call.'],
  ['Competition day', 'Join online at 10:00am SGT and complete your 90-minute grade-appropriate test.'],
  ['Parent talk', 'Parents are invited to a post-competition talk about math education and technology.'],
  ['Feedback and certificate', 'After the competition, receive a full report, certificate, and personalised feedback on your performance.'],
  ['Winners announced', 'Top schools, top 3 students per grade and top 3 performers per school will be recognised.'],
]

const agenda = [
  ['9:45am', 'Final prep and login to your profile.'],
  ['10:00am', 'Competition starts online and students complete the test.'],
  ['11:30am', 'End of competition and school winners announced.'],
  ['11:30am', 'Online parent talk begins.'],
  ['3:00pm onwards', 'Personalised results calls, reports, and certificates will be conducted in the week following the conclusion of the competition.'],
]

const photos = [
  ['/images/math-competition-2026/photo-online-meet-clean.png', 'Student joining the online competition on a video call'],
  ['/images/math-competition-2026/photo-worksheet-platform.png', 'Strive worksheet platform with visual math questions'],
  ['/images/math-competition-2026/photo-school-trophy.png', 'Students celebrating school competition recognition with a trophy'],
]

const competitionFacts = [
  ['Date', 'Sat 5 Sep'],
  ['Time', '10:00am SGT'],
  ['Duration', '1.5 hours'],
  ['Format', 'Fully online'],
]

const winnerPosts = [
  {
    href: 'https://www.instagram.com/p/C8L9wDWIKPl/',
    src: '/images/math-competition-2026/winner-instagram-post.png',
    alt: 'Instagram post announcing UWCSEA East as a previous Strive mathematics competition winner',
    label: 'View the winners announcement on Instagram',
  },
  {
    href: 'https://www.thechillmom.com/2024/06/uwcsea-east-wins-inter-schools-mathematics-competition-in-singapore/',
    src: '/images/math-competition-2026/winner-chill-mom-story.png',
    alt: 'The Chill Mom article about UWCSEA East winning the inter-schools mathematics competition',
    label: 'Read the winners story on The Chill Mom',
  },
]

export default function MathCompetitionStudents() {
  return (
    <>
      <Head>
        <title>Student Signup · 2026 Strive Math Competition</title>
        <meta
          name="description"
          content="Register for the 2026 Strive Math Competition, a friendly online mathematics competition for international school students in Singapore."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className={`${styles.page} ${styles.studentPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Singapore-Wide Interschools</span>
              <span className={styles.heroTitleLine}>Mathematics Competition</span>
            </h1>
            <p>A friendly interschools competition that tests mathematics mastery &amp; critical thinking through visual code &amp; innovative problems. Students, it&apos;s time to sharpen your skills, embrace problem-solving, and bring math to life through code!</p>

            <div className={styles.infoTableWrap}>
              <dl className={styles.infoTable} aria-label="Competition facts">
                {competitionFacts.map(([label, value]) => (
                  <div className={styles.infoFact} key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a className={styles.primaryButton} href={REGISTER_URL}>Register</a>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/images/math-competition-2026/competition-hero-report.png"
              alt="Online math competition worksheet with a student performance report"
              width={1672}
              height={941}
              priority
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.band}`}>
          <h2>How it works</h2>
          <table className={styles.processTable} aria-label="Student competition process">
            <tbody>
              {processSteps.map(([title, description], index) => (
                <tr key={title}>
                  <th scope="row"><span>{index + 1}</span>{title}</th>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`${styles.section} ${styles.agendaSection}`}>
          <div className={styles.sectionHeader}>
            <h2>Competition Day Agenda <span>Saturday 5 September 2026</span></h2>
            <p>All times are in Singapore Time.</p>
          </div>
          <div className={styles.agenda}>
            {agenda.map(([time, description], index) => (
              <div className={styles.agendaRow} key={`${time}-${index}`}>
                <time>{time}</time><span className={styles.timelineDot} aria-hidden="true" /><span>{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.practicePanel}`} id="practice">
          <div className={styles.practiceCopy}>
            <span className={styles.eyebrow}>Practice access</span>
            <h2>Get access to practice questions</h2>
            <p>Use the login details received on your sign up confirmation call to access your grade&apos;s practice questions on the Strive platform.</p>
            <p className={styles.supportNote}>Need login help? Contact our team at <a href="tel:+6589204220">+65 8920 4220</a>.</p>
          </div>
          <div className={styles.gradeLinks} aria-label="Practice question links by grade">
            {[4, 5, 6, 7, 8, 9].map(grade => <Link href={`/other/math-competition-2026/practice-access?grade=${grade}`} key={grade}>Grade {grade}</Link>)}
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaBand}`}>
          <h2>Ready to compete?</h2>
          <a className={styles.primaryButton} href={REGISTER_URL}>Register</a>
        </section>

        <section className={`${styles.section} ${styles.photoStrip}`} aria-label="Competition photos" tabIndex={0}>
          {photos.map(([src, alt]) => <Image src={src} alt={alt} width={1448} height={1086} key={src} />)}
        </section>

        <section className={`${styles.section} ${styles.winnersPanel}`}>
          <h2>Previous Competition Winners</h2>
          <p className={styles.winnerSubtitle}>Explore publications from Strive&apos;s Mathematics Competition previous winner!</p>
          <div className={styles.winnerPostGrid}>
            {winnerPosts.map(post => (
              <a className={styles.winnerPost} href={post.href} target="_blank" rel="noopener noreferrer" aria-label={post.label} key={post.href}>
                <Image src={post.src} alt={post.alt} width={1280} height={720} />
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`}>
          <h2>FAQs</h2>
          <div className={styles.faq}>
            <details><summary>What do I need to compete?</summary><p>A laptop and connection to the internet. You do not need to download any fancy programs for this competition.</p></details>
            <details><summary>How are winners chosen?</summary><p>Points are awarded for each correct answer. Winners are determined in two categories:</p><ul><li><strong>School Category:</strong> The school with the highest cumulative point total wins.</li><li><strong>Individual Category:</strong> The students with the highest point totals in each grade will win first, second, and third place.</li></ul></details>
            <details><summary>Do I have to be good at math to compete?</summary><p>No! All levels of mathematics are welcome.</p></details>
            <details><summary>Where can we find practice papers?</summary><p><a href="#practice">Here</a> you can access the practice links for your grade.</p></details>
            <details><summary>Where does the competition happen?</summary><p>The competition takes place fully online via Google Meet.</p></details>
            <details><summary>What happens after signup?</summary><p>The Strive team will call to confirm entry, create the student&apos;s profile, and schedule the post-competition feedback call.</p></details>
            <details><summary>Will students get a certificate?</summary><p>Yes. All students receive a certificate, full report, and personalised feedback after the competition.</p></details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
