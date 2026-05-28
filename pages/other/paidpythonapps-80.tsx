import Head from 'next/head'

export default function PaidPythonApps80() {
  return (
    <>
      <Head>
        <title>Payment Successful — Strive</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="payment-success-page">
        <a href="/" className="payment-success-logo">Strive<span>.</span></a>
        <div className="payment-success-container">
          <div className="payment-success-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 24L20 34L38 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Your Payment is Successful</h1>
          <p className="payment-course-name">App Development in Python</p>
          <p className="payment-amount">Thank you for your payment of <strong>SGD 80</strong>.</p>
          <p className="payment-note">You&apos;ll be contacted shortly.</p>
        </div>
      </div>
    </>
  )
}
