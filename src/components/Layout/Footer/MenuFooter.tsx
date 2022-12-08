import React from 'react'
import { GridItem, SimpleGrid, Stack, Text, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '@/components/Elements/Logo/Logo'
import Link from '@/components/Elements/LinkElements/Link'

const MenuFooter = () => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={{ base: 1, lg: 12 }} py={10} spacing={12}>
      <GridItem colSpan={{ base: 8, lg: 4 }}>
        <Stack align={{ base: 'center', lg: 'flex-start' }} spacing="1">
          <Logo />
          <Text fontSize="xl" fontWeight="bold">
            {`${t('iqWiki')}`}
          </Text>
          <Text
            align={{ base: 'center', lg: 'start' }}
            fontWeight="medium"
            px={{ base: 3, lg: 0 }}
            fontSize="sm"
            maxW={{ md: '85%', xl: '75%' }}
          >
            {`${t('visionFooterText')}`}
          </Text>
        </Stack>
      </GridItem>
      <GridItem colSpan={8}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={12}>
          <GridItem colSpan={1}>
            <Stack align={{ base: 'center', md: 'flex-start' }}>
              <Heading size="sm">{`${t('iq')}`}</Heading>
              <Link target="_blank" href="https://iq.wiki/wiki/iq">
                {`${t('whatIQ')}`}
              </Link>
              <Stack direction="row" align="center" spacing={2}>
                <Link
                  target="_blank"
                  href="https://learn.everipedia.org/iq/iq/bridges"
                >
                  {`${t('bridges')}`}
                </Link>
              </Stack>
              <Link
                target="_blank"
                href="https://learn.everipedia.org/iq/iq/locking-hiiq"
              >
                {`${t('staking')}`}
              </Link>
              <Link
                target="_blank"
                href="https://learn.everipedia.org/iq/iq/iq-bonds-guide-ethereum"
              >
                {`${t('bonds')}`}
              </Link>
            </Stack>
          </GridItem>
          <GridItem colSpan={1}>
            <Stack align={{ base: 'center', md: 'flex-start' }}>
              <Heading size="sm">{`${t('Everipedia')}`}</Heading>
              <Link target="_blank" href="https://iq.wiki/static/about">{`${t(
                'aboutUs',
              )}`}</Link>
              <Link target="_blank" href="https://iq.wiki/static/careers">{`${t(
                'careers',
              )}`}</Link>
              <Link target="_blank" href="https://iq.wiki/branding">{`${t(
                'Branding',
              )}`}</Link>
            </Stack>
          </GridItem>
          <GridItem colSpan={1}>
            <Stack align={{ base: 'center', md: 'flex-start' }}>
              <Heading size="sm">{`${t('resources')}`}</Heading>
              <Link target="_blank" href="https://learn.everipedia.org/iq/">
                {`${t('help')}`}
              </Link>
              <Link target="_blank" href="https://iq.wiki/blog">{`${t(
                'blog',
              )}`}</Link>
              <Link target="_blank" href="https://iq.wiki/static/faq">{`${t(
                'faq',
              )}`}</Link>
              <Link target="_blank" href="https://iq.wiki/glossary">{`${t(
                'glossary',
              )}`}</Link>
            </Stack>
          </GridItem>
          <GridItem colSpan={1}>
            <Stack align={{ base: 'center', md: 'flex-start' }}>
              <Heading size="sm">{`${t('policies')}`}</Heading>
              <Link
                target="_blank"
                href="https://iq.wiki/static/guidelines"
              >{`${t('guideLines')}`}</Link>
              <Link target="_blank" href="https://iq.wiki/static/privacy">{`${t(
                'privacyPolicy',
              )}`}</Link>
              <Link target="_blank" href="https://iq.wiki/static/terms">{`${t(
                'termsOfService',
              )}`}</Link>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  )
}

export default MenuFooter
