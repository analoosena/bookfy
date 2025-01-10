/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { BookcaseSection, ContainerBookcase, ContainerItem } from "./styles";
import { RootState } from "../../redux/store";

import { removeBook } from "../../redux/forms/reducer";

const BookCase = () => {
  const { books, itens } = useSelector((state: RootState) => state.formLibrary);
  const dispatch = useDispatch();

  const changeColor = (status: string) => {
    switch (status.toLocaleLowerCase()) {
      case "lido":
        return "#C5E9CA";
      case "não lido":
        return "#D7696A";
      case "lendo":
        return "#FFEBAB";
      default:
        return "#fff";
    }
  };
  const closeResult = (index: number) => {
    dispatch(removeBook(index));
  };

  return (
    <BookcaseSection>
      <h3>Minha Estante</h3>
      <ContainerBookcase>
        {books.map(
          (book, index) =>
            !itens.includes(index) && (
              <ContainerItem key={index}>
                <button onClick={() => closeResult(index)}>x</button>
                <p>{book.genderOption}</p>
                <h4>{book.nameBook}</h4>
                <h5>{book.autorBook}</h5>
                <p>{book.yearOption}</p>
                <p style={{ backgroundColor: changeColor(book.statusOption) }}>
                  {book.statusOption}
                </p>
              </ContainerItem>
            )
        )}
      </ContainerBookcase>
    </BookcaseSection>
  );
};

export default BookCase;
