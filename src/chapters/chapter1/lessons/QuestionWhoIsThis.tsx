import React from "react";
import SectionPage from "../../../components/SectionPage";
import {ArMd, ArSm} from "../../../components/ArabicText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {List, WithStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import {styles} from "../../../styles";

export function QuestionWhoIsThis({classes}: WithStyles<typeof styles>) {
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

                <h4>Examples to practice</h4>
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
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a student.</span>
                                        <ArMd>هَذَا طَالِبٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Who is this?</span>
                                        <ArMd>مَنْ هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a boy.</span>
                                        <ArMd>هَذَا وَلَدٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Is this a boy?</span>
                                        <ArMd>أَهَذَا وَلَدٌ؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>No. This is a man.</span>
                                        <ArMd>لَا. هَذَا رَجُلٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>What is this?</span>
                                        <ArMd>مَا هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>This is a mosque.</span>
                                        <ArMd>هَذَا مَسْجِدٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Who is this?</span>
                                        <ArMd>مَنْ هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a merchant.</span>
                                        <ArMd>تَاجِرٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Is this a dog?</span>
                                        <ArMd>أَ هَذَا كَلْبٌ؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>No. This is a kitten.</span>
                                        <ArMd>لَا. هَذَا كِطٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a donkey.</span>
                                        <ArMd>هَذَا حِمَارٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Is this a donkey?</span>
                                        <ArMd>أَ هَذَا حِمَارٌ؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>No. this is a horse.</span>
                                        <ArMd>لا. هَذَا حِصَانٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>And what is this?</span>
                                        <ArMd>وَ  مَا هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a camel.</span>
                                        <ArMd>هَذَا جَمَلٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem >
                                    <div>
                                        <span className={classes.mr}>What is this?</span>
                                        <ArMd>مَا هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a rooster.</span>
                                        <ArMd>هَذَا دِيكٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Who is this?</span>
                                        <ArMd>مَنْ هَذَا؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem className={classes.mb}>
                                    <div>
                                        <span className={classes.mr}>This is a teacher.</span>
                                        <ArMd>هَذَا مُدَرِّسٌ</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>Is this a shirt?</span>
                                        <ArMd>أ َهَذَا قَمِيصٌ؟</ArMd>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        <span className={classes.mr}>No. this is a kerchief.</span>
                                        <ArMd>لا .هَذَا مِندِيلٌ</ArMd>
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