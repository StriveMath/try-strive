import Head from 'next/head'

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://www.strivemath.com/#organization',
  name: 'Strive Math',
  legalName: 'Strive Education Pte. Limited',
  url: 'https://www.strivemath.com',
  sameAs: [
    'https://www.linkedin.com/company/strivemath/',
    'https://www.facebook.com/Strivemath',
    'https://www.youtube.com/c/Strivemath',
    'https://strivemath.org/about-us',
    'https://trinket.strivemath.org/about',
  ],
}

export default function OrganizationSchema() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
    </Head>
  )
}
