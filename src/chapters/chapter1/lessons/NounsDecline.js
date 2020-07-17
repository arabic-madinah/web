import React from "react";
import ChapterPage from "../../../components/ChapterPage";
import Paper from "@material-ui/core/Paper";
import {ArMd, ArSm} from "../../../components/ArabicText";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    highlighted: {
        fontWeight: "bold",
        color: "red"
    },

    paper: {
        width: "50%",
        margin: "20px auto",
        padding: "10px 10px"
    },

    list: {
        marginTop: "16px",
        marginVertical: "16px"
    }
}));

export function NounsDecline() {
    const classes = useStyles();

    return (
        <ChapterPage>
            <h2 className={"text-center"}>1.3 Nouns decline</h2>
            <div>
                <p>
                    Nouns in Arabic decline,
                    meaning that the last vowels change based on the function of the noun in the sentence.

                    Example:
                </p>

                <Paper elevation={2} className={classes.paper}>
                    <ul>
                        <li className={classes.list}>
                            <ArMd className={classes.highlighted}>مُحَمَّدٌ</ArMd><ArMd> رَسُولُ اللَّهِ</ArMd>
                        </li>
                        <li className={classes.list}>
                            <ArMd>أَشْهَدُ أَنَّ </ArMd>
                            <ArMd className={classes.highlighted}>مُحَمَّدًا </ArMd>
                            <ArMd>عَبْدُهُ وَ رَسُولُهُ</ArMd>
                        </li>
                        <li className={classes.list}>
                            <ArMd>اَللَّهُمَّ صَلِّي عَلَى </ArMd>
                            <ArMd className={classes.highlighted}>مُحَمَّدٍ</ArMd>
                        </li>
                    </ul>
                </Paper>
            </div>
        </ChapterPage>
    );
}
