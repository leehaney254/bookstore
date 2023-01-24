// Define constants
const ADDBOOk = 'ADD_BOOk';
const REMOVEBOOK = 'REMOVE_BOOK';
const initialState = [];

// Actions for adding and removing books
const addBook = (book) => (
  {
    type: ADDBOOk,
    payload: book,
  }
);

const removeBook = (id) => (
  {
    type: REMOVEBOOK,
    id,
  }
);

// Create reducer
const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOk:
      return [
        ...state,
        action.payload,
      ];
    case REMOVEBOOK:
      return [...state.filter((book) => book !== action.payload)];
    default:
      return state;
  }
};

export default BooksReducer;
export { removeBook, addBook };
