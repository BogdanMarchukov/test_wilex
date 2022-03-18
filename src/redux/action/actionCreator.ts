import {rootAction, SAVE_INPUT_TEXT, SAVE_TYPE_STATUS} from './type'
import validator from 'validator';

export interface saveTextAction {
    type: typeof SAVE_INPUT_TEXT,
    payload: string
}


export function saveTextToStore(dispatch: (object: rootAction)=> void, value: string) {
    validatorType(dispatch, value)
    dispatch({type: SAVE_INPUT_TEXT, payload: value})
}

export function validatorType(dispatch: (obj: rootAction)=> void, checkText: string) {

    if (validator.isEmail(checkText)) {
        saveTypeStatus(dispatch, 'email')
    } else {
        if (validator.isMobilePhone(checkText)) {
            saveTypeStatus(dispatch, 'phone')
        }
        else {
            if (validator.isIP(checkText, 4)) {
                saveTypeStatus(dispatch, 'ip')
            }
            else {
                if (checkText[0] === '@') {
                    saveTypeStatus(dispatch, 'nick')
                }
                else {
                    saveTypeStatus(dispatch, 'error')
                }
            }
        }
    }







}

export interface saveTypeStatusAction {
    type: typeof SAVE_TYPE_STATUS
    payload: string
}

export function saveTypeStatus(dispatch: (obj: rootAction)=> void, payload: string) {
    dispatch({type: SAVE_TYPE_STATUS, payload})
}