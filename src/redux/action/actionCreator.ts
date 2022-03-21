import {
    ADD_USER_EMAIL,
    rootAction,
    SAVE_INPUT_TEXT,
    SAVE_TYPE_STATUS,
    ADD_USER_IP,
    ADD_USER_NICK,
    ADD_USER_PHONE
} from './type'
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

export interface addUserDataAction {
    type: typeof ADD_USER_EMAIL | typeof ADD_USER_PHONE | typeof ADD_USER_IP | typeof ADD_USER_NICK
    payload: string
}


export function addUserData(dispatch: (obj: rootAction)=> void, userData: string, dataType: string){
    if (dataType === 'email') {
        dispatch({type: ADD_USER_EMAIL, payload: userData})
    }
    if (dataType === 'phone') {
        dispatch({type: ADD_USER_PHONE, payload: userData})
    }
    if (dataType === 'ip') {
        dispatch({type: ADD_USER_IP, payload: userData})
    }
    if (dataType === 'nick') {
        dispatch({type: ADD_USER_NICK, payload: userData})
    }
}