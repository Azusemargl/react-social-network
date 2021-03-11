import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

// Import reducers
import authReducer from "./reducers/authReducer";
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import {reducer as formReducer} from "redux-form";

// Set of reducers
const reducers = combineReducers({
    auth: authReducer,
    header: headerReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    form: formReducer,
});

// Store creating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
