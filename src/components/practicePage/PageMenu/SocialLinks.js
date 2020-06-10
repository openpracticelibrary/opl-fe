import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import linkedinIcon from "../../../assets/images/li-in-bug.png";
import { TwitterShareButton, LinkedinShareButton } from "react-share";
import { TwitterIcon, MoreItemsIcon, FilledHeartIcon } from "../../../assets/icons";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import {useMutation} from "@apollo/react-hooks";
import {LIKE_PRACTICE} from "../../../graphql/";

const useStyles = makeStyles((theme) => ({
  url: {
    fontSize: "12px",
    fontWeight: "SemiBold",
    textAlign: "center",
    lineHeight: 2.42,
    color: theme.palette.common.brownish_grey,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));


export default function SocialLinks(props) {
  const classes = useStyles();
  
  const [likePractice] = useMutation(LIKE_PRACTICE);
  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: {practiceId: props.practiceId, upvotes: newUpvotes},
    });
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <Typography
            className={classes.url}
            variant="overline"
          >
            LIKE
          </Typography>
          <IconButton onClick={handleLike} className={classes.button} data-testid={"heartIcon"}>
            <FilledHeartIcon/>
          </IconButton>
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