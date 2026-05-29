/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensures _next/static assets use absolute URLs when pages are served via reverse proxy
  assetPrefix: process.env.VERCEL_ENV === 'production' ? 'https://try.strivemath.com' : '',
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
    ]
  },
}

module.exports = nextConfig
