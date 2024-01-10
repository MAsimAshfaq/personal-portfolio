import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
	return (
		<Layout title="Chat-Firebase">
			<Container>
				<Title>
					Chat-Application <Badge>2022</Badge>
				</Title>
				<Paragraph>
					An online chat application where you can hangout with your friends and
					family. Sign up today and meet new people!
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://chat-firebase-theta.vercel.app/">
							https://chat-firebase.vercel.app/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Nextjs, Firebase, and tailwindcss</span>
					</ListItem>
				</List>
				<WorkImage src="/images/chat-screen.png" alt="1"></WorkImage>
				<WorkImage src="/images/register.png" alt="2"></WorkImage>
				<WorkImage src="/images/login.png" alt="3"></WorkImage>
			</Container>
		</Layout>
	);
};
export default Work;
