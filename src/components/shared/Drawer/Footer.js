import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterList from "./FooterList";
import Grid from "@material-ui/core/Grid";
import Disclaimer from "./Disclaimer";
import { BetaIcon, NewTabIcon, RockIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3),
    marginTop: "auto",
    color: theme.palette.common.brownish_grey,
  },
  space: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "ABOUT US", url: "#", icon: <RockIcon /> },
  { title: "JOIN BETA", url: "#", icon: <BetaIcon /> },
  { title: "MEETUP", url: "#", icon: <NewTabIcon /> },
  { title: "GITHUB", url: "#", icon: <NewTabIcon /> },
  { title: "PODCAST", url: "#", icon: <NewTabIcon /> },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-start"
      >
        {sections.map((section) => (
          <Grid item key={section.title}>
            <FooterList link={section.url} text={section.title}>
              {section.icon}
            </FooterList>
          </Grid>
        ))}

        <Grid item className={classes.space}>
          <Disclaimer />
        </Grid>
      </Grid>
    </footer>
  );
}
