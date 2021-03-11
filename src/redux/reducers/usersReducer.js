import { usersAPI } from "../../api/api";

//Types
const SET_USERS = 'SET_USERS';
const SET_USER_ACTION = 'SET_USER_ACTION';

// Initial data
const initialState = {
    init: false,
    users: []
}

// Dispatch
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, init: true, users: action.payload};
        case SET_USER_ACTION:
            return {...state, followed: action.payload};
        default:
            return state
    }
}

// Action creators
const setUsers = payload => ({type: SET_USERS, payload});
const setUserAction = payload => ({type: SET_USER_ACTION, payload});

// Thunks
export const usersRequest = (page, count) => async (dispatch) => {
    let data = await usersAPI.getUsers(page, count);

    dispatch(setUsers(data.items));
};

export const requestAction = (userId) => async (dispatch) => {
    let response = await usersAPI.getAction(userId);

    dispatch(setUserAction(!response.data.resultCode));
};

export default usersReducer;
