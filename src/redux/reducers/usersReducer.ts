import { InferAction, Thunks } from './../store'
import { ResultCode } from '../../api/api'
import { usersAPI } from '../../api/users-api'
import { followUnfollowAction } from '../../utils/users.helper'
import { User } from '../../types/types'

// Initial data
const initialState = {
    init: false,
    totalCount: 0,
    users: [] as Array<User>,
    disabled: [] as Array<number>
}

// Reducer body
const usersReducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'USERS/SET_USERS':
            return {...state, init: true, users: action.users}
        case 'USERS/SET_FOLLOW':
            return {
                ...state,
                users: followUnfollowAction(state.users, action.id, {followed: true})
            }
        case 'USERS/SET_UNFOLLOW':
            return {
                ...state,
                users: followUnfollowAction(state.users, action.id, {followed: false})
            }
        case 'USERS/SET_DISABLE':
            return {
                ...state,
                disabled: action.isDisable
                    ? [...state.disabled, action.id]
                    : state.disabled.filter(id => id != action.id)
            }
        case 'USERS/SET_TOTAL_COUNT':
            return {...state, totalCount: action.count}

        default:
            return state
    }
}

// Actions
export const actions = {
    setUsers: (users: Array<User>) => ({type: 'USERS/SET_USERS', users} as const),
    setDisable: (id: number, isDisable: boolean) => ({type: 'USERS/SET_DISABLE', id, isDisable} as const),
    setFollow: (id: number) => ({type: 'USERS/SET_FOLLOW', id} as const),
    setUnfollow: (id: number) => ({type: 'USERS/SET_UNFOLLOW', id} as const),
    setTotalCount: (count: number) => ({type: 'USERS/SET_TOTAL_COUNT', count} as const)
}

// Thunks
export const usersRequest = (page: number, count: number): Thunk => async (dispatch) => {
    const res = await usersAPI.getUsers(page, count)

    dispatch(actions.setUsers(res.items));
    dispatch(actions.setTotalCount(res.totalCount))
}
export const followAction = (userId: number): Thunk => async (dispatch) => {
    dispatch(actions.setDisable(userId, true))

    const res = await usersAPI.follow(userId)

    if (res.resultCode === ResultCode.Success) {
        dispatch(actions.setFollow(userId))
    }

    dispatch(actions.setDisable(userId, false))
}
export const unfollowAction = (userId: number): Thunk => async (dispatch) => {
    dispatch(actions.setDisable(userId, true))

    const res = await usersAPI.unfollow(userId);

    if (res.resultCode === ResultCode.Success) {
        dispatch(actions.setUnfollow(userId))
    }

    dispatch(actions.setDisable(userId, false))
}

export default usersReducer

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = Thunks<Action>
