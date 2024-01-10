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
          Pokedux <Badge>2022</Badge>
        </Title>
        <Paragraph>A Pokemon Voting site for fun!</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://pokedux-theo.netlify.app/">
              https://www.pokedux.gg <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, tRPC, Prisma, Postgresql, tailwindcss</span>
          </ListItem>
        </List>
        <WorkImage src="/images/pokedux.jpeg" alt="1"></WorkImage>
        <WorkImage src="/images/pokedux2.PNG" alt="2"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
