
interface initState {
    inputValue: string | null
}

const initState: initState = {
    inputValue: null
}


export const searchReducer = (state = initState, action: any): initState => {
    switch (action.type) {
        default :
            return state
    }
}