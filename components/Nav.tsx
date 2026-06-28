import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_CTA_URL = 'https://www.strivemath.com/?show_form=true&plan=navbar'

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [everythingOpen, setEverythingOpen] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
        setEverythingOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY
      setNavHidden(currentY > lastScrollY.current && currentY > 80)
      lastScrollY.current = currentY <= 0 ? 0 : currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleCourses = () => {
    setCoursesOpen(o => !o)
    setEverythingOpen(false)
  }

  const toggleEverything = () => {
    setEverythingOpen(o => !o)
    setCoursesOpen(false)
  }

  const closeAll = () => {
    setCoursesOpen(false)
    setEverythingOpen(false)
    setMobileOpen(false)
  }

  return (
    <nav ref={navRef} style={{ transform: navHidden ? 'translateY(-100%)' : 'translateY(0)' }}>
      <div className="nav-inner">
        <a href="https://strivemath.com" className="nav-logo">
          <Image src="/images/main-logo.webp" alt="Strive" height={24} width={84} priority />
        </a>

        {/* Right side: dropdowns + CTA + burger grouped together */}
        <div className="nav-right">
        <div className="nav-dropdowns">
          <div className="nav-dropdown">
            <button
              className={`nav-dropdown-btn${coursesOpen ? ' active' : ''}`}
              onClick={toggleCourses}
              aria-expanded={coursesOpen}
            >
              Courses <ChevronDown open={coursesOpen} />
            </button>
            {coursesOpen && (
              <div className="nav-dropdown-menu">
                <span className="nav-dropdown-heading">All courses:</span>
                <a href="https://www.strivemath.com" onClick={closeAll}>Coding</a>
                <Link href="/courses/math" onClick={closeAll}>Mathematics</Link>
                <Link href="/courses/ai-coding" onClick={closeAll}>AI Coding</Link>
                <Link href="/courses/holiday-bootcamps" onClick={closeAll}>Holiday Bootcamps</Link>
              </div>
            )}
          </div>

          <div className="nav-dropdown">
            <button
              className={`nav-dropdown-btn${everythingOpen ? ' active' : ''}`}
              onClick={toggleEverything}
              aria-expanded={everythingOpen}
            >
              Everything else <ChevronDown open={everythingOpen} />
            </button>
            {everythingOpen && (
              <div className="nav-dropdown-menu">
                <Link href="/blog" onClick={closeAll}>Blog</Link>
                <Link href="/other/careers" onClick={closeAll}>Careers</Link>
              </div>
            )}
          </div>
        </div>

        <a href={NAV_CTA_URL} className="nav-cta">Try a class</a>

        {/* Mobile burger */}
        <button
          className="nav-burger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
        </button>
        </div>
      </div>

      {/* Mobile menu — single flat list */}
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <ul>
          <li><a href="https://www.strivemath.com" onClick={closeAll}>Coding</a></li>
          <li><Link href="/courses/math" onClick={closeAll}>Mathematics</Link></li>
          <li><Link href="/courses/ai-coding" onClick={closeAll}>AI Coding</Link></li>
          <li><Link href="/courses/holiday-bootcamps" onClick={closeAll}>Holiday Bootcamps</Link></li>
          <li><Link href="/blog" onClick={closeAll}>Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}
