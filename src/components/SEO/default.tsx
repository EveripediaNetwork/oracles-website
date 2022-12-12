import React from 'react'
import { DefaultSeo } from 'next-seo'
import { NextRouter } from 'next/router'

interface SEOHeaderProps {
  router: NextRouter
}

const SEOHeader = ({ router }: SEOHeaderProps) => {
  return (
    <DefaultSeo
      title="IQ OraQles"
      description="IQ OraQles is a service managed by BrainDAO that allows verified first parties to bring real-world information on-chain."
      canonical={`https://oraqles.com${router.asPath || ''}`}
      openGraph={{
        title: 'IQ Oraqles',
        description:
          'IQ OraQles is a service managed by BrainDAO that allows verified first parties to bring real-world information on-chain.',
        type: 'website',
        site_name: 'IQ OraQles',
        images: [
          {
            url: 'https://oraqles-ui.vercel.app/images/og-image-default.png',
            width: 1200,
            height: 630,
            alt: 'IQ OraQles',
          },
        ],
      }}
    />
  )
}

export default SEOHeader