// Define constants
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [];

// Actions for adding and removing books
const addBook = (book) => (
  {
    type: ADD_BOOK,
    payload: book,
  }
);

const removeBook = (id) => (
  {
    type: REMOVE_BOOK,
    id,
  }
);

// Create reducer
const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book !== action.payload)];
    default:
      return state;
  }
};

export default BooksReducer;
export { removeBook, addBook };
