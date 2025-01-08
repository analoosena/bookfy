import { configureStore } from "@reduxjs/toolkit";
import formsLibrabySlice from "./forms/reducer";


const store = configureStore ({
  reducer:{
    formLibrary: formsLibrabySlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store