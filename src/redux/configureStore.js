import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories';
import BooksReducer from './books/books';

const store = configureStore({
  reducer: {
    BooksReducer,
    categoryReducer,
  },
});

export default store;
