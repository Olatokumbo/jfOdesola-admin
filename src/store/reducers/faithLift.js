import * as actionTypes from "../actions/actionTypes";
const initialState = {
  faithLift: {},
  message: null
};

const faithLiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FAITHLIFT:
      return {
        ...state,
        faithLift: action.faithLift,
      };
    case actionTypes.UPDATE_FAITHLIFT_SUCCESS:
      return {
        ...state,
        message:action.message,
      };
    default:
      return state;
  }
};

export default faithLiftReducer;
