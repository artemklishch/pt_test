import { createSlice } from "@reduxjs/toolkit";
import BooksData from "./booksData.json";
import { RootState } from ".";
import Book from "../models/book.model";

interface BooksState {
  booksData: Book[];
}

// Define the initial state using that type
const initialState: BooksState = {
  booksData: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooksData(state) {
      state.booksData = BooksData;
    },
  },
});

export const { setBooksData } = booksSlice.actions;
export const booksState = (state: RootState) => state.books;

export default booksSlice.reducer;
