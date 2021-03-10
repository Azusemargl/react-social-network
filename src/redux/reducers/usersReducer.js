import { usersAPI } from "../../api/api";

const SET_USERS = 'SET_USERS';

// Initial data
const initialState = {
    users: []
}

// Dispatch
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload};
        default:
            return state
    }
}

// Action creators
const setUsers = (payload) => ({type: SET_USERS, payload});

// Thunks
export const usersRequest = (page, count) => async (dispatch) => {
    let data = await usersAPI.getUsers(page, count);

    dispatch(setUsers(data.items));
};
