import React from "react";
import {ButtonGroup, Paper, WithStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ArMd} from "./ArabicText";
import Grid from "@material-ui/core/Grid";
import {styles} from "../styles";


interface QuizComponentProps extends WithStyles<typeof styles>{
    title: string,
    task: string,
    subject: string,
    answers: string[],
    correct: string
}


export default function QuizComponent(props: QuizComponentProps) {
    const {title, task, subject, answers, correct, classes} = props;

    return (
        <>
            <h2>{title}</h2>
            <h4>{task}</h4>
            <Grid
                container
                justify={"center"}
                alignItems={"center"}
            >
                <Paper elevation={3} className={`${classes.paper} ${classes.bgBlue} ${classes.white} ${classes.bold} ${classes.pxy}`}>
                    <div>
                        <ArMd>{subject}</ArMd>
                    </div>
                </Paper>
            </Grid>

            <ButtonGroup
                size="large"
                color="primary"
                orientation="vertical"
                aria-label="vertical large outlined primary button group">
                {answers.map((answer: string, index) => <Button key={index}>{answer}</Button>)}
            </ButtonGroup>
        </>
    );
}



type Answers = {};

interface QuizProps {

}

function Quiz(props: QuizProps) {
    return (
        <>
        </>
    )
}