import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {chapters} from "../../chapters/types";
import List from "@material-ui/core/List";
import { DrawerListItem } from "./DrawerListItem";
import Toolbar from "@material-ui/core/Toolbar";

export default function SideDrawer({classes}: any) {

    return (
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
                    <DrawerListItem key={count} chapter={chapter} classes={classes} />
                ))}
            </List>
            </div>
        </Drawer>
    );
}
