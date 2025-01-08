/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import { BookcaseSection, ContainerBookcase, ContainerItem } from "./styles";
import { RootState } from "../../redux/store";

const BookCase = () => {
  const { books } = useSelector((state: RootState) => state.formLibrary);

  return (
    <BookcaseSection>
      <h3>Minha Estante</h3>
      <ContainerBookcase>
        {books.map((book, index) => (
          <ContainerItem key={index}>
            <p>{book.genderOption}</p>
            <h4>{book.nameBook}</h4>
            <h5>{book.autorBook}</h5>
            <p>{book.yearOption}</p>
            <p>{book.statusOption}</p>
          </ContainerItem>
        ))}
      </ContainerBookcase>
    </BookcaseSection>
  );
};

export default BookCase;
