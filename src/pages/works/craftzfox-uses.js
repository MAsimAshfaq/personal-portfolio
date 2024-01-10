import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
	return (
		<Layout title="ui-ux-app">
			<Container>
				<Title>
					Personal Space (Contd...)  <Badge>2023</Badge>
				</Title>
				<Paragraph>
					My personal tech list that i use in my everyday life.
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://craftzfox-uses.vercel.app/">
                        https://craftzfox-uses.vercel.app/{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Astro, Tailwindcss</span>
					</ListItem>
				</List>
				<WorkImage src="/images/craftz-fox-uses-main.png" alt="1"></WorkImage>
			</Container>
		</Layout>
	);
};
export default Work;
