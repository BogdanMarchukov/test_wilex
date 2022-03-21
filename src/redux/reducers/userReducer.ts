import {rootAction, ADD_USER_PHONE, ADD_USER_NICK, ADD_USER_IP, ADD_USER_EMAIL} from "../action/type";

export interface initStateUserReducer {
    email: string | null
    nick: string | null
    phone: string | null
    ip: string | null
}

const initState: initStateUserReducer = {
    email: null,
    nick: null,
    phone: null,
    ip: null
}


export const userReducer = (state = initState, action: rootAction): initStateUserReducer => {
    switch (action.type) {
        case ADD_USER_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case ADD_USER_IP:
            return {
                ...state,
                ip: action.payload
            }
        case ADD_USER_NICK:
            return {
                ...state,
                nick: action.payload
            }
        case ADD_USER_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default :
            return state
    }
}