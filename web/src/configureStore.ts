import { createStore, Store, Action } from "redux";

import { AppState, reducers } from "./store";

export default function configureStore(): Store<AppState> {
    return createStore<AppState, Action, any, any>(reducers);
}
