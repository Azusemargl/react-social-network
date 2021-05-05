import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
   appReducer,
   authReducer,
   headerReducer,
   profileReducer,
   dialogsReducer,
   usersReducer
} from './reducers'

export const rootReducer = combineReducers({
   app: appReducer,
   auth: authReducer,
   header: headerReducer,
   profilePage: profileReducer,
   dialogs: dialogsReducer,
   usersPage: usersReducer,
   form: formReducer,
})