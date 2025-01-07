import Header from "./components/header";
import { Container, GlobalStyle } from "./style";
import Corrousel from "./components/corrousel"
import Form from "./components/form";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header />
      <Container>
        <Corrousel/>
        <Form/>
      </Container>
    </>
  );
}

export default App;
