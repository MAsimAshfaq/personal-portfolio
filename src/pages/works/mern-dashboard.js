import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='MERN-Dashboard'>
      <Container>
        <Title>
          MERN-Dashboard <Badge>2023</Badge>
        </Title>
        <Paragraph>A beautiful full-stack dashboard site.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://admin-frontend-gu1a.onrender.com/'>
              https://www.mern-dashboard.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React js, Express, Mongodb, Node js, MUI</span>
          </ListItem>
        </List>
        <WorkImage src='/images/geo-page.png' alt='1'></WorkImage>
        <WorkImage src='/images/customer-page.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
