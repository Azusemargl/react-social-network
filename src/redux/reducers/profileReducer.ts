import { InferAction, Thunks } from './../store'
import { profileAPI } from "../../api/profile-api"
import { Profile } from './../../types/profile-type';
import { ResultCode } from '../../api/api';

let initialState = {
    profile: null as Profile | null,
    status: '',
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
}

// Reducer body
const profileReducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'profile/ADD_POST':
            const newPost = {
                id: 2,
                avatar: '',
                name: 'John',
                nickname: 'Дикий кодер',
                text: action.payload.text,
                date: action.payload.date,
            }
            return {...state, posts: [...state.posts, newPost]}

        case 'profile/SET_USER_PROFILE':
            return {...state, profile: action.payload}

        case 'profile/ADD_STATUS':
            return {...state, status: action.status}

        default:
            return state;
    }
};

// Actions
export const actions = {
    setUserProfile: (payload: Profile) => ({type: 'profile/SET_USER_PROFILE', payload} as const),
    addPost: (text: string, date: string) => ({type: 'profile/ADD_POST', payload: {text, date}} as const),
    addStatus: (status: string) => ({type: 'profile/ADD_STATUS', status} as const)
}

// Thunks
export const userProfileRequeire = (userId: number): Thunk => async dispatch => {
    const res = await profileAPI.userProfile(userId)
    dispatch(actions.setUserProfile(res))
}
export const setPost = (text: string, date: string): Thunk => async dispatch => {
    dispatch(actions.addPost(text, date))
}
export const updateStatus = (status: string): Thunk => async dispatch => {
    try {
        const res = await profileAPI.status(status)
        if (res.resultCode === ResultCode.Success) {
            dispatch(actions.addStatus(status))
        }
    } catch(e) {
        console.log(e)
    }
}

export default profileReducer

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = Thunks<Action>
