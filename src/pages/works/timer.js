import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Alpsfashion">
      <Container>
        <Title>
          Timer <Badge>2016</Badge>
        </Title>
        <Paragraph>
          Do you procrastinate? Here&apos;s a solution for you. An app that
          helps you focus on something.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Application</Meta>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/timer.png" alt="1"></WorkImage>
          <WorkImage src="/images/timer1.jpeg" alt="2"></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
