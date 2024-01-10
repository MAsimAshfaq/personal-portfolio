import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BioSection, BioYear } from '../../components/bio';
import Layout from '../../components/layout/article';
import Paragraph from '../../components/paragraph';
import Section from '../../components/section';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAplha.500', 'whiteAlpha.200')}
          p={3}
          align='center'
          mb={6}>
          Hello I&apos;m a Mern stack developer based in Pakistan!
        </Box>
        <Box display={{ md: `flex` }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Muhammad Asim Ashfaq Khan
            </Heading>
            <p>Mern stack cross platform developer. </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'>
            <Image
              borderColor='whiteAlpha.900'
              borderWidth={2}
              borderStyle='solid'
              maxW='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/asim2.jpeg'
              alt='Profile image'
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Asim is a freelancer and a Mern-stack developer based in
            faisalabad with a passion for building digital applications/services
            and stuff he wants. He has a knack for all things, from planning and
            designing all the way to solving real life problem witn code. When
            not online, he loves writing on his{' '}
            <Link href='https://craftzfox-blog.netlify.app/'>Blog</Link>.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Faisalabad, Pakistan.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed Intermediate Studies from Govt college.
          </BioSection>
          {/* When i complete my graduation */}
          <BioSection>
            <BioYear>2021</BioYear>
            Works as a freelancer.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the <strong>BSCS</strong> (Honor&apos;s) Program in the
            Virtuial University of Pakistan.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            I ♥
          </Heading>
          <Paragraph>
            Coding, Music,{' '}
            <Link href='https://craftzfox-blog.netlify.app/'>Writing</Link>.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            On the Web
          </Heading>
          {/* <Paragraph>
            Follow me on social media{' '}
            <Link href='https://craftzfox-biolinks.netlify.app/'>
              @craftzFox
            </Link>
            .
          </Paragraph> */}
        </Section>
      </Container>
    </Layout>
  );
}
