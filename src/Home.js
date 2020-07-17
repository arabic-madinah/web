import Grid from "@material-ui/core/Grid";
import React from "react";
import {ArSm} from "./components/ArabicText";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";


export default function Home(){
    return (
        <Container maxWidth={"md"}>
            <Grid
                container
                xl={8}
                direction="column"
                alignItems="center"
            >
                <Alert severity="warning">Note - this site is still under development!
                    Want to see what we're currently working on?</Alert>
                <h1>Learn Arabic on this Site!</h1>
                <div>
                    <ArSm><h3>السلام عليكم</h3></ArSm>
                    <p>
                        <i>My-Arabic.com</i> aims at providing a full in-depth Arabic grammar and vocabulary course.
                        It is inspired by Br. Asif's lessons on YouTube, which are based on the three Madinah Books by
                        dr. V. Abdur Raheem.

                        This site ensues an effort in the hopes of summarizing the aforementioned works,
                        and effectively compile them into a single user-friendly and interactive web-course!
                    </p>
                </div>
            </Grid>
        </Container>

    )
}
