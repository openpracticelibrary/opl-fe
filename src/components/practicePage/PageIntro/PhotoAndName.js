import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import {UserIcon} from "../../../assets/icons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  space: {
    paddingRight: theme.spacing(3),
  },
}));

export default function PhotoAndName(props) {
  const classes = useStyles();

  return (
      <>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.space}
            spacing={1}
        >
          <Grid item>
            <UserIcon/>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {props.authorName}
            </Typography>
          </Grid>
        </Grid>
      </>
  );
}
