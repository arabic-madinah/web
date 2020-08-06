import React from "react";
import SectionPage from "../../../components/SectionPage";
import { ArSm, ArMd } from "../../../components/ArabicText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {List, WithStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import {styles} from "../../../styles";

export function DemonstrativePronounThis({classes}: WithStyles<typeof styles>) {

    return (
        <SectionPage>
            <h2>1.4 Demonstrative Pronoun 'THIS'</h2>
            <div>
                <p>
                    In this section we will learn about the <i>demonstrative pronoun</i> <ArSm>هَـٰذَا</ArSm> meaning "<i>this</i>".
                    This pronoun is part of the group of <b>nouns</b> in Arabic.
                </p>
                <p>
                    Note that <ArSm>هذا</ArSm> is actually pronounced as <ArSm>هَاذَا</ArSm>, (with the long a-sound),
                    but the first alif is not written.
                </p>
                <p>
                    A demonstrative pronoun in Arabic is called <ArSm>اِسْمُ الْإِشَارَةِ</ArSm>.
                    Consider the following sentences using the word <ArSm>هذا</ArSm>.
                </p>

                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={8} sm={12}>
                        <Paper elevation={2} className={classes.paper}>
                            <List>
                                <ListItem>
                                    <div>
                                        <span className={classes.blue}>This</span> 
                                        <span> is </span>
                                        <span className={classes.red}> a house </span>
                                        <span className={classes.mr}>:</span>
                                    </div>
                                    <div>
                                        <ArMd className={classes.blue}>هذَا </ArMd>
                                        <ArMd className={classes.red}>بَيتٌ</ArMd>
                                    </div>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <p>
                    If we consider the above sentence, we see that both the words "this" and "a house" are present in Arabic.
                    However, we don't see anything similar to the english verb "is". The literal translation seem to be "This a house".
                </p>
                <p> In english the verb <b>to be</b> ("is", "are", "am") is called a <i>copular verb (linking verb)</i>.
                    It means that this verb essentially links two nouns together.
                </p>
                <p>
                    In arabic, such a verb as "is" does not exist and there is no need for it.
                    Even though the Arabic sentence above consists only of two nouns, it is a complete and understandable sentence in Arabic.
                </p>

                <p>Some more example sentences to be practised are shown below</p>

                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={8} sm={12}>
                        <Paper elevation={2} className={classes.paper}>
                            <List>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a door</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا بَابٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a pen</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا قَلَمٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a book</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا كِتَابٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a key</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا مِفتَاحٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a desk</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا مَكتَبٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a bed</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا سَرِيرٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>this is a chair</span>
                                    </div>
                                    <div>
                                        <ArMd>هذا كُرسِيٌّ</ArMd>
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