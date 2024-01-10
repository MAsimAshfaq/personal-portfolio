import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='Similarity API'>
      <Container>
        <Title>
          Similarity API Dashboard <Badge>2023</Badge>
        </Title>
        <Paragraph>
          A beautiful and awesome api service to calculate text similarity.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://similarity-api-alpha-sand.vercel.app'>
              https://www.similarity-api.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next 13, Tailwind CSS, Upstash, PlanetScale, Prisma, MUI,
              NextAuth, Radix-UI, Server components
            </span>
          </ListItem>
        </List>
        <WorkImage
          src='/images/similarity-documentation.png'
          alt='1'></WorkImage>
        <WorkImage src='/images/similarity-dashboard.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
