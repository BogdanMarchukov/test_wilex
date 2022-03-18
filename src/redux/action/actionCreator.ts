import {SAVE_INPUT_TEXT} from './type'

export interface saveTextAction {
    type: typeof SAVE_INPUT_TEXT,
    payload: string
}


export function saveTextToStore(dispatch: (object: saveTextAction)=> void, value: string) {
    dispatch({type: SAVE_INPUT_TEXT, payload: value})
}