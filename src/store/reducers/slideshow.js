import * as actionTypes from "../actions/actionTypes";
const initialState = {
  slideshow: [],
  message: null,
  progress: 0,
  successUpload: null,
  loading:false
};

const slideShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SLIDESHOW:
      return {
        ...state,
        slideshow: action.slideshow,
      };
      case actionTypes.UPLOAD_SLIDESHOW:
        return {
          ...state,
          loading: true
        };
    case actionTypes.PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case actionTypes.ADD_SLIDESHOW_SUCCESS:
      return {
        ...state,
        successUpload: true,
        loading: false,
        message: action.message,
      };
    case actionTypes.ADD_SLIDESHOW_FAILED:
      return {
        ...state,
        successUpload: false,
        loading:  false,
        message: action.message,
      };
    case actionTypes.RESET:
      return {
        ...state,
        loading: false,
        successUpload: null,
        message: null,
        progress: 0,
      };
    default:
      return state;
  }
};

export default slideShowReducer;
