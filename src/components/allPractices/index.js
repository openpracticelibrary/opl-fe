import React from "react";

import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import AllPracticesHero from "./AllPracticesHero";
import grayDiagonals from "../../assets/icons/graylines.svg";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "100%",
    paddingTop: 27,
    marginBottom: "75px",
    height: 'auto',
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.76) 63.23%, rgba(255,255,255,0) 100%), url(${grayDiagonals})`,
    height: "24.25rem",
    width: "100%",
    paddingLeft: theme.spacing(12),
  },
  practicesPane: {
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
    padding: theme.spacing(2, 0),
  },
}));

const Practices = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.pageWrapper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.titleBox}
        >
          <AllPracticesHero />
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid className={classes.practicePane} item xs={9}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Practices;
