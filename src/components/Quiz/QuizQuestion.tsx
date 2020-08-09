import {Paper, WithStyles} from "@material-ui/core";
import {styles} from "../../styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import {ArMd} from "../ArabicText";
import Button from "@material-ui/core/Button";
import {buttonCorrectStyle, buttonIncorrectStyle, buttonStyle} from "./styles";

export interface Answer {
    id: number;
    name: string;
    correct: boolean;
}

export interface Question {
    id: number,

    question: string,
    subject: string,
    answers: Answer[],
}

interface QuizQuestionProps extends WithStyles<typeof styles>, Question {
    isInitial: boolean,
    isFinal: boolean,
    message?: string,
    onAnswered: (questionId: number, answer: Answer) => void,
    onNextQuestion: () => void,
}

const useButtonCorrectStyles = makeStyles(buttonCorrectStyle);
const useButtonIncorrectStyles = makeStyles(buttonIncorrectStyle);
const useButtonStyles = makeStyles(buttonStyle);

export function QuizQuestion(props: QuizQuestionProps) {
    const [selected, setSelected] = React.useState<number | null>(null);
    const {id, question, isInitial, isFinal, subject, answers, onAnswered, onNextQuestion, message, classes} = props;
    const buttonCorrectClasses = useButtonCorrectStyles();
    const buttonIncorrectClasses = useButtonIncorrectStyles();
    const buttonClasses = useButtonStyles();

    const handleClick = (answer: Answer) => {
        setSelected(answer.id);
        onAnswered(id, answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion();
    }

    const classNames = (option: Answer): string | undefined => {
        if (!selected) {
            return undefined;
        }
        if (option.correct) {
            return clsx(buttonCorrectClasses.disabled, buttonCorrectClasses.label);
        }
        if (option.id === selected && !option.correct) {
            return clsx(buttonIncorrectClasses.disabled, buttonIncorrectClasses.label);
        }
        return undefined;
    }

    return (
        <>
            <h3>{question}</h3>
            <Grid
                container
                justify={"center"}
                alignItems={"center"}
            >
                <Paper elevation={3}
                       className={`${classes.paper} ${classes.bgBlue} ${classes.white} ${classes.bold} ${classes.pxy}`}>
                    <div>
                        <ArMd>{subject}</ArMd>
                    </div>
                </Paper>
            </Grid>
            <Grid container justify="center">
                <h4>{message}</h4>
            </Grid>
            {answers.map((option: Answer) =>
                <Button
                    className={clsx(buttonClasses.root, classNames(option))}
                    key={option.id}
                    color={"primary"}
                    variant={"outlined"}
                    onClick={() => handleClick(option)}
                    disabled={!!selected}
                >
                    {option.name}
                </Button>
            )}
            { selected ? <Button className={classes.mt} onClick={handleNextQuestion} color="primary" variant="contained">{isFinal ? "Complete" : "Next Question"}</Button> : null}

        </>
    );
}