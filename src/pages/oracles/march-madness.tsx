import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Link as ChakraLink,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import Link from 'next/link'
import shortenAccount from '@/utils/shortenAccount'
import config from '@/config'
import { useMarchMadness } from '@/hooks/useMarchMadness'
import { MarchMadnessTabData } from '@/data/MarchMadnessTabData'
import MarchMadnessPressView from '@/components/Oracles/MarchMadness/PressView'
import MarchMadnessInfoView from '@/components/Oracles/MarchMadness/InfoView'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { marchMadnessIpfsHash } = useMarchMadness()

  useEffect(() => {
    const fetchMarchMadnessIpfsData = async () => {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${marchMadnessIpfsHash}`,
      )

      const data = await response.json()

      console.log(data)
    }

    fetchMarchMadnessIpfsData()
  })

  return (
    <>
      <Box
        bgColor="oraclesBackground"
        minH="300px"
        bgImage={`/images/${backgroundImage}`}
        py={20}
      >
        <Flex
          justifyContent="center"
          direction="column"
          mx="auto"
          maxW="1090px"
        >
          <Heading textAlign="center" color="oraclesHeadingColor">
            March Madness Oraqle Dashboard
          </Heading>
          <Text mt="4" color="oraclesTextColor" textAlign="center">
            This data is read directly from the mainnet Ethereum blockchain.
          </Text>
          <Text textAlign="center" mt="4" color="oraclesTextColor">
            Pulled from{' '}
            <Box as="span" color="oraclesHeadingColor">
              <Link
                href={`https://etherscan.io/address/${config.marchMadnessContractAddress}`}
                passHref
                target="_blank"
              >
                <ChakraLink
                  textDecoration="none"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {shortenAccount(config.marchMadnessContractAddress)}
                </ChakraLink>
              </Link>
            </Box>
          </Text>
        </Flex>
      </Box>
      <Tabs
        display="flex"
        alignItems="stretch"
        maxW="1280px"
        mx="auto"
        minH="500px"
        variant="unstyled"
        orientation="vertical"
        defaultIndex={0}
      >
        <Box
          pt="8"
          w="300px"
          flexShrink="0"
          pr="5"
          borderRight="1px solid"
          borderColor="oraclesPageBorder"
        >
          <TabList w="full">
            {MarchMadnessTabData.map(tab => (
              <Tab
                h="50px"
                fontSize="sm"
                w="full"
                borderRadius="8px"
                _selected={{ color: 'white', bg: 'heroBackground' }}
                justifyContent="space-between"
                key={tab.id}
                mb="3"
              >
                <Box as="span">{tab.label}</Box>
                {tab.id === 'json' && (
                  <Box
                    bgColor="oraclesViewerButton"
                    p="2"
                    borderRadius="20px"
                    as="span"
                    color="oraclesTextColor"
                  >
                    viewer
                  </Box>
                )}
              </Tab>
            ))}
          </TabList>
        </Box>
        <Box flexGrow="1" py="8" pl="8">
          <TabPanels>
            <TabPanel p="0">
              <MarchMadnessInfoView />
            </TabPanel>
            <TabPanel p="0">
              <p>Brackets</p>
            </TabPanel>
            <TabPanel p="0">
              <p>Team Stats</p>
            </TabPanel>
            <TabPanel p="0">
              <p>Json</p>
            </TabPanel>
            <TabPanel p="0">
              <MarchMadnessPressView />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  )
}

export default Oracles
