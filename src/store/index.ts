import { configureStore, Store } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

export const store: Store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
