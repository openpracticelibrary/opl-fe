import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
      footer: {
        marginTop: theme.spacing(5),
        flexGrow: 1,
      },
      toolbarLink: {
        padding: theme.spacing(2),
        flexShrink: 0,
      },
      listFont: {
        color: "#2e2e2e",
      }
    }
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
                    className={classes.toolbarLink}
                >
                  <Typography variant="overline" className={classes.listFont}>
                    {section.title}
                  </Typography>
                </Link>
            ))}
          </Grid>
        </Grid>
      </>
  );
}
