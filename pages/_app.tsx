import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/globals.css'

// Minimal theme: fonts + core brand colors only.
// Deep component theming is deferred to the main site.
const theme = extendTheme({
  fonts: {
    heading: "'Jost', sans-serif",
    body: "'Jost', sans-serif",
    mono: "'Inconsolata', monospace",
  },
  colors: {
    brand: {
      primary: '#0F1574',
      purple: '#7058FF',
      pink: '#FF4F84',
      orange: '#FFA41C',
      green: '#B0EB33',
      blue: '#2C81ED',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isContentPath = /^\/(blog|courses|other)(\/|$)/.test(router.pathname)
  const canonicalPath = router.asPath.split('?')[0]

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {isContentPath && (
        <Head>
          <link rel="canonical" key="canonical" href={`https://www.strivemath.com${canonicalPath}`} />
        </Head>
      )}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
