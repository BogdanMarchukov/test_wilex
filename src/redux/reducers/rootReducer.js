import {combineReducers} from 'redux'
import {searchReducer} from "./searchReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    searchReducer,
    userReducer
})


