import { authAPI } from "../../api/api";

//Types
const SET_LOGIN = 'SET_LOGIN';

// Initial data
const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

// Dispatch
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, ...action.payload};
        default:
            return state
    }
}

// Action creators
const setAuthData = (email, id, login, isAuth) => ({
    type: SET_LOGIN, payload: {email, id, login, isAuth}
});

// Thunks
export const authMe = () => async (dispatch) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
        const {email, id, login} = response.data.data;
        
        dispatch(setAuthData(email, id, login, true));
    }
};

export const authRequest = ({id, login, email, rememberMe}) => async (dispatch) => {
    const response = await authAPI.login(id, login, email, rememberMe);
    
    if (response.data.resultCode === 0) {
        dispatch(authMe());
    }
};

export default authReducer;
