import * as actionCreator from "../actions/actionCreator";
const initialState = {
    auth: false,
    message: null
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionCreator.SIGNIN_SUCCESS:
            return{
                ...state,
                auth: true,
                message:null
            }
        case actionCreator.SIGNIN_FAILED:
            return{
                ...state,
                auth: false,
                message: action.message
            }
        case actionCreator.SIGNOUT_SUCCESS:
            return{
                ...state,
                auth: false,
                message: null
            }
        case actionCreator.SIGNOUT_FAILED:
            return{
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}

export default authReducer;