import * as actionTypes from "../actions/actionTypes";
const initialState ={
    socials: {}
};

const socialsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_SOCIALS:
        return {
          ...state,
          socials: action.socials,
        };
      case actionTypes.UPDATE_SOCIALS_SUCCESS:
        return {
          ...state,
          message:action.message,
        };
      default:
        return state;
    }
  };
  
  export default socialsReducer;