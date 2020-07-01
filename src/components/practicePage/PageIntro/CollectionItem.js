import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  layout: {
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
  },
  space: {
    marginLeft: theme.spacing(1),
  },
}));

export default function CollectionItem(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.layout}>
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
