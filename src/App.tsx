import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Flex direction="column">
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}

export default App;
