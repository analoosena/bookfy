import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Book = {
  nameBook: string;
  autorBook: string;
  genderOption: string;
  yearOption: string;
  statusOption: string;
};
type FormsLibrabyState = {
  books: Book[],
  itens: number[],
};
const initialState: FormsLibrabyState = {
  books: [],
  itens:[],
};

const formsLibrabySlice = createSlice({
  name: "formsLibraby",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook(state,action: PayloadAction<number>){
      state.itens.push(action.payload)
    }
  },
});

export const { addBook, removeBook } = formsLibrabySlice.actions;
export default formsLibrabySlice;
