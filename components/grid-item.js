import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Image from "next/image";
import NextLink from "next/link";

export const GridItems = ({ children, href, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox cursor="pointer">
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeholder="blur"
				loading="lazy"
			/>
			<LinkOverlay href={href} target="_blank">
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
);

export const WorkGrid = ({ children, id, title, thumbnail }) => (
	<Box w="100%" align="center">
		<NextLink href={`/works/${id}`}>
			<LinkBox cursor="pointer">
				<Image
					src={thumbnail}
					alt={title}
					className="grid-items-thumbnail"
					placeholder="blur"
				/>
				<LinkOverlay href={`/works/${id}`}>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
);

export const GridItemsStyle = () => (
	<Global
		styles={`.grid-items-thumbnail {
            border-radius: 12px;
        }`}
	/>
);
