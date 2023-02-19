import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";
import { List, ListItem, Paper } from "@material-ui/core";


const tasksCompleted: string[] = [
    "Side Bar / Side Drawer with navigation to each lesson",
    "Make Side Drawer responsive for mobile"
]

const tasksDoing: string[] = [
    "Progress of current amount of lessons completed",
    "Implementing all the lessons from Madinah book 1",
]

const tasksNotCompleted: string[] = [
    "Interactive program of learning vocabulary per lesson",
    "Interactive program for pop-quizzing grammar corresponding to a lesson",
    "Implementing all the lessons from Madinah book 2",
    "Implementing all the lessons from Madinah book 3",
    "Add system for switching to different languages to learn from",
    "...Future feature requests"
];

export default function About(){
    return (
        <Container maxWidth={"md"}>
            <Grid
                container
                xl={8}
                direction="column"
                alignItems="flex-start"
            >
                <h1>About My-Arabic.com</h1>
                <div>
                    <p>
                        The Qur'an, the Word Allah has brought forth as an eternal miracle.
                    Allah, may he be exalted, chose the Arabic language as the vessel to reveal this light
                    and guidance upon humanity. Allay, may he be exalted, says (interpretation):
                    </p>
                    <p style={{fontStyle: "italic"}}>
                        "And indeed We have put forth for men, in this Qur'an every kind of similtude in order
                        that they may remember. An Arabic Qur'an, without any crookedness (therein) in order
                        that they may avoid all evil which Allah has ordered them to avoid, fear Him and keep
                        their duty to Him"
                        <span> [al-Zumar 39:27-28]</span>
                    </p>
                    <p>
                        The one who teaches Arabic is the direct cause of the spread of Islamic knowledge and 
                        education of people because understanding Islam is based on the understanding of the Arabic
                        language. So whoever helps the people to understand it has helped them to understand Islam
                        and has become a means of spreading goodness among people.
                    </p>
                    
                </div>
                <h2>This site is currently under development!</h2>
                <div>
                    <p>
                        We are currently working on the following task:
                    </p>
                    <List>
                        {
                            tasksDoing.map((task: string) => 
                            <ListItem style={{color: "blue"}}>{task}</ListItem>)
                        }
                    </List>
                    <p>
                        The followings features are to be developed next:
                    </p>
                </div>
                <Paper elevation={3} >
                    <List style={{margin: "auto", fontStyle: "italic"}}>
                        {
                            tasksCompleted.map((task: string) => <ListItem style={{color: "red", textDecoration: "line-through"}}>{task}</ListItem>)
                        }
                        {
                            tasksDoing.map((task: string) => <ListItem style={{color: "blue"}}>{task}</ListItem>)
                        }
                        {
                            tasksNotCompleted.map((task: string) => <ListItem>{task}</ListItem>)
                        }
                    </List>
                </Paper>
                
                    
            </Grid>
        </Container>

    )
}
