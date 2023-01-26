// Define constants
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = '';

// Define actions
const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);

const info = 'Under construction';
// Define reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return info;
    default:
      return state;
  }
};

export default categoryReducer;
export { checkStatus };
