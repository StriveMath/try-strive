import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Shared by the student and parent "what comes next after CCA" landing pages.
// ?name=&school=&term= (term: cca | eca | asa). All optional — blank/unrecognised
// values fall back to generic copy on the calling page.
const TERM_LABELS: Record<string, string> = { cca: 'CCA', eca: 'ECA', asa: 'ASA' }
const MAX_LEN = 40

function first(raw: string | string[] | undefined) {
  return (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? ''
}
function sanitizeText(raw: string | string[] | undefined) {
  const value = first(raw)
  return value.length > MAX_LEN ? value.slice(0, MAX_LEN) + '…' : value
}
function normalizeTerm(raw: string | string[] | undefined) {
  const key = first(raw).toLowerCase()
  return TERM_LABELS[key] ?? 'programme'
}

export function useCcaPersonalization() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [term, setTerm] = useState('programme')

  useEffect(() => {
    if (!router.isReady) return
    const rawName = sanitizeText(router.query.name)
    setName(rawName ? rawName[0].toUpperCase() + rawName.slice(1) : '')
    setSchool(sanitizeText(router.query.school))
    setTerm(normalizeTerm(router.query.term))
  }, [router.isReady, router.query])

  return { name, school, term, recognizedTerm: term !== 'programme' }
}
