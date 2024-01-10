import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "../../../components/layout/article";
import { Title, WorkImage, Meta } from "../../../components/work";
import Paragraph from "../../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
	return (
		<Layout title="Ecommerce Website">
			<Container>
				<Title>
					Ecommerce website <Badge>2021</Badge>
				</Title>
				<Paragraph>
					An ecommerce site selling every item you need in your daily life.
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://ecommerce-store-mern-stack-048.herokuapp.com/">
							https://ecommerce-store-mern-stack-048.herokuapp.com/{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>MERN, cloudinary</span>
					</ListItem>
				</List>
				<WorkImage src="/images/profile-page.jpeg" alt="1"></WorkImage>
				<WorkImage src="/images/popup-menu.jpeg" alt="2"></WorkImage>
				<WorkImage src="/images/orders-page.jpeg" alt="2"></WorkImage>
			</Container>
		</Layout>
	);
};
export default Work;
