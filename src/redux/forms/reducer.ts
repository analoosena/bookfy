import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Book = {
  nameBook: string;
  autorBook: string;
  genderOption: string;
  yearOption: string;
  statusOption: string;
};
type FormsLibrabyState ={
  books: Book[];
}
const initialState: FormsLibrabyState = {
  books:[]
}

const formsLibrabySlice = createSlice({
  name: "formsLibraby",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload)
    },
  },
});

export const { addBook } = formsLibrabySlice.actions;
export default formsLibrabySlice;
