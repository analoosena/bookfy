import { ContainerForm, FormsSection, Forms, CadastrarButton, LabelText } from "./style";

const Form = () => {
  return (
    <FormsSection>
      <h3>Cadastrar novo título</h3>
      <ContainerForm>
        <Forms action="">
          <LabelText>Nome:</LabelText>
          <input type="text"></input>
          <LabelText>Autor:</LabelText>
          <input type="text"></input>
          <div>
            <div>
              <label>Gênero:</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">Romance</option>
                <option value="">Fantasia</option>
                <option value="">Suspence</option>
                <option value="">Ficção Científica</option>
                <option value="">Biografia</option>
                <option value="">Autoajuda</option>
              </select>
            </div>
            <div>
              <label>Status:</label>
              <select name="" id="">
                <option value="">Lido</option>
                <option value="">Lendo</option>
                <option value="">Não Lido</option>
              </select>
            </div>
            <div>
              <label>Ano de publicação:</label>
              <select name="" id="">
                <option value="">1995</option>
              </select>
            </div>
          </div>
        </Forms>
        <CadastrarButton>Cadastrar</CadastrarButton>
      </ContainerForm>
    </FormsSection>
  );
};
export default Form;
