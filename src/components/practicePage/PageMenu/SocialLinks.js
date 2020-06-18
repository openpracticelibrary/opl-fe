import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { EmailShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { TwitterIcon, MoreItemsIcon, NounLoveIcon, LinkedInIcon, EmailIcon } from "../../../assets/icons";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
  },
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
        className={classes.root}
        spacing={1}
      >
        <Grid item xs={3}>
          <Typography
            className={classes.url}
            variant="overline"
          >
            Like
          </Typography>
          <IconButton onClick={handleLike} data-testid={"heartIcon"}>
            <NounLoveIcon/>
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            className={classes.url}
            variant="overline"
          >
            Share{" "}
          </Typography>
        </Grid>
        <Grid item>
          <EmailShareButton url={window.location.href}>
            <EmailIcon height="15" width="20" />
          </EmailShareButton>
        </Grid>
        <Grid item>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon fill="#1DA1F2" height="14" width="18" />
          </TwitterShareButton>
        </Grid>
        <Grid item>
          <LinkedinShareButton url={window.location.href}>
            <LinkedInIcon />
          </LinkedinShareButton>
        </Grid>
        <Grid item>
          <MoreItemsIcon />
        </Grid>
      </Grid>
    </>
  );
}
