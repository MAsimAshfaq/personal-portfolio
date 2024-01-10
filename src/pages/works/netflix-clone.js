import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
  return (
    <Layout title="Alpsfashion">
      <Container>
        <Title>
          Netflix-Clone <Badge>2017</Badge>
        </Title>
        <Paragraph>An open source netflix-clone with TMDB Api.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://netflix-clone2017.netlify.app/">
              https://www.netflix-clone-2017 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TMDB, tailwind, firebasev8</span>
          </ListItem>
        </List>
        <WorkImage src="/images/netflix.jpeg" alt="1"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
