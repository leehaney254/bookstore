import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';
import bookReducer from './apis/api';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categoryReducer,
  },
},
applyMiddleware((thunk)));

export default store;
