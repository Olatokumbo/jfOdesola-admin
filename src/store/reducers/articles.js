import * as actionTypes from "../actions/actionTypes";
const initialState = {
  articles: [],
  successUpload: null,
  loading: false,
  message: null,
};

const articleReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    case actionTypes.FETCH_ARTICLE_INFO:
      return {
        ...state,
        articleInfo: action.articleInfo,
      };
    case actionTypes.UPLOAD_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        successUpload: true,
        loading: false,
        message: action.message,
      };
    case actionTypes.ADD_ARTICLE_FAILED:
      return {
        ...state,
        successUpload: false,
        loading: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default articleReducers;
