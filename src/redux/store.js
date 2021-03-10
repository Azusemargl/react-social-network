import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

// Import reducers
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";

// Set of reducers
const reducers = combineReducers({
    header: headerReducer,
    sidebar: sidebarReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
});

// Store creating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
