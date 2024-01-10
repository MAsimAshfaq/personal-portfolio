
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
          Portfolio-Website-V2 <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A beautiful and amazing portfolio website for any developer.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://craftzfox-portfolio-v2.vercel.app/">
              https://www.portfolio-website.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, Tailwind, Framer-Motion, and Sanity</span>
          </ListItem>
        </List>
        <WorkImage src="/images/hero.gif" alt="1"></WorkImage>
        <WorkImage src="/images/picture-2.png" alt="2"></WorkImage>
        <WorkImage src="/images/picture-3.png" alt="2"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
