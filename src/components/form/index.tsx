/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  ContainerForm,
  FormsSection,
  Forms,
  CadastrarButton,
  LabelText,
} from "./style";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/forms/reducer";

const Form = () => {
  const [newName, setNewName] = useState("");
  const [newAutor, setNewAutor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const dispatch = useDispatch();

  const arrayAno = [];
  for (let i = 2025; i >= 1900; i--) {
    arrayAno.push(i);
  }

  const handleNewBook = () => {
    if (newName.length > 0) {
      dispatch(
        addBook({
          nameBook: newName,
          autorBook: newAutor,
          genderOption: selectedGender,
          yearOption: selectedYear,
          statusOption: selectedStatus,
        })
      );
      setNewName("");
      setNewAutor("");
      setSelectedGender("");
      setSelectedStatus("");
      setSelectedYear("");
      console.log(
        `nome: ${newName}; autor ${newAutor} genero: ${selectedGender} ano: ${selectedYear} status: ${selectedStatus}`
      );
    }
  };

  return (
    <FormsSection>
      <h3>Cadastrar novo título</h3>
      <ContainerForm>
        <Forms action="">
          <LabelText>Nome:</LabelText>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          ></input>
          <LabelText>Autor:</LabelText>
          <input
            value={newAutor}
            onChange={(e) => setNewAutor(e.target.value)}
            type="text"
          ></input>
          <div>
            <div>
              <label>Gênero:</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                <option value=""></option>
                <option value="Romance">Romance</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Suspence">Suspence</option>
                <option value="Science">Ficção Científica</option>
                <option value="Biografia">Biografia</option>
                <option value="Autoajuda">Autoajuda</option>
              </select>
            </div>
            <div>
              <label>Status:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value=""></option>
                <option value="Lido">Lido</option>
                <option value="Lendo">Lendo</option>
                <option value="Não Lido">Não Lido</option>
              </select>
            </div>
            <div>
              <label>Ano de publicação:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value=""></option>
                {arrayAno.map((ano) => (
                  <option key={ano} value={ano}>
                    {ano}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Forms>
        <CadastrarButton onClick={handleNewBook}>Cadastrar</CadastrarButton>
      </ContainerForm>
    </FormsSection>
  );
};
export default Form;
