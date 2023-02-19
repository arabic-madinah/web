import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {chapters} from "../../chapters";
import List from "@material-ui/core/List";
import { DrawerListItem } from "./DrawerListItem";
import Toolbar from "@material-ui/core/Toolbar";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store";
import {toggleDrawerOpen} from "../../store/drawer/actions";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../styles";

interface Props extends WithStyles<typeof styles> {

}

export default function SideDrawer({classes}: Props) {
    const dispatch = useDispatch();

    const {open, currentSection, currentChapter} = useSelector((state: AppState) => ({
        open: state.drawerOpen,
        currentChapter: state.progress.currentChapter,
        currentSection: state.progress.currentSection,
    }));

    const drawerContainer = (
        <div className={classes.drawerContainer}>
            <List>
                {chapters.map((chapter, count) => (
                    <DrawerListItem key={count}
                                    chapter={chapter}
                                    classes={classes}
                                    completed={false}
                                    currentChapter={currentChapter}
                                    currentSection={currentSection}
                    />
                ))}
            </List>
        </div>
    );

    return (
        <>
            <Hidden xsDown>
                <Drawer
                    className={classes.drawer}
                    variant={"permanent"}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    {drawerContainer}
                </Drawer>
            </Hidden>
            <Hidden smUp>
                <Drawer
                className={classes.paper}
                variant={"temporary"}
                open={open}
                onClose={()=>{dispatch(toggleDrawerOpen())}}
                ModalProps={{
                    keepMounted: true
                }}
                >
                    <Toolbar />
                    {drawerContainer}
                </Drawer>
            </Hidden>
        </>
);
}
