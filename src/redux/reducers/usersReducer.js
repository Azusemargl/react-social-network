import { usersAPI } from "../../api/api";

//Types
const SET_USERS = 'SET_USERS';
const SET_FOLLOW = 'SET_FOLLOW';
const SET_UNFOLLOW = 'SET_UNFOLLOW';

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
        case SET_FOLLOW:
            return {...state, followed: action.payload};
        case SET_UNFOLLOW:
            return {...state, followed: action.payload};
        default:
            return state
    }
}

// Action creators
const setUsers = payload => ({type: SET_USERS, payload});
const setFollow = payload => ({type: SET_FOLLOW, payload});
const setUnfollow = payload => ({type: SET_UNFOLLOW, payload});

// Thunks
export const usersRequest = (page, count) => async (dispatch) => {
    const response = await usersAPI.getUsers(page, count);

    try {
        dispatch(setUsers(response.data.items));
    } catch {
        return response.data.error;
    }
};

export const followAction = (userId) => async (dispatch) => {
    const response = await usersAPI.follow(userId);

    if (response.data.resultCode === 0) {
        dispatch(setFollow(true));
    }
};

export const unfollowAction = (userId) => async (dispatch) => {
    const response = await usersAPI.unfollow(userId);

    if (response.data.resultCode === 0) {
        dispatch(setUnfollow(false));
    }
};

export default usersReducer;
