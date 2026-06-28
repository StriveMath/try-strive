import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import AboutStrive from '@/components/careers/AboutStrive'

interface Frontmatter {
  title: string
  status: string
  locations: string[]
  type: string[]
  description: string
  applyUrl?: string
}

interface RolePageProps {
  source: MDXRemoteSerializeResult
  frontmatter: Frontmatter
}

function RoleLink({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith('http') || href?.startsWith('//')
  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  }
  return <a href={href} {...props}>{children}</a>
}

function ApplyCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="role-apply-callout">
      <span className="role-apply-callout-icon">📝</span>
      <div className="role-apply-callout-body">{children}</div>
    </div>
  )
}

function AboutStriveBlock() {
  return (
    <>
      <h2 className="role-about-heading">About Strive</h2>
      <AboutStrive className="careers-about-strive--role" />
    </>
  )
}

const components = { a: RoleLink, ApplyCallout, AboutStriveBlock }

export default function RolePage({ source, frontmatter }: RolePageProps) {
  return (
    <>
      <Head>
        <title>{`${frontmatter.title} — Strive Careers`}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <main className="role-page">
        <article className="role-prose">
          <Link href="/other/careers" className="role-back">← All open roles</Link>

          <header className="role-page-header">
            <h1>{frontmatter.title.split(' | ')[0]}</h1>
            <div className="role-page-tags">
              {frontmatter.locations?.map(loc => (
                <span key={loc} className="careers-tag careers-tag--location">{loc}</span>
              ))}
              {frontmatter.type?.map(t => (
                <span key={t} className="careers-tag careers-tag--type">{t}</span>
              ))}
            </div>
            {frontmatter.applyUrl && (
              <a href={frontmatter.applyUrl} target="_blank" rel="noopener noreferrer" className="role-apply-btn">
                Apply now →
              </a>
            )}
          </header>

          <div className="role-prose-body">
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const rolesDir = path.join(process.cwd(), 'content', 'careers')

  if (!fs.existsSync(rolesDir)) {
    return { paths: [], fallback: false }
  }

  // Generate paths for all files — getStaticProps handles the Active check and redirects
  const files = fs.readdirSync(rolesDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return {
    paths: files.map(f => ({ params: { slug: f.replace(/\.(mdx|md)$/, '') } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string
  const rolesDir = path.join(process.cwd(), 'content', 'careers')

  let filePath = path.join(rolesDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(rolesDir, `${slug}.md`)
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(raw)

  if (frontmatter.status !== 'Active') {
    return { redirect: { destination: '/other/careers', permanent: false } }
  }

  const source = await serialize(content)
  return { props: { source, frontmatter } }
}
