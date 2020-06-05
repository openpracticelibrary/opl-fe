import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  space: {
    padding: theme.spacing(2),
  },
  color: {
    color: theme.palette.common.black,
    margin: theme.spacing(2),
  },
  connect: {
    color: theme.palette.common.black,
    fontWeight: "SemiBold",
  },
}));

const sections = [
  { title: "Practices", url: "/practice" },
  { title: "About", url: "#" },
  { title: "Latest", url: "#" },
  { title: "Terms", url: "#" },
  { title: "Help", url: "#" },
];

export default function FooterLogoSection() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item>
          <Typography variant="overline" data-testid="connect" className={classes.connect}>
            Connect with us!
          </Typography>
        </Grid>
        <Grid item>
          {sections.map((section, i) => (
            <Typography
              key={i}
              variant="overline"
              className={classes.color}
              onClick={() => navigate(section.url)}
            >
              {section.title}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
