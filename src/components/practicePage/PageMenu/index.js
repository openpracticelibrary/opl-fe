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
        <Toolbar
          component="nav"
          variant="dense"
          disableGutters
        >
          <Grid
            container
            direction="row"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}
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
