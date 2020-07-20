import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";


export default function About(){
    return (
        <Container maxWidth={"md"}>
            <Grid
                container
                xl={8}
                direction="column"
                alignItems="flex-start"
            >
                <h1>About</h1>
                <div>
                    <p>
                        <b>This site is currently under development.</b>
                    </p>

                    <p>
                        We are currently working on the following task:
                    </p>

                    <span style={{color: "blue"}}>Side Bar / Side Drawer with navigation to each lesson</span>

                    <p>
                        The followings features are to be developed next:
                    </p>
                </div>

                <ul style={{margin: "auto"}}>
                    <li style={{color: "blue"}}>
                        Side Bar / Side Drawer with navigation to each lesson
                    </li>
                    <li>
                        Progress of current amount of lessons completed
                    </li>
                    <li>
                        Interactive program of learning vocabulary per lesson
                    </li>
                    <li>
                        Interactive program for pop-quizzing grammar corresponding to a lesson
                    </li>
                    <li>
                        Implementing all the lessons from Madinah book 1
                    </li>
                    <li>
                        Implementing all the lessons from Madinah book 2
                    </li>
                    <li>
                        Implementing all the lessons from Madinah book 3
                    </li>
                    <li>
                        Add system for switching to different languages to learn from
                    </li>
                    <li>
                        ...Future feature requests
                    </li>
                </ul>
            </Grid>
        </Container>

    )
}
