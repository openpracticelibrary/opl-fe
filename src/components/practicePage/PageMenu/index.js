import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 68,
    minWidth: 1150,
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(1),
  },
  url: {
    color: theme.palette.common.brownish_grey,
    paddingRight: theme.spacing(2),
  },
}));

const sections = [
  {title: "What is it", url: "#"},
  {title: "Media", url: "#"},
  {title: "Why do it", url: "#"},
  {title: "How to", url: "#howto"},
  {title: "Resources", url: "#"},
  {title: "AMA", url: "#"},
];

export default function PageMenu() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Toolbar component="nav" variant="dense">

          {sections.map((section, i) => (
            <Link
              key={i}
              href={section.url}
              className={classes.url}
              variant={"overline"}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Box>
    </>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
