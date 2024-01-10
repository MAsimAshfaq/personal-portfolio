import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";

const Work = () => {
  return (
    <Layout title="Craftz-Gym">
      <Container>
        <Title>
          Pizza Application <Badge>2022</Badge>
        </Title>
        <Paragraph>
          An online application to order yummy pizza at your door step in just
          25 minutes.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, MongoDB, Chakra-UI, and tailwindcss</span>
          </ListItem>
        </List>
        <WorkImage src="/images/food-ordering-2.png" alt="1"></WorkImage>
        <WorkImage src="/images/food-ordering-1.png" alt="1"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
