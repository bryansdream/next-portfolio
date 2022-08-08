import "../styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
