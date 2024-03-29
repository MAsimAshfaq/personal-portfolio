import React from "react";
import NextLink from "next/link";
import {
  Link,
  Box,
  useColorModeValue,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "./logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle";

const LinkItem = ({ href, children, path }) => {
  const active = path === href;
  const inActiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inActiveColor}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#202023")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          {/* <LinkItem href="https://craftzfox-biolinks.netlify.app/">
            Bio-Links
          </LinkItem> */}
          {/*<LinkItem href="https://github.com/abdullah048/personal-portfolio">
            View Source
          </LinkItem>*/}
        </Stack>
        <Box flex={1} align="right" display={{ base: 'flex', md: 'flex' }}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                {/* <NextLink
                  href={`https://craftzfox-biolinks.netlify.app/`}
                  passHref>
                  <MenuItem as={Link}>Bio-Links</MenuItem>
                </NextLink> */}
                <NextLink
                  href={`https://github.com/MAsimAshfaq/personal-portfolio`}
                  passHref>
                  <MenuItem as={Link}>View Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
