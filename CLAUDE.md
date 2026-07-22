# CLAUDE.md — Strive Site (try-strive repo)

## Project overview

Next.js 14 (Pages Router) marketing + blog site for Strive, an edtech company teaching math and AI Coding. Currently deployed to Vercel. This repo is served via `images.strivemath.com` — the plan is to eventually serve its content under `www.strivemath.com/blog` and `www.strivemath.com/courses/` via a reverse proxy (see [Reverse proxy plan](#reverse-proxy-plan) below).

**Domain setup:**
- `images.strivemath.com` — live Vercel custom domain on this project. Used as `assetPrefix` (serves `_next/static/*` JS/CSS bundles) and as the base URL for all OG and JSON-LD image references in blog posts. Configured in `next.config.js` and via the `IMAGES_BASE` constant in `pages/blog/[slug].tsx`.
- `try.strivemath.com` — retired. It permanently redirects to `strivemath.com` (which itself redirects to `www.strivemath.com`) at the domain-provider level. It is not, and should not be, registered as a Vercel domain for this project — do not add it in Vercel.

**Dev server:** `npm run dev` — usually starts on port 3000, but falls back to 3001/3002 if ports are occupied.

---

## Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 14 (Pages Router, SSG) |
| Styling | Custom CSS in `styles/globals.css` — no Tailwind |
| UI library | Chakra UI v2 — used for the shared `Footer`; otherwise mostly untouched, deep component theming deferred to main site |
| Icons (Footer only) | `react-icons` (`react-icons/fa`) — LinkedIn/Facebook/YouTube/email/phone icons in `components/Footer.tsx` |
| Blog content | MDX via `next-mdx-remote` v4 (`serialize` + `MDXRemote`) |
| Frontmatter parsing | `gray-matter` |
| Fonts | Jost (headings/body), Roboto (body fallback), Inconsolata (mono) — loaded via Google Fonts in `_document.tsx` |
| Path alias | `@/*` → `./*` (configured in tsconfig.json) |
| Deployment | Vercel (`vercel.json` contains only `{ "framework": "nextjs" }`) |

---

## Spelling convention

All user-facing copy on this site (page text, headings, meta descriptions, blog posts, MDX content) uses **UK/British spelling**, not American — e.g. `personalised` not `personalized`, `organisation` not `organization`, `programme` not `program` (in the curriculum/course sense), `colour`/`favourite`/`centre` etc. when writing prose. When adding or editing copy, check for the common American forms (`-ize`/`-ify` → `-ise`, `-or` → `-our`, `-er` → `-re`, `-og` → `-ogue` where applicable) and convert them.

This does **not** apply to:
- CSS/JS property names and values (`color`, `background-color`, `fontSize`, `center` as a `text-align`/`justify-content` value) — these are fixed by the CSS and DOM specs and must stay as-is.
- Third-party package/API names (`gray-matter`, `serialize` from `next-mdx-remote`, Schema.org types like `Organization`/`EducationalOrganization`) — these are fixed external identifiers.
- Code identifiers (function/variable names) — spelling consistency there is a normal JS naming choice, not a site-copy concern.

---

## Directory structure

```
pages/
  _app.tsx                        — Global app wrapper
  _document.tsx                   — Google Fonts loaded here
  courses/
    index.tsx                     — Courses landing (card grid)
    math.tsx                      — Mathematics course page (full marketing page)
    ai-coding.tsx                 — AI Coding course page
    cca/
      index.tsx                   — CCA (co-curricular activity) programme page
      what-comes-next-after-cca.tsx        — Student-facing post-completion landing page (linked from email)
      parent-what-comes-next-after-cca.tsx — Parent-facing equivalent, gender-neutral third-person copy
    custom/
      data-science-machine-learning-intro.tsx  — Hidden/custom course page
    holiday-bootcamps/
      index.tsx                   — Holiday bootcamps landing
      ai-coding-intro-bootcamp.tsx
      ai-coding-advanced-bootcamp.tsx
      math-confidence-bootcamp.tsx
      math-performance-bootcamp.tsx
      python-apps-bootcamp.tsx
  blog/
    index.tsx                     — Blog listing (reads content/blog/*.mdx at build time)
    [slug].tsx                    — Blog post page (SSG via getStaticPaths/getStaticProps)
  other/
    isa-webinar.tsx               — ISA webinar landing page
    privacy-policy.tsx            — Static privacy policy page (/other/privacy-policy)
    paidcodewithai-80.tsx         — Paid landing page
    paidcodewithai-680.tsx
    paidpythonapps-80.tsx
    paidpythonapps-680.tsx
    paidpythongames-80.tsx
    paidpythongames-680.tsx
    careers/
      index.tsx                   — Careers landing (active roles grid + About Strive + YouTube)
      teach-at-strive.tsx         — Static "Teach at Strive" marketing page (not MDX-driven)
      [slug].tsx                  — Individual role page (MDX via next-mdx-remote)

components/
  Nav.tsx                         — Shared nav component (used by all pages)
  blog/
    YouTubeEmbed.tsx              — Responsive 16:9 iframe, uses youtube-nocookie.com
    CodeEmbed.tsx                 — Generic sandboxed iframe for GeoGebra, CodePen, p5.js etc.
  careers/
    AboutStrive.tsx               — Shared About Strive blurb; accepts className for page-specific sizing

content/blog/
  *.mdx                           — ~27 blog posts; slug = filename without extension

content/careers/
  *.mdx                           — One file per role; slug = filename without extension

public/images/blog/
  <slug>/                         — Per-post image folders (cover.jpg + any inline images)

styles/
  globals.css                     — Single stylesheet: design tokens, reset, nav, all page sections, blog

reverse-proxy-plan.md             — Full plan for proxying this app under www.strivemath.com (do not delete)
design-extract-output/            — Figma/design token exports (reference only, not imported)
```

---

## Shared nav and footer

All pages import and render `<Nav />` from `components/Nav.tsx`, and `<Footer />` from `components/Footer.tsx` (added at the end of the page). There is no shared `<Layout>` component wrapping both — each page renders them individually. `Nav.tsx` hardcodes the CTA URL as:

```ts
const NAV_CTA_URL = 'https://www.strivemath.com/?show_form=true&plan=navbar'
```

Current "Courses" dropdown links (desktop and mobile menus are kept in sync): Mathematics `/courses/math`, AI Coding `/courses/ai-coding`, Holiday Bootcamps `/courses/holiday-bootcamps`, CCA `/courses/cca`. Blog `/blog` also appears in both.

The "Everything else" desktop dropdown also includes Careers (`/other/careers`). Careers is intentionally **excluded from the mobile menu** to keep it uncluttered.

**Exceptions — pages with no `<Nav />` or `<Footer />`:** the six `/other/paidcodewithai-*` / `/other/paidpythonapps-*` / `/other/paidpythongames-*` payment-confirmation pages are deliberately bare, standalone "Payment Successful" splash screens (`noindex,nofollow`) — do not add site chrome to them.

`Footer` (`components/Footer.tsx`) is a Chakra UI component (the only place in this repo where Chakra actually renders meaningful UI). It links to `www.strivemath.com` for pages that only exist on the main site (Home, About Us, Student Toy), and to relative paths for pages that live in this repo (`/other/careers`, `/other/careers/teach-at-strive`, `/other/privacy-policy`) — follow that same split when adding new footer links. Logo image uses `/images/main-logo-large.webp` (412×118, higher-res than the small nav logo) to avoid upscaling blur at the footer's larger display size.

---

## URL redirects

`next.config.js` contains 17 temporary (`permanent: false`) redirect rules that map all legacy flat URLs to the current nested structure. These are `307` redirects intentionally — they will be updated to `301` and pointed at `www.strivemath.com` once the reverse proxy goes live (see Phase 5 of the reverse proxy plan).

Key redirects:
- `/` → `/courses`
- `/math` → `/courses/math`
- `/ai-first-software-development` → `/courses/ai-coding`
- `/holidaycamps` → `/courses/holiday-bootcamps`
- `/advanced-ai-course` → `/courses/custom/data-science-machine-learning-intro`
- All `/paidcodewithai-*`, `/paidpythonapps-*`, `/paidpythongames-*` → `/other/*`

**Do not change these to `permanent: true` yet** — that flip happens as part of the reverse proxy cutover.

---

## X-Robots-Tag headers

`next.config.js` adds `X-Robots-Tag: noindex` to all routes that do NOT start with `/blog`, `/courses`, or `/other`. This prevents search engines from indexing `/` (which just redirects), any old flat paths, and any dev/test pages.

---

## Reverse proxy plan

Full plan is in `reverse-proxy-plan.md`. Summary:

**Goal:** Serve `www.strivemath.com/blog` and `www.strivemath.com/courses/*` by proxying requests from the main site to this repo, consolidating domain authority.

**Already done in this repo:**
- `assetPrefix: 'https://images.strivemath.com'` in `next.config.js` (production only) — ensures proxied pages load JS/CSS correctly
- Canonical tags pointing to `www.strivemath.com` — implemented globally in `pages/_app.tsx` via the `isContentPath` regex (`/^\/(blog|courses|other)(\/|$)/`). Any page under `/blog`, `/courses`, or `/other` automatically gets a `www.strivemath.com` canonical. Individual blog post pages also have an explicit canonical in `[slug].tsx` as belt-and-suspenders.
- JSON-LD `url` fields in blog posts already use `www.strivemath.com`
- `og:image` on all blog posts (served via `images.strivemath.com`)
- `pages/sitemap-content.xml.tsx` — a server-rendered sitemap *fragment* (not a full sitemap) exposing every `/blog`, `/courses`, and active `/other/careers` URL as `https://www.strivemath.com/...`. Repo A fetches this server-to-server and merges it into the public sitemap.xml it serves; this repo doesn't know or care about that merge logic. Excludes the 6 `paidcodewithai-*`/`paidpythonapps-*`/`paidpythongames-*` pages (already `noindex,nofollow`) and any career role where `status !== 'Active'`.
- `public/robots.txt` now fully disallows all crawlers (`Disallow: /`) — this domain (`images.strivemath.com` / `try-strive.vercel.app`) should never be crawled or indexed directly; all indexing happens via the `www.strivemath.com` reverse proxy. This has no effect on Repo A's own crawlability (robots.txt is scoped per-domain) or on Repo A's server-to-server fetch of `sitemap-content.xml` (not a crawler).

**Pending phases (work in Repo A — www.strivemath.com):**
- Phase 1: Move coding level pages into `/courses/coding/` and add 301 redirects
- Phase 2: Add fallback rewrite rules in Repo A to proxy `/blog/*` and `/courses/*` to this app
- Phase 4: Repo A fetches `sitemap-content.xml` from this repo and merges it into its own public `sitemap.xml`
- Phase 5 (optional): Add 301 redirects from this repo pointing to `www.strivemath.com`

**Do not do Phase 4–5 until Phase 2 is confirmed working.**

---

## Blog system

### Content location
All posts live in `content/blog/<slug>.mdx`. The slug becomes the URL: `content/blog/joining-yc.mdx` → `/blog/joining-yc`.

### Frontmatter schema

```yaml
title: "Post Title"             # required — used as <h1> and <title>
date: "2019-03-08"              # required — original publish date, ISO 8601
description: "..."              # required — used in meta description and listing card
tags: ["tag-one", "tag-two"]    # optional — shown as pill badges
updatedDate: "2024-06-01"       # optional — shown as "Updated" date; drives dateModified in JSON-LD
coverImage: "/images/blog/slug/cover.jpg"  # optional but expected — shown on listing card and top of post
```

### Images

Place images in `public/images/blog/<slug>/`. Reference them with absolute paths from `/public`:

```md
![Alt text](/images/blog/my-post/image.png)
![Alt with caption](/images/blog/my-post/image.png "Caption text shown below image")
```

The title attribute triggers a `<figure><figcaption>` wrapper. No title = plain `<img>`. Both are centered by default via CSS.

**Important:** Large GIFs are expensive — `multiplication-circles.gif` is 6.1 MB. Consider converting to `.mp4`/`.webm` for performance.

### MDX custom components

Registered in `pages/blog/[slug].tsx` `components` object:

| Component | Usage in MDX |
|---|---|
| `YouTubeEmbed` | `<YouTubeEmbed id="VIDEO_ID" title="optional" />` |
| `CodeEmbed` | `<CodeEmbed src="https://..." title="optional" height={500} />` |
| `img` → `BlogImage` | Automatic — handles figure/figcaption for captioned images |
| `p` → `BlogParagraph` | Automatic — unwraps `<p>` around block images to fix hydration error |

### Hydration fix (important to preserve)

Remark wraps image tags in `<p>` at AST build time. When `BlogImage` renders a `<figure>`, this creates invalid HTML (`<figure>` inside `<p>`), causing a React hydration mismatch. The `BlogParagraph` component in `[slug].tsx` detects when its sole child is a `BlogImage` and returns the child directly without the `<p>` wrapper. **Do not remove this component.**

### SEO / structured data

- Blog listing page: Schema.org `Blog` JSON-LD
- Blog post pages: Schema.org `BlogPosting` JSON-LD with `datePublished`, `dateModified`, `image`, `keywords`
- OG tags: `article:published_time`, `article:modified_time`, one `article:tag` per tag

---

## Design tokens

Canonical CSS variables are defined at the top of `styles/globals.css`. Short aliases map to them below:

```css
--primary          → #0F1574  (navy blue)
--accent-purple    → #7058FF
--accent-pink      → #FF4F84
--accent-orange    → #FFA41C
--accent-green     → #B0EB33
--accent-blue      → #2C81ED
--text-dark        → #575863
--text-muted       → #B1B1C2
--gradient-cta     → linear-gradient(to right, #FFA41C, #FF4F84, #7058FF)
```

The `design-extract-output/` folder contains Figma exports (design language doc, token JSON, Tailwind config, shadcn theme). These are reference only — not imported by the app.

---

## Blog content pipeline (linkedin-to-blog skill)

Blog posts are produced from LinkedIn content using the `linkedin-to-blog` Claude Code skill. Invoke it with `/linkedin-to-blog` or it triggers automatically when you reference a `raw-content/` file or Notion record.

**Two input sources:**

| Source | How to trigger |
|---|---|
| `raw-content/<name>.md` file | Drop the file and say "process this" / "post this to the blog" |
| Notion LinkedIn Posts database | Name the record (e.g. "Ethan - GitHub") or paste a Notion URL |

**What the skill does:**
1. Extracts the post body and date from the source
2. Picks an SEO/AEO keyword strategy and rewrite level
3. Converts the cover image to WebP at 1200×675px (using Python PIL — not `sips`)
4. Writes `content/blog/<slug>.mdx` with full frontmatter
5. Moves images to `public/images/blog/<slug>/`
6. Moves the source file to `raw-content/handled/` (gitignored — never commit `raw-content/`)
7. If Notion source: updates the record's `State`, `Blog link`, and backfill date properties

**Cover image spec:** exactly 1200×675 (16:9), WebP. The CSS enforces `aspect-ratio: 16/9` with `object-fit: cover` — keep subject matter in the centre 80%.

---

## Careers system

### Content location
All roles live in `content/careers/<slug>.mdx`. The slug becomes the URL: `content/careers/teacher-part-time.mdx` → `/other/careers/teacher-part-time`.

### Frontmatter schema

```yaml
title: "Role Title | External suffix"   # required — suffix after " | " is stripped in the UI
status: "Active"                        # required — only "Active" roles are shown and accessible
locations: ["South Africa", "Remote"]   # required — shown as blue tag pills
type: ["Full Time"]                     # required — shown as purple tag pills
description: "..."                      # required — shown on the landing page role card
applyUrl: "https://airtable.com/..."    # optional — drives the "Apply now →" button in the page header
```

### Role visibility and redirects

- Only `status: "Active"` roles appear on the `/other/careers` landing page.
- `getStaticPaths` in `[slug].tsx` generates pages for **all** MDX files regardless of status.
- `getStaticProps` checks `status` at build time: if not `"Active"`, it returns a **307 redirect to `/other/careers`** instead of rendering the page.
- This means: set `status: "Closed"` (or any non-`"Active"` value) and the role disappears from the listing **and** its URL redirects to the careers landing page.
- Unknown slugs (no file) return 404 because `fallback: false`.
- Status changes only take effect on the next Vercel deploy (SSG).

### MDX custom components

Registered in `pages/other/careers/[slug].tsx`:

| Component | Usage in MDX | Purpose |
|---|---|---|
| `ApplyCallout` | `<ApplyCallout>\n\n**[Apply](url)** (time)\n\n</ApplyCallout>` | Gray callout box at top of role — must have blank lines around markdown children |
| `AboutStriveBlock` | `<AboutStriveBlock />` | Renders "About Strive" `<h2>` + the shared `AboutStrive` component |
| `a` → `RoleLink` | Automatic | Opens external links in new tab |

### MDX structure for a role page

```mdx
---
frontmatter here
---

<ApplyCallout>

**[Click here to apply](url)** (Should take ~10 minutes)

</ApplyCallout>

<AboutStriveBlock />

## Role | Description heading

...role content...
```

### teach-at-strive.tsx

`pages/other/careers/teach-at-strive.tsx` is a **static TSX page**, not MDX-driven. It's a marketing page linking to the teacher role posts. Next.js gives it priority over `[slug].tsx` because static filenames resolve before dynamic segments — no exclusion list needed.

---

## Adding a new role

1. Create `content/careers/<slug>.mdx` with required frontmatter and `status: "Active"`
2. Use the MDX structure above: `<ApplyCallout>` → `<AboutStriveBlock />` → role content
3. The role appears automatically on `/other/careers` (no code changes needed)
4. To close a role: change `status` to `"Closed"` (or any non-`"Active"` value) and redeploy

---

## CCA "what comes next" personalisation

`pages/courses/cca/what-comes-next-after-cca.tsx` (student-facing) and `pages/courses/cca/parent-what-comes-next-after-cca.tsx` (parent-facing) are linked from the post-completion email sent to students who finish a school's CCA/ECA/ASA programme. Both are plain SSG pages (no `getStaticProps`) personalised client-side via query params, using the shared `hooks/useCcaPersonalization.ts` hook.

### Query params

| Param | Meaning | Example |
|---|---|---|
| `name` | Student's first name | `?name=Alex` |
| `school` | Student's school name | `?school=ACS%20International%20School` |
| `term` | The word the student's school uses for the programme — `cca`, `eca`, or `asa` (case-insensitive) | `?term=eca` |

All three are optional. Blank or unrecognised values fall back to generic copy — never render `undefined` or an empty clause. `term` always resolves to `CCA`/`ECA`/`ASA`/`programme` (never arbitrary user text in a heading). `name`/`school` are capitalised/truncated (40 chars) by the hook and rendered via normal JSX interpolation (React escapes them automatically — safe against injection).

Because personalisation happens in a `useEffect` after `router.isReady`, the server-rendered HTML (and anything a crawler sees) is always the generic version — this is intentional, not a bug.

### Student vs. parent wording

The student page addresses the reader directly ("Hi Alex!"). The parent page never greets the parent by name — it greets generically and refers to the child in third person: `Hi, {name} just completed...` if `name` is present, `Your child just completed...` if not. Parent-page copy must stay **gender-neutral** ("their"/"them", never "his"/"her") since the child's gender isn't known from these params.

### Trial link

Both pages link to `https://www.strivemath.com/?show_form=true&gift=card&promoCode=freeECAtrial` — sales-confirmed combination where `gift=card` (any truthy value) skips the Stripe deposit step in the main site's booking flow (see `Step5Form.tsx` in the `frontend` repo), and `promoCode=freeECAtrial` tags the lead for the ECA continuation package pricing. `name`/`school`/`term` are **not** forwarded to this URL — personalisation is display-only on the landing page itself.

---

## Adding a new blog post

1. Create `content/blog/<slug>.mdx` with required frontmatter
2. Add images to `public/images/blog/<slug>/`
3. If there's a cover image, set `coverImage: "/images/blog/<slug>/cover.jpg"` in frontmatter
4. The post appears automatically on `/blog` (sorted by date, newest first)

## Adding a new page

Pages live under `pages/courses/`, `pages/other/`, or `pages/blog/` depending on their purpose. Import and render `<Nav />` from `components/Nav.tsx` at the top and `<Footer />` from `components/Footer.tsx` at the end. No shared `<Layout>` component exists — each page renders both individually. (Exception: standalone splash pages with no site chrome at all, like the payment-confirmation pages — see "Shared nav and footer" above.)

If the new page replaces a legacy flat URL (e.g. `/foo`), add a redirect in `next.config.js`:
```js
{ source: '/foo', destination: '/courses/foo', permanent: false }
```
Keep it `permanent: false` until the reverse proxy is live.

**Canonical tags:** Pages under `/blog`, `/courses`, and `/other` get a `www.strivemath.com` canonical automatically via `_app.tsx`. If you add a new top-level section (e.g. `/teachers/`), you must add it to the `isContentPath` regex in `pages/_app.tsx`, otherwise those pages will silently have no canonical tag:

```ts
// pages/_app.tsx
const isContentPath = /^\/(blog|courses|other)(\/|$)/.test(router.pathname)
// Add new sections here ↑
```
