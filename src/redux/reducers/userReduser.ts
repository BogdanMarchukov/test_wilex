import {rootAction} from "../action/type";

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
        default :
            return state
    }
}