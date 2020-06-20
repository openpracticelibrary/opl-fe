import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  menu: {
    justifyContent: "flex-end",
  },
  menuLinks: {
    maxWidth: "700px",
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
  },
}));

const sections = [
  {title: "What", ref: "whatIsRef"},
  {title: "Why", ref: "whyDoRef"},
  {title: "How", ref: "howToRef"},
  {title: "Look", ref: "mediaRef"},
  {title: "Links", ref: "resourceRef"},
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
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbar}
        >
          <Grid
            container
            direction="row"
            className={classes.menu}
          >
            <Grid item xs={8} className={classes.menuLinks}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                spacing={1}
              >
                {sections.map((section, i) => (
                  <Grid item key={i}>
                    <Button
                      onClick={() => handleClick(section.ref)}
                      className={classes.pageNavButton}
                    >
                      <Typography
                        className={classes.url}
                        variant="overline"
                      >
                        {section.title}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <SocialLinks
                practiceId={props.practiceId}
                upvotes={props.upvotes}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
