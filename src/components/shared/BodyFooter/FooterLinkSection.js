import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FooterIconSection from "./FooterIconSection";
//import Link from "@material-ui/core/Link";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  space: {
    padding: theme.spacing(2),
  },
  color: {
    color: theme.palette.common.black,
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
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="overline"
                data-testid="connect"
                className={classes.connect}
              >
                Connect with us!
              </Typography>
            </Grid>
            <Grid item>
              <FooterIconSection />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={5}
          >
            {sections.map((section, i) => (
              <Grid item key={i}>
                <Typography
                  variant="overline"
                  className={classes.color}
                  onClick={() => navigate(section.url)}
                >
                  {section.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
