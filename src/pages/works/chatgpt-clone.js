import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='ui-ux-app'>
      <Container>
        <Title>
          ChatGPT Messenger Clone <Badge>2023</Badge>
        </Title>
        <Paragraph>
          This project uses openAI API to generate response and store it in a
          firestore database with full authentication using next-auth.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://chatgpt-clone-vert-eight.vercel.app/'>
              https://craftzfox-chatgpt-clone.vercel.app/{' '}
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS 13, Tailwindcss, ChatGPT-3.5, NextAuth, Firebase</span>
          </ListItem>
        </List>
        <WorkImage src='/images/chatgpt-main.png' alt='1'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
