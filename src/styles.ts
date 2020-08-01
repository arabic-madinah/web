import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            }
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        drawerListItem: {
            fontSize: "0.9rem",
            lineHeight: "1.3",
            color: "gray",
            marginBottom: "2px"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        highlighted: {
            fontWeight: "bold",
            color: "red"
        },
        paper: {
            margin: "40px auto",
            padding: "10px 10px"
        },

        list: {
            marginTop: "16px",
            marginVertical: "16px"
        },
        mr: {
            marginRight: "5em"
        },
        mb: {
            marginBottom: "5em"
        },
        blue: {
            color: "blue"
        },
        red: {
            color: "red"
        },
        toolbar: theme.mixins.toolbar,
    }),
);

export default useStyles;
