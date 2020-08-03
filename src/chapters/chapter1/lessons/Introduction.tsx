import React from "react";
import Paper from "@material-ui/core/Paper";
import SectionPage from "../../../components/SectionPage";
import {ArSm} from "../../../components/ArabicText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../../styles";

export function Introduction({classes}: WithStyles<typeof styles>) {
    return (
        <SectionPage>
            <h1>Chapter 1: Introduction</h1>
            <h2>Prerequisites</h2>
            <div><p>These lessons assume you have mastered the Arabic <b>reading</b> and <b>writing</b>.
                If this is not the case,
                please make sure you learn how to read and write before proceeding with this course.</p>
            </div>

            <h2>1.1 Parts of Speech</h2>
            <div>In arabic, there are three <b>parts of speech</b>.
                They are:
            </div>
            <List style={{listStylePosition: "inside"}}>
                <ListItem><span className={classes.mr}>Noun</span><ArSm>اِسْمٌ</ArSm></ListItem>
                <ListItem><span className={classes.mr}>Verb</span><ArSm>فِعْلٌ</ArSm></ListItem>
                <ListItem><span className={classes.mr}>Particle</span><ArSm>حَرفٌ</ArSm></ListItem>
            </List>
            <div>
                Every Arabic word that you encounter is one of either of the three named above.
                The first part of this course will focus mainly on nouns and <b>Nominal Sentences</b> (sentences with nouns / without verbs).
                The second part will dive deeply into verbs and different tenses of the verbs,
                where we will learn to construct and recognize <b>Verbal Sentences</b>.
                By the time we get to verbs, we will be prepared very well with the nouns to obtain a good understanding.
            </div>

            <h2>1.2 Definiteness of Nouns</h2>
            <div>
                <p>
                    A noun in Arabic is either <i>definite</i> or <i>indefinite</i>. When a noun is definite,
                    it indicates that it is a reference to something known or <i>identifiable</i> in a particular context.
                </p>

                <p>
                    In English, when we say "the house" it expresses an identifiable house that we are talking about,
                    whereas when we say "a house" it does not, and can mean <i>any</i> house or simply a house
                    unknown to the audience.
                </p>

                <p>
                    This difference in English occurs when we use a definite article ("the")
                    vs an indefinite one ("a/an").
                    Similarly, there exists a definite article in Arabic to indicate a definite noun.
                </p>

                <p>
                    To determine whether a noun is definite or indefinite in Arabic, we look at the vowel signs on the last consonant.

                    If the last consonant contains double vowel signs, i.e. tanween <span className="arabic text-small">(تَنْوِين)</span>, it is indefinite.
                    Examples of indefinite nouns are
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li><b>a</b> book - <span className="arabic text-small">كِتَابٌ</span></li>
                        <li><b>a</b> pen - <span className="arabic text-small">قَلَمٌ</span></li>
                        <li><b>a</b> house - <span className="arabic text-small">بَيْتٌ</span></li>
                    </ul>
                </Paper>
                <p>
                    It the noun contains only one vowel sign, it is definite.
                    The definite article <i>"The"</i> is equivalent to the prefix <span className="arabic text-small">ال</span>
                    in Arabic, which is attached before the noun.

                    examples of definite nouns are:
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li><b>the</b> book - <span className="arabic text-small">الْكِتَابُ</span></li>
                        <li><b>the</b> house - <span className="arabic text-small">الْبَيْتُ</span></li>
                    </ul>
                </Paper>
                <p>
                    Notice the single vowel at the end denoting the definiteness of the noun.

                    An exception to the rule is with proper nouns (names).
                    They are definite and yet may contain double vowel signs:
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li>Muhammed - <span className="arabic text-small">مُحَمَّدٌ</span></li>
                        <li>Ali - <span className="arabic text-small">عَلِي</span></li>
                    </ul>
                </Paper>
                <p>
                    These are all definite nouns.
                </p>
            </div>
        </SectionPage>
    )
}
