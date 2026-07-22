import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  coverImage?: string | null
}

interface BlogIndexProps {
  posts: PostMeta[]
}

const trialUrl = 'https://www.strivemath.com/?show_form=true&plan=navbar'

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog — Strive</title>
        <meta name="description" content="Tips, guides and learning resources for maths and AI-first software development from the Strive team." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Strive Blog',
              description: 'Tips, guides and learning resources for maths and AI-first software development.',
              url: 'https://www.strivemath.com/blog',
              publisher: {
                '@type': 'Organization',
                name: 'Strive',
                url: 'https://www.strivemath.com',
              },
            }),
          }}
        />
      </Head>

      <Nav />

      <main className="blog-listing">
        <header className="blog-listing-header">
          <h1>Blog</h1>
          <p>Tips, guides &amp; learning resources from the Strive team.</p>
        </header>

        {posts.length === 0 ? (
          <p className="blog-empty">Posts coming soon.</p>
        ) : (
          <div className="blog-posts-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-card">
                {post.coverImage && (
                  <div className="blog-card-cover">
                    <img src={post.coverImage} alt="" />
                  </div>
                )}
                <time dateTime={post.date} className="blog-post-date">
                  {new Date(post.date).toLocaleDateString('en-SG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-desc">{post.description}</p>
                {post.tags.length > 0 && (
                  <ul className="blog-post-tags" aria-label="Tags">
                    {post.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join(process.cwd(), 'content', 'blog')

  if (!fs.existsSync(postsDir)) {
    return { props: { posts: [] } }
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))

  const posts: PostMeta[] = files
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        coverImage: data.coverImage || null,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { posts } }
}
