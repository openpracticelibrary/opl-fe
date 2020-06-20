import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterLogoSection from "./FooterLogoSection";
import FooterLinkSection from "./FooterLinkSection";
import Box from '@material-ui/core/Box';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
  },
  trueWhiteColor: {
    backgroundColor: theme.palette.common.true_white,
  }
}));

export default function BodyFooter() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.trueWhiteColor}>
        <Divider/>
        <footer className={classes.footer} data-testid="footer">
          <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
              <Box display="flex">
                <Box flexShrink={1}>
                  <FooterLogoSection/>
                </Box>
                <Box width="100%">
                  <FooterLinkSection/>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </footer>
      </Box>
    </>
  );
}
