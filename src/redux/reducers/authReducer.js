import { authAPI } from "../../api/api";

//Types
const SET_AUTH = 'SET_AUTH';

// Initial data
const initialState = {
    email: null,
    password: null
}

// Dispatch
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.payload};
        default:
            return state
    }
}

// Action creators
const setRegistration = (email, password) => ({type: SET_AUTH, payload: {email, password}});

// Thunks
export const authRequest = ({email, password}) => async (dispatch) => {
    let data = await authAPI.auth(email, password);
    
    dispatch(setRegistration(data));
};

export default authReducer;
