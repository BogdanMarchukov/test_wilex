import {combineReducers} from 'redux'
import {searchReducer} from "./searchReducer";
import {userReducer} from "./userReduser";

export const rootReducer = combineReducers({
    searchReducer,
    userReducer
})


