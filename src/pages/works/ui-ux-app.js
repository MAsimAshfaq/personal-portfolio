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
					UI-UX Template <Badge>2023</Badge>
				</Title>
				<Paragraph>
					An appealing UI-UX template. Best fit for a blog.
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://sparkly-concha-a59a5a.netlify.app/">
                        https://sparkly-concha-a59a5a.netlify.app//{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>React, Styled-components</span>
					</ListItem>
				</List>
				<WorkImage src="/images/ui-ux-app-main.png" alt="1"></WorkImage>
				<WorkImage src="/images/ui-ux-app-secondary.png" alt="2"></WorkImage>
				<WorkImage src="/images/ui-ux-app-last.png" alt="2"></WorkImage>
			</Container>
		</Layout>
	);
};
export default Work;
