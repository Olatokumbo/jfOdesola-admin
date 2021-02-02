import * as actionTypes from "../actions/actionTypes";
const initialState = {
  about: {},
  message: null
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ABOUT:
      return {
        ...state,
        about: action.about,
      };
    case actionTypes.UPDATE_ABOUT_SUCCESS:
      return {
        ...state,
        message:action.message,
      };
    default:
      return state;
  }
};

export default aboutReducer;
