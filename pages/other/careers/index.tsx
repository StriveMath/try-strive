import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import YouTubeEmbed from '@/components/blog/YouTubeEmbed'
import AboutStrive from '@/components/careers/AboutStrive'

interface RoleMeta {
  slug: string
  title: string
  status: string
  locations: string[]
  type: string[]
  description: string
}

interface CareersProps {
  roles: RoleMeta[]
}

export default function CareersIndex({ roles }: CareersProps) {
  return (
    <>
      <Head>
        <title>Careers — Strive</title>
        <meta name="description" content="Join Strive's remote team and help make math and coding education joyful for kids worldwide. We're backed by YCombinator." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className="careers">
        <header className="careers-hero">
          <h1>Join Strive</h1>
          <p>Help us make math and coding joyful for kids worldwide.</p>
        </header>

        <section className="careers-about">
          <h2>About Strive</h2>
          <AboutStrive className="careers-about-strive--landing" />
          <div className="careers-video">
            <YouTubeEmbed id="ZjU1dW1t4Bo" title="Strive Math — founders on our mission" />
          </div>
        </section>

        <section className="careers-roles">
          <h2>Open positions</h2>
          {roles.length === 0 ? (
            <p className="careers-empty">No open positions right now — check back soon or email <a href="mailto:hello@strivemath.com">hello@strivemath.com</a>.</p>
          ) : (
            <div className="careers-role-list">
              {roles.map(role => (
                <Link key={role.slug} href={`/other/careers/${role.slug}`} className="careers-role-card">
                  <div className="careers-role-info">
                    <h3>{role.title.split(' | ')[0]}</h3>
                    <p>{role.description}</p>
                  </div>
                  <div className="careers-role-footer">
                    <div className="careers-role-tags">
                      {role.locations.map(loc => (
                        <span key={loc} className="careers-tag careers-tag--location">{loc}</span>
                      ))}
                      {role.type.map(t => (
                        <span key={t} className="careers-tag careers-tag--type">{t}</span>
                      ))}
                    </div>
                    <span className="careers-role-cta">View role →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rolesDir = path.join(process.cwd(), 'content', 'careers')

  if (!fs.existsSync(rolesDir)) {
    return { props: { roles: [] } }
  }

  const files = fs.readdirSync(rolesDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))

  const roles: RoleMeta[] = files.map(filename => {
    const raw = fs.readFileSync(path.join(rolesDir, filename), 'utf8')
    const { data } = matter(raw)
    return {
      slug: filename.replace(/\.(mdx|md)$/, ''),
      title: data.title || '',
      status: data.status || '',
      locations: data.locations || [],
      type: data.type || [],
      description: data.description || '',
    }
  }).filter(role => role.status === 'Active')

  return { props: { roles } }
}
