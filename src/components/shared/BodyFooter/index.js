import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterLogoSection from "./FooterLogoSection";
import FooterLinkSection from "./FooterLinkSection";
import Box from '@material-ui/core/Box';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: theme.spacing(6, 0)
  },
}));

export default function BodyFooter() {
  const classes = useStyles();

  return (
    <>
      <Divider/>
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Box display="flex">
              <Box flexShrink={1}>
                <FooterLogoSection/>
              </Box>
              <Box width="100%">
                <FooterLinkSection/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
