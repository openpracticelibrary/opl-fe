import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterList from "./FooterList";
import Grid from "@material-ui/core/Grid";
import Disclaimer from "./Disclaimer";
import { BetaIcon, PodIcon } from "../../../assets/icons";

const iconColor = "#1975ff";

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
  { title: "JOIN BETA", url: "#", icon: <BetaIcon fill={iconColor} /> },
  { title: "PODCAST", url: "#", icon: <PodIcon width="15px" height="15px" fill={iconColor} /> },
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
          <Grid item>
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
