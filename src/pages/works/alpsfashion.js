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
          Alpsfashion <Badge>2022</Badge>
        </Title>
        <Paragraph>
          An ecommerce site for buying clothes for every season.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.alpsfashion.pk/">
              https://www.alpsfashion.pk/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, Sanity</span>
          </ListItem>
        </List>
        <WorkImage src="/images/alps01.PNG" alt="1"></WorkImage>
        <WorkImage src="/images/alps.02.PNG" alt="2"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
