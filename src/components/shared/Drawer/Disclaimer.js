import React from 'react';
import Typography from '@material-ui/core/Typography';
import {CCHeartIcon} from '../../../assets/icons/index';
import disclaimerIcon from '../../../assets/icons/noun-project@3x.png';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles(() => ({
  space: {
    lineHeight: '0.5rem',
    whiteSpace: 'normal'
    
  }
}));

export default function Disclaimer() {
  const classes = useStyles();

  return (
      <>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            spacing={1}
        >
          <Grid item className={classes.space}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
              <Grid item>
                <CCHeartIcon/>
              </Grid>
              <Grid item>
                <img src={disclaimerIcon} height='8px' width='26px'/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} className={classes.space}>
            <Typography variant="caption">
              {"Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project."}
            </Typography>
          </Grid>
        </Grid>
      </>
  );
}
