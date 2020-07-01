import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles((theme) => ({
  teamHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(1),
  },
  paraSpacer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
}));

const ProcessModel = (props) => {
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
        <Grid item xs={11} className={classes.teamHeader} data-testid="processModel">
          <Typography variant={"h1"}>
            {props.header}
          </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <Typography variant={"body1"}>
            {props.bodyPara1}
          </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <VideoPlayer videoUrl={props.videoUrl}/>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <Link href={props.mobiusLinkRef}>
            <Typography variant="body1">
              {props.mobiusLinkIcon} {props.mobiusLinkText}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <Typography variant={"body1"}>
            {props.bodyPara2}
          </Typography> 
        </Grid>
      </Grid>
    </>
  )
};

export default ProcessModel;
