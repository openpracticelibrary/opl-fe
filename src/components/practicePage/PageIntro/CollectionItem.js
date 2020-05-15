import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    marginLeft: theme.spacing(2),
    color: theme.palette.common.brown_grey,
  },
}));

export default function CollectionItem(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.wrapIcon}>
        {props.children}
        <Typography variant="body1">{props.amount}</Typography>
      </Box>
    </>
  );
}
