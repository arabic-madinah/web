import React from "react";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../../styles";
import SectionPage from "../../../components/SectionPage";
import {ArMd, ArSm} from "../../../components/ArabicText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export function NominalSentences({classes}: WithStyles<typeof styles>) {
    return (
        <SectionPage>
            <h2>1.8 Nominal Sentences</h2>
            <div>
                <p>
                    A sentence is a group of words that make complete 'sense' when put together.
                    In Arabic, a sentence is called <ArSm>جُمْلَةٌ</ArSm>.
                    If the group of words don't make complete sense, it is a phrase.

                    More specifically, there are two kinds of sentences in Arabic.
                </p>
                <List>
                    <ListItem>
                        <div>
                            <span className={classes.mr}>Nominal sentences</span>
                            <ArMd className={classes.floatRight}>الجُمْلَةُ الإِسْمِيَّةُ</ArMd>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <span className={classes.mr}>Verbal sentences</span>
                            <ArMd className={classes.floatRight}>الجُمْلَةُ الفِعْلِيَّةُ</ArMd>
                        </div>
                    </ListItem>
                </List>
                <p>
                    A nominal sentence consists of two parts: a <b>subject</b> and a <b>predicate</b>.
                    The subject comprises a <i>noun</i> that the sentence is referring to, and the predicate is a
                    statement <i>about the subject</i>.
                    The subject in Arabic is called <ArSm>المُبْتَدَأُ</ArSm> (literally "the beginner"), and the predicate is called <ArSm>الخَبَرُ</ArSm> (literally "the news").
                </p>
                <p>Note that every <b>nominal</b> sentence <b>must contain</b> a subject and a predicate!</p>

                <p>A general rule about nominal sentences is that <ArSm>المُبْتَدَأُ</ArSm> (the subject) is mostly <b>definite</b>,
                    whereas <ArSm>الخَبَرُ</ArSm> (the predicate) is mostly indefinite. Example:</p>

                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={10} sm={12}>
                        <Paper elevation={2} className={classes.paper}>
                            <List>
                                <ListItem>
                                    <div>
                                        <span className={`${classes.bold} ${classes.red}`} >The man </span>
                                        <span><i>(definite)</i></span>
                                        <span> is </span>
                                        <span className={`${classes.bold} ${classes.blue}`}>a doctor </span>
                                        <span className={classes.mr}><i>(indefinite)</i>.</span>
                                        <ArMd className={`${classes.bold} ${classes.red} ${classes.floatRight}`}>الرَّجُلُ </ArMd>
                                        <ArMd className={`${classes.bold} ${classes.blue} ${classes.floatRight}`}> طَبِيبٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    but also,
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={`${classes.bold} ${classes.red}`} >Muhammad </span>
                                        <span><i>(definite)</i></span>
                                        <span> is </span>
                                        <span className={`${classes.bold} ${classes.blue}`}>a student </span>
                                        <span className={classes.mr}><i>(indefinite)</i>.</span>
                                        <ArMd className={`${classes.bold} ${classes.red} ${classes.floatRight}`}>مُحَمَّدٌ </ArMd>
                                        <ArMd className={`${classes.bold} ${classes.blue} ${classes.floatRight}`}> طَالِبٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <span style={{fontSize: "0.9rem"}}>Notice that the word <i>Muhammad </i> is a name, and all names are definite!</span>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                <p>Note that the predicate can also be an adjective, which is still a subset of nouns in Arabic.</p>
                <Paper elevation={2} className={classes.paper}>
                    <span className={classes.mr}>The pen is broken.</span>
                    <ArMd>القَلَمُ مَكْسُورٌ</ArMd>
                </Paper>

                <p>Most importantly, <ArSm>المُبْتَدَأُ</ArSm> (the subject) will <b>always</b> be <ArSm>مَرْفُوعٌ</ArSm> (nominative).
                    Recall that a noun in the nominative case ends in the Dammah vowel <ArSm> ـُ</ArSm></p>.
                Also, <ArSm>الخَبَرُ</ArSm> (the predicate) will <b>always</b> be <ArSm>مَرْفُوعٌ</ArSm>, and will for the same reason end with a Dammah <ArSm> ـُ</ArSm>.
                <h4>Practice the following sentences, and try to identify the <ArSm>مبتدأ</ArSm> and the <ArSm>خبر</ArSm> in each sentence</h4>
                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={10} sm={12}>
                        <Paper elevation={2} className={classes.paper}>
                            <List>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>The door is open.</span>
                                        <ArMd className={classes.floatRight}>البَابُ مَفْتُوحٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>The boy is sitting, and the teacher is standing.</span>
                                        <ArMd className={classes.floatRight}>الوَلَدُ جَالِسٌ وَالمُدَرِّسُ وَاقِفٌ</ArMd>
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