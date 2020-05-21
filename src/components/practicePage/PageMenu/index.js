import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    overflowX: "auto",
    paddingLeft: theme.spacing(9),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
}));

const sections = [
  { title: "What is it", url: "#whatis" },
  { title: "Media", url: "#" },
  { title: "Why do it", url: "#" },
  { title: "How to", url: "#howto" },
  { title: "Resources", url: "#" },
  { title: "AMA", url: "#" },
];

export default function PageMenu() {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section, i) => (
          <Link
            key={i}
            href={section.url}
            className={classes.toolbarLink}
            variant={"overline"}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Divider />
    </>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
