import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";

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
