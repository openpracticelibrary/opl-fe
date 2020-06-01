import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OPLlogo from "../../assets/icons/open-practice-librar.png";
import labsLogo from "../../assets/icons/logo-red-hat-open-innovation-labs-a-black-rgb.png";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

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

export default function BodyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item xs={5}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={1} 
          >
            <Grid item>
              <img
                src={OPLlogo}
                alt="OPL"         
              />
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={3}>
                  <Typography variant="caption">
                      powered by 
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <img
                    src={labsLogo}
                    alt="labs"
                    height="31px"
                    width="162px"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
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
        </Grid>
      </Grid>
    </footer>
  );
}
