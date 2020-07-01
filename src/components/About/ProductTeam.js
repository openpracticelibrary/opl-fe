import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OPLProductTeamImage from "../../assets/images/opl-product-team.png";

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

const ProductTeam = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        data-testid="pageGrid"
        container
        direction="row"
      >
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.teamHeader} data-testid="teamHeader">
          <Typography variant={"h1"}>Our product team</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>
          <Typography variant={"body1"}>The 2020 pandemic led to forming a small Global remote product team for improving the library and delivering upon the growth strategy. This cross-functional group included product management, product design, and engineering to bring a balanced approach for continuous discovery and continuous delivery. </Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>  
          <img src={OPLProductTeamImage} alt="OPL Product Team" height="auto" width="auto" />
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>  
          <Typography variant={"body1"}>There was a focus on bringing the team together culturally and using various activities for getting to know one another. To align with a process that meets the most user needs the team based discovery practices on human-centered design methodologies with regular user feedback cycles for informing design and product decision making.</Typography> 
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={11} className={classes.paraSpacer}>  
          <Typography variant={"body1"}>The development approach included pulling from [open source technology, middleware, test-driven, Agile, devops] because... liquam id diam maecenas ultricies mi eget mauris. Odio tempor orci dapibus ultrices in. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Suspendisse faucibus interdum posuere lorem ipsum.</Typography>
        </Grid>
      </Grid>
    </>
  )
};

export default ProductTeam;
