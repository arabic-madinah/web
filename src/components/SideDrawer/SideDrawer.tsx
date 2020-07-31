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

export default function SideDrawer({classes}: any) {
    const open = useSelector((state: AppState) => state.drawerOpen);
    const dispatch = useDispatch();

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
                    <div className={classes.drawerContainer}>
                        <List>
                            {chapters.map((chapter, count) => (
                                <DrawerListItem key={count} chapter={chapter} classes={classes} completed={false}/>
                            ))}
                        </List>
                    </div>
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
                    <div className={classes.drawerContainer}>
                        <List>
                            {chapters.map((chapter, count) => (
                                <DrawerListItem key={count} chapter={chapter} classes={classes} completed={false}/>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>
        </>
);
}
