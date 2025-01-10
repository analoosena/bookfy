import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { GlobalStyle } from "./style";
import Corrousel from "./components/corrousel";
import Form from "./components/form";
import BookCase from "./components/bookcase";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Corrousel />
        <Routes>
          {" "}
          {/*Gerenciar qual rota será exibida com base no caminho atual (URL). */}
          <Route
            path="/novo-livro"
            element={
              <>
                <Form />
                <BookCase />
              </>
            }
          />
          <Route path="/minha-estante" element={<BookCase />} />{" "}
          {/* Define uma rota específica, vinculando um caminho de URL a um componente. */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
