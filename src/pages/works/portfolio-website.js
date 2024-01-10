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
          Portfolio-Website <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A beautiful and amazing portfolio website for any business owner.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://portfolio-theo-website.netlify.app/">
              https://www.portfolio-website.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, Tailwind, Formspree</span>
          </ListItem>
        </List>
        <WorkImage src="/images/portfolio.jpeg" alt="1"></WorkImage>
        <WorkImage src="/images/portfolio1.PNG" alt="2"></WorkImage>
        <WorkImage src="/images/portfolio2.PNG" alt="2"></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
