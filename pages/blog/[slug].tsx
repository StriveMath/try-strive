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
import YouTubeEmbed from '@/components/blog/YouTubeEmbed'
import CodeEmbed from '@/components/blog/CodeEmbed'

function BlogImage({ src, alt, title }: { src?: string; alt?: string; title?: string }) {
  if (title) {
    return (
      <figure className="blog-figure">
        <img src={src} alt={alt ?? ''} />
        <figcaption>{title}</figcaption>
      </figure>
    )
  }
  return <img src={src} alt={alt ?? ''} />
}

function BlogParagraph({ children }: { children?: React.ReactNode }) {
  if (React.isValidElement(children) && children.type === BlogImage) {
    return children
  }
  return <p>{children}</p>
}

function BlogLink({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith('http') || href?.startsWith('//')
  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  }
  return <a href={href} {...props}>{children}</a>
}

const components = { img: BlogImage, p: BlogParagraph, a: BlogLink, YouTubeEmbed, CodeEmbed }

interface FAQ {
  question: string
  answer: string
}

interface Frontmatter {
  title: string
  date: string
  updatedDate?: string
  description: string
  tags: string[]
  coverImage?: string
  faqs?: FAQ[]
}

interface BlogPostProps {
  source: MDXRemoteSerializeResult
  frontmatter: Frontmatter
  slug: string
}

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'
const IMAGES_BASE = 'https://images.strivemath.com'

export default function BlogPost({ source, frontmatter, slug }: BlogPostProps) {
  const publishDate = new Date(frontmatter.date)
  const modifiedDate = frontmatter.updatedDate ? new Date(frontmatter.updatedDate) : publishDate

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: publishDate.toISOString(),
    dateModified: modifiedDate.toISOString(),
    url: `https://www.strivemath.com/blog/${slug}`,
    author: { '@type': 'Organization', name: 'Strive', url: 'https://www.strivemath.com' },
    publisher: { '@type': 'Organization', name: 'Strive', url: 'https://www.strivemath.com' },
  }
  if (frontmatter.coverImage) jsonLd.image = `${IMAGES_BASE}${frontmatter.coverImage}`
  if (frontmatter.tags?.length) jsonLd.keywords = frontmatter.tags.join(', ')

  return (
    <>
      <Head>
        <title>{`${frontmatter.title} — Strive Blog`}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" key="canonical" href={`https://www.strivemath.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        {frontmatter.coverImage && (
          <meta property="og:image" content={`${IMAGES_BASE}${frontmatter.coverImage}`} />
        )}
        <meta property="article:published_time" content={publishDate.toISOString()} />
        {frontmatter.updatedDate && (
          <meta property="article:modified_time" content={modifiedDate.toISOString()} />
        )}
        {frontmatter.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {frontmatter.faqs?.length && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: frontmatter.faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              }),
            }}
          />
        )}
      </Head>

      <Nav />

      <main className="blog-post-layout">
        <article className="blog-prose">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <Link href="/blog" className="blog-back">← Blog</Link>
              <time dateTime={publishDate.toISOString()}>
                {publishDate.toLocaleDateString('en-SG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {frontmatter.updatedDate && (
                <span className="blog-updated">
                  Updated{' '}
                  <time dateTime={frontmatter.updatedDate}>
                    {modifiedDate.toLocaleDateString('en-SG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </span>
              )}
            </div>
            <h1>{frontmatter.title}</h1>
            {frontmatter.tags?.length > 0 && (
              <ul className="blog-post-tags" aria-label="Tags">
                {frontmatter.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            )}
          </header>

          {frontmatter.coverImage && (
            <div className="blog-post-cover">
              <img src={frontmatter.coverImage} alt={frontmatter.title} />
            </div>
          )}

          <div className="blog-prose-body">
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), 'content', 'blog')

  if (!fs.existsSync(postsDir)) {
    return { paths: [], fallback: false }
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  return {
    paths: files.map(f => ({ params: { slug: f.replace(/\.mdx$/, '') } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(raw)
  const source = await serialize(content)
  return { props: { source, frontmatter, slug } }
}
