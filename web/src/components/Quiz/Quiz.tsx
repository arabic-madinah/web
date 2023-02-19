import React from "react";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import {Answer, Question, QuizQuestion} from "./QuizQuestion";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

interface QuizProps extends WithStyles<typeof styles>{
    title: string
    questions: Question[]
}

export default function Quiz(props: QuizProps) {
    const { title, questions, classes } = props;
    const [progress, setProgress] = React.useState<number>(0);
    const [currentQuestionIndex, setQuestionIndex] = React.useState<number>(0);
    const [submittedAnswers, setAnswers] = React.useState<{[key: number]: Answer}>({});
    const question: Question | undefined = questions[currentQuestionIndex];

    let correctCount = 0;
    let incorrectCount = 0;
    Object.keys(submittedAnswers).forEach((key: string) => {
        if (submittedAnswers[parseInt(key)].correct) {
            correctCount += 1;
        } else {
            incorrectCount += 1;
        }
    });

    const calculateProgress = (questionId: number, answer: Answer) => {
        setProgress(progress + 1/questions.length*100)
        setAnswers({...submittedAnswers, [questionId]: answer});
    }

    const proceedNextQuestion = () => {
        const newQuestionIndex: number = questions[currentQuestionIndex + 1 ] ? currentQuestionIndex + 1 : currentQuestionIndex;
        setQuestionIndex(newQuestionIndex);
    }

    return (
        <>
            <h2>{title}</h2>
            <div>
                <div style={{float: "right"}}>
                <span style={{color: "green", marginRight: "5px"}}>
                    <CheckCircleIcon fontSize={"small"} /> { correctCount }
                </span>
                    <span style={{color: "red", marginRight: "5px"}}>
                    <CancelIcon fontSize={"small"} /> { incorrectCount }
                </span>
                </div>
            </div>

            <div style={{color: "blue", fontWeight: "bold"}}>
                <div style={{float: "left"}}>Progress {progress.toFixed(0)}%</div>
                <div style={{float: "right"}}>

                    <span>question {currentQuestionIndex + 1} / {questions.length}</span>
                </div>
            </div>

            <LinearProgress variant="determinate" value={progress} />

            {
                question ?
                    <QuizQuestion
                        key={question.id}
                        id={question.id}
                        question={question.question}
                        isInitial={currentQuestionIndex === 0}
                        isFinal={currentQuestionIndex === questions.length - 1}
                        subject={question.subject}
                        answers={question.answers}
                        classes={classes}
                        message={submittedAnswers[question.id] ? (submittedAnswers[question.id].correct ? "correct" : "false") : undefined}
                        onAnswered={(questionId, answer)=>calculateProgress(questionId, answer)}
                        onNextQuestion={proceedNextQuestion}
                    />
                : null
            }

        </>
    )
}