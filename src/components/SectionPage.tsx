import Grid from "@material-ui/core/Grid";
import React from "react";

export interface SectionProps {
    children: any,
    
}

export default function SectionPage ({children}: any) {
    return (
        <Grid
            container
            xl={12}
            direction="column"
            style={{marginBottom: "45px"}}>
            {children}
        </Grid>
    )
}
