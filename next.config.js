const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Careers roles whose status is neither "Active" nor "Filled" (e.g. "Closed") redirect to the
// careers landing page. [slug].tsx skips them in getStaticPaths so they aren't prerendered.
function closedCareerRedirects() {
  const rolesDir = path.join(__dirname, 'content', 'careers')
  if (!fs.existsSync(rolesDir)) return []
  return fs.readdirSync(rolesDir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .filter(f => {
      const { status } = matter(fs.readFileSync(path.join(rolesDir, f), 'utf8')).data
      return status !== 'Active' && status !== 'Filled'
    })
    .map(f => ({
      source: `/other/careers/${f.replace(/\.(mdx|md)$/, '')}`,
      destination: '/other/careers',
      permanent: false,
    }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensures _next/static assets use absolute URLs when pages are served via reverse proxy
  assetPrefix: process.env.VERCEL_ENV === 'production' ? 'https://images.strivemath.com' : '',
  images: {
    path: process.env.VERCEL_ENV === 'production'
      ? 'https://images.strivemath.com/_next/image'
      : '/_next/image',
  },
  async headers() {
    return [
      {
        source: '/((?!blog|courses|other).*)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
  async redirects() {
    return [
      // Root → courses landing
      { source: '/', destination: '/courses', permanent: false },

      // Top-level course pages
      { source: '/math', destination: '/courses/math', permanent: false },
      { source: '/ai-first-software-development', destination: '/courses/ai-coding', permanent: false },
      { source: '/holidaycamps', destination: '/courses/holiday-bootcamps', permanent: false },

      // Holiday bootcamp sub-pages (original slugs → renamed slugs)
      { source: '/math-confidence', destination: '/courses/holiday-bootcamps/math-confidence-bootcamp', permanent: false },
      { source: '/math-performance', destination: '/courses/holiday-bootcamps/math-performance-bootcamp', permanent: false },
      { source: '/codewithai', destination: '/courses/holiday-bootcamps/ai-coding-intro-bootcamp', permanent: false },
      { source: '/ai-first-coding-bootcamp', destination: '/courses/holiday-bootcamps/ai-coding-advanced-bootcamp', permanent: false },
      { source: '/makepythonapps', destination: '/courses/holiday-bootcamps/python-apps-bootcamp', permanent: false },

      // Custom / hidden course
      { source: '/advanced-ai-course', destination: '/courses/custom/data-science-machine-learning-intro', permanent: false },

      // Other (paid landing pages + webinar)
      { source: '/isa-webinar', destination: '/other/isa-webinar', permanent: false },
      { source: '/paidcodewithai-80', destination: '/other/paidcodewithai-80', permanent: false },
      { source: '/paidcodewithai-680', destination: '/other/paidcodewithai-680', permanent: false },
      { source: '/paidpythonapps-80', destination: '/other/paidpythonapps-80', permanent: false },
      { source: '/paidpythonapps-680', destination: '/other/paidpythonapps-680', permanent: false },
      { source: '/paidpythongames-80', destination: '/other/paidpythongames-80', permanent: false },
      { source: '/paidpythongames-680', destination: '/other/paidpythongames-680', permanent: false },

      // Closed careers roles → careers landing
      ...closedCareerRedirects(),
    ]
  },
}

module.exports = nextConfig
