// Define constants
const CHECKSTATUS = 'CHECK_STATUS';
const initialState = [];

// Define actions
const checkStatus = () => (
  {
    type: CHECKSTATUS,
  }
);

// Define reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
export { checkStatus };
