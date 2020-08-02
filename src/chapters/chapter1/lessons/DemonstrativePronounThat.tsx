import React from "react";
import {WithStyles, List, ListItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import {styles} from "../../../styles";
import SectionPage from "../../../components/SectionPage";
import {ArSm, ArMd} from "../../../components/ArabicText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export function DemonstrativePronounThat({classes}: WithStyles<typeof styles>) {
    return (
        <SectionPage>
            <h2>1.7 Demonstrative Pronoun: "THAT"</h2>
            <div>
                <p>In this section we will learn about a new <i>demonstrative pronoun</i> <ArSm>ذَلِكَ</ArSm> meaning "that".
                Previously, we had learned about <ArSm>هَذَا</ArSm> ("this").
                Recall that the Arabic name for demonstrative pronoun is <ArSm>اِسْمُ الْإِشَارَةِ</ArSm>.
                </p>
                <p>
                    Now we can make the distinction between the two. Consider that the demonstrative pronoun "this" in English is used
                    to point out ('demonstrate') something nearby. Whereas the demonstrative pronoun "that" is used to point out something
                    further away. In arabic, the former is called <ArSm>اِسْمُ الْإِشَارَةِ لِالْقَرِيبِ</ArSm> (demonstrative pronoun for the nearby), and the latter group is called
                    <ArSm>اِسْمُ الْإِشَارَةِ لِالْبَعِيدِ</ArSm> (demonstrative pronoun for the distant). See the overview below.
                </p>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Demonstrative Pronoun</TableCell>
                                <TableCell >for the nearby</TableCell>
                                <TableCell >for the far</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><ArMd>اِسْمُ الْإِشَارَة</ArMd></TableCell>
                                <TableCell ><ArMd>لِالْقَرِيبِ</ArMd></TableCell>
                                <TableCell ><ArMd>لِالْبَعِيد</ArMd></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    English
                                </TableCell>
                                <TableCell >THIS</TableCell>
                                <TableCell >THAT</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Arabic
                                </TableCell>
                                <TableCell ><ArMd>هَذَا</ArMd></TableCell>
                                <TableCell ><ArMd>ذَلِكَ</ArMd></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>
                    Notice that the usage of <ArSm>ذَلِكَ</ArSm> is similar to that of <ArSm>هَذَا</ArSm>.
                    They are both nouns <ArSm>(اِسم)</ArSm>, consider the following example.
                </p>
                <Paper elevation={3} className={`${classes.mxy} ${classes.pxy}`}>
                    <div>
                        <span className={`${classes.blue} ${classes.bold}`}>This </span>
                        <span>is a mosque, and </span>
                        <span className={`${classes.red} ${classes.bold}`}>that </span>
                        <span className={classes.mr}>is a house.</span>
                        <ArMd className={`${classes.blue} ${classes.bold}`}>هَذَا </ArMd>
                        <ArMd>مَسجِدٌ وَ </ArMd>
                        <ArMd className={`${classes.red} ${classes.bold}`}>ذَلِكَ </ArMd>
                        <ArMd>بَيتٌ</ArMd>
                    </div>
                </Paper>
                Notice that the above sentence practically contains two sentences combined: <i>"This is a mosque"</i> and <i>"That is a house"</i>.
                They are combined by the particle <ArSm>وَ </ArSm>, (meaning <i>"and"</i>) placed in between the sentences. In English this is called a <b>conjunction</b>.
                In Arabic, it is called <ArSm>حَرفُ عَطْف</ArSm>. Later on in the course, we will repeat this material in more detail.
            </div>

            <h4>Practice the following example sentences</h4>
            <Grid
                container
                justify={"center"}
                alignItems={"center"}
            >
                <Grid item lg={10} sm={12} justify="center" alignContent="center" >
                    <Paper elevation={2} className={classes.paper}>
                        <List>
                            <ListItem>
                                <div>
                                    <span className={classes.mr}>What is that?</span>
                                    <ArMd>مَا ذَلِكَ؟</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>That is a star.</span>
                                    <ArMd>ذَلِكَ نَجْمٌ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>This is a horse and that is a donkey.</span>
                                    <ArMd className={classes.floatRight}>هَذَا حِصَانٌ وَ ذَلِكَ حِمَارٌ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>
                                        Is that a dog? No. That is a kitten.
                                    </span>
                                    <ArMd className={`${classes.floatRight}`}>أَذَلِكَ كَلبٌ؟ لَا. ذَلِكَ قِطٌّ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <span className={classes.mr}>
                                        What is that?
                                    </span>
                                    <ArMd className={`${classes.floatRight}`}>مَا ذَلِكَ؟</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>
                                        That is a bed.
                                    </span>
                                    <ArMd className={`${classes.floatRight}`}>ذَلِكَ سَرِيرٌ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <span className={classes.mr}>
                                        Who is this and who is that?
                                    </span>
                                    <ArMd className={`${classes.floatRight}`}>مَنْ هَذَا وَ مَنْ ذَلِكَ؟</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>
                                        This is a teacher and that is an imam.
                                    </span>
                                    <ArMd className={`${classes.floatRight}`}>هَذَا مُدَرِّسٌ وَ ذَلِكَ إِمَامٌ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <span className={classes.mr}>
                                        What is that?
                                    </span>
                                    <ArMd className={classes.floatRight}>مَا ذَلِكَ؟</ArMd>
                                </div>
                            </ListItem>
                            <ListItem className={classes.mb}>
                                <div>
                                    <span className={classes.mr}>
                                        That is a stone.
                                    </span>
                                    <ArMd className={classes.floatRight}>ذَلِكَ حَجَرٌ</ArMd>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <span className={classes.mr}>
                                        This is a sugar and that is a milk.
                                    </span>
                                    <ArMd className={classes.floatRight}>هَذَا سُكَّرٌ  وَذَلِكَ لَبَنٌ</ArMd>
                                </div>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </SectionPage>
    )
}