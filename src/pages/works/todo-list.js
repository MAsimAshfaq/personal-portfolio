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
          Todo-List <Badge>2022</Badge>
        </Title>
        <Paragraph>
          An smoothly animated todo-list app. Available on both ios and android.
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
            <span>React Native, Sanity</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/todo-list.png" alt="1"></WorkImage>
          <WorkImage src="/images/todo-list1.jpeg" alt="2"></WorkImage>
          <WorkImage src="/images/todo-list2.jpeg" alt="3"></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
