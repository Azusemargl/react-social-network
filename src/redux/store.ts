import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux"
import thunk, { ThunkAction } from 'redux-thunk'
import { rootReducer } from './rootReducer'

// Store creating
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// Types
export type AppState = ReturnType<typeof rootReducer>
export type InferAction<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type Thunks<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>
