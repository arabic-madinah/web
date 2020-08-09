import {createStyles, Theme} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const buttonStyle = (theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(1)
    }
});
export const buttonCorrectStyle = (theme: Theme) => createStyles({
    disabled: {
        background: green[500],
    },
    label: {
        color: "#fff !important"
    },
});
export const buttonIncorrectStyle = (theme: Theme) => createStyles({
    disabled: {
        background: red[600],
        color: "#fff"
    },
    label: {
        color: "#fff !important"
    },
})