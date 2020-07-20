import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

export default function HeaderAppBar(props) {
    const { pathname } = useLocation();

    return (
        <div>
            <AppBar position="static">
                <Tabs
                    value={pathname}
                    aria-label="simple tabs example"
                    centered
                    indicatorColor="secondary">
                    <Tab label="Home" value={"/"} component={Link} to={"/"}/>
                    <Tab label="Learn" value={"/learn"} component={Link} to={"/learn?chapter=1"}/>
                    <Tab label="About" value={"/about"} component={Link} to={"/about"}/>
                    <Tab label="Contact" value={"/contact"} component={Link} to={"/contact"}/>
                </Tabs>
            </AppBar>
        </div>
    );
}

