import React from "react";
import SectionPage from "../../../components/SectionPage";
import {ArMd, ArSm} from "../../../components/ArabicText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

export function QuestionWhoIsThis({classes}: any) {
    return (
        <SectionPage>
            <h2>Asking a Question: "Who is This?"</h2>
            <div>
                <p>All nouns in Arabic can be classified into two categories: <ArSm>عَاقِل</ArSm> (things with intellect),
                    and  <ArSm> غَيْر عَاقِل</ArSm> (things without intellect, like objects, animals etc.).
                    In the previous section, we have already seen the former being applied, where we use the noun <ArSm> مَا</ArSm> when asking about it.
                    In this section, we will learn about the latter, where we will use the noun <ArSm> مَنْ</ArSm>, meaning "who".
                </p>
                <p>
                    The group of beings with intellect <ArSm>(عَاقِل)</ArSm> consists of three, These are:
                </p>
                <ul>
                    <li>Humans</li>
                    <li>Angels</li>
                    <li>Djinns</li>
                </ul>
                <p>When you refer to any of these, you have to use <ArSm> مَنْ</ArSm> ("who"). In all other cases, you use  <ArSm> مَا</ArSm> ("what").
                    Example:
                </p>

                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={8} sm={12} justify="center" alignContent="center" >
                        <Paper elevation={2} className={classes.paper}>
                            <List>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Who is this?</span>
                                        <ArMd>مَنْ هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div><i>a response could be:</i></div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>This is a doctor.</span>
                                        <ArMd>هَذَا طَبِيبٌ</ArMd>
                                    </div>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </SectionPage>
    )
}