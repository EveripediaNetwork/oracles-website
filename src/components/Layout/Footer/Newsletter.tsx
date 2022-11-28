import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <Stack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
      <Text fontSize="xl" fontWeight="bold" py={2}>
        {`${t('updatesFooterHeading')}`}
      </Text>
      <Text
        align={{ base: 'center', lg: 'start' }}
        fontSize="sm"
        maxW={{ md: '85%', xl: '65%' }}
      >
        {`${t('updatesFooterText')}`}
      </Text>
      <Button
        as="a"
        href="https://forms.gle/bmMce4r3JJckpSNJ7"
        target="_blank"
        size="lg"
        variant="solid"
      >
        {`${t('subScribeFooterBttn')}`}
      </Button>
    </Stack>
  )
}

export default Newsletter
