import { profileAPI } from "../../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    fullName: null,
    posts: [
        {
            id: 1,
            avatar: '',
            name: 'John',
            nickname: 'Дикий кодер',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum suscipit blanditiis reiciendis cupiditate reprehenderit hic corporis, aperiam deleniti corrupti saepe quae autem, illo assumenda vitae! Sapiente, ipsam. Ratione, molestiae.t',
            date: '13:44 10-03-2021',
        },
    ],
};

// Reducer body
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2, avatar: '',
                name: 'John',
                nickname: 'Дикий кодер',
                text: action.payload.text,
                date: action.payload.date,
            };

            return {
                ...state, posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state, fullName: action.payload.fullName
            }
        default:
            return state;
    }
};

// Action creations
export const setUserProfile = payload => ({type: SET_USER_PROFILE, payload});
export const addPost = (text, date) => ({type: ADD_POST, payload: {text, date}});

// Thunks
export const userProfileRequeire = userId => async dispatch => {
    const response = await profileAPI.userProfile(userId);
    
    dispatch(setUserProfile(response.data));
};

export default profileReducer;
