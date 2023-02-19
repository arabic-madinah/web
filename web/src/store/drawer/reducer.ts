import {DrawerState} from "./types";
import { Reducer } from "redux";

export const initialState: DrawerState = false;

const reducer: Reducer<DrawerState> = (open: DrawerState=initialState, action) => {
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return !open;
        default:
            return open;
    }
}

export default reducer;