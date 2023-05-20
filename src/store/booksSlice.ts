import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BooksData from "./booksData.json";
import { RootState } from ".";
import Book from "../models/book.model";
import { MAX_ITEMS_NUMBER } from "../utils/constants";

export interface BooksState {
  booksData: Book[];
  renderedItems: Book[];
}

// Define the initial state using that type
const initialState: BooksState = {
  booksData: [],
  renderedItems: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooksData(state) {
      const data = BooksData.map((item, i) => ({ ...item, index: i + 1 }));
      state.booksData = data;
      state.renderedItems = data.slice(0, MAX_ITEMS_NUMBER);
    },
    setBooksForRendering(state, action: PayloadAction<Book[]>) {
      state.renderedItems = action.payload;
    },
  },
});

export const { setBooksData, setBooksForRendering } = booksSlice.actions;
export const booksState = (state: RootState) => state.books;

export default booksSlice.reducer;
