import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  space: {
    marginLeft: theme.spacing(1),
  },
}));

export default function CollectionItem(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.space}
      >
        <Grid item>{props.children}</Grid>
        <Grid item>
          <Typography variant="body1" className={classes.space}>
            {props.amount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
