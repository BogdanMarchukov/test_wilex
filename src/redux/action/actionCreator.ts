import {
    ADD_USER_EMAIL,
    ADD_USER_IP,
    ADD_USER_NICK,
    ADD_USER_PHONE,
    LOADER_ON_OFF,
    rootAction,
    SAVE_INPUT_TEXT,
    SAVE_TYPE_STATUS
} from './type'
import validator from 'validator';

export interface saveTextAction {
    type: typeof SAVE_INPUT_TEXT,
    payload: string
}


export function saveTextToStore(dispatch: (object: rootAction)=> void, value: string) {
    validatorType(dispatch, value)
    dispatch({type: SAVE_INPUT_TEXT, payload: value})
    setTimeout(()=> {
        loading(dispatch, true)
    }, 200)

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
                if (checkText[0] === '@' && checkText.length > 2) {
                    saveTypeStatus(dispatch, 'nick')
                } else {
                    if (checkText === '') {
                        saveTypeStatus(dispatch, '/')
                    }
                    else {
                        saveTypeStatus(dispatch, 'error')
                    }
                }

            }
        }
    }
    setTimeout(()=> {
        loading(dispatch, false)
    }, 500)

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

export interface loadingAction {
    type: typeof LOADER_ON_OFF,
    payload: boolean
}

export function loading(dispatch: (obj: rootAction)=> void, status: boolean) {
    dispatch({type: LOADER_ON_OFF, payload: status})
}