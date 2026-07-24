import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '@/styles/MathCompetitionStudents.module.css'
import schoolStyles from '@/styles/MathCompetitionSchools.module.css'

const REGISTER_URL = 'mailto:lauren@strivemath.com?subject=Strive%20Mathematics%20Competition%20Entry&body=Dear%20Strive%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20enter%20my%20school%20to%20Strive%27s%20Mathematics%20Competition%20on%205%20September.%0D%0A%0D%0ASchool%20Name%3A%0D%0ASchool%20Contact%20Person%3A%0D%0ASchool%20Contact%20Details%3A'

const benefits = [
  ['A', 'Fully online', 'No venue, paper, or invigilation setup required. Students join from their own homes on their own devices.'],
  ['B', 'School recognition', 'Winning school and top 3 performers per school will be announced.'],
  ['C', 'Detailed Results', 'At Strive, we believe in celebrating growth, not just numbers. After the competition, every student receives a personalized feedback packet, an in-depth report, and a certificate to honor their hard work.'],
]

const processSteps = [
  ['Register the school', <>Confirm participation and share your school contact details via email.</>],
  ['Share student signup', <><strong>Our Part:</strong> The Strive Team will send you all the event details and materials.<br /><strong>Your Part:</strong> We ask schools to share the competition details and signup page with eligible families so students can register individually.</>],
  ['Compete online', <>Students join the online competition. No venue, paper, or invigilation setup is required from the schools — Strive takes care of it all.</>],
  ['Celebrate results', <>Winners are recognised by grade and by school. Strive will reach out directly with your school&apos;s results.</>],
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

export default function MathCompetitionSchool() {
  return (
    <>
      <Head>
        <title>School Signup · 2026 Strive Math Competition</title>
        <meta
          name="description"
          content="Register your school for the 2026 Strive Math Competition, a fully online mathematics competition for international schools in Singapore."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className={`${styles.page} ${schoolStyles.page}`}>
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

            <div className={schoolStyles.heroActions}>
              <a className={styles.primaryButton} href={REGISTER_URL}>Register your school</a>
              <Link className={schoolStyles.studentSignupLink} href="/other/math-competition-2026/students">Are you a student? Sign up here</Link>
            </div>
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

        <section className={`${styles.section} ${schoolStyles.aboutPanel}`}>
          <div className={styles.sectionHeader}>
            <div className={schoolStyles.aboutTitle}>
              <span className={styles.eyebrow}>About Strive&apos;s competitions</span>
              <h2>Simple for schools, meaningful for students.</h2>
            </div>
            <p>Strive Math is a Singapore-based math education provider that runs online competitions through its own Worksheet platform. We handle the competition setup, student experience, parent communication, and post-competition feedback so schools can focus on getting their students involved.</p>
          </div>
          <div className={schoolStyles.benefitGrid}>
            {benefits.map(([letter, title, description]) => (
              <article className={schoolStyles.card} key={title}>
                <span className={schoolStyles.cardLetter}>{letter}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${schoolStyles.processSection}`}>
          <h2>How to compete</h2>
          <table className={styles.processTable} aria-label="School competition process">
            <tbody>
              {processSteps.map(([title, description], index) => (
                <tr key={title as string}>
                  <th scope="row"><span>{index + 1}</span>{title}</th>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={schoolStyles.sectionCta}>
            <a className={styles.primaryButton} href={REGISTER_URL}>Register your school</a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.photoStrip} ${schoolStyles.photoSection}`} aria-label="Competition photos" tabIndex={0}>
          {photos.map(([src, alt]) => <Image src={src} alt={alt} width={1448} height={1086} key={src} />)}
        </section>

        <section className={`${styles.section} ${styles.winnersPanel} ${schoolStyles.winnersPanel}`}>
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
            <details><summary>Does the school need to host the competition?</summary><p>No. The competition is run fully by Strive. All the school needs to do is share the sign up details with their school community.</p></details>
            <details><summary>Can students sign up before the school registers?</summary><p>The intended flow is school signup first, then student signup. This keeps school-level recognition clean.</p></details>
            <details><summary>What will schools receive after the competition?</summary><p>The winning school will receive a trophy! All students will receive certificates, with the top 3 students from each grade and each school receiving recognition.</p></details>
            <details><summary>Do parents need to attend the talk?</summary><p>The parent talk is completely optional. Held after the competition, this session will discuss math education in the digital age, the core philosophy behind our competition design, and an overview of how the students performed.</p></details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
