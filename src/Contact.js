import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function Contact() {
    return (
        <Container maxWidth={"md"}>
            <Grid
                container
                xl={8}
                direction="column"
                alignItems="center"
            >
                <div>
                    <p>
                        This website is built with React.js and its source is hosted publicly
                        on <a target="_blank" rel="noopener noreferrer" href="https://github.com/AjdinHusic/arabic-madinah" >github.com/AjdinHusic/arabic-madinah</a>.
                    </p>
                    <p>
                        Any contributions are welcome and deeply appreciated. You can contribute
                        by means of a pull request on GitHub.

                        For any site feedback or feature requests, you can add a
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AjdinHusic/arabic-madinah/issues"> new Issue on my github page. </a>

                        If you would like to collaborate with me on this site, you can contact me directly via
                        my GitHub page: <a target="_blank" rel="noopener noreferrer" href="https://github.com/AjdinHusic">github.com/AjdinHusic</a>.

                    </p>
                </div>
            </Grid>
        </Container>
    );
}
