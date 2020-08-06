import React from "react";
import SectionPage from "../../../components/SectionPage";
import {ArSm} from "../../../components/ArabicText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../../styles";

export function PartsOfSpeech({classes}: WithStyles<typeof styles>) {
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
        </SectionPage>
    )
}
