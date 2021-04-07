import * as actionTypes from "../actions/actionTypes";
const initialState = {
  articles: [],
};

const articleReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };

    default:
      return state;
  }
};


export default articleReducers