import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiOwyGbvAThq09f5x6Ai/books';

const getBooks = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  },
);

const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  },
);

const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: id,
    });
  },
);

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    default:
      return state;
  }
};

export { getBooks, addBook, removeBook };
export default bookReducer;
