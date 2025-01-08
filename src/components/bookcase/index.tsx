import { BookcaseSection, ContainerBookcase, ContainerItem } from "./styles";

const BookCase = () => {
  return (
    <BookcaseSection>
      <h3>Minha Estante</h3>
      <ContainerBookcase>
        <ContainerItem>
          <p>Gênero</p>
          <h4>Título</h4>
          <h5>Autor</h5>
          <p>Status</p>
        </ContainerItem>
        <ContainerItem>
          <p>Gênero</p>
          <h4>Título</h4>
          <h5>Autor</h5>
          <p>Status</p>
        </ContainerItem>
        <ContainerItem>
          <p>Gênero</p>
          <h4>Título</h4>
          <h5>Autor</h5>
          <p>Status</p>
        </ContainerItem>
        <ContainerItem>
          <p>Gênero</p>
          <h4>Título</h4>
          <h5>Autor</h5>
          <p>Status</p>
        </ContainerItem>
      </ContainerBookcase>
    </BookcaseSection>
  );
};

export default BookCase;
