import {saveTextAction, saveTypeStatusAction} from "./actionCreator"
import {rootReducer} from "../reducers/rootReducer";
import {initState} from "../reducers/searchReducer";


export type rootAction =
    | saveTextAction
    | saveTypeStatusAction

export type rootState =
    | initState


export const SAVE_INPUT_TEXT = 'SAVE_INPUT_TEXT'
export const SAVE_TYPE_STATUS = 'SAVE_TYPE_STATUS'