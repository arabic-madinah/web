import {Reducer, combineReducers} from "redux";
import ProgressReducer from "./progress/reducer";
import {ProgressState} from "./progress/types";

export interface AppState {
    progress: ProgressState
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
    progress: ProgressReducer
});
