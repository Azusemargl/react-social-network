import { InferAction, Thunks } from './../store'
import { FormAction, stopSubmit } from "redux-form"
import { ResultCode } from "../../api/api"
import { authAPI } from '../../api/auth-api'

// Initial data
const initialState = {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false
}

// Dispatch
const authReducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case 'AUTH/SET_LOGIN':
            return {...state, ...action.payload}
            
        default:
            return state
    }
}

// Actions
export const actions = {
    setAuthData: (email: string | null, id: number | null, login: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET_LOGIN', payload: {email, id, login, isAuth}
    } as const)
}

// Thunks
export const authMe = (): Thunk => async (dispatch) => {
    const res = await authAPI.me()

    if (res.resultCode === ResultCode.Success) {
        const {email, id, login} = res.data
        dispatch(actions.setAuthData(email, id, login, true))
    }
}
export const authRequest = (email: string, password: string, rememberMe: boolean): Thunk => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)

    if (res.resultCode === ResultCode.Success) {
        dispatch(authMe())
    } else {
        const message = res.messages.length > 0 ? res.messages[0] : "Неверный логин или пароль"
        dispatch(stopSubmit("loginForm", {_error: message}))
    }
}
export const logoutRequest = (): Thunk => async (dispatch) => {
    const res = await authAPI.logout()
    
    if (res.resultCode === ResultCode.Success) {
        dispatch(actions.setAuthData(null, null, null, false))
    }
}

export default authReducer

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = Thunks<Action | FormAction>
