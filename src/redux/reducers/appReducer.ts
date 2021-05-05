import { InferAction, Thunks } from './../store';
import { authMe } from './authReducer'

// Initial data
const initialState = {
   initialized: false
}

// Reducer body
export const appReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
     case 'app/INITIALIZATION':
        return {...state, initialized: true}
  
     default:
        return state
  }
}

// Action creators
export const actions = {
   initApp: () => ({type: 'app/INITIALIZATION'} as const)
}

// Thunks
export const requestApp = (): Thunk => async (dispatch) => {
   const promise = await dispatch(authMe())

   Promise.all([promise]).then(() => {
      dispatch(actions.initApp())
   })
}

export default appReducer

// Types
type InitialState = typeof initialState
type Action = InferAction<typeof actions>
type Thunk = Thunks<Action>
