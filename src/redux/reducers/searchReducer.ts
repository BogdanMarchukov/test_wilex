import {rootAction, SAVE_INPUT_TEXT, SAVE_TYPE_STATUS} from "../action/type";

export interface initState {
    inputValue: string | null
    searchType: string
}

const initState: initState = {
    inputValue: null,
    searchType: '/'
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
        default :
            return state
    }
}