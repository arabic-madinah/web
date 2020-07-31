import {Reducer, combineReducers} from "redux";
import ProgressReducer from "./progress/reducer";
import DrawerReducer from "./drawer/reducer";
import {ProgressState} from "./progress/types";
import {DrawerState} from "./drawer/types";

export interface AppState {
    progress: ProgressState,
    drawerOpen: DrawerState
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
    progress: ProgressReducer,
    drawerOpen: DrawerReducer
});
