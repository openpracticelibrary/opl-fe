import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  teamHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
  },
  paraSpacer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
  },
}));

const FindMentor = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        data-testid="pageGrid"
        container
        direction="row"
        className={classes.pageWrapper}
      >
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.teamHeader} data-testid="findMentor">
          <Typography variant={"h1"}>
            {props.header}
          </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={4}>
          <Typography variant={"body1"}>
            {props.bodyPara}
          </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={6}>
          <Link href={props.linkTarget}>
            <img src={props.logo} alt="Logo" width="400rem"/>
          </Link>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <Link href={props.linkTarget}>
            <Typography variant="body1">
              {props.linkIcon}&nbsp;&nbsp;{props.linkText}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
};

export default FindMentor;
