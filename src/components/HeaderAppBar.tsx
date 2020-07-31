import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link, useLocation} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import {Toolbar} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {toggleDrawerOpen} from "../store/drawer/actions";

export default function HeaderAppBar({classes}: any) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const tabs = (<Tabs
        value={pathname}
        aria-label="simple tabs example"
        centered
        indicatorColor="secondary">
        <Tab label="Home" value={"/"} component={Link} to={"/"}/>
        <Tab label="Learn" value={"/learn"} component={Link} to={"/learn?chapter=1"}/>
        <Tab label="About" value={"/about"} component={Link} to={"/about"}/>
        <Tab label="Contact" value={"/contact"} component={Link} to={"/contact"}/>
    </Tabs>);

    const handleDrawerToggle = () => {dispatch(toggleDrawerOpen())};

    return (
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Hidden smUp>
                <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    {tabs}
                </Toolbar>
            </Hidden>
            <Hidden xsDown>
                {tabs}
            </Hidden>
        </AppBar>
    );
}

