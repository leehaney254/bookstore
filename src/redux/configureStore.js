import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories';
import BooksReducer from './books/books';
import bookSlice from './apis/api';

const store = configureStore({
  reducer: {
    BooksReducer,
    categoryReducer,
    books: bookSlice.reducer,
  },
});

export default store;
