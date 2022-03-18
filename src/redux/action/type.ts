import {saveTextAction, saveTypeStatusAction} from "./actionCreator"


export type rootAction =
    | saveTextAction
    | saveTypeStatusAction



export const SAVE_INPUT_TEXT = 'SAVE_INPUT_TEXT'
export const SAVE_TYPE_STATUS = 'SAVE_TYPE_STATUS'