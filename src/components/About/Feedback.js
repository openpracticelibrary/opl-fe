import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import { Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { navigate } from "@reach/router";
import GrayRain from "../../assets/icons/rain.svg";
import FeedbackIcon from "../../assets/icons/about-feedback.png"

const useStyles = makeStyles((theme) => ({
  feedbackBox: {
    display: "flex",
    alignContent: "flex-start",
    textAlign: "left",
    width: "80%",
    flexWrap: "wrap",
  },
  feedback: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(0deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`,
    width: "100%",
    height: "500px"
  },
  feedbackButton: {
    borderRadius: "32px",
    width: "15rem",
    backgroundColor: "#ffffff",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  learn: {
    textAlign: "left",
    fontWeight: "normal",
    paddingTop: theme.spacing(6),
  },
  feedbackIcon: {
    display: "flex",
    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 4),
  },
}));

const Feedback = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.feedback}
    >
      <Grid item xs={1}/>
      <Grid item xs={1}>
        <Box className={classes.feedbackIcon}>
          <img src={FeedbackIcon} alt="Feedback" />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box className={classes.feedbackBox}>
          <Box>
            <Typography variant={"h1"} data-testid="feedbackMsg">
              {props.header}
            </Typography>
            <Typography variant={"h5"} className={classes.learn}>
              {props.subheader}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Button
            variant="contained"
            disableElevation
            className={classes.feedbackButton}
            onClick={() => navigate(props.buttonTarget)}
          >
            {props.buttonText}&nbsp;{props.buttonIcon}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Feedback;
