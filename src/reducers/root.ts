
interface RootState {
    open: boolean
}

const initialState: RootState = {
    open: false
}

type Action = {type: "OPEN", payload: boolean}

export const rootReducer = (state: RootState=initialState, action: Action) => {
    switch (action.type) {
        case "OPEN":
            return {...state, open: true};
        default:
            return state;
    }
};
