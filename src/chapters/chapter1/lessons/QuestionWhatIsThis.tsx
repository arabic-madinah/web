import React from "react";
import SectionPage from "../../../components/SectionPage";
import { ArSm, ArMd } from "../../../components/ArabicText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {List, ListItem, WithStyles} from "@material-ui/core";
import {styles} from "../../../styles";

export function QuestionWhatIsThis({classes}: WithStyles<typeof styles>) {

    return (
        <SectionPage>
            <h2>1.5 Asking a Question: "What is This?"</h2>
            <div>
                <p>The word <ArSm>مَا</ArSm> in Arabic is used for asking questions. It's meaning is "what".
                    In this section we will learn about the usage of <ArSm>مَا هذا؟</ArSm> meaning "what is this?".
                    Again, notice that the English copular verb "is" is not present in Arabic. Rather it is understood to mean
                    "What is this?", instead of "What this?".
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
                                        <span className={classes.mr}>What is this?</span>
                                        <ArMd>مَا هذا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>This is a house</span>
                                        <ArMd>هَذَا بَيتٌ</ArMd>
                                    </div>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                The above sentence "This is a house" or <ArSm>هَذَا بَيتٌ</ArSm> is a <b>statement</b>.
                But how can we turn this into a question?
                We can do that by simply adding the particle <ArSm>أَ</ArSm> in front of the statement.

                Consider the following example.

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
                                        <span className={classes.mr}>Is this a house?</span>
                                        <ArMd>أَهَذَا بَيتٌ؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Yes. This is a house.</span>
                                        <ArMd> نَعَم. هَذَا بَيتٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <b>OR</b>
                                </ListItem>
                                <ListItem>
                                    <span className={classes.mr}>No. This is a mosque.</span>
                                    <ArMd>لَا.هَذَا مَسْجِدٌ</ArMd>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <p>
                    The words <ArSm>نَعَم</ArSm> and <ArSm>لَا</ArSm> are <b>particles</b> <ArSm>(حَرفٌ)</ArSm>.
                    Specifically, these two particles are called <ArSm>حَرْفُ الْجَوَابِ</ArSm> (particles of answering).

                    You don't need to worry about the terminology too much at this point. Just be aware of it, later on
                    we will get back to it in more detail.
                </p>

                <h3>Practice</h3>
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
                                        <span className={classes.mr}>What is this?</span>
                                        <ArMd>مَا هذا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a shirt.</span>
                                        <ArMd>هَذَا قَمِيصٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <span className={classes.mr}>Is this a bed?</span>
                                    <ArMd>أهَذَا سَرِيرٌ؟</ArMd>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <span className={classes.mr}>No. this is a chair.</span>
                                    <ArMd>لَا. هَذَا كُرسِيٌّ</ArMd>
                                </ListItem>
                                <ListItem>
                                    <span className={classes.mr}>Is this a key?</span>
                                    <ArMd>أَ هَذَا  مِفتَاحٌ؟</ArMd>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <span className={classes.mr}>No. this is a pen.</span>
                                    <ArMd>لَا. هَذَا قَلَمٌ</ArMd>
                                </ListItem>
                                <ListItem>
                                    <span className={classes.mr}>What is this?</span>
                                    <ArMd>مَا هذا؟</ArMd>
                                </ListItem>
                                <ListItem>
                                    <span className={classes.mr}>This is a star.</span>
                                    <ArMd>هَذَا نَجمٌ</ArMd>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </SectionPage>
    )
}