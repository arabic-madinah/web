import {ActionCreator} from "redux";
import {ToggleDrawerAction} from "./types";

export const toggleDrawerOpen: ActionCreator<ToggleDrawerAction> = () => {
    return {
        type: "TOGGLE_DRAWER"
    };
}