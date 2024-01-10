import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
	return (
		<Layout title="Craftz-Gym">
			<Container>
				<Title>
					Craftz-Gym <Badge>2022</Badge>
				</Title>
				<Paragraph>
					An online Gym platform to learn all the proper techniques for doing
					your routine right.
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://craftz-gym.vercel.app/">
							https://craftz-gym.vercel.app/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Nextjs, RapidAPI, Chakra-UI, and tailwindcss</span>
					</ListItem>
				</List>
				<WorkImage src="/images/gym-01.PNG" alt="1"></WorkImage>
				<WorkImage src="/images/gym-02.png" alt="2"></WorkImage>
			</Container>
		</Layout>
	);
};
export default Work;
