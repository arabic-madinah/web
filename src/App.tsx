import React from 'react';
import {Navigator} from "./Navigator";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import HeaderAppBar from "./components/HeaderAppBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from "./styles";
import configureStore from "./configureStore";
import ScrollToTop from "./components/ScrollToTop";

const store = configureStore();

function App() {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <div className={classes.root}>
                    <HeaderAppBar classes={classes} />
                    <SideDrawer classes={classes} />
                    <main className={classes.content} >
                        <Toolbar />
                        <Navigator classes={classes} />
                    </main>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
