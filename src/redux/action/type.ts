import {
    addUserDataAction,
    loadingAction,
    saveTextAction,
    saveTypeStatusAction,
    saveUserNameAction, saveUserSurnameAction
} from "./actionCreator"
import {rootReducer} from "../reducers/rootReducer";
import {initState} from "../reducers/searchReducer";


export type rootAction =
    | saveTextAction
    | saveTypeStatusAction
    | addUserDataAction
    | loadingAction
    | saveUserNameAction
    | saveUserSurnameAction


export type rootState =
    | initState


export const SAVE_INPUT_TEXT = 'SAVE_INPUT_TEXT'
export const SAVE_TYPE_STATUS = 'SAVE_TYPE_STATUS'
export const ADD_USER_EMAIL = 'ADD_USER_EMAIL'
export const ADD_USER_PHONE = 'ADD_USER_PHONE'
export const ADD_USER_IP = 'ADD_USER_IP'
export const ADD_USER_NICK = 'ADD_USER_NICK'
export const LOADER_ON_OFF = 'LOADER_ON_OFF'
export const SAVE_USER_NAME = 'SAVE_USER_NAME'
export const SAVE_USER_SURNAME = 'SAVE_USER_SURNAME'