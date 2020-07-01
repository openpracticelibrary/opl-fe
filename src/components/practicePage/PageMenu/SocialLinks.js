import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EmailShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, RedditShareButton, FacebookShareButton } from "react-share";
import { FacebookIcon, RedditIcon, PinterestIcon, TwitterIcon, MoreItemsIcon, NounLoveIcon, LinkedInIcon, EmailIcon } from "../../../assets/icons";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";
import { Typography, Grid, IconButton, Popover } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
  },
  drawerPaper: {
    borderRadius: "10px",
    borderWidth: "3px",
    borderColor: theme.palette.common.discovery_blue,
    borderStyle: "solid",
    textAlign: "center",
    padding: theme.spacing(2,4),
  },
}));

const StyledPopover = ((props) =>(
  <Popover
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}{...props} 
  />
));

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
            <LinkedInIcon/>
          </LinkedinShareButton>
        </Grid>
        <Grid item>
          <IconButton aria-describedby={id} onClick={handleClick}>
            <MoreItemsIcon/>
          </IconButton>
          <StyledPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <Grid
              container
              direction="row"
              className={classes.root}
              spacing={2}
            >
              <Grid item>
                <PinterestShareButton url={window.location.href} media={props.coverImage}>
                  <PinterestIcon/>
                </PinterestShareButton>
              </Grid>
              <Grid item>
                <RedditShareButton url={window.location.href}>
                  <RedditIcon/>
                </RedditShareButton>
              </Grid>
              <Grid item>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon/>
                </FacebookShareButton>
              </Grid>
            </Grid>
          </StyledPopover>
        </Grid>
      </Grid>
    </>
  );
}