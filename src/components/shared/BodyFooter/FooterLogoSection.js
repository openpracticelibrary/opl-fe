import React from "react";
import { Typography } from "@material-ui/core";
import logoOPL from "../../../assets/icons/open-practice-librar.png";
import logoLabs from "../../../assets/icons/logo-red-hat-open-innovation-labs-a-black-rgb.png";
import Grid from "@material-ui/core/Grid";

export default function FooterLogoSection() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <img src={logoOPL} alt="OPL"/>
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
                {`powered by`}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <img
                src={logoLabs}
                alt="Open Innovation Labs"
                height="31px"
                width="162px"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
