import Layout from "../../components/layout/main";
import "../../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../utils/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}></Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
