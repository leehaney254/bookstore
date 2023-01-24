// Define constants
const ADDBOOk = 'ADD_BOOk';
const REMOVEBOOK = 'REMOVE_BOOK';
const initialState = [];

// Actions for adding and removing books
const addBook = (title, author, id) => (
  {
    type: ADDBOOk,
    title,
    author,
    id,
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
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case REMOVEBOOK:
      return state.map((book) => {
        if (book.id === action.id) {
          return undefined;
        }
        return book;
      });
    default:
      return state;
  }
};

export default BooksReducer;
export { removeBook, addBook };
