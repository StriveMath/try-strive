import { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const SITE = 'https://www.strivemath.com'

// No content/courses directory to enumerate — each course page is a hand-written .tsx file.
const COURSE_URLS = [
  '/courses',
  '/courses/math',
  '/courses/ai-coding',
  '/courses/cca',
  '/courses/custom/data-science-machine-learning-intro',
  '/courses/holiday-bootcamps',
  '/courses/holiday-bootcamps/ai-coding-intro-bootcamp',
  '/courses/holiday-bootcamps/ai-coding-advanced-bootcamp',
  '/courses/holiday-bootcamps/math-confidence-bootcamp',
  '/courses/holiday-bootcamps/math-performance-bootcamp',
  '/courses/holiday-bootcamps/python-apps-bootcamp',
]

const STATIC_URLS = [
  '/other/privacy-policy',
  '/other/careers/teach-at-strive',
]

interface UrlEntry {
  loc: string
  lastmod?: string
}

// Mirrors the getStaticPaths logic in pages/blog/[slug].tsx
function getBlogUrls(): UrlEntry[] {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(postsDir)) return []

  const urls: UrlEntry[] = [{ loc: '/blog' }]
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))

  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data: frontmatter } = matter(raw)
    const slug = file.replace(/\.mdx$/, '')
    const lastmod = frontmatter.updatedDate || frontmatter.date
    urls.push({ loc: `/blog/${slug}`, lastmod })
  }

  return urls
}

// Mirrors the getStaticPaths + Active-status filter in pages/other/careers/[slug].tsx
function getCareerUrls(): UrlEntry[] {
  const rolesDir = path.join(process.cwd(), 'content', 'careers')
  if (!fs.existsSync(rolesDir)) return []

  const urls: UrlEntry[] = [{ loc: '/other/careers' }]
  const files = fs.readdirSync(rolesDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))

  for (const file of files) {
    const raw = fs.readFileSync(path.join(rolesDir, file), 'utf8')
    const { data: frontmatter } = matter(raw)
    if (frontmatter.status !== 'Active') continue
    const slug = file.replace(/\.(mdx|md)$/, '')
    urls.push({ loc: `/other/careers/${slug}` })
  }

  return urls
}

function buildSitemapXml(): string {
  const urls: UrlEntry[] = [
    ...COURSE_URLS.map(loc => ({ loc })),
    ...STATIC_URLS.map(loc => ({ loc })),
    ...getBlogUrls(),
    ...getCareerUrls(),
  ]

  const body = urls
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''
      return `  <url><loc>${SITE}${loc}</loc>${lastmodTag}</url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml')
  res.write(buildSitemapXml())
  res.end()

  return { props: {} }
}

export default function SitemapContent() {
  return null
}
