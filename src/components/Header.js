import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    centered
                    indicatorColor="primary">
                    <Tab label="Home" component={Link} to={"/"}/>
                    <Tab label="Learn" component={Link} to={"/learn/chapter1"}/>
                    <Tab label="About" component={Link} to={"/about"}/>
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
        </div>
    );
}

