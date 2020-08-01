import React from "react";
import SectionPage from "../../../components/SectionPage";
import Paper from "@material-ui/core/Paper";
import {ArMd} from "../../../components/ArabicText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

export function NounsDecline({classes}: any) {

    return (
        <SectionPage>
            <h2 className={"text-center"}>1.3 Nouns decline</h2>
            <div>
                <p>
                    Nouns in Arabic decline,
                    meaning that the last vowels change based on the function of the noun in the sentence.

                    Example:
                </p>

                <Grid
                    container
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item lg={8} sm={12} justify="center" alignContent="center" >
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
                    </Grid>
                </Grid>
                <p>
                    The last vowel sign will tell you the function of the noun in the sentence.
                    Nouns can be categorized into three cases. These are the three summarized below:
                </p>

                <Grid container justify="center" alignItems="center">
                    <Grid item lg={8} sm={12} justify="center" alignContent="center">
                        <Paper elevation={2} className={classes.paper}>
                            <span>Nominative case</span>
                            <ArMd className={classes.highlighted}> ـُ</ArMd><ArMd> مَرْفُوعٌ</ArMd>
                        </Paper>
                        <Paper elevation={2} className={classes.paper}>
                            <span>Accusative case</span>
                            <ArMd className={classes.highlighted}> ـَ</ArMd><ArMd> مَنْصُوبٌ</ArMd>
                        </Paper>
                        <Paper elevation={2} className={classes.paper}>
                            <span>Genitive case</span>
                            <ArMd className={classes.highlighted}> ـِ</ArMd><ArMd> مَجْرُورٌ</ArMd>
                        </Paper>
                    </Grid>
                </Grid>

                <p>The vowel sign can of course also be doubled to indicate the indefinite article
                     (like <b>a/an</b> in English).</p>
                <p>
                    Later on in this course we will be familiarized with the function and meaning of 
                    each of these  cases, but for now we will just be introduced to their existence.
                </p>
            </div>
        </SectionPage>
    );
}
