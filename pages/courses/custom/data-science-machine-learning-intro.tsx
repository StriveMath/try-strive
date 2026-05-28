import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

const faqs = [
  {
    question: 'How much do classes cost?',
    answer: 'If you are already doing coding classes with us you can continue on your same pricing per hour. New students can sign up for a new package, choosing a 4, 10 or 30 hour package. Contact us for detailed pricing packages.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'No need to download anything! All you need is a computer with internet access, audio, microphone, and camera.',
  },
  {
    question: 'Do I need to download or install software?',
    answer: 'All software that needs to be downloaded will be covered in the first session.',
  },
  {
    question: 'Can I use an iPad or tablet?',
    answer: 'We recommend using a computer or laptop for the best experience.',
  },
  {
    question: 'How long is each class?',
    answer: 'Each class is 1 hour long.',
  },
  {
    question: 'What time do you have classes?',
    answer: 'Classes are scheduled to fit your convenience. We have availability 24 hours a day, 7 days a week. Most popular times are limited.',
  },
  {
    question: 'Are classes recorded?',
    answer: 'Yes, classes are recorded for security and quality assurance, and to support students\' learning.',
  },
  {
    question: 'Do the hours of a package expire?',
    answer: 'No, your hours never expire. Use them at your own pace.',
  },
  {
    question: 'Are classes 1:1 or group?',
    answer: 'All classes are 1:1. We also offer 2:1 classes — each child gets a 12% discount if they have classes with a friend.',
  },
  {
    question: 'Does the teacher stay the same for all lessons?',
    answer: 'Yes, your child\'s teacher will remain the same. We also suggest students consider changing teachers every five months — this allows them to experience different teaching styles and approaches, providing a broader perspective on their education.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function AdvancedAICourse() {
  return (
    <>
      <Head>
        <title>Advanced AI &amp; Machine Learning Course — Strive</title>
        <meta name="description" content="Advanced 1-on-1 AI and machine learning course for students aged 10–16. Deep dive into neural networks, deep learning, and reinforcement learning through hands-on projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <Nav />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="hero-tag">Advanced Track · Ages 10–16 · 1-on-1 · Online</div>
          <h1>
            Don&apos;t Just Use AI.<br />
            <span className="gradient-text">Build AI.</span>
          </h1>
          <p className="hero-sub">
            An advanced course for students aged 10–16 to master AI and machine learning — a deep dive into neural networks, deep learning, and generative AI through hands-on projects and real datasets.
          </p>
          <div className="hero-actions">
            <a href={trialUrl} className="btn-primary">Book a Trial Class</a>
            <a href="#curriculum" className="btn-outline-white">See the Curriculum</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">4</span>
              <span className="hero-stat-label">Modules</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">1-on-1</span>
              <span className="hero-stat-label">Live Classes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">10–16</span>
              <span className="hero-stat-label">Age Range</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">🧠</span>
              <span className="hero-stat-label">Real ML Projects</span>
            </div>
          </div>
        </header>
        <hr className="rainbow-rule" />

        {/* ABOUT */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner two-col">
            <div>
              <span className="section-tag">What is this course?</span>
              <h2 className="section-title">
                Advanced AI &amp;<br />
                Machine Learning
              </h2>
              <p className="section-lead">
                A rigorous, project-driven course that takes students well beyond using AI tools — into actually building them. Students work with real datasets, implement machine learning algorithms from scratch, and understand the mathematics and logic powering today&apos;s AI systems.
              </p>
            </div>
            <aside className="highlight-box">
              <p>This is not a course about <span className="em">prompting ChatGPT.</span></p>
              <p>Students implement gradient descent, train neural networks, and build generative models — using open source datasets like MNIST and Kaggle.</p>
              <p style={{ marginBottom: 0, color: 'var(--primary)', fontSize: '16px' }}>
                All students must have a firm understanding of coding basics before starting this course.
              </p>
            </aside>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">The full programme</span>
            <h2 className="section-title">4-Module Curriculum</h2>
            <p className="section-lead" style={{ maxWidth: '640px' }}>
              Each module builds on the last — from classical ML algorithms to deep learning, generative AI, and reinforcement learning.
            </p>
            <div className="curriculum-grid">
              <div className="curriculum-day">
                <span className="curriculum-day-label">Module 1</span>
                <h3>Introduction to AI &amp; ML</h3>
                <ul>
                  <li>Basics of AI, terms related to AI and ML</li>
                  <li>Gradient descent optimisation algorithm</li>
                  <li>Regression — linear, multiple, and logistic</li>
                  <li>K-NN classifier</li>
                  <li>Decision trees and random forest algorithm</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Module 2</span>
                <h3>Neural Networks</h3>
                <ul>
                  <li>Introduction to neural networks and the perceptron</li>
                  <li>Weights, biases, and activation functions (sigmoid, ReLU, tanh)</li>
                  <li>Feedforward and convolutional neural networks</li>
                  <li>Support vector machines: linear and non-linear</li>
                  <li>Working with open source datasets: MNIST, Kaggle</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Module 3</span>
                <h3>Deep Learning &amp; Generative AI</h3>
                <ul>
                  <li>Deep learning and its applications</li>
                  <li>Generative AI and generative adversarial networks (GANs)</li>
                  <li>Variational autoencoders (VAEs) and large language models</li>
                  <li>Retrieval-augmented generation (RAG)</li>
                  <li>Image captioning, neural style transfer, and YOLO object detection</li>
                </ul>
              </div>
              <div className="curriculum-day">
                <span className="curriculum-day-label">Module 4</span>
                <h3>Reinforcement Learning</h3>
                <ul>
                  <li>RL basics and Q-learning</li>
                  <li>Markov decision process</li>
                  <li>Custom reinforcement learning projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FUTURE CAREERS */}
        <section style={{ background: 'var(--bg-subtle)' }}>
          <div className="section-inner">
            <span className="section-tag">Where this leads</span>
            <h2 className="section-title">Careers in AI &amp; Data Science</h2>
            <p className="section-lead" style={{ maxWidth: '640px' }}>
              The skills developed in this course map directly to some of the most in-demand careers of the next decade.
            </p>
            <div className="platform-grid">
              <article className="platform-card">
                <div className="platform-icon">📊</div>
                <h3>Data Scientist</h3>
                <p>Analyse and model real-world data to uncover insights and drive decisions at scale.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🤖</div>
                <h3>AI Engineer</h3>
                <p>Build intelligent systems and applications — the engineers deploying the models that power modern products.</p>
              </article>
              <article className="platform-card">
                <div className="platform-icon">🎮</div>
                <h3>Game Designer</h3>
                <p>Create adaptive, intelligent game experiences using reinforcement learning and generative AI.</p>
              </article>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section style={{ background: 'white' }}>
          <div className="section-inner">
            <span className="section-tag">Prerequisites</span>
            <h2 className="section-title">Is my child ready for this course?</h2>
            <div className="fit-grid" style={{ marginTop: '32px' }}>
              <article className="fit-card good">
                <h3>Good fit if your child...</h3>
                <ul className="fit-list">
                  <li>Has completed Strive&apos;s AI-First Software Development course, or has equivalent coding experience</li>
                  <li>Is aged 10 to 16</li>
                  <li>Wants to understand how AI actually works, not just use it</li>
                  <li>Is comfortable reading and writing code independently</li>
                </ul>
              </article>
              <article className="fit-card bad">
                <h3>Not quite ready if...</h3>
                <ul className="fit-list">
                  <li>Your child is new to coding or Python</li>
                  <li>They haven&apos;t yet completed an introductory coding course</li>
                  <li>They&apos;re not yet comfortable reading code</li>
                </ul>
                <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-dark)' }}>
                  New to coding?{' '}
                  <Link href="/ai-first-software-development" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                    Start with AI-First Software Development →
                  </Link>
                </p>
              </article>
            </div>
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={trialUrl} className="btn-primary">Get in Touch to See If You Qualify</a>
            </div>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
              We are here for your questions. <a href="mailto:hello@strivemath.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact us</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'white' }} itemScope itemType="https://schema.org/FAQPage">
          <div className="section-inner">
            <span className="section-tag">Common questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <article key={i} className="faq-item" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h3 itemProp="name">{faq.question}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to build AI, not just use it?</h2>
          <p>1-on-1 live classes for students aged 10–16 — flexible scheduling, no expiring hours.</p>
          <a href={trialUrl} className="btn-primary" style={{ fontSize: '18px', padding: '18px 44px' }}>Book a Trial Class</a>
          <p className="cta-note">Advanced Track · Ages 10–16 · 1-on-1 · Online</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <p className="footer-logo">Strive<span>.</span></p>
          <p>Advanced AI &amp; Machine Learning course for students aged 10–16.</p>
          <p>1-on-1 live classes with expert teachers. Online and open to students worldwide.</p>
        </div>
      </footer>
    </>
  )
}
