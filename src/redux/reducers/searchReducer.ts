import {rootAction, SAVE_INPUT_TEXT} from "../action/type";

interface initState {
    inputValue: string | null
}

const initState: initState = {
    inputValue: null
}


export const searchReducer = (state = initState, action: rootAction): initState => {
    switch (action.type) {
        case SAVE_INPUT_TEXT :
            return {
                ...state,
                inputValue: action.payload
            }
        default :
            return state
    }
}