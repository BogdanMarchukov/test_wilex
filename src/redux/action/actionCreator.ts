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
    }
    if (validator.isMobilePhone(checkText)) {
        saveTypeStatus(dispatch, 'phone')
    }

}

export interface saveTypeStatusAction {
    type: typeof SAVE_TYPE_STATUS
    payload: string
}

export function saveTypeStatus(dispatch: (obj: rootAction)=> void, payload: string) {
    dispatch({type: SAVE_TYPE_STATUS, payload})
}