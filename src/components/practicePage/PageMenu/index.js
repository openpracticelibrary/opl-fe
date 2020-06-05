import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: theme.spacing(2, 0),
  },
  wrapBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
  },
  pageNavButton: {
    display: "inline-block",
    borderRadius: "16.5px",
    "&:focus": {
      backgroundColor: theme.palette.common.white,
    },
  },
  url: {
    fontSize: "12px",
    fontWeight: "SemiBold",
    textAlign: "center",
    lineHeight: 2.42,
    color: theme.palette.common.brownish_grey,
    paddingRight: theme.spacing(2),
  },
}));

const sections = [
  {title: "What is it", ref: "whatIsRef"},
  {title: "Media", ref: "mediaRef"},
  {title: "Why do it", ref: "whyDoRef"},
  {title: "How to", ref: "howToRef"},
  {title: "Resources", ref: "resourceRef"},
  {title: "AMA", ref: "amaRef"},
];

export default function PageMenu(props) {
  const classes = useStyles();

  const handleClick = (ref) => {
    props[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Box className={classes.root}>
        <Toolbar component="nav" variant="dense" disableGutters>
          <Box classes={classes.wrapBox}>
            {sections.map((section, i) => (
              <Button
                key={i}
                onClick={() => handleClick(section.ref)}
                className={classes.pageNavButton}
              >
                <Typography
                  align="center"
                  className={classes.url}
                  variant={"overline"}
                >
                  {section.title}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
