
interface initState {
    test: string
}

const initState: initState = {
    test: 'test'
}


export const searchReducer = (state = initState, action: any): initState => {
    switch (action.type) {
        default :
            return state
    }
}