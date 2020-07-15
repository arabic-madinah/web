import Grid from "@material-ui/core/Grid";
import React from "react";

export default function ChapterPage ({children}) {
    return (
        <Grid
            container
            xl={12}
            direction="column"
            alignItems="flex-start"
            style={{marginBottom: "45px"}}>
            {children}
        </Grid>
    )
}
