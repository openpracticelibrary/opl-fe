import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  space: {
    padding: theme.spacing(2),
  },
  color: {
    color: theme.palette.common.black,
  }}
));

const sections = [
  { title: "PRIVACY", url: "#" },
  { title: "TERMS", url: "#" },
  { title: "POLICIES", url: "#" },
  { title: "HELP", url: "#" },
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
          <Typography variant="overline">
            CONNECT
          </Typography>
        </Grid>
        <Grid item>
          {sections.map((section, i) => (
            <Link
              key={i}
              href={section.url}
              className={classes.space}
            >
              <Typography variant="overline" className={classes.color}>
                {section.title}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
