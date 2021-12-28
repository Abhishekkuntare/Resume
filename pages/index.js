import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoBehance, IoLogoInstagram, IoLogoGithub,IoLinkSharp } from 'react-icons/io5'
import lambo from '../public/images/links/lambo.png'
import letsTalk from '../public/images/works/letsTalk.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Amravati!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abhishek Kuntare
          </Heading>
          <p>Digital Programmer ( Web / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Abhishek.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          Hey Abhishek is here , I'm full-stack developer based in Amravati with
          a passion for building our path I am a specialize in website design.
          Front end developer duties include determining the structure and
          design of web pages, striking a balance between functional and
          aesthetic design, and optimized for responsive smartphones and
          Currently i work on this project{' '}
          <NextLink href="/works/inkdrop">
            <Link>Astro</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Amravati, Maharashtra.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the School From Shree Ram Krushna Krida Vidyalay.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the 12th From Rural institute of JR College.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Engineering From Prof Ram Meghe institute Of Technology and Research.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Programming, Cubes, Playing Football
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Abhishekkuntare" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.behance.net/abhishekkuntare" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoBehance} />}
              >
                @behance
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLinkSharp} />}
              >
                @Linkdin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/abhishek__kuntare/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @Instagram
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://lamborghini-f74a3.web.app/"
            title="Lamborgihini "
            thumbnail={lambo}
          >
            @Lambo
          </GridItem>
          <GridItem
            href="https://letstalk-d7745.web.app/"
            title="LetsTalk"
            thumbnail={letsTalk}
          >
            @A Chatting Website
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
