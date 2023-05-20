import { store } from "../store";
import {
  MAX_ITEMS_NUMBER,
  LIMIT_SCROLLING_ITEMS,
  ITEM_HEIGHT,
} from "./constants";
import { setBooksForRendering } from "../store/booksSlice";
import Book from "../models/book.model";

export const renderNewItems = (
  topPos: number,
  listElem: HTMLUListElement,
  booksData: Book[]
): void => {
  const topOfset = topPos / ITEM_HEIGHT;
  const startPartToSlice = Math.floor(topOfset / LIMIT_SCROLLING_ITEMS);
  const newItemsForRendering: Book[] = booksData.slice(
    startPartToSlice * LIMIT_SCROLLING_ITEMS,
    startPartToSlice * LIMIT_SCROLLING_ITEMS + MAX_ITEMS_NUMBER
  );
  store.dispatch(setBooksForRendering(newItemsForRendering));
  listElem.style.top =
    startPartToSlice * LIMIT_SCROLLING_ITEMS * ITEM_HEIGHT + "px";
};
