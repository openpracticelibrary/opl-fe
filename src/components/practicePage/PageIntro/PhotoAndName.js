import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { UserIcon } from "../../../assets/icons";
import { Typography, Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  space: {
    paddingRight: theme.spacing(3),
    minWidth: "fit-content",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "transparent",
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
          <Avatar src={props.avatar} className={classes.small}>
            <UserIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="body1" data-testid={"authorName"}>{props.authorName}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
