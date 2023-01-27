/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  loading: false,
};

const getBooks = createAsyncThunk('app/getBooks', async () => {
  const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiOwyGbvAThq09f5x6Ai/books');
  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      id: key,
      title,
      category,
      author,
    };
  });
  return books;
});

const addBookAPI = createAsyncThunk('app/addBook', async (payload) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiOwyGbvAThq09f5x6Ai/books',
    payload).then((res) => console.log(res));
});

const deleteBookAPI = createAsyncThunk('app/deleteBook', async (id) => {
  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tiOwyGbvAThq09f5x6Ai/books/';
  const postUrl = baseUrl + id;
  axios.delete(postUrl)
    .then((response) => console.log(response.data));
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetch.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default bookSlice;
export { getBooks, addBookAPI, deleteBookAPI };
