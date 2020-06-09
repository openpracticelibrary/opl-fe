import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import linkedinIcon from "../../../assets/images/li-in-bug.png";
import { TwitterShareButton, LinkedinShareButton } from "react-share";
import { TwitterIcon, MoreItemsIcon } from "../../../assets/icons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  url: {
    fontSize: "12px",
    fontWeight: "SemiBold",
    textAlign: "center",
    lineHeight: 2.42,
    color: theme.palette.common.brownish_grey,
  },
}));


export default function SocialLinks(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={1}
      > 
        <Grid item>
          <Typography 
            className={classes.url}
            variant="overline"
          >
            LIKE 
          </Typography>  
        </Grid>  
        <Grid item>
          <Typography 
            className={classes.url}
            variant="overline"
          >
            POST :
          </Typography>
        </Grid>
        <Grid item>
          <TwitterShareButton url={window.location.href}> 
            <TwitterIcon/>
          </TwitterShareButton>
        </Grid>
        <Grid item>  
          <LinkedinShareButton url={window.location.href}>
            <img src={linkedinIcon} alt="LinkedIn"/>
          </LinkedinShareButton>
        </Grid>
        <Grid item>
          <MoreItemsIcon />
        </Grid>
      </Grid>           
    </>
  );
}
