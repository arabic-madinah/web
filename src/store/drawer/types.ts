import { Action } from "redux";

export type DrawerState = boolean

export interface ToggleDrawerAction extends Action {
    type: "TOGGLE_DRAWER"
}

export type ToggleDrawerActions = ToggleDrawerAction;