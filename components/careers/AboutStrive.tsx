interface AboutStriveProps {
  className?: string
}

export default function AboutStrive({ className }: AboutStriveProps) {
  return (
    <div className={`careers-about-strive${className ? ` ${className}` : ''}`}>
      <p>
        <a href="https://www.strivemath.com/" target="_blank" rel="noopener noreferrer">Strive</a> is an online math &amp; coding school for kids (8–16). We help students start and commit to their math and coding journeys by making the subjects fun and exciting. We focus, above all else, on making the process of learning joyful.
      </p>
      <ul>
        <li><strong>Our mission is to make education more joyful and meaningful.</strong> We teach coding, math and custom STEM courses to kids aged 8 to 16, and build the tools to support teachers to deliver engaging learning experiences.</li>
        <li>We&rsquo;re a remote-first company with teachers and employees from South Africa, Singapore, India, the USA, and the Philippines.</li>
        <li><strong>We&rsquo;re a well-funded startup backed by YCombinator and early investors of Spotify and Facebook.</strong></li>
      </ul>
    </div>
  )
}
