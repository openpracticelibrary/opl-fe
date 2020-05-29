import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import PracticeCardDetails from "./PracticeCardDetails";
import PracticeCardBase from "./PracticeCardBase";

const useStyles = makeStyles((theme) => ({
  coverImage: {
    borderRadius: 10,
    height: 181,
    width: 295,
  },
  popover: {
    pointerEvents: "none",
  }
}));

export default function PracticeCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid item className={classes.practiceListItem} sm={12} md={6} lg={4} xl={3}>
      <div
        aria-owns={open ? props.practiceId : undefined}
        aria-haspopup="true"
        data-testid="base"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <PracticeCardBase
          practiceTitle={props.practiceTitle}
          coverImage={props.coverImage}
          tags={props.tags}
          slug={props.slug}
        />
      </div>
      <Popover
        id={props.practiceId}
        data-testid="popover"
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <PracticeCardDetails
          practiceTitle={props.practiceTitle}
          coverImage={props.coverImage}
          tags={props.tags}
          slug={props.slug}
          subtitle={props.subtitle}
          ama={props.ama}
          mediaGallery={props.mediaGallery}
          upvotes={props.upvotes}
        />
      </Popover>
    </Grid>
  );
}
