import Header from "./components/header";
import { GlobalStyle } from "./style";
import Corrousel from "./components/corrousel";
import Form from "./components/form";
import BookCase from "./components/bookcase";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Corrousel />
      <Form />
      <BookCase/>
      
    </>
  );
}

export default App;
