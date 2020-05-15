import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { AmaIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    alignItems: "centre",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  smallText: {
    color: theme.palette.text.light_grey,
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
  },
}));

export default function Collection(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.row}>
          <Typography className={classes.smallText} variant="overline">
            Collection
          </Typography>
          <Box>
            <Typography variant="subtitle1">
              <Box className={classes.wrapIcon}>
                <FavoriteIcon color="disabled" onClick={props.handleLike} />
                {props.upvotes}
              </Box>
              <Box className={classes.wrapIcon}>
                <PhotoCameraIcon color="disabled" /> {props.imgCount}
              </Box>
              <Box className={classes.wrapIcon}>
                <AmaIcon color="disabled" /> {props.questions}
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
