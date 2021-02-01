import * as actionTypes from "../actions/actionTypes";
const initialState = {
    auth: false,
    message: null
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.SIGNIN_SUCCESS:
            return{
                ...state,
                auth: true,
                message:null
            }
        case actionTypes.SIGNIN_FAILED:
            return{
                ...state,
                auth: false,
                message: action.message
            }
        case actionTypes.SIGNOUT_SUCCESS:
            return{
                ...state,
                auth: false,
                message: null
            }
        case actionTypes.SIGNOUT_FAILED:
            return{
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}

export default authReducer;