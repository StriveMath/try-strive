import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '@/styles/MathCompetitionPractice.module.css'

const REGISTER_URL = 'https://airtable.com/appaYCParRb93bseW/pagj0osHIZNfSOXj9/form?prefill_Competition=Strive%27s%20Interschools%20Mathematics%20Competition%20-%20September%202026'
const WHATSAPP_NUMBER = '6589204220'
const VALID_GRADES = new Set(['4', '5', '6', '7', '8', '9'])

export default function MathCompetitionPracticeAccess() {
  const router = useRouter()
  const requestedGrade = typeof router.query.grade === 'string' ? router.query.grade : ''
  const grade = VALID_GRADES.has(requestedGrade) ? requestedGrade : ''
  const gradeLabel = grade ? `Grade ${grade}` : 'your selected grade'
  const message = `Please can I receive the practice questions for ${gradeLabel}, as well as my username and password to login to the Strive Platform`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <>
      <Head>
        <title>Practice Question Access · 2026 Strive Math Competition</title>
        <meta
          name="description"
          content="Choose how to continue to access practice questions for the 2026 Strive Math Competition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className={styles.page}>
        <section className={styles.panel}>
          <span className={styles.eyebrow}>Practice access · {gradeLabel}</span>
          <h1>Have you already signed up?</h1>
          <p className={styles.intro}>Choose the option that applies to you so we can help you access the right practice questions.</p>

          <div className={styles.options}>
            <a className={`${styles.option} ${styles.optionPrimary}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <span className={styles.optionNumber}>1</span>
              <span>
                <strong>Yes, I have already signed up</strong>
                <small>Continue to WhatsApp to request your practice questions and login details.</small>
              </span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>

            <a className={styles.option} href={REGISTER_URL}>
              <span className={styles.optionNumber}>2</span>
              <span>
                <strong>No, I have not signed up yet</strong>
                <small>Complete the student competition registration form first.</small>
              </span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>

          <Link className={styles.backLink} href="/other/math-competition-2026/students">← Back to the student competition page</Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
