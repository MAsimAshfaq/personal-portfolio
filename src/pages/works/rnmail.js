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
    <Layout title="RNMail">
      <Container>
        <Title>
          RNmail <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Looking for a UI design, which supports multiple themes, Here is an
          utility app for you.
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
          <WorkImage src="/images/rnmail-sidebar.jpeg" alt="1"></WorkImage>
          <WorkImage src="/images/rnmail-theme-picker.jpeg" alt="2"></WorkImage>
          <WorkImage src="/images/rnmail-nord.jpeg" alt="3"></WorkImage>
          <WorkImage
            src="/images/rnmail-solarized-dark.jpeg"
            alt="4"
          ></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Work;
