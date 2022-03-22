import {LOADER_ON_OFF, rootAction, SAVE_INPUT_TEXT, SAVE_TYPE_STATUS} from "../action/type";

export interface initState {
    inputValue: string
    searchType: string
    loader: boolean
}

const initState: initState = {
    inputValue: '',
    searchType: '/',
    loader: false
}


export const searchReducer = (state = initState, action: rootAction): initState => {
    switch (action.type) {
        case SAVE_INPUT_TEXT :
            return {
                ...state,
                inputValue: action.payload
            }
        case SAVE_TYPE_STATUS :
            return {
                ...state,
                searchType: action.payload
            }
        case LOADER_ON_OFF :
            return {
                ...state,
                loader: action.payload
            }
        default :
            return state
    }
}