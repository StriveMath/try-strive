interface AboutStriveProps {
  className?: string
}

export default function AboutStrive({ className }: AboutStriveProps) {
  return (
    <div className={`careers-about-strive${className ? ` ${className}` : ''}`}>
      <p>
        <a href="https://www.strivemath.com/" target="_blank" rel="noopener noreferrer">Strive</a> is an online coding &amp; math school for kids (8–16). We help students start and commit to their coding and math journeys by making the subjects fun and exciting. We focus, above all else, on making the process of learning joyful.
      </p>
      <ul>
        <li><strong>Our mission is to make education more joyful and meaningful.</strong> We want to redefine STEM education globally by creating the platform and content to teach math, science, and other subjects through coding.</li>
        <li>We&rsquo;re a remote-first company with teachers and employees from South Africa, Singapore, India, the USA, and the Philippines.</li>
        <li><strong>We&rsquo;re a well-funded startup backed by YCombinator and early investors of Spotify and Facebook.</strong></li>
      </ul>
    </div>
  )
}
