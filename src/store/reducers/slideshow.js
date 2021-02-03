import * as actionTypes from "../actions/actionTypes";
const initialState = {
  slideshow: {},
  message: null
};

const slideShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SLIDESHOW:
      return {
        ...state,
        slideshow: action.slideshow,
      };
    case actionTypes.UPDATE_SLIDESHOW_SUCCESS:
      return {
        ...state,
        message:action.message,
      };
    default:
      return state;
  }
};

export default slideShowReducer;
