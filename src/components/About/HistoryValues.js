import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.common.true_white,
  },
  historyValuesHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(3),
  },
  valuesBox: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(2),
  },
  attributeBox: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
    height: "340px",
    width: "330px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#00cc99",
    borderWidth: "1px",
    boxShadow: "2px 2px 8px 0 rgba(0,0,0,0.1)",
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
  circleHeader: {
    fontFamily: "Quicksand",
    fontSize: "40px",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: "1.67",
    color: theme.palette.common.discovery_blue,
  },
  circleBody: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: "1.33",
    color: "#9fa4a3",
  },
  paraBody: {
    paddingBottom: theme.spacing(2),
  }
}));

const HistoryValues = (props) => {
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
        <Grid item xs={11} className={classes.historyValuesHeader} data-testid="historyValuesHeader">
          <Typography variant={"h1"}>
            {props.header}
          </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11}>
          <Typography variant={"body1"} className={classes.paraBody}>
            {props.bodyPara1}
          </Typography>
          <Box className={classes.valuesBox}>
            <Box className={classes.attributeBox}>
              <img src={props.circleIcon1} alt={props.circleTitle1}/>
              <Typography className={classes.circleHeader}>{props.circleTitle1}</Typography>
              <Typography className={classes.circleBody}>{props.circleText1}</Typography>
            </Box>
            <Box className={classes.attributeBox}>
              <img src={props.circleIcon2} alt={props.circleTitle2}/>
              <Typography className={classes.circleHeader}>{props.circleTitle2}</Typography>
              <Typography className={classes.circleBody}>{props.circleText2}</Typography>
            </Box>
            <Box className={classes.attributeBox}>
              <img src={props.circleIcon3} alt={props.circleTitle3}/>
              <Typography className={classes.circleHeader}>{props.circleTitle3}</Typography>
              <Typography className={classes.circleBody}>{props.circleText3}</Typography>
            </Box>
          </Box>
          <Typography variant={"body1"}>
            {props.bodyPara2}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
};

export default HistoryValues;
